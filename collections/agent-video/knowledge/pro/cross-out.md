---
slug: cross-out
title: Cross Out
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 92 frames (1.53 s)
length_30fps: 46
palette: light #ECECE8, dark #000000, accent #2EC26B
used_in: none
---

# Cross Out

> Cross out the old advice, then name what replaces it. Use it for a correction
> or repositioning beat.

## What it shows

"Hand-code Demos" rests on a card. Two green marker strokes cross it out and
hold. The strokes wipe back off the way they came while the two words drift
apart and the card grows to hold them. A hard cut lands on black. The real
sentence builds a word at a time over a dashed diagram: "demos", then "your
demos", then "but your demos".

## Timeline

| Phase | Frames (30 fps) | What moves                                                               | Curve                  |
| ----- | --------------- | ------------------------------------------------------------------------ | ---------------------- |
| 1     | 0–3             | "Hand-code Demos" rests on its card                                      | hold (observed)        |
| 2     | 3–9             | Two marker strokes cross the headline out                                | ease-out (observed)    |
| 3     | 9–18            | Crossed headline holds                                                   | hold (observed)        |
| 4     | 18–25           | Strokes wipe back off along the path they drew                           | ease-in-out (inferred) |
| 5     | 25–30           | Words drift apart from a 19px gap to a 76px gap; card grows to hold them | ease-out (inferred)    |
| 6     | 30–31           | Hard cut to black                                                        | hold (observed)        |
| 7     | 31–46           | Closing sentence builds a word at a time over the dashed diagram         | linear (observed)      |

## Techniques

- `Card`: headline card never animates itself; it is width max-content around
  the line, so all visible growth comes from the word gap (observed)
- `LineDraw`: two marker strokes draw on, hold, and wipe off as one arclength
  operation with a swelling, tapering width and a seeded noise edge (observed)
- `SplitText`: words drift apart from a 19px gap to a 76px gap while the
  headline climbs 4.5px about a pivot 90px below the frame (observed)
- `Stage`: hard cut from the light card act to the black diagram act with no
  transition (observed)
- `Grid`: faint dashed diagram construction lines sit under the closing sentence
  (observed)

## Props to expose

| Prop          | Type     | Default                                     | Purpose                                                          |
| ------------- | -------- | ------------------------------------------- | ---------------------------------------------------------------- |
| `rejected`    | string   | `"Hand-code Demos"`                         | Headline that gets crossed out (proposed)                        |
| `resolved`    | string[] | `["demos", "your demos", "but your demos"]` | Closing sentence built a word at a time after the cut (proposed) |
| `markerColor` | string   | `"#2EC26B"`                                 | Marker stroke colour (proposed)                                  |
| `cutFrame`    | number   | `30`                                        | Frame at 30 fps of the hard cut to black (proposed)              |

## Rebuild it

1. Set the rejected headline on a width max-content card and hold it.
2. Draw two marker strokes across it as arclength polygons with taper and a
   noise edge.
3. Hold the crossed state for about 9 frames.
4. Wipe the strokes back off along the same paths.
5. Drift the words apart from a 19px to a 76px gap so the card grows itself.
6. Hard-cut to the black dashed diagram and build the closing words one at a
   time.

## Pitfalls

- Drawing the marker with a dash offset cannot taper or chop ends; use an
  arclength polygon.
- Animating the card width directly fights the text that already sizes it;
  animate only the gap.
- Scaling the growing line about its centre walks it off its baseline; pivot
  below the frame.
- Softening the cut into a fade turns a rejection into a dissolve.
