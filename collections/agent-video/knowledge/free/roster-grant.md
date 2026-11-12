---
slug: roster-grant
title: Roster Grant
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 240 frames (4.0 s)
length_30fps: 120
palette: light #ECECE4, dark #101010, accent #3A77DA
used_in: none
---

# Roster Grant

> Three roster rows stream past a call to action, a cursor clicks it, and the
> team lights up.

## What it shows

Three rows of roster cards drift across a light page around a central pill. The
camera pulls back from 1.184x while the middle row parts to clear the pill. A
pointer walks in, presses the pill, and the pill flips to the accent on a single
frame. One monogram at a time then turns to the accent in a sprinkled order,
top, middle, bottom, top, bottom, middle. The whole scene pans left and exits
accelerating.

## Timeline

| Phase | Frames (30 fps) | What moves                    | Curve                                                                           |
| ----- | --------------- | ----------------------------- | ------------------------------------------------------------------------------- |
| 1     | 0-90            | Camera pulls back 1.184 to 1  | World scale; exp(-t/0.753) (source)                                             |
| 2     | 0-90            | Middle row closes on the pill | Flank gaps 91 to 51 and 123 to 65; exp, tau 0.805 and 0.91 (source)             |
| 3     | 0-40            | Pointer approaches            | Cursor (123, 90) to (104, -3); Measured knots (source)                          |
| 4     | 40-49           | Pointer hovers, then drops    | Second accelerating move onto the pill; Measured knots, peaks 112 px/s (source) |
| 5     | 49-70           | Pill presses                  | Pill scale 1 to 0.931 to 1; Measured knots (source)                             |
| 6     | 51              | Pill flips to accent          | Fill changes on one frame; Hold (source)                                        |
| 7     | 62-93           | Pointer leaves                | Cursor out to (178, 79); Measured knots (source)                                |
| 8     | 70-120          | Monograms grant               | One grant every 7 frames, sprinkled order; Hold per grant (source)              |
| 9     | 90-120          | Scene exits left              | Everything pans to -113.4 px; Measured knots, accelerating (source)             |

## Techniques

- `Camera`: exponential pull-back about the pill centre, never fully arriving
  (source)
- `Cursor`: 29-knot measured path in two moves, tip-anchored, pulled to the pill
  edge over its height (source)
- `Press`: scale dip to 0.931 in 0.18 s, back over 0.53 s (source)
- `Marquee`: outer rows stream on measured knot tables, front-loaded differently
  so they never mirror (source)
- `Pill`: content-sized call to action, flips fill on one frame at 1.689 s
  (source)
- `Card`: fixed 286 by 76 roster cards with monogram, name, and role (source)

## Props to expose

| Prop        | Type                 | Default       | Purpose                                        |
| ----------- | -------------------- | ------------- | ---------------------------------------------- |
| rows        | RosterEntry[][]      | SNAPCN_ROSTER | Three rows of cards, repeated across the frame |
| label       | string               | Install all   | Pill label                                     |
| accentColor | string               | theme primary | Accent for the pill and granted monograms      |
| theme       | Partial<SnapCnTheme> | none          | Design-system token overrides                  |
| mode        | light \| dark        | none          | Colour mode                                    |
| fontFamily  | string               | none          | Face override                                  |
| speed       | number               | 1             | Playback multiplier                            |

## Rebuild it

1. Lay out the scene once in 712 by 398 reference px and scale to the frame.
2. Settle the camera on exp(-t/0.753) about the pill centre.
3. Drift the outer rows on their own knot tables; part the middle row with
   asymmetric clearances.
4. Walk the pointer along its two-move measured path, tip-anchored.
5. Dip the pill to 0.931 and flip it to the accent on frame 51.
6. Grant one monogram every 7 frames from frame 70 in sprinkled row order.
7. Pan everything left together from frame 90.
8. Seed each row's cascade on the monogram nearest mid-frame at the first grant.

## Pitfalls

- Sharing one time constant between camera and middle row puts cards 5 px out
  through the first half second.
- Symmetric outer rows read as a pattern; the reference deliberately breaks
  symmetry.
- Scaling the whole pointer track by pill width moves its entry 13 px off the
  reference path.
- Hinting under a sliding scale boils the letterforms; the source pins
  geometricPrecision.
