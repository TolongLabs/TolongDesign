---
slug: prompt-poster
title: Prompt Poster
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 172 frames (2.87 s)
length_30fps: 86
palette: light #FCFCFC, dark #141414, accent #8470F2
used_in: none
---

# Prompt Poster

> A prompt types into a dark composer, a cursor presses send, and the film cuts
> to the generated poster.

## What it shows

A dark rounded composer sits centered on white. The request "Generate a launch
poster for my new Remotion scenes" types into it beside a small icon, with dim
suggestion chips below. A cursor rises from below the frame, travels to the send
button, and presses it. The film cuts hard to a poster: violet rays radiate
behind a white card reading "Meet" above a "SNAP CN" caption. The poster scales
down into place and holds.

## Timeline

| Phase         | Frames (30 fps) | What moves                                            | Curve                    |
| ------------- | --------------- | ----------------------------------------------------- | ------------------------ |
| Typing        | 0-17            | Prompt types into the composer character by character | linear (observed)        |
| Cursor flight | 17-52           | Cursor rises and decelerates onto the send button     | ease-out (inferred)      |
| Press         | 52-58           | Button dips, send arms                                | spring dip (inferred)    |
| Hard cut      | 58-58           | Composer replaced by the poster on one frame          | hard cut (observed)      |
| Poster settle | 58-70           | Poster scales down into its resting size              | spring settle (inferred) |
| Poster hold   | 70-86           | Finished poster rests                                 | hold (observed)          |

## Techniques

- `Composer`: dark rounded prompt field with icon, typed text and suggestion
  chips (observed)
- `Typewriter`: request types at a steady character rate with no caret visible
  (observed)
- `Cursor`: pointer rises from below frame and decelerates onto send (observed)
- `Press`: send button dips under the cursor before the cut (inferred)
- `Card`: poster card with rays, headline and caption scales in after the cut
  (observed)
- `RadialBloom`: violet ray burst radiates behind the poster card (observed)

## Props to expose

| Prop          | Type   | Default                                             | Purpose                                     |
| ------------- | ------ | --------------------------------------------------- | ------------------------------------------- |
| prompt        | string | Generate a launch poster for my new Remotion scenes | Text typed into the composer (proposed)     |
| posterTitle   | string | Meet                                                | Headline on the generated poster (proposed) |
| posterCaption | string | SNAP CN                                             | Caption under the poster card (proposed)    |
| rayColor      | string | #8470F2                                             | Ray burst tint (proposed)                   |
| typingRate    | number | 2                                                   | Frames per character at 30 fps (proposed)   |

## Rebuild it

1. Center the dark `Composer` on the paper act.
2. Type the prompt in at a steady rate over frames 0 to 17.
3. Fly the `Cursor` up from below and ease it onto the send button.
4. Dip the button with a `Press`, then `hard cut` to the poster on frame 58.
5. Scale the ray poster down into place with a spring settle.
6. Hold the finished poster for the last 16 frames.

## Pitfalls

- Crossfading instead of hard-cutting softens the send-to-result punch.
- Letting the cursor move at constant speed looks robotic; it must decelerate.
- Resizing the poster by cropping instead of scaling changes its crop.
- Typing the prompt too fast leaves no time to read the request.
