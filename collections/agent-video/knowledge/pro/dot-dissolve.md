---
slug: dot-dissolve
title: Dot Dissolve
tier: pro
category: transitions
evidence: film
demo: 960x540 at 60 fps, 76 frames (1.27 s)
length_30fps: 38
palette: light none, dark #000000, accent none
used_in: none
---

# Dot Dissolve

> A halftone dot field that blooms to full coverage and dissolves back to black.

## What it shows

The film opens on black. Two small clusters of pale dots seed near the top of
the frame and multiply outward. The dots grow into a full-frame grid of
grey-white halftone dots at peak coverage. The field then thins cell by cell
until only black remains. No text, no logo, no second shot appears.

## Timeline

| Phase     | Frames (30 fps) | What moves                                          | Curve               |
| --------- | --------------- | --------------------------------------------------- | ------------------- |
| Seed      | 0-2             | First dots appear on black                          | hold (observed)     |
| Bloom     | 2-13            | Dot clusters spread until the grid covers the frame | ease-out (inferred) |
| Full hold | 13-20           | Complete dot field sits still                       | hold (observed)     |
| Dissolve  | 20-36           | Dots shrink and vanish across the frame             | linear (inferred)   |
| Rest      | 36-38           | Black frame                                         | hold (observed)     |

## Techniques

- `Halftone`: dot grid blooms from seeded clusters to full coverage, then
  dissolves (observed)
- `Stage`: full-frame ink act throughout, with a brief bright field at peak
  density (observed)
- `Reveal`: dots scale in per cell, largest change early in the bloom (observed)
- `Camera`: frame stays locked, no pan or scale (observed)

## Props to expose

| Prop          | Type                  | Default          | Purpose                                           |
| ------------- | --------------------- | ---------------- | ------------------------------------------------- |
| dotPitch      | number                | 12               | Grid spacing in pixels (proposed)                 |
| dotColor      | string                | #FFFFFF          | Dot fill colour (proposed)                        |
| bloomCenter   | [number, number][]    | two top clusters | Seed points of the bloom (proposed)               |
| peakHold      | number                | 7                | Frames to hold full coverage at 30 fps (proposed) |
| dissolveOrder | "reverse" \| "random" | reverse          | Cell exit order (proposed)                        |

## Rebuild it

1. Paint the `Stage` ink and lay a dot grid over the frame.
2. Seed two clusters near the top and scale dots up outward from them.
3. Reach full coverage by frame 13 and hold it still to frame 20.
4. Shrink dots back down across the frame over frames 20 to 36.
5. Keep the camera locked for the whole run.
6. End on pure black with no trailing dots.

## Pitfalls

- Seeding dots uniformly instead of from clusters changes the bloom read.
- Holding full coverage too long turns a transition into a wallpaper.
- Leaving stray dots in the final frames breaks the cut out of black.
