---
slug: count-grid
title: Count Grid
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 94 frames (1.57 s)
length_30fps: 47
palette: light #F8F8F8, dark #000000, accent #AE3421
used_in: none
---

# Count Grid

> Five cards rush in under a smear, then the grid fills from the middle out as
> the count jumps. Use it for the "and it scales" stat shot, without a cut.

## What it shows

Cards rush in from the sides under a hard horizontal blur and settle into five
around a small "5 clips" label. The camera keeps creeping back while the label
holds. Every empty cell around the five fills in from the middle out, ring by
ring, and the label cuts to "500 clips" on the first frame of the fill. The full
wall holds to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                 | Curve                                                      |
| ----- | --------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 1     | 0–7             | Cell pitch walks 174 to 138.5 under 22 px of horizontal blur                               | measured pitch table; blur table to 0 by frame 5; (source) |
| 2     | 7–19            | Settle: pitch 138.5 to 121.5, sharp; one late card lands around frame 9 with its own smear | measured tables; (source)                                  |
| 3     | 11–18           | Label fades up all at once                                                                 | measured ramp; (source)                                    |
| 4     | 19–36           | Drift: pitch 121.5 to 118, still moving, never held                                        | measured pitch table; (source)                             |
| 5     | 37–46           | Fill: pitch 118 to 96.5, cells populate ring by ring, count cuts 5 to 500 at frame 37      | measured tables; hard cut; (source)                        |

## Techniques

- `Collage`: grid fills from the middle out by Chebyshev ring, one ring per
  frame starting one frame before the switch, two frames per cell (source)
- `Card`: 114.5 by 139.5 px cards at 95% of a 120.5 by 147 cell with 3 px
  corners (source)
- `MotionBlur`: entry smear 22 px to zero inside 5 frames; the late card behind
  the label carries its own 26 px smear to frame 9 (source)
- `Camera`: one pull-back scale about the 358.75, 207.6 midpoint; pitch is the
  fitted number everything hangs on (source)
- `Reveal`: label fades up whole over frames 11 to 18 (source)
- `TextSwap`: count cuts from "5" to "500" on frame 37 with no tween (source)

## Props to expose

| Prop       | Type                 | Default                      | Purpose                            |
| ---------- | -------------------- | ---------------------------- | ---------------------------------- |
| from       | string               | "5"                          | Count before the grid fills        |
| to         | string               | "500"                        | Count after the grid fills         |
| noun       | string               | "clips"                      | Noun after the number              |
| cards      | string[]             | showcase URLs                | Card faces, cycled across the grid |
| background | string               | theme background             | Page behind the grid               |
| inkFrom    | string               | primary walked to foreground | Label gradient left end            |
| inkTo      | string               | primary                      | Label gradient right end           |
| theme      | Partial<SnapCnTheme> | theme default                | Design token overrides             |
| mode       | "light" \| "dark"    | "light"                      | Theme switch                       |
| speed      | number               | 1                            | Time multiplier; 1 is measured     |

## Rebuild it

1. Rush five seed cells in under a 22 px horizontal `MotionBlur` that clears by
   frame 5.
2. Land one card late behind the label with its own smear so the entry reads as
   five arrivals.
3. `Reveal` the "5 clips" label over frames 11 to 18, all at once.
4. Never hold the middle: keep shedding pitch through the drift so the shot
   stays alive.
5. At frame 37, `TextSwap` the count to "500" and fill every cell outward by
   ring on the `Collage` order.
6. `Camera` pull back about the fixed midpoint through the whole 47 frames.

## Pitfalls

- Deriving blur from pull-back speed; the reference is sharp while still moving,
  so the smear must clear by frame 5.
- Rushing all cards together; the late card is the detail that sells separate
  arrivals.
- Tweening the count; it hard-cuts on the switch frame.
- Scaling about the middle row; the vertical fixed point sits 5 px below it and
  the grid drifts a pixel high otherwise.
- Filling ring-per-half-frame; the reference shows exactly one new ring per
  frame.
