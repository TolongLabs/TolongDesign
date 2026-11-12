---
slug: agent-compose
title: Agent Compose
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 224 frames (3.73 s)
length_30fps: 112
palette: light #F8F8F4, dark #080808, accent none
used_in: none
---

# Agent Compose

> A composer that builds itself around a chip, then takes a request.

## What it shows

A "Video" chip with a clapperboard glyph types itself alone in closeup. Its
letters slide in and fade up one by one. The camera pulls back as a field
outline, a plus button, and a snapcn menu fade in around the chip. The
placeholder "Describe your video" types. A centred heading "What should we ship
today?" types above the field and grows from its middle. The placeholder gives
way to the request "Make a launch video for snapcn with a text reveal and a
phone frame." at about a character a frame. The send glyph flips from a waveform
to an arrow. The button flashes blue and darkens back under a soft glow.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                       | Curve               |
| ----- | --------------- | -------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–7             | Chip letters slide in and fade up, close                                         | ease-out (observed) |
| 2     | 7–30            | Camera pulls back; field, plus, and menu fade in                                 | ease-out (observed) |
| 3     | 30–60           | Placeholder types; heading types above and grows from the middle                 | linear (observed)   |
| 4     | 60–97           | Request types at about a character a frame                                       | linear (observed)   |
| 5     | 97–112          | Send glyph flips waveform to arrow; button flashes blue, then darkens under glow | ease-out (observed) |

## Techniques

- `Stage`: warm paper field (observed)
- `Pill`: Video chip with a clapperboard glyph (observed)
- `Camera`: closeup pullback revealing the composer (observed)
- `Composer`: field with placeholder, plus, chip, menu, mic, and send (observed)
- `Reveal`: letters sliding in and fading up; chrome fading in (observed)
- `Typewriter`: placeholder, heading, and request at fixed rates (observed)
- `Caret`: thin typing edge (inferred)
- `TextSwap`: placeholder replaced by the request; waveform replaced by the
  arrow (observed)
- `Press`: send button flash from blue to dark with a glow (observed)

## Props to expose

| Prop        | Type   | Default                                                                | Purpose                                       |
| ----------- | ------ | ---------------------------------------------------------------------- | --------------------------------------------- |
| chipLabel   | string | "Video"                                                                | Label of the anchor chip (proposed)           |
| heading     | string | "What should we ship today?"                                           | Centred line typed above the field (proposed) |
| placeholder | string | "Describe your video"                                                  | Hint text replaced by the request (proposed)  |
| request     | string | "Make a launch video for snapcn with a text reveal and a phone frame." | Final typed request (proposed)                |
| flashColor  | string | "#2F72DC"                                                              | Send button flash colour (proposed)           |

## Rebuild it

1. Type the chip label alone in closeup with a `Reveal` per letter.
2. Pull the `Camera` back while fading the `Composer` chrome in.
3. Type the placeholder, then the heading above, growing it from the middle.
4. Swap in the request with `Typewriter` at one character a frame.
5. Flip the send glyph from waveform to arrow.
6. Flash the button blue and settle it dark under a soft glow.

## Pitfalls

- Fading the chrome in before the pullback finishes crowds the closeup.
- Growing the heading from the left instead of the middle.
- Typing the request slower than a character a frame drags the long beat.
- Skipping the glow leaves the dark button stranded on paper.
