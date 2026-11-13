import {
  EXECUTION_MODES,
  PAYWALLS,
  RESOURCE_KINDS,
  SURFACES,
  UsageError,
  normalizeStack,
  type Resource,
  type ResourceKind,
  type SearchOptions,
  type SearchResult
} from './schema'

export type SearchDocument = {
  id: string
  name: string
  meta: Record<string, unknown>
  body: string
}

export type RankedDocument<T> = {
  document: T
  score: number
  matched_terms: string[]
}

const DEFAULT_LIMIT = 10
const EXCERPT_LIMIT = 240

const FIELD_WEIGHTS = {
  identity: 8.0,
  tags: 5.0,
  best_for: 5.0,
  blurb: 3.0,
  body: 1.0
} as const

const B_NORMALIZATION = {
  identity: 0.5,
  tags: 0.2,
  best_for: 0.3,
  blurb: 0.5,
  body: 0.75
} as const

const K1 = 1.2
const EXACT_NAME_BOOST = 10.0
const COORDINATION_WEIGHT = 0.5
const EPSILON = 1e-9

function compareText(left: string, right: string): number {
  const nl = left.toLowerCase()
  const nr = right.toLowerCase()
  if (nl < nr) return -1
  if (nl > nr) return 1
  if (left < right) return -1
  if (left > right) return 1
  return 0
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function extractStrings(val: unknown, seen = new WeakSet<object>()): string {
  if (typeof val === 'string') return val
  if (typeof val === 'number' || typeof val === 'boolean') return String(val)
  if (val && typeof val === 'object') {
    if (seen.has(val)) return ''
    seen.add(val)
    const values = Array.isArray(val) ? val : Object.values(val as Record<string, unknown>)
    return values.map((value) => extractStrings(value, seen)).join(' ')
  }
  return ''
}

function stemWord(word: string): string {
  if (word.length <= 3) return word
  return word.replace(/(ations|ation|tions|tion|ing|ed|ly|es|s)$/, '').replace(/(ate|at|e)$/, '')
}

function countOccurrences(haystack: string, needle: string): number {
  if (!needle || !haystack) return 0
  let count = 0
  let pos = 0
  while ((pos = haystack.indexOf(needle, pos)) !== -1) {
    count++
    pos += needle.length
  }
  return count
}

function tokenizeWords(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean)
}

function matchTermInField(
  text: string,
  term: string,
  termStem: string,
  isBody: boolean
): { matched: boolean; count: number } {
  const literalCount = countOccurrences(text, term)
  if (literalCount > 0) {
    return { matched: true, count: literalCount }
  }

  // Fallback to stem match for natural language recall when stem length is sufficient
  if (termStem && termStem.length >= 4 && termStem !== term) {
    const stemCount = countOccurrences(text, termStem)
    if (stemCount > 0) {
      return { matched: true, count: stemCount * (isBody ? 0.5 : 0.8) }
    }
  }

  return { matched: false, count: 0 }
}

type FieldKey = keyof typeof FIELD_WEIGHTS

type DocumentExtracted<T extends SearchDocument> = {
  document: T
  fields: Record<FieldKey, string>
  lengths: Record<FieldKey, number>
}

/**
 * Pure BM25-style document ranker normalizing across identity, tags, best_for,
 * blurb and body fields.
 *
 * Empty query sorts documents ascending by name then ID with score 0.
 * Nonempty query returns only matched documents sorted descending by score then ID.
 */
export function rankDocuments<T extends SearchDocument>(documents: T[], query: string): RankedDocument<T>[] {
  const rawTerms = query.trim().split(/\s+/).filter(Boolean)

  if (rawTerms.length === 0) {
    const sorted = [...documents].sort((a, b) => {
      const cmp = compareText(a.name, b.name)
      if (cmp !== 0) return cmp
      return compareText(a.id, b.id)
    })
    return sorted.map((doc) => ({
      document: doc,
      score: 0,
      matched_terms: []
    }))
  }

  const uniqueTerms = Array.from(new Set(rawTerms.map((t) => t.toLowerCase())))
  const uniqueStems = uniqueTerms.map(stemWord)
  const normQuery = query.trim().toLowerCase()
  const N = documents.length
  if (N === 0) return []

  const sumL: Record<FieldKey, number> = {
    identity: 0,
    tags: 0,
    best_for: 0,
    blurb: 0,
    body: 0
  }

  const extracted: DocumentExtracted<T>[] = documents.map((doc) => {
    const identity =
      `${doc.name} ${doc.id} ${extractStrings(doc.meta?.slug)} ${extractStrings(doc.meta?.name)}`.toLowerCase()
    const tags =
      `${extractStrings(doc.meta?.category_tags)} ${extractStrings(doc.meta?.tags)} ${extractStrings(doc.meta?.stack)}`.toLowerCase()
    const best_for = `${extractStrings(doc.meta?.best_for)}`.toLowerCase()
    const blurb =
      `${extractStrings(doc.meta?.designeer_blurb)} ${extractStrings(doc.meta?.blurb)} ${extractStrings(doc.meta?.description)} ${extractStrings(doc.meta?.summary)} ${extractStrings(doc.meta?.pricing_summary)}`.toLowerCase()
    const body = (doc.body || '').toLowerCase()

    const lengths: Record<FieldKey, number> = {
      identity: Math.max(1, tokenizeWords(identity).length),
      tags: Math.max(1, tokenizeWords(tags).length),
      best_for: Math.max(1, tokenizeWords(best_for).length),
      blurb: Math.max(1, tokenizeWords(blurb).length),
      body: Math.max(1, tokenizeWords(body).length)
    }

    sumL.identity += lengths.identity
    sumL.tags += lengths.tags
    sumL.best_for += lengths.best_for
    sumL.blurb += lengths.blurb
    sumL.body += lengths.body

    return {
      document: doc,
      fields: { identity, tags, best_for, blurb, body },
      lengths
    }
  })

  const avgL: Record<FieldKey, number> = {
    identity: sumL.identity / N,
    tags: sumL.tags / N,
    best_for: sumL.best_for / N,
    blurb: sumL.blurb / N,
    body: sumL.body / N
  }

  // Precompute corpus document frequency n(t) for each query term
  const df: Record<string, number> = {}
  for (let i = 0; i < uniqueTerms.length; i++) {
    const term = uniqueTerms[i]
    const termStem = uniqueStems[i]
    let count = 0
    for (const item of extracted) {
      if (
        matchTermInField(item.fields.identity, term, termStem, false).matched ||
        matchTermInField(item.fields.tags, term, termStem, false).matched ||
        matchTermInField(item.fields.best_for, term, termStem, false).matched ||
        matchTermInField(item.fields.blurb, term, termStem, false).matched ||
        matchTermInField(item.fields.body, term, termStem, true).matched
      ) {
        count++
      }
    }
    df[term] = count
  }

  const results: RankedDocument<T>[] = []
  const fieldKeys: FieldKey[] = ['identity', 'tags', 'best_for', 'blurb', 'body']

  for (const item of extracted) {
    let docScore = 0
    const matchedTerms: string[] = []

    for (let i = 0; i < uniqueTerms.length; i++) {
      const term = uniqueTerms[i]
      const termStem = uniqueStems[i]
      const n_t = df[term] || 0
      if (n_t === 0) continue

      const idf = Math.log(1 + (N - n_t + 0.5) / (n_t + 0.5))
      let termMatched = false
      let termScore = 0

      for (const f of fieldKeys) {
        const text = item.fields[f]
        const match = matchTermInField(text, term, termStem, f === 'body')
        if (!match.matched) continue
        termMatched = true

        const B = 1 - B_NORMALIZATION[f] + B_NORMALIZATION[f] * (item.lengths[f] / avgL[f])
        const normTf = match.count / B
        const fieldScore = FIELD_WEIGHTS[f] * ((normTf * (K1 + 1)) / (normTf + K1))
        termScore += fieldScore
      }

      if (termMatched) {
        matchedTerms.push(term)
        docScore += idf * termScore
      }
    }

    if (matchedTerms.length > 0 && docScore > 0) {
      // Coordination factor: reward documents matching a higher fraction of unique query terms
      if (COORDINATION_WEIGHT > 0) {
        const coord = matchedTerms.length / uniqueTerms.length
        docScore *= 1 + COORDINATION_WEIGHT * (coord - 1)
      }

      // Exact name match bonus: exact resource name or exact section/slug ID ranks first
      const docName = item.document.name.trim().toLowerCase()
      const docId = item.document.id.trim().toLowerCase()
      if (docName === normQuery || docId === normQuery) {
        docScore += EXACT_NAME_BOOST
      }

      results.push({
        document: item.document,
        score: docScore,
        matched_terms: matchedTerms
      })
    }
  }

  const exactMatch = (document: SearchDocument) =>
    document.name.trim().toLowerCase() === normQuery || document.id.trim().toLowerCase() === normQuery
  results.sort((a, b) => {
    const exact = Number(exactMatch(b.document)) - Number(exactMatch(a.document))
    if (exact !== 0) return exact
    const diff = b.score - a.score
    if (Math.abs(diff) > EPSILON) return diff
    return compareText(a.document.id, b.document.id)
  })

  return results
}

function searchableText(value: unknown, seen: WeakSet<object>): string {
  if (typeof value === 'string') return value
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') return String(value)
  if (value === null || value === undefined) return ''
  if (value instanceof Date) return Number.isFinite(value.getTime()) ? value.toISOString() : ''
  if (typeof value !== 'object') return ''
  if (seen.has(value)) return ''
  seen.add(value)

  if (Array.isArray(value)) return value.map((item) => searchableText(item, seen)).join(' ')
  return Object.entries(value)
    .map(([key, item]) => `${key} ${searchableText(item, seen)}`)
    .join(' ')
}

function validateCsvEnum<T extends string>(
  rawValue: unknown,
  flagName: string,
  allowed: readonly T[]
): string | undefined {
  if (rawValue === undefined) return undefined
  if (typeof rawValue !== 'string') throw new UsageError(`--${flagName} requires a non-empty value`)
  const parts = rawValue.split(',')
  const seen = new Set<string>()
  for (const raw of parts) {
    const trimmed = raw.trim().toLowerCase()
    if (trimmed === '') throw new UsageError(`--${flagName} contains an empty entry`)
    if (!allowed.includes(trimmed as T)) {
      throw new UsageError(`--${flagName} must be one of: ${allowed.join(', ')}`)
    }
    if (seen.has(trimmed)) {
      throw new UsageError(`--${flagName} contains duplicate value: "${trimmed}"`)
    }
    seen.add(trimmed)
  }
  return Array.from(seen).join(',')
}

function validateSearchOptions(options: SearchOptions): Required<Pick<SearchOptions, 'limit'>> & SearchOptions {
  if (!isRecord(options)) throw new UsageError('search options must be an object')

  const kind = validateCsvEnum(options.kind, 'kind', RESOURCE_KINDS)

  for (const key of ['section', 'stack', 'tag'] as const) {
    const value = options[key]
    if (value !== undefined && (typeof value !== 'string' || value.trim() === '')) {
      throw new UsageError(`--${key} requires a non-empty value`)
    }
  }

  let paywall = options.paywall
  if (paywall !== undefined) {
    if (typeof paywall !== 'string') {
      throw new UsageError(`--paywall must be one of: ${PAYWALLS.join(', ')}`)
    }
    const normalized = paywall.trim().toLowerCase()
    if (!PAYWALLS.some((value) => value === normalized)) {
      throw new UsageError(`--paywall must be one of: ${PAYWALLS.join(', ')}`)
    }
    paywall = normalized
  }

  for (const key of ['agent', 'oss'] as const) {
    if (options[key] !== undefined && typeof options[key] !== 'boolean') {
      throw new UsageError(`--${key} is a boolean flag`)
    }
  }

  if (options.includeUnreachable !== undefined && typeof options.includeUnreachable !== 'boolean') {
    throw new UsageError('--include-unreachable is a boolean flag')
  }

  if (options.limit !== undefined && typeof options.limit !== 'number') {
    throw new UsageError('--limit must be a positive integer')
  }
  const limit = options.limit === undefined ? DEFAULT_LIMIT : options.limit
  if (!Number.isSafeInteger(limit) || limit <= 0 || Object.is(limit, -0)) {
    throw new UsageError('--limit must be a positive integer')
  }

  const mode = validateCsvEnum(options.mode, 'mode', EXECUTION_MODES)
  const surface = validateCsvEnum(options.surface, 'surface', SURFACES)

  return { ...options, kind, paywall, limit, mode, surface }
}

function excerptFor(resource: Resource, terms: string[]): string {
  const text = resource.markdown.replace(/\s+/g, ' ').trim() || searchableText(resource.meta, new WeakSet())
  const lowerText = text.toLowerCase()
  let firstMatch = -1
  for (const term of terms) {
    const index = lowerText.indexOf(term.toLowerCase())
    if (index !== -1 && (firstMatch === -1 || index < firstMatch)) firstMatch = index
  }

  const budget = EXCERPT_LIMIT - 4
  const start = firstMatch < 0 ? 0 : Math.max(0, firstMatch - Math.floor(budget / 3))
  const end = Math.min(text.length, start + budget)
  const snippet = text.slice(start, end)
  return `${start > 0 ? '…' : ''}${snippet}${end < text.length ? '…' : ''}`
}

/** Search full Markdown and metadata using rankDocuments. */
export function searchResources(resources: Resource[], query: string, options: SearchOptions = {}): SearchResult {
  if (typeof query !== 'string') throw new UsageError('search query must be text')
  const validated = validateSearchOptions(options)

  const selectedKinds = new Set(validated.kind !== undefined ? validated.kind.split(',') : ['tool'])
  const selectedModes = validated.mode !== undefined ? new Set(validated.mode.split(',')) : undefined
  const selectedSurfaces = validated.surface !== undefined ? validated.surface.split(',') : undefined
  const canonicalStack = validated.stack !== undefined ? normalizeStack(validated.stack) : undefined
  const targetTag = validated.tag !== undefined ? validated.tag.trim().toLowerCase() : undefined

  // 1. Filter BEFORE ranking
  const filtered = resources.filter((resource) => {
    const resourceKind: ResourceKind = resource.kind ?? 'tool'
    if (!selectedKinds.has(resourceKind)) {
      return false
    }

    const meta = resource.meta ?? {}

    // Unreachable filter
    const status = typeof meta.status === 'string' ? meta.status.trim().toLowerCase() : 'active'
    if (!validated.includeUnreachable && status === 'unreachable') {
      return false
    }

    // Mode filter (comma OR)
    if (selectedModes !== undefined) {
      const rawMode = meta.execution_mode
      const resourceMode = typeof rawMode === 'string' ? rawMode.trim().toLowerCase() : undefined
      if (resourceMode === undefined || !selectedModes.has(resourceMode)) {
        return false
      }
    }

    // Surface filter (comma OR)
    if (selectedSurfaces !== undefined) {
      const rawSurface = meta.surface
      const resourceSurfaces = Array.isArray(rawSurface)
        ? rawSurface.filter((s): s is string => typeof s === 'string').map((s) => s.trim().toLowerCase())
        : typeof rawSurface === 'string'
          ? [rawSurface.trim().toLowerCase()]
          : []
      if (resourceSurfaces.length === 0 || !selectedSurfaces.some((s) => resourceSurfaces.includes(s))) {
        return false
      }
    }

    // Section filter
    if (
      validated.section !== undefined &&
      resource.section_slug.toLowerCase() !== validated.section.trim().toLowerCase() &&
      String(meta.section ?? '').toLowerCase() !== validated.section.trim().toLowerCase()
    ) {
      return false
    }

    // Stack filter (canonicalized via normalizeStack)
    if (canonicalStack !== undefined) {
      const stackValue = meta.stack
      const stacks = Array.isArray(stackValue) ? stackValue : typeof stackValue === 'string' ? [stackValue] : []
      if (!stacks.some((val) => typeof val === 'string' && normalizeStack(val) === canonicalStack)) {
        return false
      }
    }

    // Tag filter (exact match on category_tags or tags)
    if (targetTag !== undefined) {
      const categoryTags = Array.isArray(meta.category_tags)
        ? meta.category_tags
        : typeof meta.category_tags === 'string'
          ? [meta.category_tags]
          : []
      const tags = Array.isArray(meta.tags) ? meta.tags : typeof meta.tags === 'string' ? [meta.tags] : []
      const allTags = [...categoryTags, ...tags]
      if (!allTags.some((t) => typeof t === 'string' && t.trim().toLowerCase() === targetTag)) {
        return false
      }
    }

    // Paywall filter (tools only)
    if (validated.paywall !== undefined && (resourceKind !== 'tool' || resource.paywall !== validated.paywall)) {
      return false
    }

    // Agent filter
    if (validated.agent === true && resource.agent_friendly !== true) {
      return false
    }

    // OSS filter
    if (validated.oss === true && resource.open_source !== true) {
      return false
    }

    return true
  })

  // 2. Feed ranker Resource records with body=markdown and custom metadata
  const docsForRanker = filtered.map((resource) => {
    const extraMeta = searchableText(
      {
        doc: resource.doc,
        source_url: resource.source_url,
        ...resource.meta
      },
      new WeakSet()
    )
    const body = `${resource.markdown}\n${extraMeta}`
    return {
      ...resource,
      body
    }
  })

  const ranked = rankDocuments(docsForRanker, query)
  const terms = query.trim() === '' ? [] : query.trim().split(/\s+/)

  return {
    query,
    total: ranked.length,
    results: ranked.slice(0, validated.limit).map((r) => {
      const resource = r.document
      const matchedTerms = r.matched_terms.length > 0 ? r.matched_terms : query.trim() === '' ? [] : terms
      return {
        kind: resource.kind ?? 'tool',
        id: resource.id,
        name: resource.name,
        section_slug: resource.section_slug,
        slug: resource.slug,
        paywall: resource.paywall,
        agent_friendly: resource.agent_friendly,
        source_url: resource.source_url,
        last_verified: resource.last_verified,
        doc: resource.doc,
        matched_terms: [...r.matched_terms],
        excerpt: excerptFor(resource, matchedTerms)
      }
    })
  }
}
