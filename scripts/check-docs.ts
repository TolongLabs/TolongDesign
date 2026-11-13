// Validates every tool doc and research doc against the catalogue and template contracts.
// Usage: bun run check            (all docs)
//        bun run check -- --quiet (errors only)
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { loadCatalogue, readDoc } from '../src/core/loader'
import {
  FRONTMATTER_KEYS,
  HEADINGS,
  PAYWALLS,
  validatePeople,
  validateResearchMeta,
  validateResourceMeta
} from '../src/core/schema'
import { findBrokenRelativeMarkdownLinks } from './relative-markdown-links'

export type CheckResult = {
  present: number
  totalTools: number
  researchCount: number
  errors: string[]
  warnings: string[]
}

export function checkDocs(root: string): CheckResult {
  const { tools, people } = loadCatalogue(root)
  const errors: string[] = []
  const warnings: string[] = []

  errors.push(...validatePeople(people, tools))

  for (const tool of tools) {
    const doc = readDoc(root, tool.doc)
    if (!doc) {
      errors.push(`${tool.doc}: missing`)
      continue
    }
    const { meta, body } = doc

    for (const key of FRONTMATTER_KEYS) if (!(key in meta)) errors.push(`${tool.doc}: frontmatter missing "${key}"`)
    if (meta.slug !== tool.slug) errors.push(`${tool.doc}: slug "${meta.slug}" != catalogue "${tool.slug}"`)
    if (meta.section !== tool.section) errors.push(`${tool.doc}: section "${meta.section}" != "${tool.section}"`)
    if (meta.source_url !== tool.url) errors.push(`${tool.doc}: source_url "${meta.source_url}" != "${tool.url}"`)
    if (!PAYWALLS.includes(meta.paywall as (typeof PAYWALLS)[number]))
      errors.push(`${tool.doc}: paywall "${meta.paywall}" not in ${PAYWALLS.join('|')}`)
    for (const key of ['category_tags', 'best_for', 'stack'])
      if (key in meta && !Array.isArray(meta[key])) errors.push(`${tool.doc}: "${key}" must be a list`)
    for (const key of ['open_source', 'agent_friendly'])
      if (key in meta && typeof meta[key] !== 'boolean') errors.push(`${tool.doc}: "${key}" must be true/false`)

    errors.push(...validateResourceMeta(meta, tool.doc))

    if (!body.match(new RegExp(`^# .+`, 'm'))) errors.push(`${tool.doc}: missing H1`)
    const h2 = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim())
    let last = -1
    for (const heading of HEADINGS) {
      const at = h2.indexOf(heading)
      if (at === -1) errors.push(`${tool.doc}: missing "## ${heading}"`)
      else if (at < last) errors.push(`${tool.doc}: "## ${heading}" out of order`)
      else last = at
    }

    const lines = body.split('\n').length
    if (lines < 60) warnings.push(`${tool.doc}: only ${lines} lines`)
    const examples = body.split(/^## Examples$/m)[1]?.split(/^## /m)[0] ?? ''
    if ((examples.match(/\]\(https?:\/\//g) ?? []).length < 3) warnings.push(`${tool.doc}: fewer than 3 example links`)
  }

  let researchCount = 0
  const researchDir = join(root, 'catalogue', 'research')
  if (existsSync(researchDir)) {
    const researchFiles = readdirSync(researchDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry) => entry.name)
      .sort()
    researchCount = researchFiles.length
    for (const file of researchFiles) {
      const relPath = `catalogue/research/${file}`
      const doc = readDoc(root, relPath)
      if (!doc) {
        errors.push(`${relPath}: missing`)
        continue
      }
      errors.push(...validateResearchMeta(doc.meta, relPath))
      if (!doc.body.match(/^# .+/m)) errors.push(`${relPath}: missing H1`)
    }
  }

  // Every relative Markdown link in catalogue/, docs/, skills/ and the repo root
  // must resolve to a file.
  errors.push(...findBrokenRelativeMarkdownLinks(root))

  const present = tools.filter((t) => existsSync(join(root, t.doc))).length
  return { present, totalTools: tools.length, researchCount, errors, warnings }
}

if (import.meta.main) {
  const ROOT = join(import.meta.dir, '..')
  const quiet = process.argv.includes('--quiet')
  const { present, totalTools, researchCount, errors, warnings } = checkDocs(ROOT)
  if (!quiet) for (const w of warnings) console.log(`warn  ${w}`)
  for (const e of errors) console.log(`error ${e}`)
  console.log(
    `\n${present}/${totalTools} docs present, ${researchCount} research docs, ${errors.length} errors, ${warnings.length} warnings`
  )
  process.exit(errors.length ? 1 : 0)
}
