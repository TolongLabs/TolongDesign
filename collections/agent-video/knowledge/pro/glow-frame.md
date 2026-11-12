---
slug: glow-frame
title: Glow Frame
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 74 frames (1.23 s)
length_30fps: 37
palette: light none, dark #000000, accent #322A7A
used_in: none
---

# Glow Frame

> A violet glowing border breathes around the frame while a small line brightens
> at the center.

## What it shows

A tiny dim line reading "Built for AI agents" sits at the center of a black
frame. A violet-blue glow seeps in from the right edge and travels around the
frame border until all four edges carry it. The center line brightens in step
with the border. The glow softens slightly and the film holds on the bordered
frame with the line legible at the middle.

## Timeline

| Phase        | Frames (30 fps) | What moves                                                   | Curve               |
| ------------ | --------------- | ------------------------------------------------------------ | ------------------- |
| Seed         | 0-2             | Dim center line on black, faint glow at the right edge       | hold (observed)     |
| Border sweep | 2-10            | Glow travels around the frame edges while the line brightens | ease-out (inferred) |
| Full glow    | 10-20           | All four edges glow, center line at full brightness          | hold (observed)     |
| Soften       | 20-25           | Border glow dims a step, line stays legible                  | ease-out (inferred) |
| Hold         | 25-37           | Bordered frame rests                                         | hold (observed)     |

## Techniques

- `Stage`: single ink act throughout (observed)
- `Reveal`: center line fades up from dim to legible (observed)
- `custom: edge-glow`: violet glow sweeps the frame border and breathes there
  (observed)
- `GlyphGlow`: center line brightens in step with the border (inferred)

## Props to expose

| Prop        | Type   | Default             | Purpose                                                       |
| ----------- | ------ | ------------------- | ------------------------------------------------------------- |
| line        | string | Built for AI agents | Centered line copy (proposed)                                 |
| glowColor   | string | #322A7A             | Border glow tint (proposed)                                   |
| sweepFrames | number | 8                   | Frames for the glow to circle the border at 30 fps (proposed) |
| lineScale   | number | 0.5                 | Resting size of the center line relative to frame (proposed)  |

## Rebuild it

1. Set the ink `Stage` with the dim center line.
2. Seed glow at one edge and sweep it around the full border.
3. Brighten the center line in step with the border.
4. Hold the fully bordered frame for about 10 frames.
5. Soften the border one step, keeping the line legible.
6. Rest on the calm bordered frame to the end.

## Pitfalls

- Glowing all four edges up at once loses the traveling sweep read.
- Oversaturating the border lets it outshine the center line.
- A border that keeps pulsing hard never settles into a hold.
- Scaling the line with the glow couples two things the film keeps independent.
