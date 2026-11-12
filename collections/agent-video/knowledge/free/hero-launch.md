---
slug: hero-launch
title: Product Hero
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 340 frames (5.67 s)
length_30fps: 170
palette: light #ECECEC, dark #040808, accent #814B33
used_in: none
---

# Product Hero

> Two media cards slide into a symmetric formation as the headline reveals above
> them.

## What it shows

One full-screen card fades up from black, then recedes and angles back about its
inner edge. A second card slides in from the right until the two sit symmetric
about the frame centre with an even gap. The pair breathes almost imperceptibly
while edge vignettes dissolve the borders into black. Both cards fall away off
the bottom together as the headline rises from a blur and settles sharp above
them.

## Timeline

| Phase   | Frames (30 fps) | What moves                                                                 | Curve                     |
| ------- | --------------- | -------------------------------------------------------------------------- | ------------------------- |
| 2–12    | 2–12            | Left card fades in full-screen                                             | linear                    |
| 40–70   | 40–70           | Left card recedes 1.5x to 1x and tilts to −17 degrees about its inner edge | bezier (0.22, 1, 0.36, 1) |
| 60–100  | 60–100          | Right card slides from 1.08 frame widths to its symmetric rest             | bezier (0.22, 1, 0.36, 1) |
| 94–122  | 94–122          | Settled pair floats on a 3.5 px sine                                       | hold                      |
| 122–156 | 122–156         | Both cards fall off the bottom edge together                               | bezier (0.5, 0, 0.9, 0.4) |
| 126–166 | 126–166         | Headline rises 40 px, scales 0.82 to 1, unblurs 10 to 0 px                 | bezier (0.22, 1, 0.36, 1) |

## Techniques

- `Card`: two 1000 by 620 media cards with 30 px radius, drop shadow, hairline
  ring, lower shade and top sheen (source)
- `Camera`: the opening is a 1.5x to 1x scale about the centre; cards tilt in
  perspective 1000 with rotateY only, pivoted on inner edges (source)
- `Reveal`: the right card slides in from off-frame right; the headline blurs in
  from 10 px with rise and scale (source)
- `custom: edge-dissolve`: left, right and bottom gradients fade in over frames
  50 to 90, dissolving card edges into black (source)
- Dark opening, cards flanking a headline by frame 57, command line on top from
  frame 136, cards gone by the end (observed)

## Props to expose

| Prop       | Type                 | Default                | Purpose                                            |
| ---------- | -------------------- | ---------------------- | -------------------------------------------------- |
| heading    | string               | npx shadcn add @snapcn | Headline revealed above the cards                  |
| image1     | string               | showcase mp4 URL       | Left card media: image, video, or linear-gradient  |
| image2     | string               | showcase mp4 URL       | Right card media: image, video, or linear-gradient |
| theme      | Partial<SnapCnTheme> | —                      | Design-system token overrides                      |
| mode       | light \| dark        | dark                   | Theme selector; the scene is lit for dark          |
| fontFamily | string               | Inter                  | Face for the headline                              |

## Rebuild it

1. Fade the left card in over frames 2 to 12 at 1.5x scale on a dark stage.
2. Recede it to 1x over frames 40 to 70 while tilting to −17 degrees rotateY
   about its right edge.
3. Slide the right card from 1.08 frame widths to its rest over frames 60 to
   100, pre-tilted 17 degrees about its left edge with a 92 px gap.
4. Fade the three edge gradients in over frames 50 to 90.
5. Float the settled pair on a 3.5 px sine from frame 94, fading out into the
   drop.
6. Drop both cards off the bottom over frames 122 to 156 on the accelerating
   curve.
7. Reveal the headline over frames 126 to 166 with 40 px rise, 0.82 scale-in and
   10 px blur-out.

## Pitfalls

- Tilting with rotateX as well as rotateY breaks the clean vertical centre
  channel.
- A spring settle on the slides overshoots the symmetric rest; the eased curve
  must land exactly.
- Fading the vignette in from frame 0 dulls the full-screen opening; wait until
  frame 50.
- Rendering JPEG cards with Remotion Img can hang on decode; hold the frame
  until load or error releases it.
