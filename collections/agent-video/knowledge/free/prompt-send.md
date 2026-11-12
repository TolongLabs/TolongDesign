---
slug: prompt-send
title: Prompt Send
tier: free
category: ai-input
evidence: source+film
demo: 960x540 at 60 fps, 330 frames (5.5 s)
length_30fps: 165
palette: light #F8FCFC, dark #000404, accent none
used_in: none
---

# Prompt Send

> A glass composer that unrolls from a hairline, types a brief while the camera
> rides the caret, then gets clicked and blooms.

## What it shows

A 2px line appears at the panel's top edge and the box grows downward out of it
while widening 0.93 to 1. The writing surface, placeholder and send button fade
up, then suggestion chips rise in a stagger. The prompt types on an eased curve
while the camera hard-cuts 2.327x onto the caret and tracks it, then cuts back
out to 1.44x on the send button as a pointer glides in, presses to 0.87, and
fires a bloom that sweeps across the field.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                | Curve                                         |
| ----- | --------------- | ------------------------------------------------------------------------- | --------------------------------------------- |
| 1     | 1–14            | Panel unrolls downward over 445ms; width 0.93 to 1                        | bezier(0.3,0,0.35,1); (source)                |
| 2     | 13–22           | Field, placeholder and send button fade up together                       | linear; (source)                              |
| 3     | 16–31           | Chips rise 11.4px and fade over 0.59s, staggered 3 frames                 | bezier(0.2,0,0.25,1); (source)                |
| 4     | 27–59           | Prompt types on a sine ease; camera holds wide                            | sine ease-in-out; (source)                    |
| 5     | 59–120          | Hard cut 2.327x onto the caret; camera tracks the continuous typing curve | hard cut, then linear ride; (source)          |
| 6     | 120–134         | Hard cut 1.44x onto the send button; pointer approaches exponentially     | hard cut, then bezier(0.16,1,0.3,1); (source) |
| 7     | 140–148         | Pointer presses to 0.87 over 2 frames, releases over 8                    | linear; (source)                              |
| 8     | 146–165         | Send bloom opens and sweeps across the field; hold                        | ease-out quad; (source)                       |

## Techniques

- `Composer`: glass panel, writing surface, suggestion chips and send button
  derived from four sizes plus measured label widths (source)
- `Typewriter`: sine-eased character count — 17 chars/sec on the first word, 33
  mid-sentence, settling on the last three (source)
- `Caret`: solid while typing, then blinking on a 0.474s half-cycle re-anchored
  to each keystroke (source)
- `Camera`: two single-frame cuts, 2.327x onto the caret and 1.44x onto the send
  button, never interpolated (source)
- `Cursor`: exponential approach halving distance every 44ms, drawn outside the
  camera so it never scales (source)
- `Press`: scale dip to 0.87 on click, then release (source)

## Props to expose

| Prop         | Type    | Default                                                              | Purpose                                       |
| ------------ | ------- | -------------------------------------------------------------------- | --------------------------------------------- |
| text         | text    | Add a text reveal, a soft blur transition, and a gradient background | Prompt that types itself                      |
| placeholder  | text    | Describe the scene you want…                                         | Shown until the first character lands         |
| chips        | text    | four suggestion labels                                               | Comma list; wraps to rows and grows the panel |
| width        | number  | 636.2                                                                | Panel width in reference pixels               |
| fieldHeight  | number  | 121.2                                                                | Writing surface height                        |
| fontSize     | number  | 14                                                                   | Prompt size; layout ratios follow it          |
| chipFontSize | number  | 12.3                                                                 | Chip size; chip geometry follows it           |
| radius       | number  | 22                                                                   | Panel corner radius                           |
| typeStart    | number  | 0.915                                                                | Typing start in seconds                       |
| typeDuration | number  | 3.025                                                                | Typing duration in seconds                    |
| chipsAt      | number  | 0.545                                                                | First chip start in seconds                   |
| chipStagger  | number  | 0.1                                                                  | Gap between chips in seconds                  |
| cutInAt      | number  | 1.975                                                                | Cut onto the caret in seconds                 |
| cutOutAt     | number  | 4.008                                                                | Cut onto the send button in seconds           |
| zoomIn       | number  | 2.327                                                                | Caret cut magnification                       |
| zoomOut      | number  | 1.44                                                                 | Send cut magnification                        |
| focusX       | number  | 0.573                                                                | Caret mark across the frame                   |
| focusY       | number  | 0.4881                                                               | Caret mark down the frame                     |
| clickAt      | number  | 4.658                                                                | Click time in seconds                         |
| cursor       | boolean | true                                                                 | Pointer, click and bloom on or off            |
| accentColor  | color   | #3072DB                                                              | Wash and bloom accent                         |
| mode         | select  | light                                                                | light or dark paint                           |

## Rebuild it

1. Grow the panel downward from a 2px line over 445ms while widening 0.93 to 1,
   field on a shorter 0.83 share of the curve.
2. Fade the field, placeholder and send together, then rise chips 11.4px
   staggered 3 frames apart.
3. Type the sentence on the sine ease and scroll the field under the caret once
   it outgrows the room.
4. Hard-cut 2.327x onto the caret at 1.975s and pin the camera to the continuous
   typing curve, not the character count.
5. Hard-cut 1.44x onto the send button at 4.008s while the pointer approaches
   exponentially from the bottom-right.
6. Dip the button to 0.87 on click, release over 0.25s, and sweep the bloom
   across the field from 220ms after the press.

## Pitfalls

- Ramping either camera move over even two frames turns the snap into a zoom and
  kills the shot.
- Pinning the camera to the rounded character count instead of the continuous
  curve freezes the caret between keystrokes.
- Constant-rate typing misses the measured rhythm by whole characters; the sine
  ease fits to 0.30 chars rms.
- A border on the panel shifts every measured offset by a pixel; use an inset
  shadow hairline instead.
