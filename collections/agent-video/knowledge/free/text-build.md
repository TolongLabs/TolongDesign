---
slug: text-build
title: Text Build
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 150 frames (2.5 s)
length_30fps: 75
palette: light #F4F4F4, dark none, accent none
used_in: none
---

# Text Build

> One line grows word by word while the placed words slide aside to stay
> centered.

## What it shows

The first word fades up alone in the middle of a pale frame. Each next word
flies in from the right, soft and slightly small, and lands at the end of the
line. The words already on stage shift left together on every arrival, so the
growing line stays centered. The finished sentence "Ship. Test. Deploy. Repeat."
rests centered until the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                | Curve                                   |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 1     | 0–10            | First word enters: opacity 0 to 1, scale 0.992 to 1, blur 3.5 px to 0, small cross-axis drift of 6 px settling to 0       | cubic-bezier(0.2, 0.8, 0.2, 1) (source) |
| 2     | 10–23           | Second word enters from 88 px right; first word reflows left to its new centered slot with a blur pulse peaking at 0.8 px | cubic-bezier(0.2, 0.8, 0.2, 1) (source) |
| 3     | 23–36           | Third word enters the same way; words one and two reflow left together                                                    | cubic-bezier(0.2, 0.8, 0.2, 1) (source) |
| 4     | 36–49           | Fourth word enters; the three placed words reflow to the final four-word layout                                           | cubic-bezier(0.2, 0.8, 0.2, 1) (source) |
| 5     | 49–75           | Full line holds still and centered                                                                                        | hold (source)                           |

## Techniques

- `SplitText`: words enter one at a time, each on its own 13-frame clock after a
  10-frame first word (source)
- `Reveal`: each word blurs in from 3.5 px with a rise from 88 px right and a
  settle from scale 0.992 (source)

## Props to expose

| Prop          | Type                             | Default                       | Purpose                                          |
| ------------- | -------------------------------- | ----------------------------- | ------------------------------------------------ |
| text          | string                           | "Ship. Test. Deploy. Repeat." | The line to build                                |
| axis          | "x" \| "y"                       | "x"                           | Build sideways as a line, or downward as a stack |
| entryOffset   | number                           | 88 (x), 28 (y)                | Distance a new word travels in                   |
| gap           | number                           | 10 (x), 12 (y)                | Space between words, or rows                     |
| firstDuration | number                           | 10                            | Frames the first word takes to settle            |
| pushDuration  | number                           | 13                            | Frames each later enter and reflow step takes    |
| entryScale    | number                           | 0.992                         | Scale a word enters at                           |
| entryBlur     | number                           | 3.5 (x), 2.4 (y)              | Blur a word enters with, in px                   |
| reflowBlur    | number                           | 0.8                           | Peak blur on placed words mid-reflow, in px      |
| easing        | [number, number, number, number] | [0.2, 0.8, 0.2, 1]            | Cubic-bezier for every move                      |
| fontSize      | number                           | 72                            | Type size in px                                  |
| color         | string                           | theme foreground              | Ink color                                        |
| fontWeight    | number                           | 600                           | Weight                                           |
| speed         | number                           | 1                             | Time multiplier on the frame clock               |
| className     | string                           | none                          | Extra class on the line                          |
| theme         | object                           | none                          | Design-system token overrides                    |
| mode          | "light" \| "dark"                | none                          | Forces the theme mode                            |
| fontFamily    | string                           | system stack                  | Face label or loaded CSS family                  |

## Rebuild it

1. Split the text on spaces and measure each word with canvas measureText at the
   final size and weight.
2. Compute a centered layout for every prefix of the word list, so each
   intermediate line has exact slot centers.
3. Fade the first word up over 10 frames with blur 3.5 px to 0 and scale 0.992
   to 1, plus a 6 px cross-axis drift.
4. Enter each later word over 13 frames from 88 px right with the same fade,
   blur, and scale settle.
5. During each entry, interpolate every placed word from its old slot center to
   its new one on the same 13-frame clock.
6. Pulse placed words through 0.8 px blur at the midpoint of each reflow.
7. Hold the finished line centered for the remaining frames.

## Pitfalls

- Reflowing words to estimated instead of measured slot centers makes the line
  drift off-center as it grows.
- Animating font-size or re-laying-out each frame reflows the line and breaks
  the slot math; move words with transforms only.
- A stronger entry scale reads as a pop rather than a push; keep it within a
  percent of 1.
- On the y axis the first word drops from 14 px above, not 6 px sideways;
  swapping the drift axis looks wrong.
