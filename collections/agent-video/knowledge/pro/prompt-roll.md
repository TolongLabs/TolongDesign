---
slug: prompt-roll
title: Prompt Roll
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 386 frames (6.43 s)
length_30fps: 193
palette: light #F0F0F0, dark #181818, accent #8A69C2
used_in: none
---

# Prompt Roll

> A typed prompt whose option words roll through tinted pills, ending in a
> cursor-pressed send.

## What it shows

A small composer card sits wide on paper. The camera pushes in and the words
"Make your own Launc…" type with a caret. The camera tracks right as typing
continues. The tail words wrap into a tinted pill that rolls through options:
Launch video, Product demo, Changelog, Pricing reveal, Logo bumper. The sentence
finishes with "…in one prompt". A whip carries the frame to a round send button
that draws itself. A pointer presses it, a halo flashes, and the arrow flies off
as the frame washes white.

## Timeline

| Phase | Frames (30 fps) | What moves                                                               | Curve               |
| ----- | --------------- | ------------------------------------------------------------------------ | ------------------- |
| 1     | 0–12            | Card pushes in; camera pushes toward the field                           | ease-out (observed) |
| 2     | 13–38           | Prompt types; camera tracks right to follow the caret                    | linear (observed)   |
| 3     | 39–77           | Tail words wrap into a pill; the slot rolls Launch video to Product demo | ease-out (observed) |
| 4     | 78–102          | Roll continues through Changelog, Pricing reveal, Logo bumper            | ease-out (observed) |
| 5     | 103–141         | Sentence tail completes to "…in one prompt"                              | linear (observed)   |
| 6     | 142–168         | Whip to the send button; the circle draws itself; the pointer rides in   | ease-in (inferred)  |
| 7     | 168–193         | Press, halo flash, arrow flies off, wash to white                        | hold (observed)     |

## Techniques

- `Stage`: paper field with a white wash on exit (observed)
- `Camera`: push-in, tracked rightward pan, then a whip to the button (observed)
- `MotionBlur`: directional blur on the whip exit (inferred)
- `Typewriter`: prompt keys in at a fixed rate (observed)
- `Caret`: block caret rides the typing edge (observed)
- `WordDrum`: one pill slot cycles five tinted options vertically (inferred)
- `Pill`: rounded option pills, each with its own tint (observed)
- `Cursor`: scripted pointer on a curved path to the button (observed)
- `Press`: button dips, turns dark, fires a halo (observed)
- `Reveal`: send circle draws itself with a scale-pop (observed)

## Props to expose

| Prop      | Type                              | Default                                    | Purpose                                            |
| --------- | --------------------------------- | ------------------------------------------ | -------------------------------------------------- |
| prompt    | string                            | "Make your own Launch video in one prompt" | Full sentence the typing completes (proposed)      |
| options   | { label: string; tint: string }[] | five items as observed                     | Pills the drum slot rolls through (proposed)       |
| typingFps | number                            | 30                                         | Characters per second at 30 fps (proposed)         |
| sendSize  | number                            | 96                                         | Diameter of the round send button in px (proposed) |
| washColor | string                            | "#FFFFFF"                                  | Colour of the exit wash (proposed)                 |

## Rebuild it

1. Lay a paper `Stage` with the composer card small and centred.
2. Push the `Camera` in while a `Typewriter` with `Caret` writes the prompt.
3. Pan the camera right to keep the caret framed.
4. Wrap the tail words into a `Pill` and cycle options with `WordDrum`.
5. Finish the sentence, then `whip` out with `MotionBlur` to the send button.
6. Draw the circle with `Reveal` and fly the `Cursor` to it.
7. `Press` the button: dip, darken, halo flash.
8. Fly the arrow off frame and wash the `Stage` to white.

## Pitfalls

- Typing without camera tracking strands the caret off frame.
- Rolling all pills at once instead of one slot breaks the drum read.
- A missing halo makes the press feel dead.
- Holding the end card too briefly hides the arrow flight.
