---
slug: showcase-drift
title: Showcase Drift
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 180 frames (3.0 s)
length_30fps: 90
palette: light #FCFCFC, dark none, accent #9B8001
used_in: none
---

# Showcase Drift

> A wall of product cards that slides to rest behind a fixed headline.

## What it shows

Two bands of cards sit above and below a centred headline. The whole scatter
starts offset right and moves left. It loses a fixed share of the remaining
distance each frame and stops by the middle of the clip. The headline "Install,
customise and render, all from React" never moves. The settled wall holds for
the rest of the run.

## Timeline

| Phase    | Frames (30 fps) | What moves                                              | Curve                                       |
| -------- | --------------- | ------------------------------------------------------- | ------------------------------------------- |
| Drift in | 0-10            | Full card scatter translates left from off-screen right | exponential settle, no overshoot (inferred) |
| Settle   | 10-25           | Cards creep the last pixels into rest positions         | exponential settle (inferred)               |
| Hold     | 25-90           | Cards and headline sit still                            | hold (observed)                             |

## Techniques

- `Stage`: flat near-white field with a clear horizontal band kept empty for
  type (observed)
- `Collage`: two rows of overlapping cards above and below the headline gap
  (observed)
- `Card`: flat drawn cards with a small bar chart and pill, one olive card
  carrying "182" (observed)
- `Camera`: one world translate on x carrying all cards together to rest
  (inferred)

## Props to expose

| Prop         | Type     | Default                                         | Purpose                                                 |
| ------------ | -------- | ----------------------------------------------- | ------------------------------------------------------- |
| headline     | string   | "Install, customise and render, all from React" | Centre line, never moves (proposed)                     |
| cards        | object[] | 8                                               | Drawn card specs per row with tint and label (proposed) |
| travelPx     | number   | 480                                             | Horizontal distance the wall covers (proposed)          |
| settleFrames | number   | 25                                              | Frames from entry to rest (proposed)                    |
| accent       | string   | "#9B8001"                                       | Olive tint for the hero card (proposed)                 |

## Rebuild it

1. Build the `Stage` with a reserved empty band at vertical centre.
2. Lay out the `Collage` of `Card` rows above and below the band.
3. Offset the whole wall right by `travelPx` at frame 0.
4. Move the `Camera` x toward rest with an exponential close per frame.
5. Keep the headline fixed in the band on every frame.
6. Freeze all motion at frame 25 and hold to frame 90.

## Pitfalls

- Moving the headline with the wall destroys readability.
- Adding overshoot or bounce breaks the heavy/resting read.
- Using photos instead of flat drawn cards changes the weight and the palette.
