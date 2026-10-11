import { afterAll, describe, expect, test } from 'bun:test'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const source = join(import.meta.dir, '..')
const fixtures: string[] = []
const doc = 'docs/design/fonts/fixture.md'
const sha = (value: string) => createHash('sha256').update(value).digest('hex')
const write = (root: string, path: string, text: string) => {
  mkdirSync(join(root, path, '..'), { recursive: true })
  writeFileSync(join(root, path), text)
}
function fixture(released = false) {
  const root = mkdtempSync(join(tmpdir(), 'td-installation-'))
  fixtures.push(root)
  write(root, 'package.json', JSON.stringify({ name: 'tolong-design', version: '0.1.0', private: true }))
  write(
    root,
    'data/catalogue.json',
    JSON.stringify({
      tools: [
        {
          name: 'Fixture',
          url: 'https://example.com',
          description: 'Fixture',
          section: 'Fonts',
          section_slug: 'fonts',
          slug: 'fixture',
          doc
        }
      ]
    })
  )
  write(root, doc, '---\nname: Fixture\npaywall: free\n---\n# Fixture\n\nComplete original documentation.\n')
  write(root, '.agents/skills/design-project/SKILL.md', '# Fixture skill\n')
  write(root, '.claude/skills/design-project/SKILL.md', '# Fixture skill\n')
  for (const file of ['design.ts', 'design-lib.ts', 'release-info.ts']) {
    const path = join(source, 'scripts', file)
    if (existsSync(path)) write(root, `scripts/${file}`, readFileSync(path, 'utf8'))
  }
  symlinkSync(join(source, 'node_modules'), join(root, 'node_modules'), 'dir')
  if (released) manifest(root)
  return root
}
function manifest(root: string, change: (value: Record<string, unknown>) => void = () => {}) {
  const paths = [
    'package.json',
    'data/catalogue.json',
    doc,
    '.agents/skills/design-project/SKILL.md',
    '.claude/skills/design-project/SKILL.md'
  ]
  const value: Record<string, unknown> = {
    schema_version: 1,
    version: '0.1.0',
    resource_count: 1,
    files: Object.fromEntries(paths.sort().map((path) => [path, sha(readFileSync(join(root, path), 'utf8'))]))
  }
  change(value)
  write(root, 'release-manifest.json', JSON.stringify(value))
}
function run(root: string) {
  const result = Bun.spawnSync({
    cmd: [process.execPath, join(root, 'scripts/design.ts'), 'doctor', '--json'],
    cwd: source,
    stdout: 'pipe',
    stderr: 'pipe'
  })
  return {
    code: result.exitCode,
    stdout: new TextDecoder().decode(result.stdout),
    stderr: new TextDecoder().decode(result.stderr)
  }
}
afterAll(() => fixtures.forEach((root) => rmSync(root, { recursive: true, force: true })))

describe('installation integrity diagnostics', () => {
  test('reports actual checkout state without claiming release verification', () => {
    const root = fixture()
    const result = run(root)
    expect(result.code).toBe(0)
    const output = JSON.parse(result.stdout)
    expect(output.resources).toBe(1)
    expect(output.mode).toBe('checkout')
    expect(output.manifest_verified).toBe(false)
  })
  test('verifies a real release manifest and resource count', () => {
    const result = run(fixture(true))
    expect(result.code).toBe(0)
    const output = JSON.parse(result.stdout)
    expect(output.mode).toBe('release')
    expect(output.manifest_verified).toBe(true)
    expect(output.resources).toBe(1)
  })
  test('rejects changed document bytes with no successful JSON', () => {
    const root = fixture(true)
    writeFileSync(join(root, doc), 'Changed document.\n')
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('integrity')
  })
  test('rejects a missing registered document', () => {
    const root = fixture(true)
    rmSync(join(root, doc))
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
  })
  test('rejects a manifest escape before reading it', () => {
    const root = fixture(true)
    manifest(root, (value) => {
      ;(value.files as Record<string, string>)['../outside.md'] = sha('outside')
    })
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('path')
  })
  test('rejects symlink manifest entries even inside the installation', () => {
    const root = fixture(true)
    write(root, 'actual.txt', 'symlink target')
    symlinkSync(join(root, 'actual.txt'), join(root, 'linked.txt'))
    manifest(root, (value) => {
      ;(value.files as Record<string, string>)['linked.txt'] = sha('symlink target')
    })
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
    expect(result.stderr).toContain('regular')
  })
  test('rejects manifest count drift', () => {
    const root = fixture(true)
    manifest(root, (value) => {
      value.resource_count = 2
    })
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
  })
  test('rejects missing required manifest coverage', () => {
    const root = fixture(true)
    manifest(root, (value) => {
      delete (value.files as Record<string, string>)[doc]
    })
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
  })
  test('rejects invalid hash values', () => {
    const root = fixture(true)
    manifest(root, (value) => {
      ;(value.files as Record<string, string>)[doc] = 'not-a-sha256'
    })
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
  })
  test('rejects malformed semantic versions in installation metadata', () => {
    for (const version of ['1.0.0-01', '1.0.0-alpha..beta', '1.0.0+build.']) {
      const root = fixture()
      write(root, 'package.json', JSON.stringify({ name: 'tolong-design', version, private: true }))
      const result = run(root)
      expect(result.code).toBe(1)
      expect(result.stdout).toBe('')
    }
  })
  test('rejects non-private package metadata', () => {
    const root = fixture()
    write(root, 'package.json', JSON.stringify({ name: 'tolong-design', version: '0.1.0', private: false }))
    const result = run(root)
    expect(result.code).toBe(1)
    expect(result.stdout).toBe('')
  })
})
