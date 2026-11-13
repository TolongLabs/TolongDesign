import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { checkDocs } from './check-docs'

const ROOT = join(import.meta.dir, '..')
const tempRoots: string[] = []

afterEach(() => {
  for (const dir of tempRoots.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

describe('checkDocs research validation', () => {
  test('passes on the repository including research frontmatter', () => {
    const result = checkDocs(ROOT)
    expect(result.errors).toEqual([])
    expect(result.researchCount).toBeGreaterThanOrEqual(6)
  })

  test('reports errors for missing or malformed research frontmatter and H1', () => {
    const fixture = mkdtempSync(join(tmpdir(), 'tolongdesign-check-'))
    tempRoots.push(fixture)

    mkdirSync(join(fixture, 'catalogue/research'), { recursive: true })
    mkdirSync(join(fixture, 'catalogue/tools'), { recursive: true })
    writeFileSync(join(fixture, 'catalogue/people.json'), JSON.stringify({ people: [] }, null, 2), 'utf8')

    writeFileSync(
      join(fixture, 'catalogue/research/bad-research.md'),
      ['---', 'title: ""', 'last_verified: "invalid-date"', '---', '', 'No H1 here.'].join('\n'),
      'utf8'
    )

    const result = checkDocs(fixture)
    expect(result.errors.some((e) => e.includes('bad-research.md') && e.includes('title'))).toBe(true)
    expect(result.errors.some((e) => e.includes('bad-research.md') && e.includes('summary'))).toBe(true)
    expect(result.errors.some((e) => e.includes('bad-research.md') && e.includes('last_verified'))).toBe(true)
    expect(result.errors.some((e) => e.includes('bad-research.md') && e.includes('H1'))).toBe(true)
  })
})
