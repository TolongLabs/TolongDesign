---
slug: version-drop
title: Version Drop
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 240 frames (4.0 s)
length_30fps: 120
palette: light #FCFCFC, dark #000000, accent none
used_in: none
---

# Version Drop

> A product name types itself across two jump cuts, then its version number
> lands one towering glyph at a time.

## What it shows

Black type moves on plain paper. The name keys in huge and cropped, so only
fragments like "sna" and "snapc" read at the frame edge. A hard cut drops to a
small centered line that keeps typing to "snapcn Pro Motion" while the camera
pushes in. Another hard cut lands on a frame-high "1" carrying a pale vertical
ramp that resolves to flat ink. The dot arrives grey and sets black, then "0"
lands the same way, and the finished "1.0" holds to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                     | Curve               |
| ----- | --------------- | ------------------------------------------------------------------------------ | ------------------- |
| Open  | 0–8             | Blank paper; the name starts keying in huge at the left edge                   | linear (observed)   |
| Run   | 8–20            | Cropped glyphs cross the frame, "sna" to "snapc"                               | linear (observed)   |
| Push  | 20–54           | Hard cut to a small line; it types to the full name while the camera pushes in | linear (observed)   |
| One   | 54–58           | Hard cut to a frame-high "1" with a ramp resolving to flat                     | ease-out (observed) |
| Dot   | 58–72           | The dot arrives pale grey, then sets black while "1" holds                     | hold (observed)     |
| Zero  | 72–78           | "0" arrives with the same ramp; "1.0" completes                                | ease-out (observed) |
| Hold  | 78–120          | The finished version rests full frame                                          | hold (observed)     |

## Techniques

- `Stage`: white paper field through all three shots (observed)
- `Typewriter`: the name keys in at a fixed character rate (observed)
- `Camera`: slow push-in across the small-line shot (observed)
- `custom: ramp-resolve`: each version glyph arrives pale with a vertical ramp
  and flattens to solid ink (observed)

## Props to expose

| Prop       | Type   | Default             | Purpose                                            |
| ---------- | ------ | ------------------- | -------------------------------------------------- |
| name       | string | "snapcn Pro Motion" | Full line typed in shot two (proposed)             |
| version    | string | "1.0"               | Glyphs set frame-high in shot three (proposed)     |
| typeRate   | number | 30                  | Characters per second at 30 fps (proposed)         |
| rampFrames | number | 6                   | Frames each glyph takes to resolve flat (proposed) |
| ink        | string | "#000000"           | Type color (proposed)                              |
| paper      | string | "#FCFCFC"           | Stage color (proposed)                             |

## Rebuild it

1. Set a paper `Stage` and key the name in huge with `Typewriter`, cropped past
   the frame edge.
2. `hard cut` to a small centered line and keep typing while the `Camera` pushes
   in.
3. `hard cut` to the version with each glyph at frame height.
4. Resolve each glyph from pale to flat ink with the custom ramp.
5. Land the glyphs in order with short holds between arrivals.
6. Hold the finished number for the full end beat.

## Pitfalls

- Easing between the shot sizes turns deliberate cuts into a wandering camera.
- Resolving all glyphs at once; they land one at a time with holds between.
- Skipping the pale ramp makes the digits pop instead of settle.
- Letterspacing the small line; it stays tight and centered.
