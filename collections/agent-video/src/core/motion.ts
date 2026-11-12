/**
 * Frame-clock motion math. Pure functions of the frame number, so every
 * scene is seek-safe: render frame 400 alone and it looks the same as when
 * played through.
 */

export type Ease = (t: number) => number

export const clamp = (v: number, lo = 0, hi = 1): number => Math.min(hi, Math.max(lo, v))
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t

export const ease = {
  linear: (t: number) => t,
  outCubic: (t: number) => 1 - (1 - t) ** 3,
  inCubic: (t: number) => t ** 3,
  inOutCubic: (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
  outQuart: (t: number) => 1 - (1 - t) ** 4,
  /** For whip exits: slow start, then gone. */
  inExpo: (t: number) => (t <= 0 ? 0 : 2 ** (10 * t - 10)),
  /** A settle with a small overshoot (1.4 % at c = 1.2). */
  outBack: (t: number) => {
    const c = 1.2
    return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2
  }
} satisfies Record<string, Ease>

/** 0 before `start`, 1 after `start + dur`, eased in between. */
export function ramp(frame: number, start: number, dur: number, e: Ease = ease.outCubic): number {
  if (dur <= 0) return frame >= start ? 1 : 0
  return e(clamp((frame - start) / dur))
}

/**
 * Piecewise keyframes: [[frame, value], ...] sorted by frame. Holds the
 * first and last value outside the range.
 */
export function keys(frame: number, points: readonly (readonly [number, number])[], e: Ease = ease.inOutCubic): number {
  if (points.length === 0) return 0
  if (frame <= points[0][0]) return points[0][1]
  for (let i = 1; i < points.length; i++) {
    const [f1, v1] = points[i]
    const [f0, v0] = points[i - 1]
    if (frame <= f1) return lerp(v0, v1, e(clamp((frame - f0) / (f1 - f0))))
  }
  return points[points.length - 1][1]
}

/** Characters shown by a typewriter at `frame`. */
export function typedCount(length: number, frame: number, start: number, cps: number, fps = 30): number {
  if (frame < start || cps <= 0) return frame < start ? 0 : length
  return Math.min(length, Math.floor(((frame - start) * cps) / fps))
}

/** Frames a typewriter needs for `length` characters. */
export const typeFrames = (length: number, cps: number, fps = 30): number => Math.ceil((length * fps) / cps)

/** Caret visibility: solid while typing, then on for half of each period. */
export function caretOn(frame: number, period: number, typing: boolean): boolean {
  if (typing) return true
  return frame % period < period / 2
}

/** Start frame of item `i` in a cascade. */
export const stagger = (i: number, gap: number, start = 0): number => start + i * gap

/**
 * Directional blur in px for a per-frame displacement, so fast moves smear
 * along their axis and settle sharp. `k` is blur per px of travel.
 */
export function blurFor(deltaPx: number, k = 0.45, max = 48): number {
  const b = Math.abs(deltaPx) * k
  return b < 0.35 ? 0 : Math.min(max, b)
}

/** Per-frame change of any frame function. */
export const velocity = (f: (frame: number) => number, frame: number): number => f(frame) - f(frame - 1)

/**
 * Whip exit progress over the last `len` frames before `end`: 0 until the
 * whip starts, then accelerating to 1 on the cut.
 */
export function whip(frame: number, end: number, len: number): number {
  return ramp(frame, end - len, len, ease.inExpo)
}

/** Deterministic PRNG, so particles look the same on every render. */
export function seeded(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Number shown by a count-up, rounded to `decimals`. */
export function countAt(frame: number, start: number, dur: number, from: number, to: number, decimals = 0): number {
  const v = lerp(from, to, ramp(frame, start, dur, ease.outQuart))
  const p = 10 ** decimals
  return Math.round(v * p) / p
}
