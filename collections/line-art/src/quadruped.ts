// quadruped.ts — four-leg gait solver, built on the same foot path as the biped.
//
// Animal space: ground y = 0, rear hip above x = 0, shoulder above x = `body`,
// facing +x. Paw order: 0 near-hind, 1 near-fore, 2 far-hind, 3 far-fore
// (facing +x, the animal's left side faces the viewer and is "near").
//
// Gaits are phase offsets per paw:
//   walk (lateral sequence): hind, then the fore on the same side a quarter later
//   trot: diagonal pairs move together
// Hip and shoulder heights are solved separately from the planted paws, so the
// spine rocks naturally and the head bobs with the forelegs.

import { type Vec, ik2 } from './geometry.ts'
import { type FootState, type StepShape, footAt, stripUndefined } from './gait.ts'

export type QuadKind = 'walk' | 'trot'

export interface QuadPlan {
  /** Hip to shoulder distance. */
  body: number
  hindThigh: number
  hindShin: number
  foreUpper: number
  foreLower: number
}

export const QUAD_PLANS: Record<'dog' | 'cat', QuadPlan> = {
  dog: { body: 30, hindThigh: 11, hindShin: 11.5, foreUpper: 10.5, foreLower: 11 },
  cat: { body: 22, hindThigh: 8, hindShin: 8.5, foreUpper: 7.5, foreLower: 8 }
}

export interface QuadOptions extends Partial<StepShape> {
  kind?: QuadKind
  period?: number
  plan?: Partial<QuadPlan>
}

export interface Paw extends FootState {
  knee: Vec
}

export interface QuadPose {
  hip: Vec
  shoulder: Vec
  paws: [Paw, Paw, Paw, Paw]
  /** Shoulder drop from standing (positive = lower): drives the head bob. */
  foreBob: number
  hindBob: number
}

export interface QuadGait {
  kind: QuadKind
  period: number
  plan: QuadPlan
  shape: StepShape
  speed: number
  pose(phase: number, go?: number): QuadPose
}

const OFFSETS: Record<QuadKind, [number, number, number, number]> = {
  walk: [0, 0.25, 0.5, 0.75],
  trot: [0, 0.5, 0.5, 0]
}

const PRESETS: Record<QuadKind, { period: number } & StepShape> = {
  walk: { period: 0.92, duty: 0.7, stride: 12, lift: 3, heelOff: 6, heelKick: 0, ankleY: -1.1, toe: 1.6 },
  trot: { period: 0.5, duty: 0.52, stride: 14, lift: 4.6, heelOff: 8, heelKick: 0, ankleY: -1.1, toe: 1.6 }
}

export function quadruped(opts: QuadOptions = {}): QuadGait {
  const kind = opts.kind ?? 'walk'
  const { plan: planOverride, kind: _k, ...rest } = opts
  const plan = { ...QUAD_PLANS.dog, ...(planOverride ?? {}) }
  const legScale = (plan.hindThigh + plan.hindShin) / 22.5
  const base = PRESETS[kind]
  const shape: StepShape & { period: number } = {
    ...base,
    stride: base.stride * legScale,
    lift: base.lift * legScale,
    ...stripUndefined(rest)
  }
  const hindReach = (plan.hindThigh + plan.hindShin) * 0.94 // animals stand with soft joints
  const foreReach = (plan.foreUpper + plan.foreLower) * 0.97
  const restHip = shape.ankleY - hindReach
  const restSh = shape.ankleY - foreReach
  const speed = shape.stride / (shape.duty * shape.period)
  const off = OFFSETS[kind]

  return {
    kind,
    period: shape.period,
    plan,
    shape,
    speed,
    pose(phase, go = 1) {
      const raw = off.map((o, i) => {
        const x0 = i % 2 ? plan.body : 0
        const f = footAt(phase + o, x0, shape)
        if (go < 1) {
          const rest = x0 + (i < 2 ? 1 : -1)
          f.ankle = [rest + (f.ankle[0] - rest) * go, shape.ankleY + (f.ankle[1] - shape.ankleY) * go]
          f.stance = true
        }
        return f
      })
      const solve = (x0: number, rest: number, reach: number, idx: number[]) => {
        let y = rest
        for (const i of idx) {
          const f = raw[i]
          if (!f.stance) continue
          const dx = f.ankle[0] - x0
          y = Math.max(y, f.ankle[1] - Math.sqrt(Math.max(1, reach * reach - dx * dx)))
        }
        return y
      }
      const hy = solve(0, restHip, hindReach, [0, 2])
      const sy = solve(plan.body, restSh, foreReach, [1, 3])
      const hip: Vec = [0, hy],
        shoulder: Vec = [plan.body, sy]
      const paws = raw.map((f, i) =>
        i % 2
          ? { ...f, knee: ik2(shoulder, f.ankle, plan.foreUpper, plan.foreLower, 1) }
          : { ...f, knee: ik2(hip, f.ankle, plan.hindThigh, plan.hindShin, -1) }
      ) as [Paw, Paw, Paw, Paw]
      return { hip, shoulder, paws, foreBob: sy - restSh, hindBob: hy - restHip }
    }
  }
}
