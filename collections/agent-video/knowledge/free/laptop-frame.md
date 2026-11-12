---
slug: laptop-frame
title: Laptop Frame
tier: free
category: screens
evidence: source+film
demo: 960x540 at 60 fps, 480 frames (8 s)
length_30fps: 240
palette: light #F4F4F0, dark #000000, accent #3576E5
used_in: none
---

# Laptop Frame

> A MacBook-style laptop that opens, shows a notch notification, then dives into
> its screen. Use it to present a product UI before taking it full-frame.

## What it shows

The film opens on black with only the deck visible. The lid lifts from nearly
closed to its resting tilt while the whole machine rises and fades in. A
placeholder product page staggers in on the screen, and the notch pill morphs
from a camera dot to loading dots to an "AirPods Connected" label with a battery
gauge. The laptop bobs gently while the screen content holds. Then the camera
dollies into the screen and un-tilts the lid until the screen content covers the
whole frame, where it rests.

## Timeline

| Phase           | Frames (30 fps) | What moves                                                                                          | Curve                                 |
| --------------- | --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Lid opens       | 0–30            | Lid swings from 82° to 18° rest tilt; machine rises 24 px and fades in over 0–10                    | Easing.out cubic (source)             |
| Screen builds   | 6–38            | Placeholder rows rise 14 px each with staggered delays of 6–24 plus 14                              | Easing.out cubic (source)             |
| Notch loads     | 72–120          | Pill widens 116 to 150 px with three pulsing dots, then expands to 320 px with label and battery    | Easing.inOut cubic (source)           |
| Connected hold  | 120–140         | Label and battery sit; machine bobs ±4 px on a 5 s sine loop                                        | sine, seamless from entrance (source) |
| Screen takeover | 140–185         | Camera scales up to cover value and slides up; lid un-tilts 18° to 0°; notch fades out over 140–150 | bezier(0.2, 0.6, 0.35, 1) (source)    |
| Full-frame hold | 185–240         | Screen content fills the frame and rests                                                            | hold (observed)                       |

## Techniques

- `DeviceFrame`: lid 820x500 px with 14 px bezel and 22 px top radius, deck
  900x22 px with lift-lip, hinge at the lid bottom edge (source)
- `Reveal`: entrance rises 24 px (open) or 70 px (rise) and fades in over 10–12
  frames (source)
- `Camera`: takeover scale derives from composition size so the screen inner
  rect exactly covers the frame; translateY compensates the lid-to-box offset
  (source)
- `MotionBlur`: no blur layer; sharpness comes from the eased landing, and
  scaled text uses geometricPrecision with willChange only in the Player
  (source)
- `Pill`: notch pill morphs 116 to 150 to 320 px tall 30 px, cross-fading idle,
  loading and done layers (source)
- `AppScreen`: placeholder hero with app bar, badge, 46 px headline and two
  buttons staggers in behind the notch (source)
- `Stage`: black act flips to the light screen content as the dive completes at
  frame 143 (observed)

## Props to expose

| Prop           | Type                       | Default                         | Purpose                                            |
| -------------- | -------------------------- | ------------------------------- | -------------------------------------------------- |
| children       | ReactNode                  | placeholder hero                | Screen content; falls back to screenSrc, then hero |
| screenSrc      | string                     | answer-stream mp4               | Image or video filling the screen when no children |
| entrance       | "rise" \| "open" \| "none" | "rise"                          | How the machine enters; open swings the lid        |
| finale         | "none" \| "zoom-to-screen" | "none"                          | Dive into the screen until it fills the frame      |
| bezelColor     | string                     | dark neutral                    | Lid shell and deck base color                      |
| screenColor    | string                     | theme card                      | Fill behind the screen content                     |
| theme          | Partial<SnapCnTheme>       | —                               | Design-token overrides for screen contents         |
| mode           | "light" \| "dark"          | —                               | App theme of the screen                            |
| fontFamily     | string                     | Inter stack                     | Face for screen words                              |
| indicatorColor | string                     | #30D158                         | Battery gauge color in the notch                   |
| restTilt       | number                     | 18                              | Lid rotateX at rest, in degrees                    |
| radius         | number                     | 22                              | Lid top-corner radius in px                        |
| shadow         | string                     | 0 40px 80px rgba(10,12,20,0.45) | Drop shadow under the deck; empty disables         |
| scale          | number                     | 0.95                            | Uniform size multiplier for the machine            |
| showNotch      | boolean                    | true                            | Render the notch notification pill                 |
| notchLabel     | string                     | AirPods Connected               | Text in the connected notch state                  |
| batteryLevel   | number                     | 85                              | Battery fill 0–100 in the connected state          |
| floatLoop      | boolean                    | true                            | Gentle vertical bob after the entrance             |
| floatAmplitude | number                     | 4                               | Peak float displacement in px                      |
| speed          | number                     | 1                               | Time multiplier on every schedule                  |
| className      | string                     | —                               | Class for the outer wrapper                        |

## Rebuild it

1. Build the lid as an 820x500 panel with 14 px padding bezel and a 900x22 deck
   under it, hinged at the lid bottom edge with perspective 1600.
2. Run the entrance over 0–30: fade in over 0–10, rise 24 px with an ease-out
   cubic, and swing the lid from 82° to 18°.
3. Stagger placeholder rows in from delays 6–24, each rising 14 px over 14
   frames.
4. Morph the notch pill 116 to 150 px at frame 72 with pulsing dots, then to 320
   px at frame 120 with the label and battery gauge.
5. Start the ±4 px, 5 s sine float at frame 30, and stop it when the dive
   starts.
6. From 140–185 scale the camera to the computed cover value and slide it up
   while un-tilting the lid to 0°, fading the notch out over 140–150.
7. Hold the full-frame screen content to frame 240.

## Pitfalls

- Deriving the cover scale from anything but composition size leaves gaps or
  overshoot at the end of the dive.
- Un-tilting the lid late or not at all leaves a foreshortened screen in the
  final hold.
- Fading the notch after the push starts lets it smear across the zoom.
- Letting the float loop run through the dive fights the camera curve and the
  landing drifts.
