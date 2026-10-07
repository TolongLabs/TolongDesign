import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'

export const ROOT = join(import.meta.dir, '..')

export type CatalogueTool = {
  name: string
  url: string
  description: string
  section: string
  section_slug: string
  slug: string
  designeer_url: string
  doc: string
}

export type Person = { name: string; url: string; description: string; sameAs: string[] }

export type Catalogue = { source: string; scraped: string; tools: CatalogueTool[]; people: Person[] }

export const PAYWALLS = ['free', 'freemium', 'paid', 'unknown'] as const

export const FRONTMATTER_KEYS = [
  'name',
  'slug',
  'section',
  'section_slug',
  'source_url',
  'designeer_url',
  'designeer_blurb',
  'paywall',
  'pricing_summary',
  'open_source',
  'license',
  'category_tags',
  'best_for',
  'stack',
  'agent_friendly',
  'last_verified'
] as const

export const HEADINGS = [
  'At a glance',
  'What it is',
  'Paywall and pricing',
  'How to use',
  'Examples',
  'When to use it',
  'Agent notes',
  'Alternatives in this repo',
  'Sources'
] as const

export function loadCatalogue(): Catalogue {
  return JSON.parse(readFileSync(join(ROOT, 'data/catalogue.json'), 'utf8'))
}

export type Doc = { path: string; meta: Record<string, unknown>; body: string }

/** Read a tool doc and split YAML frontmatter from the Markdown body. Returns null if the file is missing. */
export function readDoc(relPath: string): Doc | null {
  const path = join(ROOT, relPath)
  if (!existsSync(path)) return null
  const text = readFileSync(path, 'utf8')
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) return { path: relPath, meta: {}, body: text }
  return { path: relPath, meta: parse(m[1]) ?? {}, body: m[2] }
}
