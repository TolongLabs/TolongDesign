---
slug: title-sweep
title: Title Sweep
tier: free
category: text
evidence: source
demo: no demo film; composition runs 76 frames at 30 fps (2.53 s)
length_30fps: 76
palette: light none, dark #000000, accent #EB7535
used_in: none
---

# Title Sweep

> A centered title on black is lit by a warm gradient that travels across its
> letters, then the next title cuts in.

## What it shows

White-warm letters glow out of black as a gradient band of deep red, orange, and
pale peach travels across them from one side. The light crosses the title and
leaves darkness behind it. The frame cuts to black and the next title lights the
same way, slightly reframed. The last title's glow settles and holds warm
instead of sweeping off. The whole shot pulls back slowly throughout.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                                 | Curve                   |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| 1     | 0–36            | First title lights as the gradient center sweeps across it per a 36-entry measured table, fast at both ends and slow through the pale band | measured table (source) |
| 2     | 36              | Hard cut to the next title on black                                                                                                        | hard cut (source)       |
| 3     | 36–72           | Second title lights the same way while the pull-back shrinks the frame 0.00119 per frame                                                   | measured table (source) |
| 4     | 72–76           | Last title holds its warm light instead of sweeping off                                                                                    | hold (source)           |

## Techniques

- `GlyphGlow`: a 44-stop rigid gradient from black through ember orange to a
  pale band travels across the letterforms, so titles arrive and leave by light
  rather than by fading (source)
- `Camera`: one slow pull-back scales the frame down 0.00119 per frame across
  the whole shot (source)

## Props to expose

| Prop        | Type        | Default                      | Purpose                                                        |
| ----------- | ----------- | ---------------------------- | -------------------------------------------------------------- |
| titles      | string[]    | ["snapcn Pro", "snapcn.dev"] | Titles shown in order, each cut in on black                    |
| fontFamily  | string      | "Inter"                      | Face label or loaded CSS family                                |
| fontSize    | number      | 110.96                       | Type size in px on the 1920 stage; long copy shrinks from here |
| fontWeight  | number      | 500                          | Weight                                                         |
| tracking    | number      | -0.0165                      | Letter spacing in em                                           |
| wordSpacing | number      | -0.0769                      | Extra space between words in em                                |
| nudge       | number[]    | none                         | Horizontal offset per title in px on the stage                 |
| titleScale  | number[]    | none                         | Size multiplier per title                                      |
| stops       | SweepStop[] | 44 measured stops            | Gradient color stops in em from the gradient center            |
| background  | color       | #000000                      | Frame color the dark ends rest on                              |
| speed       | number      | 1                            | Time multiplier on the frame clock                             |

## Rebuild it

1. Set each title centered on a 1920 by 1080 stage with the baseline 0.267 em
   below center, shrinking lines wider than 90 percent of the stage to fit.
2. Fill the glyphs with a horizontal gradient of black, ember, orange, and one
   pale band, positioned in em from its center.
3. Move the gradient center across the title per the measured 36-entry table for
   passing titles and the 40-entry table for the final one.
4. Cut hard between titles every 36 frames on black, never crossfading.
5. Scale the whole stage down 0.00119 per frame for the pull-back.

## Pitfalls

- Fading titles in and out instead of traveling the gradient reads as a
  dissolve; the type itself must never fade.
- Stretching the sweep to fit a long line with the same table leaves the ends
  dark; widen the gradient reach past 7.6 em lines.
- An easing curve cannot replace the measured table; the sweep is fast at the
  ends and slow through the pale band.
- Measuring line width before the face loads sizes the fit to the fallback font;
  wait for the font before measuring.
