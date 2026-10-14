import { afterAll, beforeAll, describe, expect, test } from 'bun:test'
import type { Server } from 'bun'
import { type LinkObservation, type StatusSuggestion, observeLink, suggestStatus } from './link-check-lib'

describe('suggestStatus pure classifier', () => {
  const today = '2026-10-15'

  test('classifies HTTP 200 as active', () => {
    const obs: LinkObservation = {
      url: 'https://example.com',
      final_url: 'https://example.com',
      http_status: 200,
      error: null,
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('active')
    expect(res.reason).toMatch(/200/)
    expect(res.url).toBe(obs.url)
    expect(res.final_url).toBe(obs.final_url)
  })

  test('classifies HTTP 404 as unreachable', () => {
    const obs: LinkObservation = {
      url: 'https://example.com/not-found',
      final_url: 'https://example.com/not-found',
      http_status: 404,
      error: null,
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('unreachable')
    expect(res.reason).toMatch(/404/)
  })

  test('classifies HTTP 410 as unreachable', () => {
    const obs: LinkObservation = {
      url: 'https://example.com/gone',
      final_url: 'https://example.com/gone',
      http_status: 410,
      error: null,
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('unreachable')
    expect(res.reason).toMatch(/410/)
  })

  test('classifies HTTP 402 with paused provider as unreachable', () => {
    const obs: LinkObservation = {
      url: 'https://butter-nav.vercel.app',
      final_url: 'https://butter-nav.vercel.app',
      http_status: 402,
      error: null,
      checked: today,
      paused: true
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('unreachable')
    expect(res.reason.toLowerCase()).toMatch(/pause/)
  })

  test('classifies generic HTTP 402 without confirmed paused response as degraded', () => {
    const obs: LinkObservation = {
      url: 'https://api.example.com/paywall',
      final_url: 'https://api.example.com/paywall',
      http_status: 402,
      error: null,
      checked: today,
      paused: false
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('degraded')
    expect(res.reason).toMatch(/402/)
  })

  test('classifies DNS resolution failure as unreachable', () => {
    const obs: LinkObservation = {
      url: 'https://hexter-ui.com',
      final_url: null,
      http_status: null,
      error: 'getaddrinfo ENOTFOUND hexter-ui.com',
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('unreachable')
    expect(res.reason.toLowerCase()).toMatch(/dns/)
  })

  test('classifies timeout as degraded', () => {
    const obs: LinkObservation = {
      url: 'https://example.com/slow',
      final_url: null,
      http_status: null,
      error: 'The operation timed out',
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('degraded')
    expect(res.reason.toLowerCase()).toMatch(/time(d\s*)?out/)
  })

  test('classifies HTTP 503 as degraded', () => {
    const obs: LinkObservation = {
      url: 'https://example.com/unavailable',
      final_url: 'https://example.com/unavailable',
      http_status: 503,
      error: null,
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('degraded')
    expect(res.reason).toMatch(/503/)
  })

  test('classifies HTTP 401, 403, and 429 as null (blocked/undetermined)', () => {
    for (const code of [401, 403, 429]) {
      const obs: LinkObservation = {
        url: `https://example.com/${code}`,
        final_url: `https://example.com/${code}`,
        http_status: code,
        error: null,
        checked: today
      }
      const res = suggestStatus(obs)
      expect(res.suggested_status).toBeNull()
      expect(res.reason).toMatch(new RegExp(String(code)))
    }
  })

  test('preserves redirect final URL and classifies 200 as active', () => {
    const obs: LinkObservation = {
      url: 'http://example.com',
      final_url: 'https://example.com/welcome',
      http_status: 200,
      error: null,
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('active')
    expect(res.final_url).toBe('https://example.com/welcome')
    expect(res.url).toBe('http://example.com')
  })

  test('does not infer replacement or coming-soon from HTTP 200', () => {
    const obs: LinkObservation = {
      url: 'https://curated.domains',
      final_url: 'https://curated.domains',
      http_status: 200,
      error: null,
      checked: today
    }
    const res = suggestStatus(obs)
    expect(res.suggested_status).toBe('active')
  })
})

describe('observeLink with local HTTP fixtures (no external network)', () => {
  let server: Server
  let baseUrl: string

  beforeAll(() => {
    server = Bun.serve({
      port: 0,
      fetch(req) {
        const url = new URL(req.url)
        if (url.pathname === '/ok') {
          return new Response('all good', { status: 200 })
        }
        if (url.pathname === '/redirect') {
          return Response.redirect(`${baseUrl}/ok`, 302)
        }
        if (url.pathname === '/404') {
          return new Response('not found', { status: 404 })
        }
        if (url.pathname === '/410') {
          return new Response('gone', { status: 410 })
        }
        if (url.pathname === '/paused-vercel') {
          return new Response(
            '<html><head><title>Deployment Paused</title></head><body>This deployment is temporarily paused.</body></html>',
            {
              status: 402,
              headers: {
                'x-vercel-error': 'DEPLOYMENT_PAUSED',
                'content-type': 'text/html'
              }
            }
          )
        }
        if (url.pathname === '/disabled-vercel') {
          return new Response('Payment required\n\nDEPLOYMENT_DISABLED', {
            status: 402,
            headers: {
              'x-vercel-error': 'DEPLOYMENT_DISABLED',
              'content-type': 'text/plain; charset=utf-8'
            }
          })
        }
        if (url.pathname === '/generic-402') {
          return new Response('Payment Required', {
            status: 402,
            headers: { 'content-type': 'text/plain' }
          })
        }
        if (url.pathname === '/slow') {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(new Response('finally', { status: 200 }))
            }, 300)
          })
        }
        if (url.pathname === '/large-stream-402') {
          const stream = new ReadableStream({
            start(controller) {
              const chunk = new Uint8Array(4096).fill(65)
              for (let i = 0; i < 20; i++) controller.enqueue(chunk)
              controller.close()
            }
          })
          return new Response(stream, {
            status: 402,
            headers: { 'content-type': 'application/octet-stream' }
          })
        }
        return new Response('fallback', { status: 500 })
      }
    })
    baseUrl = `http://localhost:${server.port}`
  })

  afterAll(() => {
    server.stop()
  })

  test('follows redirects and captures final_url', async () => {
    const obs = await observeLink(`${baseUrl}/redirect`)
    expect(obs.http_status).toBe(200)
    expect(obs.url).toBe(`${baseUrl}/redirect`)
    expect(obs.final_url).toBe(`${baseUrl}/ok`)
    const suggestion = suggestStatus(obs)
    expect(suggestion.suggested_status).toBe('active')
  })

  test('detects paused 402 and bounded inspection', async () => {
    const obs = await observeLink(`${baseUrl}/paused-vercel`)
    expect(obs.http_status).toBe(402)
    expect(obs.paused).toBe(true)
    const suggestion = suggestStatus(obs)
    expect(suggestion.suggested_status).toBe('unreachable')
    expect(suggestion.reason.toLowerCase()).toMatch(/pause/)
  })

  test('detects provider DEPLOYMENT_DISABLED 402 as paused and unreachable', async () => {
    const obs = await observeLink(`${baseUrl}/disabled-vercel`)
    expect(obs.http_status).toBe(402)
    expect(obs.paused).toBe(true)
    const suggestion = suggestStatus(obs)
    expect(suggestion.suggested_status).toBe('unreachable')
    expect(suggestion.reason.toLowerCase()).toMatch(/pause/)
  })

  test('detects generic 402 without paused flag', async () => {
    const obs = await observeLink(`${baseUrl}/generic-402`)
    expect(obs.http_status).toBe(402)
    expect(obs.paused).toBe(false)
    const suggestion = suggestStatus(obs)
    expect(suggestion.suggested_status).toBe('degraded')
  })

  test('handles slow response with timeout', async () => {
    const obs = await observeLink(`${baseUrl}/slow`, { timeoutMs: 50 })
    expect(obs.http_status).toBeNull()
    expect(obs.error).not.toBeNull()
    const suggestion = suggestStatus(obs)
    expect(suggestion.suggested_status).toBe('degraded')
    expect(suggestion.reason.toLowerCase()).toMatch(/time(d\s*)?out/)
  })

  test('bounds body inspection on large 402 response and cancels body', async () => {
    const obs = await observeLink(`${baseUrl}/large-stream-402`, { maxBodyBytes: 1024 })
    expect(obs.http_status).toBe(402)
    expect(obs.paused).toBe(false)
    const suggestion = suggestStatus(obs)
    expect(suggestion.suggested_status).toBe('degraded')
  })

  test('checkLinksBatch concurrently processes multiple URLs', async () => {
    const { checkLinksBatch } = await import('./link-check-lib')
    const urls = [
      `${baseUrl}/ok`,
      `${baseUrl}/redirect`,
      `${baseUrl}/404`,
      `${baseUrl}/paused-vercel`,
      `${baseUrl}/generic-402`
    ]
    const results = await checkLinksBatch(urls, { concurrency: 2 })
    expect(results.size).toBe(5)
    expect(results.get(`${baseUrl}/ok`)?.suggested_status).toBe('active')
    expect(results.get(`${baseUrl}/redirect`)?.suggested_status).toBe('active')
    expect(results.get(`${baseUrl}/404`)?.suggested_status).toBe('unreachable')
    expect(results.get(`${baseUrl}/paused-vercel`)?.suggested_status).toBe('unreachable')
    expect(results.get(`${baseUrl}/generic-402`)?.suggested_status).toBe('degraded')
  })
})

describe('check-links.ts CLI entry point', () => {
  test('handles nonexistent section with --status --json cleanly', () => {
    const proc = Bun.spawnSync(['bun', 'scripts/check-links.ts', 'nonexistent-section-test', '--status', '--json'], {
      cwd: process.cwd()
    })
    expect(proc.exitCode).toBe(0)
    const stdout = proc.stdout.toString()
    const parsed = JSON.parse(stdout)
    expect(Array.isArray(parsed)).toBe(true)
    expect(parsed).toHaveLength(0)
  })

  test('handles nonexistent section default output cleanly', () => {
    const proc = Bun.spawnSync(['bun', 'scripts/check-links.ts', 'nonexistent-section-test'], {
      cwd: process.cwd()
    })
    expect(proc.exitCode).toBe(0)
    const stdout = proc.stdout.toString()
    expect(stdout).toMatch(/0 links checked: 0 broken, 0 bot-blocked/)
  })

  test('handles nonexistent section with --status flag', () => {
    const proc = Bun.spawnSync(['bun', 'scripts/check-links.ts', 'nonexistent-section-test', '--status'], {
      cwd: process.cwd()
    })
    expect(proc.exitCode).toBe(0)
    const stdout = proc.stdout.toString()
    expect(stdout).toMatch(/Status suggestions:/)
  })
})
