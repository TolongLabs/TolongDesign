---
slug: text-reveal
title: Text Reveal
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 180 frames (3.0 s)
length_30fps: 90
palette: light #F4F4F4, dark #141820, accent none
used_in: none
---

# Text Reveal

> A lead word lands huge, drifts closer, falls back, and pulls the rest of the
> line in behind it.

## What it shows

The word "Meet" fades up large and centered on a pale frame. It hangs there,
drifting slightly toward the viewer. Then it shrinks back and slides left while
"Acme" and "Billing" push in from the right one after the other. The full line
"Meet Acme Billing" settles small and centered, and holds still for the rest of
the run.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                            | Curve                                     |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1     | 0–6             | Lead word fades from 0 to 1 opacity at 2.3x its final size                                                            | linear fade (source)                      |
| 2     | 6–18            | Lead word holds big and drifts forward to 2.3 times 1.06                                                              | cubic-bezier(0.25, 1, 0.5, 1) (source)    |
| 3     | 18–32           | Lead word recedes from its peak back to 1x, pivoting the scale on the measured text baseline                          | cubic-bezier(0.5, 0, 0.05, 1) (source)    |
| 4     | 18–48           | Whole line slides from its offset position into its resting centered place, barely moving at first and traveling late | cubic-bezier(0.5, 0, 0.05, 1) (source)    |
| 5     | 25–39           | Second word pushes in from 0.5 em right over 14 frames with a 2-frame fade                                            | cubic-bezier(0.22, 0.8, 0.36, 1) (source) |
| 6     | 29–43           | Third word pushes in on the same 14-frame clock, staggered 4 frames later                                             | cubic-bezier(0.22, 0.8, 0.36, 1) (source) |
| 7     | 48–90           | Finished line holds still and centered                                                                                | hold (observed)                           |

## Techniques

- `Camera`: the lead word opens at 2.3x, pushes to 1.06x while holding, then
  falls back to 1x over 14 frames (source)
- `SplitText`: trailing words push in one at a time, staggered 4 frames apart,
  each over 14 frames (source)
- `Reveal`: each trailing word arrives from 0.5 em right with a deliberately
  tiny 2-frame fade so it reads as pushed, not faded (source)
- `custom:` preset bundles: the file also exports 14 named motion bundles with
  shared easing names and an enter/exit scheduler for driving the same
  vocabulary unit by unit (source)

## Props to expose

| Prop             | Type              | Default             | Purpose                                                         |
| ---------------- | ----------------- | ------------------- | --------------------------------------------------------------- |
| text             | string            | "Meet Acme Billing" | The sentence; its first word leads                              |
| fontSize         | number            | 72                  | Final settled type size in px                                   |
| color            | string            | theme foreground    | Ink color                                                       |
| fontWeight       | number \| string  | 600                 | Weight                                                          |
| initialScale     | number            | 2.3                 | How much larger the lead word starts                            |
| introDuration    | number            | 6                   | Frames the lead word fades in over                              |
| holdDuration     | number            | 12                  | Frames the lead word spends big and centered                    |
| pushScale        | number            | 1.06                | Drift toward the viewer during the hold                         |
| recedeDuration   | number            | 14                  | Frames the lead word takes to fall back                         |
| assembleDuration | number            | 30                  | Frames the line takes to slide into place                       |
| wordDelay        | number            | 7                   | Frames after the recede begins before the second word pushes in |
| wordStagger      | number            | 4                   | Frames between each trailing word                               |
| wordDuration     | number            | 14                  | Frames a trailing word takes to push in                         |
| wordPush         | number            | 0.5                 | How far right of its slot a word starts, in em                  |
| wordFade         | number            | 2                   | Frames a trailing word fades in over                            |
| letterSpacing    | string            | "-0.03em"           | Resting letter spacing                                          |
| speed            | number            | 1                   | Time multiplier on the frame clock                              |
| className        | string            | none                | Extra class on the line                                         |
| theme            | object            | none                | Design-system token overrides                                   |
| mode             | "light" \| "dark" | none                | Forces the theme mode                                           |
| fontFamily       | string            | system stack        | Face label or loaded CSS family                                 |

## Rebuild it

1. Measure the finished line width, the lead word's center inside it, and the
   baseline offset from a zero-size inline block.
2. Render the lead word centered in the frame at 2.3x, pivoting the scale on the
   measured baseline, and fade it in over 6 frames.
3. Drift it forward to 1.06x over the next 12 frames, then recede to 1x over 14
   frames.
4. Starting with the recede, slide the line from its offset into its resting
   centered place over 30 frames.
5. Push each trailing word in from 0.5 em right over 14 frames, starting 7
   frames into the recede and staggered 4 frames apart.
6. Set type with geometric precision and gate any compositor promotion to
   preview only, so scaled frames re-rasterize real type.

## Pitfalls

- Pivoting the settle scale on the middle or bottom of the line box makes the
  baseline climb the pixel grid in whole-pixel jumps; pivot on the measured
  baseline.
- Leaving hinting on boils the letterforms as the size slides; render with
  geometric precision.
- A quint or expo settle spends most of its frames moving less than half a
  pixel, which rasterizes to identical frames and reads as a freeze.
- Fading trailing words in over many frames reads as a dissolve; keep the fade
  near 2 frames so the arrival reads as a push.
