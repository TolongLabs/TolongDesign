// Query the catalogue from the terminal. Reads data/index.json (run `bun run index` first).
// Usage: bun run find -- [text] [--section icons] [--paywall free] [--tag react] [--stack tailwind] [--agent] [--oss] [--json]
// Examples:
//   bun run find -- --section component-libraries --paywall free --stack react
//   bun run find -- landing --paywall free
//   bun run find -- --agent --oss --json
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ROOT } from './lib'

const args = process.argv.slice(2)
const flag = (name: string) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? undefined : args[i + 1]?.toLowerCase()
}
const has = (name: string) => args.includes(`--${name}`)
const valued = new Set(['--section', '--paywall', '--tag', '--stack'])
const text = args
  .filter((a, i) => !a.startsWith('--') && !valued.has(args[i - 1]))
  .join(' ')
  .toLowerCase()

const { tools } = JSON.parse(readFileSync(join(ROOT, 'data/index.json'), 'utf8')) as {
  tools: Record<string, unknown>[]
}
const lower = (v: unknown) => (Array.isArray(v) ? v.map((x) => String(x).toLowerCase()) : [])

const hits = tools.filter((t) => {
  if (flag('section') && t.section_slug !== flag('section')) return false
  if (flag('paywall') && t.paywall !== flag('paywall')) return false
  if (flag('tag') && !lower(t.category_tags).includes(flag('tag')!)) return false
  if (flag('stack') && !lower(t.stack).includes(flag('stack')!)) return false
  if (has('agent') && t.agent_friendly !== true) return false
  if (has('oss') && t.open_source !== true) return false
  if (text) {
    const hay = [t.name, t.designeer_blurb, t.pricing_summary, ...lower(t.category_tags), ...lower(t.best_for)]
      .join(' ')
      .toLowerCase()
    if (!text.split(/\s+/).every((w) => hay.includes(w))) return false
  }
  return true
})

if (has('json')) console.log(JSON.stringify(hits, null, 1))
else {
  for (const t of hits) console.log(`${String(t.paywall).padEnd(9)} ${String(t.name).padEnd(28)} ${t.doc}`)
  console.log(`\n${hits.length} match(es)`)
}
