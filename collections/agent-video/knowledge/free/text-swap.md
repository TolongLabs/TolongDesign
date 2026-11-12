---
slug: text-swap
title: Text Swap
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 180 frames (3.0 s)
length_30fps: 90
palette: light #F8FCFC, dark #141420, accent none
used_in: none
---

# Text Swap

> One line exits and another enters on an exit-then-enter schedule, hardest in
> the default fly-through.

## What it shows

"Manual invoicing" rests centered on a pale frame. It rushes straight at the
camera, swelling and smearing radially until it blows past. "Automated with
Acme" resolves out of depth behind it: small and soft at first, then sharp and
full size. The new line holds centered for the rest of the run. The demo shows
the default fly-through transition as one block.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                                                                | Curve                                    |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| 1     | 0–20            | Outgoing line travels toward the eye over 20 frames, swelling through a perspective projection to 12x with 18 shutter samples, staying solid until 72 percent of the exit | cubic-bezier(1, 0.65, 0.85, 1) (source)  |
| 2     | 21–37           | Incoming line enters from 0.82x scale and 9 px blur, resolving to full size and zero blur over 16 frames                                                                  | cubic-bezier(0.2, 0.6, 0.35, 1) (source) |
| 3     | 37–90           | New line holds still and centered                                                                                                                                         | hold (observed)                          |

## Techniques

- `TextSwap`: exit-then-enter scheduling where the incoming line starts once the
  outgoing line is almost gone, minus 1 frame of overlap plus a 2-frame beat
  (source)
- `Camera`: the fly-through exit rushes the line to 12x through a perspective
  projection so it blows up eightfold in the last frames (source)
- `MotionBlur`: 18 shutter samples across one frame blend additively for a
  radial smear that is sharp at the center and streaked at the edges (source)

## Props to expose

| Prop          | Type              | Default               | Purpose                                                                 |
| ------------- | ----------------- | --------------------- | ----------------------------------------------------------------------- |
| fromText      | string            | "Manual invoicing"    | The outgoing line                                                       |
| toText        | string            | "Automated with Acme" | The incoming line                                                       |
| transition    | 6 presets         | "fly-through"         | fly-through, fade-through, crossfade, shared-axis-y, shared-axis-z, cut |
| unit          | "word" \| "block" | block (fly-through)   | Animate word by word or as one block                                    |
| exitDuration  | number            | 20 (fly-through)      | Frames each outgoing segment takes to exit                              |
| enterDuration | number            | 16 (fly-through)      | Frames each incoming segment takes to enter                             |
| exitStagger   | number            | 1                     | Frames between outgoing segments                                        |
| enterStagger  | number            | 2                     | Frames between incoming segments                                        |
| overlap       | number            | 1                     | Frames the enter starts before the exit fully ends                      |
| microDelay    | number            | 2                     | Beat between the two moments                                            |
| fontSize      | number            | 72                    | Type size in px                                                         |
| color         | string            | theme foreground      | Ink color                                                               |
| fontWeight    | number            | 600                   | Weight                                                                  |
| speed         | number            | 1                     | Time multiplier on the frame clock                                      |
| className     | string            | none                  | Extra class on the lines                                                |
| theme         | object            | none                  | Design-system token overrides                                           |
| mode          | "light" \| "dark" | none                  | Forces the theme mode                                                   |
| fontFamily    | string            | system stack          | Face label or loaded CSS family                                         |

## Rebuild it

1. Split both lines into segments by unit, block by default for the fly-through.
2. Ease the outgoing travel 0 to 1 over 20 frames, and turn travel into size
   with 1 over (1 minus travel) up to 12x.
3. Hold the outgoing opacity at 1 until 72 percent of the exit, then fade it
   fast.
4. Draw 18 time-offset samples of the exit across one frame and blend them
   additively for the shutter smear.
5. Start the incoming line at frame 21 from 0.82x and 9 px blur, and settle it
   over 16 frames on a moderate decelerate.
6. Hold the new line centered to frame 90.

## Pitfalls

- Fading the outgoing line across the whole exit dims type that should stay
  solid until it is on top of the viewer; hold the fade to the last quarter.
- Stacking shutter samples with normal alpha blending keeps the first sample
  solid and fattens stems; blend them additively instead.
- Animating the fly-through word by word turns one camera move into five objects
  blowing up about their own centers.
- An expo or quint enter settle freezes visibly on a frame clock; use a moderate
  decelerate.
