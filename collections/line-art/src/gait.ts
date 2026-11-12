// gait.ts — legs are solved, not animated.
//
// Figure space: feet on y = 0 (y grows downward), hip above x = 0, facing +x,
// an adult about 100 units tall. Place a figure into a scene with `place()`.
//
// Four rules give a believable gait; every one is built in here:
//  1. A planted foot slides back at exactly the travel speed, so moving the
//     figure by `speed` keeps it still on the ground. Move by anything else and feet skate.
//  2. The swing foot travels on a minimum-jerk path with a low, flat-ended lift.
//  3. The heel peels off before the swing: the foot pivots on its toe.
//  4. Hip height comes from what the planted legs can reach, so a walker rises
//     over each step and dips at double support. A runner is ballistic in flight.
//     No sine-wave bobbing anywhere.

import { type Vec, ik2 } from './geometry.ts'
import { bump, minJerk, smoothstep, wrap01 } from './motion.ts'

export interface StepShape {
  /** Fraction of the cycle a foot is planted (walk ≈ 0.6, run ≈ 0.38, dog walk ≈ 0.7). */
  duty: number
  /** Distance a planted foot travels under the body. */
  stride: number
  /** Peak foot lift in the swing. */
  lift: number
  /** Degrees the foot pitches toe-down as the heel peels. */
  heelOff: number
  /** Runners: how far the heel kicks back early in the swing. 0 for walks. */
  heelKick: number
  /** Ankle height above the ground when the foot is flat (negative = up). */
  ankleY: number
  /** Ankle-to-toe distance; the pivot for heel-off. */
  toe: number
}

export interface FootState {
  ankle: Vec
  /** Toe-down pitch in degrees. */
  pitch: number
  stance: boolean
}

/** Where one foot is at cycle position u ∈ [0,1), for a hip (or shoulder) above x0. */
export function footAt(u: number, x0: number, s: StepShape): FootState {
  u = wrap01(u)
  const { duty, stride: S, lift, heelOff, heelKick, ankleY, toe } = s
  if (u < duty) {
    const x = x0 + S / 2 - (S * u) / duty
    const peel = smoothstep(duty * 0.78, duty, u)
    const th = (heelOff * peel * Math.PI) / 180
    // pivot about the toe tip on the ground
    const ox = -toe,
      oy = ankleY
    return {
      ankle: [x + toe + ox * Math.cos(th) - oy * Math.sin(th), ox * Math.sin(th) + oy * Math.cos(th)],
      pitch: heelOff * peel,
      stance: true
    }
  }
  const sw = (u - duty) / (1 - duty)
  const x = x0 - S / 2 + S * minJerk(sw) - heelKick * Math.sin(Math.PI * Math.min(1, sw * 1.6))
  const y = ankleY - lift * bump(heelKick ? Math.pow(sw, 0.72) : sw)
  return { ankle: [x, y], pitch: heelOff * Math.pow(1 - smoothstep(0, 0.5, sw), 1.3), stance: false }
}

export type BipedKind = 'walk' | 'stroll' | 'run'

export interface BipedOptions extends Partial<StepShape> {
  kind?: BipedKind
  /** Seconds for one left + right cycle. */
  period?: number
  thigh?: number
  shin?: number
}

export interface BipedFoot extends FootState {
  knee: Vec
}

export interface BipedPose {
  hip: Vec
  feet: [BipedFoot, BipedFoot]
  /** Index of the leading foot: draw that leg on top. */
  front: 0 | 1
  /** Hip offset from standing height (positive = lower). */
  bob: number
  /** -1 … 1: how far foot 0 is forward. Drives counter-swinging arms. */
  swing: number
}

export interface BipedGait extends StepShape {
  kind: BipedKind
  period: number
  thigh: number
  shin: number
  /** Figure units per second. Multiply by the figure's scale for scene speed. */
  speed: number
  /** phase in cycles; go ∈ [0,1] blends both feet down to a standstill. */
  pose(phase: number, go?: number): BipedPose
}

export const BIPED_PRESETS: Record<BipedKind, Required<Omit<BipedOptions, 'kind'>>> = {
  // an unhurried adult walk, just under 2 steps a second
  walk: {
    period: 1.08,
    duty: 0.61,
    stride: 25,
    lift: 3.4,
    heelOff: 16,
    heelKick: 0,
    ankleY: -1.7,
    toe: 4.4,
    thigh: 24.5,
    shin: 24.5
  },
  // long skirts, sandals, carrying something: shorter, lower steps
  stroll: {
    period: 0.96,
    duty: 0.64,
    stride: 18,
    lift: 2.4,
    heelOff: 11,
    heelKick: 0,
    ankleY: -1.7,
    toe: 4.4,
    thigh: 24.5,
    shin: 24.5
  },
  // short contact, a flight phase, a heel kick
  run: {
    period: 0.62,
    duty: 0.38,
    stride: 22,
    lift: 11,
    heelOff: 10,
    heelKick: 4,
    ankleY: -1.7,
    toe: 4.2,
    thigh: 24.5,
    shin: 24.5
  }
}

export function biped(opts: BipedOptions = {}): BipedGait {
  const kind = opts.kind ?? 'walk'
  const o = { ...BIPED_PRESETS[kind], ...stripUndefined(opts), kind }
  const reach = (o.thigh + o.shin) * 0.985 // a planted leg is nearly, never perfectly, straight
  const restHip = o.ankleY - reach
  const speed = o.stride / (o.duty * o.period)

  return {
    ...o,
    speed,
    pose(phase, go = 1) {
      const raw = [footAt(phase, 0, o), footAt(phase + 0.5, 0, o)]
      if (go < 1)
        raw.forEach((f, i) => {
          const rest = i ? -1.6 : 1.6
          f.ankle = [rest + (f.ankle[0] - rest) * go, o.ankleY + (f.ankle[1] - o.ankleY) * go]
          f.pitch *= go
          f.stance = true
        })

      let hipY = restHip
      if (o.heelKick > 0 && go >= 0.999) {
        // run: compress over the planted foot, ballistic in flight
        const half = wrap01(phase * 2) / 2 // 0 … 0.5
        const k = reach / 48.3 // compression and flight height scale with leg length
        if (half < o.duty) hipY = restHip + 1.8 * k * Math.sin((Math.PI * half) / o.duty)
        else {
          const s = (half - o.duty) / (0.5 - o.duty)
          hipY = restHip - 3.2 * k * 4 * s * (1 - s)
        }
      } else {
        // walk: the hip sits as high as the planted legs allow
        for (const f of raw)
          if (f.stance) {
            const dx = f.ankle[0]
            hipY = Math.max(hipY, f.ankle[1] - Math.sqrt(Math.max(1, reach * reach - dx * dx)))
          }
      }
      const hip: Vec = [0, hipY]
      const feet = raw.map((f) => ({ ...f, knee: ik2(hip, f.ankle, o.thigh, o.shin, 1) })) as [BipedFoot, BipedFoot]
      return {
        hip,
        feet,
        front: feet[0].ankle[0] >= feet[1].ankle[0] ? 0 : 1,
        bob: hipY - restHip,
        swing: Math.max(-1, Math.min(1, feet[0].ankle[0] / (o.stride / 2)))
      }
    }
  }
}

export function stripUndefined<T extends object>(o: T): Partial<T> {
  const out: Partial<T> = {}
  for (const k in o) if (o[k] !== undefined) out[k] = o[k]
  return out
}
