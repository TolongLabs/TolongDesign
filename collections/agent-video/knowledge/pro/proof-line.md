---
slug: proof-line
title: Proof Line
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 94 frames (1.57 s)
length_30fps: 47
palette: light #E8E8E4, dark #141414, accent #689BE8
used_in: none
---

# Proof Line

> Five shipped cards that collapse one by one into the sentence they prove, for
> proof beats.

## What it shows

Five dark cards rest on a light stage around a small grid, each labeled with a
demo name. The camera dips slightly, then pushes. One by one each card slides
away, and on the next frame a small blue square stands exactly where it was.
Each square travels to its slot in a headline and becomes a word. When the last
one lands, "Turn your product into video" is complete, the stage is empty, and
the line holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                       | Curve                  |
| ----- | --------------- | -------------------------------------------------------------------------------- | ---------------------- |
| 1     | 0–21            | Cards rest on stage, camera dips then starts its push                            | ease-in-out (inferred) |
| 2     | 21–38           | Cards slide away one by one, squares stand in and fly to the headline, words set | linear (observed)      |
| 3     | 38–44           | Last square lands and the sentence completes                                     | ease-out (observed)    |
| 4     | 44–47           | Full line holds over the empty stage                                             | hold (observed)        |

## Techniques

- `Stage`: light field with dark cards, one scale about a single pivot for
  camera and headline (observed)
- `Card`: demo cards that slide off, each replaced by a square on the very next
  frame (observed)
- `Camera`: dip from 1.000 to 0.978, then push to 1.372 about the shared pivot
  (inferred)
- `SplitText`: headline words arriving one at a time, each landing in accent and
  cooling to ink (observed)
- `custom: SquareHandoff`: a card hard-cuts to a colored square that travels and
  hard-cuts into a word (observed)

## Props to expose

| Prop       | Type                           | Default                                  | Purpose                                       |
| ---------- | ------------------------------ | ---------------------------------------- | --------------------------------------------- |
| cards      | {label: string, art: string}[] | []                                       | The five demo cards on stage (proposed)       |
| headline   | string[]                       | ["Turn","your","product","into","video"] | Words the squares become (proposed)           |
| tokenColor | string                         | "#689BE8"                                | Fill of the traveling squares (proposed)      |
| pushEnd    | number                         | 1.372                                    | Final camera scale about the pivot (proposed) |

## Rebuild it

1. Lay five `Card` elements on the light `Stage`.
2. Dip the camera to 0.978, then push toward 1.372 about one pivot.
3. Slide each card off and stand a square on its footprint on the next frame.
4. Fly each square to its headline slot and cut it into the word.
5. Set each word in accent, cooling to ink behind the arrival.
6. Clear the last card, complete the sentence, and hold.

## Pitfalls

- Cross-fading any handover turns a substitution into a dissolve; every swap is
  a hard cut.
- Letting the headline drift off the camera pivot breaks the single-scale read.
- Skipping the opening dip makes the push feel flat instead of launched.
