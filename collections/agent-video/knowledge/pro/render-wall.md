---
slug: render-wall
title: Render Wall
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 84 frames (1.4 s)
length_30fps: 42
palette: light #FCFCFC, dark #202020, accent #355C95
used_in: none
---

# Render Wall

> Loose code that resolves into a wall of finished work and backs away, for
> it-renders closers.

## What it shows

Seventeen punctuation marks cycle for a blink, then hold around the centered
phrase "and ship". The marks fade as nine code fragments fade up over them. Five
saturated gradient plates land one after another, and each one's artwork washes
over it a beat later like a loading state. Then the whole wall shrinks and turns
about the stage center while every card stays upright, and the clip ends
mid-turn with the wall still receding.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                   | Curve             |
| ----- | --------------- | ---------------------------------------------------------------------------- | ----------------- |
| 1     | 0–14            | Punctuation marks cycle, hold, phrase centers                                | hold (observed)   |
| 2     | 14–20           | Marks fade out as code fragments fade up                                     | linear (observed) |
| 3     | 20–31           | Five gradient plates land staggered, artwork washing over each               | spring (inferred) |
| 4     | 31–42           | Wall shrinks toward 0.52 and turns 31 degrees, cards counter-rotated upright | linear (inferred) |

## Techniques

- `Stage`: pale field holding marks, code, and cards on one clock (observed)
- `Card`: gradient plates landing at full size with artwork cross-fading over
  each (observed)
- `Camera`: scale plus rotation about the exact stage center, ending mid-move
  (observed)
- `Reveal`: code fragments fading up as the marks fade out (observed)

## Props to expose

| Prop      | Type     | Default    | Purpose                                            |
| --------- | -------- | ---------- | -------------------------------------------------- |
| phrase    | string   | "and ship" | Line that never moves (proposed)                   |
| fragments | string[] | []         | Code lines fading up mid-scene (proposed)          |
| artworks  | string[] | []         | Finished pieces washing over the plates (proposed) |
| endScale  | number   | 0.52       | Wall scale when the clip ends (proposed)           |

## Rebuild it

1. Scatter the punctuation marks and hold the phrase centered.
2. Fade marks out while nine code fragments fade up.
3. Land five gradient plates at full size, staggered a frame apart.
4. Wash each artwork over its plate slightly after it lands.
5. Recede the wall about stage center with scale and rotation on measured
   tables.
6. Counter-rotate every card so each stays upright.
7. End mid-turn without arriving.

## Pitfalls

- Landing plates with a scale-in instead of at full size loses the deliberate
  loading-state read.
- Rotating the cards with the wall instead of counter-rotating them tilts every
  poster.
- Settling the wall at rest at the end kills the momentum; never arrive.
