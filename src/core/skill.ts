import { createHash } from 'node:crypto'
import { existsSync, lstatSync, readFileSync, readdirSync, realpathSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { parse as parseYaml } from 'yaml'
import { DataError, UsageError, type Resource } from './schema'

export const SKILLS_DIRECTORY = 'skills'
export const SKILL_ENTRY = 'SKILL.md'
export const SKILL_AUDIENCES = ['consumer', 'checkout', 'maintainer'] as const

export type SkillAudience = (typeof SKILL_AUDIENCES)[number]

export type SkillSummary = {
  kind: 'skill'
  id: string
  name: string
  slug: string
  audience: string | null
  description: string
  doc: string
  references: string[]
}

export type SkillDetail = SkillSummary & {
  sha256: string
  markdown: string
}

export type LoadSkillsOptions = {
  optional?: boolean
  requireAudience?: boolean
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

function parseSkillFrontmatter(
  markdown: string,
  relativePath: string,
  requireFrontmatter: boolean
): Record<string, unknown> {
  const match = markdown.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/)
  if (!match) {
    if (requireFrontmatter) throw new DataError(`skill is missing YAML frontmatter: ${relativePath}`)
    return {}
  }

  let parsed: unknown
  try {
    parsed = parseYaml(match[1])
  } catch {
    throw new DataError(`skill frontmatter is not valid YAML: ${relativePath}`)
  }

  if (parsed === null || parsed === undefined) return {}
  if (!isRecord(parsed)) throw new DataError(`skill frontmatter must be a mapping: ${relativePath}`)
  return parsed
}

function collectReferenceFiles(skillRoot: string, skillRelPrefix: string): string[] {
  const files: string[] = []

  function visit(dir: string, relPrefix: string, isRoot: boolean): void {
    const entries = readdirSync(dir, { withFileTypes: true }).sort((left, right) =>
      left.name < right.name ? -1 : left.name > right.name ? 1 : 0
    )
    for (const entry of entries) {
      const relPath = `${relPrefix}/${entry.name}`
      const absPath = join(dir, entry.name)
      const stats = lstatSync(absPath)
      if (stats.isSymbolicLink()) {
        throw new DataError(`skill entry must not be a symlink: ${relPath}`)
      }
      if (stats.isDirectory()) {
        const realDir = realpathSync(absPath)
        if (!isWithin(skillRoot, realDir)) {
          throw new DataError(`skill directory resolves outside skill root: ${relPath}`)
        }
        visit(absPath, relPath, false)
      } else if (stats.isFile()) {
        const realFile = realpathSync(absPath)
        if (!isWithin(skillRoot, realFile)) {
          throw new DataError(`skill file resolves outside skill root: ${relPath}`)
        }
        if (!(isRoot && entry.name === SKILL_ENTRY)) {
          files.push(relPath)
        }
      } else {
        throw new DataError(`skill entry must be a regular file or directory: ${relPath}`)
      }
    }
  }

  visit(skillRoot, skillRelPrefix, true)
  return files.sort((left, right) => (left < right ? -1 : left > right ? 1 : 0))
}

/** Load skills from `<root>/skills/<name>/SKILL.md` with frontmatter metadata and reference files. */
export function loadSkills(root: string, options: LoadSkillsOptions = {}): SkillDetail[] {
  if (typeof root !== 'string' || root.trim() === '') throw new UsageError('root must be a non-empty path')

  let realRoot: string
  try {
    realRoot = realpathSync(resolve(root))
  } catch {
    throw new DataError('skill root is missing or cannot be resolved')
  }

  const skillsDir = join(realRoot, SKILLS_DIRECTORY)
  if (!existsSync(skillsDir)) {
    if (options.optional) return []
    throw new DataError('skills directory is missing or unreadable')
  }

  let skillsStat
  try {
    skillsStat = lstatSync(skillsDir)
  } catch {
    throw new DataError('skills directory is missing or unreadable')
  }
  if (skillsStat.isSymbolicLink() || !skillsStat.isDirectory() || realpathSync(skillsDir) !== skillsDir) {
    throw new DataError('skills directory must be a regular directory within root')
  }

  const entries = readdirSync(skillsDir, { withFileTypes: true }).sort((left, right) =>
    left.name < right.name ? -1 : left.name > right.name ? 1 : 0
  )

  const skills: SkillDetail[] = []
  for (const entry of entries) {
    const slug = entry.name
    const skillRelPrefix = `${SKILLS_DIRECTORY}/${slug}`
    const skillAbsDir = join(skillsDir, slug)

    let dirStat
    try {
      dirStat = lstatSync(skillAbsDir)
    } catch {
      throw new DataError(`skill directory is unreadable: ${skillRelPrefix}`)
    }
    if (dirStat.isSymbolicLink() || !dirStat.isDirectory()) {
      throw new DataError(`skill input must be a directory: ${skillRelPrefix}`)
    }
    const realSkillDir = realpathSync(skillAbsDir)
    if (!isWithin(skillsDir, realSkillDir)) {
      throw new DataError(`skill directory resolves outside skills/: ${skillRelPrefix}`)
    }

    const doc = `${skillRelPrefix}/${SKILL_ENTRY}`
    const entryPath = join(realSkillDir, SKILL_ENTRY)
    let entryStat
    try {
      entryStat = lstatSync(entryPath)
    } catch {
      throw new DataError(`skill is missing or unreadable: ${doc}`)
    }
    if (entryStat.isSymbolicLink() || !entryStat.isFile() || !isWithin(realSkillDir, realpathSync(entryPath))) {
      throw new DataError(`release integrity requires regular files: ${doc}`)
    }

    const bytes = readFileSync(entryPath)
    const markdown = new TextDecoder('utf-8', { ignoreBOM: true }).decode(bytes)
    const meta = parseSkillFrontmatter(markdown, doc, options.requireAudience === true)

    const nested = isRecord(meta.metadata) ? meta.metadata : undefined
    const audienceValue = nested && typeof nested.audience === 'string' ? nested.audience : null
    if (options.requireAudience) {
      if (audienceValue === null || !(SKILL_AUDIENCES as readonly string[]).includes(audienceValue)) {
        throw new DataError(`skill ${slug} has unknown metadata.audience: ${doc}`)
      }
    }

    const name = typeof meta.name === 'string' && meta.name.trim() !== '' ? meta.name.trim() : slug
    const description = typeof meta.description === 'string' ? meta.description.trim() : ''
    const references = collectReferenceFiles(realSkillDir, skillRelPrefix)

    skills.push({
      kind: 'skill',
      id: `skill/${slug}`,
      name,
      slug,
      audience: audienceValue,
      description,
      doc,
      references,
      sha256: createHash('sha256').update(bytes).digest('hex'),
      markdown
    })
  }

  return skills
}

/** Return a skill summary list (without full Markdown bodies) sorted by slug. */
export function listSkills(root: string): SkillSummary[] {
  return loadSkills(root).map(({ sha256: _sha256, markdown: _markdown, ...summary }) => summary)
}

/** Resolve one skill by slug (e.g. `design-project`) or `skill/<name>` ID. */
export function getSkill(root: string, name: string): SkillDetail {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new UsageError('skill name must be a non-empty string')
  }
  const skills = loadSkills(root)
  const match = skills.find((skill) => skill.slug === name || skill.id === name)
  if (!match) {
    throw new UsageError(`unknown skill: ${JSON.stringify(name)}`)
  }
  return match
}

/** Return sorted names of skills marked `metadata.audience: consumer`. */
export function consumerSkillNames(root: string): string[] {
  return loadSkills(root, { requireAudience: true })
    .filter((skill) => skill.audience === 'consumer')
    .map((skill) => skill.slug)
}

/** Convert loaded skills into unified Resource entries for search, show, and context. */
export function loadSkillResources(root: string): Resource[] {
  return loadSkills(root, { optional: true }).map((skill) => ({
    kind: 'skill',
    id: skill.id,
    name: skill.name,
    section_slug: 'skill',
    slug: skill.slug,
    doc: skill.doc,
    source_url: null,
    last_verified: null,
    sha256: skill.sha256,
    markdown: skill.markdown,
    paywall: null,
    agent_friendly: null,
    open_source: null,
    meta: {
      name: skill.name,
      description: skill.description,
      ...(skill.audience !== null ? { audience: skill.audience } : {}),
      references: skill.references
    }
  }))
}
