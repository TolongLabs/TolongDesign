import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { loadAllResources, loadCatalogue, loadResources, readDoc } from './loader'
import { DataError } from './schema'

type FixtureTool = {
  name: string
  slug: string
  sectionSlug: string
  body?: string
  catalogueDescription?: string
  docPath?: string
  markdown?: string
  writeDoc?: boolean
  frontmatter?: Record<string, unknown>
}

type FixtureRoot = {
  root: string
  sourcePath: (tool: FixtureTool) => string
}

const fixtureRoots: string[] = []

afterEach(() => {
  for (const root of fixtureRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true })
  }
})

function tempRoot(prefix: string) {
  const root = mkdtempSync(join(tmpdir(), prefix))
  fixtureRoots.push(root)
  return root
}

function sectionName(sectionSlug: string) {
  return sectionSlug
    .split('-')
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function defaultDocPath(tool: FixtureTool) {
  return `catalogue/tools/${tool.sectionSlug}/${tool.slug}.md`
}

function fixtureMetadata(tool: FixtureTool) {
  return {
    name: tool.name,
    slug: tool.slug,
    section: sectionName(tool.sectionSlug),
    section_slug: tool.sectionSlug,
    source_url: `https://example.test/${tool.sectionSlug}/${tool.slug}`,
    designeer_url: 'https://designeer.xyz/',
    designeer_blurb: `Fixture entry for ${tool.slug}.`,
    paywall: 'free',
    pricing_summary: 'Not published.',
    open_source: true,
    license: 'MIT',
    category_tags: ['fixture'],
    best_for: ['behavior tests'],
    stack: ['react'],
    agent_friendly: true,
    last_verified: '2026-10-10',
    ...tool.frontmatter
  }
}

function yamlValue(value: unknown) {
  if (typeof value === 'string') return JSON.stringify(value)
  if (Array.isArray(value)) return JSON.stringify(value)
  if (typeof value === 'boolean' || typeof value === 'number') return String(value)
  if (value === null) return 'null'
  throw new Error('Fixture frontmatter values must be YAML scalars or arrays.')
}

function markdownFor(tool: FixtureTool) {
  if (tool.markdown !== undefined) return tool.markdown

  const metadata = fixtureMetadata(tool)
  const lines = Object.entries(metadata)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${yamlValue(value)}`)

  return `---\n${lines.join('\n')}\n---\n\n# ${tool.name}\n\n${tool.body ?? `Fixture body for ${tool.slug}.`}\n`
}

function createFixtureRoot(tools: FixtureTool[]): FixtureRoot {
  const root = tempRoot('tolong-loader-')
  mkdirSync(join(root, 'catalogue'), { recursive: true })

  const catalogueTools = tools.map((tool) => {
    const doc = tool.docPath ?? defaultDocPath(tool)
    const metadata = fixtureMetadata(tool)
    if (tool.writeDoc !== false) {
      const fullPath = resolve(root, doc)
      mkdirSync(dirname(fullPath), { recursive: true })
      writeFileSync(fullPath, markdownFor(tool), 'utf8')
    }

    return {
      name: tool.name,
      url: metadata.source_url,
      description: tool.catalogueDescription ?? `Catalogue entry for ${tool.slug}.`,
      section: metadata.section,
      slug: tool.slug,
      section_slug: tool.sectionSlug,
      designeer_url: metadata.designeer_url,
      doc
    }
  })

  writeFileSync(
    join(root, 'catalogue/catalogue.json'),
    JSON.stringify({ source: 'https://designeer.xyz', scraped: '2026-10-10', tools: catalogueTools }),
    'utf8'
  )

  return {
    root,
    sourcePath: (tool) => resolve(root, tool.docPath ?? defaultDocPath(tool))
  }
}

describe('registered document path safety', () => {
  test('rejects catalogue paths that traverse outside catalogue/tools', () => {
    const tool: FixtureTool = {
      name: 'Traversal Entry',
      slug: 'traversal-entry',
      sectionSlug: 'motion',
      docPath: 'catalogue/tools/../../outside.md',
      writeDoc: false
    }
    const fixture = createFixtureRoot([tool])
    writeFileSync(join(fixture.root, 'outside.md'), 'private outside source', 'utf8')

    expect(() => loadResources(fixture.root)).toThrow(DataError)
  })

  test('rejects absolute catalogue paths even when the external document exists', () => {
    const outside = tempRoot('tolong-design-outside-')
    const externalDoc = join(outside, 'external.md')
    writeFileSync(externalDoc, 'external registered source', 'utf8')
    const fixture = createFixtureRoot([
      {
        name: 'Absolute Entry',
        slug: 'absolute-entry',
        sectionSlug: 'motion',
        docPath: externalDoc,
        writeDoc: false
      }
    ])

    expect(() => loadResources(fixture.root)).toThrow(DataError)
  })

  test('rejects a source symlink that escapes the registered docs tree', () => {
    const outside = tempRoot('tolong-design-symlink-target-')
    const externalDoc = join(outside, 'external.md')
    writeFileSync(externalDoc, 'external symlink source', 'utf8')
    const tool: FixtureTool = {
      name: 'Symlink Entry',
      slug: 'symlink-entry',
      sectionSlug: 'motion',
      writeDoc: false
    }
    const fixture = createFixtureRoot([tool])
    const registeredPath = fixture.sourcePath(tool)
    mkdirSync(dirname(registeredPath), { recursive: true })
    symlinkSync(externalDoc, registeredPath)

    expect(() => loadResources(fixture.root)).toThrow(DataError)
  })
})

describe('loader metadata and unified doc reading', () => {
  test('derives meta.install via extractInstall in makeResource', () => {
    const markdown = [
      '---',
      'name: "Install Tool"',
      'slug: "install-tool"',
      'section: "Icons"',
      'section_slug: "icons"',
      'source_url: "https://example.test/icons/install-tool"',
      'designeer_url: "https://designeer.xyz/"',
      'designeer_blurb: "Icon library."',
      'paywall: "free"',
      'pricing_summary: "Not published."',
      'open_source: true',
      'license: "MIT"',
      'category_tags: ["icons"]',
      'best_for: ["icon sets"]',
      'stack: ["react"]',
      'execution_mode: "package"',
      'surface: ["web-ui"]',
      'status: "active"',
      'agent_friendly: true',
      'last_verified: "2026-10-10"',
      '---',
      '',
      '# Install Tool',
      '',
      '## How to use',
      '',
      '```bash',
      'bun add install-tool-icons',
      '```',
      '',
      '## Examples',
      ''
    ].join('\n')

    const fixture = createFixtureRoot([
      {
        name: 'Install Tool',
        slug: 'install-tool',
        sectionSlug: 'icons',
        markdown
      }
    ])
    const resources = loadResources(fixture.root)
    expect(resources[0]?.meta?.install).toBe('bun add install-tool-icons')
  })

  test('loadCatalogue and readDoc read from an explicit root without globals', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Unified Tool',
        slug: 'unified-tool',
        sectionSlug: 'motion',
        body: 'Unified body content.'
      }
    ])
    const catalogue = loadCatalogue(fixture.root)
    expect(catalogue.tools).toHaveLength(1)
    expect(catalogue.tools[0]?.slug).toBe('unified-tool')

    const doc = readDoc(fixture.root, 'catalogue/tools/motion/unified-tool.md')
    expect(doc).not.toBeNull()
    expect(doc?.meta.name).toBe('Unified Tool')
    expect(doc?.body).toContain('Unified body content.')
    expect(readDoc(fixture.root, 'catalogue/tools/motion/missing.md')).toBeNull()
  })

  test('loads tool, research, and skill entries via kinds and loadAllResources', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Sample Tool',
        slug: 'sample-tool',
        sectionSlug: 'motion',
        body: 'Tool content.'
      }
    ])
    const researchDir = join(fixture.root, 'catalogue/research')
    mkdirSync(researchDir, { recursive: true })
    writeFileSync(
      join(researchDir, 'motion-study.md'),
      [
        '---',
        'title: "Motion Study"',
        'summary: "Key findings for motion."',
        'last_verified: "2026-10-10"',
        '---',
        '',
        '# Motion Study',
        '',
        'Key findings for motion.'
      ].join('\n'),
      'utf8'
    )
    const skillDir = join(fixture.root, 'skills/sample-skill')
    mkdirSync(skillDir, { recursive: true })
    writeFileSync(
      join(skillDir, 'SKILL.md'),
      [
        '---',
        'name: sample-skill',
        'audience: consumer',
        'description: Sample skill guide.',
        '---',
        '',
        '# Skill'
      ].join('\n'),
      'utf8'
    )

    expect(loadResources(fixture.root).map((r) => r.kind)).toEqual(['tool'])
    expect(loadResources(fixture.root, { kinds: ['research'] }).map((r) => [r.kind, r.id])).toEqual([
      ['research', 'research/motion-study']
    ])

    const all = loadAllResources(fixture.root)
    expect(all.map((r) => [r.kind, r.id])).toEqual([
      ['tool', 'motion/sample-tool'],
      ['research', 'research/motion-study'],
      ['skill', 'skill/sample-skill']
    ])

    const outside = mkdtempSync(join(tmpdir(), 'tolongdesign-research-outside-'))
    fixtureRoots.push(outside)
    writeFileSync(join(outside, 'leak.md'), '# Outside\n', 'utf8')
    symlinkSync(join(outside, 'leak.md'), join(researchDir, 'leak.md'))
    expect(() => loadResources(fixture.root, { kinds: ['research'] })).toThrow(DataError)
  })
})
