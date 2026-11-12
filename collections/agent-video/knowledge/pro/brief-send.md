---
slug: brief-send
title: Brief Send
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 260 frames (4.33 s)
length_30fps: 130
palette: light none, dark #080808, accent #244171
used_in: none
---

# Brief Send

> A project page exits and the typed brief that fills it gets sent. Use it for
> the moment a user hands work to the product.

## What it shows

An empty project page slides 65px right and settles. It lifts 125px out of the
top while still accelerating, blurred by its own speed. A hard cut lands on the
bottom of the same page, where a composer rises 210px into place and keeps
travelling past rest because the page scrolls underneath. The brief types at 60
characters a second with an 8-character ink ramp instead of a caret. A pointer
crosses in from off frame, decelerates onto the send button, and presses it to
0.72.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                 | Curve               |
| ----- | --------------- | ---------------------------------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–17            | Project page slides 65px right and settles                                                                 | ease-out (observed) |
| 2     | 17–49           | Page lifts 125px out of the top while still accelerating, with motion blur                                 | ease-in (observed)  |
| 3     | 49–60           | Hard cut to the composer bottom; field rises 210px past its rest as the page scrolls                       | ease-out (observed) |
| 4     | 60–104          | Brief types at 60 characters a second with an 8-character ink ramp; attachment chip and scene mention land | linear (observed)   |
| 5     | 104–121         | Pointer crosses in from off frame and decelerates onto the send button, pressing to 0.72                   | ease-out (inferred) |
| 6     | 121–130         | Pressed state holds                                                                                        | hold (observed)     |

## Techniques

- `Stage`: dark project page throughout, near-black ground at #080808 (observed)
- `Camera`: 65px right slide, then 125px upward lift that exits while still
  accelerating (observed)
- `MotionBlur`: lift blurs because the page moves about 15px a frame; a sharp
  render would strobe (observed)
- `Composer`: brief field with inline attachment chip at its head and a scene
  mention at its tail (observed)
- `Typewriter`: brief types at 60 characters a second with a half-second
  per-character fade, so the leading edge reads as an 8-character gradient and
  no caret appears (observed)
- `Cursor`: pointer path crosses from off frame and decelerates onto send
  (observed)
- `Press`: send button dips to 0.72 on arrival (observed)

## Props to expose

| Prop           | Type   | Default                                      | Purpose                                                          |
| -------------- | ------ | -------------------------------------------- | ---------------------------------------------------------------- |
| `brief`        | string | `"Open on the wordmark, land on the price."` | The brief text that types into the composer (proposed)           |
| `chipLabel`    | string | `"snapcn wordmark"`                          | Attachment chip shown inline at the head of the brief (proposed) |
| `mentionLabel` | string | `"text-reveal"`                              | Scene mention shown at the tail of the brief (proposed)          |
| `typeRate`     | number | `60`                                         | Typing speed in characters per second (proposed)                 |
| `pressScale`   | number | `0.72`                                       | Send button scale at the bottom of the press (proposed)          |
| `accent`       | string | `"#244171"`                                  | Send button and chip tint (proposed)                             |

## Rebuild it

1. Lay out a dark project page with the headline "What do you want to make?" and
   a starter card peeking at the bottom.
2. Slide the page 65px right with an ease-out, then lift it 125px up under an
   ease-in with directional blur scaled to velocity.
3. Hard-cut to the composer framing and rise the field 210px past rest while
   scrolling the page beneath it.
4. Pre-lay every character at zero opacity so the second line never re-wraps,
   then fade characters in at 60 per second with a half-second fade each.
5. Place the attachment chip inline at the head and the scene mention at the
   tail once their text exists.
6. Fly the pointer in from off frame on a decelerating curve and dip send to
   0.72 on contact.
7. Hold the pressed state to the end of the 130-frame run.

## Pitfalls

- A sharp exit lift strobes into copies of the headline; blur must track
  velocity.
- Typing with a real caret or a laid-out-as-it-goes paragraph re-wraps the
  second line.
- A lift that settles before leaving reads as a card animation, not a page
  giving way.
- A pointer that arrives at constant speed looks thrown; it must decelerate onto
  the button.
