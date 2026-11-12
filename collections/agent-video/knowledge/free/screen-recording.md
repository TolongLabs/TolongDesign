---
slug: screen-recording
title: Screen Recording
tier: free
category: screens
evidence: source+film
demo: 960x540 at 60 fps, 278 frames (4.63 s)
length_30fps: 139
palette: light #F4F4F0, dark none, accent #3474EB
used_in: none
---

# Screen Recording

> A treated product capture with cropped chrome and a keyframed push-in camera.

## What it shows

The shot opens on a fitted recording under a short fade-and-unblur. The camera
pushes to 1.6x onto the upper-left area and holds, then pulls back to the full
shot and holds to the end. Browser and OS chrome stay cropped away for the whole
run. The demo shows a prompt composer giving way to a streaming answer with
reply cards.

## Timeline

| Phase | Frames (30 fps) | What moves        | Curve                                                                          |
| ----- | --------------- | ----------------- | ------------------------------------------------------------------------------ |
| 1     | 4-22            | Entrance          | Opacity 0 to 1, blur 8 px to 0; Linear ramp (source)                           |
| 2     | 34-59           | Push in           | Zoom 1 to 1.6 at focal (0.36, 0.42); Easing.bezier(0.2, 0.6, 0.35, 1) (source) |
| 3     | 59-96           | Hold on detail    | Camera still; Hold (inferred)                                                  |
| 4     | 96-121          | Pull back         | Zoom 1.6 to 1, focal recentred; Easing.bezier(0.2, 0.6, 0.35, 1) (source)      |
| 5     | 121-139         | Hold on full shot | Camera still; Hold (observed)                                                  |

## Techniques

- `Camera`: absolute-zoom keyframe track; a move starting mid-flight takes over
  from the pose on screen, overlaps truncate, focal points clamp to the frame
  (source)
- `Reveal`: 18-frame fade-and-unblur entrance starting at frame 4 (source)
- `custom: chrome-crop`: each recording edge cropped as a fraction of the source
  before fitting (source)

## Props to expose

| Prop                                        | Type                 | Default                 | Purpose                              |
| ------------------------------------------- | -------------------- | ----------------------- | ------------------------------------ |
| src                                         | string               | none                    | Recording file or still image        |
| crop                                        | ScreenCrop           | none                    | Chrome to cut, as fractions per edge |
| cropTop / cropRight / cropBottom / cropLeft | number               | 0                       | Per-edge crop overrides              |
| sourceAspect                                | number               | composition aspect      | True aspect of the source file       |
| fit                                         | cover \| contain     | cover                   | Fill the frame or fit inside it      |
| backdropColor                               | string               | theme background        | Letterbox behind a contain fit       |
| camera                                      | CameraMove[]         | push to 1.6x, then back | Keyframed zoom track                 |
| radius                                      | number               | 0                       | Corner radius on the treated shot    |
| trimBefore                                  | number               | 0                       | Frames to skip into the source       |
| audio                                       | boolean              | false                   | Play the recording sound             |
| entrance                                    | fade \| none         | fade                    | Arrival treatment                    |
| theme                                       | Partial<SnapCnTheme> | none                    | Design-system token overrides        |
| mode                                        | light \| dark        | none                    | Colour mode                          |
| speed                                       | number               | 1                       | Playback multiplier                  |
| className                                   | string               | none                    | Extra class on the stage             |

## Rebuild it

1. Cut the configured fractions off each source edge, then aspect-fill the
   frame.
2. Run the camera track: each move eases from the live pose and holds until the
   next.
3. Clamp every focal point to what the current zoom can hold.
4. Open with an 18-frame fade-and-unblur from frame 4.
5. Drive footage and camera on the same multiplied clock.
6. Hold 18 frames past the last settle so the shot reads as finished.

## Pitfalls

- Quint or expo easings cross the first third fast, then move under 0.5 px per
  frame and freeze visibly.
- Blending overlapping moves averages two targets; the source truncates instead.
- A pull-back to zoom 1 without focal clamping drags backdrop into frame.
- Leaving a blur(0px) filter on the media promotes it to a stale raster under
  the camera scale.
