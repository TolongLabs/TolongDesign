---
slug: logo-flicker
title: Logo Flicker
tier: free
category: logos
evidence: source+film
demo: 960x540 at 60 fps, 200 frames (3.33 s)
length_30fps: 100
palette: light #F8F8E4, dark #000000, accent #A82D1F
used_in: none
---

# Logo Flicker

> Full-screen images strobe at a constant rate, then cross-fade onto a logo
> lockup. Use it as a high-energy sting into a brand mark.

## What it shows

Images flip across the whole frame every 2 frames at full opacity, hopping
through the pool with a stride of 7 so no image repeats adjacently. The strobe
never slows down; light and dark frames alternate hard the entire way. At frame
66 the flicker starts fading while the monochrome logo and brand name fade in on
the same window with a small settle from 0.92 scale. The lockup lands centred
and holds on black.

## Timeline

| Phase       | Frames (30 fps) | What moves                                                                                             | Curve                                                      |
| ----------- | --------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Strobe      | 0–66            | Full-frame image cuts every 2 frames at constant speed, index stepping 7 through the pool              | hard cuts, no easing (source)                              |
| Cross-fade  | 66–84           | Flicker opacity 1 to 0 while logo and name opacity 0 to 1 on the same window; lockup settles 0.92 to 1 | linear opacities, bezier(0.2, 0.6, 0.35, 1) scale (source) |
| Lockup hold | 84–100          | Logo over brand name rests centred on black                                                            | hold (observed)                                            |

## Techniques

- `Stage`: dark backdrop; the flicker image covers the frame edge to edge with
  object-fit cover (source)
- `Collage`: one full-frame slot cycling 8 images with a coprime stride of 7 at
  a constant 2-frame interval (source)
- `Lockup`: monochrome mark at 0.15 of the short edge over the brand name at
  0.055, settling from 0.92 as it fades in (source)
- `Reveal`: a single shared cross-fade window; flicker and lockup move
  inversely, never sequentially (source)
- `Camera`: no camera move at any point (source)

## Props to expose

| Prop         | Type                 | Default          | Purpose                                      |
| ------------ | -------------------- | ---------------- | -------------------------------------------- |
| logoSrc      | string               | snapcn-white png | Monochrome mark resolved over the dark stage |
| brandName    | string               | snapcn           | Name shown under the logo                    |
| images       | string[]             | 8 showcase urls  | Pool the flicker flips through               |
| flipInterval | number               | 2                | Frames each image holds; constant to the end |
| background   | string               | theme background | Backdrop color override                      |
| speed        | number               | 1                | Time multiplier                              |
| className    | string               | —                | Class for the outer wrapper                  |
| theme        | Partial<SnapCnTheme> | —                | Design-token overrides                       |
| mode         | "light" \| "dark"    | "dark"           | Dark by default so the white mark reads      |
| fontFamily   | string               | Inter stack      | Face for the brand name                      |

## Rebuild it

1. Cover the frame with one image slot and cut to the next pool image every 2
   frames, advancing the index by 7 modulo pool size.
2. Keep the flip speed constant to the very last flicker frame; never decelerate
   into the resolve.
3. From 66–84 fade the flicker 1 to 0 while fading the centred logo-plus-name 0
   to 1 on the same window.
4. Settle the lockup from 0.92 to 1 scale across the same 66–84 window.
5. Hold the lockup on black to frame 100.

## Pitfalls

- Decelerating the flicker before the resolve breaks the strobe-then-settle
  read; the rate stays constant.
- Fading the lockup in after the flicker has gone leaves a dead black gap; both
  moves share one window.
- A non-coprime stride cycles a subset of the pool and repeats images back to
  back.
- A light stage with the default white mark makes the lockup invisible.
