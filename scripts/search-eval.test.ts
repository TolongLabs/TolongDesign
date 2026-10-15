import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { rankDocuments, type SearchDocument } from './search-lib'

type QueryFixture = {
  domain: string
  query: string
  relevant: string[]
}

type Fixtures = {
  calibration: QueryFixture[]
  evaluation: QueryFixture[]
}

function loadCatalogueDocs(rootDir: string): SearchDocument[] {
  const indexPath = join(rootDir, 'data/index.json')
  const index = JSON.parse(readFileSync(indexPath, 'utf8')) as {
    tools: Array<{
      name: string
      slug: string
      section_slug: string
      doc: string
      [key: string]: unknown
    }>
  }

  return index.tools.map((t) => {
    let body = ''
    try {
      body = readFileSync(join(rootDir, t.doc), 'utf8')
    } catch {
      body = ''
    }
    return {
      id: `${t.section_slug}/${t.slug}`,
      name: t.name,
      meta: t,
      body
    }
  })
}

function oldAndAlphabeticSearch(documents: SearchDocument[], query: string): SearchDocument[] {
  const terms = query.trim() === '' ? [] : query.trim().split(/\s+/)
  const lowerTerms = terms.map((t) => t.toLowerCase())
  const hits = documents.filter((doc) => {
    const searchable = `${doc.name} ${doc.id} ${JSON.stringify(doc.meta)} ${doc.body}`.toLowerCase()
    return lowerTerms.every((term) => searchable.includes(term))
  })

  hits.sort((left, right) => {
    const nl = left.name.toLowerCase()
    const nr = right.name.toLowerCase()
    if (nl < nr) return -1
    if (nl > nr) return 1
    if (left.id < right.id) return -1
    if (left.id > right.id) return 1
    return 0
  })

  return hits
}

function computeRecallAt5(results: string[], relevant: string[]): number {
  if (relevant.length === 0) return 0
  const top5 = new Set(results.slice(0, 5))
  let matches = 0
  for (const rel of relevant) {
    if (top5.has(rel)) matches++
  }
  return matches / relevant.length
}

describe('search-eval evaluation benchmark', () => {
  const rootDir = join(import.meta.dir, '..')
  const fixtures = JSON.parse(readFileSync(join(rootDir, 'scripts/fixtures/search-queries.json'), 'utf8')) as Fixtures
  const documents = loadCatalogueDocs(rootDir)

  test('new ranker outperforms old AND/alphabetic search on held-out evaluation partition', () => {
    let oldTotalRecall = 0
    let newTotalRecall = 0

    for (const fixture of fixtures.evaluation) {
      const oldHits = oldAndAlphabeticSearch(documents, fixture.query)
      const oldIds = oldHits.map((h) => h.id)
      const oldRecall = computeRecallAt5(oldIds, fixture.relevant)
      oldTotalRecall += oldRecall

      const newRanked = rankDocuments(documents, fixture.query)
      const newIds = newRanked.map((r) => r.document.id)
      const newRecall = computeRecallAt5(newIds, fixture.relevant)
      newTotalRecall += newRecall
    }

    const oldMeanRecall = oldTotalRecall / fixtures.evaluation.length
    const newMeanRecall = newTotalRecall / fixtures.evaluation.length

    console.log(`[EVALUATION] Old AND/alphabetic recall@5: ${(oldMeanRecall * 100).toFixed(1)}%`)
    console.log(`[EVALUATION] New rankDocuments recall@5:   ${(newMeanRecall * 100).toFixed(1)}%`)

    expect(newMeanRecall).toBeGreaterThan(oldMeanRecall)
  })

  test('motion libraries precede Blender for smooth hero animation query (#6)', () => {
    const ranked = rankDocuments(documents, 'smooth hero animation')
    const ids = ranked.map((r) => r.document.id)

    const blenderRank = ids.indexOf('3d/blender')
    const gsapRank = ids.indexOf('motion/gsap')
    const motionPrimitivesRank = ids.indexOf('component-libraries/motion-primitives')

    expect(blenderRank).toBeGreaterThanOrEqual(0)
    expect(gsapRank).toBeGreaterThanOrEqual(0)
    expect(motionPrimitivesRank).toBeGreaterThanOrEqual(0)

    // Motion libraries must rank higher (lower index) than Blender
    expect(gsapRank).toBeLessThan(blenderRank)
    expect(motionPrimitivesRank).toBeLessThan(blenderRank)
  })
})
