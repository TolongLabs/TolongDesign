---
slug: glow-type
title: Glow Type
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #FCFCFC, dark #080808, accent none
used_in: none
---

# Glow Type

> A small glowing line builds word by word, then the camera dives through giant
> letters and lands on the closing line.

## What it shows

White type builds word by word on black: "A great demo is more than". Each
arriving word carries a soft glow that cools as the next word lands. The
finished line holds, then dims and spreads apart. The camera dives into enormous
letterforms, pans along them while blurred, and pulls back to reveal the small
closing line "just a screen recording". That line holds with a gentle glow to
the end.

## Timeline

| Phase           | Frames (30 fps) | What moves                                                | Curve                   |
| --------------- | --------------- | --------------------------------------------------------- | ----------------------- |
| Black           | 0-10            | Empty ink frame                                           | hold (observed)         |
| Line one builds | 10-40           | Words arrive one at a time with a glow on the newest word | linear steps (observed) |
| Line one holds  | 40-60           | Full line "A great demo is more than" rests glowing       | hold (observed)         |
| Dim and dive    | 60-80           | Line dims, camera dives into giant letterforms with blur  | ease-in (inferred)      |
| Letter pan      | 80-110          | Camera travels along huge blurred glyphs                  | linear (inferred)       |
| Pullback        | 110-120         | Camera retreats to the small closing line                 | ease-out (inferred)     |
| Closing hold    | 120-150         | "just a screen recording" rests with soft glow            | hold (observed)         |

## Techniques

- `Stage`: single ink act for the whole run (observed)
- `SplitText`: line one arrives word by word over about 30 frames (observed)
- `GlyphGlow`: the newest word glows, then cools as the next word lands
  (observed)
- `Camera`: dive into the type, horizontal pan along giant glyphs, pullback to
  the closing line (inferred)
- `MotionBlur`: directional blur rides the dive and the pan at peak velocity
  (inferred)

## Props to expose

| Prop           | Type   | Default                   | Purpose                                              |
| -------------- | ------ | ------------------------- | ---------------------------------------------------- |
| leadLine       | string | A great demo is more than | First line, built word by word (proposed)            |
| closingLine    | string | just a screen recording   | Second line revealed by the dive (proposed)          |
| glowColor      | string | #FFFFFF                   | Glow tint on the active word (proposed)              |
| diveScale      | number | 8                         | Camera scale inside the giant letterforms (proposed) |
| wordsPerSecond | number | 5                         | Build rate of the first line (proposed)              |

## Rebuild it

1. Set the ink `Stage` and center the small first line.
2. Reveal words one at a time, glowing the newest and cooling the rest.
3. Hold the full first line for about 20 frames.
4. Dim the line and dive the camera into the giant second line with blur.
5. Pan along the glyphs, then pull back to frame the small closing line.
6. Hold the closing line glowing softly to the end.

## Pitfalls

- Building both lines with the same treatment removes the reason for the dive.
- Skipping blur on the dive makes the move feel like a flat scale.
- Holding the first line too briefly breaks readability before the plunge.
- Panning the giant glyphs too slowly stalls the middle of the film.
