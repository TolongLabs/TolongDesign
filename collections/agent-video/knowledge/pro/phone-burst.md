---
slug: phone-burst
title: Phone Burst
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 58 frames (0.97 s)
length_30fps: 29
palette: light #F8F4F4, dark none, accent #7466EF
used_in: none
---

# Phone Burst

> A phone that punches out of a spinning ray burst, holds, then sinks back. Use
> it as a sub-second product sting.

## What it shows

A small phone sits in the centre of a white field. Blue-violet rays burst
outward from behind it and fill the frame within two frames. The phone grows
fast, tilts upright, and settles near centre with a soft halo. Small icons
(play, star, cursor, export) drift around it. The phone holds a beat reading
"Meet", then shrinks quickly back into the glow and ends tiny. The rays keep
turning slowly through the whole run.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                 | Curve               |
| ----- | --------------- | -------------------------------------------------------------------------- | ------------------- |
| 0-1   | 0-1             | Ray burst scales from hub to full frame behind tiny phone                  | ease-out (observed) |
| 1-14  | 1-14            | Phone scales up ~8x, rotates to upright; rays rotate slowly; icons fade in | ease-out (inferred) |
| 14-21 | 14-21           | Phone holds centred and upright with halo; icons drift                     | hold (observed)     |
| 21-27 | 21-27           | Phone scales down into the glow; halo tightens                             | ease-in (inferred)  |
| 27-29 | 27-29           | Phone rests tiny at centre over rays                                       | hold (observed)     |

## Techniques

- `Stage`: white field with a rotating blue-violet ray sunburst behind the phone
  (observed)
- `DeviceFrame`: centred phone shell with a short "Meet" label, tilting upright
  as it grows (observed)
- `Camera`: fast push-in over frames 1-14, then a fast pull-back over frames
  21-27 (inferred)
- `RadialBloom`: soft white-violet halo around the phone that tightens as it
  shrinks (observed)
- `Particles`: play, star, cursor and export chips drift slowly around the phone
  (observed)
- `MotionBlur`: Not visible in the frames. (observed)

## Props to expose

| Prop         | Type        | Default   | Purpose                                         |
| ------------ | ----------- | --------- | ----------------------------------------------- |
| label        | string      | "Meet"    | Vertical label on the phone screen (proposed)   |
| rays         | number      | 12        | Count of sunburst wedges (proposed)             |
| accent       | string      | "#7466EF" | Ray and halo colour (proposed)                  |
| growFrames   | number      | 13        | Frames at 30 fps for the scale-up (proposed)    |
| holdFrames   | number      | 7         | Frames at 30 fps for the centre hold (proposed) |
| shrinkFrames | number      | 6         | Frames at 30 fps for the scale-down (proposed)  |
| icons        | ReactNode[] | []        | Floating chips around the phone (proposed)      |

## Rebuild it

1. Paint the `Stage` white; draw 12 `RadialBloom` wedges from centre in the
   accent.
2. Place a small upright `DeviceFrame` at centre with the label.
3. Scale the burst to full frame in 1-2 frames with an ease-out.
4. Grow the phone ~8x and rotate it upright over 13 frames using `Camera`.
5. Fade in `Particles` chips and drift them slowly outward.
6. Hold the phone centred for 7 frames.
7. Shrink the phone back to its start size over 6 frames and tighten the halo.

## Pitfalls

- Do not ease the opening slowly; the burst fills the frame almost instantly.
- Do not stop the rays; they rotate through the hold and the shrink.
- Do not tilt the phone at rest; it ends upright and centred.
- Do not add blur or glow blobs; the halo is soft and tight, not a bloom.
