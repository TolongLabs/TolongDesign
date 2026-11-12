/**
 * Pure tests: they import no React and no Remotion, so the root `bun test`
 * runs them without the collection's own install.
 */
import { describe, expect, test } from 'bun:test'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  blurFor,
  caretOn,
  countAt,
  ease,
  keys,
  ramp,
  seeded,
  typedCount,
  typeFrames,
  whip
} from '../src/core/motion.ts'
import { copySlots, layout, totalFrames, validate, type TemplateSpec } from '../src/core/spec.ts'
import { ACCENTS, mix, palette } from '../src/core/tokens.ts'
import { SCENE_KINDS } from '../src/scenes/kinds.ts'
import { TEMPLATES } from '../src/templates/index.ts'

const root = join(import.meta.dir, '..')

describe('motion math', () => {
  test('ramp clamps and eases', () => {
    expect(ramp(0, 10, 10)).toBe(0)
    expect(ramp(25, 10, 10)).toBe(1)
    expect(ramp(15, 10, 10, ease.linear)).toBeCloseTo(0.5)
    expect(ramp(10, 10, 0)).toBe(1)
  })
  test('keys holds outside the range and hits every key', () => {
    const pts = [
      [0, 0],
      [10, 100],
      [20, 40]
    ] as const
    expect(keys(-5, pts)).toBe(0)
    expect(keys(10, pts)).toBe(100)
    expect(keys(99, pts)).toBe(40)
  })
  test('typewriter counts whole characters at the given rate', () => {
    expect(typedCount(10, 0, 0, 30)).toBe(0)
    expect(typedCount(10, 5, 0, 30)).toBe(5)
    expect(typedCount(10, 50, 0, 30)).toBe(10)
    expect(typeFrames(26, 26)).toBe(30)
  })
  test('caret is solid while typing and blinks after', () => {
    expect(caretOn(20, 30, true)).toBe(true)
    expect(caretOn(5, 30, false)).toBe(true)
    expect(caretOn(20, 30, false)).toBe(false)
  })
  test('motion blur is zero at rest and capped at speed', () => {
    expect(blurFor(0.2)).toBe(0)
    expect(blurFor(40)).toBeCloseTo(18)
    expect(blurFor(10_000)).toBe(48)
  })
  test('whip accelerates into the cut', () => {
    expect(whip(80, 100, 6)).toBe(0)
    expect(whip(97, 100, 6)).toBeLessThan(0.1)
    expect(whip(100, 100, 6)).toBe(1)
  })
  test('seeded random repeats', () => {
    const a = seeded(7)
    const b = seeded(7)
    expect([a(), a(), a()]).toEqual([b(), b(), b()])
  })
  test('count-up lands exactly on the target', () => {
    expect(countAt(100, 0, 30, 0, 99)).toBe(99)
    expect(countAt(0, 0, 30, 5, 99)).toBe(5)
  })
  test('colour mix', () => {
    expect(mix('#000000', '#FFFFFF', 0.5)).toBe('#808080')
    expect(mix('#D96550', '#D96550', 0.3)).toBe('#D96550')
  })
  test('palettes carry the accent on both acts', () => {
    expect(palette('paper', 'teal').accent).toBe(ACCENTS.teal)
    expect(palette('ink', '#123456').accent).toBe('#123456')
  })
})

describe('templates', () => {
  test('at least five templates, unique ids', () => {
    expect(TEMPLATES.length).toBeGreaterThanOrEqual(5)
    expect(new Set(TEMPLATES.map((t) => t.id)).size).toBe(TEMPLATES.length)
  })
  for (const spec of TEMPLATES) {
    describe(spec.id, () => {
      test('validates', () => {
        expect(validate(spec, SCENE_KINDS)).toEqual([])
      })
      test('beats are back to back and sum to the film', () => {
        const placed = layout(spec)
        placed.forEach((b, i) => expect(b.start).toBe(i === 0 ? 0 : placed[i - 1].end))
        expect(placed[placed.length - 1].end).toBe(totalFrames(spec))
      })
      test('alternates acts at least once', () => {
        expect(new Set(spec.beats.map((b) => b.act)).size).toBe(2)
      })
      test('has swappable copy', () => {
        expect(copySlots(spec).length).toBeGreaterThan(spec.beats.length)
      })
    })
  }
  test('validate catches bad specs', () => {
    const bad: TemplateSpec = {
      ...TEMPLATES[0],
      id: 'Bad Id',
      beats: [
        { id: 'a', label: '', scene: 'nope', frames: 0, act: 'paper', props: { line: '' } },
        { id: 'a', label: '', scene: 'burst', frames: 30, act: 'ink', props: { line: 'x'.repeat(200) } }
      ]
    }
    const msgs = validate(bad, SCENE_KINDS)
      .map((p) => p.message)
      .join('\n')
    for (const m of [
      'kebab-case',
      'duplicate beat id',
      'positive integer',
      'unknown scene',
      'empty copy',
      '200 chars',
      'outside'
    ])
      expect(msgs).toContain(m)
  })
})

describe('scene registry', () => {
  test('index.tsx registers exactly the kinds in kinds.ts', () => {
    const src = readFileSync(join(root, 'src/scenes/index.tsx'), 'utf8')
    const body = src.slice(src.indexOf('SCENES'))
    const keysInIndex = [...body.matchAll(/^\s+"?([a-z0-9-]+)"?:\s+[A-Z]\w+,$/gm)].map((m) => m[1]).sort()
    expect(keysInIndex).toEqual([...SCENE_KINDS].sort())
  })
  test('every scene kind has a file', () => {
    for (const k of SCENE_KINDS) expect(existsSync(join(root, 'src/scenes', `${k}.tsx`))).toBe(true)
  })
})

describe('knowledge', () => {
  const dir = join(root, 'knowledge')
  const index = JSON.parse(readFileSync(join(dir, 'index.json'), 'utf8')) as {
    items: { slug: string; tier: string; doc: string }[]
  }
  test('covers every template, free and pro item once', () => {
    const tiers = new Set(index.items.map((i) => i.tier))
    expect([...tiers].sort()).toEqual(['free', 'pro', 'template'])
    expect(new Set(index.items.map((i) => `${i.tier}/${i.slug}`)).size).toBe(index.items.length)
  })
  test('every indexed doc exists and has the required sections', () => {
    for (const it of index.items) {
      const text = readFileSync(join(dir, it.doc), 'utf8')
      const need =
        it.tier === 'template'
          ? ['## Story', '## Beat sheet', '## Beats', '## Rhythm']
          : ['## What it shows', '## Timeline', '## Techniques', '## Rebuild it']
      for (const h of need) expect(text, `${it.doc} lacks ${h}`).toContain(h)
    }
  })
  test('no stray docs outside the index', () => {
    const listed = new Set(index.items.map((i) => i.doc))
    for (const sub of ['templates', 'free', 'pro'])
      for (const f of readdirSync(join(dir, sub))) expect(listed.has(`${sub}/${f}`), `${sub}/${f}`).toBe(true)
  })
})
