import { describe, expect, test } from 'bun:test'
import * as links from './link-check-lib'

const observation = {
  url: 'https://example.test/',
  final_url: null,
  http_status: null,
  error: null,
  checked: '2026-10-15'
}

describe('availability evidence boundaries', () => {
  test('resource status comes only from its primary URL, not a broken example link', () => {
    const build = (
      links as unknown as {
        buildResourceStatusReport: (
          resources: unknown[],
          observations: Map<string, links.StatusSuggestion>
        ) => links.StatusSuggestion[]
      }
    ).buildResourceStatusReport
    expect(typeof build).toBe('function')
    const primary = links.suggestStatus({ ...observation, final_url: observation.url, http_status: 200 })
    const example = links.suggestStatus({ ...observation, url: 'https://example.test/old-demo', http_status: 404 })
    const report = build(
      [
        {
          id: 'icons/example',
          doc: 'docs/design/icons/example.md',
          source_url: observation.url,
          current_status: 'active'
        }
      ],
      new Map([
        [primary.url, primary],
        [example.url, example]
      ])
    )
    expect(report).toHaveLength(1)
    expect(report[0].url).toBe('https://example.test/')
    expect(report[0].suggested_status).toBe('active')
  })
  test('temporary DNS errors are not evidence of permanent removal', () => {
    expect(links.suggestStatus({ ...observation, error: 'getaddrinfo EAI_AGAIN example.test' }).suggested_status).toBe(
      'degraded'
    )
    expect(links.suggestStatus({ ...observation, error: 'DNS request timed out' }).suggested_status).toBe('degraded')
    expect(links.suggestStatus({ ...observation, error: 'getaddrinfo ENOTFOUND example.test' }).suggested_status).toBe(
      'unreachable'
    )
  })

  test('generic paused wording is not a known provider signature', () => {
    expect(links.isKnownPausedResponse(402, new Headers(), 'This deployment is temporarily paused')).toBe(false)
    expect(
      links.isKnownPausedResponse(402, new Headers({ server: 'Vercel' }), 'This deployment is temporarily paused')
    ).toBe(true)
    expect(links.isKnownPausedResponse(402, new Headers({ 'x-vercel-error': 'DEPLOYMENT_DISABLED' }), '')).toBe(true)
  })

  test('invalid link flags fail before any network request', () => {
    const parse = (links as unknown as { parseLinkOptions: (args: string[]) => unknown }).parseLinkOptions
    expect(typeof parse).toBe('function')
    for (const args of [
      ['--section'],
      ['--section', '--status'],
      ['--unknown'],
      ['--section='],
      ['../secrets'],
      ['*'],
      ['icons', 'comics']
    ]) {
      expect(() => parse(args)).toThrow()
    }
    expect(parse(['icons', '--status', '--json'])).toEqual({ section: 'icons', status: true, json: true })
  })
})
