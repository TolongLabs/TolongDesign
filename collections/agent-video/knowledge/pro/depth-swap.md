---
slug: depth-swap
title: Depth Swap
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 148 frames (2.47 s)
length_30fps: 74
palette: light #FCF8E4, dark #101014, accent #BE3723
used_in: none
---

# Depth Swap

> A headline that swaps inside a wall of pictures with real depth of field.

## What it shows

A wall of small pictures starts heavily defocused on a dark field while the line
"You wait..." blurs up out of nothing. The camera dollies back and each picture
pulls into focus at its own distance. On the beat the line swaps to "Ship it
with snapcn Pro", sharp in the middle and blurred at its ends. The camera slides
sideways as the nearest picture swings across the frame and grows. The clip ends
while the slide is still moving.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                | Curve    |
| ----- | --------------- | ------------------------------------------------------------------------- | -------- |
| 1     | 0–10            | The defocused wall holds; the first line blurs up out of nothing          | hold     |
| 2     | 10–30           | The camera dollies back; pictures pull into focus at their own distances  | ease-out |
| 3     | 30–44           | The line swaps to the second; the camera starts sliding sideways          | hold     |
| 4     | 44–73           | The sideways slide continues; the nearest picture swings across and grows | ease-out |

## Techniques

- `Stage`: dark field behind the picture wall (observed)
- `Camera`: dolly back out of the wall, then a lateral slide (observed)
- `Collage`: wall of small pictures at different depths (observed)
- `Reveal`: lines arrive as blur-ins, sharp in the middle first (observed)
- `TextSwap`: the first line cuts to the second with blurred ends (observed)
- `custom: rack-focus`: per-picture defocus animated by depth, not by one global
  blur (inferred)

## Props to expose

| Prop       | Type     | Default                   | Purpose                                               |
| ---------- | -------- | ------------------------- | ----------------------------------------------------- |
| firstLine  | string   | "You wait..."             | Opening headline (proposed)                           |
| secondLine | string   | "Ship it with snapcn Pro" | Headline after the swap (proposed)                    |
| pictures   | string[] | twelve items as observed  | Images filling the wall (proposed)                    |
| dollyOut   | number   | 1.35                      | Camera distance multiplier across the shot (proposed) |
| focusDepth | number[] | per-picture values        | Focal distance driving each card's blur (proposed)    |

## Rebuild it

1. Stack a `Collage` of pictures deep on a dark `Stage`, all defocused.
2. Blur in the first line with `Reveal`.
3. Dolly the `Camera` back while each card's `rack-focus` resolves at its own
   rate.
4. Cut the line with `TextSwap`, keeping the ends soft.
5. Slide the camera sideways and swing the nearest picture across, growing.
6. End mid-move without settling.

## Pitfalls

- One global blur for all cards reads as fog, not depth.
- Resolving every card at once removes the distance ordering.
- Sharpening the swapped line edge to edge kills the depth match.
- Settling the camera at the end contradicts the measured exit, which never
  arrives.
