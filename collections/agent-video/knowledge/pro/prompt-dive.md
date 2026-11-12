---
slug: prompt-dive
title: Prompt Dive
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 402 frames (6.7 s)
length_30fps: 201
palette: light #FCFCFC, dark #040404, accent #86CDF9
used_in: none
---

# Prompt Dive

> A phone assistant that takes a typed request before the camera dives into its
> send button, for AI-input hooks.

## What it shows

A phone screen fills the frame with an assistant over a pale blue wash and an
empty composer. The placeholder "Ask snapcn" appears. The request "Make me a
launch video for snapcn. Text reveal, punch lines, ship today." types itself a
character at a time while the camera barely pushes in. The field grows to a
second line as the text outgrows it. Then the camera walks into the screen until
the purple-blue send button fills the frame and its arrow turns over.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                 | Curve              |
| ----- | --------------- | -------------------------------------------------------------------------- | ------------------ |
| 1     | 0–11            | Phone with empty composer holds                                            | hold (observed)    |
| 2     | 11–40           | Placeholder fades in, camera pushes in a hair                              | linear (inferred)  |
| 3     | 40–147          | Request types char by char, field grows to two lines midway                | linear (observed)  |
| 4     | 147–188         | Camera dives into the send button until it fills the frame, arrow rotating | ease-in (inferred) |
| 5     | 188–201         | Button face holds full-frame                                               | hold (observed)    |

## Techniques

- `DeviceFrame`: phone with dark bezel over a soft blue wash (observed)
- `Composer`: pill field with plus, placeholder, mic, and send icons that grows
  to two lines (observed)
- `Typewriter`: request types at a steady character rate with no caret visible
  (observed)
- `Camera`: slow push through typing, then a long dive into the send button
  (observed)
- `MotionBlur`: directional smear on the fastest dive frames (inferred)

## Props to expose

| Prop        | Type   | Default                   | Purpose                                           |
| ----------- | ------ | ------------------------- | ------------------------------------------------- |
| placeholder | string | "Ask snapcn"              | Ghost text before typing starts (proposed)        |
| prompt      | string | "Make me a launch video…" | Request that types itself (proposed)              |
| typeRate    | number | 30                        | Characters per second (proposed)                  |
| diveScale   | number | 12                        | Final magnification of the send button (proposed) |

## Rebuild it

1. Frame the phone `DeviceFrame` on the washed backdrop.
2. Fade the placeholder into the `Composer`.
3. Type the prompt at a fixed rate while pushing the camera ~1% over the first
   second.
4. Grow the field to a second line when the text outgrows one.
5. Finish typing and hold two beats.
6. Dive the camera into the send button's center with an ease-in.
7. Rotate the arrow as the button face takes the frame, then hold.

## Pitfalls

- A fast or eased dive early on turns the shot into motion; keep the typing push
  near-still.
- Wrapping the field late clips the text edge mid-typing.
- Rotating the arrow before the button fills the frame shows the trick too soon.
