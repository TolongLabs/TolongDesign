---
slug: orb-swarm
title: Orb Swarm
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 320 frames (5.33 s)
length_30fps: 160
palette: light #F8F8F8, dark none, accent #649AFC
used_in: none
---

# Orb Swarm

> Six text cards told one beat at a time while glass orbs split, swarm and
> thread into a ring. Use it for a kinetic typography moment with a liquid
> accent.

## What it shows

The first card arrives whole on white while four glass orbs burst out of the
line. Each orb splits so four become eight and then sixteen as the middle cards
reveal word by word, each new word tinted indigo and violet before turning to
ink. The sixteen drift out, wind into a clockwise vortex, collapse into a knot
and pay out as a chain. The chain loops around the closing card, then shrinks
away bead by bead while the last line lifts with growing blur and is gone.

## Timeline

| Phase              | Frames (30 fps) | What moves                                                                                                          | Curve                                                |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Burst              | 0–27            | Cards 0–1 arrive whole; 4 orbs burst from card 0 at beat 10, each on its own ease table                             | Catmull-Rom through beat tables (source)             |
| Splits, words land | 27–56           | Orbs split 4 to 8 at beat 34 and 8 to 16 at beat 45; cards 2–4 reveal word by word on beats 22–52 with letter tints | stepped word tables, Catmull-Rom orb tables (source) |
| Vortex and knot    | 56–95           | Sixteen drift out, wind into a vortex from beat 63, collapse to a knot, pay out as a chain from beat 76             | Catmull-Rom through beat tables (source)             |
| Chain loop         | 95–139          | 52-bead chain loops around the closing card that slides in from the right at beat 88 and washes pink to lavender    | stepped tables (source)                              |
| Shrink away        | 139–160         | Beads shrink away one by one; last card lifts with blur to 1.2 and alpha to 0                                       | stepped tables (source)                              |

## Techniques

- `Particles`: 4 orbs burst, split to 8 then 16, then swarm, vortex, knot, chain
  and ring on tables measured beat by beat at 24 fps (source)
- `custom: orb-shader`: each orb is shaded per pixel on canvas with a band
  texture scrolling once per 14 beats, bowed toward the rim, with a 2 px soft
  glass edge (source)
- `SplitText`: middle cards reveal word by word on the reference beats; the head
  cards and the last card arrive whole (source)
- `custom: word-tint`: arriving words wear per-letter indigo and violet tints
  left to right and turn to ink when the next word lands (source)
- `Reveal`: the closing card slides in from 660 px right, holds, then lifts away
  with blur and fading alpha (source)
- `Camera`: the card layout carries a slight turn that settles early in the
  chain loop (inferred)

## Props to expose

| Prop       | Type                 | Default                                                                            | Purpose                                                 |
| ---------- | -------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| script     | string               | one command \| what if \| every launch \| you shipped \| got a video \| in seconds | Six cards split on \|; middle cards reveal word by word |
| background | string               | theme background                                                                   | Page color                                              |
| ink        | string               | theme foreground                                                                   | Settled type color                                      |
| orbColor   | string               | theme primary                                                                      | Hue and chroma every glass band and tint turns toward   |
| theme      | Partial<SnapCnTheme> | —                                                                                  | Design-token overrides                                  |
| mode       | "light" \| "dark"    | —                                                                                  | Page mode; dark mirrors the measured tints              |
| fontFamily | string               | Inter Tight 490                                                                    | Face drawn into the canvas                              |
| softness   | number               | 0.7                                                                                | Type blur in card px; the reference is soft             |
| speed      | number               | 1                                                                                  | Time multiplier                                         |
| className  | string               | —                                                                                  | Class for the outer wrapper                             |

## Rebuild it

1. Lay six cards from the pipe-separated script on a 714x392 card at 28.54 px
   Inter Tight.
2. Burst 4 orbs from the first line at beat 10, splitting to 8 at beat 34 and 16
   at beat 45, reading every position from Catmull-Rom beat tables.
3. Reveal the middle cards word by word on beats 22–52, tinting new letters
   indigo to violet and settling them to ink.
4. Wind the sixteen into a vortex at beat 63, collapse them to a knot, and pay
   out a 52-bead chain from beat 76.
5. Slide the closing card in from the right at beat 88, loop the chain around
   it, and wash it pink to lavender.
6. Shrink the ring bead by bead from beat 111 while the last card lifts with
   blur to 1.2 and alpha to 0 by beat 128.

## Pitfalls

- Sampling beat tables linearly corners every beat; positions need Catmull-Rom
  between whole beats.
- Styling orbs with CSS gradients cannot bend the bands; the latitude bow needs
  per-pixel shading.
- Drawing type at frame resolution lands baselines between pixels; the canvas
  runs four times finer than the frame.
- Recoloring by shifting hue without scaling chroma changes the glass lightness
  the fit was measured in.
