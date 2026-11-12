---
slug: orbit-flow
title: Orbit Flow
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 204 frames (3.4 s)
length_30fps: 102
palette: light #F4F4F4, dark none, accent none
used_in: none
---

# Orbit Flow

> A centred line wrapped in three dashed orbits with labelled stops riding the
> inner ring.

## What it shows

The scene settles in from slightly small while a headline rises, clears and
sharpens a word at a time. Three dashed orbits resolve around it with three
labelled pills riding the inner ring. The outer rings drift apart slowly while
the inner ring carries its stops around the line. The line holds centred as the
system turns. The film ends mid-orbit.

## Timeline

| Phase | Frames (30 fps) | What moves                                                     | Curve    |
| ----- | --------------- | -------------------------------------------------------------- | -------- |
| 1     | 0–9             | Scene settles from 0.86x; line rises and sharpens word by word | spring   |
| 2     | 9–25            | Orbits resolve; labelled stops arrive on the inner ring        | ease-out |
| 3     | 25–73           | Rings drift at constant rate; line holds centred               | linear   |
| 4     | 73–102          | Inner ring winds up; stops travel on around the line           | linear   |

## Techniques

- `Camera`: whole scene settles in from 0.86x (observed)
- `SplitText`: headline sharpens a word at a time while rising (observed)
- `LineDraw`: three dashed orbits drift apart at a constant 0.187 degrees a
  frame (observed)
- `Pill`: three labelled stops ride the inner orbit (observed)

## Props to expose

| Prop      | Type     | Default                           | Purpose                                          |
| --------- | -------- | --------------------------------- | ------------------------------------------------ |
| line      | string   | "Your demo, in continuous motion" | Centred headline (proposed)                      |
| stops     | string[] | INSTALL, COMPOSE, RENDER          | Labels riding the inner ring (proposed)          |
| ringCount | number   | 3                                 | Number of dashed orbits (proposed)               |
| driftRate | number   | 0.187                             | Degrees per frame of outer-ring drift (proposed) |

## Rebuild it

1. Settle the scene from 0.86x with a spring over frames 0–9.
2. Rise the headline and sharpen it a word at a time during the settle.
3. Draw the three dashed orbits and land the three stop pills on the inner ring
   by frame 25.
4. Drift the outer rings apart at the constant rate while the line holds.
5. Carry the stops around the inner ring through frame 102.

## Pitfalls

- Relying on the browser rasteriser for thin dashes makes sub-pixel drift
  shudder; evaluate the stroke per pixel.
- Easing the ring drift breaks the constant-rate orbit read.
- Scaling the line with the settle camera blurs its baselines; settle the scene,
  sharpen the words.
- Stopping the rings at the end removes the continuous-motion promise; the clip
  ends mid-turn.
