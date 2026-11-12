---
slug: picker-commit
title: Picker Commit
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 156 frames (2.6 s)
length_30fps: 78
palette: light #FCFCFC, dark #040404, accent #234789
used_in: none
---

# Picker Commit

> A settings wheel that flings to a stop and commits its row into a button, for
> add-component beats.

## What it shows

Glass rows stream upward past a night backdrop, each a pill with an orb icon, a
label, and a kebab menu. The wheel coasts to a stop with "Type Morph" on the
axis. That row fills from glass to ink. A white circle opens out of the row and
takes the frame while the wheel stays faintly legible through it. The standing
row then shrinks into a black "Add component +" pill on white and holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                   | Curve               |
| ----- | --------------- | ---------------------------------------------------------------------------- | ------------------- |
| 1     | 0–31            | Wheel flings upward, rows stream past and decelerate                         | ease-out (inferred) |
| 2     | 31–42           | Wheel coasts to a stop with one row on the axis                              | spring (inferred)   |
| 3     | 42–47           | Selected row fills from glass to ink                                         | linear (observed)   |
| 4     | 47–56           | White circle opens from the row and takes the frame, act flips dark to light | ease-out (observed) |
| 5     | 56–62           | Standing row shrinks into the pill, new label pushes the old one out         | spring (inferred)   |
| 6     | 62–78           | "Add component +" pill holds on white                                        | hold (observed)     |

## Techniques

- `Stage`: night backdrop flipping to a white field on the circle wipe
  (observed)
- `Pill`: glass rows with orb icon, label, and kebab menu, spacing and fade by
  distance from axis (observed)
- `Camera`: steady frame while the wheel moves through it, no travel of its own
  (inferred)
- `Highlight`: selected row fills to ink before the commit (observed)
- `Press`: row collapses into the call-to-action pill, label swapping in place
  (observed)

## Props to expose

| Prop          | Type                            | Default         | Purpose                                   |
| ------------- | ------------------------------- | --------------- | ----------------------------------------- |
| rows          | {icon: string, label: string}[] | []              | Wheel entries that wrap around (proposed) |
| selectedIndex | number                          | 0               | Row that lands on the axis (proposed)     |
| ctaLabel      | string                          | "Add component" | Label of the final pill (proposed)        |
| accent        | string                          | "#234789"       | Tint of the glass rows (proposed)         |

## Rebuild it

1. Build the night `Stage` and a vertical wheel of glass `Pill` rows that wraps.
2. Fling the wheel upward and brake it onto the selected row over ~40 frames.
3. Fill the standing row from glass to ink.
4. Open a white circle from the row's center until it takes the frame.
5. Flip the ground to white, keeping the wheel faintly visible through the wipe.
6. Shrink the row into the final pill and push the new label in sideways.
7. Hold the pill 16 frames.

## Pitfalls

- Fading the wheel out instead of grounding the wipe breaks the one-gesture
  read.
- Recreating the pill as a new element instead of shrinking the row shows a pop.
- Stopping the wheel dead without a coast reads as a freeze, not a fling.
