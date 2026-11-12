---
slug: screen-wall
title: Screen Wall
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 140 frames (2.33 s)
length_30fps: 70
palette: light #FCFCFC, dark #1C201C, accent #9CDC74
used_in: none
---

# Screen Wall

> Four phones in a tunnel that back out to frame a building sentence, for kit
> positioning.

## What it shows

The camera starts inside a wall of phones with one device filling the frame
around the line "One motion kit." It eases back until four phones frame the
center in a tunnel. The small line leaves and the real headline builds a word at
a time: "Scenes." lands first, then "Motion.", then "Shipped." Each word arrives
already in place while its line shoves sideways hard enough to smear
horizontally. The finished line holds over the settled wall.

## Timeline

| Phase | Frames (30 fps) | What moves                                                   | Curve               |
| ----- | --------------- | ------------------------------------------------------------ | ------------------- |
| 1     | 0–19            | Camera backs out of the phone tunnel to the four-phone frame | ease-out (observed) |
| 2     | 19–28           | Old line leaves, "Scenes." shoves in with horizontal blur    | linear (observed)   |
| 3     | 28–42           | "Motion." shoves in the same way                             | linear (observed)   |
| 4     | 42–56           | "Shipped." lands beside the line                             | linear (observed)   |
| 5     | 56–70           | Full headline holds over the settled wall                    | hold (observed)     |

## Techniques

- `DeviceFrame`: four phones projected as tunnel trapezoids around the aperture
  (observed)
- `Camera`: single backing-out scale while the rig center travels separately
  from the headline (observed)
- `SplitText`: headline words landing one at a time, each shoving the line 24 px
  in one frame (observed)
- `MotionBlur`: horizontal-only smear on each word's arrival frame (observed)

## Props to expose

| Prop       | Type     | Default                          | Purpose                                       |
| ---------- | -------- | -------------------------------- | --------------------------------------------- |
| words      | string[] | ["Scenes.","Motion.","Shipped."] | Headline words shoving in (proposed)          |
| screens    | string[] | []                               | Artwork inside the four phones (proposed)     |
| mouthRatio | number   | 2.35                             | Tunnel mouth versus aperture width (proposed) |
| accent     | string   | "#9CDC74"                        | Headline color (proposed)                     |

## Rebuild it

1. Build the four-phone frustum as fixed quads around the aperture.
2. Start the camera inside the wall on one device with the small line up.
3. Ease the single camera scale back to reveal all four phones.
4. Cut the small line and shove each word in with a one-frame 24 px throw.
5. Blur each arrival horizontally only.
6. Hold the finished line over the wall.

## Pitfalls

- Panning the headline with the rig center drags the type off its anchor; the
  headline keeps its own pivot.
- Blurring the word vertically as well as horizontally softens a shove into a
  smudge.
- Fading words in instead of throwing the line in loses the impact the cut
  sells.
