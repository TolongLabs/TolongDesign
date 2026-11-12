/**
 * A template is data: an ordered list of beats, each naming a scene kind,
 * its length, its act (paper or ink) and the props that carry the copy.
 * Swap the copy, render, post.
 */
import type { AccentName, Act } from './tokens.ts'

/** How a beat leaves for the next one. */
export type Cut = 'hard' | 'match' | 'whip'

export interface Beat {
  /** Stable id, kebab-case, unique in the template. */
  id: string
  /** What the beat says, for people: "Hook: three words". */
  label: string
  /** Scene kind, a key of the scene registry. */
  scene: string
  frames: number
  act: Act
  cut?: Cut
  props: Record<string, unknown>
}

export interface Brand {
  name: string
  /** Mark drawn by the kit: a built-in glyph name. */
  mark: 'lens' | 'spark' | 'stack' | 'loop'
  url: string
}

export interface TemplateSpec {
  id: string
  title: string
  summary: string
  accent: AccentName
  brand: Brand
  width: number
  height: number
  fps: number
  beats: Beat[]
}

export interface PlacedBeat extends Beat {
  start: number
  end: number
}

/** Start and end frame of every beat. Beats are back to back: cuts, not fades. */
export function layout(spec: TemplateSpec): PlacedBeat[] {
  let start = 0
  return spec.beats.map((b) => {
    const placed = { ...b, start, end: start + b.frames }
    start += b.frames
    return placed
  })
}

export const totalFrames = (spec: TemplateSpec): number => spec.beats.reduce((n, b) => n + b.frames, 0)

/** Every string prop, by path, so a user can see and swap all the copy. */
export function copySlots(spec: TemplateSpec): { beat: string; path: string; text: string }[] {
  const out: { beat: string; path: string; text: string }[] = []
  const walk = (beat: string, v: unknown, path: string) => {
    if (typeof v === 'string') out.push({ beat, path, text: v })
    else if (Array.isArray(v)) v.forEach((x, i) => walk(beat, x, `${path}[${i}]`))
    else if (v && typeof v === 'object')
      for (const [k, x] of Object.entries(v)) walk(beat, x, path ? `${path}.${k}` : k)
  }
  for (const b of spec.beats) walk(b.id, b.props, '')
  return out
}

/** Props that are not on-screen copy (colours, icon names, enums). */
const NON_COPY = /(^|\.)(icon|icons|motif|variant|kind|mark|align|side|tone)(\[\d+\])?$/

export interface Problem {
  beat?: string
  message: string
}

/**
 * Checks a template before it renders: unique ids, positive whole frame
 * counts, known scene kinds, readable copy, and the film-length envelope.
 */
export function validate(
  spec: TemplateSpec,
  knownScenes: readonly string[],
  opts: { maxCopy?: number; minSeconds?: number; maxSeconds?: number } = {}
): Problem[] {
  const { maxCopy = 96, minSeconds = 10, maxSeconds = 60 } = opts
  const problems: Problem[] = []
  const ids = new Set<string>()
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(spec.id))
    problems.push({ message: `template id "${spec.id}" is not kebab-case` })
  for (const b of spec.beats) {
    if (ids.has(b.id)) problems.push({ beat: b.id, message: 'duplicate beat id' })
    ids.add(b.id)
    if (!Number.isInteger(b.frames) || b.frames <= 0)
      problems.push({ beat: b.id, message: `frames must be a positive integer, got ${b.frames}` })
    if (!knownScenes.includes(b.scene)) problems.push({ beat: b.id, message: `unknown scene "${b.scene}"` })
    if (b.act !== 'paper' && b.act !== 'ink') problems.push({ beat: b.id, message: `act must be paper or ink` })
  }
  for (const s of copySlots(spec)) {
    if (NON_COPY.test(s.path)) continue
    if (s.text.trim() === '') problems.push({ beat: s.beat, message: `empty copy at ${s.path}` })
    if (s.text.length > maxCopy)
      problems.push({ beat: s.beat, message: `copy at ${s.path} is ${s.text.length} chars (max ${maxCopy})` })
  }
  const seconds = totalFrames(spec) / spec.fps
  if (seconds < minSeconds || seconds > maxSeconds)
    problems.push({ message: `film is ${seconds.toFixed(1)} s, outside ${minSeconds}-${maxSeconds} s` })
  return problems
}
