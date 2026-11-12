---
slug: focus-pull
title: Focus Pull
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 196 frames (3.27 s)
length_30fps: 98
palette: light #FCFCFC, dark #000000, accent #2A5BA6
used_in: none
---

# Focus Pull

> Phrases resolve out of a moving colour field one at a time. Use it for a slow
> three-line statement.

## What it shows

A blue field with black lobes drifts underneath. "Are you" arrives from the
right, oversized and defocused, and pulls into focus a glyph at a time while
decelerating into place. It holds huge, then leaves the way it came as "Still"
resolves small in the centre over the top of it. "Still" holds while the field
moves. Then "editing demos by hand?" resolves a glyph at a time and holds small
to the end. Everything blue about the type is the field showing through
unfinished glyphs; the ink itself is plain white.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                         | Curve               |
| ----- | --------------- | ---------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–13            | "Are you" enters from the right oversized and blurred, resolving a glyph at a time | ease-out (observed) |
| 2     | 13–20           | Huge line holds sharp and centred                                                  | hold (observed)     |
| 3     | 20–26           | Line exits left, going soft again                                                  | ease-in (inferred)  |
| 4     | 26–33           | "Still" resolves small in the centre over the outgoing blur                        | ease-out (observed) |
| 5     | 33–45           | "Still" holds while the field drifts beneath it                                    | hold (inferred)     |
| 6     | 45–52           | "editing demos by hand?" resolves a glyph at a time                                | ease-out (observed) |
| 7     | 52–98           | Small closing line holds to the end                                                | hold (observed)     |

## Techniques

- `Stage`: blue field with soft black lobes drifting under everything (observed)
- `Reveal`: each line arrives oversized and defocused from the right and
  resolves glyph by glyph; the blue in unfinished glyphs is the field showing
  through, with no blend mode and no glow (observed)
- `Camera`: each line decelerates into place and keeps creeping after it lands
  (observed)
- `SplitText`: per-glyph focus ramp across the arriving line (inferred)

## Props to expose

| Prop         | Type     | Default                                          | Purpose                                                        |
| ------------ | -------- | ------------------------------------------------ | -------------------------------------------------------------- |
| `lines`      | string[] | `["Are you", "Still", "editing demos by hand?"]` | The three phrases resolved in order (proposed)                 |
| `openScale`  | number   | `2.2`                                            | How oversized the first line arrives (proposed)                |
| `fieldSpeed` | number   | `1.0`                                            | Drift speed of the colour field underneath (proposed)          |
| `accent`     | string   | `"#2A5BA6"`                                      | Blue of the field showing through unfinished glyphs (proposed) |

## Rebuild it

1. Drift the blue-and-black field slowly under a centred white line.
2. Fly "Are you" in from the right at over twice size with heavy defocus.
3. Resolve it glyph by glyph while decelerating it to rest, and keep it
   creeping.
4. Send it back out left the way it came while resolving "Still" small over the
   top.
5. Hold "Still" against the moving field.
6. Resolve "editing demos by hand?" glyph by glyph and hold it small to
   frame 98.

## Pitfalls

- Adding a glow or blend mode to the blue glyphs fakes what the field already
  does for free.
- Resolving all glyphs at once turns a focus pull into a blur fade.
- Freezing the field during a hold makes the long tail feel dead; it must keep
  drifting.
- Cutting between lines instead of overlapping the exit and the entrance breaks
  the continuous read.
