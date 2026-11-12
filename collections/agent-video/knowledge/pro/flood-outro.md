---
slug: flood-outro
title: Flood Outro
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 150 frames (2.5 s)
length_30fps: 75
palette: light #FCFCFC, dark none, accent #FE330F
used_in: none
---

# Flood Outro

> An end card where the lockup writes in over a wave, then a gradient floods the
> frame.

## What it shows

A warm wave washes across the bottom of a white frame. The mark fades up above
it and the wordmark writes in left to right, settling into a full-colour lockup
that holds. A blue-to-orange gradient then floods down from the top of the
frame. As it passes, each letter turns white in sequence until the whole lockup
sits knocked out on the gradient, and the film holds there.

## Timeline

| Phase | Frames (30 fps) | What moves                                                         | Curve               |
| ----- | --------------- | ------------------------------------------------------------------ | ------------------- |
| 1     | 0–17            | Warm wave washes in along the bottom, mark fades up                | ease-out (observed) |
| 2     | 17–31           | Wordmark writes left to right, full lockup holds                   | hold (observed)     |
| 3     | 31–50           | Blue-to-orange gradient floods down, letters turn white one by one | linear (observed)   |
| 4     | 50–75           | White lockup holds on the full gradient                            | hold (observed)     |

## Techniques

- `Stage`: white paper giving way to a full-frame gradient flood (observed)
- `Lockup`: mark plus wordmark assembling left to right over the wave (observed)
- `Reveal`: letters appearing in sequence during the write-in (observed)
- `TextSwap`: letters turning white one by one as the flood passes (inferred)

## Props to expose

| Prop        | Type      | Default | Purpose                                              |
| ----------- | --------- | ------- | ---------------------------------------------------- |
| mark        | string    | —       | Mark asset placed left of the wordmark (proposed)    |
| wordmark    | string    | —       | Brand name that writes in and knocks out (proposed)  |
| waveColors  | string[2] | —       | Warm wave gradient stops (proposed)                  |
| floodColors | string[2] | —       | Blue-to-orange flood gradient stops (proposed)       |
| floodFrames | number    | —       | Frames the flood takes to cover the frame (proposed) |

## Rebuild it

1. Open on a white `Stage` and wash the warm wave in along the bottom.
2. Fade the mark up, then `Reveal` the wordmark left to right into a settled
   `Lockup`.
3. Hold the full-colour lockup for about 14 frames.
4. Flood the blue-to-orange gradient down the frame on a linear clock.
5. Turn each letter white as the flood edge passes it, left to right.
6. Hold the knocked-out lockup on the gradient to frame 75.

## Pitfalls

- Fading the whole lockup white at once instead of letter by letter kills the
  flood read.
- A slow or eased flood edge looks like a dissolve; keep it linear and steady.
- Misplacing the wave lets the wordmark sit on bare white instead of over warm
  colour.
