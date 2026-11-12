---
slug: spec-sweep
title: Spec Sweep
tier: free
category: text
evidence: source
demo: 1280x720 at 30 fps, 75 frames (2.5 s)
length_30fps: 75
palette: light none, dark #0A0A0B, accent #3577E0
used_in: none
---

# Spec Sweep

> One centred line slides in word by word while a highlight reads along it.

## What it shows

A single line sits centred on a dark page. Each word slides in on its own clock
while a band of brightness travels along the line and lights each point as it
passes. An icon charges up from its base beside the words. Lead words fall back
to grey behind the band, accent words stay lit, and muted words never rise past
their cap. The finished line holds once the band has crossed.

## Timeline

| Phase | Frames (30 fps) | What moves        | Curve                                                                                   |
| ----- | --------------- | ----------------- | --------------------------------------------------------------------------------------- |
| 1     | 0-14            | Words slide in    | Each word eases from 1.466 em travel, staggered; Measured 16-frame entry table (source) |
| 2     | 1-55            | Highlight crosses | Brightness band travels the line over 54 frames; Measured sweep curve (source)          |
| 3     | 11-41           | Icon charges      | Fill rises from the base over 30 frames; Easing.bezier(0.166, 0.092, 0.279, 1) (source) |
| 4     | 55-75           | Line holds        | Finished line still; Hold (inferred)                                                    |

## Techniques

- `SplitText`: word-by-word slide-in with compressed stagger on long copy
  (source)
- `Highlight`: per-point brightness sampled from one measured sweep curve
  through a gradient per word (source)
- `custom: icon-charge`: icon fill rising bottom-up behind a clip, dim before
  the charge reaches it (source)

## Props to expose

| Prop         | Type                 | Default                                       | Purpose                                    |
| ------------ | -------------------- | --------------------------------------------- | ------------------------------------------ |
| segments     | SpecSegment[]        | Ship / icon / a launch film / in / 20 minutes | Words with lead, icon, accent, muted roles |
| icon         | string               | bolt path                                     | SVG path drawn in the icon box             |
| iconBox      | [number, number]     | 83.07 by 123.79                               | ViewBox of the icon                        |
| iconSize     | number               | 1.452                                         | Icon height in em                          |
| accentColor  | string               | #3577E0                                       | Charged icon colour                        |
| iconDim      | number               | 0.39                                          | Icon opacity before the charge             |
| iconRim      | number               | 1.47                                          | Lighter inner edge width in stage px       |
| iconRimColor | string               | accent toward white                           | Edge colour                                |
| chargeDelay  | number               | 11.47                                         | Frames from icon entry to charge start     |
| chargeFrames | number               | 30                                            | Charge length in frames                    |
| fontFamily   | string               | none                                          | Face override                              |
| fontSize     | number               | 85.15                                         | Type size in stage px                      |
| fontWeight   | number               | 500                                           | Type weight                                |
| travel       | number               | 1.466                                         | Word slide distance in em                  |
| stagger      | number               | 2                                             | Frames between word entries                |
| sweepFrames  | number               | 54                                            | Frames for the highlight crossing          |
| mutedLevel   | number               | 0.6                                           | Brightness cap for muted words             |
| theme        | Partial<SnapCnTheme> | none                                          | Design-system token overrides              |
| mode         | light \| dark        | dark                                          | Colour mode                                |
| speed        | number               | 1                                             | Playback multiplier                        |

## Rebuild it

1. Split segments into words and lay out one centred line, shrinking to fit 85
   percent of the stage.
2. Slide each word in on the 16-frame entry table with stagger compressed on
   long copy.
3. Reach each point of each word with the highlight on its own delayed clock
   from the single sweep curve.
4. Paint each word with a gradient sampled every few px from that curve.
5. Charge the icon bottom-up after its delay, dim before.
6. Keep accent words lit once reached and cap muted words at 0.6.

## Pitfalls

- One shared highlight clock for whole words lights every letter at once instead
  of reading along the line.
- A guessed ease for the entry misses the measured table by whole pixels on long
  copy.
- Sizing the line past 85 percent of the stage pushes sliding words off frame.
- Mixing the pale label tint toward background instead of card swings the hue
  through green.
