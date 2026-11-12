---
slug: guide-reel
title: Guide Reel
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 213 frames (3.55 s)
length_30fps: 107
palette: light #F8F4F4, dark #000400, accent #6999E5
used_in: none
---

# Guide Reel

> A fast montage card that flashes through sample scenes, then lands on a
> one-line registry promise. Use it as a trailer beat.

## What it shows

A soft blue-white wash fills the frame for the whole run. A small white card
sits in the centre and swaps its content about every half second. It shows a
billing line, a composer, a dark video player, a block cluster, a black player
card, a scene browser, a wordmark card, two charts, and a logo macro. The wash
then clears to plain white. A single centred line resolves to "100+ scenes one
registry" with a small mark, and holds.

## Timeline

| Phase  | Frames (30 fps) | What moves                                                                                         | Curve                         |
| ------ | --------------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| 0-1    | 0-1             | Wash holds; narrow billing bar sits centred at small scale                                         | hold (observed)               |
| 1-7    | 1-7             | Card grows slightly; content swaps to composer with send dot                                       | ease-out (inferred)           |
| 7-36   | 7-36            | Card swaps content every 6-8 frames: dark player, blocks, black card, scene browser, wordmark card | hold between swaps (observed) |
| 36-64  | 36-64           | Card keeps swapping: tally grid, scatter chart, logo macro; scale stays near constant              | hold between swaps (observed) |
| 64-71  | 64-71           | Card content clears; wash brightens toward white                                                   | linear (inferred)             |
| 71-79  | 71-79           | Frame wipes to white; line fragments slide in horizontally to centre                               | ease-out (inferred)           |
| 79-85  | 79-85           | Line resolves to "100+ scenes one registry"                                                        | hold (observed)               |
| 85-89  | 85-89           | Line holds still; small dot and chip pop beside "one"                                              | spring pop (inferred)         |
| 89-106 | 89-106          | Full line holds centred on white                                                                   | hold (observed)               |

## Techniques

- `Stage`: blue-white cloudy wash holds acts 1-3, then clears to flat white for
  the end card (observed)
- `Card`: one centred white card carries every montage vignette at near-constant
  size (observed)
- `TextSwap`: card content hard-swaps every 6-8 frames at 30 fps with no
  crossfade (observed)
- `AppScreen`: browser, tally grid, scatter chart and logo macro each fill the
  card as a mock screen (observed)
- `Reveal`: end line slides in horizontally from a cropped state into full
  legibility (inferred)
- `Lockup`: small dot plus chip joins the line as a trailing mark (observed)
- `Camera`: slow push holds the card centred while content swaps underneath
  (inferred)

## Props to expose

| Prop           | Type        | Default                    | Purpose                                          |
| -------------- | ----------- | -------------------------- | ------------------------------------------------ |
| scenes         | ReactNode[] | []                         | Card vignettes to cycle, in order (proposed)     |
| framesPerScene | number      | 7                          | Hold per vignette in frames at 30 fps (proposed) |
| endLine        | string      | "100+ scenes one registry" | Closing line on the white card (proposed)        |
| washFrom       | string      | "#F8F4F4"                  | Start wash colour (proposed)                     |
| washTo         | string      | "#FFFFFF"                  | End-card colour (proposed)                       |
| accent         | string      | "#6999E5"                  | Wash tint and chip colour (proposed)             |

## Rebuild it

1. Paint the `Stage` as a static blue-white wash at 960x540.
2. Place one centred `Card` at roughly one-third frame width; hold its rect
   fixed.
3. Hard-swap `AppScreen` content inside the card every 7 frames; add no fade.
4. Peak the swap rate mid-reel, matching energy peak in second 2.
5. At frame 71, fade the wash to white over 8 frames.
6. `Reveal` the end line horizontally from crop to full between frames 71
   and 79.
7. Pop the trailing dot and chip with a short spring around frame 87.
8. Hold the full line still to frame 106.

## Pitfalls

- Do not crossfade the vignettes; the film cuts hard between them.
- Do not move or rescale the card per vignette; only its content changes.
- Do not keep the blue wash under the end line; the last act is flat white.
- Do not rush the end hold; it runs about 20 frames at 30 fps.
