---
slug: font-shuffle
title: Font Shuffle
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 230 frames (3.83 s)
length_30fps: 115
palette: light #F4F4F0, dark #1C1C18, accent none
used_in: none
---

# Font Shuffle

> A launch line that decodes out of scrambled glyphs, flashes the accent, then
> tries its product name through eleven typefaces while stepping closer.

## What it shows

Fragments of oversized foreign glyphs flicker over a masked line for two frames,
then the full sentence lands in purple. The line settles from purple to ink and
holds. The second half of the line then swaps typeface every three to four
frames — mono, light, humanist, pixel, script, slab, condensed, italic,
blackletter, wide, grotesk — while the whole line grows from 1.03 to 1.25 times
its size about the frame centre. The grotesk form holds for a second and a half
to close.

## Timeline

| Phase  | Frames (30 fps) | What moves                                                           | Curve |
| ------ | --------------- | -------------------------------------------------------------------- | ----- |
| 0–1    | 0–1             | Scrambled decode: 8 of 24 characters plus 6 oversized foreign glyphs | hold  |
| 2–3    | 2–3             | Second decode state: 14 characters plus 2 foreign glyphs             | hold  |
| 4–6    | 4–6             | Full line in accent purple over two held beats                       | hold  |
| 7–31   | 7–31            | Line settles to ink and holds                                        | hold  |
| 32–68  | 32–68           | Subject swaps face every 3 to 4 frames; line zooms stepwise to 1.25x | hold  |
| 69–115 | 69–115          | Grotesk landing holds still                                          | hold  |

## Techniques

- `TextSwap`: the subject swaps eleven faces on hard frame boundaries with no
  tween; lead half stays serif throughout (source)
- `Camera`: the line scales 1.028x to 1.249x about the frame middle, one step
  per face swap (source)
- Scrambled glyphs persist across beats at measured offsets, sizes and weights
  over a per-character visibility mask (source)
- Fragments visible at frame 0, full purple line by frame 8, pixel face near
  frame 46, blackletter near frame 61, steady grotesk to the end (observed)

## Props to expose

| Prop    | Type                 | Default     | Purpose                                    |
| ------- | -------------------- | ----------- | ------------------------------------------ |
| lead    | string               | Introducing | Fixed half of the line, always serif       |
| subject | string               | snapcn Pro  | Half that cycles through typefaces         |
| accent  | string               | #9b8ed3     | Colour of the two landing beats before ink |
| theme   | Partial<SnapCnTheme> | —           | Design-system token overrides              |
| mode    | light \| dark        | light       | Theme selector                             |

## Rebuild it

1. Lay the line out centred on a 638 by 358 reference stage, measuring each beat
   with hidden SVG text.
2. Hold two glitch beats showing only the masked character indices with
   oversized extras anchored to reference positions.
3. Cut to the full line in accent for two beats, then to ink, resampling short
   lines through the 24-character reference mask.
4. Swap the subject face on frames 32, 35, 39, 43, 47, 51, 54, 58, 61, 65, 69
   with per-beat size, weight, tracking and gap.
5. Scale the whole line about the frame centre one step per swap, ending at
   1.249x.
6. Load all thirteen faces before measuring; fall back silently if one fails.
7. Hold the final grotesk beat to frame 115.

## Pitfalls

- Measuring with canvas instead of SVG text misses the optical-size axis and
  misplaces every beat.
- Tweening between faces smears the swaps; every beat is a held state that cuts.
- Rendering text without geometricPrecision re-snaps baselines and breaks the
  centre hold.
