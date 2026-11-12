---
slug: column-cut
title: Column Cut
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 106 frames (1.77 s)
length_30fps: 53
palette: light #FCFCFC, dark #000000, accent #66A3F7
used_in: none
---

# Column Cut

> A highlighted slogan that cuts to a jumping image column framed by a closing
> sentence.

## What it shows

Four stacked lines read "YOUR DEMO" over "SHIPS TODAY" with a small square
cursor beside the third line. A blue highlight runs across that line letter by
letter while the type drifts up. The frame cuts to a tall column of product
pictures. The strip jumps upward one picture per beat. The sentence "The ones
who ship" sets word by word on either side of the column. The whole frame pans
left, faster and faster, to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                         | Curve              |
| ----- | --------------- | ------------------------------------------------------------------ | ------------------ |
| 1     | 0–4             | Four-line cascade holds with the square cursor                     | hold (observed)    |
| 2     | 4–14            | Highlight crosses the line letter by letter; type drifts up        | linear (observed)  |
| 3     | 14–35           | Hard cut to the image column; the strip jumps one picture per beat | linear (observed)  |
| 4     | 35–53           | Side sentence sets; the frame pans left and accelerates            | ease-in (observed) |

## Techniques

- `Stage`: white paper throughout both shots (observed)
- `Cursor`: small square block parked beside the third line (observed)
- `Highlight`: blue band crossing one line letter by letter (observed)
- `SplitText`: per-letter sweep of the highlight (inferred)
- `Collage`: tall column of pictures jumping one image per beat (observed)
- `TextSwap`: side words "The ones who ship" landing one at a time (observed)
- `Camera`: leftward pan that accelerates to the end (observed)

## Props to expose

| Prop           | Type     | Default                            | Purpose                                          |
| -------------- | -------- | ---------------------------------- | ------------------------------------------------ |
| lines          | string[] | ["YOUR", "DEMO", "SHIPS", "TODAY"] | Cascade lines before the cut (proposed)          |
| highlightLine  | number   | 2                                  | Index of the line the band crosses (proposed)    |
| highlightColor | string   | "#66A3F7"                          | Band colour (proposed)                           |
| images         | string[] | []                                 | Picture URLs stacked in the column (proposed)    |
| sideLine       | string[] | ["The", "ones", "who", "ship"]     | Words set beside the column (proposed)           |
| beatsPerImage  | number[] | [5, 5, 4, 4]                       | Frames per jump at 30 fps, tightening (proposed) |

## Rebuild it

1. Stack the four lines with the square `Cursor` beside the target line.
2. Run the `Highlight` across that line letter by letter while drifting the type
   up.
3. `hard cut` to the `Collage` column.
4. Jump the strip one image per beat on the beat table.
5. Land the side words with `TextSwap`.
6. Pan the `Camera` left with rising velocity to the end.

## Pitfalls

- Fading between the shots instead of a hard cut softens the snap.
- Jumping at even beats removes the tightening rhythm.
- A cursor that blinks reads as text editing; it must sit still.
