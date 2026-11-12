---
slug: word-rush
title: Word Rush
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 196 frames (3.27 s)
length_30fps: 98
palette: light #F8F8F4, dark #141414, accent none
used_in: none
---

# Word Rush

> The camera flies through a field of hanging words, one line rushes the lens,
> and the answer arrives out of the blur.

## What it shows

Small tinted words hang at different depths over paper. The camera pushes
forward; words grow, sweep past either side, and fresh ones fade up behind. One
dark line sharpens at the focal plane and centers as "Keyframe timelines". It
suddenly accelerates at the camera and clears in about seven demo frames. The
field drifts empty, then the closing line arrives a word at a time, each rising
out of defocus until "And now it's time for" sits sharp and still.

## Timeline

| Phase   | Frames (30 fps) | What moves                                                              | Curve               |
| ------- | --------------- | ----------------------------------------------------------------------- | ------------------- |
| Field   | 0–26            | Words hang tinted at depths; the camera flies forward; words sweep past | linear (observed)   |
| Resolve | 26–46           | "Keyframe timelines" sharpens at the focal plane and centers            | ease-out (observed) |
| Rush    | 46–51           | The line hurls at the lens and clears in about seven demo frames        | ease-in (observed)  |
| Void    | 51–57           | The empty tinted field drifts past                                      | hold (observed)     |
| Answer  | 57–91           | Closing words arrive one at a time, each out of defocus                 | ease-out (observed) |
| Hold    | 91–98           | "And now it's time for" rests sharp                                     | hold (observed)     |

## Techniques

- `Stage`: pale paper field with drifting cool tints (observed)
- `Camera`: steady forward flight through the word depths (observed)
- `Reveal`: words fade up behind the camera; lines resolve out of defocus
  (observed)
- `SplitText`: the closing line arrives one word at a time from blur (observed)
- `MotionBlur`: smear as words sweep past and the line rushes the lens
  (inferred)

## Props to expose

| Prop       | Type     | Default                   | Purpose                                    |
| ---------- | -------- | ------------------------- | ------------------------------------------ |
| field      | string[] | ambient words as observed | Words hanging at depths (proposed)         |
| lead       | string   | "Keyframe timelines"      | Line that resolves and rushes (proposed)   |
| closing    | string   | "And now it's time for"   | Line that answers out of blur (proposed)   |
| rushFrames | number   | 4                         | 30 fps frames for the lens rush (proposed) |
| tint       | string   | "#8F8AA3"                 | Muted tint for field words (proposed)      |

## Rebuild it

1. Hang the field words at staggered depths and tints on a paper `Stage`.
2. Fly the `Camera` forward; grow and sweep words past with `MotionBlur`.
3. Sharpen the lead line at the focal plane with `Reveal`.
4. Hurl it at the lens over `rushFrames`; clear the frame.
5. Drift the empty field through a short hold.
6. Arrive the closing line one word at a time from defocus; hold it sharp.

## Pitfalls

- Putting all words on one plane; depth comes from staggered distances on one
  projection.
- Fading the rush; it accelerates and clears hard, with no dissolve.
- Landing closing words sharp; each rises out of defocus.
- Holding the lead too long; it resolves, then rushes almost at once.
