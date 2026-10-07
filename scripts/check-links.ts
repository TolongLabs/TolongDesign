// HTTP-checks every external link in the tool docs and lists the broken ones.
// 403/429 usually mean bot protection, not a dead page, so they are reported separately.
// Usage: bun run links                  (all docs)
//        bun run links -- icons         (one section)
import { readFileSync } from 'node:fs'
import { Glob } from 'bun'
import { ROOT } from './lib'

const section = process.argv[2]
const files = [...new Glob(`docs/design/${section ?? '*'}/*.md`).scanSync(ROOT)].filter((f) => !f.endsWith('README.md'))
const where = new Map<string, Set<string>>()
for (const file of files)
  for (const m of readFileSync(`${ROOT}/${file}`, 'utf8').matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
    if (!where.has(m[1])) where.set(m[1], new Set())
    where.get(m[1])!.add(file)
  }

const urls = [...where.keys()]
const status = new Map<string, number>()
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36'
async function check(url: string) {
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': UA },
      signal: AbortSignal.timeout(20_000)
    })
    status.set(url, res.status)
  } catch {
    status.set(url, 0)
  }
}
const queue = [...urls]
await Promise.all(
  Array.from({ length: 24 }, async () => {
    while (queue.length) await check(queue.shift()!)
  })
)

const broken = urls.filter((u) => {
  const s = status.get(u)!
  return s === 0 || s === 404 || s === 410 || s >= 500
})
const blocked = urls.filter((u) => [401, 403, 429].includes(status.get(u)!))
for (const u of broken) console.log(`broken  ${status.get(u) || 'ERR'}  ${u}  <- ${[...where.get(u)!].join(', ')}`)
console.log(
  `\n${urls.length} links checked: ${broken.length} broken, ${blocked.length} bot-blocked (401/403/429, not checked further)`
)
process.exit(broken.length ? 1 : 0)
