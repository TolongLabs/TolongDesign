---
slug: glow-pullback
title: Glow Pullback
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 120 frames (2.0 s)
length_30fps: 60
palette: light #FCFCFC, dark #000000, accent none
used_in: none
---

# Glow Pullback

> A bold line revealed word by word as the camera pulls back from a tight
> closeup.

## What it shows

The frame starts tight on the first glyphs of "Calling". The camera pans right
along the word. A new word slides in out of blur and sharpens: "all". The camera
steps back. A third word arrives the same way: "builders". The camera settles
wide with the full line "Calling all builders" centred small. The line holds
still for the rest of the run.

## Timeline

| Phase | Frames (30 fps) | What moves                                                             | Curve               |
| ----- | --------------- | ---------------------------------------------------------------------- | ------------------- |
| 1     | 0–8             | Tight closeup; camera pans right along the first word                  | linear (observed)   |
| 2     | 8–16            | "all" slides in blurred, then sharpens; camera steps back              | ease-out (observed) |
| 3     | 16–28           | "builders" arrives blurred and sharpens; camera pulls to the full line | ease-out (observed) |
| 4     | 28–60           | Full line centred; no motion                                           | hold (observed)     |

## Techniques

- `Stage`: plain white paper, no tint (observed)
- `Camera`: close pan plus two stepped pullbacks, one per word (observed)
- `Reveal`: each new word enters from blur and resolves sharp (observed)
- `SplitText`: word-by-word stagger of the blur-in (inferred)
- `MotionBlur`: soft smear on the arriving words while the camera moves
  (inferred)

## Props to expose

| Prop       | Type     | Default                        | Purpose                                            |
| ---------- | -------- | ------------------------------ | -------------------------------------------------- |
| line       | string[] | ["Calling", "all", "builders"] | Words revealed one per pullback step (proposed)    |
| startScale | number   | 4                              | Camera closeness on the first glyph (proposed)     |
| blurIn     | number   | 8                              | Blur px on an arriving word (proposed)             |
| holdFrames | number   | 32                             | Still frames on the full line at 30 fps (proposed) |

## Rebuild it

1. Set the full line in bold type on a white `Stage`.
2. Park the `Camera` tight on the first glyph.
3. Pan right along the first word at constant speed.
4. Slide each next word in blurred, then resolve it sharp.
5. Step the camera back once per word until the line sits centred.
6. Hold the settled line for readability.

## Pitfalls

- Easing the pan instead of running it linear makes the read speed uneven.
- Resolving the blur before the camera lands leaves soft text on a sharp frame.
- Starting too wide removes the closeup-to-sentence effect.
