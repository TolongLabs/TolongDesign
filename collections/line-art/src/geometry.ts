// geometry.ts — pure point maths and path strings. No DOM, fully testable.

export type Vec = [number, number]
export type Pt = readonly number[]

/** Compact number for path strings: two decimals, no trailing zeros. */
export const n2 = (v: number): string => String(Math.round(v * 100) / 100)
export const p2 = (p: Pt): string => `${n2(p[0])} ${n2(p[1])}`

export const add = (a: Pt, b: Pt): Vec => [a[0] + b[0], a[1] + b[1]]
export const sub = (a: Pt, b: Pt): Vec => [a[0] - b[0], a[1] - b[1]]
export const scale = (a: Pt, k: number): Vec => [a[0] * k, a[1] * k]
export const mixPt = (a: Pt, b: Pt, t: number): Vec => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
export const dist = (a: Pt, b: Pt): number => Math.hypot(b[0] - a[0], b[1] - a[1])

/** Straight segments through the points. */
export function linePath(pts: readonly Pt[], closed = false): string {
  if (!pts.length) return ''
  return 'M' + pts.map(p2).join('L') + (closed ? 'Z' : '')
}

/**
 * A smooth curve through every point (Catmull-Rom converted to cubic Béziers).
 * Hand-drawn lines curve between their points; this is the default for all ink.
 */
export function smoothPath(pts: readonly Pt[], closed = false, tension = 1): string {
  const n = pts.length
  if (n < 3) return linePath(pts, closed)
  const at = (i: number): Pt => (closed ? pts[((i % n) + n) % n] : pts[Math.max(0, Math.min(n - 1, i))])
  let d = `M${p2(pts[0])}`
  const segs = closed ? n : n - 1
  for (let i = 0; i < segs; i++) {
    const p0 = at(i - 1),
      p1 = at(i),
      p2_ = at(i + 1),
      p3 = at(i + 2)
    const k = tension / 6
    const c1: Vec = [p1[0] + (p2_[0] - p0[0]) * k, p1[1] + (p2_[1] - p0[1]) * k]
    const c2: Vec = [p2_[0] - (p3[0] - p1[0]) * k, p2_[1] - (p3[1] - p1[1]) * k]
    d += `C${p2(c1)} ${p2(c2)} ${p2(p2_)}`
  }
  return closed ? d + 'Z' : d
}

/** Sample a quadratic Bézier. */
export function quadPoints(s: Pt, c: Pt, e: Pt, count = 12): Vec[] {
  const out: Vec[] = []
  for (let i = 0; i <= count; i++) {
    const t = i / count,
      u = 1 - t
    out.push([u * u * s[0] + 2 * u * t * c[0] + t * t * e[0], u * u * s[1] + 2 * u * t * c[1] + t * t * e[1]])
  }
  return out
}

/**
 * A soft curve along a chain of 2 or 3 joints. With 3 joints the curve bows
 * toward the middle joint without a hard corner: joints read rounded, like ink.
 */
export function jointCurve(joints: readonly Pt[], count = 12, softness = 0.7): Vec[] {
  const s = joints[0],
    e = joints[joints.length - 1]
  let c: Vec = mixPt(s, e, 0.5)
  if (joints.length >= 3) {
    const m = joints[1]
    c = [m[0] + softness * (m[0] - c[0]), m[1] + softness * (m[1] - c[1])]
  }
  return quadPoints(s, c, e, count)
}

/** Offset a polyline sideways by d (positive = left of travel in screen space). Width may vary per point. */
export function offset(pts: readonly Pt[], d: number | ((i: number) => number)): Vec[] {
  return pts.map((p, i) => {
    const q = pts[Math.min(pts.length - 1, i + 1)],
      o = pts[Math.max(0, i - 1)]
    const dx = q[0] - o[0],
      dy = q[1] - o[1],
      l = Math.hypot(dx, dy) || 1
    const k = typeof d === 'number' ? d : d(i)
    return [p[0] + (dy / l) * k, p[1] - (dx / l) * k]
  })
}

/** Points around an ellipse, optionally rotated (radians). */
export function ellipsePoints(cx: number, cy: number, rx: number, ry: number, count = 18, rot = 0): Vec[] {
  const out: Vec[] = []
  const c = Math.cos(rot),
    s = Math.sin(rot)
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2
    const x = Math.cos(a) * rx,
      y = Math.sin(a) * ry
    out.push([cx + x * c - y * s, cy + x * s + y * c])
  }
  return out
}

/** Rotate a point about an origin (radians, screen space: positive is clockwise). */
export function rotate(p: Pt, about: Pt, a: number): Vec {
  const c = Math.cos(a),
    s = Math.sin(a),
    x = p[0] - about[0],
    y = p[1] - about[1]
  return [about[0] + x * c - y * s, about[1] + x * s + y * c]
}

/** Point `len` away from `from`, `deg` degrees from straight down (positive swings toward +x). */
export function hang(from: Pt, len: number, deg: number): Vec {
  const r = (deg * Math.PI) / 180
  return [from[0] + len * Math.sin(r), from[1] + len * Math.cos(r)]
}

/**
 * Two-bone inverse kinematics: the middle joint for a chain a→b of lengths l1, l2.
 * bend = +1 puts the joint toward +x (knees, a dog's foreleg), -1 toward -x (elbows, hocks).
 */
export function ik2(a: Pt, b: Pt, l1: number, l2: number, bend: 1 | -1 = 1): Vec {
  const dx = b[0] - a[0],
    dy = b[1] - a[1]
  const d = Math.max(1e-6, Math.min(Math.hypot(dx, dy), l1 + l2 - 1e-3))
  const th = Math.atan2(dy, dx)
  const al = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))))
  const c1: Vec = [a[0] + l1 * Math.cos(th - al), a[1] + l1 * Math.sin(th - al)]
  const c2: Vec = [a[0] + l1 * Math.cos(th + al), a[1] + l1 * Math.sin(th + al)]
  return (c1[0] - c2[0]) * bend > 0 ? c1 : c2
}

export interface LimbOutline {
  /** Closed fill between the two edges. */
  body: Vec[]
  /** The two pen lines, each cut short at the far end so the limb reads open. */
  left: Vec[]
  right: Vec[]
}

/**
 * The open double-stroke limb: two pen lines either side of a curve through the
 * joints, with paper (or a flat colour) between them. Lines stop short of each
 * other at the far end; width tapers toward the extremity.
 */
export function limbOutline(
  joints: readonly Pt[],
  width: number,
  pen: number,
  opts: { taper?: number; gaps?: readonly [number, number]; samples?: number } = {}
): LimbOutline {
  const { taper = 0.86, gaps = [0.05, 0.12], samples = 14 } = opts
  const core = jointCurve(joints, samples)
  const half = (i: number) => ((width - pen) / 2) * (1 - (1 - taper) * (i / samples))
  const left = offset(core, half)
  const right = offset(core, (i) => -half(i))
  const cut = (arr: Vec[], g: number) => arr.slice(0, Math.max(2, arr.length - Math.round(g * arr.length)))
  return { body: [...left, ...right.slice().reverse()], left: cut(left, gaps[0]), right: cut(right, gaps[1]) }
}
