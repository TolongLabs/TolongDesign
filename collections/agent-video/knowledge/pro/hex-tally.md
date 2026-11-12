---
slug: hex-tally
title: Hex Tally
tier: pro
category: charts
evidence: film
demo: 960x540 at 60 fps, 108 frames (1.8 s)
length_30fps: 54
palette: light #F8F8F4, dark none, accent #5C90E3
used_in: none
---

# Hex Tally

> A metric card that counts to its total while a hex unit chart fills in beneath
> it.

## What it shows

A small card sits on a pale ground. The card holds a label, a large headline
number, a hex field and a legend. The card rises a short distance into rest. The
headline counts upward while hexagons light one by one in a scattered blob. The
legend never moves. The finished card holds still.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                    | Curve  |
| ----- | --------------- | ----------------------------------------------------------------------------- | ------ |
| 1     | 0–4             | Card rises 19px into its resting place; count starts                          | spring |
| 2     | 0–29            | Headline counts flat to 9,856; hexagons light one by one, rim before interior | linear |
| 3     | 29–32           | Last hexagons land; headline already settled                                  | linear |
| 4     | 32–54           | Full card holds still                                                         | hold   |

## Techniques

- `Card`: metric card with label, headline, hex field and legend (observed)
- `CountUp`: headline runs 217 a frame at 60 fps and lands a tenth of a second
  before the chart (observed)
- `Grid`: 22 by 15 hex field; 150 cells light in a measured scatter, faster
  mid-run (observed)
- `Highlight`: legend rows stay fixed while the two moving clocks read against
  them (inferred)

## Props to expose

| Prop      | Type                      | Default             | Purpose                                                 |
| --------- | ------------------------- | ------------------- | ------------------------------------------------------- |
| label     | string                    | "Registry installs" | Card eyebrow text (proposed)                            |
| total     | number                    | 9856                | Final headline value (proposed)                         |
| cells     | { x, y, group }[]         | measured table      | Hex positions, reveal order and colour group (proposed) |
| legend    | { label, share, value }[] | measured table      | Legend rows counted off the grid (proposed)             |
| linkLabel | string                    | "View registry"     | Corner link text (proposed)                             |

## Rebuild it

1. Lay out a `Card` on a `Stage` of #F8F8F4 with label, headline, field and
   legend.
2. Settle the card up 19px over frames 0–4 with a spring.
3. Run `CountUp` flat at 434 per 30 fps frame until it lands on the total at
   frame 29.
4. Light the 150 hexagons in the measured scatter order, seeding the blob rim
   first.
5. Colour each cell by its legend group as it lands.
6. Keep the legend fixed for the whole run.
7. Hold the finished card from frame 32 to frame 54.

## Pitfalls

- Counting with an ease makes the steady tick look wrong; the run is flat.
- Fading cells in reads as a dissolve; each hexagon is either lit or not.
- Letting legend percentages drift from the grid breaks the still-against-moving
  read.
- Overshooting the card settle past 19px turns a landing into a bounce.
