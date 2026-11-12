---
slug: word-wheel
title: Word Wheel
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 132 frames (2.2 s)
length_30fps: 66
palette: light #F4F4F0, dark none, accent none
used_in: none
---

# Word Wheel

> A word column spins like a slot reel behind a fixed lead-in and stops on one
> word. Use it to land a sentence on a chosen audience or option.

## What it shows

The lead-in holds the left of the line while a tall column of small grey words
rolls behind the slot. The column decelerates over about a second and three
quarters, rows growing as they near the slot and dimming with distance from it.
It comes to rest with one word at full size in ink, stepped left out of the
column to finish the sentence. The demo ends on that completed line at rest.

## Timeline

| Phase      | Frames (30 fps) | What moves                                                                                        | Curve                   |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| Pre-roll   | 0–5             | The reel sits static on the starting word before travel begins (source)                           | hold (source)           |
| Spin       | 5–20            | The column rolls fast on the measured roll table; rows take the slot within half a pitch (source) | measured table (source) |
| Decelerate | 20–55           | The roll decelerates over the table to rest, travelling 9 rows back to the start word (source)    | measured table (source) |
| Hold       | 55–66           | The completed sentence sits still; neighbours fade with distance (observed)                       | hold (observed)         |

## Techniques

- `WordDrum`: a column of comma-separated words cycles past a fixed slot,
  travelling 9 row pitches per run (source)
- `Reveal`: rows grow into the slot over 0.07 s on a cubic settle, lagging the
  half-pitch ownership change (source)
- `Highlight`: the owning row mixes from muted to ink by ownership share and
  steps 30.87 px left out of the column (source)
- `custom: distance-fade`: unselected rows fade by slot distance on a measured
  envelope that never reaches zero (source)
- `Camera`: the scene lays out in 638 by 354 reference pixels scaled by height,
  so renders match the measured grid (source)

## Props to expose

| Prop       | Type                 | Default         | Purpose                                                      |
| ---------- | -------------------- | --------------- | ------------------------------------------------------------ |
| headline   | string               | "snapcn for"    | Fixed lead-in holding the left of the line                   |
| words      | string               | 9-audience reel | Comma-separated reel, in order, starting on the resting word |
| spin       | number               | row count       | Rows travelled; the list length comes full circle            |
| theme      | Partial<SnapCnTheme> | —               | Design-token overrides                                       |
| mode       | "light" \| "dark"    | "light"         | Which theme base to paint from                               |
| fontFamily | string               | "Default"       | Face label; the design face is Jost                          |

## Rebuild it

1. Lay out in the 638 by 354 reference grid scaled by height: 34 px pitch, slot
   baseline 183.8, lead-in ink at 201.98.
2. Hang the reel off a zero-sized anchor at the end of the lead-in advance, with
   an 8.01 px gap and 30.87 px indent.
3. Drive travel on the measured roll table, never a fitted bezier or spring; it
   ends at 1.8417 s.
4. Give the slot to the nearest row within half a pitch, and grow it over 0.07 s
   so growth lags ownership.
5. Scale the selected word 1.665 times the rest about the baseline origin,
   mixing muted to ink.
6. Fade other rows by the distance envelope and cut the column at the frame, not
   the fade.

## Pitfalls

- Fitting a bezier or spring to the roll misses by whole rows; ship the measured
  table.
- Pivoting the selected scale anywhere but the baseline makes the word climb the
  pixel grid.
- Pinning the word x instead of a gap breaks the sentence when the lead-in
  changes length.
- Reaching zero fade at the column ends cuts words the frame should still show
  dimmed.
- Leaving hinting on re-snaps stems as rows scale and the column boils.
