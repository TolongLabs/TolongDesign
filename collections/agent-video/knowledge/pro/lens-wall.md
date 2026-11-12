---
slug: lens-wall
title: Lens Wall
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 132 frames (2.2 s)
length_30fps: 66
palette: light #FCFCFC, dark #000000, accent #4272D7
used_in: none
---

# Lens Wall

> A wall of eighteen pictures that fades in, bends through a lens, and flashes
> out.

## What it shows

Eighteen pictures fade in tile by tile on white until the full wall stands
assembled. The camera drifts back in a slow zoom-out. A lens bends the wall —
edges stretching, the middle pulling back — and a white flash cuts the film to a
bare bright frame that holds to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                             | Curve               |
| ----- | --------------- | ---------------------------------------------------------------------- | ------------------- |
| 1     | 0–9             | Tiles fade in one by one on white                                      | ease-out (observed) |
| 2     | 9–30            | Wall completes at eighteen pictures, slow zoom-out starts              | ease-out (observed) |
| 3     | 30–57           | Zoom-out continues, lens bends edges outward and pulls the middle back | ease-in (inferred)  |
| 4     | 57–60           | White flash, hard cut                                                  | hard cut (observed) |
| 5     | 60–66           | Bare bright frame holds                                                | hold (observed)     |

## Techniques

- `Collage`: eighteen pictures fading in tile by tile into a wall (observed)
- `Camera`: slow zoom-out across the assembled wall (observed)
- `custom: lens-bend`: edges stretch while the middle pulls back through a lens
  (inferred)
- `Stage`: white flash wiping to the bare end frame on the cut (observed)

## Props to expose

| Prop         | Type       | Default | Purpose                                             |
| ------------ | ---------- | ------- | --------------------------------------------------- |
| images       | string[18] | —       | The eighteen wall pictures (proposed)               |
| fadeOrder    | number[]   | —       | Tile-by-tile fade-in order (proposed)               |
| zoomOut      | number     | —       | Total zoom-out over the assembled wall (proposed)   |
| lensStrength | number     | —       | How far edges stretch against the middle (proposed) |

## Rebuild it

1. Fade the eighteen `Collage` tiles in one by one on a white `Stage`.
2. Start a slow `Camera` zoom-out once the wall stands complete.
3. Bend the wall through the `lens-bend`: stretch edges, pull the middle back.
4. Flash white into a `hard cut` to the bare end frame.
5. Hold the bare frame to frame 66.

## Pitfalls

- Fading tiles in groups instead of one by one hides the assembly beat.
- Bending without the zoom-out underneath reads as a flat scale, not a lens.
- Not visible in the frames: the exact lens curve between the last wall frame
  and the flash.
