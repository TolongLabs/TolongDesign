---
slug: logo-assemble
title: Logo Assemble
tier: free
category: logos
evidence: source+film
demo: 960x540 at 60 fps, 216 frames (3.6 s)
length_30fps: 108
palette: light #FCFCFC, dark #000000, accent #8D3322
used_in: none
---

# Logo Assemble

> A ring of image cards revolves around a title, then drains into a logo and
> brand name. Use it as a cinematic logo sting after a montage.

## What it shows

Ten image cards ride a ring around a centred two-line title on black. The title
fades in early and holds while the ring revolves at a steady angular speed.
Halfway through, the ring spins faster and drains inward, shrinking and
vanishing into the middle. A monochrome logo is born at the centre with a small
overshoot, slides left, and the brand name fades in beside it. The finished
lockup holds on black.

## Timeline

| Phase                  | Frames (30 fps) | What moves                                                                                  | Curve                              |
| ---------------------- | --------------- | ------------------------------------------------------------------------------------------- | ---------------------------------- |
| Ring orbits            | 0–50            | Cards revolve at 0.1 rad per frame around the centre; middle text fades in over 6–16        | linear orbit, clamp (source)       |
| Text out, drain starts | 50–58           | Middle text fades out by 52; ring radius and card scale start collapsing                    | bezier(0.5, 0, 0.75, 0.4) (source) |
| Collapse               | 58–66           | Ring radius goes to 0 with extra spin of 1.1π; cards shrink to 0.34 and fade out over 58–66 | ease-in (source)                   |
| Logo born              | 58–76           | Logo fades in over 58–66 and scales 0.6 to 1.05 to 1 by 76                                  | bezier(0.2, 0.6, 0.35, 1) (source) |
| Lockup forms           | 74–90           | Logo slides to its left rest spot; brand name fades in and slides 18 px to 0                | bezier(0.2, 0.6, 0.35, 1) (source) |
| Hold                   | 90–108          | Finished lockup rests on black                                                              | hold (observed)                    |

## Techniques

- `Stage`: black backdrop under the whole sting (source)
- `Collage`: 10 portrait cards at 0.15 of the short edge ride one ring at 0.36
  of the short edge radius, cycling 8 images (source)
- `Camera`: the drain reads as a pull-in, but it is the ring radius going to 0
  with added spin, not a camera move (source)
- `Lockup`: logo born at centre with overshoot to 1.05, then shifted left by
  0.13 of the short edge while the name reveals beside it (source)
- `Reveal`: middle text fades 6–16 and out by 52; logo fades 58–66; name fades
  74–84 with an 18 px slide (source)
- `Marquee`: cards stay upright and only revolve, never spinning on their own
  axis (source)

## Props to expose

| Prop       | Type                 | Default                         | Purpose                                     |
| ---------- | -------------------- | ------------------------------- | ------------------------------------------- |
| logoSrc    | string               | snapcn-white png                | Monochrome mark born at the centre          |
| brandName  | string               | snapcn                          | Name revealed right of the logo             |
| middleText | string               | Cinematic components\nfor React | Title held inside the ring; \n breaks lines |
| images     | string[]             | 8 showcase urls                 | Pool cycled around the ring                 |
| count      | number               | 10                              | Cards riding the ring, 5–16                 |
| background | string               | theme background                | Backdrop color override                     |
| speed      | number               | 1                               | Time multiplier                             |
| className  | string               | —                               | Class for the outer wrapper                 |
| theme      | Partial<SnapCnTheme> | —                               | Design-token overrides                      |
| mode       | "light" \| "dark"    | "dark"                          | Dark by default so the white mark reads     |
| fontFamily | string               | Inter stack                     | Face for title and brand name               |

## Rebuild it

1. Place 10 upright cards on a ring of radius 0.36 of the short edge and revolve
   them at 0.1 rad per frame.
2. Fade the middle text in over 6–16 and out by 52 while the ring keeps a
   constant speed.
3. From 50–66 collapse the ring radius to 0 with an ease-in, adding 1.1π of
   extra spin, shrinking cards to 0.34 and fading them out over 58–66.
4. Birth the logo at the centre at 58: fade over 8 frames, scale 0.6 to 1.05 to
   1 by 76.
5. From 74–90 slide the logo left to 0.13 of the short edge and fade the brand
   name in with an 18 px slide from the right.
6. Hold the finished lockup on black to frame 108.

## Pitfalls

- Spinning the cards tangentially tips the images sideways; they must stay
  upright and only revolve.
- Fading the ring out without shrinking the radius reads as a dissolve, not a
  drain into the logo.
- Starting the name before the logo has moved leaves the two overlapping at the
  centre.
- A light stage with the default white mark makes the lockup invisible.
