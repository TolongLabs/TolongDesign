import { afterEach, describe, expect, test } from 'bun:test'
import { createHash } from 'node:crypto'
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import {
  buildContext,
  DataError,
  loadResources,
  renderContext,
  resolveResource,
  searchResources,
  UsageError
} from './design-lib.ts'

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
  return `docs/design/${tool.sectionSlug}/${tool.slug}.md`
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

function createFixtureRoot(tools: FixtureTool[], staleIndex?: unknown): FixtureRoot {
  const root = tempRoot('tolong-design-lib-')
  mkdirSync(join(root, 'data'), { recursive: true })

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
    join(root, 'data/catalogue.json'),
    JSON.stringify({ source: 'https://designeer.xyz', scraped: '2026-10-10', tools: catalogueTools }),
    'utf8'
  )

  if (staleIndex !== undefined) {
    writeFileSync(join(root, 'data/index.json'), JSON.stringify(staleIndex), 'utf8')
  }

  return {
    root,
    sourcePath: (tool) => resolve(root, tool.docPath ?? defaultDocPath(tool))
  }
}

function qualifiedId(resource: { section_slug: string; slug: string }) {
  return `${resource.section_slug}/${resource.slug}`
}

describe('design resource loading and search', () => {
  test('finds body-only terms and ranks documents matching multiple query terms ahead', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Parallax Guide',
        slug: 'parallax-guide',
        sectionSlug: 'motion',
        body: 'Narrative pacing pairs parallax with deliberate scroll transitions.'
      },
      {
        name: 'Parallax Notes',
        slug: 'parallax-notes',
        sectionSlug: 'motion',
        body: 'A parallax effect can respond to scroll position.'
      }
    ])

    const resources = loadResources(fixture.root)
    const bodyOnly = searchResources(resources, 'NARRATIVE', {})
    const result = searchResources(resources, 'NARRATIVE PARALLAX', {})

    expect(bodyOnly.results.map((resource) => resource.slug)).toEqual(['parallax-guide'])
    expect(result.query).toBe('NARRATIVE PARALLAX')
    expect(result.total).toBe(2)
    expect(result.results[0]?.slug).toBe('parallax-guide')
    expect(result.results[0]?.matched_terms.sort()).toEqual(['narrative', 'parallax'])
    for (const field of [
      'id',
      'name',
      'section_slug',
      'slug',
      'paywall',
      'agent_friendly',
      'source_url',
      'last_verified',
      'doc',
      'matched_terms',
      'excerpt'
    ]) {
      expect(result.results[0]).toHaveProperty(field)
    }
  })

  test('sorts score-tied matches by qualified ID before applying the result limit', () => {
    const fixture = createFixtureRoot([
      { name: 'Zulu', slug: 'zulu', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Alpha', slug: 'alpha', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Mica', slug: 'mica', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Twin', slug: 'same', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Twin', slug: 'same', sectionSlug: 'colors', body: 'shared token' }
    ])
    const resources = loadResources(fixture.root)

    const all = searchResources(resources, 'shared token', {})
    const limited = searchResources(resources, 'shared token', { limit: 2 })

    expect(all.results.map(qualifiedId)).toEqual([
      'colors/same',
      'motion/alpha',
      'motion/mica',
      'motion/same',
      'motion/zulu'
    ])
    expect(limited.total).toBe(5)
    expect(limited.results.map((resource) => resource.slug)).toEqual(['same', 'alpha'])
  })

  test('matches section, stack, and paywall filters without regard to case', () => {
    const fixture = createFixtureRoot([
      {
        name: 'React Motion',
        slug: 'react-motion',
        sectionSlug: 'motion',
        body: 'filter token',
        frontmatter: { stack: ['react'], paywall: 'freemium' }
      },
      {
        name: 'Vue Motion',
        slug: 'vue-motion',
        sectionSlug: 'motion',
        body: 'filter token',
        frontmatter: { stack: ['vue'], paywall: 'freemium' }
      },
      {
        name: 'React Color',
        slug: 'react-color',
        sectionSlug: 'colors',
        body: 'filter token',
        frontmatter: { stack: ['react'], paywall: 'freemium' }
      }
    ])

    const result = searchResources(loadResources(fixture.root), 'filter token', {
      section: 'MOTION',
      stack: 'ReAcT',
      paywall: 'FREEMIUM'
    })

    expect(result.total).toBe(1)
    expect(result.results.map((resource) => resource.slug)).toEqual(['react-motion'])
  })

  test('keeps gallery references by default and applies explicit agent and OSS filters', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Gallery Reference',
        slug: 'gallery-reference',
        sectionSlug: 'design-galleries',
        body: 'candidate token',
        frontmatter: { agent_friendly: false, open_source: true }
      },
      {
        name: 'Agent Library',
        slug: 'agent-library',
        sectionSlug: 'component-libraries',
        body: 'candidate token',
        frontmatter: { agent_friendly: true, open_source: true }
      },
      {
        name: 'Closed Agent Tool',
        slug: 'closed-agent-tool',
        sectionSlug: 'agents-mcp',
        body: 'candidate token',
        frontmatter: { agent_friendly: true, open_source: false, license: 'proprietary' }
      }
    ])
    const resources = loadResources(fixture.root)

    const all = searchResources(resources, 'candidate token', {})
    const agentFriendly = searchResources(resources, 'candidate token', { agent: true })
    const openSource = searchResources(resources, 'candidate token', { oss: true })

    expect(all.results.map((resource) => resource.slug)).toContain('gallery-reference')
    expect(agentFriendly.results.map((resource) => resource.slug)).toEqual(['agent-library', 'closed-agent-tool'])
    expect(openSource.results.map((resource) => resource.slug)).toEqual(['agent-library', 'gallery-reference'])
  })

  test('returns a successful empty result when no document matches', () => {
    const fixture = createFixtureRoot([
      { name: 'Existing Tool', slug: 'existing-tool', sectionSlug: 'motion', body: 'parallax movement' }
    ])

    const result = searchResources(loadResources(fixture.root), 'never_present_82d9f3', {})

    expect(result.total).toBe(0)
    expect(result.results).toEqual([])
  })

  test('searches original Markdown even when the generated index is stale', () => {
    const fixture = createFixtureRoot(
      [
        {
          name: 'Current Entry',
          slug: 'current-entry',
          sectionSlug: 'motion',
          body: 'fresh_original_body_term'
        }
      ],
      {
        generated_from: 'old cache',
        tools: [
          {
            name: 'Old cached entry',
            slug: 'current-entry',
            section_slug: 'motion',
            doc: 'docs/design/motion/current-entry.md',
            cached_text: 'retired_cached_term'
          }
        ]
      }
    )

    const result = searchResources(loadResources(fixture.root), 'fresh_original_body_term', {})

    expect(result.total).toBe(1)
    expect(result.results[0]?.name).toBe('Current Entry')
  })
})

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
      ['id', 'name', 'section_slug', 'slug', 'doc', 'source_url', 'last_verified', 'sha256', 'markdown'].sort()
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
})

describe('registered document path safety', () => {
  test('rejects catalogue paths that traverse outside docs/design', () => {
    const tool: FixtureTool = {
      name: 'Traversal Entry',
      slug: 'traversal-entry',
      sectionSlug: 'motion',
      docPath: 'docs/design/../../outside.md',
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

describe('extended SearchOptions validation and filtering (#6, #8-#11)', () => {
  test('validates mode against EXECUTION_MODES and rejects empty/unknown/duplicate values', () => {
    const fixture = createFixtureRoot([
      { name: 'Tool A', slug: 'tool-a', sectionSlug: 'motion', body: 'content token' }
    ])
    const resources = loadResources(fixture.root)

    // Valid modes
    expect(() => searchResources(resources, 'content', { mode: 'registry' })).not.toThrow()
    expect(() => searchResources(resources, 'content', { mode: 'registry,package' })).not.toThrow()
    expect(() => searchResources(resources, 'content', { mode: 'browser-app' })).not.toThrow()

    // Invalid modes: empty entries
    expect(() => searchResources(resources, 'content', { mode: '' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { mode: 'registry,' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { mode: ',package' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { mode: 'registry, ,package' })).toThrow(UsageError)

    // Invalid modes: unknown value
    expect(() => searchResources(resources, 'content', { mode: 'unknown-mode' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { mode: 'registry,unknown-mode' })).toThrow(UsageError)

    // Invalid modes: duplicate values
    expect(() => searchResources(resources, 'content', { mode: 'package,package' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { mode: 'registry,package,registry' })).toThrow(UsageError)
  })

  test('validates surface against SURFACES and rejects empty/unknown/duplicate values', () => {
    const fixture = createFixtureRoot([
      { name: 'Tool A', slug: 'tool-a', sectionSlug: 'motion', body: 'content token' }
    ])
    const resources = loadResources(fixture.root)

    // Valid surfaces
    expect(() => searchResources(resources, 'content', { surface: 'web-ui' })).not.toThrow()
    expect(() => searchResources(resources, 'content', { surface: 'web-ui,mobile-ui' })).not.toThrow()
    expect(() => searchResources(resources, 'content', { surface: 'comics' })).not.toThrow()

    // Invalid surfaces: empty entries
    expect(() => searchResources(resources, 'content', { surface: '' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { surface: 'web-ui,' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { surface: ',comics' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { surface: 'web-ui, ,comics' })).toThrow(UsageError)

    // Invalid surfaces: unknown value
    expect(() => searchResources(resources, 'content', { surface: 'spatial-vr' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { surface: 'web-ui,spatial-vr' })).toThrow(UsageError)

    // Invalid surfaces: duplicate values
    expect(() => searchResources(resources, 'content', { surface: 'web-ui,web-ui' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { surface: 'web-ui,comics,web-ui' })).toThrow(UsageError)
  })

  test('validates includeUnreachable and tag option types', () => {
    const fixture = createFixtureRoot([
      { name: 'Tool A', slug: 'tool-a', sectionSlug: 'motion', body: 'content token' }
    ])
    const resources = loadResources(fixture.root)

    // @ts-expect-error testing runtime validation
    expect(() => searchResources(resources, 'content', { includeUnreachable: 'true' })).toThrow(UsageError)
    // @ts-expect-error testing runtime validation
    expect(() => searchResources(resources, 'content', { includeUnreachable: 1 })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { tag: '' })).toThrow(UsageError)
    expect(() => searchResources(resources, 'content', { tag: '   ' })).toThrow(UsageError)
  })

  test('hides unreachable resources by default and restores them with includeUnreachable: true', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Active Tool',
        slug: 'active-tool',
        sectionSlug: 'motion',
        body: 'status token',
        frontmatter: { status: 'active' }
      },
      {
        name: 'Degraded Tool',
        slug: 'degraded-tool',
        sectionSlug: 'motion',
        body: 'status token',
        frontmatter: { status: 'degraded' }
      },
      {
        name: 'Unreachable Tool',
        slug: 'unreachable-tool',
        sectionSlug: 'motion',
        body: 'status token',
        frontmatter: { status: 'unreachable' }
      },
      {
        name: 'Legacy Tool',
        slug: 'legacy-tool',
        sectionSlug: 'motion',
        body: 'status token'
        // Missing status: acts as active
      }
    ])
    const resources = loadResources(fixture.root)

    const defaultResults = searchResources(resources, 'status token', {})
    const defaultSlugs = defaultResults.results.map((r) => r.slug).sort()
    expect(defaultSlugs).toEqual(['active-tool', 'degraded-tool', 'legacy-tool'])

    const includedResults = searchResources(resources, 'status token', { includeUnreachable: true })
    const includedSlugs = includedResults.results.map((r) => r.slug).sort()
    expect(includedSlugs).toEqual(['active-tool', 'degraded-tool', 'legacy-tool', 'unreachable-tool'])
  })

  test('filters by mode using comma-separated OR and does not invent classification for legacy fixtures', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Registry Tool',
        slug: 'reg-tool',
        sectionSlug: 'component-libraries',
        body: 'mode token',
        frontmatter: { execution_mode: 'registry' }
      },
      {
        name: 'Package Tool',
        slug: 'pkg-tool',
        sectionSlug: 'component-libraries',
        body: 'mode token',
        frontmatter: { execution_mode: 'package' }
      },
      {
        name: 'Snippet Tool',
        slug: 'snp-tool',
        sectionSlug: 'component-libraries',
        body: 'mode token',
        frontmatter: { execution_mode: 'snippet' }
      },
      {
        name: 'Legacy Unclassified',
        slug: 'legacy-tool',
        sectionSlug: 'component-libraries',
        body: 'mode token'
      }
    ])
    const resources = loadResources(fixture.root)

    const singleMode = searchResources(resources, 'mode token', { mode: 'registry' })
    expect(singleMode.results.map((r) => r.slug)).toEqual(['reg-tool'])

    const commaOrModes = searchResources(resources, 'mode token', { mode: 'registry,package' })
    expect(commaOrModes.results.map((r) => r.slug).sort()).toEqual(['pkg-tool', 'reg-tool'])

    const snippetMode = searchResources(resources, 'mode token', { mode: 'snippet' })
    expect(snippetMode.results.map((r) => r.slug)).toEqual(['snp-tool'])
  })

  test('filters by surface using comma-separated OR and excludes other domains', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Web UI Tool',
        slug: 'web-ui-tool',
        sectionSlug: 'component-libraries',
        body: 'surface token',
        frontmatter: { surface: ['web-ui'] }
      },
      {
        name: 'Comics App',
        slug: 'comics-app',
        sectionSlug: 'comics',
        body: 'surface token',
        frontmatter: { surface: ['comics'] }
      },
      {
        name: 'Dual Surface Tool',
        slug: 'dual-tool',
        sectionSlug: 'component-libraries',
        body: 'surface token',
        frontmatter: { surface: ['web-ui', 'mobile-ui'] }
      },
      {
        name: 'Legacy Unclassified',
        slug: 'legacy-surface',
        sectionSlug: 'component-libraries',
        body: 'surface token'
      }
    ])
    const resources = loadResources(fixture.root)

    const webUi = searchResources(resources, 'surface token', { surface: 'web-ui' })
    expect(webUi.results.map((r) => r.slug).sort()).toEqual(['dual-tool', 'web-ui-tool'])

    const comics = searchResources(resources, 'surface token', { surface: 'comics' })
    expect(comics.results.map((r) => r.slug)).toEqual(['comics-app'])

    const multi = searchResources(resources, 'surface token', { surface: 'comics,mobile-ui' })
    expect(multi.results.map((r) => r.slug).sort()).toEqual(['comics-app', 'dual-tool'])
  })

  test('normalizes stack aliases in search query', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Motion Tool',
        slug: 'motion-tool',
        sectionSlug: 'motion',
        body: 'stack token',
        frontmatter: { stack: ['motion'] }
      },
      {
        name: 'React Tool',
        slug: 'react-tool',
        sectionSlug: 'component-libraries',
        body: 'stack token',
        frontmatter: { stack: ['react'] }
      }
    ])
    const resources = loadResources(fixture.root)

    const queryWithAlias = searchResources(resources, 'stack token', { stack: 'framer-motion' })
    expect(queryWithAlias.results.map((r) => r.slug)).toEqual(['motion-tool'])

    const queryCanonical = searchResources(resources, 'stack token', { stack: 'motion' })
    expect(queryCanonical.results.map((r) => r.slug)).toEqual(['motion-tool'])
  })

  test('filters by exact tag against category_tags and tags', () => {
    const fixture = createFixtureRoot([
      {
        name: 'Cat Tagged',
        slug: 'cat-tagged',
        sectionSlug: 'motion',
        body: 'tag token',
        frontmatter: { category_tags: ['animation', 'physics'] }
      },
      {
        name: 'Other Tagged',
        slug: 'other-tagged',
        sectionSlug: 'motion',
        body: 'tag token',
        frontmatter: { category_tags: ['layout'] }
      }
    ])
    const resources = loadResources(fixture.root)

    const result = searchResources(resources, 'tag token', { tag: 'animation' })
    expect(result.results.map((r) => r.slug)).toEqual(['cat-tagged'])

    const noMatch = searchResources(resources, 'tag token', { tag: 'missing-tag' })
    expect(noMatch.results).toEqual([])
  })

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
})
