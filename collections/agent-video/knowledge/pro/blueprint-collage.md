---
slug: blueprint-collage
title: Blueprint Collage
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 112 frames (1.87 s)
length_30fps: 56
palette: light #F8F8E4, dark #0C1410, accent #C83523
used_in: none
---

# Blueprint Collage

> A headline that cycles three phrases while pictures hop around it in stop
> motion.

## What it shows

Five pictures and a blue disc hop around a headline in stepped stop-motion poses
on grey paper. The headline reads "Animating", then swaps to "Perfecting your".
The camera eases back the whole time. The pictures clear away one by one until
only the word "Launch" is left, cooling from blue to ink, and the film holds on
it.

## Timeline

| Phase | Frames (30 fps) | What moves                                                             | Curve                            |
| ----- | --------------- | ---------------------------------------------------------------------- | -------------------------------- |
| 1     | 0–4             | Pictures slide in from the frame edges around "Animating"              | ease-out (inferred)              |
| 2     | 4–22            | Pictures and disc hop pose to pose in stepped stops, camera eases back | stepped hold per pose (observed) |
| 3     | 22–37           | Headline swaps to "Perfecting your", hopping continues                 | hard cut (observed)              |
| 4     | 37–44           | Pictures clear away one by one, last phrase fades from accent to ink   | ease-out (observed)              |
| 5     | 44–56           | "Launch" alone holds on paper                                          | hold (observed)                  |

## Techniques

- `Stage`: flat warm-grey paper for the whole run (observed)
- `Collage`: five pictures plus a blue disc arranged around the headline
  (observed)
- `TextSwap`: headline cycles "Animating" to "Perfecting your" to "Launch"
  (observed)
- `Camera`: slow ease-back across the full run (inferred)
- `custom: stop-motion`: poses update in stepped 15 fps holds with a small shake
  on each pose (observed)

## Props to expose

| Prop       | Type      | Default | Purpose                                        |
| ---------- | --------- | ------- | ---------------------------------------------- |
| phrases    | string[3] | —       | The three headline phrases in order (proposed) |
| images     | string[5] | —       | The five hopping pictures (proposed)           |
| discColor  | string    | —       | Fill of the hopping disc (proposed)            |
| stepFrames | number    | —       | Frames held per stop-motion pose (proposed)    |
| pullback   | number    | —       | Total camera ease-back over the run (proposed) |

## Rebuild it

1. Lay a warm-grey `Stage` and centre the first headline phrase on it.
2. Place the `Collage` of five pictures and one disc around the line.
3. Advance every picture through fitted poses in stepped `stop-motion` holds,
   about 15 poses per second.
4. Ease the `Camera` back across the full 56 frames.
5. `TextSwap` the headline at the measured beats, shifting accent to ink on the
   last phrase.
6. Clear the pictures away one by one and hold "Launch" alone to the end.

## Pitfalls

- Smoothing the hops with easing destroys the stop-motion read; hold each pose
  flat.
- Letting pictures overlap the headline hurts legibility at small sizes.
- Cutting the camera move early makes the final hold feel frozen rather than
  settled.
