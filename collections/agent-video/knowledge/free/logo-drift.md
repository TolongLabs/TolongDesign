---
slug: logo-drift
title: Logo Drift
tier: free
category: logos
evidence: source+film
demo: 960x540 at 60 fps, 216 frames (3.6 s)
length_30fps: 108
palette: light #F4F4F0, dark #101418, accent #F07B4C
used_in: none
---

# Logo Drift

> A headline lands word by word over a drifting wall of integration tiles
> pulling back. Use it to say what stack a product works with.

## What it shows

The headline "Built for the stack you already use." lands one word at a time,
each arriving oversized and soft and snapping sharp. Behind it a field of
wordmark tiles fades up one by one and drifts on constant world-lines while the
whole field shrinks with one linear pull-back, so tiles keep arriving from every
edge. The field grows denser and larger toward the camera edges as the line
reads. At the end the whole line recedes to 0.80, blurs to 6.5 px and goes,
while the tiles keep drifting.

## Timeline

| Phase           | Frames (30 fps) | What moves                                                                                                   | Curve                                     |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| First words     | 1–9             | Words land every 4.5 frames from 0.5, each resolving 1.216x and 4.3 px blur in 4 frames                      | Easing.out quad (source)                  |
| Tiles arrive    | 8–74            | Nine tiles fade up from 0.28 s to 2.48 s with a 0.4 s exponential approach; field pulls back at 0.1762 per s | 1 − e^(−age/τ), linear pull-back (source) |
| Line complete   | 20–94           | Full headline holds centred while tiles drift past at constant velocity and keep shrinking                   | hold on words (source)                    |
| Line exits      | 94–104          | Whole line recedes to 0.80, blurs to 6.5 px and fades                                                        | linear (source)                           |
| Field continues | 104–108         | Tiles keep drifting and shrinking under the exiting line                                                     | linear (observed)                         |

## Techniques

- `Camera`: pull-back is one linear scale on the tile field at 0.1762 per
  second, not a perspective dolly (source)
- `SplitText`: seven words land every 150 ms, each finishing exactly as the next
  begins; placed words slide left since the line is centre-set (source)
- `Reveal`: words do not fade in; ink is conserved from the first frame and
  1.216x scale plus 4.3 px blur resolve in 140 ms (source)
- `Card`: wordmark tiles with glyph plus label drift on straight world-lines
  around 80 stage px per s in their own directions (source)
- `Stage`: light page with a static radial wash at 0.07 opacity behind the
  headline; the wash never moves (source)
- `Grid`: no grid; depth comes from tile size and drift, not a backdrop (source)

## Props to expose

| Prop         | Type                 | Default                              | Purpose                                                    |
| ------------ | -------------------- | ------------------------------------ | ---------------------------------------------------------- |
| headline     | string               | Built for the stack you already use. | Line written one word at a time                            |
| tiles        | DriftTile[]          | 9-entry stack                        | Glyph, label, color, position, size, drift, entry per tile |
| pullback     | number               | 0.1762                               | Camera pull-back as fraction of scale per second           |
| tileSpeed    | number               | 1                                    | Multiplier on every tile drift                             |
| tileScale    | number               | 1                                    | Multiplier on every tile size                              |
| tileFade     | number               | 0.4                                  | Time constant of tile fade-up in s                         |
| tileRadius   | number               | 0.02                                 | Corner radius as fraction of tile edge                     |
| wordAt       | number               | 0.017                                | When the first word lands, in s                            |
| wordStagger  | number               | 0.15                                 | Gap between words in s                                     |
| wordDuration | number               | 0.14                                 | How long one word takes to land                            |
| wordScale    | number               | 1.216                                | Size each word arrives at                                  |
| wordBlur     | number               | 4.3                                  | Blur each word arrives with, in px                         |
| exitAt       | number               | 3.13                                 | When the line leaves, in s                                 |
| exitDuration | number               | 0.34                                 | How long the exit takes                                    |
| exitScale    | number               | 0.8                                  | Size the line leaves at                                    |
| exitBlur     | number               | 6.5                                  | Blur the line leaves with, in px                           |
| fontSize     | number               | 20                                   | Headline size in stage px                                  |
| fontWeight   | number               | 500                                  | Headline weight                                            |
| glyphScale   | number               | 0.34                                 | Glyph size as fraction of tile edge                        |
| glow         | boolean              | true                                 | Show the static wash behind the headline                   |
| glowColor    | string               | accent                               | Wash color override                                        |
| glowOpacity  | number               | 0.07                                 | Wash strength                                              |
| accentColor  | string               | #3072DB                              | Accent when no glow color given                            |
| theme        | Partial<SnapCnTheme> | —                                    | Design-token overrides                                     |
| mode         | "light" \| "dark"    | —                                    | Page mode                                                  |
| fontFamily   | string               | Inter                                | Face for headline and tiles                                |
| speed        | number               | 1                                    | Time multiplier                                            |

## Rebuild it

1. Lay the field out on an 810x458 stage and fit it into frame with a uniform
   stage scale.
2. Land each word from 1.216x and 4.3 px blur in 0.14 s, staggered 0.15 s,
   sliding placed words left to stay centred.
3. Fade each tile up with a 1 − e^(−age/0.4) approach from its entry second and
   drift it at constant velocity.
4. Shrink the whole field with one linear scale at 0.1762 per second; never a
   perspective curve.
5. Keep the wash static behind the headline at 0.07 opacity for the whole run.
6. From 3.13 s recede the line to 0.80 with 6.5 px blur over 0.34 s while the
   field keeps drifting.

## Pitfalls

- Fading words in breaks the measured read; ink is conserved and only scale and
  blur resolve.
- A perspective dolly cannot fit the tiles; size falls linearly, so the
  pull-back must be one linear scale.
- A static field misses tile paths by 32 px; every tile needs its own constant
  drift velocity.
- Animating the wash under the headline reads as a mistake; it stays fixed.
