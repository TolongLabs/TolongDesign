import { afterEach, describe, expect, test } from 'bun:test'
import { mkdtempSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const sourceRoot = join(import.meta.dir, '..', '..')
const entrypoint = join(import.meta.dir, 'main.ts')
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
    ['boolean flag with value', ['search', 'scroll', '--include-unreachable=true']],
    ['unexpected mcp argument', ['mcp', 'extra']],
    ['unknown mcp flag', ['mcp', '--unknown']]
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
    expect(result.stdout).toContain('doc: catalogue/tools/icons/lucide.md')

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

function runFindAlias(args: string[]) {
  const result = Bun.spawnSync({
    cmd: [process.execPath, 'run', 'find', '--', ...args],
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

// Ported from scripts/find-cli.test.ts when find.ts retired into `search`.
describe('unified search command (find alias)', () => {
  test('returns the search JSON object without full markdown', () => {
    const result = runCli(['search', 'scroll', '--section', 'motion', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(parsed.query).toBe('scroll')
    expect(parsed.total).toBeGreaterThan(0)
    expect(Array.isArray(parsed.results)).toBe(true)
    const first = parsed.results[0]
    expect(first).toHaveProperty('name')
    expect(first).toHaveProperty('slug')
    expect(first).toHaveProperty('section_slug')
    expect(first).toHaveProperty('doc')
    expect(first).not.toHaveProperty('markdown')
  })

  test('allows empty query text and returns all matching tools', () => {
    const result = runCli(['search', '--section', 'motion', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(parsed.query).toBe('')
    expect(parsed.total).toBeGreaterThan(0)
    expect(parsed.results.length).toBeGreaterThan(0)
  })

  test('respects --limit when specified', () => {
    const result = runCli(['search', '--section', 'motion', '--limit', '2', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(parsed.results.length).toBe(2)
  })

  test('renders cards bounded to 320 chars with --format card', () => {
    const result = runCli(['search', 'lucide', '--section', 'icons', '--format', 'card'])

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
    const result = runCli(['search', 'scroll', '--format', 'card', '--json'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('--json')
  })

  test('rejects invalid --format value', () => {
    const result = runCli(['search', 'scroll', '--format', 'invalid'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('format')
  })

  test('rejects unknown flags', () => {
    const result = runCli(['search', 'scroll', '--unknown-flag'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('unknown')
  })

  test('rejects duplicate flags', () => {
    const result = runCli(['search', 'scroll', '--paywall', 'free', '--paywall', 'paid'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('more than once')
  })

  test('outputs default human line format with match count footer', () => {
    const result = runCli(['search', 'scroll', '--section', 'motion'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    expect(result.stdout).toMatch(/\n\d+ match\(es\)\n/)
  })

  test('returns the same IDs in the same order through the find alias', () => {
    const findResult = runFindAlias(['scroll', '--section', 'motion', '--limit', '5', '--json'])
    const designResult = runCli(['search', 'scroll', '--section', 'motion', '--limit', '5', '--json'])

    expect(findResult.code).toBe(0)
    expect(designResult.code).toBe(0)
    const findIds = JSON.parse(findResult.stdout).results.map((h: { id: string }) => h.id)
    const designIds = JSON.parse(designResult.stdout).results.map((h: { id: string }) => h.id)

    expect(findIds).toEqual(designIds)
  })

  test('filters by tag', () => {
    const result = runCli(['search', '--tag', 'react', '--section', 'component-libraries', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(parsed.total).toBeGreaterThan(0)
    expect(parsed.results.length).toBeGreaterThan(0)
  })

  test('rejects a search with no text and no filter', () => {
    const result = runCli(['search'])

    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('search requires text')
  })

  test('returns results for section and paywall filters without text', () => {
    const result = runCli(['search', '--section', 'icons', '--paywall', 'free', '--json'])

    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const parsed = JSON.parse(result.stdout)
    expect(parsed.total).toBeGreaterThan(0)
    expect(
      parsed.results.every(
        (resource: { section_slug: string; paywall: string }) =>
          resource.section_slug === 'icons' && resource.paywall === 'free'
      )
    ).toBe(true)
  })

  test('supports --kind in search with tool default and carries kind in every JSON output', () => {
    const skillRes = runCli(['search', '3d model', '--kind', 'skill', '--json'])
    expect(skillRes.code).toBe(0)
    const skillJson = JSON.parse(skillRes.stdout)
    expect(
      skillJson.results.some((r: { kind: string; id: string }) => r.kind === 'skill' && r.id === 'skill/build-3d-model')
    ).toBe(true)

    const researchRes = runCli(['search', 'spline', '--kind', 'research', '--json'])
    expect(researchRes.code).toBe(0)
    const researchJson = JSON.parse(researchRes.stdout)
    expect(
      researchJson.results.some(
        (r: { kind: string; id: string }) => r.kind === 'research' && r.id === 'research/spline-3d-design'
      )
    ).toBe(true)

    const badKind = runCli(['search', 'scroll', '--kind', 'invalid'])
    expect(badKind.code).toBe(2)
    expect(badKind.stdout).toBe('')
    expect(badKind.stderr).toContain('--kind')
  })

  test('supports skill list, skill show, and research/skill IDs in show and context', () => {
    const listRes = runCli(['skill', 'list', '--json'])
    expect(listRes.code).toBe(0)
    const listJson = JSON.parse(listRes.stdout)
    expect(
      listJson.skills.some((s: { kind: string; slug: string }) => s.kind === 'skill' && s.slug === 'design-project')
    ).toBe(true)

    const showSkillRes = runCli(['skill', 'show', 'design-project'])
    expect(showSkillRes.code).toBe(0)
    expect(showSkillRes.stdout).toContain('design-project')
    expect(showSkillRes.stdout).toContain('skills/design-project/workflow.md')

    const showSkillJsonRes = runCli(['skill', 'show', 'design-project', '--json'])
    expect(showSkillJsonRes.code).toBe(0)
    const showSkillJson = JSON.parse(showSkillJsonRes.stdout)
    expect(showSkillJson.kind).toBe('skill')
    expect(showSkillJson.references).toContain('skills/design-project/workflow.md')

    const showResearch = runCli(['show', 'research/spline-3d-design', '--json'])
    expect(showResearch.code).toBe(0)
    expect(JSON.parse(showResearch.stdout).kind).toBe('research')

    const ctxRes = runCli(['context', 'research/spline-3d-design', 'skill/design-project', '--json'])
    expect(ctxRes.code).toBe(0)
    const ctxJson = JSON.parse(ctxRes.stdout)
    expect(ctxJson.resources.map((r: { kind: string; id: string }) => [r.kind, r.id])).toEqual([
      ['research', 'research/spline-3d-design'],
      ['skill', 'skill/design-project']
    ])

    const ambiguous = runCli(['show', 'line-art-animation'])
    expect(ambiguous.code).toBe(2)
    expect(ambiguous.stdout).toBe('')
    expect(ambiguous.stderr).toContain('ambiguous')

    const badSkillCmd = runCli(['skill', 'bogus'])
    expect(badSkillCmd.code).toBe(2)
    expect(badSkillCmd.stdout).toBe('')

    const help = runCli(['--help'])
    expect(help.code).toBe(0)
    expect(help.stdout).toContain('tolongdesign mcp')
  })
})
