---
slug: answer-highlight
title: Answer Highlight
tier: free
category: ai-input
evidence: source+film
demo: 960x540 at 60 fps, 380 frames (6.33 s)
length_30fps: 190
palette: light #F4F4F0, dark none, accent none
used_in: none
---

# Answer Highlight

> A question pill, an answer that writes itself, and a selection drag that
> settles on one word. Use it to quote the line that matters.

## What it shows

A question pill drops in over paper. The answer writes itself a word at a time,
one row after another. A caret lands mid-sentence and a tinted band drags across
one statement, wrapping the line break the way a real selection does. The band
rests, then deepens onto a single word while that word takes the accent. The
full answer holds with the statement tinted and the word picked out.

## Timeline

| Phase | Frames (30 fps) | What moves                                                          | Curve          |
| ----- | --------------- | ------------------------------------------------------------------- | -------------- |
| 1     | 0–11            | Question pill scales 1.31 to 1, blur clears                         | ease-out cubic |
| 2     | 18–82           | 36 answer words arrive, each rising 0.34 em and fading over 0.22 s  | ease-out cubic |
| 3     | 96–109          | Selection band drags across the 4-word statement at 0.11 s per word | linear         |
| 4     | 109–127         | Selection rests on the full statement                               | hold           |
| 5     | 127–133         | Picked-word band deepens and its ink mixes toward the accent        | ease-out cubic |
| 6     | 133–190         | Answer holds with statement tinted and word picked out              | hold           |

Rows above tagged (source), except the closing hold (observed).

## Techniques

- `Pill`: question pill, height 0.0553 of frame height, scale-in from 1.31
  (source)
- `SplitText`: per-word rise and fade staggered every 0.055 s (source)
- `Highlight`: band sweeping behind the statement with padded end caps (source)
- `Caret`: hard accent sliver, 0.06 of type size, leading the drag edge (source)
- `Reveal`: picked word band deepening over 0.2 s (source)

## Props to expose

| Prop          | Type   | Default                                   | Purpose                                   |
| ------------- | ------ | ----------------------------------------- | ----------------------------------------- |
| question      | string | "How should we structure the demo video?" | Text of the entry pill                    |
| answer        | string | built-in 36-word answer                   | Body copy that writes itself              |
| statement     | string | "keep the timeline declarative"           | Run the band selects, found by word match |
| word          | string | "declarative"                             | Word inside the statement to pick out     |
| questionHold  | number | 0.6                                       | Seconds before the answer starts          |
| wordStep      | number | 0.055                                     | Seconds per answer word                   |
| beforeDrag    | number | 0.45                                      | Pause between answer done and drag start  |
| dragStep      | number | 0.11                                      | Drag seconds per statement word           |
| beforeWord    | number | 0.6                                       | Pause between drag done and word pick     |
| paperColor    | string | theme background                          | Page ground                               |
| pillColor     | string | theme card                                | Question pill fill                        |
| questionColor | string | theme muted foreground                    | Question ink                              |
| answerColor   | string | theme foreground                          | Answer ink                                |
| accentColor   | string | theme primary                             | Selection tint and picked-word ink        |
| centerY       | number | 0.5                                       | Vertical anchor of the lockup             |
| fontFamily    | string | theme font                                | Typeface for pill and answer              |
| speed         | number | 1                                         | Time multiplier on the frame clock        |

## Rebuild it

1. Centre a lockup 0.6 frame widths wide; lay the pill above the answer block.
2. Enter the pill over 0.375 s from scale 1.31 with blur clearing in 0.2 s.
3. Emit answer words every `wordStep`, each rising 0.34 em over 0.22 s.
4. Locate the statement with a sliding word match, punctuation ignored.
5. Drag the band edge linearly at `dragStep` per word with a hard caret stop.
6. Rest, then deepen the picked word band from 0.16 to 0.30 alpha over 0.2 s.
7. Mix the picked word ink from foreground to accent on the same clock.

## Pitfalls

- The band is an alpha composite tint, not a mixed colour, or warm paper shifts
  green.
- Word gaps live in right padding so the band covers the space; trailing spaces
  in spans collapse.
- A statement that does not match selects nothing; a word outside the run is
  ignored.
- Scale pivots and band caps sit on whole rows only; fractional rows shimmer.
- One word is ever coloured during the write; two reads as a bug.
