import { afterAll, describe, expect, test } from 'bun:test'
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const root = join(import.meta.dir, '..')
const fixture = mkdtempSync(join(tmpdir(), 'tolong-index-fixture-'))
afterAll(() => rmSync(fixture, { recursive: true, force: true }))

const tool = {
  name: 'Example UI',
  url: 'https://example.test/',
  description: 'Example components',
  section: 'Component Libraries',
  section_slug: 'component-libraries',
  slug: 'example-ui',
  designeer_url: 'https://example.test/',
  doc: 'docs/design/component-libraries/example-ui.md'
}
mkdirSync(join(fixture, 'scripts'), { recursive: true })
mkdirSync(join(fixture, 'data'), { recursive: true })
mkdirSync(join(fixture, 'docs/design/component-libraries'), { recursive: true })
for (const file of ['build-index.ts', 'lib.ts', 'catalogue-schema.ts', 'index-fields.ts'])
  cpSync(join(root, 'scripts', file), join(fixture, 'scripts', file))
symlinkSync(join(root, 'node_modules'), join(fixture, 'node_modules'), 'dir')
writeFileSync(
  join(fixture, tool.doc),
  `---\nname: Example UI\nslug: example-ui\nsection: Component Libraries\nsection_slug: component-libraries\nsource_url: https://example.test/\npaywall: free\nexecution_mode: registry\nsurface: [web-ui]\nstatus: active\nagent_friendly: true\nstack: [react]\n---\n# Example UI\n\n## How to use\n\n\`\`\`bash\nbunx example add button\n\`\`\`\n\n## Examples\n`
)
writeFileSync(
  join(fixture, 'data/catalogue.json'),
  JSON.stringify({
    scraped: '2026-10-15',
    source: 'fixture',
    tools: [tool],
    people: [
      {
        name: 'Example Creator',
        url: 'https://creator.example.test/',
        description: 'Example creator',
        sameAs: [],
        created_tools: ['component-libraries/example-ui'],
        created_tools_evidence: {
          'component-libraries/example-ui': {
            source_url: 'https://example.test/credits',
            checked: '2026-10-15',
            quote: 'Created by Example Creator.'
          }
        }
      }
    ]
  })
)
const build = () => {
  const result = Bun.spawnSync([process.execPath, 'scripts/build-index.ts'], { cwd: fixture })
  expect(result.exitCode).toBe(0)
}

describe('generated index contract', () => {
  test('index derives the documented shell block instead of storing hand-written install metadata', () => {
    build()
    const index = JSON.parse(readFileSync(join(fixture, 'data/index.json'), 'utf8'))
    expect(index.tools[0].install).toBe('bunx example add button')
    expect(index.tools[0].execution_mode).toBe('registry')
  })

  test('people index includes tool and attribution-source links', () => {
    build()
    const people = readFileSync(join(fixture, 'docs/design/people.md'), 'utf8')
    expect(people).toContain('[Example UI](./component-libraries/example-ui.md)')
    expect(people).toContain('https://example.test/credits')
  })

  test('regenerating the same source is byte-for-byte idempotent', () => {
    build()
    const before = readFileSync(join(fixture, 'data/index.json'), 'utf8')
    build()
    expect(readFileSync(join(fixture, 'data/index.json'), 'utf8')).toBe(before)
  })
})
