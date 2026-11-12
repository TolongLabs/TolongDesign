// cast.ts — ready-made characters that show how a body plan and parts compose.
// Use them as they are, or copy one as the starting point for a new character.

import { Figure, type FigureOptions } from './figure.ts'
import type { Ink } from './ink.ts'
import { arm, bag, coat, head, legs, parcel, scarf, skirt, top } from './parts.ts'
import type { InkNode } from './surface.ts'

type Place = Pick<FigureOptions, 'x' | 'y' | 'dir' | 'scale' | 'travel'>

export interface Colours {
  [k: string]: string
}

/** Long coat, scarf, briefcase, boots. */
export function commuter(ink: Ink, parent: InkNode, at: Place = {}, c: Colours = {}): Figure {
  return new Figure(ink, parent, {
    ...at,
    parts: [
      arm('far', { fill: c.sleeve ?? '#2b2a28' }),
      legs({ fill: c.trousers ?? '#2b2a28', shoe: 'boot' }),
      coat({ colour: c.coat ?? '#8a6a4a' }),
      scarf({ colour: c.scarf ?? '#b3412d' }),
      head({ hair: 'short', hat: 'beanie', hatColour: c.hat ?? '#58705a' }),
      arm('near', { fill: c.sleeve ?? '#2b2a28' }),
      bag({ kind: 'case', colour: c.bag ?? '#6b4a32' })
    ]
  })
}

/** Long skirt, sun hat, a tote on the near hand; short, low steps. */
export function shopper(ink: Ink, parent: InkNode, at: Place = {}, c: Colours = {}): Figure {
  return new Figure(ink, parent, {
    ...at,
    gait: { kind: 'stroll' },
    parts: [
      arm('far'),
      legs(),
      skirt({ colour: c.skirt ?? '#3e6b8a' }),
      top(),
      head({ hair: 'bun', hat: 'sunhat', hatColour: c.hat ?? '#e2c46a' }),
      arm('near'),
      bag({ colour: c.bag ?? '#c0563b' })
    ]
  })
}

/** A child running, cap on. */
export function kid(ink: Ink, parent: InkNode, at: Place = {}, c: Colours = {}): Figure {
  return new Figure(ink, parent, {
    ...at,
    plan: 'child',
    gait: { kind: 'run' },
    parts: [
      arm('far'),
      legs(),
      top({ colour: c.shirt ?? '#e8b04a', untucked: 4 }),
      head({ hair: 'short', hat: 'cap', hatColour: c.cap ?? '#c0563b' }),
      arm('near')
    ]
  })
}

/** Carrying a parcel in both hands. */
export function courier(ink: Ink, parent: InkNode, at: Place = {}, c: Colours = {}): Figure {
  return new Figure(ink, parent, {
    ...at,
    plan: 'tall',
    parts: [
      arm('far'),
      legs({ fill: c.trousers ?? '#3b4a6b' }),
      top({ colour: c.shirt }),
      head({ hair: 'short', hat: 'cap', hatColour: c.cap ?? '#3b4a6b' }),
      parcel({ colour: c.parcel ?? '#d9b38c' }),
      arm('near')
    ]
  })
}

/** An older walker: long hair, shawl-coloured top, slow steps. */
export function elder(ink: Ink, parent: InkNode, at: Place = {}, c: Colours = {}): Figure {
  return new Figure(ink, parent, {
    ...at,
    gait: { kind: 'stroll', period: 1.15, stride: 15 },
    plan: { lean: 6 },
    parts: [
      arm('far'),
      legs({ fill: c.trousers ?? '#6d6a63' }),
      top({ colour: c.top ?? '#9c6b8e', untucked: 6 }),
      head({ hair: 'long' }),
      arm('near')
    ]
  })
}

export const CAST = { commuter, shopper, kid, courier, elder }
