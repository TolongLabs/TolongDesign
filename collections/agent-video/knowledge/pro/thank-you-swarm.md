---
slug: thank-you-swarm
title: Thank You Swarm
tier: pro
category: social
evidence: film
demo: 960x540 at 60 fps, 254 frames (4.23 s)
length_30fps: 127
palette: light #FCFCFC, dark #000000, accent #9B603C
used_in: none
---

# Thank You Swarm

> A supporter marquee that tears away and returns as a wall of faces around a
> thank-you.

## What it shows

A small notification card "starred snapcn" with a row of avatars drifts on
white. The row accelerates and smears into horizontal blur. Four rings of
avatars fade up from the centre outward, one ring every five frames, each
settling onto its angle. The faces fill the frame in a dense wall. "Thank you."
in serif holds the centre through the whole second half.

## Timeline

| Phase        | Frames (30 fps) | What moves                                                         | Curve                                                    |
| ------------ | --------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
| Marquee      | 0-45            | Avatar row drifts with the "starred snapcn" card                   | accelerating drift, exponential wind-up (observed)       |
| Whip out     | 45-53           | Row smears into horizontal blur and leaves                         | ease-in with `MotionBlur` (observed)                     |
| Rings gather | 53-76           | Four avatar rings fade up centre-outward, counter-rotating to rest | ease-out per ring, stagger 5 frames at 60 fps (inferred) |
| Wall fills   | 76-93           | Faces densify to a full-bleed wall around "Thank you."             | ease-out (observed)                                      |
| Hold         | 93-127          | Wall and centre line sit still                                     | hold (observed)                                          |

## Techniques

- `Pill`: small "starred snapcn · 6h" notification card with avatar strip
  (observed)
- `Marquee`: single supporter row drifting and accelerating before the whip
  (observed)
- `MotionBlur`: strong horizontal blur on the exit frames (observed)
- `Collage`: rings then wall of avatar faces fading up where they land
  (observed)

## Props to expose

| Prop       | Type     | Default               | Purpose                                                   |
| ---------- | -------- | --------------------- | --------------------------------------------------------- |
| faces      | string[] | 60                    | Avatar image URLs for the row, rings, and wall (proposed) |
| note       | string   | "starred snapcn · 6h" | Notification card copy (proposed)                         |
| rings      | number   | 4                     | Rings arriving centre-outward (proposed)                  |
| centerLine | string   | "Thank you."          | Serif line pinned at centre (proposed)                    |
| whipFrames | number   | 8                     | Frames of the blur exit at 30 fps (proposed)              |

## Rebuild it

1. Build a white `Stage` with the `Pill` card and a `Marquee` avatar row.
2. Accelerate the row exponentially, then whip it out with `MotionBlur`.
3. Fade up ring one at centre around the serif line.
4. Add three more rings every 3 frames at 30 fps, counter-rotating to rest.
5. Densify the rings into a full `Collage` wall.
6. Hold the wall and centre line still.

## Pitfalls

- Flying faces in from off-screen breaks the fade-where-they-land read.
- Using one ring instead of staggered centre-out rings loses the gather rhythm.
- Easing the marquee out instead of winding it up removes the whip.
