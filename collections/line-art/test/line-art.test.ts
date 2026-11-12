import { describe, expect, test } from 'bun:test'
import {
  Animal,
  CAST,
  Ink,
  type VNode,
  biped,
  clock,
  headlessSurface,
  ik2,
  limbOutline,
  palette,
  quadruped,
  smoothPath,
  stage,
  toSVG
} from '../src/index.ts'

describe('geometry', () => {
  test('two-bone IK keeps both bone lengths', () => {
    const k = ik2([0, 0], [10, 30], 20, 20, 1)
    expect(Math.hypot(k[0], k[1])).toBeCloseTo(20, 5)
    expect(Math.hypot(10 - k[0], 30 - k[1])).toBeCloseTo(20, 5)
    expect(k[0]).toBeGreaterThan(ik2([0, 0], [10, 30], 20, 20, -1)[0])
  })

  test('limb outline leaves the far end open', () => {
    const o = limbOutline(
      [
        [0, 0],
        [2, 20],
        [0, 40]
      ],
      4,
      1.4
    )
    expect(o.left.length).toBeLessThan(15)
    expect(o.right.length).toBeLessThan(o.left.length)
    expect(o.body.length).toBe(30)
  })

  test('smooth paths use cubic segments through every point', () => {
    const d = smoothPath([
      [0, 0],
      [10, 5],
      [20, 0],
      [30, 5]
    ])
    expect(d.startsWith('M0 0')).toBe(true)
    expect(d.match(/C/g)?.length).toBe(3)
    expect(d.endsWith('30 5')).toBe(true)
  })
})

describe('biped gait', () => {
  for (const kind of ['walk', 'stroll', 'run'] as const) {
    test(`${kind}: a planted foot does not slide when the body moves at gait.speed`, () => {
      const g = biped({ kind })
      const dt = 1 / 240
      let world: number | null = null
      for (let t = 0; t < g.period * g.duty * 0.7; t += dt) {
        const foot = g.pose(t / g.period).feet[0]
        expect(foot.stance).toBe(true)
        const x = foot.ankle[0] + g.speed * t
        if (world === null) world = x
        expect(x).toBeCloseTo(world, 6)
      }
    })
  }

  test('walk: hip is highest as the legs pass and lowest at double support', () => {
    const g = biped({ kind: 'walk' })
    const ys = Array.from({ length: 100 }, (_, i) => g.pose(i / 100).hip[1])
    const passing = g.pose(g.duty / 2).hip[1] // foot 0 under the hip
    const doubleSupport = g.pose(0).hip[1] // both feet planted, apart
    expect(passing).toBeCloseTo(Math.min(...ys), 1)
    expect(doubleSupport).toBeGreaterThan(passing + 0.5)
  })

  test('go = 0 stands both feet on the ground', () => {
    const p = biped().pose(0.3, 0)
    for (const f of p.feet) expect(f.ankle[1]).toBeCloseTo(-1.7, 6)
  })
})

describe('quadruped gait', () => {
  test('every paw stays planted while the body moves at gait.speed', () => {
    for (const kind of ['walk', 'trot'] as const) {
      const g = quadruped({ kind })
      const offsets = kind === 'walk' ? [0, 0.25, 0.5, 0.75] : [0, 0.5, 0.5, 0]
      offsets.forEach((o, i) => {
        // start each paw at touchdown
        const start = ((1 - o) % 1) * g.period
        let world: number | null = null
        for (let t = start; t < start + g.period * g.shape.duty * 0.7; t += 1 / 240) {
          const paw = g.pose(t / g.period).paws[i]
          expect(paw.stance).toBe(true)
          const x = paw.ankle[0] + g.speed * t
          if (world === null) world = x
          expect(x).toBeCloseTo(world, 6)
        }
      })
    }
  })

  test('trot moves diagonal pairs together', () => {
    const p = quadruped({ kind: 'trot' }).pose(0.37)
    expect(p.paws[0].ankle[0]).toBeCloseTo(p.paws[3].ankle[0] - 30, 6)
    expect(p.paws[1].ankle[0] - 30).toBeCloseTo(p.paws[2].ankle[0], 6)
  })
})

describe('ink and boil', () => {
  const draw = (frameTime: number, boil: number) => {
    const ink = new Ink(headlessSurface(), { boil, rough: 0.2, seed: 4 })
    const root = headlessSurface().create('g')
    const s = ink.line(root)
    ink.tick(frameTime)
    s.draw([
      [0, 0],
      [10, 0],
      [20, 0],
      [30, 0]
    ])
    return s.node.get('d')
  }

  test('the same frame always inks the same line', () => {
    expect(draw(0.31, 0.3)).toBe(draw(0.31, 0.3))
  })
  test('a new boil frame re-inks the line', () => {
    expect(draw(0.05, 0.3)).not.toBe(draw(0.25, 0.3))
  })
  test('boil off keeps the line still across frames', () => {
    expect(draw(0.05, 0)).toBe(draw(0.95, 0))
  })
  test('kept strokes re-ink on tick', () => {
    const ink = new Ink(headlessSurface(), { boil: 0.3 })
    const s = ink
      .line(headlessSurface().create('g'))
      .draw([
        [0, 0],
        [5, 5],
        [10, 0]
      ])
      .keep()
    const before = s.node.get('d')
    ink.tick(1)
    expect(s.node.get('d')).not.toBe(before)
  })
})

describe('figures, animals and export', () => {
  function scene() {
    const st = stage(headlessSurface(), { width: 400, height: 200 })
    const figs = Object.values(CAST).map((make, i) => make(st.ink, st.svg, { x: 40 + i * 70, y: 180, scale: 1 }))
    const dog = new Animal(st.ink, st.svg, { x: 360, y: 180, gait: 'trot' })
    const cat = new Animal(st.ink, st.svg, { species: 'cat', x: 300, y: 180 })
    for (let t = 0; t < 1; t += 1 / 60) {
      st.ink.tick(t)
      for (const f of figs) f.update(t, 1 / 60, { wind: 0.5 })
      dog.update(t, 1 / 60)
      cat.update(t, 1 / 60)
    }
    return { st, figs }
  }

  test('a walking figure travels at gait.speed × scale', () => {
    const { figs } = scene()
    const f = figs[0]
    // one second of walking from x = 40 (go starts at 1)
    expect(f.x - 40).toBeCloseTo(f.body.gait.speed, 0)
  })

  test('every drawn path is finite', () => {
    const svg = toSVG(scene().st.svg as VNode)
    expect(svg).not.toContain('NaN')
    expect(svg).not.toContain('Infinity')
  })

  test('export bakes ink and paper and needs no stylesheet', () => {
    const svg = toSVG(scene().st.svg as VNode, { ink: '#112233', paper: '#ffeedd', width: 800 })
    expect(svg.startsWith('<svg')).toBe(true)
    expect(svg).toContain('width="800" height="400"')
    expect(svg).not.toContain('currentColor')
    expect(svg).not.toContain('<style')
    expect(svg).not.toContain('class="pp"')
    expect(svg).toContain('stroke="#112233"')
    expect(svg).toContain('fill="#ffeedd"')
  })
})

describe('palette', () => {
  test('dark ink by day, pale ink by night', () => {
    const noon = palette(0.5),
      night = palette(0.95)
    expect(noon.inkT).toBe(0)
    expect(night.inkT).toBe(1)
    expect(noon.lamp).toBe(0)
    expect(night.lamp).toBe(1)
  })
})

describe('clock', () => {
  test('manual clocks step in exact frames', () => {
    const seen: number[] = []
    const c = clock((t) => seen.push(t), { manual: true, fps: 60 })
    c.step(0.5)
    expect(seen.length).toBe(31)
    expect(c.time).toBeCloseTo(0.5, 9)
  })
})
