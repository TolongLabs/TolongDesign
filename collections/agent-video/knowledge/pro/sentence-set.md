---
slug: sentence-set
title: Sentence Set
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 120 frames (2.0 s)
length_30fps: 60
palette: light #F0F0F0, dark none, accent none
used_in: none
---

# Sentence Set

> A centred sentence that sets itself one word at a time for a quiet title beat.

## What it shows

The frame opens on plain paper with one grey word. Each new word lands right of
the last and darkens to ink. The line breaks into two centred lines as it grows.
The full sentence "Make a demo that ships same day" holds still for the second
half. Nothing else moves.

## Timeline

| Phase       | Frames (30 fps) | What moves                                                       | Curve                              |
| ----------- | --------------- | ---------------------------------------------------------------- | ---------------------------------- |
| First word  | 0-1             | "Make" fades in grey, then turns ink                             | ease-out (observed)                |
| Word run    | 1-14            | "a", "demo" arrive right of place and settle left into ink       | ease-out, gaps widening (inferred) |
| Second line | 14-28           | "that", "ships", "same", "day" build the lower line the same way | ease-out, gaps widening (inferred) |
| Hold        | 28-60           | Full two-line sentence sits centred                              | hold (observed)                    |

## Techniques

- `Stage`: flat light paper field, no gradient or vignette (observed)
- `SplitText`: one settle per word, each word arriving grey and a few pixels
  right of its slot (observed)
- `Reveal`: each word ramps grey to ink while it closes the horizontal gap
  (inferred)

## Props to expose

| Prop         | Type     | Default                                | Purpose                                                     |
| ------------ | -------- | -------------------------------------- | ----------------------------------------------------------- |
| lines        | string[] | ["Make a demo", "that ships same day"] | Words to set, broken into lines (proposed)                  |
| arriveColor  | string   | "#9A9A9A"                              | Grey each word arrives in (proposed)                        |
| inkColor     | string   | "#111111"                              | Settled text colour (proposed)                              |
| gapSchedule  | number[] | [4, 6, 8, 12]                          | Frame gaps between words, widening down the line (proposed) |
| settleFrames | number   | 6                                      | Frames each word takes grey to ink (proposed)               |

## Rebuild it

1. Lay out the full sentence centred once at final width, so placed words never
   shift.
2. Hold the `Stage` empty for 1 frame, then start the word clock.
3. For each word, `Reveal` it 4 px right in grey.
4. Ease it to its slot over 6 frames while ramping grey to ink.
5. Double the gap before each later word so the rhythm decelerates into the last
   word.
6. Break to the second line at the same centred anchor.
7. Hold the finished block still for 30 frames.

## Pitfalls

- Re-centring the line after each word makes set words slide sideways.
- Keeping even gaps kills the rush-then-land rhythm.
- Arriving in ink instead of grey removes the reading order cue.
