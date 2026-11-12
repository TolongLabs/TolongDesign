---
slug: bloom-lockup
title: Bloom Lockup
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 240 frames (4.0 s)
length_30fps: 120
palette: light #F4F4F0, dark #101010, accent #A96028
used_in: none
---

# Bloom Lockup

> A card wall blooms outward from the logo, cuts tight, bends away through a
> lens, and lands the lockup. Use it for a four-second logo reveal.

## What it shows

A bare page holds, then a wall of image cards blooms outward from the centred
logo card by card. The camera pushes in slightly as the logo grows. It hard-cuts
to the same grid magnified 1.33 times with the logo tight. The wall bends away
through a lens, flashes, and clears to the bare page. The logo rises to its
resting height while the wordmark and tagline fade and rise in under it.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                 | Curve                                                               |
| ----- | --------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 1     | 0–9             | Bare page holds before the first card                                                      | hold (observed)                                                     |
| 2     | 9–55            | 28 cards fade in on a wave leaving the logo, smoothstep each, camera pushes 0.985 to 1.002 | measured per-card delay and fade tables, linear zoom table (source) |
| 3     | 3–55            | Logo fades in from frame 9 and grows 144 to 161 px                                         | measured fade and size tables (source)                              |
| 4     | 55              | Hard cut to the 1.33-times lockup board                                                    | one frame (source)                                                  |
| 5     | 55–74           | Wall bends through 18 lens rows while zooming out 1.0 to 0.857                             | measured strength and zoom tables (source)                          |
| 6     | 72–74           | Two-frame channel-gain flash with 1.67 and 1.79 px blur                                    | hold of flash tables (source)                                       |
| 7     | 55–117          | Logo rises 540 to 407 px on stage                                                          | measured position table (source)                                    |
| 8     | 74–95           | Wordmark fades in and rises 17.5 px to rest at 653.6                                       | measured fade and rise tables (source)                              |
| 9     | 95–117          | Tagline fades in and rises 11.9 px to rest at 715.7                                        | measured fade and rise tables (source)                              |
| 10    | 117–120         | Finished lockup holds on the bare page                                                     | hold (observed)                                                     |

## Techniques

- `Collage`: 28 bloom cards then 22 lockup cards on fixed 1920 by 1080 rects,
  one slot staying empty behind the logo (source)
- `Card`: image cards with 12 and 16 px halo shadows, cover-fit art (source)
- `Lockup`: rounded-square logo tile rising to rest with wordmark and tagline
  under it (source)
- `Reveal`: per-card smoothstep fades on a delay wave spreading outward from the
  logo (source)
- `Camera`: bloom push 0.985 to 1.002, lockup zoom-out 1.0 to 0.857 compensating
  the lens split (source)
- `custom: LensBend`: 18-frame displacement-map bend with per-row strength, then
  a two-frame gain flash (source)

## Props to expose

| Prop           | Type                 | Default            | Purpose                                             |
| -------------- | -------------------- | ------------------ | --------------------------------------------------- |
| wordmark       | string               | "snapcn"           | Word under the logo, Poppins 600 at 112 px          |
| tagline        | string               | "snapcn.dev"       | Line under the wordmark, mono at 40 px              |
| logo           | LogoArt              | snapcn mark        | Mark as SVG paths with width, height and fill share |
| images         | string[]             | showcase art URLs  | Pictures for the cards; repeats when short          |
| imagesA        | string[]             | images             | Per-card picture for the bloom board                |
| imagesB        | string[]             | images offset by 7 | Per-card picture for the lockup board               |
| wordmarkFont   | string               | Poppins            | Wordmark face                                       |
| wordmarkWeight | number               | 600                | Wordmark weight                                     |
| wordmarkSize   | number               | 112                | Wordmark size on the 1920 by 1080 stage             |
| speed          | number               | 1                  | Time multiplier on the frame clock                  |
| theme          | Partial<SnapCnTheme> | theme              | Design-system token overrides                       |
| mode           | string               | theme mode         | Light or dark                                       |

## Rebuild it

1. Lay out the 28-card bloom board and the 22-card 1.33-times lockup board on a
   1920 by 1080 stage.
2. Fade bloom cards in with smoothstep on the per-card delay wave while pushing
   the camera 0.985 to 1.002.
3. Grow the logo tile 144 to 161 px and fade it in from frame 9.
4. Hard-cut at frame 55 to the magnified board with the logo tight.
5. Bend the wall away through the 18-row lens with the strength table, zooming
   out to 0.857.
6. Flash channel gains over two frames, then cut to the bare page.
7. Rise the logo 540 to 407 px while the wordmark and tagline fade and rise in
   under it.
8. Hold the finished lockup to frame 120.

## Pitfalls

- Crossfading between the boards; the join is a hard cut at frame 55.
- Filling the slot behind the logo; that card stays empty unless replacement art
  is passed.
- Bending with a single blur or zoom; the bend needs the per-row displacement
  strengths plus the compensating zoom.
- Setting the type in one fade; the wordmark leads the tagline by about 20
  frames with separate rise distances.
- Running the lens past the flash; the flash is only the last two rows, then the
  wall is gone.
