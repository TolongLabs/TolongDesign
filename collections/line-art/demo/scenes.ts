// scenes.ts — demo scenes built only from the public library. Each takes a
// Surface, so the same code runs live in the browser (demo/main.ts) and
// headless in Bun to render the preview GIFs (scripts/previews.ts).

import {
  type Figure,
  type Ink,
  type InkNode,
  type Pt,
  type Surface,
  type Stroke,
  type Vec,
  Animal,
  CAST,
  PEN,
  applyPalette,
  bindPointerWind,
  drift,
  ellipsePoints,
  hexToRGB,
  mixRGB,
  nightTint,
  palette,
  rgb,
  rng,
  stage,
  wind
} from '../src/index.ts'

export const STREET = { W: 960, H: 420 } as const
const FLOOR = 334 // five-foot way and house base
const KERB = 354
const LANES = { back: 343, front: 350 } as const
const FS = 0.68 // figure scale: adults ≈ 65 px
const WARM = hexToRGB('#ffd27a')

interface Lit {
  pane: Stroke
  glow: InkNode
  at: number
  off: number
  forced: boolean | null
}

export interface StreetOptions {
  mount?: Element
  /** Starting time of day (0 midnight, 0.5 noon). */
  tau?: number
  /** Seconds for a full day; 0 pins the time. */
  day?: number
  seed?: number
  boil?: number
}

export function street(surface: Surface, o: StreetOptions = {}) {
  const { W, H } = STREET
  const st = stage(surface, {
    width: W,
    height: H,
    mount: o.mount,
    pen: PEN * FS,
    boil: o.boil ?? 0.28,
    rough: 0.22,
    label: 'An ink drawing of a shophouse street with passers-by, from day to night.'
  })
  const { ink, svg, defs } = st
  const R = rng(o.seed ?? 11)
  const detail = ink.derive({ pen: ink.pen * 0.55 })
  const figInk = ink.derive({ pen: PEN, amp: 1 / FS })
  const live = surface.live

  // ---------------------------------------------------------------- defs
  const sky = surface.create('linearGradient', { id: 'sky', x1: 0, y1: 0, x2: 0, y2: 1 }, defs)
  const skyTop = surface.create('stop', { offset: 0 }, sky)
  const skyBottom = surface.create('stop', { offset: 0.75 }, sky)
  const warm = surface.create('radialGradient', { id: 'warm' }, defs)
  surface.create('stop', { offset: 0, 'stop-color': '#ffd27a', 'stop-opacity': 0.75 }, warm)
  surface.create('stop', { offset: 1, 'stop-color': '#ffd27a', 'stop-opacity': 0 }, warm)

  const layer = (attrs = {}) => ink.group(svg, attrs)
  const skyL = layer()
  surface.create('rect', { width: W, height: H, fill: 'url(#sky)' }, skyL)
  const celestial = layer()
  const housesL = layer()
  const streetL = layer()
  const backLane = layer()
  const frontLane = layer()
  const foreL = layer()
  const glowL = layer({ style: 'pointer-events:none' })

  // ---------------------------------------------------------------- sky
  const stars = Array.from({ length: 34 }, () => {
    const x = R.range(10, W - 10),
      y = R.range(8, 120),
      r = R.range(0.5, 1.2)
    const s = ink
      .blot(celestial)
      .draw(ellipsePoints(x, y, r, r, 6))
      .keep()
    return { node: s.node, phase: R.range(0, 6) }
  })
  const sun = ink.paint(celestial, '#f6d98a')
  const moon = ink.fill(celestial, '#f3ead2')
  const moonBite = ink.fill(celestial, '#10142a')
  const clouds = [0, 1, 2].map((i) => ({
    s: ink.line(celestial),
    x: 120 + i * 330 + R.range(-40, 40),
    y: 40 + R.range(0, 35),
    w: R.range(60, 90)
  }))

  // ---------------------------------------------------------------- houses
  const lights: Lit[] = []
  const tinted: Array<{ s: Stroke; colour: string }> = []
  const light = (parent: InkNode, pane: Pt[], c: Vec, r: number, at: number, off: number) => {
    const p = ink.fill(parent, '#000').draw(pane, { smooth: false })
    const glow = surface.create('circle', { cx: c[0], cy: c[1], r, fill: 'url(#warm)', opacity: 0 }, glowL)
    const l: Lit = { pane: p, glow, at, off, forced: null }
    lights.push(l)
    return l
  }
  const rect = (x: number, y: number, w: number, h: number): Vec[] => [
    [x, y],
    [x + w, y],
    [x + w, y + h],
    [x, y + h]
  ]

  function shophouse(x0: number, w: number, sign: string, accent: string, seed: number) {
    const g = ink.group(housesL)
    const eave = 118,
      ridge = 98
    // roof with converging tile channels and a scalloped eave
    ink
      .shape(g)
      .draw(
        [
          [x0 - 7, eave],
          [x0 + w + 7, eave],
          [x0 + w - 12, ridge],
          [x0 + 12, ridge]
        ],
        { smooth: false }
      )
      .keep()
    for (let x = x0; x <= x0 + w; x += 7) {
      const top = x0 + 12 + ((x - x0) / w) * (w - 24)
      detail
        .line(g)
        .draw(
          [
            [x, eave - 1],
            [top, ridge + 1]
          ],
          { smooth: false }
        )
        .keep()
    }
    const scallop: Vec[] = []
    for (let x = x0 - 6, i = 0; x <= x0 + w + 6; x += 3.5, i++) scallop.push([x, eave + (i % 2 ? 2.6 : 0.4)])
    ink.line(g).draw(scallop).keep()
    // façade
    ink
      .shape(g)
      .draw(rect(x0, eave + 3, w, FLOOR - eave - 3), { smooth: false })
      .keep()
    detail
      .line(g)
      .draw(
        [
          [x0 + 7, eave + 3],
          [x0 + 7, FLOOR]
        ],
        { smooth: false }
      )
      .keep()
    detail
      .line(g)
      .draw(
        [
          [x0 + w - 7, eave + 3],
          [x0 + w - 7, FLOOR]
        ],
        { smooth: false }
      )
      .keep()
    // upper windows: arched, with open louvred shutters
    const n = 3,
      ww = 40,
      wh = 64,
      wy = 140
    for (let i = 0; i < n; i++) {
      const cx = x0 + ((i + 0.5) * w) / n
      const arch: Vec[] = [
        [cx - ww / 2, wy + wh],
        [cx - ww / 2, wy + 12]
      ]
      for (let k = 0; k <= 8; k++) {
        const a = Math.PI + (k / 8) * Math.PI
        arch.push([cx + Math.cos(a) * (ww / 2), wy + 12 + Math.sin(a) * 12])
      }
      arch.push([cx + ww / 2, wy + wh])
      light(g, arch, [cx, wy + wh / 2], 46, 0.35 + ((i + seed) % 3) * 0.12, 0.08 + ((i * 7 + seed) % 5) * 0.03)
      ink.line(g).draw(arch, { closed: true, smooth: false }).keep()
      detail
        .line(g)
        .draw(
          [
            [cx, wy + 2],
            [cx, wy + wh]
          ],
          { smooth: false }
        )
        .keep()
      detail
        .line(g)
        .draw(
          [
            [cx - ww / 2, wy + 30],
            [cx + ww / 2, wy + 30]
          ],
          { smooth: false }
        )
        .keep()
      for (const side of [-1, 1]) {
        const sx = side < 0 ? cx - ww / 2 - 16 : cx + ww / 2 + 2
        const shutter = ink
          .paint(g, accent)
          .draw(rect(sx, wy + 6, 14, wh - 6), { smooth: false })
          .keep()
        tinted.push({ s: shutter, colour: accent })
        for (let y = wy + 12; y < wy + wh - 2; y += 5)
          detail
            .line(g)
            .draw(
              [
                [sx + 2, y],
                [sx + 12, y + 1.5]
              ],
              { smooth: false }
            )
            .keep()
      }
      ink
        .line(g)
        .draw(
          [
            [cx - ww / 2 - 18, wy + wh + 3],
            [cx + ww / 2 + 18, wy + wh + 3]
          ],
          { smooth: false }
        )
        .keep()
    }
    // signboard
    const board = ink
      .paint(g, accent)
      .draw(rect(x0 + 18, 228, w - 36, 22), { smooth: false })
      .keep()
    tinted.push({ s: board, colour: accent })
    const label = surface.create(
      'text',
      {
        x: x0 + w / 2,
        y: 244,
        'text-anchor': 'middle',
        fill: 'currentColor',
        'font-family': 'Georgia, serif',
        'font-size': 13,
        'letter-spacing': 3
      },
      g
    )
    label.text(sign)
    // five-foot way: pillars and arches, a lamp in each bay
    const bays = 3,
      bw = w / bays
    for (let b = 0; b < bays; b++) {
      const bx = x0 + b * bw
      ink
        .shape(g)
        .draw(rect(bx + 2, 262, 9, FLOOR - 262), { smooth: false })
        .keep()
      const arch: Vec[] = [
        [bx + 11, FLOOR],
        [bx + 11, 280]
      ]
      for (let k = 0; k <= 8; k++) {
        const a = Math.PI + (k / 8) * Math.PI
        arch.push([bx + bw / 2 + 5.5 + Math.cos(a) * (bw / 2 - 5.5), 280 + Math.sin(a) * 14])
      }
      arch.push([bx + bw - 2, FLOOR])
      ink.line(g).draw(arch).keep()
      for (let k = 0; k < 4; k++)
        detail
          .line(g)
          .draw([
            [bx + 16 + k * 3, 272 + k * 2],
            [bx + bw - 8 - k * 3, 272 + k * 2]
          ])
          .keep()
      const lx = bx + bw / 2 + 5
      detail
        .line(g)
        .draw(
          [
            [lx, 266],
            [lx, 286]
          ],
          { smooth: false }
        )
        .keep()
      ink
        .blot(g)
        .draw([
          [lx - 4, 290],
          [lx + 4, 290],
          [lx + 2, 285],
          [lx - 2, 285]
        ])
        .keep()
      light(g, ellipsePoints(lx, 292, 2.4, 1.6, 8), [lx, 296], 34, 0.25 + ((b + seed) % 2) * 0.1, 0.04)
      // what's in the bay
      if ((b + seed) % 3 === 0) {
        ink
          .shape(g)
          .draw(rect(bx + 22, 306, bw - 34, 28), { smooth: false })
          .keep() // counter
        for (let j = 0; j < 4; j++)
          ink
            .shape(g)
            .draw(ellipsePoints(bx + 30 + j * 12, 300, 3.6, 5, 10))
            .keep() // jars
      } else if ((b + seed) % 3 === 1) {
        for (let j = 0; j < 5; j++)
          detail
            .line(g)
            .draw(
              [
                [bx + 20 + j * 9, 298],
                [bx + 20 + j * 9, FLOOR]
              ],
              { smooth: false }
            )
            .keep() // folding door
        ink
          .line(g)
          .draw(rect(bx + 18, 296, 38, FLOOR - 296), { smooth: false, closed: true })
          .keep()
      } else {
        ink
          .shape(g)
          .draw(rect(bx + 24, 314, 30, 4), { smooth: false })
          .keep() // table
        detail
          .line(g)
          .draw(
            [
              [bx + 28, 318],
              [bx + 27, FLOOR]
            ],
            { smooth: false }
          )
          .keep()
        detail
          .line(g)
          .draw(
            [
              [bx + 50, 318],
              [bx + 51, FLOOR]
            ],
            { smooth: false }
          )
          .keep()
        for (const sx of [bx + 18, bx + 58])
          ink
            .shape(g)
            .draw(ellipsePoints(sx, 322, 4, 1.6, 10))
            .keep()
      }
    }
  }
  shophouse(24, 300, 'KEDAI KOPI', '#4f7f74', 0)
  shophouse(324, 300, 'KEDAI BUKU', '#b4573d', 1)

  // a narrow lane and a back wall with a tree behind it
  ink
    .shape(housesL)
    .draw(rect(624, 204, 70, FLOOR - 204), { smooth: false })
    .keep()
  for (let y = 214; y < FLOOR; y += 12)
    detail
      .line(housesL)
      .draw(
        [
          [628, y],
          [690, y]
        ],
        { smooth: false }
      )
      .keep()

  // ---------------------------------------------------------------- street
  ink
    .line(streetL)
    .draw(
      [
        [0, FLOOR],
        [W, FLOOR]
      ],
      { smooth: false }
    )
    .keep()
  ink
    .line(streetL)
    .draw(
      [
        [0, KERB],
        [W, KERB]
      ],
      { smooth: false }
    )
    .keep()
  ink
    .line(streetL)
    .draw(
      [
        [0, KERB + 4],
        [W, KERB + 4]
      ],
      { smooth: false }
    )
    .keep()
  for (let x = 6; x < W; x += 26)
    detail
      .line(streetL)
      .draw(
        [
          [x, FLOOR + 1],
          [x - 6, KERB - 1]
        ],
        { smooth: false }
      )
      .keep()
  for (let x = 20; x < W; x += 70)
    detail
      .line(streetL)
      .draw(
        [
          [x, 392],
          [x + 34, 392]
        ],
        { smooth: false }
      )
      .keep()
  // a parked bicycle
  const bike = ink.group(streetL)
  for (const wx of [566, 602])
    ink
      .line(bike)
      .draw(ellipsePoints(wx, FLOOR - 12, 12, 12, 16), { closed: true })
      .keep()
  ink
    .line(bike)
    .draw(
      [
        [566, FLOOR - 12],
        [580, FLOOR - 28],
        [598, FLOOR - 28],
        [602, FLOOR - 12],
        [584, FLOOR - 12],
        [566, FLOOR - 12]
      ],
      { smooth: false }
    )
    .keep()
  ink
    .line(bike)
    .draw(
      [
        [584, FLOOR - 12],
        [578, FLOOR - 32],
        [572, FLOOR - 33],
        [584, FLOOR - 33]
      ],
      { smooth: false }
    )
    .keep()
  ink
    .line(bike)
    .draw(
      [
        [598, FLOOR - 28],
        [596, FLOOR - 36],
        [602, FLOOR - 38]
      ],
      { smooth: false }
    )
    .keep()
  ink
    .paint(bike, '#d9b38c')
    .draw(rect(590, FLOOR - 36, 14, 8), { smooth: false })
    .keep()

  // potted plants by the pillars
  for (const px of [36, 316, 708]) {
    ink
      .shape(streetL)
      .draw(
        [
          [px - 7, FLOOR - 12],
          [px + 7, FLOOR - 12],
          [px + 5, FLOOR],
          [px - 5, FLOOR]
        ],
        { smooth: false }
      )
      .keep()
    for (let k = 0; k < 6; k++) {
      const a = -Math.PI / 2 + (k - 2.5) * 0.32
      ink
        .line(streetL)
        .draw([
          [px, FLOOR - 12],
          [px + Math.cos(a) * 9, FLOOR - 12 + Math.sin(a) * 14],
          [px + Math.cos(a) * 14, FLOOR - 12 + Math.sin(a) * 18]
        ])
        .keep()
    }
  }

  // ---------------------------------------------------------------- tree and lamp (foreground)
  const tree = ink.group(foreL)
  ink
    .line(tree)
    .draw([
      [842, KERB],
      [846, 290],
      [840, 236],
      [826, 200]
    ])
    .keep()
  ink
    .line(tree)
    .draw([
      [858, KERB],
      [854, 290],
      [860, 240],
      [880, 206]
    ])
    .keep()
  ink
    .line(tree)
    .draw([
      [846, 262],
      [866, 232]
    ])
    .keep()
  const canopy = [
    [826, 190, 34, 24],
    [878, 182, 40, 28],
    [850, 158, 46, 30],
    [904, 214, 28, 20],
    [806, 222, 24, 16]
  ].map(([x, y, rx, ry], i) => ({ s: ink.shape(tree), x, y, rx, ry, k: i }))

  const lampX = 744
  ink
    .shape(foreL)
    .draw(
      [
        [lampX - 2.5, KERB],
        [lampX - 1.5, 186],
        [lampX + 1.5, 186],
        [lampX + 2.5, KERB]
      ],
      { smooth: false }
    )
    .keep()
  ink
    .line(foreL)
    .draw([
      [lampX, 190],
      [lampX + 6, 178],
      [lampX + 20, 176]
    ])
    .keep()
  ink
    .shape(foreL)
    .draw(
      [
        [lampX + 14, 176],
        [lampX + 28, 176],
        [lampX + 25, 186],
        [lampX + 17, 186]
      ],
      { smooth: false }
    )
    .keep()
  const lampPane = ink.fill(foreL, '#000').draw(ellipsePoints(lampX + 21, 187.5, 4, 1.6, 8))
  const lamp: Lit = {
    pane: lampPane,
    glow: surface.create('circle', { cx: lampX + 21, cy: 200, r: 90, fill: 'url(#warm)', opacity: 0 }, glowL),
    at: 0.15,
    off: 0,
    forced: null
  }
  lights.push(lamp)

  // ---------------------------------------------------------------- people and a dog
  const breeze = wind(0.3)
  if (live && svg.dom) bindPointerWind(breeze, svg.dom)
  const kinds = Object.keys(CAST) as Array<keyof typeof CAST>
  interface Walker {
    fig: Figure
    wave: number
  }
  const walkers: Walker[] = []
  const spawn = (x?: number, dir?: 1 | -1, kind?: keyof typeof CAST, lane?: keyof typeof LANES) => {
    const d = dir ?? (R.next() < 0.5 ? 1 : -1)
    const ln = lane ?? (R.next() < 0.5 ? 'back' : 'front')
    const k = kind ?? R.pick(kinds)
    const fig = CAST[k](figInk, ln === 'back' ? backLane : frontLane, {
      x: x ?? (d > 0 ? -40 : W + 40),
      y: LANES[ln],
      dir: d,
      scale: ln === 'back' ? FS * 0.96 : FS
    })
    const w: Walker = { fig, wave: -1 }
    if (live && fig.node.dom) {
      fig.node.set('style', 'cursor:pointer')
      fig.node.dom.addEventListener('pointerdown', () => {
        if (w.wave < 0) w.wave = 0
      })
    }
    walkers.push(w)
  }
  spawn(140, 1, 'shopper', 'front')
  spawn(520, -1, 'commuter', 'back')
  spawn(330, 1, 'courier', 'back')
  let nextSpawn = 3

  const dog = new Animal(figInk, frontLane, { x: 240, y: LANES.front + 1, dir: 1, scale: FS, patch: '#b9875a' })
  if (live && dog.node.dom) {
    dog.node.set('style', 'cursor:pointer')
    dog.node.dom.addEventListener('pointerdown', () => dog.excite())
  }
  if (live)
    for (const l of lights)
      if (l.pane.node.dom) {
        l.pane.node.set('style', 'cursor:pointer')
        l.pane.node.dom.addEventListener('pointerdown', () => (l.forced = l.forced === null ? !(lit(l) > 0.5) : null))
      }

  // ---------------------------------------------------------------- time
  let tau = o.tau ?? 0.66
  const day = o.day ?? 180
  let P = palette(tau)
  function lit(l: Lit): number {
    if (l.forced !== null) return l.forced ? 1 : 0
    const on = Math.max(0, Math.min(1, (P.lamp - l.at) / 0.12))
    // some lights go out late at night (τ near 0.05–0.2)
    const late = tau > 0.02 && tau < 0.24 && l.off > 0 && tau > l.off ? 0 : 1
    return on * late
  }

  function update(t: number, dt: number) {
    if (day > 0) tau = (tau + dt / day) % 1
    P = palette(tau)
    ink.tick(t)
    breeze.step(t, dt)
    applyPalette(svg, P)
    skyTop.set('stop-color', rgb(P.top))
    skyBottom.set('stop-color', rgb(P.bottom))

    // sun by day, moon by night, both on an arc
    const u = (tau - 0.25) / 0.5
    if (u > -0.05 && u < 1.05) {
      const x = 60 + u * (W - 120),
        y = 92 - Math.sin(Math.PI * Math.max(0, Math.min(1, u))) * 62
      sun.draw(ellipsePoints(x, y, 13, 13, 16))
    } else sun.hide()
    const mu = (((tau + 0.25) % 1) - 0.0) / 0.5
    if (mu > 0 && mu < 1 && P.night > 0.05) {
      const x = 60 + mu * (W - 120),
        y = 88 - Math.sin(Math.PI * mu) * 56
      moon.draw(ellipsePoints(x, y, 10, 10, 16))
      moonBite.node.set('fill', rgb(P.top))
      moonBite.draw(ellipsePoints(x + 4.5, y - 2.5, 9, 9, 16))
    } else {
      moon.hide()
      moonBite.hide()
    }
    for (const s of stars)
      s.node.set('opacity', Math.max(0, P.night * (0.55 + 0.45 * Math.sin(t * 2 + s.phase))).toFixed(2))
    for (const c of clouds) {
      c.x += (6 + breeze.value * 10) * dt
      if (c.x > W + 120) c.x = -120
      if (c.x < -140) c.x = W + 100
      const pts: Vec[] = []
      for (let i = 0; i <= 10; i++) {
        const xx = c.x - c.w / 2 + (c.w * i) / 10
        pts.push([xx, c.y - Math.abs(Math.sin((i / 10) * Math.PI * 3)) * 7 - Math.sin((i / 10) * Math.PI) * 6])
      }
      c.s.draw(pts)
      c.s.node.set('opacity', (1 - P.night).toFixed(2))
    }

    for (const l of lights) {
      const v = lit(l)
      l.pane.node.set('fill', rgb(mixRGB(P.paper, WARM, v * 0.85)))
      l.glow.set('opacity', (v * 0.9).toFixed(2))
    }
    for (const { s, colour } of tinted) s.node.set('fill', nightTint(colour, P))

    for (const c of canopy) {
      const sway = breeze.value * 2.2 + drift(t * 0.8 + c.k) * 1.2
      const pts: Vec[] = []
      for (let i = 0; i < 22; i++) {
        const a = (i / 22) * Math.PI * 2
        const bumpR = 1 + 0.12 * Math.abs(Math.sin(a * 3.5 + c.k))
        pts.push([c.x + sway * (1 - Math.sin(a)) * 0.6 + Math.cos(a) * c.rx * bumpR, c.y + Math.sin(a) * c.ry * bumpR])
      }
      c.s.draw(pts, { closed: true })
    }

    // traffic: natural walking speed always; only arrivals depend on the clock
    nextSpawn -= dt
    const busy = P.lamp > 0.8 ? 0.35 : 1
    if (nextSpawn <= 0) {
      if (walkers.length < 7) spawn()
      nextSpawn = R.range(3.5, 7) / busy
    }
    for (let i = walkers.length - 1; i >= 0; i--) {
      const w = walkers[i]
      if (w.wave >= 0) {
        w.wave += dt
        w.fig.walk(w.wave > 1.9)
        const sk = w.fig.skeleton
        if (w.wave < 1.6 && sk)
          w.fig.body.reach('near', [sk.neck[0] + 9, sk.neck[1] - 16 + Math.sin(w.wave * 14) * 2.5], 1)
        else w.fig.body.reach('near', null)
        if (w.wave > 2.2) w.wave = -1
      }
      w.fig.update(t, dt, { wind: breeze.value })
      if (w.fig.x < -60 || w.fig.x > W + 60) {
        // headless surfaces cannot remove nodes, so park off-screen walkers out of view
        w.fig.node.set('display', 'none')
        walkers.splice(i, 1)
      }
    }
    dog.update(t, dt, { wind: breeze.value })
    if (dog.x > W + 50) dog.x = -50
  }

  return {
    stage: st,
    update,
    get tau() {
      return tau
    },
    set tau(v: number) {
      tau = ((v % 1) + 1) % 1
    },
    ink
  }
}

/** One character walking on the spot over a scrolling ground: the gait study used for previews. */
export function study(surface: Surface, kind: 'walk' | 'dog' | 'cast', o: { boil?: number } = {}) {
  const W = kind === 'cast' ? 720 : 360,
    H = 240,
    G = 200
  const st = stage(surface, { width: W, height: H, pen: PEN * 1.6, boil: o.boil ?? 0.35, rough: 0.25 })
  const { ink, svg } = st
  surface.create('rect', { width: W, height: H, fill: 'var(--paper)', class: 'pp' }, svg)
  const s = kind === 'cast' ? 1.45 : 1.6
  const figInk: Ink = ink.derive({ pen: PEN, amp: 1 / s })
  const ground = ink.line(svg)
  const ticks = ink.derive({ pen: ink.pen * 0.6 }).line(svg)
  const actors: Array<{ update: (t: number, dt: number) => void; speed: () => number }> = []
  const layerA = ink.group(svg)
  if (kind === 'walk') {
    const f = CAST.commuter(figInk, layerA, { x: W / 2 - 10, y: G, scale: s, travel: false })
    actors.push({ update: (t, dt) => f.update(t, dt, { wind: 0.4 }), speed: () => f.body.gait.speed * s })
  } else if (kind === 'dog') {
    const d = new Animal(figInk, layerA, {
      x: W / 2 - 30,
      y: G,
      scale: s * 1.7,
      travel: false,
      gait: 'trot',
      patch: '#b9875a'
    })
    actors.push({ update: (t, dt) => d.update(t, dt), speed: () => d.gait.speed * s * 1.7 })
  } else {
    const names = ['shopper', 'commuter', 'kid', 'courier', 'elder'] as const
    names.forEach((n, i) => {
      const f = CAST[n](figInk, layerA, { x: 80 + i * 135, y: G, scale: s, travel: false })
      actors.push({ update: (t, dt) => f.update(t, dt, { wind: 0.4 }), speed: () => f.body.gait.speed * s })
    })
  }
  let scroll = 0
  return {
    stage: st,
    update(t: number, dt: number) {
      ink.tick(t)
      // in the cast study each walker has its own pace, so the ground only shows the first
      scroll += actors[0].speed() * dt
      ground.draw(
        [
          [0, G],
          [W, G]
        ],
        { smooth: false }
      )
      const tk: Vec[][] = []
      if (kind !== 'cast')
        for (let x = -(scroll % 40); x < W; x += 40)
          tk.push([
            [x, G + 7],
            [x + 14, G + 7]
          ])
      ticks.node.set(
        'd',
        tk.map((seg) => `M${seg[0][0].toFixed(1)} ${seg[0][1]}L${seg[1][0].toFixed(1)} ${seg[1][1]}`).join('')
      )
      for (const a of actors) a.update(t, dt)
    }
  }
}
