---
slug: brand-wheel
title: Brand Wheel
tier: free
category: text
evidence: source
demo: none
length_30fps: 139
palette: light #FAF9F6, dark #0A0A0B, accent #3072DB
used_in: none
---

# Brand Wheel

> A lead word plus a rolling wheel of brand pills that stops on the last brand
> as a cursor clicks it. Use it to list where a product ships.

## What it shows

The lockup slides in from the right and settles. A lead word holds at the left
while a column of brand pills rolls through the slot, blurred above and below,
each row arriving sharp as it takes focus. A cursor glides in from the lower
right and parks on the pill. The wheel freezes just short of rest, the cursor
presses, and a ring answers the click. The line slides away and fades.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                         | Curve                                                |
| ----- | --------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1     | 0–21            | Lockup slides 38 px right of home into place                                                       | exponential settle, 0.8 remaining per frame (source) |
| 2     | 12–35           | First row holds, then the strip pulls away and the second row rests at frame 34.72                 | measured first-step table (source)                   |
| 3     | 35–114          | Wheel steps one 57.45 px pitch every 20 frames, creeping through the slot and rushing between rows | measured 20-frame step table (source)                |
| 4     | 79–94           | Cursor glides in from lower right and parks on the pill end                                        | measured position track (source)                     |
| 5     | 80–104          | Lockup draws in to 0.93 scale under the approaching cursor                                         | smoothstep (source)                                  |
| 6     | 111–121         | Cursor presses to 0.9 and releases; wheel freezes 1.12 frames early at frame 113.6                 | smoothstep (source)                                  |
| 7     | 114–131         | Click ring grows toward 12.5 px and fades from 0.06 alpha                                          | exponential growth, linear fade (source)             |
| 8     | 116–139         | Line slides away on a quadratic and fades over its last 5 frames                                   | accelerating slide, linear fade (source)             |

## Techniques

- `WordDrum`: one column of pills in a single grid cell, offset by pitch times
  travelled rows (source)
- `Pill`: brand pills with mark, label and hairline border, all one width set by
  the widest label (source)
- `MotionBlur`: off-focus rows blur 2.4 px and dim to 0.42 by a distance fade
  table (source)
- `Cursor`: scripted cursor on a measured track, pressing to 0.9 on the pill end
  (source)
- `Reveal`: lockup slides in on the settle table and draws in to 0.93 under the
  cursor (source)
- `custom: ClickRing`: ring answering the click, growing toward 12.5 px while
  fading out (source)

The stop frame for a reel of `n` rows:

```text
stop = 34.72 + 20 * (n - 2) - 1.12, duration = ceil(stop + 25.4)
```

## Props to expose

| Prop       | Type                 | Default                                                 | Purpose                                        |
| ---------- | -------------------- | ------------------------------------------------------- | ---------------------------------------------- |
| lead       | string               | "launch on"                                             | Word that never changes, in the accent         |
| items      | string               | "X, YouTube, LinkedIn, Instagram, TikTok, Product Hunt" | Reel top to bottom; rests on the last          |
| accent     | string               | theme primary                                           | Lead word ink                                  |
| cursor     | boolean              | true                                                    | Glide a cursor onto the last pill and click it |
| speed      | number               | 1                                                       | Time multiplier on the frame clock             |
| theme      | Partial<SnapCnTheme> | theme                                                   | Design-system token overrides                  |
| mode       | string               | "light"                                                 | Light or dark                                  |
| fontFamily | string               | Inter Tight                                             | Typeface for the lockup                        |

## Rebuild it

1. Lay out the scene on a 712 by 402 stage scaled by frame height; slot centre x
   360.875, y 196.43.
2. Stack every pill in one grid cell and offset the column by travelled rows
   times 57.45 px.
3. Hand focus to the incoming row at 0.36 of a pitch so each row arrives already
   sharp.
4. Fade and blur rows by the distance table; the focused row stays sharp and
   full opacity.
5. Slide the lockup in on the 38-to-0 settle table and draw it to 0.93 as the
   cursor nears.
6. Glide the cursor along its track, freeze the wheel 1.12 frames early, and
   press to 0.9.
7. Answer with the ring growing toward 12.5 px and fading by frame 17.4 past the
   stop.
8. Slide the line away on the quadratic from 2.4 past the stop and fade it over
   the last 5 frames.

## Pitfalls

- Swapping focus at the midpoint; the incoming row takes focus at 0.36 of a
  pitch.
- Easing steps with a named curve; the creep-then-rush shape needs the measured
  20-frame table.
- Stopping exactly on rest; the freeze lands 1.12 frames early while still
  creeping.
- Sizing pills per label; one grid cell keeps every row the same pill, so any
  copy fits.
- Drawing brand marks from memory; each mark has measured box, ink size and path
  data.
