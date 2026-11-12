// palette.ts — time of day for ink-on-paper scenes.
// τ ∈ [0,1): 0 midnight · 0.25 dawn · 0.5 noon · 0.75 dusk.
//
// Day is dark ink on warm paper. Night inverts it: pale ink on indigo paper,
// with warm light from windows and lamps. Ink flips while the paper is
// mid-dark, so the low-contrast moment is brief.

import type { InkNode } from './surface.ts'

export type RGB = [number, number, number]

export const hexToRGB = (h: string): RGB => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB
export const rgb = (c: RGB): string => `rgb(${c.map((v) => Math.round(v)).join(',')})`
export const hex = (c: RGB): string => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
export const mixRGB = (a: RGB, b: RGB, t: number): RGB => a.map((v, i) => v + (b[i] - v) * t) as RGB
export const luminance = (c: RGB): number => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255
const sstep = (e0: number, e1: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)))
  return t * t * (3 - 2 * t)
}

export interface SkyStop {
  at: number
  top: string
  bottom: string
  paper: string
}

/** One cyclic list of stops; each carries every colour, so the ramps never drift apart. */
export const DAY_CYCLE: SkyStop[] = [
  { at: 0.0, top: '#10142a', bottom: '#1d2547', paper: '#1b2138' },
  { at: 0.2, top: '#151b34', bottom: '#2a3256', paper: '#20273f' },
  { at: 0.245, top: '#47486e', bottom: '#d8a08a', paper: '#544d68' },
  { at: 0.28, top: '#d4dce4', bottom: '#f4d6bb', paper: '#efe7da' },
  { at: 0.34, top: '#f1f0ea', bottom: '#fbf7ef', paper: '#fbf8f0' },
  { at: 0.5, top: '#f4f3ee', bottom: '#fdfbf6', paper: '#fdfbf6' },
  { at: 0.67, top: '#f2ece0', bottom: '#f8ecd8', paper: '#f9f1e3' },
  { at: 0.73, top: '#e6c39d', bottom: '#ef9e72', paper: '#efd6bb' },
  { at: 0.76, top: '#5b4f78', bottom: '#cf7a66', paper: '#5f566f' },
  { at: 0.8, top: '#1c2242', bottom: '#3a3b62', paper: '#272d49' },
  { at: 0.87, top: '#10142a', bottom: '#1d2547', paper: '#1b2138' }
]

export const INK_DARK = '#1d1b18'
export const INK_LIGHT = '#eee4cc'

export interface Palette {
  top: RGB
  bottom: RGB
  paper: RGB
  ink: RGB
  /** 0 day ink … 1 night ink. */
  inkT: number
  /** 0 bright … 1 dark. Give each light its own threshold so they switch on one by one. */
  lamp: number
  /** Stars, moon glow, fireflies. */
  night: number
  /** Warm horizon light around dawn and dusk. */
  golden: number
}

function sample(stops: SkyStop[], key: 'top' | 'bottom' | 'paper', u: number): RGB {
  u = ((u % 1) + 1) % 1
  const n = stops.length
  let i = n - 1
  for (let j = 0; j < n; j++) if (stops[j].at <= u) i = j
  const a = stops[i],
    b = stops[(i + 1) % n]
  const span = (i + 1 < n ? b.at : b.at + 1) - a.at
  let x = u - a.at
  if (x < 0) x += 1
  return mixRGB(hexToRGB(a[key]), hexToRGB(b[key]), sstep(0, 1, x / span))
}

export function palette(tau: number, stops: SkyStop[] = DAY_CYCLE): Palette {
  const top = sample(stops, 'top', tau),
    bottom = sample(stops, 'bottom', tau),
    paper = sample(stops, 'paper', tau)
  const L = luminance(paper)
  const inkT = sstep(0.56, 0.36, L)
  return {
    top,
    bottom,
    paper,
    inkT,
    ink: mixRGB(hexToRGB(INK_DARK), hexToRGB(INK_LIGHT), inkT),
    lamp: sstep(0.8, 0.42, L),
    night: sstep(0.42, 0.1, luminance(top)),
    golden: Math.max(sstep(0.66, 0.73, tau) * sstep(0.79, 0.745, tau), sstep(0.22, 0.25, tau) * sstep(0.31, 0.27, tau))
  }
}

/** Retint a stage: ink via `color`, paper via `--paper`. Works live and headless. */
export function applyPalette(svg: InkNode, P: Palette): void {
  svg.set('style', `color:${rgb(P.ink)};--paper:${rgb(P.paper)}`)
}

/** Push a flat colour (clothes, props) toward the night palette. */
export function nightTint(colour: string, P: Palette, amount = 0.6): string {
  const c = hexToRGB(colour)
  return rgb(mixRGB(c, mixRGB(c, [14, 18, 34], 0.65), P.inkT * amount))
}
