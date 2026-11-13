---
name: line-art-animation
slug: line-art-animation
section: Motion
section_slug: motion
source_url: 'https://github.com/JDhruv14/line-art-animation'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb:
  'Claude skill and dependency-free TypeScript library for animated line-art SVG
  scenes with solved walk cycles and a day/night cycle.'
paywall: free
pricing_summary:
  'Free MIT-licensed repo: a Claude skill plus four dependency-free TypeScript
  modules and two examples. No paid tier.'
open_source: true
license: MIT
category_tags:
  [line-art, svg-animation, illustration, walk-cycle, day-night, claude-skill]
best_for:
  [animated illustrations, hero scenes, character loops, explainer videos]
stack: [typescript, svg, vite, claude-code]
execution_mode: mcp-skill
surface: [web-ui, video]
status: active
agent_friendly: true
last_verified: 2026-11-12
---

# line-art-animation

> A Claude skill and TypeScript library for animated line-art SVG components:
> ink figures that walk and react, scenes with a day/night cycle.
>
> Reach for it when an agent should build a hand-inked, interactive illustration
> (a street, a shop, a person walking) instead of a video or a Lottie file.

## At a glance

| Field          | Value                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------- |
| Source         | [github.com/JDhruv14/line-art-animation](https://github.com/JDhruv14/line-art-animation) |
| Paywall        | **Free** — MIT                                                                           |
| Open source    | Yes — MIT (copyright 2026 JDhruv14)                                                      |
| Type           | Claude skill + small SVG drawing/animation library                                       |
| Works with     | TypeScript, Vite, plain DOM/SVG (no framework), Node ≥ 22.18, ffmpeg for video           |
| Best for       | Animated illustration components, walk cycles, day-to-night scenes, rendered clips       |
| Agent-friendly | Yes — ships as a skill (`SKILL.md` + six reference guides) built for Claude Code         |

## What it is

A repo that is both a Claude Code skill and the library the skill uses. The
skill (`SKILL.md`, `references/`) tells the agent how to work: pin the look
first, build one figure and get approval, solve motion physically, verify frame
by frame, and capture video deterministically. The library is four
dependency-free TypeScript modules, 464 lines in total:

- `ink.ts` — pen, paper and primitives. Its signature is `limb()`: a limb drawn
  as two open pen strokes around a curve through the joints, with paper between
  them. Ink is `currentColor`, paper fills carry a `pp` class, and an
  `feTurbulence` filter makes vector lines read as ink.
- `gait.ts` — a walk/shuffle/run solver. Planted feet slide back at exactly the
  travel speed, the swing follows a minimum-jerk path, the heel peels off the
  toe, and hip height comes from leg reach, not a sine wave.
- `motion.ts` — springs, pendulums, pointer wind, keyed sequences.
- `daynight.ts` — cyclic sky/paper ramps; ink flips to pale-on-indigo at night.

Two examples show the bar: `examples/walker` (one figure, ~150 lines) and
`examples/village` (a Japanese canal street with schedules, about a dozen
interactions, ~1,650 lines). `scripts/capture.ts` drives headless Chrome over
the DevTools protocol and steps the page one frame at a time, so video output
does not depend on machine speed. The repo was created on 2026-11-10 and had 508
GitHub stars on 2026-11-12. A full teardown is in
[catalogue/research/line-art-animation.md](../../research/line-art-animation.md).

## Paywall and pricing

- **Free:** everything: skill, library, examples and scripts.
- **Paid:** none listed.
- **Sign-up required?** No.
- **Licence for client work:** MIT. Keep the copyright notice in copied files.

Checked 2026-11-12.

## How to use

1. Install the skill for Claude Code (user-wide or per project):

   ```bash
   git clone https://github.com/JDhruv14/line-art-animation ~/.claude/skills/line-art-animation
   ```

2. Run the examples locally (Node ≥ 22.18):

   ```bash
   cd ~/.claude/skills/line-art-animation && npm install && npm run dev
   ```

   Open `http://localhost:5173/examples/walker/` and `/examples/village/`.
   Village URL flags: `?start=0.9` start time, `?tau=0.5` pin time, `?day=30`
   seconds per day, `?debug` manual stepping via `window.__step(s)`.

3. Ask the agent for a scene, for example "a bakery at dawn: a baker carrying
   trays, steam from the oven, a cat in the window". The skill copies `lib/`
   into the project, builds one figure for approval, then the rest.
4. Render video: run the dev server, then
   `node scripts/capture.ts "<url>?debug" out 900 30 1920 1080` and
   `ffmpeg -framerate 30 -i out/f%04d.png -c:v libx264 -crf 15 -pix_fmt yuv420p out.mp4`.
5. To match a reference clip, use `scripts/clip.ts period|blobs` and
   `scripts/frames.sh` to measure loop lengths and poses (see
   `references/matching.md`).

Minimal library use (from the README):

```ts
import { el, limb, shoe, place, inkDefs, run } from './lib/ink.ts'
import { gait } from './lib/gait.ts'

const svg = el('svg', { viewBox: '0 0 480 240' })
document.body.append(svg)
const fig = el('g', { filter: inkDefs(svg).filter }, svg)
const legs = [limb(fig, 4.2), limb(fig, 4.2)]
const walk = gait({ kind: 'walk' })
let phase = 0,
  x = 60
run((t, dt) => {
  phase += dt / walk.period
  x += walk.speed * 1.25 * dt
  place(fig, (x % 520) - 20, 196, 1, 1.25)
  const p = walk.pose(phase)
  p.feet.forEach((foot, i) => legs[i].draw([p.hip, foot.knee, foot.ankle]))
})
```

## Examples

- [README hero GIF](https://github.com/JDhruv14/line-art-animation/blob/main/media/village.gif)
  — the village from late afternoon to night: lit windows, reflections.
- [Walker example](https://github.com/JDhruv14/line-art-animation/tree/main/examples/walker)
  — the smallest complete figure: gait, open-stroke limbs, coat around the knee,
  springs, a hat-tip reaction.
- [Village example](https://github.com/JDhruv14/line-art-animation/tree/main/examples/village)
  — scene layering, schedules, a cat state machine, a boatman poling.
- [Style reference](https://github.com/JDhruv14/line-art-animation/blob/main/references/style.md)
  — pen weights, proportions and architecture rules worth reading on their own.

## When to use it

- Use it when you want the original skill's workflow and its Japanese-street
  example as a reference, or you work in Node/Vite.
- Use [TolongLabs Line Art](./tolong-line-art.md) instead for TolongLabs work.
  It is our own library on the same principles, plus a rig/costume API, line
  boil, a quadruped solver and headless SVG/GIF export.
- Skip both for timeline-driven vector animation authored by a designer: use
  [Rive](./rive.md) or [Lottie](./lottie.md).

## Agent notes

- Read the closest example before writing anything. The skill's own rules come
  from rejected drafts: no sine-bob walks, no sliding feet, no closed-tube
  limbs, no ruler-straight lines, and no page background that changes with the
  scene.
- Figure space is ~95 units tall, feet on y = 120, hip at x = 40. Move a walker
  by exactly `gait.speed × scale` per second.
- Verification needs `?debug` stepping. Background and headless tabs throttle
  rAF and make scenes look broken.
- The village example is loosely typed JS-in-TS (its own tsconfig); `lib/` and
  the walker are strict.
- The ink filter does not survive export to tools that ignore SVG filters
  (Figma, many rasterizers).

## Alternatives in this repo

- [TolongLabs Line Art](./tolong-line-art.md) — our library: same mechanics,
  rig + costume parts, line boil, dogs and cats, headless export.
- [Rive](./rive.md) — designer-authored state-machine animation.
- [Lottie](./lottie.md) — After Effects exports as JSON.

## Sources

- [GitHub repository](https://github.com/JDhruv14/line-art-animation) — checked
  2026-11-12 (commit `c43d698`, 2026-11-10)
- [README](https://github.com/JDhruv14/line-art-animation/blob/main/README.md) —
  checked 2026-11-12
- [SKILL.md](https://github.com/JDhruv14/line-art-animation/blob/main/SKILL.md)
  — checked 2026-11-12
- [LICENSE](https://github.com/JDhruv14/line-art-animation/blob/main/LICENSE) —
  checked 2026-11-12
