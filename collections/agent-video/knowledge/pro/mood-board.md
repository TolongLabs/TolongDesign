---
slug: mood-board
title: Mood Board
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 314 frames (5.23 s)
length_30fps: 157
palette: light #E4E8EC, dark #0C1404, accent #D69733
used_in: none
---

# Mood Board

> A collage that builds tile by tile under a headline, then runs into glowing
> pictures.

## What it shows

A headline starts typing while the first tile lands as a flat swatch. Each tile
lands as a swatch and turns into its picture a few frames later as the headline
builds word by word: "snapcn made every launch faster." The camera rides across
the board — easing in, a hard zoom-out cut, a long drift — then runs across a
second cluster into large pictures that warm, glow and wash out one after
another.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                      | Curve               |
| ----- | --------------- | ----------------------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–10            | First swatch lands under the starting headline                                                  | ease-out (observed) |
| 2     | 10–62           | Tiles land as swatches then turn to pictures, headline builds word by word, camera eases across | ease-out (observed) |
| 3     | 62–107          | Camera runs across the board, hard zoom-out cut into the second cluster                         | hard cut (observed) |
| 4     | 107–146         | Large pictures settle, each warms, glows and washes out in turn                                 | ease-out (observed) |
| 5     | 146–157         | Final wash holds to the end                                                                     | hold (inferred)     |

## Techniques

- `Stage`: cool grey board filling the frame (observed)
- `Collage`: tiles landing as flat swatches, each turning into its picture
  frames later (observed)
- `SplitText`: headline arriving one word at a time and settling into place
  (observed)
- `Camera`: ride across the board with a hard zoom-out cut mid-run (observed)
- `custom: warm-wash`: large pictures warming, glowing and washing out in
  sequence (observed)

## Props to expose

| Prop       | Type     | Default | Purpose                                          |
| ---------- | -------- | ------- | ------------------------------------------------ |
| headline   | string   | —       | Headline words arriving one at a time (proposed) |
| tiles      | string[] | —       | Tile pictures in landing order (proposed)        |
| swatches   | string[] | —       | Flat colours each tile lands as first (proposed) |
| heroImages | string[] | —       | Large pictures in the closing run (proposed)     |
| cutFrame   | number   | —       | Frame of the hard zoom-out cut (proposed)        |

## Rebuild it

1. Start the headline and land the first `Collage` tile as a flat swatch.
2. Land each tile as a swatch, then resolve it to its picture a few frames
   later.
3. Arrive the headline one word at a time (`SplitText`) while the `Camera` eases
   across.
4. Run the camera into the second cluster through a hard zoom-out cut.
5. Settle the large pictures and play the `warm-wash` across them in turn.
6. Hold the final wash to frame 157.

## Pitfalls

- Resolving swatches to pictures instantly instead of frames later loses the
  loading beat.
- Easing through the zoom-out cut instead of cutting hard smears the cluster
  change.
- Washing all hero pictures at once instead of in sequence flattens the closing
  run.
