export type LinkObservation = {
  url: string
  final_url: string | null
  http_status: number | null
  error: string | null
  checked: string
  paused?: boolean
}

export type StatusSuggestion = LinkObservation & {
  suggested_status: 'active' | 'degraded' | 'unreachable' | null
  reason: string
}

export function parseLinkOptions(args: string[]): { section?: string; status: boolean; json: boolean } {
  let section: string | undefined
  let status = false
  let json = false
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i]
    if (arg === '--') continue
    if (arg === '--status') {
      if (status) throw new Error('--status was provided more than once')
      status = true
    } else if (arg === '--json') {
      if (json) throw new Error('--json was provided more than once')
      json = true
    } else {
      let value: string
      if (arg === '--section') {
        value = args[++i] ?? ''
      } else if (arg.startsWith('--section=')) {
        value = arg.slice('--section='.length)
      } else if (arg.startsWith('-')) {
        throw new Error(`unknown flag: ${arg}`)
      } else {
        value = arg
      }
      if (section !== undefined) throw new Error('provide exactly one section')
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) throw new Error('--section requires a section slug')
      section = value
    }
  }
  return { ...(section === undefined ? {} : { section }), status, json }
}

export function buildResourceStatusReport(
  resources: { id: string; doc: string; source_url: string; current_status: string | null }[],
  observations: Map<string, StatusSuggestion>
) {
  return resources.map((resource) => {
    const observation = observations.get(resource.source_url)
    if (!observation) throw new Error(`source URL was not checked: ${resource.id}`)
    return {
      ...observation,
      id: resource.id,
      doc: resource.doc,
      current_status: resource.current_status,
      review_required: true
    }
  })
}

const DEFAULT_UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36'

export type ObserveOptions = {
  timeoutMs?: number
  userAgent?: string
  fetchFn?: typeof fetch
  maxBodyBytes?: number
}

function isDnsError(err: string): boolean {
  return /\b(enotfound|err_name_not_resolved)\b/i.test(err)
}

function isTimeoutError(err: string): boolean {
  return /\b(etimedout|timeout)\b|timed?\s*out|abort/i.test(err)
}

export function isKnownPausedResponse(
  status: number,
  headers: Headers | Record<string, string | null | undefined>,
  bodySnippet: string
): boolean {
  if (status !== 402) return false

  const header = (name: string) => (headers instanceof Headers ? headers.get(name) : headers[name])
  const vercelHeader = header('x-vercel-error')
  if (vercelHeader && /^deployment_(paused|disabled)$/i.test(vercelHeader)) {
    return true
  }
  if (!/vercel/i.test(header('server') ?? '') && !header('x-vercel-id')) return false

  const pausedPattern =
    /deployment\s+(paused|disabled)|deployment\s+is\s+(temporarily\s+)?(paused|disabled)|deployment_(paused|disabled)|this\s+deployment\s+has\s+been\s+(paused|disabled)/i
  return pausedPattern.test(bodySnippet)
}

/**
 * Pure classifier: maps a link observation to a status suggestion and human-readable reason.
 * - 2xx -> 'active'
 * - 404, 410, confirmed DNS failure, or 402 with confirmed paused response -> 'unreachable'
 * - 401, 403, 429 -> null (blocked/undetermined)
 * - timeouts, 5xx, generic 402, and other inconclusive failures -> 'degraded'
 */
export function suggestStatus(observation: LinkObservation): StatusSuggestion {
  const { http_status, error, paused, url, final_url } = observation

  if (http_status !== null) {
    if (http_status >= 200 && http_status < 300) {
      const redirectNote = final_url && final_url !== url ? ` (redirected to ${final_url})` : ''
      return {
        ...observation,
        suggested_status: 'active',
        reason: `HTTP ${http_status} OK${redirectNote}`
      }
    }

    if (http_status === 404) {
      return {
        ...observation,
        suggested_status: 'unreachable',
        reason: 'HTTP 404 Not Found'
      }
    }

    if (http_status === 410) {
      return {
        ...observation,
        suggested_status: 'unreachable',
        reason: 'HTTP 410 Gone'
      }
    }

    if (http_status === 402) {
      if (paused === true) {
        return {
          ...observation,
          suggested_status: 'unreachable',
          reason: 'HTTP 402 deployment paused'
        }
      }
      return {
        ...observation,
        suggested_status: 'degraded',
        reason: 'HTTP 402 Payment Required (generic/unconfirmed)'
      }
    }

    if (http_status === 401 || http_status === 403 || http_status === 429) {
      return {
        ...observation,
        suggested_status: null,
        reason: `HTTP ${http_status} blocked or rate-limited (undetermined)`
      }
    }

    if (http_status >= 500 && http_status < 600) {
      return {
        ...observation,
        suggested_status: 'degraded',
        reason: `HTTP ${http_status} server error`
      }
    }

    return {
      ...observation,
      suggested_status: 'degraded',
      reason: `HTTP ${http_status} inconclusive failure`
    }
  }

  if (error !== null) {
    if (isDnsError(error)) {
      return {
        ...observation,
        suggested_status: 'unreachable',
        reason: `DNS resolution failed (${error})`
      }
    }

    if (isTimeoutError(error)) {
      return {
        ...observation,
        suggested_status: 'degraded',
        reason: `Request timed out (${error})`
      }
    }

    return {
      ...observation,
      suggested_status: 'degraded',
      reason: `Network failure (${error})`
    }
  }

  return {
    ...observation,
    suggested_status: null,
    reason: 'No status or error observed'
  }
}

/**
 * Fetch and observe a single URL with bounded timeout and bounded content inspection.
 */
export async function observeLink(url: string, options: ObserveOptions = {}): Promise<LinkObservation> {
  const { timeoutMs = 20_000, userAgent = DEFAULT_UA, fetchFn = fetch, maxBodyBytes = 16_384 } = options

  const checked = new Date().toISOString().slice(0, 10)

  try {
    const res = await fetchFn(url, {
      redirect: 'follow',
      headers: { 'user-agent': userAgent },
      signal: AbortSignal.timeout(timeoutMs)
    })

    const final_url = res.url || url
    const http_status = res.status
    let paused: boolean | undefined = undefined

    if (http_status === 402) {
      let bodySnippet = ''
      if (res.body) {
        const reader = res.body.getReader()
        const chunks: Uint8Array[] = []
        let total = 0
        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done || !value) break
            const remaining = maxBodyBytes - total
            if (value.length <= remaining) {
              chunks.push(value)
              total += value.length
              if (total >= maxBodyBytes) {
                await reader.cancel()
                break
              }
            } else {
              chunks.push(value.subarray(0, remaining))
              total += remaining
              await reader.cancel()
              break
            }
          }
        } catch {
          // bounded stream error ignored
        }
        bodySnippet = new TextDecoder().decode(Buffer.concat(chunks))
      }
      paused = isKnownPausedResponse(http_status, res.headers, bodySnippet)
    } else {
      if (res.body) {
        try {
          await res.body.cancel()
        } catch {
          // ignore stream cancel error
        }
      }
    }

    return {
      url,
      final_url,
      http_status,
      error: null,
      checked,
      paused
    }
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err)
    return {
      url,
      final_url: null,
      http_status: null,
      error,
      checked,
      paused: undefined
    }
  }
}

/**
 * Concurrency-bounded link checker returning status suggestions.
 */
export async function checkLinksBatch(
  urls: string[],
  options: ObserveOptions & { concurrency?: number } = {}
): Promise<Map<string, StatusSuggestion>> {
  const concurrency = options.concurrency ?? 24
  const results = new Map<string, StatusSuggestion>()
  const queue = [...urls]

  await Promise.all(
    Array.from({ length: Math.min(concurrency, queue.length || 1) }, async () => {
      while (queue.length) {
        const url = queue.shift()!
        const obs = await observeLink(url, options)
        results.set(url, suggestStatus(obs))
      }
    })
  )

  return results
}
