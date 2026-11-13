import { createHash } from 'node:crypto'
import { existsSync, lstatSync, readFileSync, readdirSync, realpathSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { parse } from 'yaml'

import { extractInstall } from './fields'
import { SECTION_NAMES, sectionName } from './sections'
import {
  DataError,
  PAYWALLS,
  RESOURCE_KINDS,
  UsageError,
  type CatalogueTool,
  type Person,
  type Resource,
  type ResourceKind
} from './schema'
import { loadSkillResources } from './skill'

export type Doc = {
  path: string
  meta: Record<string, unknown>
  body: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isWithin(parent: string, child: string): boolean {
  const pathFromParent = relative(parent, child)
  return (
    pathFromParent !== '' &&
    pathFromParent !== '..' &&
    !pathFromParent.startsWith(`..${sep}`) &&
    !isAbsolute(pathFromParent)
  )
}

function safeDocPath(root: string, doc: string): string {
  if (doc.includes('\\') || /[\u0000-\u001f\u007f]/.test(doc) || isAbsolute(doc) || /^[A-Za-z]:/.test(doc)) {
    throw new DataError('catalogue document path must be relative to catalogue/tools')
  }

  const parts = doc.split('/')
  if (
    parts.length !== 4 ||
    parts[0] !== 'catalogue' ||
    parts[1] !== 'tools' ||
    parts.slice(2).some((part) => part === '' || part === '.' || part === '..') ||
    !parts[3].endsWith('.md') ||
    parts[3] === 'README.md'
  ) {
    throw new DataError('catalogue document path must be below catalogue/tools')
  }

  const label = JSON.stringify(doc)
  const designRoot = resolve(root, 'catalogue', 'tools')
  const candidate = resolve(root, doc)
  if (!isWithin(designRoot, candidate)) {
    throw new DataError(`${label}: catalogue document path must be below catalogue/tools`)
  }

  let realDesignRoot: string
  let realDocument: string
  try {
    realDesignRoot = realpathSync(designRoot)
    realDocument = realpathSync(candidate)
  } catch {
    throw new DataError(`${label}: document is missing or cannot be resolved`)
  }

  if (realDesignRoot !== designRoot || !isWithin(realDesignRoot, realDocument)) {
    throw new DataError(`${label}: registered document resolves outside catalogue/tools`)
  }

  return realDocument
}

function splitFrontmatter(markdown: string, doc: string): { meta: Record<string, unknown>; body: string } {
  const match = markdown.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n([\s\S]*))?$/)
  if (!match) return { meta: {}, body: markdown }

  let parsed: unknown
  try {
    parsed = parse(match[1])
  } catch {
    throw new DataError(`${doc}: YAML frontmatter is invalid`)
  }

  if (parsed === null || parsed === undefined) return { meta: {}, body: match[2] ?? '' }
  if (!isRecord(parsed)) throw new DataError(`${doc}: YAML frontmatter must be a mapping`)
  return { meta: parsed, body: match[2] ?? '' }
}

function stringValue(value: unknown): string | null {
  if (typeof value === 'string') return value
  if (value instanceof Date && Number.isFinite(value.getTime())) return value.toISOString().slice(0, 10)
  return null
}

function getPaywall(value: unknown): string {
  if (typeof value !== 'string') return 'unknown'
  const normalized = value.trim().toLowerCase()
  return PAYWALLS.some((paywall) => paywall === normalized) ? normalized : 'unknown'
}

function makeResource(
  doc: string,
  sectionSlug: string,
  slug: string,
  markdown: string,
  bytes: Uint8Array,
  meta: Record<string, unknown>
): Resource {
  const name = typeof meta.name === 'string' && meta.name.trim() !== '' ? meta.name : slug
  const sourceUrl = typeof meta.source_url === 'string' && meta.source_url.trim() !== '' ? meta.source_url : null
  const lastVerified = stringValue(meta.last_verified)
  const agentFriendly = typeof meta.agent_friendly === 'boolean' ? meta.agent_friendly : null
  const openSource = typeof meta.open_source === 'boolean' ? meta.open_source : null
  const install = extractInstall(markdown)
  const section = sectionName(sectionSlug)
  if (!section) throw new DataError(`catalogue/tools/${sectionSlug}: unknown section`)

  return {
    kind: 'tool',
    id: `${sectionSlug}/${slug}`,
    name,
    section_slug: sectionSlug,
    slug,
    doc,
    source_url: sourceUrl,
    last_verified: lastVerified,
    sha256: createHash('sha256').update(bytes).digest('hex'),
    markdown,
    paywall: getPaywall(meta.paywall),
    agent_friendly: agentFriendly,
    open_source: openSource,
    meta: {
      ...meta,
      install,
      section
    }
  }
}

type ToolDocument = { doc: string; sectionSlug: string; slug: string }

function discoverToolDocs(realRoot: string): ToolDocument[] {
  const designRoot = resolve(realRoot, 'catalogue', 'tools')
  try {
    if (realpathSync(designRoot) !== designRoot) {
      throw new DataError('catalogue/tools must resolve within the catalogue root')
    }
  } catch (error) {
    if (error instanceof DataError) throw error
    throw new DataError('catalogue/tools is missing or cannot be resolved')
  }

  const documents: ToolDocument[] = []
  for (const section of readdirSync(designRoot, { withFileTypes: true })) {
    if (section.isSymbolicLink()) throw new DataError(`catalogue/tools/${section.name}: symbolic links are not allowed`)
    if (!section.isDirectory()) continue
    if (!sectionName(section.name)) throw new DataError(`catalogue/tools/${section.name}: unknown section`)

    const sectionPath = resolve(designRoot, section.name)
    if (realpathSync(sectionPath) !== sectionPath) {
      throw new DataError(`catalogue/tools/${section.name}: section resolves outside catalogue/tools`)
    }
    for (const file of readdirSync(sectionPath, { withFileTypes: true })) {
      if (file.isSymbolicLink())
        throw new DataError(`catalogue/tools/${section.name}/${file.name}: symbolic links are not allowed`)
      if (!file.isFile() || !file.name.endsWith('.md') || file.name === 'README.md') continue

      documents.push({
        doc: `catalogue/tools/${section.name}/${file.name}`,
        sectionSlug: section.name,
        slug: file.name.slice(0, -3)
      })
    }
  }

  const sectionOrder = new Map(Object.keys(SECTION_NAMES).map((slug, index) => [slug, index]))
  return documents.sort(
    (left, right) =>
      sectionOrder.get(left.sectionSlug)! - sectionOrder.get(right.sectionSlug)! || left.slug.localeCompare(right.slug)
  )
}

function loadToolResources(realRoot: string): Resource[] {
  return discoverToolDocs(realRoot).map(({ doc, sectionSlug, slug }) => {
    const documentPath = safeDocPath(realRoot, doc)
    let bytes: Uint8Array
    try {
      bytes = readFileSync(documentPath)
    } catch {
      throw new DataError(`${JSON.stringify(doc)}: document cannot be read`)
    }
    const markdown = new TextDecoder('utf-8', { ignoreBOM: true }).decode(bytes)
    const { meta } = splitFrontmatter(markdown, doc)
    return makeResource(doc, sectionSlug, slug, markdown, bytes, meta)
  })
}

function loadResearchResources(realRoot: string): Resource[] {
  const researchRoot = resolve(realRoot, 'catalogue', 'research')
  if (!existsSync(researchRoot)) return []

  let rootStat
  try {
    rootStat = lstatSync(researchRoot)
  } catch {
    throw new DataError('catalogue/research cannot be inspected')
  }
  if (rootStat.isSymbolicLink() || !rootStat.isDirectory() || realpathSync(researchRoot) !== researchRoot) {
    throw new DataError('catalogue/research must be a regular directory within the catalogue root')
  }

  const entries = readdirSync(researchRoot, { withFileTypes: true }).sort((left, right) =>
    left.name < right.name ? -1 : left.name > right.name ? 1 : 0
  )

  const resources: Resource[] = []
  for (const entry of entries) {
    const relPath = `catalogue/research/${entry.name}`
    const candidate = join(researchRoot, entry.name)
    const entryStat = lstatSync(candidate)
    if (entryStat.isSymbolicLink()) {
      throw new DataError(`${JSON.stringify(relPath)}: research document must not be a symlink`)
    }
    if (!entryStat.isFile() || !entry.name.endsWith('.md')) continue

    const realDoc = realpathSync(candidate)
    if (!isWithin(researchRoot, realDoc)) {
      throw new DataError(`${JSON.stringify(relPath)}: research document resolves outside catalogue/research`)
    }

    const bytes = readFileSync(realDoc)
    const markdown = new TextDecoder('utf-8', { ignoreBOM: true }).decode(bytes)
    const { meta } = splitFrontmatter(markdown, relPath)
    const slug = entry.name.slice(0, -3)
    const title = typeof meta.title === 'string' && meta.title.trim() !== '' ? meta.title.trim() : slug
    const summary = typeof meta.summary === 'string' ? meta.summary.trim() : ''
    const sourceUrl = typeof meta.source_url === 'string' && meta.source_url.trim() !== '' ? meta.source_url : null
    const lastVerified = stringValue(meta.last_verified)

    resources.push({
      kind: 'research',
      id: `research/${slug}`,
      name: title,
      section_slug: 'research',
      slug,
      doc: relPath,
      source_url: sourceUrl,
      last_verified: lastVerified,
      sha256: createHash('sha256').update(bytes).digest('hex'),
      markdown,
      paywall: null,
      agent_friendly: null,
      open_source: null,
      meta: {
        ...meta,
        ...(summary !== '' ? { summary } : {})
      }
    })
  }
  return resources
}

/** Load tool metadata from document paths and people data from `catalogue/people.json`. */
export function loadCatalogue(root: string): {
  tools: CatalogueTool[]
  people: Person[]
  resources: Resource[]
} {
  const resources = loadToolResources(realpathSync(resolve(root)))
  const tools: CatalogueTool[] = resources.map((resource) => ({
    name: resource.name,
    url: resource.source_url ?? '',
    description: typeof resource.meta.designeer_blurb === 'string' ? resource.meta.designeer_blurb : '',
    section: sectionName(resource.section_slug) ?? resource.section_slug,
    section_slug: resource.section_slug,
    slug: resource.slug,
    designeer_url: typeof resource.meta.designeer_url === 'string' ? resource.meta.designeer_url : undefined,
    doc: resource.doc
  }))
  return { tools, people: loadPeople(root), resources }
}

/** Load creator metadata from `catalogue/people.json`; tool identity comes from document paths. */
export function loadPeople(root: string): Person[] {
  if (typeof root !== 'string' || root.trim() === '') throw new UsageError('root must be a non-empty path')

  let value: unknown
  try {
    const realRoot = realpathSync(resolve(root))
    const peoplePath = realpathSync(resolve(realRoot, 'catalogue', 'people.json'))
    if (!isWithin(realRoot, peoplePath))
      throw new DataError('catalogue/people.json resolves outside the catalogue root')
    value = JSON.parse(new TextDecoder().decode(readFileSync(peoplePath)))
  } catch (error) {
    if (error instanceof DataError) throw error
    throw new DataError('catalogue/people.json is missing, invalid or cannot be read')
  }
  if (!isRecord(value) || !Array.isArray(value.people)) {
    throw new DataError('catalogue/people.json: expected an object with a people array')
  }
  return value.people as Person[]
}

/** Read a document under root and split YAML frontmatter from the Markdown body. Returns null if the file is missing. */
export function readDoc(root: string, relPath: string): Doc | null {
  if (typeof root !== 'string' || root.trim() === '') throw new UsageError('root must be a non-empty path')
  const realRoot = realpathSync(resolve(root))
  const path = resolve(realRoot, relPath)
  if (!isWithin(realRoot, path) || !existsSync(path)) return null
  const bytes = readFileSync(path)
  const text = new TextDecoder('utf-8', { ignoreBOM: true }).decode(bytes)
  const { meta, body } = splitFrontmatter(text, relPath)
  return { path: relPath, meta, body }
}

/** Load tool documents (and optionally research and skill entries) from root. */
export function loadResources(root: string, options: { kinds?: readonly ResourceKind[] } = {}): Resource[] {
  if (typeof root !== 'string' || root.trim() === '') throw new UsageError('root must be a non-empty path')
  const kinds = options.kinds ?? ['tool']
  for (const kind of kinds) {
    if (!RESOURCE_KINDS.includes(kind)) throw new UsageError(`unknown resource kind: ${kind}`)
  }

  let realRoot: string
  try {
    realRoot = realpathSync(resolve(root))
  } catch {
    throw new DataError('root directory is missing or cannot be resolved')
  }

  const results: Resource[] = []
  if (kinds.includes('tool')) {
    results.push(...loadToolResources(realRoot))
  }
  if (kinds.includes('research')) {
    results.push(...loadResearchResources(realRoot))
  }
  if (kinds.includes('skill')) {
    results.push(...loadSkillResources(realRoot))
  }
  return results
}

/** Load all tool, research, and skill entries from root. */
export function loadAllResources(root: string): Resource[] {
  return loadResources(root, { kinds: RESOURCE_KINDS })
}
