// animal.ts — dogs and cats drawn in open strokes over the quadruped solver:
// a back line and a separate belly line, single-stroke legs ending in ink-dot
// paws, a small head with an ear, a tail on a spring.

import { type Pt, type Vec, add, ellipsePoints, mixPt, rotate } from './geometry.ts'
import { type Ink, PAPER, place } from './ink.ts'
import { drift, spring } from './motion.ts'
import { type QuadGait, type QuadKind, QUAD_PLANS, quadruped } from './quadruped.ts'
import type { InkNode } from './surface.ts'

export interface AnimalOptions {
  species?: 'dog' | 'cat'
  gait?: QuadKind
  /** A flat colour patch on the back (a dog's saddle, a cat's ginger patch). */
  patch?: string
  x?: number
  y?: number
  dir?: 1 | -1
  scale?: number
  travel?: boolean
}

const HEADS = {
  dog: [
    [-3.4, -0.8],
    [-2.6, -3.8],
    [0.6, -4.4],
    [3.2, -3.0],
    [4.6, -1.6],
    [8.6, -0.8],
    [9.0, 1.2],
    [7.8, 2.4],
    [3.0, 2.8],
    [-1.4, 2.8],
    [-3.6, 1.4]
  ],
  cat: [
    [-3.2, -0.6],
    [-2.4, -3.4],
    [0.8, -3.9],
    [3.4, -2.6],
    [5.2, -0.6],
    [5.0, 1.4],
    [2.4, 2.8],
    [-1.4, 2.8],
    [-3.4, 1.2]
  ]
} satisfies Record<string, Pt[]>

export class Animal {
  readonly node: InkNode
  readonly gait: QuadGait
  readonly species: 'dog' | 'cat'
  x: number
  y: number
  dir: 1 | -1
  scale: number
  travel: boolean
  phase = 0
  go = 1
  goal = 1
  private excited = 0
  private tail = spring(30, 4)
  private ear = spring(40, 5)
  private draw: (t: number, dt: number, wind: number) => void

  constructor(ink: Ink, parent: InkNode, o: AnimalOptions = {}) {
    this.species = o.species ?? 'dog'
    this.gait = quadruped({ kind: o.gait ?? 'walk', plan: QUAD_PLANS[this.species] })
    this.node = ink.group(parent)
    this.x = o.x ?? 0
    this.y = o.y ?? 0
    this.dir = o.dir ?? 1
    this.scale = o.scale ?? 1
    this.travel = o.travel ?? true
    const leg = ink.withPen(ink.pen * 1.15)
    const g = this.node
    const farLegs = [leg.line(g), leg.line(g)]
    const farPaws = [ink.blot(g), ink.blot(g)]
    const tailS = leg.line(g)
    const fill = ink.fill(g, PAPER)
    const patch = o.patch ? ink.fill(g, o.patch) : null
    const back = ink.line(g)
    const belly = ink.line(g)
    const chest = ink.line(g)
    const neck = ink.limb(g, this.species === 'dog' ? 6.4 : 5, { taper: 1 })
    const nearLegs = [leg.line(g), leg.line(g)]
    const nearPaws = [ink.blot(g), ink.blot(g)]
    const headS = ink.shape(g)
    const ear = this.species === 'dog' ? ink.blot(g) : ink.shape(g)
    const eye = ink.blot(g)
    const nose = ink.blot(g)

    this.draw = (t, dt, wind) => {
      const p = this.gait.pose(this.phase, this.go)
      const H = p.hip,
        S = p.shoulder
      const cat = this.species === 'cat'
      const k = cat ? 0.75 : 1
      const legPts = (top: Pt, knee: Vec, paw: Vec): Vec[] => [add(top, [0, 1.5 * k]), knee, paw]
      const pawPts = (a: Vec, pitch: number) =>
        ellipsePoints(a[0] + 0.9, a[1] + 0.05, 1.7 * k, 1.05 * k, 10, (pitch * Math.PI) / 180)
      ;[2, 3].forEach((i, j) => {
        const pw = p.paws[i]
        farLegs[j].draw(legPts(i % 2 ? S : H, pw.knee, pw.ankle))
        farPaws[j].draw(pawPts(pw.ankle, pw.pitch))
      })
      ;[0, 1].forEach((i) => {
        const pw = p.paws[i]
        nearLegs[i].draw(legPts(i % 2 ? S : H, pw.knee, pw.ankle))
        nearPaws[i].draw(pawPts(pw.ankle, pw.pitch))
      })

      const mid = mixPt(H, S, 0.5)
      const tailBase: Vec = add(H, [-2.4 * k, -3 * k])
      const rump = add(H, [1 * k, -4.6 * k])
      const midBack = add(mid, [0, -4.1 * k])
      const withers = add(S, [-1.2 * k, -4.9 * k])
      const neckBase = add(S, [2.6 * k, -4.4 * k])
      const throat = add(S, [5.2 * k, 0.4 * k])
      const brisket = add(S, [2.4 * k, 4.2 * k])
      const bellyF = add(S, [-2.4 * k, 3.6 * k])
      const bellyM = add(mid, [0, 4.6 * k])
      const bellyH = add(H, [3.2 * k, 3.0 * k])
      const haunch = add(H, [-1.8 * k, 2.6 * k])
      fill.draw([tailBase, rump, midBack, withers, neckBase, throat, brisket, bellyF, bellyM, bellyH, haunch])
      patch?.draw(
        ellipsePoints(mid[0] + 3 * k, mid[1] - 1.6 * k, 6 * k, 2.4 * k, 14, Math.atan2(S[1] - H[1], S[0] - H[0]))
      )
      back.draw([add(haunch, [0, -1]), tailBase, rump, midBack, withers, neckBase])
      belly.draw([bellyF, bellyM, bellyH])
      chest.draw([throat, brisket, add(bellyF, [1.4, -0.6])])

      // head rides on the forelegs and lifts when excited
      const lift = this.excited > 0 ? 3 : 0
      const hc: Vec = add(S, [(cat ? 7 : 8.6) * k, (-10.5 + p.foreBob * 0.6 - lift) * k + drift(t * 0.7) * 0.25])
      neck.draw([add(S, [2.2 * k, -0.8 * k]), hc], [0.1, 0.2])
      const tilt = -0.05 * lift
      const R = (pts: readonly Pt[], s = k) => pts.map((q) => rotate([hc[0] + q[0] * s, hc[1] + q[1] * s], hc, tilt))
      headS.draw(R(HEADS[this.species]))
      const e = this.ear.step(-p.foreBob * 0.3 + wind * 0.2, dt)
      if (cat)
        ear.draw(
          R([
            [-1.6, -2.6],
            [-0.6, -6.6 + e * 0.2],
            [1.4, -3.4]
          ]),
          { smooth: false }
        )
      else
        ear.draw(
          R([
            [-1.4, -3.6],
            [1.2, -3.8],
            [0.4 + e, 2.6],
            [-1.6 + e * 0.6, 1.8]
          ])
        )
      eye.draw(R(ellipsePoints(2.6, -1.4, 0.55, 0.6, 8)))
      if (cat) nose.draw(R(ellipsePoints(5.0, 0.2, 0.5, 0.45, 8)))
      else nose.draw(R(ellipsePoints(8.6, 0.0, 0.9, 0.75, 8)))

      // tail: a dog wags (faster when excited), a cat's tail curls and sways slowly
      const wagRate = this.excited > 0 ? 13 : 5
      const target = cat ? drift(t * 0.6) * 0.3 : Math.sin(t * wagRate) * (this.excited > 0 ? 0.55 : 0.18)
      const a = this.tail.step(target - wind * 0.1, dt)
      const tl = (cat ? 14 : 11) * k
      if (cat) {
        const p1 = add(tailBase, [-tl * 0.35, -tl * 0.15]),
          p2 = add(tailBase, [-tl * 0.55 + a * 4, -tl * 0.7]),
          p3 = add(tailBase, [-tl * 0.35 + a * 6, -tl * 1.05])
        tailS.draw([tailBase, p1, p2, p3])
      } else {
        const dir: Vec = [Math.cos(-2.3 + a), Math.sin(-2.3 + a)]
        tailS.draw([
          tailBase,
          add(tailBase, [dir[0] * tl * 0.5, dir[1] * tl * 0.5 - 0.6]),
          add(tailBase, [dir[0] * tl + a * 1.5, dir[1] * tl - 0.4])
        ])
      }
    }
  }

  /** A quick reaction: stop, lift the head, wag hard, then walk on. */
  excite(seconds = 2.4): void {
    this.excited = seconds
    this.goal = 0
  }

  update(t: number, dt: number, env: { wind?: number } = {}): void {
    if (this.excited > 0) {
      this.excited -= dt
      if (this.excited <= 0) this.goal = 1
    }
    this.go += (this.goal - this.go) * (1 - Math.exp(-dt * 5))
    this.phase += (dt / this.gait.period) * this.go
    if (this.travel) this.x += this.dir * this.gait.speed * this.go * dt * this.scale
    place(this.node, this.x, this.y, this.dir, this.scale)
    this.draw(t, dt, (env.wind ?? 0) * this.dir)
  }
}
