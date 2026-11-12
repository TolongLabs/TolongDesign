---
slug: agent-steps
title: Agent Steps
tier: free
category: ai-input
evidence: source+film
demo: 960x540 at 60 fps, 320 frames (5.33 s)
length_30fps: 160
palette: light #F4F4F0, dark none, accent none
used_in: none
---

# Agent Steps

> A prompt pill with a self-writing task log that collapses into a result pill.
> Use it when an agent should narrate its own work.

## What it shows

A soft wash blooms on paper and a prompt pill scales in. Under it a step log
writes itself one line at a time. Each step runs with a faint spinning globe,
then flips to past tense behind an accent check. Every new row pushes the column
up one pitch so the live line stays centred. When the last step finishes, the
column swells, clears, and one result pill lands in the middle with a glint. It
holds on the answer.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                     | Curve                          |
| ----- | --------------- | ------------------------------------------------------------------------------ | ------------------------------ |
| 1     | 0–11            | Query pill scales 1.31 to 1, fades in, blur clears 5.6 px to 0                 | ease-out cubic                 |
| 2     | 0–11            | Wash glow fades in behind the pill                                             | ease-out cubic                 |
| 3     | 20–100          | Six rows enter one at a time; each label swaps running to done, globe to check | ease-out cubic                 |
| 4     | 20–100          | Column shifts up one row pitch per entered step                                | cubic-bezier(0.3, 0.7, 0.3, 1) |
| 5     | 99–117          | Last row swells 1 to 1.4 and slides to centre; finished rows fade out          | cubic-bezier(0.3, 0, 0.3, 1)   |
| 6     | 119–124         | Running row hands off and fades                                                | linear                         |
| 7     | 122–123         | Result pill lands in the centre                                                | hold                           |
| 8     | 128–140         | Glint disc crosses the result pill                                             | linear                         |
| 9     | 122–160         | Result holds                                                                   | hold                           |

Rows above tagged (source), except the closing hold (observed).

## Techniques

- `Pill`: query pill and result pill, fixed heights 0.0553 and 0.0691 of frame
  height (source)
- `StepLog`: six rows with running and done labels, globe and check icons,
  one-frame scheduling (source)
- `Camera`: column rides translateY plus a 1 to 1.4 swell about the centre
  (source)
- `Reveal`: query pill blur-in with scale 1.31 and per-row fade over 0.242 s
  (source)
- `custom: glint`: accent disc crossing the result pill at 0.22 peak opacity
  (source)

## Props to expose

| Prop        | Type                  | Default                                                      | Purpose                                                                     |
| ----------- | --------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| query       | string                | "A 30-second launch video for a Next.js analytics dashboard" | Prompt shown in the entry pill                                              |
| steps       | AgentStep[] \| string | six built-in steps                                           | Rows; string form is "running > done; …", trailing "@globe" picks the globe |
| result      | string                | "Rendered 900 frames"                                        | Text of the closing pill                                                    |
| queryHold   | number                | 0.683                                                        | Seconds before the first step enters                                        |
| stepHold    | number                | 0.45                                                         | Seconds per step, except first, last, and overridden holds                  |
| finalHold   | number                | 0.283                                                        | Seconds the last running row stays before the outro                         |
| paperColor  | string                | theme background                                             | Page ground                                                                 |
| glowColor   | string                | mix of paper and accent at 0.17                              | Wash tint, not a second colour                                              |
| glowRadius  | number                | 0.465                                                        | Wash radius as a share of frame height, 0 disables                          |
| pillColor   | string                | theme card                                                   | Pill fill                                                                   |
| inkColor    | string                | theme foreground                                             | Prompt and result ink                                                       |
| stepColor   | string                | theme muted foreground                                       | Step row ink                                                                |
| accentColor | string                | theme primary                                                | Check marks and glint                                                       |
| fontFamily  | string                | theme font                                                   | Typeface for rows and pills                                                 |
| centerY     | number                | 0.5                                                          | Vertical anchor of the lockup                                               |
| speed       | number                | 1                                                            | Time multiplier on the frame clock                                          |

## Rebuild it

1. Lay out paper with a radial wash centred at 0.858 by 0.854 of the frame.
2. Enter the query `Pill` over 11 frames: scale 1.31 to 1, opacity, blur 5.6 px
   to 0.
3. Schedule rows from `queryHold`: each enters, holds, then flips label and
   icon.
4. Spin the running globe on a 2 s meridian cycle at 0.17 opacity; swap to a
   check at done.
5. Offset the column by one `ROW_PITCH` of 0.0738 frame heights per entered
   step.
6. At the outro, swell the live row to 1.4 and centre it with paired 50 percent
   shifts.
7. Fade finished rows over 0.467 s, hand off the live row, land the result
   `Pill` in one frame.
8. Cross the glint disc over 0.42 s and hold the result to frame 160.

Steps as one string, semicolons between rows:

```text
Searching the registry… > Searched the registry @globe; Reading the docs… > Read 4 component docs @globe
```

## Pitfalls

- Do not scale the label with the press or the swell; only the tile scales.
- Centre the outro row with paired plus and minus 50 percent shifts, never
  measured widths.
- The wash is a 0.17 mix toward the accent; a second solid colour reads wrong.
- Row pitch must equal row height or the column visibly slips each step.
- The result lands in a single frame; easing it in softens the payoff.
