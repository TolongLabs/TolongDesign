---
slug: check-cycle
title: Check Cycle
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 272 frames (4.53 s)
length_30fps: 136
palette: light #F4F4F0, dark none, accent #5F8DD4
used_in: none
---

# Check Cycle

> A sentence that finishes itself several ways beside a ticked checkbox, then
> steps back and rests. Use it for "create anything" positioning lines.

## What it shows

"Create your own" sits right-aligned to a ticked blue checkbox while one word
rolls up out of a slot beside it: Intros, Demos, Launches, Changelogs,
Tutorials, "And more". Each roll carries the leaving and arriving words as one
strip. Nothing else moves. After the last word holds, the whole line shrinks
toward the frame centre and rests smaller.

## Timeline

| Phase | Frames (30 fps) | What moves                                                          | Curve                                    |
| ----- | --------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| 1     | 0–1             | Line, box and "Intros" rest on frame                                | hold; (observed)                         |
| 2     | 1–16            | First roll: strip travels 44.19 px through the slot                 | cubic-bezier(0.65, 0, 0.35, 1); (source) |
| 3     | 21–36           | Second roll: strip travels 42.27 px                                 | cubic-bezier(0.65, 0, 0.35, 1); (source) |
| 4     | 41–96           | Rolls 3 to 5 every 20 frames, travel alternating 44.19 and 42.27 px | cubic-bezier(0.65, 0, 0.35, 1); (source) |
| 5     | 96–111          | "And more" holds while everything sits still                        | hold; (observed)                         |
| 6     | 111–129         | Line scales to 0.8 about the frame centre                           | cubic-bezier(0.65, 0, 0.35, 1); (source) |
| 7     | 129–136         | Rested line holds small                                             | hold; (observed)                         |

## Techniques

- `TextSwap`: words roll through a hard-clipped slot as one strip, a roll every
  20 frames over 15, alternating 44.19 and 42.27 px of travel (source)
- `Checklist`: filled box with a three-point tick; the box never moves and both
  halves of the sentence align to it (source)
- `Camera`: step back to 0.8 about the frame centre over 18 frames, then a
  6-frame rest (source)
- `custom: SubPixelLine`: each line painted twice, one device pixel apart and
  cross-faded by the fraction between, so baselines move in eighths of a pixel
  (source)

## Props to expose

| Prop       | Type                 | Default              | Purpose                                         |
| ---------- | -------------------- | -------------------- | ----------------------------------------------- |
| headline   | string               | "Create your own"    | Lead-in, right-aligned to the checkbox          |
| words      | string               | "Intros, Demos, ..." | Finishing words, comma separated, in roll order |
| theme      | Partial<SnapCnTheme> | theme default        | Design token overrides                          |
| mode       | "light" \| "dark"    | "light"              | Theme switch                                    |
| fontFamily | string               | "Default"            | Typeface override                               |

## Rebuild it

1. Right-align the lead-in to the checkbox and left-align the slot word from it;
   the box never moves.
2. Start a 15-frame `TextSwap` roll every 20 frames, moving leaving and arriving
   words as one strip on the in-out cubic.
3. Alternate strip travel 44.19 and 42.27 px per roll; clip the slot hard top
   and bottom.
4. Hold the last word about 30 frames after its roll starts.
5. `Camera` the whole line to 0.8 about the frame centre over 18 frames and rest
   it.
6. Paint type with `custom: SubPixelLine` double copies so slow phases never
   stair-step.

```js
strip = 0
for (let k = 0; k < n - 1; k++)
  strip += TRAVEL[k % 2] * EASE(clamp((now - (0.0324 + k * 0.667)) / 0.5))
```

## Pitfalls

- Easing the exit and the entrance separately; the two words move as one strip
  on one curve.
- Using equal travel every roll; the strip alternates 44.19 and 42.27 px.
- Letting the browser snap baselines to whole pixels; the roll visibly jumps
  without sub-pixel painting.
- Centring the step-back anywhere but the frame centre; the pivot is the
  layout's centre point.
- Exiting the line after the step back; it settles to 0.8 and stays.
