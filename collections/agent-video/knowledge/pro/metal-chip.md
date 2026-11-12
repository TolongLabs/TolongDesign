---
slug: metal-chip
title: Metal Chip
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 72 frames (1.2 s)
length_30fps: 36
palette: light #ECECEC, dark #080808, accent none
used_in: none
---

# Metal Chip

> A brushed-metal tile carrying the mark settles from a tilt while a sheen
> sweeps across it.

## What it shows

A square brushed-metal tile with the snap PRO mark sits on black, starting
slightly tilted in perspective and darker at its top. A bright vertical sheen
sweeps down across the metal. The tile straightens to front-on as the sheen
passes and reaches even brightness. It then holds perfectly still, mark
centered, to the end.

## Timeline

| Phase        | Frames (30 fps) | What moves                                                           | Curve                    |
| ------------ | --------------- | -------------------------------------------------------------------- | ------------------------ |
| Tilted entry | 0-7             | Tile fades in with a slight perspective tilt, sheen starts its sweep | ease-out (inferred)      |
| Straighten   | 7-17            | Tilt resolves to front-on, brightness evens out                      | spring settle (inferred) |
| Locked hold  | 17-36           | Tile sits perfectly still                                            | hold (observed)          |

## Techniques

- `Stage`: single ink act, tile floating centered on black (observed)
- `Card`: brushed-metal tile with the mark and wordmark as one object (observed)
- `Reveal`: tile fades and scales in with a tilt that settles front-on
  (observed)
- `custom: metal-sheen`: bright band sweeps down the brushed surface once
  (observed)
- `Camera`: frame stays locked, all motion lives on the tile (observed)

## Props to expose

| Prop         | Type   | Default  | Purpose                                                    |
| ------------ | ------ | -------- | ---------------------------------------------------------- |
| label        | string | snap PRO | Wordmark on the tile (proposed)                            |
| entryTilt    | number | 6        | Perspective tilt in degrees on arrival (proposed)          |
| sheenWidth   | number | 0.25     | Sweeping band width as a share of tile width (proposed)    |
| settleFrames | number | 17       | Frames from entry to locked stillness at 30 fps (proposed) |

## Rebuild it

1. Float the metal `Card` centered on the ink `Stage` with a slight tilt.
2. Sweep one bright sheen band down the brushed surface.
3. Straighten the tilt to front-on with a spring settle.
4. Even out the brightness as the sheen exits.
5. Lock the tile byte-still for the final 19 frames.

## Pitfalls

- Keeping the tilt after the settle reads as a crooked render, not depth.
- Running the sheen twice turns one gleam into a shimmer loop.
- Moving the camera as well as the tile doubles the motion and looks seasick.
- Any drift during the final hold breaks the machined-still read.
