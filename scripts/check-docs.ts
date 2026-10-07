// Validates every tool doc against the catalogue and the template contract.
// Usage: bun run check            (all docs)
//        bun run check -- --quiet (errors only)
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, normalize } from 'node:path'
import { FRONTMATTER_KEYS, HEADINGS, PAYWALLS, ROOT, loadCatalogue, readDoc } from './lib'

const quiet = process.argv.includes('--quiet')
const { tools } = loadCatalogue()
const errors: string[] = []
const warnings: string[] = []

for (const tool of tools) {
  const doc = readDoc(tool.doc)
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

  if (!body.match(new RegExp(`^# .+`, 'm'))) errors.push(`${tool.doc}: missing H1`)
  const h2 = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim())
  let last = -1
  for (const heading of HEADINGS) {
    const at = h2.indexOf(heading)
    if (at === -1) errors.push(`${tool.doc}: missing "## ${heading}"`)
    else if (at < last) errors.push(`${tool.doc}: "## ${heading}" out of order`)
    else last = at
  }

  // Relative links must resolve inside the repo.
  for (const m of body.matchAll(/\]\((\.{1,2}\/[^)#\s]+)/g)) {
    const target = normalize(join(dirname(join(ROOT, tool.doc)), m[1]))
    if (!existsSync(target)) errors.push(`${tool.doc}: broken link ${m[1]}`)
  }

  const lines = body.split('\n').length
  if (lines < 60) warnings.push(`${tool.doc}: only ${lines} lines`)
  const examples = body.split(/^## Examples$/m)[1]?.split(/^## /m)[0] ?? ''
  if ((examples.match(/\]\(https?:\/\//g) ?? []).length < 3) warnings.push(`${tool.doc}: fewer than 3 example links`)
}

// Hand-written guides must not link to docs that do not exist.
for (const guide of ['README.md', 'AGENTS.md', 'docs/README.md', 'docs/PLAYBOOK.md']) {
  const body = readFileSync(join(ROOT, guide), 'utf8')
  for (const m of body.matchAll(/\]\((\.{0,2}\/?[^)#\s:]+\.md)\)/g)) {
    const target = normalize(join(dirname(join(ROOT, guide)), m[1]))
    if (!existsSync(target)) errors.push(`${guide}: broken link ${m[1]}`)
  }
}

if (!quiet) for (const w of warnings) console.log(`warn  ${w}`)
for (const e of errors) console.log(`error ${e}`)
const present = tools.filter((t) => existsSync(join(ROOT, t.doc))).length
console.log(`\n${present}/${tools.length} docs present, ${errors.length} errors, ${warnings.length} warnings`)
process.exit(errors.length ? 1 : 0)
