// HTTP-check external doc links; --status reports lifecycle suggestions for primary resource URLs only.
// Suggestions require content review and never edit source docs.
import { readFileSync } from 'node:fs'
import { Glob } from 'bun'
import { ROOT, loadCatalogue, readDoc } from './lib'
import { buildResourceStatusReport, checkLinksBatch, parseLinkOptions } from './link-check-lib'

let options: ReturnType<typeof parseLinkOptions>
try {
  options = parseLinkOptions(process.argv.slice(2))
} catch (error) {
  console.error(`Usage error: ${error instanceof Error ? error.message : String(error)}`)
  process.exit(2)
}
const { section, status: showStatus, json: jsonOutput } = options
const { tools } = loadCatalogue()
const selected = tools.filter((tool) => section === undefined || tool.section_slug === section)
const files = [...new Glob(`docs/design/${section ?? '*'}/*.md`).scanSync(ROOT)].filter(
  (file) => !file.endsWith('README.md')
)
const where = new Map<string, Set<string>>()
const record = (url: string, doc: string) => {
  if (!where.has(url)) where.set(url, new Set())
  where.get(url)!.add(doc)
}

const resources = selected.map((tool) => {
  const meta = readDoc(tool.doc)?.meta ?? {}
  const source_url = typeof meta.source_url === 'string' ? meta.source_url : tool.url
  record(source_url, tool.doc)
  return {
    id: `${tool.section_slug}/${tool.slug}`,
    doc: tool.doc,
    source_url,
    current_status: typeof meta.status === 'string' ? meta.status : null
  }
})
for (const file of files) {
  const body = readDoc(file)?.body ?? readFileSync(`${ROOT}/${file}`, 'utf8')
  for (const match of body.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) record(match[1], file)
}

const urls = [...where.keys()]
const observations = await checkLinksBatch(urls, { concurrency: 24, timeoutMs: 20_000 })
const broken = urls.filter((url) => {
  const observation = observations.get(url)!
  const code = observation.http_status
  return code === null || code === 404 || code === 410 || code >= 500 || observation.paused === true
})
const blocked = urls.filter((url) => [401, 403, 429].includes(observations.get(url)!.http_status ?? 0))
const statusReport = showStatus ? buildResourceStatusReport(resources, observations) : []

if (jsonOutput) {
  const report = showStatus
    ? statusReport
    : urls.map((url) => ({ ...observations.get(url)!, docs: [...where.get(url)!] }))
  console.log(JSON.stringify(report, null, 2))
} else {
  for (const url of broken)
    console.log(`broken  ${observations.get(url)!.http_status ?? 'ERR'}  ${url}  <- ${[...where.get(url)!].join(', ')}`)
  console.log(
    `\n${urls.length} links checked: ${broken.length} broken, ${blocked.length} bot-blocked (401/403/429, not checked further)`
  )
  if (showStatus) {
    console.log('\nStatus suggestions:')
    for (const observation of statusReport) {
      console.log(
        `${(observation.suggested_status ?? 'undetermined').padEnd(12)} ${observation.id}  ${observation.url}  (${observation.reason}; content review required)`
      )
    }
  }
}
process.exit(broken.length ? 1 : 0)
