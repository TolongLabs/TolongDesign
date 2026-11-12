---
slug: text-select
title: Text Select
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 144 frames (2.4 s)
length_30fps: 72
palette: light #F4F4F0, dark none, accent none
used_in: none
---

# Text Select

> A line types itself word by word, pushes toward the viewer, and takes a
> shining selection.

## What it shows

"One command into your project." writes itself one word at a time on a pale
frame, each newcomer arriving blue and cooling to ink so exactly one word glows.
The finished line pushes forward to more than twice its size, pivoting on the
baseline. A selection band drags across the whole line under a traveling glint,
and the selected line holds large until the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                                                | Curve                                    |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| 1     | 2–27            | Five words land about 6 frames apart, each resolving over 4 frames from 0.475 em right with 1 px of blur, holding the accent 6 frames then cooling over 6 | 4th-power ease-out (source)              |
| 2     | 34–47           | Line pushes forward to 2.39x over about 13 frames, pivoting on the baseline                                                                               | cubic-bezier(0.2, 0.6, 0.35, 1) (source) |
| 3     | 42–50           | Selection band drags across the line over about 8 frames with a hard caret edge                                                                           | 5th-power ease-out (source)              |
| 4     | 50–72           | A white glint crosses the selection every 33 frames while the selected line holds large                                                                   | linear pass (source)                     |

## Techniques

- `SplitText`: five words land one at a time on a 6-frame stagger from 0.475 em
  right (source)
- `Reveal`: each word resolves from 1 px of blur while the accent cools to ink
  behind it (source)
- `Camera`: the line pushes to 2.39x over 13 frames on a moderate decelerate,
  pivoting on the baseline (source)
- `Highlight`: the selection drags across at 0.207 base strength with a sheen, a
  hard caret edge, and 0.063 em of pad past the type (source)
- `GlyphGlow`: a white glint with soft shoulders crosses the selection on a
  repeating clock (source)

## Props to expose

| Prop             | Type              | Default                          | Purpose                                    |
| ---------------- | ----------------- | -------------------------------- | ------------------------------------------ |
| headline         | string            | "One command into your project." | The line that writes itself                |
| wordAt           | seconds           | 0.066                            | When the first word lands                  |
| wordStagger      | seconds           | 0.208                            | Gap between words                          |
| wordDuration     | seconds           | 0.13                             | How long a word takes to resolve           |
| shiftX           | number            | 0.475                            | How far right the line arrives from, in em |
| shiftY           | number            | 0.085                            | How far down the line arrives from, in em  |
| wordBlur         | number            | 1                                | Arrival softness in px at type size        |
| coolDelay        | seconds           | 0.208                            | How long a word holds the accent           |
| coolDuration     | seconds           | 0.208                            | How long the accent takes to cool          |
| cutAt            | seconds           | 1.13                             | When the line starts coming forward        |
| zoomDuration     | seconds           | 0.42                             | How long the push takes                    |
| zoom             | number            | 2.39                             | How far forward it goes                    |
| selectAt         | seconds           | 1.4                              | When the selection drag starts             |
| selectDuration   | seconds           | 0.26                             | How long the drag takes                    |
| fontSize         | number            | 20                               | Type size before the push                  |
| fontWeight       | number            | 500                              | Weight                                     |
| centerY          | number            | 0.5116                           | Line position down the frame as a share    |
| selectionOpacity | number            | 0.207                            | Base strength of the selection             |
| selectionAngle   | number            | 90                               | Sheen angle in degrees                     |
| selectionPad     | number            | 0.063                            | Reach past the type on each end, in em     |
| shineColor       | color             | #FFFFFF                          | Glint color                                |
| shineOpacity     | number            | 0.5                              | Glint core strength                        |
| shineWidth       | number            | 0.3                              | Glint width as a share of the selection    |
| shineDuration    | seconds           | 0.62                             | How long one glint pass takes to cross     |
| shineEvery       | seconds           | 1.1                              | Gap between passes; 0 shines once          |
| glow             | boolean           | true                             | Soft wash behind the line                  |
| glowOpacity      | number            | 0.075                            | Wash strength                              |
| accentColor      | color             | #3072DB                          | Arrival accent                             |
| mode             | "light" \| "dark" | "light"                          | Forced theme mode                          |
| fontFamily       | string            | theme face                       | Face label or loaded CSS family            |

## Rebuild it

1. Land the words one at a time from 0.475 em right and 0.085 em down, each in
   the accent and cooling to ink so one word glows.
2. Push the line to 2.39x over 13 frames on a moderate decelerate, pivoting the
   scale on the baseline.
3. Drag a selection band with a hard caret edge across the line over 8 frames.
4. Send a white glint across the selection every 33 frames and hold the selected
   line large.
5. Keep a faint wash behind the line throughout.

## Pitfalls

- Pivoting the push on the line middle instead of the baseline drags the
  baseline across pixel rows and the type judders.
- A quint or expo push spends most of its frames moving less than half a pixel,
  which renders as identical frozen frames.
- Ending the selection exactly at the type edge looks clipped; pad it 0.063 em
  past on each end.
- Re-laying-out the line as it grows shifts word slots; lay it out once and move
  it with transforms.
