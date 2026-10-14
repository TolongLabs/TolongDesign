import { describe, expect, test } from 'bun:test'
import { rankDocuments, type SearchDocument } from './search-lib'

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
