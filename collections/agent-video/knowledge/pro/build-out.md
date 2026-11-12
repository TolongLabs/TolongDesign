---
slug: build-out
title: Build Out
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 232 frames (3.87 s)
length_30fps: 116
palette: light #FCFCFC, dark none, accent #2F72DA
used_in: none
---

# Build Out

> A send button fills the frame, then the app it asked for draws itself. Use it
> for the prompt-to-product payoff.

## What it shows

The shot opens inside the send button: the arrow alone, forty times life size.
The camera falls back off it onto a prompt typing at seventy-nine characters a
second. A pointer arrives edge-on to the lens, rotates flat as it lands,
presses, and holds. A hard cut lands on the finished app already present. It
draws itself in block by block and backs off into the frame. Two presence labels
pop, the wordmark selects and re-sets in a serif, and the grid artwork swaps
while the ground shifts toward blue and violet.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                      | Curve               |
| ----- | --------------- | ------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–8             | Camera falls back off the forty-times arrow; prompt card lands around it        | ease-out (observed) |
| 2     | 8–31            | Prompt types at 79 characters a second under the retreating camera              | linear (observed)   |
| 3     | 31–46           | Pointer arrives edge-on, rotates flat, lands on send and holds                  | ease-out (inferred) |
| 4     | 46–54           | Hard cut to the built app drawing itself block by block                         | hold (observed)     |
| 5     | 54–90           | Workspace backs off; presence labels pop; wordmark selects and re-sets in serif | spring (inferred)   |
| 6     | 90–116          | Grid artwork swaps; camera settles on the worked page                           | ease-out (observed) |

## Techniques

- `Camera`: act one is a pure scale about the send button centre, the one point
  that never moves; act two is read off the workspace left edge and its two
  vertical sides (observed)
- `MotionBlur`: directional blur on the falling-back pull while velocity is high
  (inferred)
- `Composer`: prompt card with the typed request and a round send button
  (observed)
- `Typewriter`: request types at 79 characters a second (observed)
- `Cursor`: pointer travels edge-on to the lens and rotates flat on landing
  (observed)
- `Press`: pointer presses on send and holds through the cut (observed)
- `Card`: app workspace draws itself block by block, then backs off into frame
  (observed)
- `Pill`: two presence labels pop onto the workspace (observed)

## Props to expose

| Prop       | Type     | Default                                            | Purpose                                                 |
| ---------- | -------- | -------------------------------------------------- | ------------------------------------------------------- |
| `prompt`   | string   | `"Make a launch video for the component library."` | Request text typed in act one (proposed)                |
| `typeRate` | number   | `79`                                               | Typing speed in characters per second (proposed)        |
| `appTitle` | string   | `"SNAPCN"`                                         | Wordmark shown in the built workspace header (proposed) |
| `presence` | string[] | `["Ana", "Leo"]`                                   | Presence labels that pop onto the workspace (proposed)  |
| `artwork`  | string[] | `[]`                                               | Image slots swapped in the workspace grid (proposed)    |
| `accent`   | string   | `"#2F72DA"`                                        | Send button and workspace accent (proposed)             |

## Rebuild it

1. Open on the send arrow at forty times size, centred on the button centre.
2. Scale the camera back about that centre until the prompt card and typed line
   sit in frame.
3. Type the request at 79 characters a second while the camera keeps retreating.
4. Fly the pointer in edge-on, rotate it flat as it lands, and press and hold on
   send.
5. Hard-cut to the app workspace and draw it block by block with no crossfade.
6. Back the workspace off, pop two presence labels, and select the wordmark into
   a serif.
7. Swap the grid artwork and drift the ground toward blue-violet through the
   settle.

## Pitfalls

- Scaling about anything but the button centre makes the one still point drift.
- Easing the cut side with a fade turns a substitution into a dissolve; both
  sides must cut hard.
- A pointer that arrives already flat loses the lens-facing read of the
  approach.
- Artwork that fades instead of swapping softens the worked-on feel of the
  second act.
