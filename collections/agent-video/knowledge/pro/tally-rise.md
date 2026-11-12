---
slug: tally-rise
title: Tally Rise
tier: pro
category: charts
evidence: film
demo: 960x540 at 60 fps, 92 frames (1.53 s)
length_30fps: 46
palette: light #FCFCFC, dark #0C0C18, accent #32375D
used_in: none
---

# Tally Rise

> A payout figure that counts up while its blue light drains to black.

## What it shows

"Creator payouts" sits small above a large dollar figure on near-black. A soft
blue radial light sits behind the number. The figure climbs from about $1,059 to
$1,904 in under a second. The frame pushes in slightly as it climbs. The blue
drains away over the second half until only white type on black remains. The
final figure holds.

## Timeline

| Phase       | Frames (30 fps) | What moves                                        | Curve                                                  |
| ----------- | --------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Count       | 0-28            | Figure climbs about $845 with a gentle push-in    | linear count, about 217 per frame at 60 fps (observed) |
| Light drain | 12-37           | Blue radial weight fades while the count finishes | linear fade by weight (inferred)                       |
| Hold        | 37-46           | "$1,903.73" sits white on black                   | hold (observed)                                        |

## Techniques

- `Stage`: ink field with a flat-core radial blue bloom behind type (observed)
- `CountUp`: dollar figure with comma grouping and two decimals, left-anchored
  (observed)
- `Camera`: slight scale-up about a point behind the figure (inferred)
- `RadialBloom`: bloom drains by weight, not opacity, over the second half
  (inferred)

## Props to expose

| Prop        | Type   | Default           | Purpose                                   |
| ----------- | ------ | ----------------- | ----------------------------------------- |
| label       | string | "Creator payouts" | Small caption above the figure (proposed) |
| from        | number | 1058.77           | Count start value (proposed)              |
| to          | number | 1903.73           | Count end value (proposed)                |
| countFrames | number | 28                | Frames of the climb at 30 fps (proposed)  |
| bloomColor  | string | "#32375D"         | Blue of the backing light (proposed)      |

## Rebuild it

1. Build an ink `Stage` with a `RadialBloom` centred behind the figure.
2. Set the label small and grey, the figure large white and left-anchored.
3. `CountUp` from start to end over 28 frames with cents formatting.
4. Push the `Camera` in a few percent over the same span.
5. Drain the bloom by weight during the second half of the count.
6. Hold the end figure on black for 9 frames.

## Pitfalls

- Recentring the number each tick makes it shimmy when digit widths change.
- Fading the bloom by opacity leaves a grey wash instead of a clean drain.
- Scaling type about its centre puts baselines on pixel seams.
