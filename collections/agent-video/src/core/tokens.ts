/**
 * Design tokens for agent videos.
 *
 * Measured from launch films of this genre: warm paper and near-black ink
 * acts, one low-saturation accent per film, hairline structure, no glow
 * blobs. Pure data: no React, no Remotion, so tests can import it.
 */

export const SURFACES = {
  paper: '#F8F8F4',
  paperCard: '#FFFFFF',
  paperLine: '#E7E5DF',
  paperText: '#111111',
  paperMuted: '#76746E',
  ink: '#080808',
  inkCard: '#151517',
  inkLine: '#26262A',
  inkText: '#F5F5F2',
  inkMuted: '#8C8C90'
} as const

/** One accent per film. Low saturation, readable on paper and on ink. */
export const ACCENTS = {
  coral: '#D96550',
  teal: '#3A938B',
  amber: '#C98A2C',
  rose: '#BD5674',
  leaf: '#69A74F',
  blue: '#488EE3',
  indigo: '#5361B0',
  ochre: '#BA8B5E',
  slate: '#55759D'
} as const

export type AccentName = keyof typeof ACCENTS
export type Act = 'paper' | 'ink'

export interface Palette {
  bg: string
  card: string
  line: string
  text: string
  muted: string
  accent: string
  /** Text drawn on top of an accent fill. */
  onAccent: string
}

export function palette(act: Act, accent: AccentName | string): Palette {
  const a = accent in ACCENTS ? ACCENTS[accent as AccentName] : accent
  return act === 'paper'
    ? {
        bg: SURFACES.paper,
        card: SURFACES.paperCard,
        line: SURFACES.paperLine,
        text: SURFACES.paperText,
        muted: SURFACES.paperMuted,
        accent: a,
        onAccent: '#FFFFFF'
      }
    : {
        bg: SURFACES.ink,
        card: SURFACES.inkCard,
        line: SURFACES.inkLine,
        text: SURFACES.inkText,
        muted: SURFACES.inkMuted,
        accent: a,
        onAccent: '#FFFFFF'
      }
}

/** Spring configs, in Remotion's `spring()` shape. */
export const SPRINGS = {
  /** Camera or card landing: a settle with a hint of overshoot. */
  settle: { damping: 18, stiffness: 140, mass: 1 },
  /** Element scale-in. */
  pop: { damping: 12, stiffness: 180, mass: 1 },
  /** UI that must not wobble: panels, sheets, modals. */
  firm: { damping: 26, stiffness: 220, mass: 1 }
} as const

/** Timing tokens in frames at 30 fps. */
export const TIMING = {
  fps: 30,
  /** Fast camera travel. */
  travel: 12,
  /** Braking into sharpness after travel. */
  settle: 12,
  /** Readable hold after a line lands. */
  hold: 36,
  /** Gap between items of a cascade. */
  stagger: 4,
  /** Characters per second for typed UI text. */
  typeCps: 26,
  /** Characters per second for typed headline text. */
  headlineCps: 18,
  /** Frames of the accelerating exit before a whip cut. */
  whip: 6,
  /** Caret blink period. */
  caretPeriod: 30
} as const

/** Type scale for a 1920 x 1080 canvas. */
export const TYPE = {
  family: 'Inter',
  mono: 'JetBrains Mono',
  display: 132,
  headline: 84,
  title: 56,
  body: 34,
  ui: 26,
  small: 20,
  /** Headline tracking in em. Never positive on display type. */
  tracking: -0.025
} as const

export const CANVAS = { width: 1920, height: 1080, fps: 30 } as const

/** Linear mix of two #RRGGBB colours, upper-case result. */
export function mix(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1, 7), 16)
  const pb = parseInt(b.slice(1, 7), 16)
  const k = Math.min(1, Math.max(0, t))
  const ch = (p: number, s: number) => (p >> s) & 255
  const m = (s: number) => Math.round(ch(pa, s) + (ch(pb, s) - ch(pa, s)) * k)
  return `#${((m(16) << 16) | (m(8) << 8) | m(0)).toString(16).padStart(6, '0').toUpperCase()}`
}
