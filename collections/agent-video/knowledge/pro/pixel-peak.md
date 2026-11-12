---
slug: pixel-peak
title: Pixel Peak
tier: pro
category: transitions
evidence: film
demo: 960x540 at 60 fps, 100 frames (1.67 s)
length_30fps: 50
palette: light #F8F8F4, dark #080808, accent #3C6AB9
used_in: none
---

# Pixel Peak

> A blocky stepped peak that climbs up and hands one shot to the next.

## What it shows

The outgoing light shot holds full-frame. A stepped peak of black blocks opens
at the bottom middle, widens and climbs, its leading edge flickering blue for a
single frame before each block cuts to the incoming shot. The top corners go
last. The incoming dark shot then holds full-frame to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                            | Curve              |
| ----- | --------------- | ----------------------------------------------------------------------------------------------------- | ------------------ |
| 1     | 0–15            | Outgoing shot holds full-frame                                                                        | hold (observed)    |
| 2     | 15–27           | Block peak climbs from bottom middle, widens outward, edge blocks flash blue one frame before cutting | stepped (observed) |
| 3     | 27–50           | Incoming shot holds full-frame                                                                        | hold (observed)    |

## Techniques

- `Stage`: outgoing shot giving way to the incoming shot full-frame (observed)
- `custom: block-peak`: a 20 by 10 grid whose blocks cut over in a climbing
  stepped peak, widest at the base (observed)
- `Highlight`: single-frame blue flash on each block before it cuts (observed)

## Props to expose

| Prop       | Type   | Default | Purpose                                             |
| ---------- | ------ | ------- | --------------------------------------------------- |
| cols       | number | 20      | Grid columns across the frame (proposed)            |
| rows       | number | 10      | Grid rows up the frame (proposed)                   |
| flashColor | string | —       | Single-frame edge flash colour (proposed)           |
| peakFrames | number | —       | Frames the peak takes to cover the frame (proposed) |

## Rebuild it

1. Hold the outgoing shot full-frame as a `Stage` for 15 frames.
2. Open the `block-peak` grid at the bottom middle and climb it outward and
   upward in stepped cuts.
3. Flash each edge block blue (`Highlight`) for exactly one frame before it
   cuts.
4. Cut the top corner blocks last so the peak shape reads.
5. Hold the incoming shot full-frame to frame 50.

## Pitfalls

- Crossfading blocks instead of cutting them turns the peak into a soft wipe.
- Holding the blue flash longer than one frame paints a visible blue rim.
- Climbing straight up instead of widening from the middle loses the peak shape.
