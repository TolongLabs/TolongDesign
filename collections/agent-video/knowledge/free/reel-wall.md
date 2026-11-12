---
slug: reel-wall
title: Reel Wall
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 540 frames (9.0 s)
length_30fps: 270
palette: light #F0F8F4, dark #000000, accent #9E6B46
used_in: none
---

# Reel Wall

> A ring of vertical clips turns past in the dark for launch and recap films.

## What it shows

Ten vertical cards stand on a CSS 3D ring around a dark stage. The wall eases in
from rest over the first half, then turns at an even speed for the second half.
Each clip holds for two frames at a time, which gives the turn its
steppededitorial feel. A black veil clears over the opening frames. The same
clips repeat around the ring, so the wall never runs out of pictures.

## Timeline

| Phase | Frames (30 fps) | What moves                 | Curve                                                                                   |
| ----- | --------------- | -------------------------- | --------------------------------------------------------------------------------------- |
| 1     | 0-11            | Veil clears from black     | Veil opacity 0.142 to 0; Power 3.7 (source)                                             |
| 2     | 0-130           | Wall eases in from rest    | Ring turn on fitted cubic-bezier; Easing.bezier(0.344, 0.0049, 0.7833, 1.3384) (source) |
| 3     | 130-270         | Wall cruises at even speed | Ring turn continues linearly; Linear, handed off at cruise speed (source)               |
| 4     | 0-270           | Pictures step forward      | Each clip holds for two frames; Hold on twos (source)                                   |

## Techniques

- `Stage`: near-black page with a radial vignette falling to black at the edges
  (source)
- `custom: ring-turn`: cards sit on a ring of radius 1837.36 reference px at
  pitch 0.1328 rad, seen through perspective 446.54 about origin (356.76,
  197.99) (source)
- `Collage`: the 10 cards nearest the lens render each frame, cycling through
  the clip list (source)
- `Camera`: the whole move is one world turn, eased in over 52 twelve-fps steps
  then constant (source)

## Props to expose

| Prop       | Type     | Default           | Purpose                                      |
| ---------- | -------- | ----------------- | -------------------------------------------- |
| videos     | string[] | 6 stock clip URLs | Clips for the wall, repeated around the ring |
| background | string   | #0E0E0E           | Page behind the wall                         |
| cardColor  | string   | #1A1A1A           | Card shown before its clip has a frame       |
| speed      | number   | 1                 | Playback multiplier on the 24 fps clock      |
| className  | string   | none              | Extra class on the stage                     |

## Rebuild it

1. Lay out a 716-unit reference stage and scale it to the frame.
2. Place cards 201.92 by 349.09 units on a ring of radius 1837.36, spaced 0.1328
   rad.
3. View the ring through perspective 446.54 with origin (356.76, 197.99).
4. Drive the turn with the fitted ease-in, then continue at its hand-off speed.
5. Hold every picture for two frames; freeze clip playback on the same clock.
6. Render only the 10 cards nearest the lens each frame.
7. Clear a black veil over the first 9 reference frames.
8. Loop the clip list around the ring with modulo indexing.

## Pitfalls

- A plain linear turn from frame 0 loses the slow ceremonial entry.
- Smoothing across the two-frame holds removes the stepped look the reference
  has.
- A flat row of cards without the ring perspective reads as a filmstrip, not a
  wall.
- Clips shorter than the scene freeze on their last frame, so pass footage at
  least as long as the run.
