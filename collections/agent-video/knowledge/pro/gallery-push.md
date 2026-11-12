---
slug: gallery-push
title: Gallery Push
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 232 frames (3.87 s)
length_30fps: 116
palette: light #FCFCFC, dark #0C141C, accent #4753A7
used_in: none
---

# Gallery Push

> A wall of screenshots opens one column at a time. Use it to tour sites or
> templates.

## What it shows

Columns rise into place from below on a white page washed with accent tint in
two corners. The shown column lands first and the wall builds outward from it.
The open column holds wide in the middle while its neighbours read as tall
cropped slices. Then the focus walks: the open column hands its width to its
neighbour while the strip slides to keep the open one centred. The whole wall
creeps forward the entire time. Each handoff re-crops rather than re-scales, so
a narrowing column crops its screenshot instead of shrinking it.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                   | Curve                  |
| ----- | --------------- | ---------------------------------------------------------------------------- | ---------------------- |
| 1     | 0–8             | Columns rise into place from below, the shown one first                      | spring (inferred)      |
| 2     | 8–42            | Wall builds outward; open column holds wide in the middle                    | ease-out (observed)    |
| 3     | 42–58           | Focus walks to the neighbour; strip slides to re-centre; wall creeps forward | ease-in-out (inferred) |
| 4     | 58–88           | Second column holds open, then hands its width on again                      | ease-in-out (observed) |
| 5     | 88–116          | Third column opens; wall settles into a slow forward creep                   | ease-out (observed)    |

## Techniques

- `Stage`: white page with an accent wash in two corners (observed)
- `Collage`: wall of fixed-height screenshot columns that builds outward from
  the open one (observed)
- `Reveal`: columns rise into place from below, the featured one first
  (observed)
- `Camera`: slow forward creep across the whole run, plus a lateral slide that
  keeps the open column centred (observed)
- `Card`: narrowing a column crops its screenshot instead of shrinking it
  (observed)

## Props to expose

| Prop        | Type     | Default     | Purpose                                                      |
| ----------- | -------- | ----------- | ------------------------------------------------------------ |
| `shots`     | string[] | `[]`        | Screenshots filling the wall columns (proposed)              |
| `openFirst` | number   | `1`         | Index of the column that opens first (proposed)              |
| `openWidth` | number   | `3.0`       | Width of the open column relative to a closed one (proposed) |
| `creep`     | number   | `1.0`       | Speed of the wall's forward creep (proposed)                 |
| `accent`    | string   | `"#4753A7"` | Corner wash tint on the page (proposed)                      |

## Rebuild it

1. Wash the white page with accent tint in two corners.
2. Rise the featured column from below first, then build the wall outward around
   it.
3. Hold the open column wide and centred with neighbours cropped to slices.
4. Walk the width to the neighbour while sliding the strip to keep the open one
   centred.
5. Creep the whole wall forward underneath every handoff.
6. Settle on the final open column and hold the creep to frame 116.

## Pitfalls

- Scaling a narrowing column instead of cropping it shrinks the site instead of
  slicing it.
- Sliding the strip without re-centring lets the open column drift off middle.
- Stopping the creep during handoffs makes the wall feel parked between beats.
- Building all columns at once loses the shown-first read; stagger from the
  featured one.
