// clock.ts — one draw(t, dt) loop for live play, manual stepping and frame export.
//
// Live pages throttle requestAnimationFrame in background tabs and headless
// browsers, so checks and captures use `manual`: time only moves when you call
// `step()`, in exact 1/fps increments.

export interface Clock {
  readonly time: number
  /** Advance by `seconds` in exact frames; returns the new time. */
  step(seconds?: number): number
  stop(): void
}

export interface ClockOptions {
  /** No rAF: time moves only through step(). */
  manual?: boolean
  /** Hold a single moment (for checking a pose). */
  freezeAt?: number
  /** Frame rate for manual stepping. */
  fps?: number
}

export function clock(draw: (t: number, dt: number) => void, opts: ClockOptions = {}): Clock {
  const fps = opts.fps ?? 60
  let t = opts.freezeAt ?? 0
  let stopped = false
  const step = (seconds = 1 / fps) => {
    const n = Math.max(1, Math.round(seconds * fps))
    for (let i = 0; i < n; i++) draw((t += 1 / fps), 1 / fps)
    return t
  }
  draw(t, 1 / fps)
  const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!opts.manual && opts.freezeAt === undefined && !reduce && typeof requestAnimationFrame === 'function') {
    let prev = performance.now()
    const tick = (now: number) => {
      if (stopped) return
      const dt = Math.min(0.05, (now - prev) / 1000)
      prev = now
      draw((t += dt), dt)
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }
  return {
    get time() {
      return t
    },
    step,
    stop: () => {
      stopped = true
    }
  }
}
