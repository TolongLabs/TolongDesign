---
slug: dot-bloom
title: Dot Bloom
tier: free
category: transitions
evidence: source+film
demo: 960x540 at 60 fps, 60 frames (1.0 s)
length_30fps: 30
palette: light #F4F0E4, dark #000000, accent #D39367
used_in: none
---

# Dot Bloom

> A halftone dot transition that washes the outgoing shot to cream, then clears
> cell by cell to the incoming shot.

## What it shows

White dots spark over the outgoing shot while a white wash fades up and bleaches
it toward cream. The cream cover completes, and the frame becomes a field of
warm dots in coral, peach and blush arranged in drifting diagonal bands. The
bands thin out cell by cell, opening windows onto the incoming shot. The last
dots clear and the new shot sits full frame. On the demo stage both sides are
black, so the film reads as dots blooming out of black and draining back into
it.

## Timeline

| Phase | Frames (30 fps) | What moves                                                            | Curve |
| ----- | --------------- | --------------------------------------------------------------------- | ----- |
| 0–1   | 0–1             | Outgoing shot holds; first white dots spark; wash starts (step 0–1)   | hold  |
| 2–4   | 2–4             | White wash ramps up (weight 0.05 to 0.425) while sparse dots multiply | hold  |
| 5–8   | 5–8             | Wash crosses to full cream; cream cells open; dots stay white         | hold  |
| 9–15  | 9–15            | Cream breaks into warm coral, peach and blush dots in diagonal bands  | hold  |
| 16–24 | 16–24           | Incoming shot opens cell by cell through the thinning dot field       | hold  |
| 25–29 | 25–29           | Last dots clear and the overlay removes itself                        | hold  |

## Techniques

- `Stage`: a flat white-to-cream wash fades over the whole frame, weight 0.05 up
  to 0.575, and covers the frame at the cut (source)
- `Halftone`: a 52 by 29 dot field (6.2 px dots on a ~6.8 px pitch) replays 24
  measured cell states on a 24 fps clock, first step at 2/60 s (source)
- `custom: cell-reveal`: the cream and the incoming shot resolve one grid cell
  at a time, bands thinning diagonally until no dotted cell remains (source)
- Dots spark white over dark first, turn warm in bands, and clear to black by
  frame 28 (observed)

## Props to expose

| Prop      | Type   | Default | Purpose                                  |
| --------- | ------ | ------- | ---------------------------------------- |
| speed     | number | 1       | Time multiplier on the 24 fps step clock |
| className | string | —       | Passthrough class for the overlay fill   |

## Rebuild it

1. Paint the transition as a pointer-transparent overlay canvas sized to the
   frame.
2. Lay a 52 by 29 grid over a 356 by 196 reference rect, scaled to cover, dots
   6.2 px wide.
3. Advance one held step per 24 fps tick starting at 2/60 s; interpolate nothing
   between steps.
4. For wash steps, fill the whole rect with the step colour at the step weight.
5. For dot steps, fill each cell square with its background letter colour,
   overlapping half a pixel, then draw its dot letter colour as a disc.
6. Decode each step palette from its own hex string; a `.` cell lets the shot
   beneath show through.
7. Place the cut between the two shots at frame 16, where the cream covers the
   frame.
8. Remove the overlay once a step holds no dotted cells.

```tsx
<ShotA /><ShotB cutAt={16} />
<DotBloom /> // overlay only, cut underneath it
```

## Pitfalls

- Easing between steps turns held states into mush; steps must cut, not tween.
- Seams open between cells unless each square overlaps its neighbour by half a
  pixel.
- Cutting anywhere but frame 16 shows a half-covered frame on one side of the
  cut.
