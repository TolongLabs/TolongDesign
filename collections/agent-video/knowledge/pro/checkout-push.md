---
slug: checkout-push
title: Checkout Push
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 120 frames (2.0 s)
length_30fps: 60
palette: light none, dark #080808, accent #395784
used_in: none
---

# Checkout Push

> A phone pays for something, then the camera dives at its screen. Use it for a
> payment or checkout beat.

## What it shows

The device stands still and front-on while the last digit lands on the amount in
a single frame. The camera then walks into it, accelerating the whole way, and
lays the device back as it arrives. The move is a pure dolly of about 1.35x plus
a pure rotateX with no yaw and no roll. The shot ends looking up the screen and
holds there.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                     | Curve              |
| ----- | --------------- | ------------------------------------------------------------------------------ | ------------------ |
| 1     | 0–9             | Device stands still; last amount digit lands in one frame                      | hold (observed)    |
| 2     | 9–40            | Camera dollies in, accelerating, while the device lays back under pure rotateX | ease-in (observed) |
| 3     | 40–52           | Push continues until the display fills the frame; viewer looks up the screen   | ease-in (inferred) |
| 4     | 52–60           | Hold on the laid-back screen                                                   | hold (observed)    |

## Techniques

- `DeviceFrame`: phone stands front-on, then lays back under the camera with no
  yaw or roll (observed)
- `Camera`: accelerating dolly of about 1.35x combined with a pure rotateX
  starting at frame 9 (observed)
- `AppScreen`: checkout screen with the amount; last digit swaps in one frame
  like a keypad press (observed)
- `Stage`: black ground throughout (observed)

## Props to expose

| Prop        | Type   | Default      | Purpose                                              |
| ----------- | ------ | ------------ | ---------------------------------------------------- |
| `amount`    | string | `"$48.00"`   | Amount shown on the checkout screen (proposed)       |
| `screen`    | string | `"checkout"` | Screen artwork rendered inside the device (proposed) |
| `dolly`     | number | `1.35`       | Camera push-in factor across the move (proposed)     |
| `tiltStart` | number | `9`          | Frame at 30 fps where the rotateX begins (proposed)  |

## Rebuild it

1. Frame the phone small, front-on, and centred on black.
2. Land the last amount digit in a single frame with no tween.
3. Hold the device dead still until frame 9.
4. Dolly in with an accelerating curve toward about 1.35x while applying a pure
   rotateX to the device, pivoting on its base.
5. Keep yaw and roll at zero for the whole move.
6. Arrive looking up the screen and hold to frame 60.

## Pitfalls

- Any yaw or roll in the lay-back breaks the straight-over-the-top dive.
- Easing the dolly out instead of accelerating it kills the
  pushed-through-the-camera feel.
- Tweening the last digit over several frames reads as a count-up, not a keypad
  press.
- Moving the device before frame 9 spends the stillness the push needs to read
  against.
