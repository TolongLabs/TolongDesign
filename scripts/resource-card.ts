// Compact one-resource card for agent-facing output (`--format card`). Pure: it takes a
// loaded resource and returns at most CARD_BUDGET characters, so a search with several
// results stays inside an agent's context. The complete document is never replaced —
// long commands are pointed at the doc rather than clipped into a misleading fragment.
import { inline } from './index-fields'
import { EXECUTION_MODES } from './catalogue-schema'

/** Per-result character bound (~80 tokens) for `--format card`. */
export const CARD_BUDGET = 320

/** A command longer than this is not safe to inline as an executable fragment. */
const INLINE_INSTALL_MAX = 110

/**
 * Primary documented workflow. Mirrors the vocabulary in
 * `docs/superpowers/specs/2026-10-15-agent-retrieval-issues-design.md`; the coordinator
 * reconciles this with the shared schema module at integration (see REPORT.md).
 */
export const CARD_MODES = EXECUTION_MODES

const NOT_PUBLISHED = 'not published'
const DASH_TRUNCATED = '…'
const DEGRADED_BEST_FOR_MAX = 40
const DEGRADED_NAME_MAX = 28
const DEGRADED_ID_MAX = 24
const DEGRADED_DOC_MAX = 30

export type CardInput = {
  id: string
  name: string
  doc: string
  source_url: string | null
  meta: Record<string, unknown>
}

/** Shorten to a limit with a visible marker; only used when a value alone would burst the budget. */
function shorten(value: string, max: number): string {
  return value.length <= max ? value : `${value.slice(0, Math.max(0, max - 1))}${DASH_TRUNCATED}`
}

function text(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = inline(value)
  return trimmed === '' ? null : trimmed
}

/** The first usable `best_for` entry; the frontmatter contract stores a list, anything else is unknown. */
function bestForValue(meta: Record<string, unknown>): string | null {
  if (!Array.isArray(meta.best_for)) return null
  for (const entry of meta.best_for) {
    const candidate = text(entry)
    if (candidate !== null) return candidate
  }
  return null
}

function mode(meta: Record<string, unknown>): string {
  const value = text(meta.execution_mode)?.toLowerCase()
  return value && (CARD_MODES as readonly string[]).includes(value) ? value : 'unknown'
}

/**
 * A shell command the card may show literally. Anything multiline or longer than
 * INLINE_INSTALL_MAX is refused — a fragment of a longer command could be executed as if
 * it were the whole install.
 */
function inlineCommand(meta: Record<string, unknown>): string | null {
  const raw = meta.install
  if (typeof raw !== 'string') return null
  // Check the raw value: flattening newlines first would hide a multiline script.
  if (raw.includes('\n') || raw.includes('\r')) return null
  const value = text(raw)
  if (value === null || value.length > INLINE_INSTALL_MAX) return null
  return value
}

export function renderResourceCard(resource: CardInput): string {
  const meta = resource.meta ?? {}
  const name = text(resource.name) ?? text(resource.id) ?? 'unknown'
  const id = text(resource.id) ?? 'unknown'
  const doc = text(resource.doc) ?? 'unknown'
  const bestFor = bestForValue(meta) ?? NOT_PUBLISHED
  const hasInstall = text(meta.install) !== null
  const command = inlineCommand(meta)
  const source = text(resource.source_url)

  const build = (limits: { bestFor: number; name: number; id: number; doc: number; pointer: boolean }) => {
    const shrunkDoc = shorten(doc, limits.doc)
    // A command that exists but is too long to inline still points at the doc; only a
    // resource with no command at all falls back to its source URL.
    const installLine = !hasInstall
      ? `source: ${source && source.length > INLINE_INSTALL_MAX ? `see ${shrunkDoc}` : (source ?? NOT_PUBLISHED)}`
      : command !== null && !limits.pointer
        ? `install: ${command}`
        : `install: see ${shrunkDoc}`
    return [
      `name: ${shorten(name, limits.name)}`,
      `id: ${shorten(id, limits.id)}`,
      `mode: ${mode(resource.meta ?? {})}`,
      installLine,
      `best for: ${shorten(bestFor, limits.bestFor)}`,
      `doc: ${shrunkDoc}`
    ].join('\n')
  }

  let card = build({
    bestFor: Number.MAX_SAFE_INTEGER,
    name: Number.MAX_SAFE_INTEGER,
    id: Number.MAX_SAFE_INTEGER,
    doc: Number.MAX_SAFE_INTEGER,
    pointer: false
  })
  if (card.length <= CARD_BUDGET) return card

  // Degrade in the order that keeps the most actionable text: the command first (the doc
  // can be opened instead), then prose, then identifiers, and the doc path last.
  const steps = [
    {
      bestFor: Number.MAX_SAFE_INTEGER,
      name: Number.MAX_SAFE_INTEGER,
      id: Number.MAX_SAFE_INTEGER,
      doc: Number.MAX_SAFE_INTEGER,
      pointer: true
    },
    {
      bestFor: DEGRADED_BEST_FOR_MAX,
      name: Number.MAX_SAFE_INTEGER,
      id: Number.MAX_SAFE_INTEGER,
      doc: Number.MAX_SAFE_INTEGER,
      pointer: true
    },
    {
      bestFor: DEGRADED_BEST_FOR_MAX,
      name: DEGRADED_NAME_MAX,
      id: Number.MAX_SAFE_INTEGER,
      doc: Number.MAX_SAFE_INTEGER,
      pointer: true
    },
    {
      bestFor: DEGRADED_BEST_FOR_MAX,
      name: DEGRADED_NAME_MAX,
      id: DEGRADED_ID_MAX,
      doc: Number.MAX_SAFE_INTEGER,
      pointer: true
    },
    {
      bestFor: DEGRADED_BEST_FOR_MAX,
      name: DEGRADED_NAME_MAX,
      id: DEGRADED_ID_MAX,
      doc: DEGRADED_DOC_MAX,
      pointer: true
    }
  ]
  for (const step of steps) {
    const candidate = build(step)
    if (candidate.length <= CARD_BUDGET) return candidate
    card = candidate
  }
  return card
}
