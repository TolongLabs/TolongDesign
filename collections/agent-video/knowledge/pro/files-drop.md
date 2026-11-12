---
slug: files-drop
title: Files Drop
tier: pro
category: ai-input
evidence: film
demo: 1280x720 at 30 fps, 90 frames (3.0 s)
length_30fps: 90
palette: light none, dark #080808, accent #2B4982
used_in: none
---

# Files Drop

> A handful of frames flies into a prompt and becomes attachments. Use it for
> multimodal input.

## What it shows

A request types itself above a dark composer: "Build a launch video from these
frames — open on the wordmark, land on the price." The line holds. A stack of
five frames sweeps in from off frame on a fast exponential settle, trailing up
and to the left, while the pointer slows onto its rest. The gathered pile throws
46px and collapses onto the first slot's corner. Five empty slots appear out of
order, each spinning a 320-degree ring, and their pictures resolve in a
different order again. The attachments hold above the finished prompt.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                  | Curve               |
| ----- | --------------- | ------------------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–12            | Request types a character at a time above the composer                                      | linear (observed)   |
| 2     | 12–26           | Composed line holds                                                                         | hold (observed)     |
| 3     | 26–40           | Five-frame stack sweeps in on a 161ms exponential settle; pointer slows onto rest           | ease-out (observed) |
| 4     | 40–48           | Pile throws 46px and collapses onto the first slot corner                                   | ease-in (observed)  |
| 5     | 48–60           | Five slots appear out of order with 320-degree rings; pictures resolve in a different order | linear (observed)   |
| 6     | 60–90           | Attachments hold above the finished prompt                                                  | hold (observed)     |

## Techniques

- `Composer`: dark prompt field with a scene dropdown, mic, and send button
  under the typed request (observed)
- `Typewriter`: request types a character a frame (observed)
- `Cursor`: pointer drags the stack in and slows onto its rest point on a
  straight path (observed)
- `Card`: five frame thumbnails trail the pointer at a 21-degree offset, each
  link closing front to back (observed)
- `Reveal`: slots and pictures pop in with no fade, one frame present and the
  prior frame absent (observed)

## Props to expose

| Prop            | Type     | Default                                                                               | Purpose                                                  |
| --------------- | -------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `prompt`        | string   | `"Build a launch video from these frames — open on the wordmark, land on the price."` | Request text typed above the composer (proposed)         |
| `files`         | string[] | `[]`                                                                                  | Five thumbnail images dragged into the prompt (proposed) |
| `throwDistance` | number   | `46`                                                                                  | Pixels the gathered pile throws on release (proposed)    |
| `ringTurns`     | number   | `320`                                                                                 | Degrees each slot ring spins while loading (proposed)    |

## Rebuild it

1. Type the request a character a frame above the dark composer and hold it.
2. Sweep the five-frame stack in from off frame on a 161ms exponential settle
   with the trailing frames offset up-left at 21 degrees.
3. Slow the pointer onto its rest point on a straight path.
4. Throw the pile 46px and collapse it onto the first slot's exact corner.
5. Pop five slots in out of order, each spinning a 320-degree ring, and resolve
   their pictures in a different order with hard pop-ins.
6. Hold the attachments above the prompt to frame 90.

## Pitfalls

- Fading slots or pictures in reads as a transition; real image decode pops in
  one frame.
- Resolving pictures in slot order looks staged; parallel uploads finish out of
  order.
- Curving the pointer path breaks the measured straight-line drag.
- Letting the typed line re-wrap mid-drag moves the composer under its own
  attachments.
