---
slug: orbit-gallery
title: Orbit Gallery
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 600 frames (10 s)
length_30fps: 300
palette: light #F4F4FC, dark #000000, accent #905428
used_in: none
---

# Orbit Gallery

> A stream of photos flows along an inward spiral around a held title. Use it as
> a slow cinematic opener for launches and editorials.

## What it shows

The film opens on black with the spiral stream already flowing: small cards near
the centre grow larger as they ride outward along three coils, each rotated to
its tangent, fading in at the outer end. The title blurs up from 8 px and rises
into place with a subtitle and an Explore pill under a soft radial scrim. The
stream never stops; cards flow continuously inward toward the centre for the
full ten seconds while the lockup holds in the clear middle. Only tiny centre
cards passing behind the title carry a light blur.

## Timeline

| Phase              | Frames (30 fps) | What moves                                                                                    | Curve                                              |
| ------------------ | --------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Stream establishes | 0–8             | Cards fade in at the outer 20 percent of path; whole stream flows inward with a 40 s turnover | linear advance, whole card-steps per loop (source) |
| Title lands        | 8–34            | Title rises 0.4 of its size to 0 with blur 8 to 0 by frame 30 and opacity by 34               | Easing.out cubic rise (source)                     |
| Subtitle and pill  | 16–48           | Subtitle fades 16–40; Explore pill fades 24–44 and scales 0.7 to 1 by 48                      | Easing.out back(1.4) on pill (source)              |
| Footers            | 30–50           | Edge captions fade to 0.78 opacity                                                            | linear (source)                                    |
| Continuous flow    | 50–300          | Spiral stream flows inward without pause; cards shrink toward centre and rotate to tangent    | linear, seamless loop (source)                     |

## Techniques

- `Collage`: up to 400 slots spaced evenly by arc length along an Archimedean
  spiral of 3 turns, cycling 16 images, largest drawn copy outlined (source)
- `Camera`: no camera; motion is the stream advancing a whole number of
  card-steps per composition so the loop has no jump (source)
- `Reveal`: title blurs 8 to 0 and rises in over 8–34; subtitle follows 16–40;
  pill scales 0.7 to 1 with back ease 24–48 (source)
- `Pill`: Explore button under the subtitle in 0.14-alpha ink with 9999 px
  radius (source)
- `Stage`: black stage with a radial scrim at 0.62 to 0 alpha behind the lockup
  so type reads over the stream (source)
- `Card`: cards shrink toward the centre by (dist/R) raised to half the
  attenuation and fade in over the outer 20 percent (source)

## Props to expose

| Prop            | Type                 | Default                      | Purpose                                           |
| --------------- | -------------------- | ---------------------------- | ------------------------------------------------- |
| title           | string               | A whole new universe         | Held headline in the clear middle                 |
| subtitle        | string               | Article — The Design Process | Smaller line under the title                      |
| buttonLabel     | string               | Explore                      | Pill CTA; empty hides it                          |
| images          | string[]             | 16 picsum seeds              | Artwork cycled along the spiral                   |
| turns           | number               | 3                            | Spiral coils edge to centre                       |
| spacing         | number               | 5                            | Arc spacing between cards; smaller is denser      |
| spread          | number               | 7                            | Radius scale; larger pushes outer coils off-frame |
| sizeAttenuation | number               | 2                            | How much cards shrink toward the centre           |
| imageSize       | number               | 172                          | Card long edge in px at the outer radius          |
| cardAspect      | number               | 0.78                         | Card width over height, portrait below 1          |
| fadeIn          | number               | 20                           | Percent of path for outer fade-in                 |
| fadeOut         | number               | 0                            | Percent of path for centre fade-out               |
| cornerRadius    | number               | 5                            | Rounding on the 0–20 scale                        |
| orbitSeconds    | number               | 40                           | Seconds for one full turnover into the centre     |
| background      | string               | theme background             | Stage override                                    |
| textColor       | string               | theme foreground             | Lockup ink override                               |
| theme           | Partial<SnapCnTheme> | —                            | Design-token overrides                            |
| mode            | "light" \| "dark"    | "dark"                       | Dark by default; the orbit is lit for dark        |
| fontFamily      | string               | Inter stack                  | Face for title, subtitle and pill                 |
| footerLeft      | string               | ""                           | Bottom-left caption; empty hides                  |
| footerCenter    | string               | ""                           | Bottom-centre caption; empty hides                |
| footerRight     | string               | ""                           | Bottom-right caption; empty hides                 |
| speed           | number               | 1                            | Time multiplier                                   |
| className       | string               | —                            | Class for the outer wrapper                       |

## Rebuild it

1. Build an Archimedean spiral of 3 turns with radius falling linearly edge to
   centre, and table arc length to space slots evenly.
2. Size each card by the long edge times (dist/R) to the half attenuation,
   rotate it to the spiral tangent, and fade it in over the outer 20 percent.
3. Advance the stream by whole card-steps per composition so a 40 s turnover
   loops seamlessly over 300 frames.
4. Land the title over 8–34 with blur 8 to 0 and a 0.4-size rise, then the
   subtitle 16–40 and the pill 24–48 with a back ease.
5. Hold every lockup element in the clear middle over a radial scrim while the
   stream flows behind it.
6. Blur only the few tiny cards within 0.16 of the short edge of the centre,
   never the visible band.

## Pitfalls

- Spacing slots by even spiral parameter bunches cards at the centre; spacing
  must be even by arc length.
- Advancing a fractional card-step per loop makes the seamless flow visibly jump
  on repeat.
- A frame-wide backdrop blur re-blurs every moving card and stalls playback;
  only tiny centre cards get a cheap blur.
- Filling the middle with cards leaves the title nowhere to read; the spiral
  must hold the centre clear.
