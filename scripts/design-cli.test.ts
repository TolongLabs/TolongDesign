import { afterEach, describe, expect, test } from 'bun:test'
import { mkdtempSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const sourceRoot = join(import.meta.dir, '..')
const entrypoint = join(import.meta.dir, 'design.ts')
const temporaryCwds: string[] = []

afterEach(() => {
  for (const cwd of temporaryCwds.splice(0)) {
    rmSync(cwd, { recursive: true, force: true })
  }
})

function temporaryCwd() {
  const cwd = mkdtempSync(join(tmpdir(), 'tolong-design-cli-'))
  temporaryCwds.push(cwd)
  return cwd
}

function decode(bytes: Uint8Array) {
  return new TextDecoder().decode(bytes)
}

function runCli(args: string[], cwd = sourceRoot) {
  const result = Bun.spawnSync({
    cmd: [process.execPath, entrypoint, ...args],
    cwd,
    stdout: 'pipe',
    stderr: 'pipe'
  })

  return {
    code: result.exitCode,
    stdout: decode(result.stdout),
    stderr: decode(result.stderr)
  }
}

describe('design CLI output', () => {
  test('writes parseable JSON without other stdout for a populated search', () => {
    const result = runCli(['search', 'scroll', '--section', 'motion', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const output = JSON.parse(result.stdout)
    expect(output.query).toBe('scroll')
    expect(output.total).toBeGreaterThan(0)
    expect(Array.isArray(output.results)).toBe(true)
  })

  test('returns valid empty JSON and a success exit code when a search has no matches', () => {
    const result = runCli(['search', 'never_present_cli_term_82d9f3', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    expect(JSON.parse(result.stdout)).toMatchObject({
      query: 'never_present_cli_term_82d9f3',
      total: 0,
      results: []
    })
  })

  test('keeps gallery results unless the caller requests agent-friendly tools', () => {
    const all = runCli(['search', 'saaspo', '--json'])
    const agentOnly = runCli(['search', 'saaspo', '--agent', '--json'])
    const agentSearch = runCli(['search', 'scroll', '--section', 'motion', '--agent', '--json'])

    expect(all.code).toBe(0)
    expect(agentOnly.code).toBe(0)
    expect(agentSearch.code).toBe(0)
    const allResults = JSON.parse(all.stdout).results
    const agentResults = JSON.parse(agentOnly.stdout).results
    const matchingAgentResults = JSON.parse(agentSearch.stdout).results
    expect(
      allResults.some(
        (resource: { slug: string; agent_friendly: boolean }) =>
          resource.slug === 'saaspo' && resource.agent_friendly === false
      )
    ).toBe(true)
    expect(agentResults.some((resource: { slug: string }) => resource.slug === 'saaspo')).toBe(false)
    expect(matchingAgentResults.length).toBeGreaterThan(0)
    expect(matchingAgentResults.every((resource: { agent_friendly: boolean }) => resource.agent_friendly)).toBe(true)
  })

  test('excludes proprietary resources when the OSS filter is requested', () => {
    const all = runCli(['search', 'gsap', '--json'])
    const openSourceOnly = runCli(['search', 'gsap', '--oss', '--json'])

    expect(all.code).toBe(0)
    expect(openSourceOnly.code).toBe(0)
    expect(openSourceOnly.stderr).toBe('')
    const allResults = JSON.parse(all.stdout).results
    const openSourceResults = JSON.parse(openSourceOnly.stdout).results
    expect(allResults.some((resource: { slug: string }) => resource.slug === 'gsap')).toBe(true)
    expect(openSourceResults.some((resource: { slug: string }) => resource.slug === 'gsap')).toBe(false)
  })

  test('uses the source catalogue when the absolute entrypoint runs from another working directory', () => {
    const result = runCli(['show', 'gsap', '--json'], temporaryCwd())

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const output = JSON.parse(result.stdout)
    expect(output.slug).toBe('gsap')
    expect(output.markdown).toContain('## Agent notes')
  })
})

describe('design CLI argument errors', () => {
  const invalidInvocations: Array<[string, string[]]> = [
    ['unknown command', ['summarize']],
    ['unknown option', ['search', 'scroll', '--unknown']],
    ['missing section value', ['search', 'scroll', '--section']],
    ['flag used as section value', ['search', 'scroll', '--section', '-q']],
    ['missing limit value', ['search', 'scroll', '--limit']],
    ['invalid paywall', ['search', 'scroll', '--paywall', 'unlimited']],
    ['zero limit', ['search', 'scroll', '--limit', '0']],
    ['non-integer limit', ['search', 'scroll', '--limit', '1.5']],
    ['unexpected show argument', ['show', 'gsap', 'extra']],
    ['invalid format value', ['search', 'scroll', '--format', 'table']],
    ['format card with json', ['search', 'scroll', '--format', 'card', '--json']],
    ['json with format card', ['search', 'scroll', '--json', '--format', 'card']],
    ['duplicate mode flag', ['search', 'scroll', '--mode', 'registry', '--mode', 'package']],
    ['invalid mode enum', ['search', 'scroll', '--mode', 'unknown-mode']],
    ['empty mode entry', ['search', 'scroll', '--mode', 'registry,']],
    ['duplicate surface flag', ['search', 'scroll', '--surface', 'web-ui', '--surface', 'comics']],
    ['invalid surface enum', ['search', 'scroll', '--surface', 'unknown-surface']],
    ['boolean flag with value', ['search', 'scroll', '--include-unreachable=true']]
  ]

  for (const [label, args] of invalidInvocations) {
    test(`rejects ${label} without writing stdout`, () => {
      const result = runCli(args)

      expect(result.code).toBe(2)
      expect(result.stdout).toBe('')
      expect(result.stderr.length).toBeGreaterThan(0)
    })
  }

  test('reports an unknown resource without emitting partial output', () => {
    const result = runCli(['show', 'not-a-registered-resource', '--json'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr.length).toBeGreaterThan(0)
  })
})

describe('design search cards and query behavior', () => {
  test('renders cards bounded to 320 characters per result', () => {
    const result = runCli(['search', 'lucide', '--section', 'icons', '--format', 'card'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('name:')
    expect(result.stdout).toContain('id: icons/lucide')
    expect(result.stdout).toContain('mode:')
    expect(result.stdout).toContain('doc: docs/design/icons/lucide.md')

    const cards = result.stdout.trim().split('\n\n')
    for (const card of cards) {
      expect(card.length).toBeLessThanOrEqual(320)
    }
  })

  test('unknown search query returns exit code 0 and empty stdout for card format', () => {
    const result = runCli(['search', 'never_present_query_83hf93b', '--format', 'card'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    expect(result.stdout).toBe('')
  })

  test('repeated query terms produce stable search results', () => {
    const single = runCli(['search', 'scroll', '--section', 'motion', '--json'])
    const repeated = runCli(['search', 'scroll scroll', '--section', 'motion', '--json'])

    expect(single.code).toBe(0)
    expect(repeated.code).toBe(0)
    const singleResults = JSON.parse(single.stdout).results
    const repeatedResults = JSON.parse(repeated.stdout).results
    expect(repeatedResults.map((r: { id: string }) => r.id)).toEqual(singleResults.map((r: { id: string }) => r.id))
  })
})
