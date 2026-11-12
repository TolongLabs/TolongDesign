---
slug: slam-type
title: Slam Type
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 104 frames (1.73 s)
length_30fps: 52
palette: light none, dark #000000, accent #DD6F31
used_in: none
---

# Slam Type

> Three gradient words slam in, each larger than the last, on black.

## What it shows

The word "EVERY" sits small in orange gradient on black and holds. It swaps to
"FRAME" at roughly twice the size, which settles as a warm sheen drifts across
its letters. It swaps again to "CODE" larger still, filling most of the frame
width. The gradient glows brightest mid-word and cools toward the edges. The
film ends on "CODE" holding.

## Timeline

| Phase         | Frames (30 fps) | What moves                                      | Curve               |
| ------------- | --------------- | ----------------------------------------------- | ------------------- |
| EVERY holds   | 0-17            | Small orange word sits still                    | hold (observed)     |
| Slam to FRAME | 17-18           | Word swaps to a much larger "FRAME" in one beat | hard cut (observed) |
| FRAME settles | 18-35           | Large word rests while its sheen drifts         | hold (observed)     |
| Slam to CODE  | 35-36           | Word swaps to the largest "CODE" in one beat    | hard cut (observed) |
| CODE holds    | 36-52           | Full-width word rests with gradient breathing   | hold (observed)     |

## Techniques

- `Stage`: single ink act for the whole run (observed)
- `Reveal`: each word slams in larger than the last with no overlap (observed)
- `TextSwap`: three words swap on hard cuts, growing in size each time
  (observed)
- `GlyphGlow`: warm sheen drifts across the letterforms while each word holds
  (observed)

## Props to expose

| Prop         | Type     | Default               | Purpose                                            |
| ------------ | -------- | --------------------- | -------------------------------------------------- |
| words        | string[] | EVERY, FRAME, CODE    | The three slamming words (proposed)                |
| sizes        | number[] | small, large, largest | Resting scale per word (proposed)                  |
| gradientFrom | string   | #DD6F31               | Hot edge of the word gradient (proposed)           |
| gradientTo   | string   | #F5D9B8               | Cool edge of the word gradient (proposed)          |
| holdFrames   | number   | 17                    | Still frames before each swap at 30 fps (proposed) |

## Rebuild it

1. Set the ink `Stage` and center the small first word.
2. Hold it fully still for 17 frames.
3. Swap to the second word at double size on a single frame.
4. Rest it while a highlight drifts across the glyphs.
5. Swap to the third word larger still on a single frame.
6. Hold the final word with a slow gradient breathe to the end.

## Pitfalls

- Scaling between words instead of cutting turns slams into zooms.
- Shrinking any step breaks the every-word-bigger promise.
- Animating the gradient too fast makes the hold feel unstable.
- Centering each word differently makes the swaps jump sideways.
