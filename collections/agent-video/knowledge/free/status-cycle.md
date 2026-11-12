---
slug: status-cycle
title: Status Cycle
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 396 frames (6.6 s)
length_30fps: 198
palette: light #F4F4F0, dark #181818, accent #3074DE
used_in: none
---

# Status Cycle

> A status pill cycles its label, then the field crossfades into a stepping chip
> column.

## What it shows

A prefix types itself in letter by letter beside a pill. The pill swaps through
four labels, rolling each new one up behind a hard clip while its width springs
past the target and settles. The lockup then exits upward as the field
crossfades from accent to page. A column of chips steps up from below,
alternating sides, one per beat, each landing in its period-3 fill. The column
holds to the end.

## Timeline

| Phase | Frames (30 fps) | What moves         | Curve                                                                                           |
| ----- | --------------- | ------------------ | ----------------------------------------------------------------------------------------------- |
| 1     | 0-24            | Prefix cascades in | Letters scale 0.1 to 1 staggered 1 frame; Spring damping 5, stiffness 100, mass 1 (source)      |
| 2     | 0-24            | Lockup settles     | Group scale 1.16 to 1; Spring damping 26, stiffness 90, mass 1.4 (source)                       |
| 3     | 24-114          | Labels swap        | Roll up 1.02 pill heights behind clip; Easing.bezier(0.45, 0, 0.55, 1) over 0.5 s (source)      |
| 4     | 24-114          | Pill resizes       | Width morphs with overshoot past target; Easing.bezier(0.65, 0.2, 0.3, 1.5) over 0.6 s (source) |
| 5     | 144-153         | Field crossfades   | Accent layer to page layer; Linear opacity ramp (source)                                        |
| 6     | 144-156         | Lockup exits       | Line rises 0.62 frame heights; 1-exp settle (source)                                            |
| 7     | 149-190         | Chips arrive       | Column steps one slot per 8 frames; 1-exp settle, tau 0.06 s (source)                           |
| 8     | 190-198         | Column holds       | Chips still; Hold (observed)                                                                    |

## Techniques

- `TextSwap`: label rolls up behind a hard clip with no crossfade (source)
- `Pill`: status pill and alternating chips; width is its own animated quantity,
  not a padded text box (source)
- `Stage`: two opaque layers crossfading, accent field to page (source)

## Props to expose

| Prop            | Type                 | Default                | Purpose                           |
| --------------- | -------------------- | ---------------------- | --------------------------------- |
| prefix          | string               | snapcn is              | Fixed line left of the pill       |
| statuses        | string[] \| string   | 4 labels               | Pill labels in order              |
| chips           | string[] \| string   | 5 component names      | Chip labels in order              |
| fieldColor      | string               | theme primary          | Act-1 field                       |
| pageColor       | string               | theme background       | Act-2 page                        |
| pillColor       | string               | theme foreground       | Pill fill                         |
| pillLabelColor  | string               | pale field tint        | Pill label ink                    |
| prefixColor     | string               | theme foreground       | Prefix ink                        |
| chipFills       | string[] \| string   | card, pale tint, field | Chip fills cycled in order        |
| chipTextColor   | string               | theme foreground       | Chip ink on every fill            |
| chipBorderColor | string               | scaled border          | Chip hairline                     |
| fontWeight      | number               | 400                    | Status weight                     |
| chipFontWeight  | number               | 400                    | Chip weight                       |
| pillRadius      | number               | 0.229 pill heights     | Pill corner radius                |
| chipRadius      | number               | 0.162 chip heights     | Chip corner radius                |
| chipBorderWidth | number               | 0.017 chip heights     | Chip hairline width               |
| pillCenterY     | number               | 0.516                  | Lockup height as a share of frame |
| motion          | Partial motion       | measured defaults      | Curve and timing overrides        |
| fontSize        | number               | 8.7% of height         | Status type size                  |
| chipFontSize    | number               | 22.2% of height        | Chip type size                    |
| fontFamily      | string               | none                   | Face override                     |
| statusHold      | number               | 30                     | Frames between swaps              |
| introFrames     | number               | 24                     | Frames before the first swap      |
| chipStagger     | number               | 8                      | Frames between chip arrivals      |
| startAt         | number               | 0                      | Frame the scene starts on         |
| speed           | number               | 1                      | Playback multiplier               |
| theme           | Partial<SnapCnTheme> | none                   | Design-system token overrides     |
| mode            | light \| dark        | none                   | Colour mode                       |

## Rebuild it

1. Measure prefix, labels, and chips in a hidden untransformed copy.
2. Fit both acts down, never up, to their frame budgets.
3. Cascade the prefix in with per-letter baseline-pivoted scales.
4. Swap labels with the 0.5 s roll while the width runs its own overshooting
   morph.
5. Crossfade two opaque layers over 0.3 s and exit the lockup under it.
6. Step the chip column from the midpoint beat, one slot per stagger with
   exponential settle.
7. Alternate chips left and right with the period-3 fill cycle.

## Pitfalls

- A stadium pill radius reads as a different object; the reference fits 0.229
  heights.
- Mixing the label tint toward background walks the hue through green; mix
  toward card.
- Swaps at or below the roll length leave every label read mid-flight.
- Per-chip animation instead of one container transform breaks the dead-still
  beats between steps.
