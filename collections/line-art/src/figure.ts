// figure.ts — a rig plus a costume. The rig (Body) solves a skeleton every frame
// from the gait, springs and any gesture; costume Parts only draw around that
// skeleton. A new character is a body plan plus a list of parts, not a new
// 150-line drawing routine.
//
//   const anna = new Figure(ink, layer, {
//     plan: 'adult', gait: { kind: 'stroll' },
//     parts: [arm('far'), legs(), skirt({ colour: '#3e6b8a' }), top(), head({ hair: 'bun' }), arm('near'), bag()],
//   })
//   anna.update(t, dt, { wind })

import { type Vec, hang, ik2, mixPt } from './geometry.ts'
import { type BipedFoot, type BipedGait, type BipedOptions, biped } from './gait.ts'
import { type Ink, place } from './ink.ts'
import { type Spring, clamp, drift, spring } from './motion.ts'
import type { InkNode } from './surface.ts'

export interface BodyPlan {
  thigh: number
  shin: number
  /** Hip to the base of the neck. */
  torso: number
  neck: number
  /** Head radii. */
  headRx: number
  headRy: number
  upperArm: number
  forearm: number
  /** Forward lean in degrees (runners lean more). */
  lean: number
  /** Torso half-depth at the chest, for garments. */
  chest: number
}

export const PLANS: Record<'adult' | 'child' | 'tall', BodyPlan> = {
  adult: {
    thigh: 24.5,
    shin: 24.5,
    torso: 30,
    neck: 4,
    headRx: 4.4,
    headRy: 5.7,
    upperArm: 18.5,
    forearm: 17,
    lean: 2,
    chest: 5
  },
  tall: {
    thigh: 27,
    shin: 27,
    torso: 32,
    neck: 4.4,
    headRx: 4.4,
    headRy: 5.7,
    upperArm: 20,
    forearm: 18.5,
    lean: 1.5,
    chest: 5.4
  },
  // bigger head, shorter limbs
  child: {
    thigh: 14.5,
    shin: 14.5,
    torso: 18,
    neck: 2.4,
    headRx: 4.6,
    headRy: 5.6,
    upperArm: 11,
    forearm: 10,
    lean: 5,
    chest: 4
  }
}

export interface Skeleton {
  hip: Vec
  neck: Vec
  head: { c: Vec; rx: number; ry: number; tilt: number }
  /** [far, near] */
  shoulder: [Vec, Vec]
  elbow: [Vec, Vec]
  hand: [Vec, Vec]
  feet: [BipedFoot, BipedFoot]
  front: 0 | 1
  bob: number
  /** Lean in radians. */
  lean: number
  plan: BodyPlan
  /** A point on the torso: u = 0 at the hip, 1 at the neck; side > 0 toward the chest. */
  torso(u: number, side: number): Vec
}

export type ArmSide = 'far' | 'near'
const ARM = { far: 0, near: 1 } as const

interface Reach {
  target: Vec | null
  bend: 1 | -1
  weight: Spring
}

/** The rig: gait + upper body + gestures → a Skeleton per frame. */
export class Body {
  readonly plan: BodyPlan
  readonly gait: BipedGait
  phase = 0
  /** 1 walking … 0 standing; eases toward `goal`. */
  go = 1
  goal = 1
  private armSwing: [Spring, Spring]
  private reaches: [Reach, Reach] = [
    { target: null, bend: 1, weight: spring(40, 11) },
    { target: null, bend: 1, weight: spring(40, 11) }
  ]

  constructor(plan: BodyPlan, gait: BipedOptions = {}) {
    this.plan = plan
    // scale stride, lift and toe with leg length so a child's step is a child's step
    const k = (plan.thigh + plan.shin) / 49
    const base = biped({ kind: gait.kind })
    this.gait = biped({
      ...gait,
      thigh: plan.thigh,
      shin: plan.shin,
      stride: gait.stride ?? base.stride * k,
      lift: gait.lift ?? base.lift * k,
      toe: gait.toe ?? base.toe * Math.sqrt(k),
      heelKick: gait.heelKick ?? base.heelKick * k
    })
    // arms must keep up with the stride: tune the springs to the gait's frequency
    const w = (2 * Math.PI) / this.gait.period
    const stiff = w * w * 2.5,
      damp = 2 * Math.sqrt(stiff) * 0.35
    this.armSwing = [spring(stiff, damp), spring(stiff, damp)]
  }

  /** Move a hand toward a point in figure space (null releases it). bend +1 puts the elbow forward. */
  reach(side: ArmSide, target: Vec | null, bend: 1 | -1 = 1): void {
    const r = this.reaches[ARM[side]]
    if (target) {
      r.target = target
      r.bend = bend
    } else r.target = null
  }

  /** Advance time; returns the distance travelled in figure units. */
  advance(dt: number): number {
    this.go += (this.goal - this.go) * (1 - Math.exp(-dt * 5))
    if (Math.abs(this.goal - this.go) < 1e-3) this.go = this.goal
    this.phase += (dt / this.gait.period) * this.go
    return this.gait.speed * this.go * dt
  }

  skeleton(t: number, dt: number): Skeleton {
    const P = this.plan
    const run = this.gait.kind === 'run'
    const pose = this.gait.pose(this.phase, this.go)
    const lean = ((P.lean + (run ? 7 : 0) * this.go) * Math.PI) / 180
    const breathe = Math.sin(t * 1.9) * 0.35
    const hip = pose.hip
    const axis: Vec = [Math.sin(lean), -Math.cos(lean)]
    const normal: Vec = [-axis[1], axis[0]] // toward +x when upright
    const torso = (u: number, side: number): Vec => [
      hip[0] + axis[0] * P.torso * u + normal[0] * side,
      hip[1] + axis[1] * P.torso * u + normal[1] * side
    ]
    const neck = torso(1, 0)
    neck[1] += breathe * 0.4
    const head = {
      c: [neck[0] + axis[0] * (P.neck + P.headRy) + 0.9, neck[1] + axis[1] * (P.neck + P.headRy)] as Vec,
      rx: P.headRx,
      ry: P.headRy,
      tilt: lean * 0.6 + drift(t * 0.4) * 0.03
    }
    const shoulder: [Vec, Vec] = [torso(0.9, -1.4), torso(0.88, 1.1)]

    const amp = (run ? 42 : 17) * this.go
    const bendDeg = run ? 62 : 12
    const elbow: Vec[] = [],
      hand: Vec[] = []
    for (const i of [0, 1] as const) {
      const sign = i === 1 ? -1 : 1 // near arm swings against foot 0
      const a = this.armSwing[i].step(sign * pose.swing * amp + drift(t + i * 3) * 1.2, dt) + (lean * 90) / Math.PI
      let e = hang(shoulder[i], P.upperArm, a)
      let h = hang(e, P.forearm, a + bendDeg)
      const r = this.reaches[i]
      const w = clamp(r.weight.step(r.target ? 1 : 0, dt), 0, 1)
      if (w > 0.001) {
        const goal = r.target ?? h
        h = mixPt(h, goal, w)
        e = ik2(shoulder[i], h, P.upperArm, P.forearm, r.bend)
      }
      elbow.push(e)
      hand.push(h)
    }
    return {
      hip,
      neck,
      head,
      shoulder,
      elbow: elbow as [Vec, Vec],
      hand: hand as [Vec, Vec],
      feet: pose.feet,
      front: pose.front,
      bob: pose.bob,
      lean,
      plan: P,
      torso
    }
  }
}

export interface FrameInfo {
  t: number
  dt: number
  wind: number
  /** 0 … 1 walking blend. */
  go: number
  /** Figure units per second the body is moving. */
  speed: number
  /** Change in speed this frame, per second (for things that swing when the carrier stops). */
  accel: number
}

export interface PartContext {
  ink: Ink
  /** This part's own layer; parts stack in the order they are listed. */
  layer: InkNode
  body: Body
}

/** A costume part: build nodes once, return a per-frame drawing function. */
export type Part = (ctx: PartContext) => (sk: Skeleton, f: FrameInfo) => void

export interface FigureOptions {
  plan?: keyof typeof PLANS | Partial<BodyPlan>
  gait?: BipedOptions
  parts: Part[]
  x?: number
  y?: number
  dir?: 1 | -1
  /** Scene units per figure unit. */
  scale?: number
  /** Move across the scene while walking (false = walk on the spot, e.g. a treadmill loop). */
  travel?: boolean
}

export class Figure {
  readonly node: InkNode
  readonly body: Body
  x: number
  y: number
  dir: 1 | -1
  scale: number
  travel: boolean
  skeleton!: Skeleton
  private drawers: Array<(sk: Skeleton, f: FrameInfo) => void>
  private lastSpeed = 0

  constructor(ink: Ink, parent: InkNode, o: FigureOptions) {
    const plan = typeof o.plan === 'string' ? PLANS[o.plan] : { ...PLANS.adult, ...(o.plan ?? {}) }
    this.body = new Body(plan, o.gait)
    this.node = ink.group(parent)
    this.x = o.x ?? 0
    this.y = o.y ?? 0
    this.dir = o.dir ?? 1
    this.scale = o.scale ?? 1
    this.travel = o.travel ?? true
    this.drawers = o.parts.map((part) => part({ ink, layer: ink.group(this.node), body: this.body }))
  }

  /** Stop walking (0) or walk on (1); the change eases over ~0.5 s. */
  walk(on: boolean): void {
    this.body.goal = on ? 1 : 0
  }

  update(t: number, dt: number, env: { wind?: number } = {}): Skeleton {
    const d = this.body.advance(dt)
    if (this.travel) this.x += this.dir * d * this.scale
    const speed = dt > 0 ? d / dt : 0
    const accel = dt > 0 ? (speed - this.lastSpeed) / dt : 0
    this.lastSpeed = speed
    const sk = this.body.skeleton(t, dt)
    this.skeleton = sk
    place(this.node, this.x, this.y, this.dir, this.scale)
    const info: FrameInfo = { t, dt, wind: (env.wind ?? 0) * this.dir, go: this.body.go, speed, accel }
    for (const draw of this.drawers) draw(sk, info)
    return sk
  }

  /** Scene coordinates of a figure-space point (for glows or effects drawn outside the figure). */
  toScene(p: Vec): Vec {
    return [this.x + this.dir * this.scale * p[0], this.y + this.scale * p[1]]
  }
}
