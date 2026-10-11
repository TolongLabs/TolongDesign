import { afterAll, describe, expect, test } from 'bun:test'
import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const root = join(import.meta.dir, '..')
const entrypoint = join(root, 'scripts/design.ts')
const target = mkdtempSync(join(tmpdir(), 'tolong-design-target-'))
const decode = (bytes: Uint8Array) => new TextDecoder().decode(bytes)
const run = (args: string[], cwd = root) => {
  const result = Bun.spawnSync({ cmd: [process.execPath, entrypoint, ...args], cwd, stdout: 'pipe', stderr: 'pipe' })
  return { code: result.exitCode, stdout: decode(result.stdout), stderr: decode(result.stderr) }
}

afterAll(() => rmSync(target, { recursive: true, force: true }))

describe('private design CLI contract', () => {
  test('help succeeds without requiring a project brief', () => {
    const result = run(['--help'])
    expect(result.code).toBe(0)
    expect(result.stdout).toContain('search')
    expect(result.stderr).toBe('')
  })

  test('finds scroll storytelling resources through document content', () => {
    const result = run(['search', 'scroll', '--section', 'motion', '--json'])
    expect(result.code).toBe(0)
    const output = JSON.parse(result.stdout)
    expect(output.results.some((resource: { slug: string }) => resource.slug === 'gsap')).toBe(true)
    expect(output.total).toBeGreaterThan(0)
    expect(result.stderr).toBe('')
  })

  test('keeps inspiration galleries without direct agent integrations', () => {
    const result = run(['search', 'saaspo', '--json'])
    expect(result.code).toBe(0)
    const output = JSON.parse(result.stdout)
    expect(
      output.results.some(
        (resource: { slug: string; agent_friendly: boolean }) =>
          resource.slug === 'saaspo' && resource.agent_friendly === false
      )
    ).toBe(true)
  })

  test('exports entire selected docs and hashes in requested order', () => {
    const result = run(['context', 'gsap', 'saaspo', 'gsap', '--brief', 'Dictation landing page', '--json'])
    expect(result.code).toBe(0)
    const output = JSON.parse(result.stdout)
    expect(output.schema_version).toBe(1)
    expect(output.brief).toBe('Dictation landing page')
    expect(output.resources.map((resource: { slug: string }) => resource.slug)).toEqual(['gsap', 'saaspo'])
    const original = readFileSync(join(root, 'docs/design/motion/gsap.md'), 'utf8')
    expect(output.resources[0].markdown).toBe(original)
    expect(output.resources[0].sha256).toBe(createHash('sha256').update(original).digest('hex'))
    expect(output.resources[0].source_url).toBe('https://gsap.com/')
  })

  test('uses the source catalogue when launched in another project', () => {
    const result = run(['show', 'react-three-fiber', '--json'], target)
    expect(result.code).toBe(0)
    const output = JSON.parse(result.stdout)
    expect(output.slug).toBe('react-three-fiber')
    expect(output.markdown).toContain('## Agent notes')
  })

  test('fails a context request atomically for an unknown tool', () => {
    const result = run(['context', 'gsap', 'tool-that-does-not-exist', '--json'])
    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr.length).toBeGreaterThan(0)
  })

  test('reports usage errors without polluting JSON stdout', () => {
    const result = run(['search', 'scroll', '--limit', '0', '--json'])
    expect(result.code).toBe(2)
    expect(result.stdout).toBe('')
    expect(result.stderr.length).toBeGreaterThan(0)
  })
})
