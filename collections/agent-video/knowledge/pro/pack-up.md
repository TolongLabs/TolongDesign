---
slug: pack-up
title: Pack Up
tier: pro
category: text
evidence: film
demo: 1280x720 at 30 fps, 90 frames (3.0 s)
length_30fps: 90
palette: light #F8F8F4, dark #202020, accent #6FC7DC
used_in: none
---

# Pack Up

> A typed line that catches the light, breaks apart, and packs its last word
> into a carton.

## What it shows

"Ship the Launch" types itself one character a frame behind a steady caret. A
highlight crosses the finished line and the letters flash through the accent.
The leading words accelerate out of frame to the left while "Launch" holds, tips
forward, and drops toward an open carton swinging up from the bottom right. A
second copy of the word throws in to meet it. The flaps close over the word and
the box settles.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                  | Curve       |
| ----- | --------------- | --------------------------------------------------------------------------- | ----------- |
| 1     | 0–18            | Line types one character a frame with a non-blinking caret                  | linear      |
| 2     | 18–24           | Typing completes; "Ship the Launch" stands finished                         | linear      |
| 3     | 24–32           | Highlight crosses the line; letters push up through the accent              | ease-in-out |
| 4     | 32–44           | Leading words accelerate out left; "Launch" holds, rocks back, tips forward | ease-in     |
| 5     | 44–60           | Carton swings up from the bottom right; word copy throws in to meet it      | ease-out    |
| 6     | 60–90           | Flaps close over the word; box settles                                      | spring      |

## Techniques

- `Typewriter`: one character a frame with a steady `Caret` and a five-frame
  hold after the first word (observed)
- `Highlight`: a sweep crosses the line, pushing each letter through the accent
  (observed)
- `SplitText`: the line breaks; leading words exit left under constant
  acceleration while the last word stays (observed)
- `Camera`: carton swings up wider than the frame with exact flap paint order
  (observed)

## Props to expose

| Prop               | Type   | Default           | Purpose                                            |
| ------------------ | ------ | ----------------- | -------------------------------------------------- |
| line               | string | "Ship the Launch" | Typed sentence; last word gets packed (proposed)   |
| accent             | string | "#6FC7DC"         | Caret, highlight and arrival tint (proposed)       |
| boxTint            | string | mid grey          | Carton faces and flap shading (proposed)           |
| holdAfterFirstWord | number | 5                 | Frames of hold inside the typing rhythm (proposed) |

## Rebuild it

1. `Typewriter` the line one character a frame over frames 0–24 with a
   non-blinking `Caret`.
2. Sweep the `Highlight` across the finished line over frames 24–32.
3. Accelerate the leading words out left over frames 32–44; rock "Launch" back
   four frames, then tip it forward.
4. Swing the carton up from the bottom right to meet the falling word.
5. Throw the second copy of the word in from off frame so both land inside.
6. Pass the near flap in front and close the box over frames 60–90.

## Pitfalls

- Blinking the caret breaks the steady one-character-a-frame rhythm.
- Fading the highlight instead of pushing letters through the accent softens the
  flash.
- Exiting all words together removes the break; the last word must stay behind.
- Drawing flaps with flat layers scrambles paint order; the near flap passes in
  front of both word copies.
