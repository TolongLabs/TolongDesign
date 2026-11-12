---
slug: drop-line
title: Drop Line
tier: free
category: text
evidence: source
demo: 1280x720 at 30 fps, 38 frames (1.27 s)
length_30fps: 38
palette: light none, dark none, accent none
used_in: none
---

# Drop Line

> One word per card on an ink field; the last word sinks away from under its own
> dotted letter.

## What it shows

A single bold word sits centred on a flat ink card. The next word hard-cuts in
over it, and the next, each holding its card for less than a second. On the last
card the word begins to sink. The body of every dotted letter slides down while
its dot stays pinned, so the sentence ends on one mark hanging alone. A last
word with no dotted letter simply drops whole.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                       | Curve |
| ----- | --------------- | -------------------------------------------------------------------------------- | ----- |
| 0–8   | 0–8             | First card; the word lands 70 px low and rises to rest over 9 samples            | hold  |
| 9–22  | 9–22            | Middle cards hard-cut in every 7 frames and hold still                           | hold  |
| 23–37 | 23–37           | Last card; the word sinks 0 to 51.55 px over 15 samples while each dot stays put | hold  |

## Techniques

- `Stage`: one flat ink card fills the frame behind every word (source)
- `Reveal`: each word hard-cuts onto its card; the first rises from 70 px below
  rest (source)
- `custom: dot-hold`: two clip paths split dotted glyphs at 0.585 em above the
  baseline, so stems sink and dots hang (source)
- Resting type sits half-pixel sharp by painting two rows blended with
  plus-lighter (source)

## Props to expose

| Prop         | Type                 | Default                          | Purpose                                         |
| ------------ | -------------------- | -------------------------------- | ----------------------------------------------- |
| words        | string[]             | ["then", "ships", "the", "film"] | One word per card; the last one drops           |
| fontFamily   | string               | Inter                            | Face for every card                             |
| fontWeight   | number               | 700                              | Weight for every card                           |
| fontSize     | number               | 130                              | Type size on a 1920 by 1080 stage               |
| wordSize     | number[]             | —                                | Per-word size for faces that set wide or narrow |
| wordNudge    | number[]             | —                                | Per-word horizontal nudge in stage px           |
| wordTracking | number[]             | —                                | Per-word tracking in em                         |
| wordKerning  | number[][]           | —                                | Per-letter offsets per word in em               |
| ink          | string               | theme foreground                 | The card colour                                 |
| paper        | string               | theme background                 | The type colour                                 |
| speed        | number               | 1                                | Time multiplier                                 |
| theme        | Partial<SnapCnTheme> | —                                | Design-system token overrides                   |
| mode         | light \| dark        | —                                | Theme selector                                  |

## Rebuild it

1. Draw a 1920 by 1080 stage and scale it to cover the frame.
2. Cut to word `i` at frame 0, 9, 16, 23 for four words; hold the last 15 frames
   (38 total).
3. Offset the first word down by the 9-sample rise table and settle to the 574.5
   px baseline.
4. Shrink any word wider than 90 percent of the stage to fit.
5. On the last card, sink dotted stems by the 15-sample drop table ending at
   51.55 px.
6. Split dotted glyphs with two clips meeting between x-height and dot, 0.585 em
   above the baseline.
7. Render the sinking line as two plus-lighter copies straddling the fractional
   row.

## Pitfalls

- Rounding the sink to whole pixels turns the drop into a staircase; blend two
  rows instead.
- Guessing the dot split per face clips stems; measure x-height and dot top off
  the loaded face.
- Animating the drop with an easing curve breaks the measured 15-sample fall.
