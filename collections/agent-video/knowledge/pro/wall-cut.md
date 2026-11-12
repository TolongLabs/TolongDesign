---
slug: wall-cut
title: Wall Cut
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 180 frames (3.0 s)
length_30fps: 90
palette: light #F4FCFC, dark #000408, accent #354B67
used_in: none
---

# Wall Cut

> A sentence warms up on an LED wall, then a travelling band of light carries it
> into a wide shot.

## What it shows

White type reads on near-black. "Your" fades up deep blue, "demo" joins it, and
both warm to full white in reading order. A soft band of light crosses the frame
left to right, and the panel's dot grid rises inside the band as it passes. On
the frame the band reaches the middle, the picture cuts wide: the same band
keeps travelling, and the whole sentence sits small and centered. The closing
words type on with "tonight" landing in steel blue, and the finished line holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                 | Curve               |
| ----- | --------------- | -------------------------------------------------------------------------- | ------------------- |
| Rise  | 0–6             | "Your" fades up deep blue; "demo" arrives beside it                        | ease-out (observed) |
| Warm  | 6–18            | Both words warm blue to white and hold full bright                         | ease-out (observed) |
| Sweep | 18–27           | The band of light crosses left to right; the dot grid rises inside it      | linear (observed)   |
| Wide  | 27–36           | match cut to the wide wall; the small line types on with "tonight" in blue | linear (observed)   |
| Hold  | 36–90           | The full "Your demo ships tonight" rests while the band clears             | hold (observed)     |

## Techniques

- `Stage`: near-black ink field throughout (observed)
- `Reveal`: words fade up from deep blue (observed)
- `Halftone`: the LED dot grid rises inside the travelling band (observed)
- `custom: band-sweep`: a soft light band crosses the frame and lifts hidden
  detail where it passes (observed)
- `Typewriter`: the closing words type on in the wide shot (observed)

## Props to expose

| Prop        | Type   | Default                   | Purpose                                             |
| ----------- | ------ | ------------------------- | --------------------------------------------------- |
| sentence    | string | "Your demo ships tonight" | Line read across both shots (proposed)              |
| accent      | string | "#354B67"                 | Arrival blue for new words and "tonight" (proposed) |
| bandWidth   | number | 320                       | Width of the travelling light band in px (proposed) |
| gridPitch   | number | 8                         | Spacing of the LED dot grid in px (proposed)        |
| sweepFrames | number | 18                        | Frames for the band to cross at 30 fps (proposed)   |

## Rebuild it

1. Open on an ink `Stage`; `Reveal` "Your", then "demo", from deep blue.
2. Warm both words to white in reading order.
3. Sweep the custom band across; raise the `Halftone` grid only inside it.
4. `match cut` wide on the band's middle frame and keep the band travelling.
5. `Typewriter` the closing words small and centered; land "tonight" in accent.
6. Clear the band and hold the finished line.

## Pitfalls

- Warming both words at once; they warm in reading order.
- Leaving the grid on everywhere; it only exists inside the band.
- Cutting late; the cut lands exactly as the band reaches the middle.
- Setting "tonight" white; it stays blue.
