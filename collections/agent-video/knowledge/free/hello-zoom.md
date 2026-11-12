---
slug: hello-zoom
title: Hello Zoom
tier: free
category: text
evidence: source
demo: 1280x720 at 30 fps, 75 frames (2.5 s)
length_30fps: 75
palette: light #FAF9F6, dark #141414, accent none
used_in: none
---

# Hello Zoom

> Words flicker and grow on a dark card, one lands huge on a light card, its
> line types on, and the camera dives through a letter into the next card.

## What it shows

Seven words cut past one per beat on a dark card, each larger than the last. The
lead word lands enormous on a light card and starts edging left. The rest of its
line types on beside it and the full line settles centred. The camera then
pushes through the deepest ink of a glyph near the line middle, swelling past
eleven times size, and the next card rushes up from behind the type and holds
with a faint drift.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                      | Curve |
| ----- | --------------- | ----------------------------------------------------------------------------------------------- | ----- |
| 0–19  | 0–19            | Flicker words cut in, sizes 75.4 to 225.1 px with rising baselines                              | hold  |
| 20–24 | 20–24           | Lead lands at 433.14 px and drifts 18 px left of centre                                         | hold  |
| 25–33 | 25–33           | Rest of the line types on over 5 frames; line slides from 68.93 percent out to centre           | hold  |
| 36–48 | 36–48           | Camera dives 1x to 11.7x about the line with small x and y drift, through the deepest glyph ink | hold  |
| 41–49 | 41–49           | Next word scales 0 to 0.868 behind the type                                                     | hold  |
| 49–75 | 49–75           | Next card holds, creeping to 1.05                                                               | hold  |

## Techniques

- `TextSwap`: seven flicker words hard-cut about every 3 frames with measured
  size, drop and nudge per step (source)
- `Typewriter`: the rest of the line appears over 5 frames from frame 25
  (source)
- `Reveal`: the lead scales on as the light card; the line is white type used as
  an SVG mask, so the next card shows through the letters (source)
- `Camera`: the push scales 1 to 11.7 about the line centre with tracked drift,
  aimed at the deepest ink near the line middle (source)

## Props to expose

| Prop       | Type                 | Default           | Purpose                                                           |
| ---------- | -------------------- | ----------------- | ----------------------------------------------------------------- |
| words      | string[] \| string   | 7 framework words | Flicker words; a comma-separated string also works                |
| lead       | string               | Hello             | Word that lands huge on the second card                           |
| rest       | string               | snapcn.           | Text typed on after the lead                                      |
| nextWord   | string               | npx               | Card found behind the type                                        |
| fontFamily | string               | Inter             | Face for all three cards                                          |
| fontWeight | number               | 700               | Weight for all three cards                                        |
| inkColor   | string               | #141414           | First and last cards, and type on the second                      |
| paperColor | string               | #faf9f6           | Second card, and type on the first and last                       |
| through    | [number, number]     | measured          | Dive point in em right of the line start and up from its baseline |
| speed      | number               | 1                 | Time multiplier                                                   |
| theme      | Partial<SnapCnTheme> | —                 | Design-system token overrides                                     |
| mode       | light \| dark        | —                 | Theme selector                                                    |

## Rebuild it

1. Draw on a 1920-wide stage scaled to the composition and pick the flicker word
   by frame divided across 21 beats.
2. Cut words in with per-step size, drop and nudge tables; cap copy at 1728 px
   wide.
3. Land the lead at 433.14 px on the paper card at frame 20 and drift it left
   through frame 24.
4. Type the rest over frames 25 to 29 while sliding the line from its offset
   start to centre.
5. Mask the ink layer with the resting line so the next card lives inside the
   glyphs.
6. Push 1x to 11.7x about the line centre through frames 36 to 48 with the
   measured drift tables.
7. Scale the next word from 0 behind the type from frame 41 and hold it from
   frame 49.

## Pitfalls

- Aiming the dive anywhere but the deepest mid-line ink exits through paper and
  the trick reads as a plain zoom.
- Rounding baselines to whole pixels makes the dive climb in steps; paint each
  line as two blended copies.
- Sizing the line without the 1728 px cap lets long copy run off the stage.
