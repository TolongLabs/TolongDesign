// Pure derivation helpers for `bun run index`. No file or network I/O lives here, so
// every generated field and people row can be unit-tested from Markdown strings alone.
import type { CatalogueTool, Person } from './lib'

const SHELL_LANGUAGES = new Set(['bash', 'sh', 'shell'])
const HOW_TO_USE_HEADING = /^##(?!#)[ \t]+How to use[ \t]*$/i
const NEXT_SECTION_HEADING = /^#{1,2}(?!#)/
const FENCE_OPEN = /^ {0,3}(`{3,}|~{3,})(.*)$/
const FENCE_CLOSE = /^ {0,3}(`{3,}|~{3,})[ \t]*$/

// Scraped catalogue text is untrusted: a cell must not break the table or inject raw HTML.
/** Escape a value so it cannot break out of a Markdown table cell or inject markup. */
export function cell(v: unknown): string {
  return String(v ?? '')
    .replace(/\|/g, '\\|')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, ' ')
}

/** Flatten whitespace and control characters so a single-line value stays a single line. */
export function inline(v: string): string {
  return v
    .replace(/[\u0000-\u001f\u007f]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

/**
 * The first `bash` / `sh` / `shell` fence inside `## How to use`, or null when there is
 * none. The block is returned literally and never executed. A fence belonging to the next
 * H2 is not read, CRLF and longer fences are handled, and backticks nested inside the
 * block do not close it.
 */
export function extractInstall(markdown: string): string | null {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n')
  let inSection = false
  let fence: string | null = null
  let capture = false
  let body: string[] = []
  for (const line of lines) {
    if (fence !== null) {
      const close = line.match(FENCE_CLOSE)
      if (close && close[1][0] === fence[0] && close[1].length >= fence.length) {
        const command = body.join('\n')
        if (capture && command.trim() !== '') return command
        fence = null
        capture = false
        body = []
      } else if (capture) {
        body.push(line)
      }
      continue
    }
    if (HOW_TO_USE_HEADING.test(line)) {
      inSection = true
      continue
    }
    if (inSection && NEXT_SECTION_HEADING.test(line)) return null
    const open = line.match(FENCE_OPEN)
    if (open) {
      fence = open[1]
      const language = (open[2].trim().split(/\s+/)[0] ?? '').toLowerCase()
      capture = inSection && SHELL_LANGUAGES.has(language)
    }
  }
  return null
}

/** Optional creator fields (#12) read defensively until they are part of the Person type. */
export type PersonCredits = {
  created_tools?: unknown
  created_tools_evidence?: unknown
}

/** A safe `[host](url)` link, or null when the value is not an absolute http(s) URL. */
function hostLink(url: unknown): { label: string; href: string } | null {
  if (typeof url !== 'string' || url.trim() === '') return null
  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return null
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null
  const label = parsed.host.replace(/^www\./, '')
  if (label === '') return null
  return { label: cell(label), href: url.replace(/[()\s<>]/g, '') }
}

function siteCell(url: unknown): string {
  const link = hostLink(url)
  return link ? `[${link.label}](${link.href})` : cell(url)
}

function socialCell(sameAs: unknown): string {
  if (!Array.isArray(sameAs)) return ''
  return sameAs
    .map((url) => hostLink(url))
    .filter((link) => link !== null)
    .map((link) => `[${link.label}](${link.href})`)
    .join(' ')
}

/**
 * The cell listing the tools a person verifiably made. Unknown IDs are dropped rather
 * than linked to a guessed path, and a missing `created_tools` renders a dash — absence is
 * not a claim that the person made no tools.
 */
export function renderMadeCell(createdTools: unknown, evidence: unknown, tools: CatalogueTool[]): string {
  const known = new Map(tools.map((tool) => [`${tool.section_slug}/${tool.slug}`, tool]))
  const ids = Array.isArray(createdTools) ? createdTools.filter((id): id is string => typeof id === 'string') : []
  const credits = evidence !== null && typeof evidence === 'object' ? (evidence as Record<string, unknown>) : {}
  const seen = new Set<string>()
  const parts: string[] = []

  for (const id of ids) {
    if (seen.has(id)) continue
    seen.add(id)
    const tool = known.get(id)
    if (!tool) continue
    const link = `[${cell(tool.name)}](./${tool.section_slug}/${tool.slug}.md)`
    const entry = credits[id]
    const source =
      entry !== null && typeof entry === 'object' ? hostLink((entry as Record<string, unknown>).source_url) : null
    parts.push(source ? `${link} [${source.label}](${source.href})` : link)
  }

  return parts.length > 0 ? parts.join(', ') : '—'
}

/**
 * One Markdown table row per person, in input order: name, known for, site, social and the
 * tools credited to them (#12). Distinct from the compact search cards in
 * `resource-card.ts`.
 */
export function renderPeopleRows(people: Person[], tools: CatalogueTool[]): string[] {
  return people.map((person) => {
    const extras = person as Person & PersonCredits
    const made = renderMadeCell(extras.created_tools, extras.created_tools_evidence, tools)
    return `| ${cell(person.name)} | ${cell(person.description)} | ${siteCell(person.url)} | ${socialCell(
      (person as { sameAs?: unknown }).sameAs
    )} | ${made} |`
  })
}
