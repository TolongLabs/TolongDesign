---
slug: phrase-swarm
title: Phrase Swarm
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 102 frames (1.7 s)
length_30fps: 51
palette: light #F8F8F4, dark none, accent none
used_in: none
---

# Phrase Swarm

> A headline that bursts into loose letters and regathers as a new line, for
> punchy one-line turns.

## What it shows

The opening line "Ship the demo" holds centered on paper. Its letters fly
outward and drift apart, scattering across the frame. At peak scatter the scene
cuts to the closing phrase gathering back. Letters fly in from the edges at
different depths, a couple land late, and "Own the launch" settles centered and
holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                            | Curve                  |
| ----- | --------------- | --------------------------------------------------------------------- | ---------------------- |
| 1     | 0–10            | Opening line holds centered                                           | hold (observed)        |
| 2     | 10–23           | Letters fly outward and spread apart                                  | ease-out (inferred)    |
| 3     | 23–24           | Hard cut: new phrase identity, positions, and sizes swap on one frame | linear (observed)      |
| 4     | 24–40           | Scattered letters gather into the closing line, two landing late      | ease-in-out (inferred) |
| 5     | 40–51           | Closing line holds centered                                           | hold (observed)        |

## Techniques

- `Stage`: full-frame paper field, near-white with a faint warm tint (observed)
- `SplitText`: per-letter scatter out and gather in, each letter on its own
  offset path (observed)
- `Camera`: slight push under the scatter and gather, one continuous scale about
  center (inferred)

## Props to expose

| Prop         | Type   | Default          | Purpose                                      |
| ------------ | ------ | ---------------- | -------------------------------------------- |
| phraseA      | string | "Ship the demo"  | Opening line that breaks apart (proposed)    |
| phraseB      | string | "Own the launch" | Closing line that gathers (proposed)         |
| scatter      | number | 220              | Peak letter displacement in px (proposed)    |
| gatherFrames | number | 16               | Frames the gather takes at 30 fps (proposed) |

## Rebuild it

1. Set the paper `Stage` and center phraseA.
2. Hold 10 frames for readability.
3. Animate each letter outward with staggered distance and slight rotation.
4. Hard cut at peak: swap strings, positions, and sizes on one frame.
5. Fly letters back over twice the scatter time with varied depths.
6. Land the two slowest letters a few frames late.
7. Hold the closed line 11 frames.

## Pitfalls

- Softening the middle cut into a dissolve kills the snap.
- Equal letter timing reads as a loop; vary offsets and depths.
- Landing every letter on the same frame looks mechanical; keep two stragglers.
