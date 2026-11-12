---
slug: find-yours
title: Find Yours
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 354 frames (5.9 s)
length_30fps: 177
palette: light #FCFCFC, dark none, accent none
used_in: none
---

# Find Yours

> A fixed headline beside a rolling list that rushes and brakes onto one answer.

## What it shows

"Find" rises, then "yours" joins it word by word on white. Beside it a list of
video types rolls up through a soft fade: slow at first, then a motion-blurred
rush, then a long brake onto "Launch Video" and "Transition". The film cuts hard
to the drifting name "snapcn", which gains a dot and then its domain, and holds
on "snapcn.dev".

## Timeline

| Phase | Frames (30 fps) | What moves                                                                        | Curve                               |
| ----- | --------------- | --------------------------------------------------------------------------------- | ----------------------------------- |
| 1     | 0–11            | "Find" rises, "yours" joins word by word                                          | ease-out (observed)                 |
| 2     | 11–106          | List rolls up through a soft fade: slow, blurred rush, long brake onto the answer | ease-in, then hard brake (observed) |
| 3     | 106–118         | Hard cut to the drifting name "snapcn"                                            | hard cut (observed)                 |
| 4     | 118–153         | Dot lands, then the domain types on                                               | ease-out (observed)                 |
| 5     | 153–177         | "snapcn.dev" holds                                                                | hold (observed)                     |

## Techniques

- `Stage`: flat white paper for the whole run (observed)
- `Reveal`: "Find yours" rising word by word (observed)
- `WordDrum`: vertical list rolling through a soft-faded slot beside the
  headline (observed)
- `MotionBlur`: directional blur along the list during the rush (observed)
- `TextSwap`: hard cut from the answer to the name, then dot and domain landing
  (observed)

## Props to expose

| Prop       | Type     | Default | Purpose                                          |
| ---------- | -------- | ------- | ------------------------------------------------ |
| headline   | string   | —       | Fixed headline words, rising in order (proposed) |
| options    | string[] | —       | List rows rolling through the slot (proposed)    |
| answer     | string   | —       | The row the list brakes onto (proposed)          |
| domain     | string   | —       | Domain appended after the hard cut (proposed)    |
| rushFrames | number   | —       | Frames of the motion-blurred rush (proposed)     |

## Rebuild it

1. `Reveal` the headline word by word on a white `Stage`.
2. Roll the options through a soft-faded `WordDrum` slot beside it.
3. Run the roll slow, then rush it under `MotionBlur`, then brake long onto the
   answer.
4. `hard cut` to the drifting name.
5. Land the dot, then the domain, and hold the full address to frame 177.

## Pitfalls

- Skipping the blur on the rush makes the fastest rows strobe instead of streak.
- Braking too short overshoots the answer row and spoils the landing.
- Recentring the headline when the list moves breaks the fixed-slot read.
