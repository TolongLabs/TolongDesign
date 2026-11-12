---
slug: phone-frame
title: Phone Frame
tier: free
category: screens
evidence: source+film
demo: 960x540 at 60 fps, 480 frames (8.0 s)
length_30fps: 240
palette: light #F4F4F4, dark #000000, accent #666D31
used_in: none
---

# Phone Frame

> An iPhone-style device frame that enters flat or tilted and can fly a
> cinematic crane move into its own screen.

## What it shows

A phone body fades and settles into the frame while a screen video fades in
under an 8px un-blur. In the showcase variant the camera starts low at the
laid-back device's bottom-left corner, sweeps up the screen while zooming in,
lingers near the top, then pulls back to a straight frontal view. The default
screen is a dark ride-summary map whose GPS route draws itself while stat pills
pop in along it. The film ends on the settled frontal phone.

## Timeline

| Phase | Frames (30 fps) | What moves                                                 | Curve                       |
| ----- | --------------- | ---------------------------------------------------------- | --------------------------- |
| 1     | 0–16            | Body fades in; float entrance scales 0.96 to 1             | ease-out cubic; (source)    |
| 2     | 4–22            | Screen media fades in and un-blurs from 8px                | linear; (source)            |
| 3     | 0–24            | Crane holds low at the device corner, zoom 2.6 to 1.35     | ease-in-out cubic; (source) |
| 4     | 24–101          | Camera sweeps up the screen, zoom rises to 2.75            | ease-in-out cubic; (source) |
| 5     | 101–149         | Camera lingers near the top, zoom eases to 2.3             | ease-in-out cubic; (source) |
| 6     | 149–239         | Camera pulls back to a frontal view, zoom to 1             | ease-in-out cubic; (source) |
| 7     | 12–150          | Route draws head-first; pills pop at 22, 40, 52, 60 and 74 | ease-out; (source)          |
| 8     | 209–239         | Frontal phone holds still on a light ground                | hold; (observed)            |

## Techniques

- `DeviceFrame`: 320 by 656 body, 12px bezel, radius 53, screen radius 41, four
  side buttons, 90 by 26 dynamic island with lens (source)
- `Camera`: six-stop crane (rotateX 52 to 0, rotateY 28 to 0, rotateZ 30 to 0,
  zoom 2.6 to 1) under 1400px perspective, normalized to the composition length
  (source)
- `Reveal`: three entrances settling by frame 30 — rise from 70px, rotate-in
  from −8 degrees, or float fade with scale 0.96 to 1 (source)
- `LineDraw`: closed GPS route revealed by stroke-dashoffset over frames 12 to
  128 with a glowing head dot (source)
- `Card`: five insight pills rising 6px and fading in over 12 frames each,
  anchored to route points by connector lines (source)
- `AppScreen`: ride stats header with four columns, athlete selector and reset
  control over the map (source)

## Props to expose

| Prop              | Type      | Default                                        | Purpose                                                         |
| ----------------- | --------- | ---------------------------------------------- | --------------------------------------------------------------- |
| children          | ReactNode | ride-summary demo screen                       | Screen content; overrides screenSrc                             |
| screenSrc         | string    | showcase-mobile-videos/boss-energy-roundup.mp4 | Image or video filling the screen                               |
| variant           | select    | showcase                                       | flat faces camera, tilt holds rotateY, showcase flies the crane |
| entrance          | select    | float                                          | rise, rotate-in, or float                                       |
| bezelColor        | color     | #C7C9CE                                        | Device shell color                                              |
| screenColor       | color     | #0A0A0B                                        | Screen fill behind content                                      |
| radius            | number    | 53                                             | Body corner radius                                              |
| screenRadius      | number    | 41                                             | Screen corner radius                                            |
| scale             | number    | 0.92                                           | Uniform size multiplier                                         |
| tiltAngle         | number    | -12                                            | rotateY degrees for the tilt variant                            |
| showDynamicIsland | boolean   | true                                           | Cutout over the screen                                          |
| floatLoop         | boolean   | true                                           | Vertical bob after the entrance                                 |
| floatAmplitude    | number    | 6                                              | Peak bob displacement in pixels                                 |
| shadow            | text      | 0 30px 70px rgba(16,24,40,0.28)                | Drop shadow; empty disables                                     |
| fontFamily        | text      | Inter stack                                    | Face for the demo screen                                        |
| theme             | object    | —                                              | Design-token overrides                                          |
| mode              | select    | —                                              | light or dark screen theme                                      |
| speed             | number    | 1                                              | Timeline rate multiplier                                        |

## Rebuild it

1. Paint a light backdrop and center a 320 by 656 body with 12px padding, radius
   53, and four side buttons.
2. Cut the screen at radius 41 and cover-fit the media, fading opacity 0 to 1
   while blur falls 8px to 0 over frames 4 to 22.
3. Run the entrance: opacity over frames 0 to 16 and scale 0.96 to 1 over frames
   0 to 24 with an ease-out cubic.
4. Fly the showcase crane through the six keyframed poses with per-segment
   ease-in-out, ending exactly at identity.
5. Draw the route with a white stroke over an orange glow underlay via dash
   offset from frame 12 to 128.
6. Pop each insight pill over 12 frames from its appear frame, rising 6px with a
   connector line and anchor dot.
7. Hold the frontal phone from frame 216 and start a 4.5s sine bob of 6px so it
   seams with the entrance.

## Pitfalls

- The crane must end exactly at identity or the float loop starts with a visible
  jump.
- A media element sized by its parent collapses under preflight max-width rules;
  opt out or cover-fit breaks.
- Glyph baselines snap to whole stage pixels, so ease type on a scaled layer or
  it climbs in steps.
- Rewriting root-relative asset paths through staticFile twice prefixes them
  twice; guard the static base.
