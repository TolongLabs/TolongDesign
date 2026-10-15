import { describe, expect, test } from 'bun:test'
import { join } from 'node:path'

const sourceRoot = join(import.meta.dir, '..')
const findEntrypoint = join(import.meta.dir, 'find.ts')
const designEntrypoint = join(import.meta.dir, 'design.ts')

function decode(bytes: Uint8Array) {
  return new TextDecoder().decode(bytes)
}

function runFind(args: string[]) {
  const result = Bun.spawnSync({
    cmd: [process.execPath, findEntrypoint, ...args],
    cwd: sourceRoot,
    stdout: 'pipe',
    stderr: 'pipe'
  })

  return {
    code: result.exitCode,
    stdout: decode(result.stdout),
    stderr: decode(result.stderr)
  }
}

function runDesign(args: string[]) {
  const result = Bun.spawnSync({
    cmd: [process.execPath, designEntrypoint, ...args],
    cwd: sourceRoot,
    stdout: 'pipe',
    stderr: 'pipe'
  })

  return {
    code: result.exitCode,
    stdout: decode(result.stdout),
    stderr: decode(result.stderr)
  }
}

describe('find CLI outputs and flag validation', () => {
  test('returns flat metadata array for --json without design wrapper or markdown', () => {
    const result = runFind(['scroll', '--section', 'motion', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(Array.isArray(parsed)).toBe(true)
    expect(parsed.length).toBeGreaterThan(0)
    const first = parsed[0]
    expect(first).toHaveProperty('name')
    expect(first).toHaveProperty('slug')
    expect(first).toHaveProperty('section_slug')
    expect(first).toHaveProperty('doc')
    expect(first).not.toHaveProperty('results')
    expect(first).not.toHaveProperty('markdown')
  })

  test('allows empty query text and returns all matching tools', () => {
    const result = runFind(['--section', 'motion', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(Array.isArray(parsed)).toBe(true)
    expect(parsed.length).toBeGreaterThan(0)
  })

  test('respects --limit when specified', () => {
    const result = runFind(['--section', 'motion', '--limit', '2', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(parsed.length).toBe(2)
  })

  test('renders cards bounded to 320 chars with --format card', () => {
    const result = runFind(['lucide', '--section', 'icons', '--format', 'card'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('name:')
    expect(result.stdout).toContain('id: icons/lucide')

    const cards = result.stdout.trim().split('\n\n')
    for (const card of cards) {
      expect(card.length).toBeLessThanOrEqual(320)
    }
  })

  test('rejects combining --json with --format card', () => {
    const result = runFind(['scroll', '--format', 'card', '--json'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('--json')
  })

  test('rejects invalid --format value', () => {
    const result = runFind(['scroll', '--format', 'invalid'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('format')
  })

  test('rejects unknown flags', () => {
    const result = runFind(['scroll', '--unknown-flag'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('unknown')
  })

  test('rejects duplicate flags', () => {
    const result = runFind(['scroll', '--paywall', 'free', '--paywall', 'paid'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('more than once')
  })

  test('outputs default human line format with match count footer', () => {
    const result = runFind(['scroll', '--section', 'motion'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    expect(result.stdout).toMatch(/\n\d+ match\(es\)\n/)
  })

  test('ranks the same IDs in identical order as design search', () => {
    const findResult = runFind(['scroll', '--section', 'motion', '--limit', '5', '--json'])
    const designResult = runDesign(['search', 'scroll', '--section', 'motion', '--limit', '5', '--json'])

    expect(findResult.code).toBe(0)
    expect(designResult.code).toBe(0)
    const findHits = JSON.parse(findResult.stdout)
    const designHits = JSON.parse(designResult.stdout).results

    const findIds = findHits.map((h: { section_slug: string; slug: string }) => `${h.section_slug}/${h.slug}`)
    const designIds = designHits.map((h: { id: string }) => h.id)

    expect(findIds).toEqual(designIds)
  })
})
