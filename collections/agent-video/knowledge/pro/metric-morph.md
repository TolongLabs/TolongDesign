---
slug: metric-morph
title: Metric Morph
tier: pro
category: charts
evidence: film
demo: 960x540 at 60 fps, 104 frames (1.73 s)
length_30fps: 52
palette: light #F4F4F0, dark #000000, accent #F7A680
used_in: none
---

# Metric Morph

> An export button that collapses into the tallest cell of the chart it
> produces.

## What it shows

A dark Export pill rests on a pale ground. Its label dissolves and the pill
collapses inward into a small square that runs from black through brown into the
accent. That square stands as the tallest cell while a full week chart fades up
around it on one clock. A header with the total and a legend resolve above the
chart. The finished dashboard holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                       | Curve   |
| ----- | --------------- | -------------------------------------------------------------------------------- | ------- |
| 1     | 0–14            | Export pill settles and holds                                                    | hold    |
| 2     | 14–18           | Label dissolves; pill collapses inward to a square, colour ramping to the accent | ease-in |
| 3     | 18–36           | Chart grid and cells fade up around the tallest cell on one clock                | linear  |
| 4     | 36–52           | Header, legend and full chart hold                                               | hold    |

## Techniques

- `Pill`: Export button settles from the press that opened the shot (observed)
- `TextSwap`: label dissolves as the pill collapses inward into a square
  (observed)
- `Bars`: week chart rises on one clock with no stagger, tallest cell first
  (observed)
- `CountUp`: header total "24,815" resolves with the chart (inferred)

## Props to expose

| Prop     | Type     | Default        | Purpose                                                 |
| -------- | -------- | -------------- | ------------------------------------------------------- |
| ctaLabel | string   | "Export"       | Button label before the collapse (proposed)             |
| total    | string   | "24,815"       | Header figure landing with the chart (proposed)         |
| values   | number[] | measured table | Bar values across the week columns (proposed)           |
| accent   | string   | "#F7A680"      | This-week cell colour against last-week grey (proposed) |

## Rebuild it

1. Rest the Export `Pill` on the pale `Stage` and hold to frame 14.
2. Dissolve the label and collapse the pill inward over frames 14–18, arriving
   at full speed.
3. Ramp the square from black through brown into the accent during the collapse.
4. Fade the grid and all `Bars` up together over frames 18–36 around the tallest
   cell.
5. Resolve the header total and legend above the chart.
6. Hold the finished dashboard to frame 52.

## Pitfalls

- Settling the collapse with a spring softens the slam into the grid.
- Staggering the bars turns one object rising into a wave.
- Fading the tallest cell with the rest removes the anchor the chart grows
  around.
- Keeping the button label legible mid-collapse reads as a shrink rather than a
  morph.
