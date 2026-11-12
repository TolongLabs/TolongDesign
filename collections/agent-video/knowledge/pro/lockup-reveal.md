---
slug: lockup-reveal
title: Lockup Reveal
tier: pro
category: logos
evidence: film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #ECE8E8, dark #201C20, accent #F27B39
used_in:
  template-01 (Product launch), Outro — the lockup, template-04 (Startup pitch),
  Outro — the lockup, template-09 (App launch), Logo — the lockup
---

# Lockup Reveal

> A logo lockup that assembles on a construction grid, then turns out to be a
> window onto light.

## What it shows

A mark sits alone in the middle of a dark card ruled with dashed hairlines. The
name slides out of a slot behind the mark while the lockup settles from slightly
oversized. A warm gradient rises inside the letterforms. The card cuts to that
gradient full-frame with the lockup knocked out in paper. The light lockup holds
to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                       | Curve    |
| ----- | --------------- | ---------------------------------------------------------------- | -------- |
| 1     | 0–18            | Mark holds alone on the dark grid                                | hold     |
| 2     | 18–49           | Name slides out of its slot; lockup settles from 1.1x            | spring   |
| 3     | 49–99           | Full lockup holds; gradient rises inside the letterforms         | hold     |
| 4     | 99–100          | Hard cut to the gradient full-frame, lockup knocked out in paper | act flip |
| 5     | 100–133         | Light lockup settles on the gradient field                       | ease-out |
| 6     | 133–150         | Finished lockup holds                                            | hold     |

## Techniques

- `Lockup`: mark plus name assembles by sliding out of a slot (observed)
- `Grid`: dashed hairlines ride every lockup edge on the dark card (observed)
- `Reveal`: gradient rises inside the letterforms and carries across the cut
  (observed)
- `Stage`: dark card flips to the light gradient scene on a single hard cut
  (observed)

## Props to expose

| Prop      | Type             | Default          | Purpose                                                              |
| --------- | ---------------- | ---------------- | -------------------------------------------------------------------- |
| mark      | ReactNode        | camera glyph     | Mark that starts alone and slides aside (proposed)                   |
| name      | string           | "snapcn"         | Name sliding out of the slot (proposed)                              |
| gradient  | [string, string] | violet to orange | Fill rising in the letterforms and carried across the cut (proposed) |
| gridColor | string           | hairline on dark | Colour of the construction hairlines (proposed)                      |

## Rebuild it

1. Centre the mark on a dark `Stage` with the dashed `Grid` and hold to
   frame 18.
2. Slide the name out of its slot over frames 18–49 while the `Lockup` settles
   from 1.1x.
3. Hold the full lockup and rise the gradient inside the letterforms to
   frame 99.
4. Cut hard at frame 99–100 to the gradient full-frame with the lockup knocked
   out.
5. Settle the light lockup over frames 100–133.
6. Hold the finished lockup to frame 150.

## Pitfalls

- Crossfading the dark-to-light handover softens the reveal; it is one hard cut.
- Rendering the name as live text risks baseline snap; set it as outlines for
  the two-pixel slide.
- Using a second gradient for the knocked-out fill breaks continuity; reuse the
  same field.
- Dropping the hairlines removes the construction read that opens the piece.
