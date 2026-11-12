# line-art-animation: teardown and the TolongLabs rebuild

Research note for
[JDhruv14/line-art-animation](https://github.com/JDhruv14/line-art-animation),
commit `c43d698` (2026-11-10), MIT, read 2026-11-12. It records how the original
works, which ideas carry the style, and what TolongLabs built in
[collections/line-art](../../collections/line-art/README.md).

**Method.** The repo is a complete source tree, so it was read file by file:
`SKILL.md`, the six `references/`, `lib/` (four modules), both examples and the
three scripts. The REA reverse-engineering toolkit was considered and not used.
It targets shipped binaries and bundles, and here the source itself is the
primary evidence. Every claim below comes from the source at that commit.

## 1. What the original is

| Part         | Size                          | Role                                                                                                           |
| ------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `SKILL.md`   | 1 file                        | Workflow: pin the look → copy `lib/` → one figure for approval → motion → scene → verify → (match / video)     |
| `references` | 6 guides                      | style, motion, scenes, verify, matching a clip, video                                                          |
| `lib/`       | 464 lines, 4 modules, no deps | `ink.ts` primitives, `gait.ts` solver, `motion.ts` physics, `daynight.ts` palette                              |
| `examples/`  | walker ~150, village ~1,650   | one figure; a full canal street with schedules and ~12 interactions                                            |
| `scripts/`   | 3                             | `capture.ts` (headless Chrome over raw CDP), `clip.ts` (loop period, blob tracking), `frames.sh` (grid frames) |

## 2. The mechanisms that make the style

1. **Open double-stroke limbs** (`ink.ts › limb`). A quadratic curve through
   hip→knee→ankle (control pushed 0.55 past the knee) is sampled at 17 points
   and offset both ways. A paper-filled band sits between two pen paths, each
   cut short by a different number of points at the far end. This is the style's
   signature.
2. **Solved gait** (`gait.ts`). With stance `x = 40 + S/2 − S·u/duty`, the foot
   moves at `S/(duty·period)`, which is exactly `speed`, so moving the body by
   `speed` pins it. The swing uses minimum-jerk `s³(10 − 15s + 6s²)`. Heel-off
   rotates the ankle about the toe in the last 14% of the cycle. Walk hip height
   is `max(rest, ankle.y − √(reach² − dx²))` over planted feet. Runs use a fixed
   compress/flight curve.
3. **Physical secondary motion** (`motion.ts`). Semi-implicit springs and
   pendulums driven by wind, carrier acceleration and clicks. Pointer wind
   integrates horizontal pointer velocity, clamped to ±2.4.
4. **Palette inversion** (`daynight.ts`). Three cyclic hex ramps (sky top, sky
   bottom, paper). Ink is derived from paper luminance, so it flips while the
   paper is mid-dark. `lamp`, `night` and `sunset` scalars drive lights.
   Retinting works through `currentColor` and a `.pp { fill: var(--paper) }`
   class.
5. **Ink texture** via one SVG filter:
   `feTurbulence 0.6 → feDisplacementMap 0.45 → blur 0.12`. It is static and
   ignored by many export targets.
6. **Determinism.** `run()` reads `?debug` and exposes `window.__step(s)` in
   1/60 s steps. `capture.ts` launches Chrome with `--remote-debugging-port`,
   then alternates `__step(1/fps)` and `Page.captureScreenshot` over a
   hand-written CDP WebSocket client.

The skill's rules come from rejected drafts, and those are the real know-how: no
sine-bob walks, no sliding feet, no closed-tube limbs, no straight lines,
clothes built from the legs, build one piece before the set, interactions as
world reactions, a card on a fixed page, and new characters when asked for
something new.

## 3. Gaps we chose to close

| Gap in the original                                                     | TolongLabs answer                                                               |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Every character is a hand-written routine (walker: ~100 lines of paths) | `Figure` = body plan + costume `Part[]`; `CAST` presets; `body.reach()` IK      |
| Ink texture is a static filter; lost in Figma/rasterizer exports        | Line boil + roughness as seeded geometry, re-inked at `boilFps`                 |
| Animals are hand-keyed                                                  | `quadruped()` walk/trot on the shared foot path; `Animal` dog/cat               |
| Export needs a browser and screenshots                                  | `Surface` abstraction: same code headless in Bun; `toSVG()` bakes colours       |
| No tests                                                                | Bun tests: zero foot slip per gait, IK lengths, boil determinism, export baking |
| Arm springs fixed (60, 9) regardless of cadence                         | Spring stiffness tuned to gait frequency; runs keep arms in phase               |
| Stride, lift, compression not scaled for children                       | Stride, lift, toe, heel kick and run compression scale with leg length          |

## 4. Decisions in the rebuild

- **Figure space** is feet on y = 0, hip above x = 0, height ≈ 100. Placing a
  figure is then only `translate · scale`, with no offset.
- **One colour list** (`DAY_CYCLE`): each stop carries sky top, sky bottom and
  paper, so the ramps cannot drift out of sync. The values are our own.
- **Value noise along each stroke**, not per-point random. Neighbouring points
  move together, so lines bend instead of fizzing. Noise is keyed on (seed,
  stroke salt, frame), so a frame is reproducible.
- **`derive({ pen, amp })`** shares the root's boil clock and switch. A figure
  at scale `s` uses `amp = 1/s`, so boil reads at the same screen size.
- **Previews without a browser**: Bun writes SVG frames and ffmpeg's librsvg
  decoder encodes the GIF. Rasterizers need explicit width and height, so
  `toSVG({ width })` derives the height from the viewBox.

## 5. Verification done

- `bun test collections/line-art`: 19 tests, 1,769 assertions, pass.
- `tsc` strict on src, tests, demo and scripts: clean.
- Live demo rendered in headless Chromium with no console errors. The headless
  street was checked at noon, golden hour, dusk and night. The walk, trot and
  run cycles were checked frame by frame. The run-cycle arm lag found there was
  fixed (§3).

## 6. Open questions

- Click reactions (wave, dog excite, window toggle) are wired in the demo but
  were not driven by an automated pointer test.
- Clothing is not tinted at night (`nightTint` covers scene paint only).
- No reference-clip matching tools yet. The original's `clip.ts` approach
  (ffmpeg crops, period by autocorrelation) is the model if needed.
