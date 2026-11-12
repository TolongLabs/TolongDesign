---
slug: string-hero
title: String Hero
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 178 frames (2.97 s)
length_30fps: 89
palette: light #F8F8F4, dark #141414, accent #26447B
used_in: none
---

# String Hero

> A code editor push-in that ends on the install string as a giant headline.

## What it shows

A small editor window sits on paper and types a comment "// what if you could"
letter by letter. The camera pushes hard into the window as a second line
"install("motion")" types with syntax tints. At the peak push the film hard-cuts
to black. The word "motion" stands alone at large size, swaps from monospace to
a display face letter by letter with a blue trailing edge, then holds white.

## Timeline

| Phase         | Frames (30 fps) | What moves                                                             | Curve                                             |
| ------------- | --------------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| Open          | 0-6             | Small editor window on paper, empty dark body                          | hold (observed)                                   |
| Comment types | 6-30            | Comment line types left to right                                       | linear, about 9 chars per second (inferred)       |
| Push and code | 30-70           | `Camera` pushes into window while "install("motion")" types with tints | accelerating push table, typing linear (inferred) |
| Cut           | 74              | Hard cut from paper and editor to black with "motion" large            | hard cut (observed)                               |
| Face swap     | 74-86           | Letters swap monospace to display left to right, blue edge trails      | linear sweep slowing into last letter (observed)  |
| Hold          | 86-89           | "motion" in white on black, drifting up-left                           | hold with slow drift (observed)                   |

## Techniques

- `Stage`: paper act then ink act on the cut (observed)
- `Camera`: scale about the quoted argument from 0.91x to about 4.24x (inferred)
- `Typewriter`: comment then code line at a steady character clock with a
  `Caret` (observed)
- `TextSwap`: per-letter monospace to display substitution with a one-letter hot
  edge (observed)

## Props to expose

| Prop       | Type   | Default                | Purpose                                          |
| ---------- | ------ | ---------------------- | ------------------------------------------------ |
| comment    | string | "// what if you could" | Comment line to type (proposed)                  |
| package    | string | "motion"               | Quoted argument that becomes the hero (proposed) |
| pushFrames | number | 44                     | Frames of the editor push-in (proposed)          |
| heroSize   | number | 108                    | Font size of the closing "motion" (proposed)     |
| accent     | string | "#26447B"              | Syntax and swap-edge blue (proposed)             |

## Rebuild it

1. Place a small editor `Card` with traffic dots on a paper `Stage`.
2. `Typewriter` the comment line, then start the `Camera` push.
3. Type the install call with purple fn tint and blue string tint.
4. Push until the title bar leaves the top and the string fills the frame.
5. Hard-cut to black with "motion" at 108 px.
6. Swap letters monospace to display left to right over 12 frames.
7. Settle to all white and hold.

## Pitfalls

- Cross-fading the faces reads as a blur; each letter must substitute on one
  frame.
- Centring the push instead of anchoring on the string drifts the target.
- Easing the push like a smooth zoom misses the measured acceleration into the
  cut.
