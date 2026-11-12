// ink.ts — the pen. Every mark goes through an Ink, which owns line weight,
// static roughness and "line boil": the hand-drawn shimmer of traditional
// animation, where each drawing is re-inked so lines crawl slightly at 8–12 fps.
//
// Boil is geometry, not an SVG filter, so it survives static export (Figma,
// print, OG images) and costs nothing when switched off.
//
// Conventions
//  - Ink colour is `currentColor`. Paper fills use PAPER and the class "pp";
//    the stage stylesheet maps `.pp` to `var(--paper)` so a palette can retint
//    a whole drawing, e.g. pale ink on indigo paper at night.
//  - Create nodes once, then call `draw()` every frame. Nothing allocates DOM per frame.

import { type Pt, type Vec, limbOutline, linePath, smoothPath } from './geometry.ts'
import type { Attrs, InkNode, Surface } from './surface.ts'

export const INK = 'currentColor'
export const PAPER = '#fdfbf6'
export const INK_DAY = '#1d1b18'
/** Default pen width in figure units (figures are 100 units tall). */
export const PEN = 1.4

export interface InkOptions {
  /** Pen width in the units of the layer you draw into. */
  pen?: number
  /** Permanent hand-drawn irregularity, in units. Applies even in still exports. */
  rough?: number
  /** Line-boil amplitude in units; 0 turns boil off. */
  boil?: number
  /** How many times a second the drawing is re-inked (8–12 reads as hand animation). */
  boilFps?: number
  /** Seed for every stroke's noise. */
  seed?: number
}

export interface DrawOptions {
  closed?: boolean
  /** false draws straight segments (architecture edges); default true. */
  smooth?: boolean
}

export interface Stroke {
  readonly node: InkNode
  draw(pts: readonly Pt[], opts?: DrawOptions): this
  /** Re-ink this stroke on every boil frame with its last points (for static scenery). */
  keep(): this
  hide(): void
}

export interface Limb {
  readonly node: InkNode
  /** joints: [root, end] or [root, bend, end]. */
  draw(joints: readonly Pt[], gaps?: readonly [number, number]): void
}

// integer hash → [-1, 1]
function hash(a: number, b: number, c: number): number {
  let h = Math.imul(a | 0, 0x27d4eb2d) ^ Math.imul(b | 0, 0x165667b1) ^ Math.imul(c | 0, 0x9e3779b1)
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b)
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35)
  return ((h ^ (h >>> 16)) >>> 0) / 2147483647.5 - 1
}

/** 1-D value noise along a stroke: neighbouring points move together, so lines bend instead of fizzing. */
function noise(x: number, seed: number, frame: number): number {
  const i = Math.floor(x),
    f = x - i,
    s = f * f * (3 - 2 * f)
  return hash(i, seed, frame) * (1 - s) + hash(i + 1, seed, frame) * s
}

export class Ink {
  readonly surface: Surface
  pen: number
  rough: number
  boil: number
  boilFps: number
  readonly seed: number
  /** Current boil frame; advanced by `tick()`. */
  frame = 0
  // shared with pens derived by withPen(), so every stroke gets its own noise
  private counter = { salt: 1 }
  private kept: Array<() => void> = []

  constructor(surface: Surface, opts: InkOptions = {}) {
    this.surface = surface
    this.pen = opts.pen ?? PEN
    this.rough = opts.rough ?? 0.18
    this.boil = opts.boil ?? 0.22
    this.boilFps = opts.boilFps ?? 10
    this.seed = opts.seed ?? 3
  }

  /** Advance the boil clock. Call once per frame before drawing; redraws kept strokes on a new boil frame. */
  tick(t: number): void {
    const frame = this.boil > 0 ? Math.floor(t * this.boilFps) : 0
    if (frame !== this.frame) {
      this.frame = frame
      for (const redraw of this.kept) redraw()
    }
  }

  /** Multiplier on rough and boil for derived inks (figures drawn at a smaller scale need a larger amp). */
  amp = 1

  /**
   * A derived ink sharing this one's boil clock and boil switch: a different pen
   * (detail lines at 0.5×) or noise amplitude (figures placed at scale s want amp = 1/s).
   * Call `tick()` on the root ink only.
   */
  derive(o: { pen?: number; amp?: number }): Ink {
    const child = Object.create(this) as Ink
    if (o.pen !== undefined) child.pen = o.pen
    if (o.amp !== undefined) child.amp = this.amp * o.amp
    return child
  }

  withPen(pen: number): Ink {
    return this.derive({ pen })
  }

  /** Displace points by this stroke's roughness and the current boil frame. */
  wobble(pts: readonly Pt[], salt: number): Vec[] {
    const rough = this.rough * this.amp,
      boil = this.boil * this.amp
    if (rough <= 0 && boil <= 0) return pts.map((p) => [p[0], p[1]])
    const sx = this.seed * 7919 + salt * 2,
      sy = sx + 1
    return pts.map((p, i) => {
      const u = i * 0.42
      const dx = rough * noise(u, sx, -1) + boil * noise(u, sx, this.frame)
      const dy = rough * noise(u, sy, -1) + boil * noise(u, sy, this.frame)
      return [p[0] + dx, p[1] + dy]
    })
  }

  group(parent: InkNode, attrs: Attrs = {}): InkNode {
    return this.surface.create('g', attrs, parent)
  }

  private stroke(parent: InkNode, attrs: Attrs, defaultClosed: boolean): Stroke {
    const node = this.surface.create('path', attrs, parent)
    if (attrs.fill === PAPER) node.addClass('pp')
    const salt = this.counter.salt++
    let last: readonly Pt[] = []
    let lastOpts: DrawOptions = {}
    let kept = false
    const ink = this
    const stroke: Stroke = {
      node,
      draw(pts, opts = {}) {
        last = pts
        lastOpts = opts
        const closed = opts.closed ?? defaultClosed
        const w = ink.wobble(pts, salt)
        node.set('d', opts.smooth === false ? linePath(w, closed) : smoothPath(w, closed))
        return this
      },
      keep() {
        if (!kept) ink.kept.push(() => stroke.draw(last, lastOpts))
        kept = true
        return this
      },
      hide() {
        node.set('d', '')
      }
    }
    return stroke
  }

  /** Open pen stroke. */
  line(parent: InkNode, w = this.pen): Stroke {
    return this.stroke(
      parent,
      { fill: 'none', stroke: INK, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
      false
    )
  }

  /** Closed outline filled with paper: hides what is behind it (heads, coats, walls). */
  shape(parent: InkNode, w = this.pen): Stroke {
    return this.stroke(
      parent,
      { fill: PAPER, stroke: INK, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
      true
    )
  }

  /** Closed outline with a flat colour (clothes, props). */
  paint(parent: InkNode, colour: string, w = this.pen): Stroke {
    return this.stroke(
      parent,
      { fill: colour, stroke: INK, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
      true
    )
  }

  /** Solid ink, no outline: shoes, hair, paws, small dark details. */
  blot(parent: InkNode): Stroke {
    return this.stroke(parent, { fill: INK }, true)
  }

  /** Fill only, no outline (paper behind open strokes, glows). */
  fill(parent: InkNode, colour = PAPER): Stroke {
    return this.stroke(parent, { fill: colour }, true)
  }

  /**
   * The style's signature: a limb as two separate pen lines around a soft curve
   * through the joints, open at the far end, paper (or `fill`) between them.
   */
  limb(parent: InkNode, width: number, opts: { fill?: string; taper?: number; w?: number } = {}): Limb {
    const g = this.group(parent)
    const body = this.fill(g, opts.fill ?? PAPER)
    const a = this.line(g, opts.w ?? this.pen)
    const b = this.line(g, opts.w ?? this.pen)
    const pen = opts.w ?? this.pen
    return {
      node: g,
      draw: (joints, gaps) => {
        const o = limbOutline(joints, width, pen, { taper: opts.taper, gaps })
        body.draw(o.body)
        a.draw(o.left)
        b.draw(o.right)
      }
    }
  }
}

/** Place a figure group: its local origin (feet, hip-x) lands on (x, y); dir ±1 mirrors it; s scales it. */
export function place(node: InkNode, x: number, y: number, dir: 1 | -1, s: number): void {
  node.set('transform', `translate(${round(x)} ${round(y)}) scale(${round(dir * s)} ${round(s)})`)
}
const round = (v: number) => Math.round(v * 1000) / 1000

export interface Stage {
  svg: InkNode
  defs: InkNode
  ink: Ink
  width: number
  height: number
}

/** Create a root <svg> with the paper stylesheet. On a live surface, pass `mount` to attach it. */
export function stage(
  surface: Surface,
  opts: { width: number; height: number; mount?: Element; label?: string } & InkOptions
): Stage {
  const { width, height } = opts
  const svg = surface.create('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: `0 0 ${width} ${height}`,
    role: 'img',
    'aria-label': opts.label ?? 'Line-art drawing',
    style: `color:${INK_DAY};--paper:${PAPER}`
  })
  surface.create('style', {}, svg).text(`.pp{fill:var(--paper,${PAPER})}`)
  const defs = surface.create('defs', {}, svg)
  if (opts.mount && svg.dom) opts.mount.appendChild(svg.dom)
  return { svg, defs, ink: new Ink(surface, opts), width, height }
}
