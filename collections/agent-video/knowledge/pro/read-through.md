---
slug: read-through
title: Read Through
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #FCFCFC, dark #20201C, accent #CB7D44
used_in: none
---

# Read Through

> An enormous sentence that reads itself a word at a time, for spoken-line
> captions.

## What it shows

Three huge lines span the frame: the middle line reads "The demo takes minutes,
not weeks." with grey lines above and below. The block pans left in eased steps.
Each step carries the next word to a fixed reading position. A word arrives in
warm accent and cools to ink as the pan carries it through. The finished words
sit dark while unread words ahead stay light. The full sentence holds at the
end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                | Curve                  |
| ----- | --------------- | ------------------------------------------------------------------------- | ---------------------- |
| 1     | 0–16            | First word centers at the reading position in accent, block settles       | ease-out (inferred)    |
| 2     | 16–110          | Block pans left in steps, each word arriving in accent and cooling to ink | ease-in-out (inferred) |
| 3     | 110–125         | "weeks." lands, cools, and the pan stops                                  | ease-out (observed)    |
| 4     | 125–150         | Full sentence holds                                                       | hold (observed)        |

## Techniques

- `Stage`: plain white field, type cropped by the frame edges (observed)
- `Camera`: stepped leftward pan with a hard brake into each word and a dwell
  between steps (observed)
- `SplitText`: per-word color handoff from accent arrival to ink once read
  (observed)
- `Highlight`: the word under the reading position carries the accent (observed)

## Props to expose

| Prop         | Type   | Default                              | Purpose                                             |
| ------------ | ------ | ------------------------------------ | --------------------------------------------------- |
| sentence     | string | "The demo takes minutes, not weeks." | Line that gets read (proposed)                      |
| contextAbove | string | ""                                   | Grey line rolling above the reading line (proposed) |
| contextBelow | string | ""                                   | Grey line rolling below the reading line (proposed) |
| accent       | string | "#CB7D44"                            | Color of the unread arrival word (proposed)         |
| stepFrames   | number | 18                                   | Frames per read step at 30 fps (proposed)           |

## Rebuild it

1. Stack three oversized lines with the reading line in the middle.
2. Fix a reading position near frame left-center.
3. Step the block left so each word in turn lands on the position.
4. Brake hard into each stop, dwell, then accelerate out.
5. Land each word in accent and ease it to ink as it passes through.
6. Keep the outer lines grey and cropped by the frame.
7. Hold the finished sentence 25 frames.

## Pitfalls

- A constant-speed pan reads as a marquee, not reading; brake into every word.
- Coloring more than one word accent at a time scrambles what is read and what
  is not.
- Reflowing the line mid-pan shifts every downstream word off its mark.
