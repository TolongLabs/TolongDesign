import { createHash } from 'node:crypto'
import { existsSync, readFileSync, realpathSync } from 'node:fs'
import { isAbsolute, relative, resolve, sep } from 'node:path'
import { parse } from 'yaml'

import { extractInstall } from './fields'
import {
  DataError,
  PAYWALLS,
  UsageError,
  type Catalogue,
  type CatalogueTool,
  type Person,
  type Resource
} from './schema'

export type Doc = {
  path: string
  meta: Record<string, unknown>
  body: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function requiredString(record: Record<string, unknown>, key: string, location: string): string {
  const value = record[key]
  if (typeof value !== 'string' || value.trim() === '') {
    throw new DataError(`${location}: expected a non-empty string for ${key}`)
  }
  return value
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

function parseCatalogue(value: unknown): Catalogue {
  if (!isRecord(value) || !Array.isArray(value.tools)) {
    throw new DataError('catalogue/catalogue.json: expected an object with a tools array')
  }

  const tools: CatalogueTool[] = value.tools.map((tool, index) => {
    const location = `catalogue/catalogue.json tools[${index}]`
    if (!isRecord(tool)) throw new DataError(`${location}: expected an object`)

    return {
      name: requiredString(tool, 'name', location),
      url: requiredString(tool, 'url', location),
      description: requiredString(tool, 'description', location),
      section: requiredString(tool, 'section', location),
      section_slug: requiredString(tool, 'section_slug', location),
      slug: requiredString(tool, 'slug', location),
      doc: requiredString(tool, 'doc', location),
      designeer_url: typeof tool.designeer_url === 'string' ? tool.designeer_url : undefined
    }
  })

  return {
    source: typeof value.source === 'string' ? value.source : '',
    scraped: typeof value.scraped === 'string' ? value.scraped : '',
    tools,
    people: 'people' in value ? (value.people as Person[]) : []
  }
}

function readCatalogue(root: string): { realRoot: string; catalogue: Catalogue } {
  if (typeof root !== 'string' || root.trim() === '') throw new UsageError('root must be a non-empty path')

  let realRoot: string
  let catalogueBytes: Uint8Array
  try {
    realRoot = realpathSync(resolve(root))
    const cataloguePath = realpathSync(resolve(realRoot, 'catalogue', 'catalogue.json'))
    if (!isWithin(realRoot, cataloguePath)) {
      throw new DataError('catalogue/catalogue.json resolves outside the catalogue root')
    }
    catalogueBytes = readFileSync(cataloguePath)
  } catch (error) {
    if (error instanceof DataError) throw error
    throw new DataError('catalogue/catalogue.json is missing or cannot be read')
  }

  let parsedCatalogue: unknown
  try {
    parsedCatalogue = JSON.parse(new TextDecoder().decode(catalogueBytes))
  } catch {
    throw new DataError('catalogue/catalogue.json is not valid JSON')
  }

  return { realRoot, catalogue: parseCatalogue(parsedCatalogue) }
}

function safeDocPath(root: string, doc: string): string {
  if (doc.includes('\\') || /[\u0000-\u001f\u007f]/.test(doc) || isAbsolute(doc) || /^[A-Za-z]:/.test(doc)) {
    throw new DataError('catalogue document path must be relative to catalogue/tools')
  }

  const parts = doc.split('/')
  if (
    parts.length < 3 ||
    parts[0] !== 'catalogue' ||
    parts[1] !== 'tools' ||
    parts.slice(2).some((part) => part === '' || part === '.' || part === '..')
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
    throw new DataError(`${label}: registered document is missing or cannot be resolved`)
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
  entry: CatalogueTool,
  markdown: string,
  bytes: Uint8Array,
  meta: Record<string, unknown>
): Resource {
  const name = typeof meta.name === 'string' && meta.name.trim() !== '' ? meta.name : entry.name
  const sourceUrl = typeof meta.source_url === 'string' && meta.source_url.trim() !== '' ? meta.source_url : entry.url
  const lastVerified = stringValue(meta.last_verified)
  const agentFriendly = typeof meta.agent_friendly === 'boolean' ? meta.agent_friendly : null
  const openSource = typeof meta.open_source === 'boolean' ? meta.open_source : null
  const install = extractInstall(markdown)

  return {
    id: `${entry.section_slug}/${entry.slug}`,
    name,
    section_slug: entry.section_slug,
    slug: entry.slug,
    doc: entry.doc,
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
      section: typeof meta.section === 'string' ? meta.section : entry.section,
      designeer_url: meta.designeer_url ?? entry.designeer_url,
      designeer_blurb: meta.designeer_blurb ?? entry.description
    }
  }
}

/** Load the validated catalogue registry from `catalogue/catalogue.json`. */
export function loadCatalogue(root: string): Catalogue {
  return readCatalogue(root).catalogue
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

/** Load registered design documents directly from the catalogue and Markdown files. */
export function loadResources(root: string): Resource[] {
  const { realRoot, catalogue } = readCatalogue(root)
  const designRoot = resolve(realRoot, 'catalogue', 'tools')
  try {
    if (realpathSync(designRoot) !== designRoot) {
      throw new DataError('catalogue/tools must resolve within the catalogue root')
    }
  } catch (error) {
    if (error instanceof DataError) throw error
    throw new DataError('catalogue/tools is missing or cannot be resolved')
  }

  return catalogue.tools.map((entry) => {
    const documentPath = safeDocPath(realRoot, entry.doc)
    let bytes: Uint8Array
    try {
      bytes = readFileSync(documentPath)
    } catch {
      throw new DataError(`${JSON.stringify(entry.doc)}: registered document cannot be read`)
    }
    const markdown = new TextDecoder('utf-8', { ignoreBOM: true }).decode(bytes)
    const { meta } = splitFrontmatter(markdown, entry.doc)
    return makeResource(entry, markdown, bytes, meta)
  })
}
