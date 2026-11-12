---
slug: tap-through
title: Tap Through
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 156 frames (2.6 s)
length_30fps: 78
palette: light #E8E8EC, dark #04000C, accent #04B63D
used_in: none
---

# Tap Through

> A phone dive from a feed to its buttons, a tap, then the tagline the tap was
> for.

## What it shows

A phone hangs in the dark showing a social feed. The camera falls down the glass
until only the "Docs" and green "Install" buttons fill the frame. One button
takes a tap dip. The fall keeps going past the buttons until the frame is the
phone edge. Then hard cuts land two centred lines: "the code is yours" and "and
so is the credit".

## Timeline

| Phase               | Frames (30 fps) | What moves                                                     | Curve                                                    |
| ------------------- | --------------- | -------------------------------------------------------------- | -------------------------------------------------------- |
| Feed dive           | 0-10            | `Camera` falls down the phone glass from feed to buttons       | accelerating dolly (inferred)                            |
| Button hold and tap | 10-41           | Buttons grow large, "Install" dips to 0.87x and flashes        | dip in 1 frame, recover in 2, flash gone by 4 (inferred) |
| Edge fall           | 41-46           | `Camera` keeps falling until glass leaves and edge fills frame | accelerating (observed)                                  |
| Line one            | 46-62           | "the code is yours" holds centred, no scale                    | hard cut in, hold (observed)                             |
| Line two            | 62-78           | "and so is the credit" holds smaller and centred               | hard cut in, hold (observed)                             |

## Techniques

- `Stage`: dark void holding the device, then plain black for type (observed)
- `DeviceFrame`: phone with feed screen and bottom button pair, no browser
  chrome (observed)
- `Camera`: one continuous projective fall down the phone plane through the tap
  (inferred)
- `Press`: button scale dip plus white flash on the tap frame (inferred)
- `Reveal`: two closing lines cut in and hold with no scale (observed)

## Props to expose

| Prop         | Type     | Default                | Purpose                                             |
| ------------ | -------- | ---------------------- | --------------------------------------------------- |
| feedPosts    | string[] | 2                      | Feed rows shown before the dive (proposed)          |
| primaryLabel | string   | "Install"              | Green button label that receives the tap (proposed) |
| lineOne      | string   | "the code is yours"    | First closing line (proposed)                       |
| lineTwo      | string   | "and so is the credit" | Second closing line (proposed)                      |
| accent       | string   | "#04B63D"              | Button green (proposed)                             |

## Rebuild it

1. Hang a `DeviceFrame` in a dark `Stage` with a two-post feed.
2. Dolly the `Camera` down the glass with rising speed until the buttons fill
   the frame.
3. `Press` the green button: dip to 0.87x and flash white to 0.36.
4. Keep falling until the frame is phone edge.
5. Hard-cut to line one centred and hold 16 frames.
6. Hard-cut to line two smaller and hold 16 frames.

## Pitfalls

- Crossfading the closing lines softens a cut that must land hard.
- Scaling the closing lines introduces pixel crawl; both hold width exactly.
- Stopping the camera at the tap turns one fall into two shots.
