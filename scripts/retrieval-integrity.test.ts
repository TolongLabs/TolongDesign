import { afterAll, describe, expect, test } from 'bun:test'
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { loadResources, searchResources } from './design-lib'

const root = join(import.meta.dir, '..')
const fixture = mkdtempSync(join(tmpdir(), 'tolong-retrieval-fixture-'))
afterAll(() => rmSync(fixture, { recursive: true, force: true }))
mkdirSync(join(fixture, 'data'), { recursive: true })
mkdirSync(join(fixture, 'docs/design/test'), { recursive: true })
writeFileSync(
  join(fixture, 'data/catalogue.json'),
  JSON.stringify({
    tools: [
      {
        name: 'Example',
        url: 'https://example.test/',
        description: 'Example',
        section: 'Test',
        section_slug: 'test',
        slug: 'example',
        doc: 'docs/design/test/example.md'
      }
    ]
  })
)
writeFileSync(
  join(fixture, 'docs/design/test/example.md'),
  '---\nname: Example\nmode: package\ninstall: bun add undocumented-command\n---\n# Example\n\n## How to use\nRead the reference.\n'
)

describe('retrieval source integrity', () => {
  test('website stack selection explicitly filters the output surface in both skill copies', () => {
    const first = readFileSync(join(root, '.agents/skills/pick-design-stack/SKILL.md'), 'utf8')
    const second = readFileSync(join(root, '.claude/skills/pick-design-stack/SKILL.md'), 'utf8')
    expect(first).toBe(second)
    expect(first).toContain('--section component-libraries --surface web-ui')
  })

  test('shadcn category tags are consistent with the canonical stack classification', () => {
    const missing = loadResources(root).filter(
      (resource) =>
        Array.isArray(resource.meta.category_tags) &&
        resource.meta.category_tags.includes('shadcn') &&
        (!Array.isArray(resource.meta.stack) || !resource.meta.stack.includes('shadcn'))
    )
    expect(missing.map((resource) => resource.id)).toEqual([])
  })

  test('install metadata is always derived from the body, not a hand-written header override', () => {
    expect(loadResources(fixture)[0].meta.install).toBeNull()
  })

  test('unrelated legacy mode metadata does not invent an execution-mode classification', () => {
    expect(searchResources(loadResources(fixture), 'Example', { mode: 'package' }).results).toEqual([])
  })

  test('missing required helper modules fail at import instead of silently disabling capabilities', async () => {
    const isolated = join(fixture, 'isolated')
    mkdirSync(isolated)
    cpSync(join(root, 'scripts/design-lib.ts'), join(isolated, 'design-lib.ts'))
    symlinkSync(join(root, 'node_modules'), join(fixture, 'node_modules'), 'dir')
    await expect(import(join(isolated, 'design-lib.ts'))).rejects.toThrow()
  })
})
