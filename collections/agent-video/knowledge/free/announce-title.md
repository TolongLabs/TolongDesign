---
slug: announce-title
title: Announce Title
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 340 frames (5.67 s)
length_30fps: 170
palette: light #F4F8F4, dark #0C001C, accent #5200F3
used_in: none
---

# Announce Title

> A four-shot launch title: rush, colour field, paper name, glowing tagline. Use
> it to open a release video.

## What it shows

The eyebrow races away from the camera on a tilted plane and lands on a violet
field. It settles, then tears off to the left. The product name assembles word
by word on paper. A macro pan crosses the tagline while a gradient mark
counter-travels past it. The full line builds last word first on night ground
while a white wipe drains it to white, and the mark rests at its head.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                | Curve                                                                 |
| ----- | --------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 1     | 0–18            | Eyebrow rushes away on a receding plane, magnification 52.6 to 4.0, rake 81 to 14 degrees | exponential sample tables (source)                                    |
| 2     | 18–36           | Same word settles flat from 1.53 to 1, then tears left with per-letter stagger            | normalised exponential decay 0.7605, exit base 3.2 per frame (source) |
| 3     | 36–41           | Hard cut to violet field, eyebrow holds at rest                                           | hold (source)                                                         |
| 4     | 41–80           | Three title words slide in from 143, 87 and 88 px and pop to full opacity                 | normalised exponential decay 0.82, alpha decay 0.79 (source)          |
| 5     | 80–110          | Macro pan crosses the tagline leftward, mark travels right and spins                      | integrated settle-plus-launch pan (source)                            |
| 6     | 110–134         | Closing line builds last word first every 2.8 frames, group slides right into place       | linear reveal, exponential settle 0.792 (source)                      |
| 7     | 124–139         | White wipe crosses the line left to right at 31.7 px per frame, mark exits                | linear (source)                                                       |
| 8     | 136–170         | Finished line holds on night ground                                                       | hold (observed)                                                       |

## Techniques

- `Stage`: full-frame grounds in void, field, paper and night colours with a low
  green radial glow on night (source)
- `Camera`: plane magnification and rake tables, 1.53 settle, macro pan, closing
  slide (source)
- `MotionBlur`: 20-sample shutter over the rush, distance-scaled samples over
  the exit (source)
- `Reveal`: title words slide into pre-laid slots with opacity pops at 0.39,
  0.46 and 0.29 (source)
- `SplitText`: eyebrow exit staggers 0.215 frames per letter, tagline builds
  last word first (source)
- `GlyphGlow`: white wipe crosses a fixed crimson-to-blue line gradient and
  drains it to tagline ink (source)
- `custom: MarkBloom`: gradient mark with four screen-blend blur passes that
  blow its centre to near-white (source)

## Props to expose

| Prop         | Type               | Default                                           | Purpose                                           |
| ------------ | ------------------ | ------------------------------------------------- | ------------------------------------------------- |
| eyebrow      | string             | "Introducing"                                     | Word that rushes and lands on the field           |
| title        | string             | "snapcn 1.0"                                      | Product name, assembled word by word              |
| tagline      | string             | "Ready-made scenes for Remotion, in one command." | Closing line, revealed last word first            |
| symbolPath   | string             | snapcn mark path                                  | Mark drawn in a 0 0 100 100 box; empty draws none |
| symbolColors | string[] \| string | ten-stop blue-to-red ramp                         | Mark gradient stops, spaced evenly                |
| symbolScale  | number             | 1                                                 | Multiplier on the mark size                       |
| fieldColor   | string             | "#5600F5"                                         | Colour field behind the eyebrow                   |
| titleColor   | string             | "#4800C9"                                         | Title ink on paper                                |
| paperColor   | string             | "#FCFCFA"                                         | Paper behind the title                            |
| voidColor    | string             | "#100022"                                         | Ground behind the opening rush                    |
| nightColor   | string             | "#000028"                                         | Ground behind both closing shots                  |
| glowColor    | string             | "#08FF4B"                                         | Glow lifting the night ground                     |
| glowStrength | number             | 0.139                                             | Glow strength, 0 to 1                             |
| taglineColor | string             | "#F2F8FF"                                         | Ink the tagline settles to                        |
| inkColor     | string             | "#FFFFFF"                                         | Eyebrow and macro line ink                        |
| fontFamily   | string             | theme font                                        | Typeface for all three lines                      |
| speed        | number             | 1                                                 | Time multiplier on the frame clock                |

## Rebuild it

1. Run five shots at 30 fps with hard cuts at frames 18, 41, 80 and 110, total
   170 frames.
2. Rush the eyebrow away with the magnification table under a flattening rake,
   sampled 20 times for blur.
3. Settle the flat word with the 0.7605 decay, then tear it left at base 3.2 per
   frame with 0.215-frame letter stagger.
4. Slide each title word into its slot with the 0.82 decay and pop opacity from
   its measured start.
5. Pan the macro shot left with the integrated curve while the mark
   counter-travels right.
6. Build the closing line last word first every 2.8 frames while the group
   slides right at 0.792 decay.
7. Wipe white across the fixed line gradient at 31.7 px per frame and exit the
   mark over frames 134 to 139.
8. Fit each line with a hidden probe and cap widths at 0.55, 0.8 and 0.88 of
   frame width.

## Pitfalls

- Easing the shot changes with a standard cubic; the joins are hard cuts, and
  the settles use measured exponential decays.
- Pivoting the eyebrow scale on the box centre; pivot on the baseline and pay
  the lift as a translate.
- Leaving hinting on; set geometric precision or the letterforms boil under
  scale.
- Fading the tagline words in; each word is simply visible or hidden on its
  frame.
- Keying the tint to the wipe; the gradient sits fixed in line coordinates while
  the wipe moves on the clock.
