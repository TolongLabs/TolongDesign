---
slug: agent-result
title: Agent Result
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #F4F4F4, dark #181818, accent none
used_in: none
---

# Agent Result

> A dark composer that sends a request and hands back a built answer card.

## What it shows

On a near-black field, the request "Can you turn this release into a video?"
types into a dark composer. Each fresh character lands washed light and settles
to ink behind the caret. The camera eases the field into place and pans left as
the line outgrows it. The focus ring flares as the message sends. The frame cuts
hard to the run: two tool-call cards arrive in accent and blanch to white with a
rail between them. The transcript scrolls to follow its last line. The answer
builds underneath: a summary sentence, a serif line, a snapcn source chip, and a
one-row table reading Video "Launch • 0:20", Scenes "Hero, changelog, pricing",
Link "Open in editor", over a small toolbar.

## Timeline

| Phase | Frames (30 fps) | What moves                                                   | Curve               |
| ----- | --------------- | ------------------------------------------------------------ | ------------------- |
| 1     | 0–50            | Request types; fresh glyphs land washed, then settle to ink  | linear (observed)   |
| 2     | 50–60           | Camera eases the field into place; focus ring flares on send | ease-out (observed) |
| 3     | 60–70           | Hard cut from the composer to the run transcript             | hold (observed)     |
| 4     | 70–110          | Tool-call cards arrive and blanch; rail draws between them   | ease-out (observed) |
| 5     | 110–150         | Answer builds: summary, serif line, chip, table row, toolbar | ease-out (observed) |

## Techniques

- `Stage`: ink field for the ask, held into the answer (observed)
- `Composer`: dark rounded field with a plus and a focus ring (observed)
- `Camera`: ease into place plus a leftward pan as the line overflows (observed)
- `Typewriter`: fixed-rate request typing (observed)
- `Caret`: thin bar with a wash wave trailing behind it (observed)
- `StepLog`: two tool calls arriving in sequence over a rail (observed)
- `LineDraw`: rail drawn between the tool-call cards (inferred)
- `Card`: tool-call and answer cards arriving in accent, blanching white
  (observed)
- `Pill`: snapcn source chip (observed)
- `AppScreen`: one-row result table with a toolbar beneath (observed)

## Props to expose

| Prop      | Type     | Default                                                                        | Purpose                                       |
| --------- | -------- | ------------------------------------------------------------------------------ | --------------------------------------------- |
| request   | string   | "Can you turn this release into a video?"                                      | Text typed into the dark composer (proposed)  |
| washColor | string   | "#E8B4A0"                                                                      | Fresh-glyph wash before it settles (proposed) |
| toolCalls | string[] | ["Cut the video", "Pull the preview link"]                                     | Steps shown over the rail (proposed)          |
| summary   | string   | "I've cut a 20-second launch video from this release's changelog. Link below:" | Answer lead sentence (proposed)               |
| rowCells  | string[] | ["Launch • 0:20", "Hero, changelog, pricing", "Open in editor"]                | Table row contents (proposed)                 |

## Rebuild it

1. Open on the ink `Stage` with the dark `Composer`.
2. Type the request; wash each glyph light and settle it to ink behind the
   `Caret`.
3. Pan left as the line overflows; flare the focus ring on send.
4. `hard cut` to the run; arrive the tool-call `Card`s over a `LineDraw` rail.
5. Scroll the transcript to its last line.
6. Build the answer: summary, serif line, `Pill` chip, `AppScreen` row, toolbar.

## Pitfalls

- Settling glyphs instantly removes the wash wave that carries the typing.
- Cross-fading the composer into the run instead of a hard cut.
- Drawing the rail after the cards instead of with them.
- A light composer breaks the ink-act contrast the result needs.
