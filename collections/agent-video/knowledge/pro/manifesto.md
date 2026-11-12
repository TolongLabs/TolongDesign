---
slug: manifesto
title: Manifesto
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 220 frames (3.67 s)
length_30fps: 110
palette: light #FCFCFC, dark #000000, accent none
used_in: none
---

# Manifesto

> Three statements on black, each arriving differently, joined by hard cuts.

## What it shows

Black. "You shipped it." wipes on left to right behind a magenta edge, pushes
slowly toward the viewer, then slides away mid-motion. A hard cut lands "The
demo takes" arriving from the right with its words held apart, the gaps closing
as it lands. A second hard cut starts huge on "minutes." and falls back to a
resting line. The last line holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                      | Curve    |
| ----- | --------------- | --------------------------------------------------------------- | -------- |
| 1     | 0–7             | First line wipes on left to right behind a magenta edge         | linear   |
| 2     | 7–44            | Line pushes toward the viewer, then slides away mid-motion      | ease-out |
| 3     | 44–48           | Hard cut to the second line                                     | hard cut |
| 4     | 48–55           | Second line arrives from the right; word gaps close as it lands | ease-out |
| 5     | 55–78           | Second line holds                                               | hold     |
| 6     | 78–80           | Hard cut to the third line, oversized                           | hard cut |
| 7     | 80–95           | Oversized line falls back to resting size                       | ease-out |
| 8     | 95–110          | "minutes." holds                                                | hold     |

## Techniques

- `Reveal`: wipe-on behind a magenta edge that cools to white (observed)
- `Camera`: slow push toward the viewer, then a lateral slide out mid-motion
  (inferred)
- `SplitText`: second line arrives with wide word spacing that closes on
  landing; nothing scales (observed)
- `Camera`: third line starts larger than the frame and loses a fixed share of
  distance each frame (observed)

## Props to expose

| Prop      | Type   | Default           | Purpose                                            |
| --------- | ------ | ----------------- | -------------------------------------------------- |
| lineA     | string | "You shipped it." | First statement, wiped on (proposed)               |
| lineB     | string | "The demo takes"  | Second statement, spacing-close arrival (proposed) |
| lineC     | string | "minutes."        | Third statement, oversize fall-back (proposed)     |
| edgeColor | string | magenta           | Wipe edge that cools to white (proposed)           |

## Rebuild it

1. Wipe the first line on over frames 0–7 behind the accent edge.
2. Push slowly toward it to frame 44, then slide it away mid-motion.
3. Cut hard at frame 44–48 to the second line.
4. Arrive the second line from the right over frames 48–55, closing word gaps
   only.
5. Hold to frame 78, then cut hard to the oversized third line.
6. Fall back to resting size over frames 80–95 and hold to frame 110.

## Pitfalls

- Scaling the second line on arrival breaks the spacing-only move.
- Softening either cut into a fade turns two statements into one mush.
- Easing the wipe-on steals the snap of the magenta edge.
- Adding an accent colour anywhere else dilutes the single-edge effect.
