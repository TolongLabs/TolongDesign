---
slug: ember-reveal
title: Ember Reveal
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 150 frames (2.5 s)
length_30fps: 75
palette: light #FCFCFC, dark none, accent #638CEB
used_in: none
---

# Ember Reveal

> A blue brush sweeps paper, blooms into a glow, and the line writes itself out
> of it.

## What it shows

A blank white frame holds. A soft blue brush stroke sweeps across the middle and
blooms into a wide glow with a ghost of type inside it. The line "Meet snapcn
pro" resolves out of the glow from left to right and settles in blue with a
faint halo. The end card holds unchanged for the rest of the run.

## Timeline

| Phase | Frames (30 fps) | What moves                                                        | Curve    |
| ----- | --------------- | ----------------------------------------------------------------- | -------- |
| 1     | 0–5             | Blank paper holds                                                 | hold     |
| 2     | 5–10            | The blue brush sweeps across the middle                           | ease-out |
| 3     | 10–15           | The stroke blooms into a glow; a ghost of the line sits inside it | ease-out |
| 4     | 15–25           | The line writes itself out of the glow, left to right             | linear   |
| 5     | 25–30           | The line settles in blue with a faint halo                        | hold     |
| 6     | 30–74           | The end card holds                                                | hold     |

## Techniques

- `Stage`: white paper field (observed)
- `custom: brush-pass`: a soft stroke whose centre line and width animate across
  the frame (observed)
- `RadialBloom`: the stroke blooms into a wide glow (observed)
- `Reveal`: the line resolves left to right out of the glow (observed)
- `GlyphGlow`: faint halo settling around the finished line (observed)

## Props to expose

| Prop       | Type   | Default           | Purpose                                             |
| ---------- | ------ | ----------------- | --------------------------------------------------- |
| text       | string | "Meet snapcn pro" | Line revealed out of the glow (proposed)            |
| brushColor | string | "#638CEB"         | Colour of the stroke and glow (proposed)            |
| brushWidth | number | 48                | Max width of the brush stroke in px (proposed)      |
| bloomScale | number | 3.0               | How far the glow spreads past the stroke (proposed) |

## Rebuild it

1. Hold a paper `Stage` blank.
2. Sweep the `brush-pass` across the middle of the frame.
3. Bloom it outward with `RadialBloom`.
4. Resolve the line out of the glow with `Reveal`, left to right.
5. Settle the type with a faint `GlyphGlow` halo.
6. Hold the end card.

## Pitfalls

- A hard-edged stroke reads as a wipe, not a brush.
- Revealing the whole line at once wastes the bloom beat.
- Skipping the halo leaves the settled line flat against the paper.
- Cutting the hold short hides the payoff beat the run is built for.
