import { afterEach, describe, expect, test } from 'bun:test'
import { createHash } from 'node:crypto'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { buildContext, renderContext, resolveResource } from './context'
import { loadAllResources, loadResources } from './loader'
import { DataError, UsageError } from './schema'

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

const fixtureRoots: string[] = []
const warningDate = new Date('2026-10-11T00:00:00.000Z')

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

function createFixtureRoot(tools: FixtureTool[]) {
  const root = tempRoot('tolong-context-')
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
    sourcePath: (tool: FixtureTool) => resolve(root, tool.docPath ?? defaultDocPath(tool))
  }
}

function qualifiedId(resource: { section_slug: string; slug: string }) {
  return `${resource.section_slug}/${resource.slug}`
}

describe('design resource resolution and context', () => {
  test('requires a section-qualified ID when slugs are ambiguous', () => {
    const fixture = createFixtureRoot([
      { name: 'Motion Shared', slug: 'shared', sectionSlug: 'motion', body: 'motion resource' },
      { name: 'Color Shared', slug: 'shared', sectionSlug: 'colors', body: 'color resource' }
    ])
    const resources = loadResources(fixture.root)

    expect(() => resolveResource(resources, 'shared')).toThrow(UsageError)
    expect(resolveResource(resources, 'motion/shared').name).toBe('Motion Shared')
    expect(resolveResource(resources, 'colors/shared').name).toBe('Color Shared')
  })

  test('rejects unknown resource IDs as usage errors', () => {
    const fixture = createFixtureRoot([
      { name: 'Known Tool', slug: 'known-tool', sectionSlug: 'motion', body: 'known source' }
    ])

    expect(() => resolveResource(loadResources(fixture.root), 'unknown-tool')).toThrow(UsageError)
  })

  test('preserves exact source Markdown and independently verifiable SHA-256 values', () => {
    const markdown = [
      '---',
      'name: "Hash Fixture"',
      'slug: "hash-fixture"',
      'section: "Motion"',
      'section_slug: "motion"',
      'source_url: "https://example.test/motion/hash-fixture"',
      'designeer_url: "https://designeer.xyz/"',
      'designeer_blurb: "Fixture entry for hash-fixture."',
      'paywall: "free"',
      'pricing_summary: "Not published."',
      'open_source: true',
      'license: "MIT"',
      'category_tags: ["fixture"]',
      'best_for: ["behavior tests"]',
      'stack: ["react"]',
      'agent_friendly: true',
      'last_verified: "2026-10-10"',
      '---',
      '',
      '# Original file',
      '',
      'This is the exact source body, including its final newline.',
      ''
    ].join('\n')
    const tool: FixtureTool = {
      name: 'Hash Fixture',
      slug: 'hash-fixture',
      sectionSlug: 'motion',
      markdown
    }
    const fixture = createFixtureRoot([tool])
    const resources = loadResources(fixture.root)
    const pack = buildContext(resources, ['hash-fixture'], 'Landing page source pack', warningDate)
    const resource = pack.resources[0]

    expect(pack.schema_version).toBe(1)
    expect(pack.brief).toBe('Landing page source pack')
    expect(resource?.markdown).toBe(markdown)
    expect(resource?.sha256).toBe(createHash('sha256').update(markdown, 'utf8').digest('hex'))
    expect(resource?.source_url).toBe('https://example.test/motion/hash-fixture')
    expect(Object.keys(resource ?? {}).sort()).toEqual(
      ['kind', 'id', 'name', 'section_slug', 'slug', 'doc', 'source_url', 'last_verified', 'sha256', 'markdown'].sort()
    )
    expect(Object.keys(pack).sort()).toEqual(['schema_version', 'brief', 'resources', 'warnings'].sort())
  })

  test('preserves a UTF-8 BOM and Unicode while parsing its frontmatter', () => {
    const tool: FixtureTool = {
      name: 'Unicode source',
      slug: 'unicode-source',
      sectionSlug: 'motion',
      body: 'Voice → text 🎙️'
    }
    const markdown = '﻿' + markdownFor(tool)
    const fixture = createFixtureRoot([{ ...tool, markdown }])
    const resource = buildContext(loadResources(fixture.root), ['unicode-source'], undefined, warningDate).resources[0]
    expect(resource.markdown).toBe(markdown)
    expect(resource.last_verified).toBe('2026-10-10')
    expect(resource.sha256).toBe(createHash('sha256').update(markdown, 'utf8').digest('hex'))
  })

  test('preserves request order while deduplicating repeated context IDs', () => {
    const fixture = createFixtureRoot([
      { name: 'First', slug: 'first', sectionSlug: 'motion', body: 'first document' },
      { name: 'Second', slug: 'second', sectionSlug: 'colors', body: 'second document' }
    ])

    const pack = buildContext(
      loadResources(fixture.root),
      ['colors/second', 'motion/first', 'colors/second'],
      undefined,
      warningDate
    )

    expect(pack.resources.map(qualifiedId)).toEqual(['colors/second', 'motion/first'])
  })

  test('fails closed when a registered source document is missing', () => {
    const fixture = createFixtureRoot([
      { name: 'Available', slug: 'available', sectionSlug: 'motion', body: 'available source' },
      {
        name: 'Missing Source',
        slug: 'missing-source',
        sectionSlug: 'motion',
        body: 'not written',
        writeDoc: false
      }
    ])

    expect(() => {
      const resources = loadResources(fixture.root)
      return buildContext(resources, ['available', 'missing-source'], undefined, warningDate)
    }).toThrow(DataError)
  })

  test('wraps nested backtick runs with a longer fence and keeps the whole document intact', () => {
    const markdown = [
      '---',
      'name: "Fence Fixture"',
      'slug: "fence-fixture"',
      'section: "Motion"',
      'section_slug: "motion"',
      'source_url: "https://example.test/motion/fence-fixture"',
      'designeer_url: "https://designeer.xyz/"',
      'designeer_blurb: "Fixture entry for fence-fixture."',
      'paywall: "free"',
      'pricing_summary: "Not published."',
      'open_source: true',
      'license: "MIT"',
      'category_tags: ["fixture"]',
      'best_for: ["behavior tests"]',
      'stack: ["react"]',
      'agent_friendly: true',
      'last_verified: "2026-10-10"',
      '---',
      '',
      '# Fence fixture',
      '',
      '````md',
      '```js',
      'const marker = "intact"',
      '```',
      '````',
      ''
    ].join('\n')
    const fixture = createFixtureRoot([
      { name: 'Fence Fixture', slug: 'fence-fixture', sectionSlug: 'motion', markdown }
    ])
    const pack = buildContext(loadResources(fixture.root), ['fence-fixture'], undefined, warningDate)
    const rendered = renderContext(pack)

    expect(rendered).toContain(markdown)
    expect([...rendered.matchAll(/^(`{5,})/gm)].some((match) => match[1]!.length > 4)).toBe(true)
  })
})

describe('context verification and licensing warnings', () => {
  function warningsFor(frontmatter: Record<string, unknown>) {
    const fixture = createFixtureRoot([
      {
        name: 'Warning Fixture',
        slug: 'warning-fixture',
        sectionSlug: 'motion',
        body: 'warning sample',
        frontmatter
      }
    ])
    return buildContext(loadResources(fixture.root), ['warning-fixture'], undefined, warningDate).warnings
  }

  const verificationCases: Array<[string, Record<string, unknown>]> = [
    ['missing', { last_verified: undefined, paywall: 'free' }],
    ['invalid', { last_verified: 'not-a-date', paywall: 'free' }],
    ['future', { last_verified: '2026-10-12', paywall: 'free' }],
    ['older than 90 days', { last_verified: '2026-07-01', paywall: 'free' }]
  ]

  for (const [label, frontmatter] of verificationCases) {
    test(`warns for a ${label} verification date`, () => {
      const current = warningsFor({ last_verified: '2026-10-11', paywall: 'free' })
      const warnings = warningsFor(frontmatter)

      expect(warnings).not.toEqual(current)
    })
  }

  for (const paywall of ['unknown', 'paid', 'freemium']) {
    test(`warns when paywall is ${paywall}`, () => {
      const currentFree = warningsFor({ last_verified: '2026-10-11', paywall: 'free' })
      const warnings = warningsFor({ last_verified: '2026-10-11', paywall })

      expect(warnings).not.toEqual(currentFree)
    })
  }

  test('resolves research and skill resources in context without tool paywall warnings', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Fresh Tool',
        slug: 'fresh-tool',
        sectionSlug: 'motion',
        frontmatter: { last_verified: '2026-10-11', paywall: 'free' }
      }
    ])
    const researchDir = join(fixture.root, 'catalogue/research')
    mkdirSync(researchDir, { recursive: true })
    writeFileSync(
      join(researchDir, 'motion-study.md'),
      [
        '---',
        'title: "Motion Study"',
        'summary: "Findings summary."',
        'last_verified: "2026-10-11"',
        '---',
        '',
        '# Motion Study',
        '',
        'Study prose.'
      ].join('\n'),
      'utf8'
    )
    const skillDir = join(fixture.root, 'skills/design-project')
    mkdirSync(skillDir, { recursive: true })
    writeFileSync(
      join(skillDir, 'SKILL.md'),
      ['---', 'name: design-project', 'audience: consumer', 'description: Design workflow.', '---', '', '# Guide'].join(
        '\n'
      ),
      'utf8'
    )

    const all = loadAllResources(fixture.root)
    const pack = buildContext(all, ['research/motion-study', 'skill/design-project'], 'Test brief', warningDate)

    expect(pack.warnings).toEqual([])
    expect(pack.resources.map((r) => [r.kind, r.id])).toEqual([
      ['research', 'research/motion-study'],
      ['skill', 'skill/design-project']
    ])
  })
})
