---
slug: echo-stack
title: Echo Stack
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 102 frames (1.7 s)
length_30fps: 51
palette: light #FCFCFC, dark none, accent #2F72DC
used_in: none
---

# Echo Stack

> One word with fading copies of itself stacked above and below in clipped
> windows.

## What it shows

The word "snapcn" sits white on flat blue. Copies of the word open out behind
it, above and below, each clipped to its own horizontal window and fading with
distance. The stack eases back as one move on the flat field. The full stack
holds to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                | Curve               |
| ----- | --------------- | ------------------------------------------------------------------------- | ------------------- |
| 1     | 0–14            | Word holds alone on flat blue                                             | hold (observed)     |
| 2     | 14–34           | Echo copies open out above and below in clipped windows, stack eases back | ease-out (observed) |
| 3     | 34–51           | Full echo stack holds                                                     | hold (observed)     |

## Techniques

- `Stage`: flat blue field, static throughout (observed)
- `Reveal`: echo copies opening out from behind the word into clipped windows
  (observed)
- `Camera`: single ease-back of the whole stack (inferred)
- `custom: echo-windows`: copies stacked vertically in hard-clipped bands,
  fading with distance (observed)

## Props to expose

| Prop     | Type   | Default | Purpose                                             |
| -------- | ------ | ------- | --------------------------------------------------- |
| word     | string | —       | The word and its echoes (proposed)                  |
| echoes   | number | —       | Copy count above and below the word (proposed)      |
| fadeStep | number | —       | Opacity drop per step away from the word (proposed) |
| pushBack | number | —       | Stack scale-back over the move (proposed)           |

## Rebuild it

1. Set a flat blue `Stage` with the word centred in white.
2. `Reveal` echo copies outward above and below into hard-clipped
   `echo-windows`.
3. Fade each copy by its distance from the centre word.
4. Ease the whole stack back on one `Camera` move.
5. Hold the full stack to frame 51.

## Pitfalls

- Soft window edges instead of hard clips turn the echoes into a blur stack.
- Fading all echoes equally flattens the depth; step opacity with distance.
- Scaling the word and echoes separately breaks the single-move read.
