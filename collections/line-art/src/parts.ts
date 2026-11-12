// parts.ts — costume parts drawn around a Skeleton. Garments are built from the
// solved joints (forward knee, ankles, hands), so cloth opens and closes with
// the stride and props hang where the hands actually are.

import { type Pt, type Vec, ellipsePoints, mixPt, rotate } from './geometry.ts'
import type { ArmSide, Part, Skeleton } from './figure.ts'
import type { BipedFoot } from './gait.ts'
import { pendulum, spring } from './motion.ts'

const DEG = Math.PI / 180

function shoePoints(ankle: Vec, pitch: number, kind: 'shoe' | 'boot'): Vec[] {
  const pts: Vec[] =
    kind === 'boot'
      ? [
          [-2.2, -4.2],
          [1.8, -4.2],
          [2.6, -1.0],
          [5.8, -0.3],
          [6.6, 1.0],
          [5.4, 1.75],
          [-2.0, 1.75],
          [-2.6, 0.2]
        ]
      : [
          [-1.8, -1.1],
          [2.4, -0.9],
          [5.3, -0.2],
          [6.3, 0.9],
          [5.1, 1.75],
          [-1.6, 1.75],
          [-2.4, 0.4]
        ]
  return pts.map((p) => rotate([ankle[0] + p[0], ankle[1] + p[1]], ankle, pitch * DEG))
}

/** Both legs with shoes. The leading leg is always drawn on top. */
export function legs(o: { width?: number; fill?: string; shoe?: 'shoe' | 'boot' | 'none' } = {}): Part {
  const { width = 4.4, fill, shoe = 'shoe' } = o
  return ({ ink, layer, body }) => {
    const k = Math.sqrt(body.plan.thigh / 24.5) // thinner legs on smaller bodies
    const slots = [0, 1].map(() => {
      const g = ink.group(layer)
      return { limb: ink.limb(g, width * k, { fill }), shoe: ink.blot(g) }
    })
    return (sk) => {
      ;[1 - sk.front, sk.front].forEach((fi, slot) => {
        const f = sk.feet[fi]
        slots[slot].limb.draw([sk.hip, f.knee, f.ankle], [0.04, 0.12])
        if (shoe === 'none') slots[slot].shoe.hide()
        else slots[slot].shoe.draw(shoePoints(f.ankle, f.pitch, shoe))
      })
    }
  }
}

/** One arm: list `arm('far')` before the body and `arm('near')` after it. */
export function arm(side: ArmSide, o: { width?: number; fill?: string } = {}): Part {
  const i = side === 'near' ? 1 : 0
  return ({ ink, layer, body }) => {
    const l = ink.limb(layer, o.width ?? 3.8 * Math.sqrt(body.plan.upperArm / 18.5), { fill: o.fill, taper: 0.8 })
    return (sk) => l.draw([sk.shoulder[i], sk.elbow[i], sk.hand[i]], [0.03, 0.1])
  }
}

/** A shirt or blouse from shoulders to waist. */
export function top(o: { colour?: string; untucked?: number } = {}): Part {
  return ({ ink, layer }) => {
    const s = o.colour ? ink.paint(layer, o.colour) : ink.shape(layer)
    const hem = o.untucked ?? 3
    return (sk) => {
      const c = sk.plan.chest
      const P = (u: number, side: number) => sk.torso(u, side)
      const front = P(-hem / sk.plan.torso, c * 0.95)
      const back = P(-hem / sk.plan.torso, -c * 0.95)
      s.draw([
        P(1, -2.6),
        P(1.02, 2.2),
        P(0.78, c * 1.05),
        P(0.35, c * 0.92),
        front,
        back,
        P(0.4, -c),
        P(0.82, -c * 1.02)
      ])
    }
  }
}

/** Where a leg crosses height y, interpolated along thigh or shin. */
function legXAt(sk: Skeleton, f: BipedFoot, y: number): number {
  const seg = (a: Pt, b: Pt) => a[0] + ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1] || 1e-6)
  return y < f.knee[1] ? seg(sk.hip, f.knee) : seg(f.knee, f.ankle)
}

/** An A-line skirt or long dress hem drawn from the legs, so it parts with each step. */
export function skirt(o: { colour?: string; hem?: number } = {}): Part {
  return ({ ink, layer }) => {
    const s = o.colour ? ink.paint(layer, o.colour) : ink.shape(layer)
    const fold = ink.withPen(ink.pen * 0.6).line(layer)
    return (sk) => {
      const hemY = -(o.hem ?? 14)
      const xs = sk.feet.map((f) => legXAt(sk, f, hemY))
      const fwd = Math.max(...xs) + 4.2,
        bwd = Math.min(...xs) - 4.2
      const wf = sk.torso(0.12, sk.plan.chest * 0.85),
        wb = sk.torso(0.12, -sk.plan.chest * 0.9)
      const mid = (fwd + bwd) / 2
      s.draw([
        wb,
        wf,
        [wf[0] + 1.6, (wf[1] + hemY) / 2],
        [fwd, hemY],
        [mid, hemY + 0.8],
        [bwd, hemY],
        [wb[0] - 1.4, (wb[1] + hemY) / 2]
      ])
      const kb = sk.feet[1 - sk.front].knee
      fold.draw([mixPt(wb, wf, 0.45), [kb[0] + 1, kb[1] - 4], [mid - 1, hemY + 0.6]])
    }
  }
}

/** Trousers are just coloured legs; a coat is drawn around the forward knee and opens with the stride. */
export function coat(o: { colour?: string; length?: number } = {}): Part {
  return ({ ink, layer }) => {
    const s = o.colour ? ink.paint(layer, o.colour) : ink.shape(layer)
    const seam = ink.withPen(ink.pen * 0.6).line(layer)
    return (sk) => {
      const c = sk.plan.chest
      const kf = sk.feet[sk.front].knee,
        kb = sk.feet[1 - sk.front].knee
      const hemY = kf[1] + (o.length ?? 3)
      const fx = Math.max(kf[0] + 2.8, sk.hip[0] + c * 0.9),
        bx = Math.min(kb[0] - 2.4, sk.hip[0] - c)
      const T = sk.torso
      s.draw([
        T(1, -2.8),
        T(1.02, 2.4),
        T(0.76, c * 1.08),
        T(0.2, c * 1.0),
        [fx, hemY - 2],
        [fx - 0.4, hemY],
        [bx, hemY + 0.6],
        T(0.15, -c * 1.05),
        T(0.8, -c * 1.05)
      ])
      seam.draw([T(0.96, 2.2), T(0.5, c * 0.55), [fx - 3.5, hemY - 0.6]])
    }
  }
}

export type Hair = 'short' | 'bun' | 'long' | 'none'
export type Hat = 'cap' | 'sunhat' | 'beanie' | 'none'

function arc(c: Pt, rx: number, ry: number, a0: number, a1: number, n = 10): Vec[] {
  const out: Vec[] = []
  for (let i = 0; i <= n; i++) {
    const a = (a0 + ((a1 - a0) * i) / n) * DEG
    out.push([c[0] + Math.cos(a) * rx, c[1] + Math.sin(a) * ry])
  }
  return out
}

/** A faceless head. Character comes from hair and hats. */
export function head(o: { hair?: Hair; hat?: Hat; hatColour?: string } = {}): Part {
  const { hair = 'short', hat = 'none', hatColour } = o
  return ({ ink, layer }) => {
    const longHair = ink.blot(layer)
    const neck = ink.limb(layer, 3.4, { taper: 1 })
    const face = ink.shape(layer)
    const hairCap = ink.blot(layer)
    const bun = ink.blot(layer)
    const crown = hatColour ? ink.paint(layer, hatColour) : ink.shape(layer)
    const brim = hatColour ? ink.paint(layer, hatColour) : ink.shape(layer)
    const sway = spring(30, 5)
    return (sk, f) => {
      const { c, rx, ry, tilt } = sk.head
      const R = (pts: Vec[]) => pts.map((p) => rotate(p, c, tilt))
      neck.draw(
        [
          [sk.neck[0], sk.neck[1] + 1.5],
          [c[0] - 0.6, c[1] + ry * 0.6]
        ],
        [0, 0]
      )
      face.draw(R(ellipsePoints(c[0], c[1], rx, ry, 16)))
      if (hair === 'none') {
        hairCap.hide()
      } else {
        const outer = arc(c, rx * 1.1, ry * 1.07, 150, 372, 12)
        const inner = arc([c[0] - 0.4, c[1] - ry * 0.3], rx * 0.95, ry * 0.62, 372, 165, 8)
        hairCap.draw(R([...outer, ...inner]))
      }
      if (hair === 'bun') bun.draw(R(ellipsePoints(c[0] - rx * 0.95, c[1] - ry * 0.72, 2.3, 2.1, 10)))
      else bun.hide()
      if (hair === 'long') {
        const s = sway.step(-f.speed * 0.04 - f.wind * 1.2, f.dt)
        longHair.draw(
          R([
            [c[0] - rx * 0.6, c[1] - ry * 0.6],
            [c[0] - rx * 1.25, c[1] + ry * 0.4],
            [c[0] - rx * 1.3 + s, c[1] + ry * 2.3],
            [c[0] - rx * 0.2 + s * 0.6, c[1] + ry * 2.0],
            [c[0] - rx * 0.1, c[1] + ry * 0.6]
          ])
        )
      } else longHair.hide()

      if (hat === 'none') {
        crown.hide()
        brim.hide()
        return
      }
      if (hat === 'cap') {
        crown.draw(R(arc([c[0] - 0.2, c[1] - ry * 0.25], rx * 1.12, ry * 0.95, 180, 360, 10)))
        brim.draw(
          R([
            [c[0] + rx * 0.7, c[1] - ry * 0.35],
            [c[0] + rx * 2.1, c[1] - ry * 0.2],
            [c[0] + rx * 2.0, c[1] - ry * 0.05],
            [c[0] + rx * 0.6, c[1] - ry * 0.1]
          ])
        )
      } else if (hat === 'sunhat') {
        crown.draw(R(arc([c[0], c[1] - ry * 0.45], rx * 1.0, ry * 0.95, 180, 360, 10)))
        brim.draw(R(ellipsePoints(c[0] + 0.4, c[1] - ry * 0.42, rx * 2.4, 1.3, 16)))
      } else {
        // beanie: dome plus a rolled band
        crown.draw(R(arc([c[0], c[1] - ry * 0.2], rx * 1.14, ry * 1.15, 180, 360, 10)))
        brim.draw(
          R([
            [c[0] - rx * 1.2, c[1] - ry * 0.1],
            [c[0] + rx * 1.2, c[1] - ry * 0.1],
            [c[0] + rx * 1.15, c[1] - ry * 0.45],
            [c[0] - rx * 1.15, c[1] - ry * 0.45]
          ])
        )
      }
    }
  }
}

/** A scarf whose tail streams back with speed and wind. */
export function scarf(o: { colour?: string } = {}): Part {
  return ({ ink, layer }) => {
    const wrap = o.colour ? ink.paint(layer, o.colour, ink.pen * 0.8) : ink.shape(layer)
    const tail = o.colour ? ink.paint(layer, o.colour, ink.pen * 0.8) : ink.shape(layer)
    const flow = spring(28, 4)
    return (sk, f) => {
      const n = sk.neck
      const fl = flow.step(-4 - f.speed * 0.12 - f.wind * 4 + Math.sin(f.t * 8) * 0.6, f.dt)
      tail.draw([
        [n[0] - 2.5, n[1] - 0.5],
        [n[0] - 3.5 + fl * 0.4, n[1] + 4],
        [n[0] - 2.5 + fl, n[1] + 12 + fl * 0.15],
        [n[0] + fl * 0.9, n[1] + 12.4 + fl * 0.15],
        [n[0] - 0.5 + fl * 0.3, n[1] + 4],
        [n[0] - 0.4, n[1] + 0.6]
      ])
      wrap.draw([
        [n[0] - 4, n[1] - 2.4],
        [n[0] + 3.8, n[1] - 2.2],
        [n[0] + 4.2, n[1] + 1.4],
        [n[0], n[1] + 2.6],
        [n[0] - 4.4, n[1] + 1.2]
      ])
    }
  }
}

/** A bag hanging from one hand on a pendulum: it lags when the carrier starts and swings when they stop. */
export function bag(o: { side?: ArmSide; colour?: string; kind?: 'tote' | 'case' } = {}): Part {
  const i = (o.side ?? 'near') === 'near' ? 1 : 0
  const kind = o.kind ?? 'tote'
  return ({ ink, layer }) => {
    const strap = ink.withPen(ink.pen * 0.75).line(layer)
    const body = o.colour ? ink.paint(layer, o.colour, ink.pen * 0.85) : ink.shape(layer, ink.pen * 0.85)
    const swing = pendulum(14, 1.6)
    return (sk, f) => {
      const h = sk.hand[i]
      const a = swing.step(-f.accel * 0.02 - f.wind * 0.6 + Math.sin(f.t * 2 * Math.PI * 1.85) * 0.5 * f.go, f.dt)
      const R = (p: Vec) => rotate(p, h, -a)
      if (kind === 'tote') {
        const top = h[1] + 7
        strap.draw([R([h[0] - 4, top]), R([h[0] - 1, h[1] + 0.5]), R([h[0] + 1, h[1] + 0.5]), R([h[0] + 4, top])])
        body.draw([R([h[0] - 6, top]), R([h[0] + 6, top]), R([h[0] + 7, top + 12]), R([h[0] - 7, top + 12])], {
          smooth: false
        })
      } else {
        const top = h[1] + 2.4
        strap.draw([R([h[0] - 2.4, top]), R([h[0], h[1] - 0.2]), R([h[0] + 2.4, top])])
        body.draw([R([h[0] - 8, top]), R([h[0] + 8, top]), R([h[0] + 8, top + 10]), R([h[0] - 8, top + 10])], {
          smooth: false
        })
      }
    }
  }
}

/** A box carried in both hands. Reaches the arms to it automatically. */
export function parcel(o: { colour?: string; size?: [number, number]; at?: Vec } = {}): Part {
  const [w, hgt] = o.size ?? [14, 11]
  return ({ ink, layer, body }) => {
    const box = o.colour ? ink.paint(layer, o.colour) : ink.shape(layer)
    const tape = ink.withPen(ink.pen * 0.6).line(layer)
    return (sk) => {
      const base = o.at ?? sk.torso(0.45, sk.plan.chest + w / 2 + 0.5)
      const lift = sk.bob * 0.6
      const c: Vec = [base[0], base[1] + lift]
      body.reach('near', [c[0] + 1.5, c[1] + 1], -1)
      body.reach('far', [c[0] - 2.5, c[1] - 1], -1)
      const x0 = c[0] - w / 2,
        y0 = c[1] - hgt / 2
      box.draw(
        [
          [x0, y0],
          [x0 + w, y0],
          [x0 + w, y0 + hgt],
          [x0, y0 + hgt]
        ],
        { smooth: false }
      )
      tape.draw(
        [
          [x0 + w * 0.5, y0],
          [x0 + w * 0.5, y0 + hgt]
        ],
        { smooth: false }
      )
    }
  }
}
