/**
 * Regenerate knowledge/index.json and knowledge/README.md from the front
 * matter of every teardown doc. Pure Bun, no dependencies.
 *
 * usage: bun scripts/knowledge-index.ts
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = join(import.meta.dir, '..', 'knowledge')

interface Item {
  slug: string
  tier: 'template' | 'free' | 'pro'
  title: string
  category: string
  summary: string
  length: string
  evidence: string
  palette: string
  used_in: string
  doc: string
}

function frontMatter(text: string): Record<string, string> {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  const out: Record<string, string> = {}
  for (const line of (m?.[1] ?? '').split('\n')) {
    const i = line.indexOf(':')
    if (i > 0) out[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  return out
}

const summaryOf = (text: string) => (text.match(/^> (.+)$/m)?.[1] ?? '').trim()

const items: Item[] = []
for (const [sub, tier] of [
  ['templates', 'template'],
  ['free', 'free'],
  ['pro', 'pro']
] as const) {
  for (const f of readdirSync(join(dir, sub))
    .filter((x) => x.endsWith('.md'))
    .sort()) {
    const text = readFileSync(join(dir, sub, f), 'utf8')
    const fm = frontMatter(text)
    items.push({
      slug: fm.slug ?? f.replace(/\.md$/, ''),
      tier,
      title: fm.title ?? f,
      category: tier === 'template' ? 'template' : (fm.category ?? 'other'),
      summary: summaryOf(text),
      length: tier === 'template' ? (fm.length ?? '') : fm.length_30fps ? `${fm.length_30fps} f` : '',
      evidence: tier === 'template' ? 'film' : (fm.evidence ?? ''),
      palette: fm.palette ?? '',
      used_in: fm.used_in ?? 'none',
      doc: `${sub}/${f}`
    })
  }
}

writeFileSync(join(dir, 'index.json'), `${JSON.stringify({ items }, null, 2)}\n`)

const esc = (s: string) => s.replace(/\|/g, '\\|')
const count = (t: string) => items.filter((i) => i.tier === t).length
const lines: string[] = [
  '# Agent video knowledge',
  '',
  'Teardowns of a commercial Remotion video library (snapcn, by Shadcn Labs):',
  `${count('template')} paid template films, ${count('free')} free MIT components and ${count('pro')} paid Pro`,
  'components. Each doc says what the piece shows, its timeline in frames at',
  "30 fps, the techniques in this kit's vocabulary, the props a rebuild takes,",
  'numbered rebuild steps and pitfalls. Generated file: run',
  '`bun scripts/knowledge-index.ts` after editing a doc.',
  '',
  '## How to read the evidence',
  '',
  '- `(source)`: read in the MIT source code of a free component.',
  '- `(observed)`: seen in frames of the public demo film, or measured from it.',
  '- `(inferred)`: a reading of motion between sampled frames. Check it before',
  '  you copy a number.',
  '',
  'Paid items were studied from their public demo films only; their source is',
  'not public and was not used. The rebuild vocabulary (`Camera`, `MotionBlur`,',
  '`Typewriter`, ...) maps to `src/kit/` and `src/scenes/` in this collection.',
  'The shared system (acts, cuts, accents, motion tokens) is in',
  '[system.md](./system.md).',
  '',
  '## What the kit renders',
  '',
  'Our own rebuilds of templates 06 to 10, rendered by `src/` (see the',
  '[collection README](../README.md#previews) for all five):',
  '',
  '![Launch film rebuilt by the kit](../media/launch-film.gif)',
  '',
  '## Templates',
  '',
  '| Template | Length | Palette | Doc |',
  '| -------- | ------ | ------- | --- |',
  ...items
    .filter((i) => i.tier === 'template')
    .map(
      (i) =>
        `| **${esc(i.title)}**: ${esc(i.summary)} | ${esc(i.length)} | ${esc(i.palette)} | [${i.slug}](./${i.doc}) |`
    ),
  ''
]
for (const tier of ['free', 'pro'] as const) {
  lines.push(`## ${tier === 'free' ? 'Free components (MIT source)' : 'Pro components (paid; from demo films)'}`, '')
  const cats = [...new Set(items.filter((i) => i.tier === tier).map((i) => i.category))].sort()
  for (const c of cats) {
    lines.push(
      `### ${c}`,
      '',
      '| Component | What it is | Length | Used in templates |',
      '| --------- | ---------- | ------ | ----------------- |'
    )
    for (const i of items.filter((x) => x.tier === tier && x.category === c))
      lines.push(
        `| [${esc(i.title)}](./${i.doc}) | ${esc(i.summary)} | ${esc(i.length)} | ${esc(i.used_in === 'none' ? '' : i.used_in)} |`
      )
    lines.push('')
  }
}
writeFileSync(join(dir, 'README.md'), `${lines.join('\n').trimEnd()}\n`)
console.log(`indexed ${items.length} docs (${count('template')} templates, ${count('free')} free, ${count('pro')} pro)`)
