---
slug: pain-point
title: Pain Point
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 272 frames (4.53 s)
length_30fps: 136
palette: light #FCFCFC, dark #100004, accent #375083
used_in: none
---

# Pain Point

> A jab at hand-animation types itself over a blue glow while editor panels
> gather around it.

## What it shows

A dark frame carries a blue glow washing up from the bottom. The line "Still
hand-animating" types itself with a blinking caret, each fresh word arriving in
blue before cooling to white. Small editor panels, an export dialog, keyframe
cards and a timeline, fade up around the edges while the line completes. The
first line clears, and a second line "your launch video?" types itself the same
way. The caret stops and the frame rests on the finished question surrounded by
UI.

## Timeline

| Phase           | Frames (30 fps) | What moves                                                     | Curve               |
| --------------- | --------------- | -------------------------------------------------------------- | ------------------- |
| Wash in         | 0-9             | Blue glow rises from the bottom over black                     | ease-out (inferred) |
| Line one types  | 9-54            | "Still hand-animating" types with caret, new words arrive blue | linear (observed)   |
| Panels gather   | 30-60           | Editor cards and timeline fade up around the edges             | ease-out (inferred) |
| Line one clears | 54-63           | First line fades and small dim copy remains above              | fade (inferred)     |
| Line two types  | 63-109          | "your launch video?" types with caret, same blue arrival       | linear (observed)   |
| Rest            | 109-136         | Finished question holds, caret stops blinking                  | hold (observed)     |

## Techniques

- `Stage`: dark act with a blue glow wash along the bottom edge (observed)
- `Typewriter`: two lines type at a steady character rate with a blinking
  `Caret` (observed)
- `Caret`: bar sits at the typing edge and goes still on the final frame
  (observed)
- `GlyphGlow`: each new word lands in blue and cools to white behind the caret
  (observed)
- `Card`: export dialog, keyframe and timeline panels fade up around the line
  (observed)

## Props to expose

| Prop        | Type   | Default              | Purpose                                   |
| ----------- | ------ | -------------------- | ----------------------------------------- |
| lineOne     | string | Still hand-animating | First typed line (proposed)               |
| lineTwo     | string | your launch video?   | Second typed line (proposed)              |
| accentColor | string | #375083              | Arrival tint and glow wash (proposed)     |
| panelCount  | number | 5                    | Surrounding editor cards (proposed)       |
| typingRate  | number | 2                    | Frames per character at 30 fps (proposed) |

## Rebuild it

1. Paint the dark `Stage` and raise the blue bottom wash.
2. Type line one with a blinking `Caret`, tinting each new word blue.
3. Fade the editor `Card` panels up around the edges while typing continues.
4. Clear line one and type line two with the same treatment.
5. Stop the caret on the last frame and hold the finished question.
6. Keep panels dim so the type stays the single focal point.

## Pitfalls

- Keeping both lines on screen at once crowds the frame and splits focus.
- Tinting whole lines blue instead of only the newest word flattens the typing
  read.
- Bringing panels in too bright lets the UI outshine the sentence.
- A caret that keeps blinking after the question lands feels unfinished.
