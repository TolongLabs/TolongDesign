---
slug: glass-prompt
title: Glass Prompt
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 302 frames (5.03 s)
length_30fps: 151
palette: light #FCFCFC, dark #000000, accent #C1D159
used_in: none
---

# Glass Prompt

> A prompt types into a pane of glass, then the camera dives through its send
> button. Use it for a prompt-to-gallery payoff.

## What it shows

A glass pill floats over rolling hills while the request "Turn my snapcn
components into a launch reel" types itself in. An arrow pops in at its end. The
shot cuts in close on the arrow with the hills gone soft behind the glass. A
pointer rises to it and presses. The pane rolls and rushes the lens as the arrow
swells into a band of light and the glass washes out to white. The camera passes
through, and nine pictures fan out of the arrow's middle into a ring. Each
develops out of a blue negative into its own colours as the ring comes round,
then holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                             | Curve               |
| ----- | --------------- | -------------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–44            | Request types into the glass pill over the hills; arrow pops in at the end             | linear (observed)   |
| 2     | 44–60           | Hard cut close onto the arrow; hills go soft behind the glass                          | hold (observed)     |
| 3     | 60–80           | Pointer rises to the arrow and presses                                                 | ease-out (inferred) |
| 4     | 80–90           | Pane rolls and rushes the lens; arrow swells to a light band and washes white          | ease-in (observed)  |
| 5     | 90–110          | Nine pictures fan out of the arrow's middle into a ring, developing from blue negative | ease-out (inferred) |
| 6     | 110–151         | Ring comes round; tiles resolve to full colour and hold                                | ease-out (observed) |

## Techniques

- `Composer`: glass pill floating over hills with the typed request and a
  trailing arrow button (observed)
- `Typewriter`: request types into the pill with the glass fixed around it
  (observed)
- `Cursor`: pointer rises to the arrow from below and presses (observed)
- `Camera`: cut-in close on the arrow, then a roll and rush through the pane to
  the ring (observed)
- `MotionBlur`: directional smear on the rushing pane as the glass washes white
  (inferred)
- `Collage`: nine pictures fan from the arrow's middle into a ring, each
  developing from blue negative to full colour (observed)

## Props to expose

| Prop        | Type     | Default                                          | Purpose                                                           |
| ----------- | -------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| `prompt`    | string   | `"Turn my snapcn components into a launch reel"` | Request text typed into the glass pill (proposed)                 |
| `tiles`     | string[] | `[]`                                             | Nine pictures fanned into the closing ring (proposed)             |
| `hills`     | string   | `"meadow"`                                       | Backdrop artwork behind the glass (proposed)                      |
| `diveFrame` | number   | `80`                                             | Frame at 30 fps where the rush through the pane starts (proposed) |

## Rebuild it

1. Float the glass pill over the hills and type the request into it.
2. Pop the arrow in at the pill's end once typing completes.
3. Cut in close on the arrow and soften the hills behind the glass.
4. Rise the pointer to the arrow and press.
5. Roll the pane, swell the arrow into a band of light, and wash the glass to
   white.
6. Pass through and fan nine pictures from the arrow's middle into a ring.
7. Develop each tile from blue negative to full colour as the ring comes round,
   then hold.

## Pitfalls

- Zooming the close-up as an animated push instead of a hard cut softens the
  dive's setup.
- Sharpening the hills behind the close glass flattens the depth the blur
  builds.
- Fading tiles in instead of developing them from the blue negative loses the
  photo-lab read.
- Fanning fewer or more than nine tiles breaks the measured ring spacing.
