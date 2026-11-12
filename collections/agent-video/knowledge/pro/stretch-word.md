---
slug: stretch-word
title: Stretch Word
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 146 frames (2.43 s)
length_30fps: 73
palette: light #F8F8F4, dark none, accent none
used_in: none
---

# Stretch Word

> A word that stretches by repeating a letter, exits left, then hands off to a
> plain closing line.

## What it shows

"And more" sits centred, with "more" in blue. The letter "o" repeats and the
line grows wider each beat. The stretched line drags itself off the left edge
until only its tail remains. The frame clears. A second line "Starting with the
new snapcn app" builds word by word and slides back to centre.

## Timeline

| Phase      | Frames (30 fps) | What moves                                             | Curve                                    |
| ---------- | --------------- | ------------------------------------------------------ | ---------------------------------------- |
| Hold open  | 0-9             | "And more" sits centred                                | hold (observed)                          |
| Stretch    | 9-29            | "moore" grows to a long "moooo..." string, line widens | linear steps per added letter (observed) |
| Drag off   | 29-39           | Long line translates left out of frame                 | ease-in accelerating (inferred)          |
| Clear      | 39-44           | Frame sits empty                                       | hold (observed)                          |
| Rebuild    | 44-68           | Closing line arrives word by word and recentres        | ease-out per word (observed)             |
| Hold close | 68-73           | Full closing line sits centred                         | hold (observed)                          |

## Techniques

- `Stage`: flat off-white field with faint cool and warm washes (observed)
- `custom: repeat-stretch`: repeat one named letter inside the word, shifting
  the tail right (observed)
- `Camera`: horizontal pan carrying the over-wide line off the left edge
  (inferred)
- `SplitText`: closing line enters one word at a time with a centre slide
  (observed)

## Props to expose

| Prop         | Type   | Default                            | Purpose                                              |
| ------------ | ------ | ---------------------------------- | ---------------------------------------------------- |
| openLine     | string | "And more"                         | First line text (proposed)                           |
| stretchIndex | number | 5                                  | Letter position inside the word to repeat (proposed) |
| maxRepeats   | number | 22                                 | Extra copies of the letter at peak width (proposed)  |
| closeLine    | string | "Starting with the new snapcn app" | Second line text (proposed)                          |
| accentWord   | string | "more"                             | Word shown in accent before the stretch (proposed)   |

## Rebuild it

1. Set the `Stage` and centre the open line.
2. Repeat the chosen letter one copy every 2 frames until the line exceeds frame
   width.
3. Pan the `Camera` left so the line head exits first and the tail follows.
4. Clear the frame for 5 frames.
5. `SplitText` the closing line in word by word, sliding the block to centre as
   it grows.
6. Hold the closed line for 5 frames.

## Pitfalls

- Appending letters at the word end reads as a typo; the repeat must sit inside
  the word.
- Recentring per word without sliding the block makes words jump.
- Leaving the blue accent on after the stretch starts splits the gag.
