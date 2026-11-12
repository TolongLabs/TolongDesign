// motion.ts — the small physics that make drawings feel alive without looking procedural.

export const clamp = (x: number, a: number, b: number): number => Math.max(a, Math.min(b, x))
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t
export const wrap01 = (u: number): number => ((u % 1) + 1) % 1
export const smoothstep = (e0: number, e1: number, x: number): number => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1)
  return t * t * (3 - 2 * t)
}
export const ease = (t: number): number => smoothstep(0, 1, t)
export const easeOut = (t: number): number => 1 - Math.pow(1 - clamp(t, 0, 1), 3)
/** Minimum-jerk profile: how a hand or foot travels from rest to rest. */
export const minJerk = (s: number): number => s * s * s * (10 - 15 * s + 6 * s * s)
/** A bump 0 → 1 → 0 over s ∈ [0,1], flat at both ends (foot lift, a hop). */
export const bump = (s: number): number => 16 * s * s * (1 - s) * (1 - s)

/** Seeded RNG (mulberry32), so a static scene draws the same way on every load and every export. */
export function rng(seed = 7) {
  let a = seed >>> 0
  const next = (): number => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  return {
    next,
    range: (lo: number, hi: number): number => lo + next() * (hi - lo),
    pick: <T>(arr: readonly T[]): T => arr[Math.floor(next() * arr.length)]
  }
}
export type Rng = ReturnType<typeof rng>

/** Layered incommensurate sines: idle drift that never visibly loops. */
export const drift = (t: number, k = 1): number =>
  Math.sin(t * 1.17 * k) * 0.55 + Math.sin(t * 2.31 * k + 1.3) * 0.3 + Math.sin(t * 4.73 * k + 3.9) * 0.15

export interface Spring {
  value: number
  velocity: number
  step(target: number, dt: number): number
  kick(v: number): void
}

/**
 * Damped spring toward a moving target. Use for anything attached to a moving
 * body: arms swinging against the legs, sleeves, a scarf tail, an ear.
 * Sub-steps keep it stable when a frame is long.
 */
export function spring(stiffness = 50, damping = 8, value = 0): Spring {
  return {
    value,
    velocity: 0,
    step(target, dt) {
      const n = Math.max(1, Math.ceil(dt / (1 / 120)))
      const h = dt / n
      for (let i = 0; i < n; i++) {
        this.velocity += (stiffness * (target - this.value) - damping * this.velocity) * h
        this.value += this.velocity * h
      }
      return this.value
    },
    kick(v) {
      this.velocity += v
    }
  }
}

export interface Pendulum {
  angle: number
  velocity: number
  step(force: number, dt: number): number
  kick(v: number): void
}

/** Pendulum (radians) for hanging things: bags, lanterns, signs, a dog lead. `force` is this frame's push. */
export function pendulum(stiffness = 12, damping = 1.4, angle = 0): Pendulum {
  return {
    angle,
    velocity: 0,
    step(force, dt) {
      const n = Math.max(1, Math.ceil(dt / (1 / 120)))
      const h = dt / n
      for (let i = 0; i < n; i++) {
        this.velocity += (-stiffness * Math.sin(this.angle) + force - damping * this.velocity) * h
        this.angle += this.velocity * h
      }
      return this.angle
    },
    kick(v) {
      this.velocity += v
    }
  }
}

export interface Wind {
  /** Roughly -2.5 … 2.5; positive blows toward +x. */
  value: number
  step(t: number, dt: number): number
  /** Add a gust (pointer swipes, a passing bus). */
  gust(v: number): void
}

/** A slow breeze plus gusts that decay back to it. Bind it to a pointer with `bindPointerWind()`. */
export function wind(base = 0.25): Wind {
  let aim = base
  const w: Wind = {
    value: base,
    step(t, dt) {
      const breeze = base + 0.22 * Math.sin(t * 0.19) + 0.12 * Math.sin(t * 0.61 + 2)
      aim = lerp(aim, breeze, 1 - Math.exp(-dt * 0.8))
      w.value = lerp(w.value, aim, 1 - Math.exp(-dt * 3))
      return w.value
    },
    gust(v) {
      aim = clamp(aim + v, -2.5, 2.5)
    }
  }
  return w
}

/** Pointer movement over `target` gusts the wind (live pages only). Returns an unbind function. */
export function bindPointerWind(w: Wind, target: EventTarget): () => void {
  let lastX: number | null = null,
    lastT = 0
  const onMove = (e: Event) => {
    const { clientX, timeStamp } = e as PointerEvent
    if (lastX !== null) w.gust(((clientX - lastX) / Math.max(8, timeStamp - lastT)) * 0.7)
    lastX = clientX
    lastT = timeStamp
  }
  target.addEventListener('pointermove', onMove)
  return () => target.removeEventListener('pointermove', onMove)
}

/** Keyed values over time with smooth (monotone-safe) interpolation. Loops when `period` is given. */
export function keys(
  points: ReadonlyArray<readonly [time: number, value: number]>,
  period?: number
): (t: number) => number {
  const k = [...points].sort((a, b) => a[0] - b[0])
  return (t) => {
    if (period) t = ((t % period) + period) % period
    if (t <= k[0][0]) return k[0][1]
    for (let i = 0; i < k.length - 1; i++) {
      const [t0, v0] = k[i],
        [t1, v1] = k[i + 1]
      if (t <= t1) return lerp(v0, v1, ease((t - t0) / (t1 - t0)))
    }
    if (period) {
      const [t0, v0] = k[k.length - 1]
      return lerp(v0, k[0][1], ease((t - t0) / (period - t0 + k[0][0])))
    }
    return k[k.length - 1][1]
  }
}

export interface Beat {
  name: string
  /** 0 → 1 progress through this beat. */
  u: number
  /** Name of the beat before it (for blending poses). */
  from: string
}

/** A timed run of named beats for an interaction (stop → wave → resume). Returns null once it is over. */
export function beats(steps: ReadonlyArray<readonly [name: string, seconds: number]>): (t: number) => Beat | null {
  return (t) => {
    if (t < 0) return null
    let acc = 0,
      prev = steps[0][0]
    for (const [name, d] of steps) {
      if (t < acc + d) return { name, u: (t - acc) / d, from: prev }
      acc += d
      prev = name
    }
    return null
  }
}
