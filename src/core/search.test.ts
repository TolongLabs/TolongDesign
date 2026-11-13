import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { loadAllResources, loadResources } from './loader'
import { UsageError } from './schema'
import { rankDocuments, searchResources, type SearchDocument } from './search'

describe('search-lib rankDocuments', () => {
  test('empty query sorts by name then ID with score 0 and empty matched_terms', () => {
    const docs: SearchDocument[] = [
      { id: 'sec/z-tool', name: 'Beta', meta: {}, body: '' },
      { id: 'sec/a-tool', name: 'Beta', meta: {}, body: '' },
      { id: 'sec/alpha', name: 'Alpha', meta: {}, body: '' },
      { id: 'sec/gamma', name: 'Gamma', meta: {}, body: '' }
    ]

    const ranked = rankDocuments(docs, '')
    expect(ranked).toHaveLength(4)
    expect(ranked.map((r) => r.document.id)).toEqual(['sec/alpha', 'sec/a-tool', 'sec/z-tool', 'sec/gamma'])
    for (const r of ranked) {
      expect(r.score).toBe(0)
      expect(r.matched_terms).toEqual([])
    }

    const whitespaceRanked = rankDocuments(docs, '   \t\n ')
    expect(whitespaceRanked.map((r) => r.document.id)).toEqual(ranked.map((r) => r.document.id))
  })

  test('nonempty query returns only matches and sorts descending by score then ID', () => {
    const docs: SearchDocument[] = [
      { id: 'a/match-high', name: 'Target Icon Library', meta: { tags: ['icons'] }, body: '' },
      { id: 'a/match-low', name: 'Something Else', meta: {}, body: 'has one incidental icon mention' },
      { id: 'a/no-match', name: 'Completely Unrelated', meta: {}, body: 'nothing here' }
    ]

    const ranked = rankDocuments(docs, 'icon')
    expect(ranked).toHaveLength(2)
    expect(ranked.map((r) => r.document.id)).toEqual(['a/match-high', 'a/match-low'])
    expect(ranked[0].score).toBeGreaterThan(ranked[1].score)
    expect(ranked.find((r) => r.document.id === 'a/no-match')).toBeUndefined()
  })

  test('name match beats body-only match even with 200 repetitions in body', () => {
    const ranked = rankDocuments(
      [
        { id: 'a/one', name: 'Animation', meta: {}, body: '' },
        { id: 'a/two', name: 'Other', meta: {}, body: 'animation '.repeat(200) }
      ],
      'animation'
    )
    expect(ranked).toHaveLength(2)
    expect(ranked[0].document.id).toBe('a/one')
    expect(ranked[0].score).toBeGreaterThan(ranked[1].score)
  })

  test('no match returns empty array', () => {
    const docs: SearchDocument[] = [
      { id: 'a/one', name: 'Tool One', meta: { tags: ['motion'] }, body: 'smooth animations' }
    ]
    expect(rankDocuments(docs, 'nonexistenttermxyz999')).toEqual([])
    expect(rankDocuments([], 'animation')).toEqual([])
  })

  test('duplicated query terms do not duplicate matched_terms and do not change rank', () => {
    const docs: SearchDocument[] = [
      { id: 'a/one', name: 'Animation Studio', meta: {}, body: 'timeline' },
      { id: 'a/two', name: 'Other Tool', meta: {}, body: 'animation' }
    ]

    const single = rankDocuments(docs, 'animation')
    const double = rankDocuments(docs, 'animation animation   animation')

    expect(double.map((r) => r.document.id)).toEqual(single.map((r) => r.document.id))
    for (let i = 0; i < single.length; i++) {
      expect(double[i].score).toBeCloseTo(single[i].score, 5)
      expect(double[i].matched_terms).toEqual(['animation'])
    }
  })

  test('Unicode case-folding and punctuation do not crash and preserve literal substring matches', () => {
    const docs: SearchDocument[] = [
      { id: 'a/three-js', name: 'Three.js', meta: { slug: 'three-js' }, body: 'WebGL library' },
      { id: 'a/shadcn', name: 'shadcn/ui', meta: {}, body: 'Copy-paste components' },
      { id: 'a/unicode', name: 'Manga コマ割り', meta: {}, body: 'Manga panel layout tool' },
      { id: 'a/accent', name: 'Café Design', meta: {}, body: 'French café aesthetics' }
    ]

    // Substring with punctuation
    const threeRanked = rankDocuments(docs, 'three.js')
    expect(threeRanked.length).toBeGreaterThanOrEqual(1)
    expect(threeRanked[0].document.id).toBe('a/three-js')

    const shadcnRanked = rankDocuments(docs, 'shadcn/ui')
    expect(shadcnRanked.length).toBeGreaterThanOrEqual(1)
    expect(shadcnRanked[0].document.id).toBe('a/shadcn')

    // Partial term / substring match
    const animSub = rankDocuments(
      [{ id: 'a/anim', name: 'GSAP', meta: {}, body: 'Industry standard animations' }],
      'anim'
    )
    expect(animSub).toHaveLength(1)
    expect(animSub[0].document.id).toBe('a/anim')

    // Unicode case folding
    const cafeRanked = rankDocuments(docs, 'CAFÉ')
    expect(cafeRanked.length).toBeGreaterThanOrEqual(1)
    expect(cafeRanked[0].document.id).toBe('a/accent')

    // Non-ASCII query
    const mangaRanked = rankDocuments(docs, 'コマ割り')
    expect(mangaRanked.length).toBeGreaterThanOrEqual(1)
    expect(mangaRanked[0].document.id).toBe('a/unicode')
  })

  test('stable deterministic tie-breaking on document ID', () => {
    const docs: SearchDocument[] = [
      { id: 'c/tool', name: 'Identical Name', meta: {}, body: 'identical body' },
      { id: 'a/tool', name: 'Identical Name', meta: {}, body: 'identical body' },
      { id: 'b/tool', name: 'Identical Name', meta: {}, body: 'identical body' }
    ]

    const ranked = rankDocuments(docs, 'identical')
    expect(ranked).toHaveLength(3)
    expect(ranked[0].score).toBeCloseTo(ranked[1].score, 5)
    expect(ranked[1].score).toBeCloseTo(ranked[2].score, 5)
    expect(ranked.map((r) => r.document.id)).toEqual(['a/tool', 'b/tool', 'c/tool'])
  })

  test('pure ranker does not mutate input documents array or document objects', () => {
    const docs: SearchDocument[] = Object.freeze([
      Object.freeze({ id: 'z/doc', name: 'Zeta', meta: Object.freeze({ tag: 'test' }), body: 'hello' }),
      Object.freeze({ id: 'a/doc', name: 'Alpha', meta: Object.freeze({ tag: 'test' }), body: 'hello' })
    ]) as unknown as SearchDocument[]

    const copy = [...docs]
    rankDocuments(docs, 'hello')
    expect(docs).toEqual(copy)
  })

  test('searches metadata fields (tags/stack, best_for, blurb) with field priority', () => {
    const docs: SearchDocument[] = [
      { id: 'a/tags', name: 'Tool A', meta: { tags: ['motion'] }, body: '' },
      { id: 'b/blurb', name: 'Tool B', meta: { designeer_blurb: 'A motion library.' }, body: '' },
      { id: 'c/body', name: 'Tool C', meta: {}, body: 'incidental motion mention in text' }
    ]

    const ranked = rankDocuments(docs, 'motion')
    expect(ranked).toHaveLength(3)
    // Tags and blurb should rank above body-only
    const bodyIndex = ranked.findIndex((r) => r.document.id === 'c/body')
    expect(bodyIndex).toBe(2)
  })
})

describe('ranker contract regressions', () => {
  test('an exact real resource name ranks before name extensions', () => {
    const documents = loadResources(join(import.meta.dir, '..', '..')).map((resource) => ({
      ...resource,
      body: resource.markdown
    }))
    expect(rankDocuments(documents, 'lucide')[0].document.id).toBe('icons/lucide')
  })

  test('recursive YAML metadata does not overflow the search scorer', () => {
    const loop: unknown[] = []
    loop.push(loop, 'icons')
    expect(
      rankDocuments([{ id: 'icons/example', name: 'Example', meta: { category_tags: loop }, body: '' }], 'icons')[0]
        .document.id
    ).toBe('icons/example')
  })
})

type SearchFixtureTool = {
  name: string
  slug: string
  sectionSlug: string
  body?: string
  catalogueDescription?: string
  frontmatter?: Record<string, unknown>
}

const searchFixtureRoots: string[] = []

afterEach(() => {
  for (const root of searchFixtureRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true })
  }
})

function searchFixtureSectionName(sectionSlug: string) {
  return sectionSlug
    .split('-')
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function searchFixtureYamlValue(value: unknown) {
  if (typeof value === 'string') return JSON.stringify(value)
  if (Array.isArray(value)) return JSON.stringify(value)
  if (typeof value === 'boolean' || typeof value === 'number') return String(value)
  if (value === null) return 'null'
  throw new Error('Fixture frontmatter values must be YAML scalars or arrays.')
}

function createSearchFixtureRoot(tools: SearchFixtureTool[], staleIndex?: unknown) {
  const root = mkdtempSync(join(tmpdir(), 'tolong-search-'))
  searchFixtureRoots.push(root)
  mkdirSync(join(root, 'catalogue'), { recursive: true })

  for (const tool of tools) {
    const doc = `catalogue/tools/${tool.sectionSlug}/${tool.slug}.md`
    const metadata = {
      name: tool.name,
      slug: tool.slug,
      section: searchFixtureSectionName(tool.sectionSlug),
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
    const lines = Object.entries(metadata)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => `${key}: ${searchFixtureYamlValue(value)}`)
    const markdown = `---\n${lines.join('\n')}\n---\n\n# ${tool.name}\n\n${tool.body ?? `Fixture body for ${tool.slug}.`}\n`
    const fullPath = resolve(root, doc)
    mkdirSync(dirname(fullPath), { recursive: true })
    writeFileSync(fullPath, markdown, 'utf8')
  }

  if (staleIndex !== undefined) {
    writeFileSync(join(root, 'catalogue/index.json'), JSON.stringify(staleIndex), 'utf8')
  }

  return { root }
}

function searchQualifiedId(resource: { section_slug: string; slug: string }) {
  return `${resource.section_slug}/${resource.slug}`
}

describe('design resource loading and search', () => {
  test('finds body-only terms and ranks documents matching multiple query terms ahead', () => {
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
      { name: 'Zulu', slug: 'zulu', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Alpha', slug: 'alpha', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Mica', slug: 'mica', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Twin', slug: 'same', sectionSlug: 'motion', body: 'shared token' },
      { name: 'Twin', slug: 'same', sectionSlug: 'color', body: 'shared token' }
    ])
    const resources = loadResources(fixture.root)

    const all = searchResources(resources, 'shared token', {})
    const limited = searchResources(resources, 'shared token', { limit: 2 })

    expect(all.results.map(searchQualifiedId)).toEqual([
      'color/same',
      'motion/alpha',
      'motion/mica',
      'motion/same',
      'motion/zulu'
    ])
    expect(limited.total).toBe(5)
    expect(limited.results.map((resource) => resource.slug)).toEqual(['same', 'alpha'])
  })

  test('matches section, stack, and paywall filters without regard to case', () => {
    const fixture = createSearchFixtureRoot([
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
        sectionSlug: 'color',
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
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
      { name: 'Existing Tool', slug: 'existing-tool', sectionSlug: 'motion', body: 'parallax movement' }
    ])

    const result = searchResources(loadResources(fixture.root), 'never_present_82d9f3', {})

    expect(result.total).toBe(0)
    expect(result.results).toEqual([])
  })

  test('searches original Markdown even when the generated index is stale', () => {
    const fixture = createSearchFixtureRoot(
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
            doc: 'catalogue/tools/motion/current-entry.md',
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

describe('extended SearchOptions validation and filtering (#6, #8-#11)', () => {
  test('validates mode against EXECUTION_MODES and rejects empty/unknown/duplicate values', () => {
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
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
    const fixture = createSearchFixtureRoot([
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

  test('filters by kind defaulting to tool, supports comma-separated kinds, and ignores non-tools when paywall is set', () => {
    const fixture = createSearchFixtureRoot([
      {
        name: 'Mesh Tool',
        slug: 'mesh-tool',
        sectionSlug: '3d',
        body: '3d model tool body'
      }
    ])
    const researchDir = join(fixture.root, 'catalogue/research')
    mkdirSync(researchDir, { recursive: true })
    writeFileSync(
      join(researchDir, 'spline-study.md'),
      [
        '---',
        'title: "Spline 3D Model Study"',
        'summary: "Research for 3d model workflows."',
        'last_verified: "2026-10-15"',
        '---',
        '',
        '# Spline 3D Model Study',
        '',
        'Research for 3d model workflows.'
      ].join('\n'),
      'utf8'
    )
    const skillDir = join(fixture.root, 'skills/build-3d-model')
    mkdirSync(skillDir, { recursive: true })
    writeFileSync(
      join(skillDir, 'SKILL.md'),
      [
        '---',
        'name: build-3d-model',
        'audience: consumer',
        'description: Create or produce a 3D model from text or image.',
        '---',
        '',
        '# build-3d-model',
        '',
        'Use when generating a 3d model.'
      ].join('\n'),
      'utf8'
    )

    const all = loadAllResources(fixture.root)

    const defaultSearch = searchResources(all, '3d model')
    expect(defaultSearch.results.map((r) => r.kind)).toEqual(['tool'])
    expect(defaultSearch.results.map((r) => r.id)).toEqual(['3d/mesh-tool'])

    const skillSearch = searchResources(all, '3d model', { kind: 'skill' })
    expect(skillSearch.results.map((r) => [r.kind, r.id])).toEqual([['skill', 'skill/build-3d-model']])

    const researchSearch = searchResources(all, '3d model', { kind: 'research' })
    expect(researchSearch.results.map((r) => [r.kind, r.id])).toEqual([['research', 'research/spline-study']])

    const combined = searchResources(all, '3d model', { kind: 'skill,research' })
    expect(combined.results.map((r) => r.id).sort()).toEqual(['research/spline-study', 'skill/build-3d-model'])

    const paywallMulti = searchResources(all, '3d model', { kind: 'tool,skill', paywall: 'free' })
    expect(paywallMulti.results.map((r) => r.id)).toEqual(['3d/mesh-tool'])

    expect(() => searchResources(all, '3d model', { kind: '' })).toThrow(UsageError)
    expect(() => searchResources(all, '3d model', { kind: 'bogus' })).toThrow(UsageError)
    expect(() => searchResources(all, '3d model', { kind: 'tool,tool' })).toThrow(UsageError)
  })
})
