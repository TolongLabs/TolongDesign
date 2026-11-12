---
slug: trend-type
title: Trend Type
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 175 frames (2.92 s)
length_30fps: 88
palette: light #FCFCFC, dark #0C0C0C, accent none
used_in: none
---

# Trend Type

> A headline that types itself while the camera trails the caret and a wave runs
> ahead of the words.

## What it shows

White type writes itself on a near-black field under a block caret. The camera
slides left to keep the caret framed as the line outgrows the frame. A grey wave
with a white head dot runs below the words and leads them. Already-typed words
arrive grey and fill to white behind the caret. The finished line reads "Ship
your launch video in minutes not weeks" and holds over the settled wave.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                            | Curve  |
| ----- | --------------- | ------------------------------------------------------------------------------------- | ------ |
| 1     | 0–6             | "Ship you" holds; the caret arrives; the wave head enters low                         | hold   |
| 2     | 6–23            | "your launch" types; the camera pans left after the caret; the wave runs ahead        | linear |
| 3     | 23–41           | "video in min" types; grey words fill to white behind the caret                       | linear |
| 4     | 41–58           | "utes" completes "minutes"; the camera keeps tracking; the wave crests under the line | linear |
| 5     | 58–76           | "not weeks" types; the caret rides the typing edge                                    | linear |
| 6     | 76–87           | The full line holds; the wave settles below it                                        | hold   |

## Techniques

- `Stage`: near-black ink field with faint drifting glows (observed)
- `Camera`: lateral pan that trails the caret with a lag (observed)
- `Typewriter`: the headline keys in at a fixed rate (observed)
- `Caret`: block bar riding the typing edge (observed)
- `LineDraw`: grey wave with a white head dot running ahead of the words
  (observed)
- `GlyphGlow`: typed words arrive grey and fill to white; faint glow drifts over
  the field (observed)

## Props to expose

| Prop        | Type   | Default                                       | Purpose                                              |
| ----------- | ------ | --------------------------------------------- | ---------------------------------------------------- |
| text        | string | "Ship your launch video in minutes not weeks" | Sentence the typing completes (proposed)             |
| dimColor    | string | "#8A8A8A"                                     | Colour of unfilled words (proposed)                  |
| caretWidth  | number | 6                                             | Width of the block caret in px (proposed)            |
| waveColor   | string | "#9A9A9A"                                     | Colour of the running wave (proposed)                |
| trackingLag | number | 4                                             | Frames the camera trails behind the caret (proposed) |

## Rebuild it

1. Lay an ink `Stage` with the headline parked right of centre.
2. Start a `Typewriter` with a block `Caret` at a fixed rate.
3. Pan the `Camera` left on a lag so the caret never leaves frame.
4. Draw the `LineDraw` wave ahead of the words with its white head dot.
5. Fill each word from grey to white with `GlyphGlow` once typed.
6. Close on the full line and settle the wave into a hold.

## Pitfalls

- Panning locked to the caret removes the lag and the shot feels rigid.
- Filling words at keystroke time instead of behind the caret kills the wave
  read.
- A wave that touches the baseline tangles with descenders.
- Centring the finished line instead of holding the tracked framing jumps the
  cut.
