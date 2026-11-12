---
slug: count-portal
title: Count Portal
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 232 frames (3.87 s)
length_30fps: 116
palette: light #F8F8F4, dark #141414, accent none
used_in: none
---

# Count Portal

> Words assemble one at a time, then slam through flipping light and dark acts
> into a 3-2-1 countdown.

## What it shows

Fragments land to spell "Ready?", then the words "Every frame is code" arrive
one per beat on black, each holding before the next lands. The word "code"
punches huge onto a paper act, cuts back to black small and shrinking, then the
numerals 3, 2 and 1 each slam in large on alternating acts and shrink away. A
vertical wipe splits the frame before the final "1" holds on paper.

## Timeline

| Phase       | Frames (30 fps) | What moves                                                      | Curve                            |
| ----------- | --------------- | --------------------------------------------------------------- | -------------------------------- |
| Fragments   | 0-7             | Letter fragments land and form "Ready?"                         | spring pop (inferred)            |
| Word build  | 7-46            | "Every", "frame", "is", "code" land one at a time, each holding | hold between pops (observed)     |
| Punch       | 46-53           | "code" holds, then hard cuts huge onto the paper act            | hard cut (observed)              |
| Shrink      | 53-71           | Dark "code" shrinks toward a point                              | ease-in (inferred)               |
| Three       | 71-87           | `act flip` to paper, "3" slams in and shrinks                   | hard cut then ease-in (observed) |
| Two         | 87-100          | `act flip` to ink, "2" slams in and shrinks                     | hard cut then ease-in (observed) |
| Wipe to one | 100-108         | Vertical wipe splits the frame, "1" lands on paper              | linear wipe (observed)           |
| Hold        | 108-116         | "1" rests on paper                                              | hold (observed)                  |

## Techniques

- `SplitText`: words of the sentence land one at a time with holds between
  (observed)
- `Stage`: six rapid `act flip` cuts alternate ink and paper behind the words
  (observed)
- `Reveal`: each word and numeral slams in large with a scale pop (observed)
- `Camera`: shrinking words read as a dolly falling away from the type
  (inferred)
- `CountUp`: discrete 3-2-1 numeral swaps, one numeral per act (observed)

## Props to expose

| Prop       | Type     | Default                            | Purpose                                          |
| ---------- | -------- | ---------------------------------- | ------------------------------------------------ |
| leadWords  | string[] | Ready? / Every / frame / is / code | Words landing before the countdown (proposed)    |
| countdown  | string[] | 3, 2, 1                            | Numerals after the flip sequence (proposed)      |
| punchScale | number   | 4                                  | Slam-in size multiple of resting type (proposed) |
| shrinkRate | number   | 0.9                                | Per-frame scale kept while shrinking (proposed)  |

## Rebuild it

1. Land letter fragments that assemble "Ready?" on the ink act.
2. Pop each lead word in with a scale spring and a full hold after it.
3. `hard cut` with an `act flip` to paper as "code" punches huge.
4. Cut back to ink and shrink the word toward a point.
5. Alternate acts for "3", "2" with a slam-in and shrink each.
6. Wipe vertically into paper and hold "1" to the end.

## Pitfalls

- Crossfading between acts instead of hard-cutting kills the portal snap.
- Shrinking words with an ease-out makes them stall instead of falling away.
- Landing two words on the same beat breaks the one-idea-per-beat rhythm.
- Forgetting to alternate acts turns the countdown into flat title cards.
