---
slug: laptop-open
title: Laptop Open
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 222 frames (3.7 s)
length_30fps: 111
palette: light #FCFCFC, dark #000000, accent none
used_in: none
---

# Laptop Open

> A laptop that pulls back from a blurred macro shot, holds whole, then swallows
> the lens into its screen.

## What it shows

A single line of type fills the frame, blurred. The camera pulls back and a
laptop resolves out of the blur: lid, notch, keyboard deck. The whole machine
holds centred while its screen plays. The camera then pushes back in until the
screen is the frame. It crosses through into a colour field where a new line
types itself.

## Timeline

| Phase | Frames (30 fps) | What moves                                                         | Curve    |
| ----- | --------------- | ------------------------------------------------------------------ | -------- |
| 1     | 0–7             | Macro on the glass; the line blurs out of legibility               | ease-out |
| 2     | 7–45            | Camera pulls back; lid, notch and deck resolve to the full machine | ease-out |
| 3     | 45–85           | Whole laptop holds centred; screen content plays                   | hold     |
| 4     | 85–100          | Camera pushes into the screen until it fills the frame             | ease-in  |
| 5     | 100–111         | Colour field with a line typing itself across it                   | linear   |

## Techniques

- `Camera`: pull-back from the glass, hold, then push-in through the screen;
  tilt trades off with distance (observed)
- `DeviceFrame`: laptop lid plus a second deck plane hinged on the glass bottom
  edge (observed)
- `MotionBlur`: blur rides the fast pull-back and the late push-in (inferred)
- `Typewriter`: a line types itself across the colour field after the crossing
  (observed)

## Props to expose

| Prop        | Type             | Default          | Purpose                                                      |
| ----------- | ---------------- | ---------------- | ------------------------------------------------------------ |
| openLine    | string           | "Ship any scene" | Line on the glass during the pull-back (proposed)            |
| screen      | ReactNode        | blank field      | Screen content that plays during the hold (proposed)         |
| endLine     | string           | "Remotion"       | Line typed on the colour field after the crossing (proposed) |
| fieldColors | [string, string] | pale violet wash | Gradient stops of the end field (proposed)                   |

## Rebuild it

1. Open on the glass with `Camera` close and the line blurred past reading.
2. Pull back over frames 7–45 until the full `DeviceFrame` and deck sit centred.
3. Hold the machine from frame 45 to 85 and play the screen slot.
4. Push in over frames 85–100, accelerating, until the screen fills the frame.
5. Cross through into the colour wash and `Typewriter` the end line.
6. Hold the typed line to frame 111.

## Pitfalls

- Modelling the move as scale plus rotateX breaks the perspective; the top and
  bottom glass edges change width independently.
- Keeping anything sharp during the fastest travel frames kills the speed read.
- Letting the deck flex with the lid flattens the machine; only the lid plane
  carries the glass quad.
- Rushing the middle hold leaves no room for the screen content to play.
