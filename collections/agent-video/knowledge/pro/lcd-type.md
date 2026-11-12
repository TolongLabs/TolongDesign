---
slug: lcd-type
title: LCD Type
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 200 frames (3.33 s)
length_30fps: 100
palette: light #FCFCFC, dark #000000, accent none
used_in: none
---

# LCD Type

> A type specimen on a visible-pixel screen: a title exits upward, then lines
> type themselves word by word.

## What it shows

A giant title accelerates up and out of frame. A first line types itself a word
at a time until it reads "twenty-one components in React" and holds. The line
clears and a second line builds the same way to "one npx command". An RGB
subpixel grid and scanlines sit over everything, so the type reads as displayed
rather than drawn. The film ends on the finished line.

## Timeline

| Phase | Frames (30 fps) | What moves                                              | Curve    |
| ----- | --------------- | ------------------------------------------------------- | -------- |
| 1     | 0–9             | Title accelerates up and out of frame                   | ease-in  |
| 2     | 9–40            | First line types word by word while sliding slowly left | linear   |
| 3     | 40–53           | "twenty-one components in React" holds centred          | hold     |
| 4     | 53–60           | Line clears; "one" lands                                | ease-out |
| 5     | 60–68           | "one" holds                                             | hold     |
| 6     | 68–85           | "one npx command" types word by word                    | linear   |
| 7     | 85–100          | Finished line holds                                     | hold     |

## Techniques

- `Typewriter`: lines arrive a word at a time, each laid out at its finished
  width and revealed left to right (observed)
- `Camera`: slow leftward slide under the typing line; it never drifts from
  centre (observed)
- `Grid`: RGB subpixel grid plus scanlines applied to the whole frame, not the
  glyphs (observed)

## Props to expose

| Prop         | Type     | Default            | Purpose                                                       |
| ------------ | -------- | ------------------ | ------------------------------------------------------------- |
| title        | string   | "snapcn"           | Opening title that exits upward (proposed)                    |
| lines        | string[] | two observed lines | Lines typed word by word (proposed)                           |
| wordsPerBeat | number[] | measured table     | Words revealed per typing beat (proposed)                     |
| pixelScale   | number   | 1                  | Strength of the subpixel grid and scanline overlay (proposed) |

## Rebuild it

1. Fill a light `Stage` and set the giant title.
2. Drive the title up and out over frames 0–9 with an accelerating curve.
3. `Typewriter` the first line word by word over frames 9–40, sliding the line
   left as it grows.
4. Hold the finished line from frame 40 to 53.
5. Clear to "one" over frames 53–60 and hold to frame 68.
6. Type "one npx command" over frames 68–85 under the same slide.
7. Hold the finished line to frame 100 under the pixel overlay.

## Pitfalls

- Centring each prefix instead of the finished width makes the line creep
  sideways.
- Putting the pixel grid on the glyphs instead of the frame breaks the
  displayed-type read.
- Easing the word arrivals turns steady typing into surges.
- Skipping the mid holds leaves the viewer no time to read either line.
