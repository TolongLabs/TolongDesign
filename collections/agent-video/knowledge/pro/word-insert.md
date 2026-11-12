---
slug: word-insert
title: Word Insert
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 180 frames (3.0 s)
length_30fps: 90
palette: light #FCFCFC, dark none, accent none
used_in: none
---

# Word Insert

> A line that grows from its last word as each new word slips in ahead of it.

## What it shows

The word "data." sits centred and underlined on white. A new word slips in ahead
of it — "Just" — landing bold and dark, then settling to the line's ink while
the words left of it glide aside and the underline stretches to fit. The same
move repeats for "ask" and then "your". Every pose shakes slightly in stepped
stop motion until the finished line "Just ask your data." holds underlined.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                | Curve                         |
| ----- | --------------- | ------------------------------------------------------------------------- | ----------------------------- |
| 1     | 0–27            | "data." holds centred and underlined                                      | hold (observed)               |
| 2     | 27–55           | "ask" slips in ahead of "data.", lands bold, settles; underline stretches | stepped (observed)            |
| 3     | 55–90           | "your" slips in the same way; finished line holds underlined              | stepped, then hold (observed) |

## Techniques

- `Stage`: flat white paper, static throughout (observed)
- `SplitText`: each new word lands bold and dark, then cools to the line ink
  (observed)
- `LineDraw`: the underline stretches to fit the growing line (observed)
- `custom: stop-motion-shake`: every word holds stepped 12 fps poses with a
  small positional shake (observed)

## Props to expose

| Prop        | Type     | Default | Purpose                                                   |
| ----------- | -------- | ------- | --------------------------------------------------------- |
| anchorWord  | string   | —       | The last word the line grows from (proposed)              |
| insertWords | string[] | —       | Words slipped in ahead of the anchor, in order (proposed) |
| stepFrames  | number   | —       | Frames held per stop-motion pose (proposed)               |
| landBold    | boolean  | —       | Whether each word lands bold before settling (proposed)   |

## Rebuild it

1. Centre the anchor word with an underline (`LineDraw`) on a white `Stage`.
2. Slip each new word in directly ahead of the anchor with a `SplitText` land.
3. Land each word bold and dark, then settle it to the line ink over a few
   stepped poses.
4. Glide earlier words aside and stretch the underline to the new line width.
5. Shake every word slightly on stepped 12 fps holds (`stop-motion-shake`).
6. Hold the finished underlined line to frame 90.

## Pitfalls

- Animating smoothly instead of in stepped poses loses the stop-motion feel
  entirely.
- Reflowing the whole line instead of gliding words aside makes the anchor jump.
- Redrawing the underline from scratch each pose causes flicker; stretch one
  line.
