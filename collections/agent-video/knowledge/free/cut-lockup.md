---
slug: cut-lockup
title: Cut Lockup
tier: free
category: scenes
evidence: source
demo: none
length_30fps: 108
palette: light #F8F8F8, dark #242424, accent none
used_in: none
---

# Cut Lockup

> A logo landing huge on grid paper, stepping down in hard cuts, drawing itself
> in night, and settling under a paper wipe. Use it for a sharp logo sting with
> no tweens between shots.

## What it shows

The mark lands huge on grid paper and steps down in three hard cuts, each
smaller and more centred, until it rests. It pushes in slightly, then cuts to
night where its construction lines draw left to right with an anchor dot on
every joint. A paper panel wipes up from the bottom onto the resting lockup with
mark and wordmark.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                        | Curve                                 |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 1     | 0–8             | Logo holds huge at 9.53× resting width, drifting slowly                                                                           | linear drift; (source)                |
| 2     | 8–28            | Two hard cuts: 4.61× at frame 8, 3.01× at frame 18                                                                                | hard cut; (source)                    |
| 3     | 28–43           | Logo rests at 1×, then pushes to 1.07× over frames 36 to 42                                                                       | measured accelerating table; (source) |
| 4     | 43–91           | Cut to night at 1.15×; construction strokes draw left to right, 7 frames per shape over a 22-frame spread, dots landing per joint | linear draw; (source)                 |
| 5     | 91–102          | Paper panel wipes up from the frame bottom onto the 1.19× resting lockup                                                          | measured 12-frame table; (source)     |
| 6     | 102–108         | Resting lockup holds on paper                                                                                                     | hold; (inferred)                      |

## Techniques

- `Lockup`: mark plus wordmark as outlines, stepping 9.53, 4.61, 3.01 to 1 with
  slight off-centres, resting at 0.2335 of frame width (source)
- `Grid`: hairline grid on the paper's left 200 px at 22 px pitch, masked out to
  the right (source)
- `LineDraw`: each subpath draws by dash offset over 7 frames, staggered left to
  right by anchor position over 22 frames, with a dot on every anchor (source)
- `Reveal`: paper panel wipes up by clip inset over 12 measured frames onto the
  resting lockup (source)
- `Camera`: accelerating push 1 to 1.07× before the night cut (source)
- `custom: PrintGrain`: fractal-noise displacement at 0.35 strength roughens the
  printed logo edges (source)

## Props to expose

| Prop       | Type                     | Default                | Purpose                                             |
| ---------- | ------------------------ | ---------------------- | --------------------------------------------------- |
| logo       | LogoArt                  | snapcn mark + wordmark | Logo as SVG path shapes                             |
| size       | number                   | 0.2335                 | Resting logo width as a fraction of frame width     |
| ink        | string                   | "#1f1f1f"              | Logo ink on paper                                   |
| paper      | [string, string, string] | light gradient trio    | Paper: left edge, middle, right edge                |
| grid       | { color, pitch, width }  | 22 px pitch lines      | Grid-paper lines on the paper's left                |
| roughness  | number                   | 0.35                   | Printed edge roughness in ref px; 0 is clean vector |
| steps      | CutStep[]                | 4 cuts at 0, 8, 18, 28 | Hard-cut scales with centre offsets and drift       |
| push       | [number, number][]       | frames 36–42 table     | Push-in scale multiplier before the night cut       |
| night      | string                   | "#242424"              | Night backdrop                                      |
| line       | string                   | white at 0.11          | Construction stroke ink                             |
| dot        | string                   | white at 0.22          | Anchor dot ink                                      |
| nightAt    | number                   | 43                     | Frame the cut to night lands on                     |
| nightScale | number                   | 1.154                  | Logo scale on night                                 |
| drawFrames | number                   | 7                      | Frames each shape takes to draw                     |
| drawSpread | number                   | 22                     | Left-to-right stagger across the logo, in frames    |
| wipe       | [number, number][]       | frames 91–102 table    | Paper wipe top edge as a fraction of height         |
| endPaper   | string                   | "#f8f8f8"              | Paper after the wipe                                |
| endScale   | number                   | 1.1894                 | Logo scale on the resting lockup                    |
| speed      | number                   | 1                      | Time multiplier                                     |

## Rebuild it

1. Set the `Lockup` huge on `Grid` paper and step it down in three hard cuts to
   1×.
2. Drift each held cut slightly; nothing eases between cuts.
3. Accelerate a `Camera` push to 1.07× over the last 6 frames before night.
4. Hard-cut to night at 1.15× and `LineDraw` every subpath left to right with
   anchor dots.
5. `Reveal` the end paper upward by clip inset over 12 frames onto the 1.19×
   lockup.
6. Hold the resting lockup to the end of the 108 frames.

## Pitfalls

- Cross-fading or tweening between the paper scales; every change of size is a
  hard cut.
- Drawing all construction lines at once; each shape takes 7 frames, spread left
  to right over 22.
- Wiping the paper at constant speed; the top edge follows the measured 12-frame
  table.
- Scaling the logo about the frame centre on the first cut; the huge opening cut
  sits off-centre.
- Skipping the edge roughness; clean vector edges read digital against the
  printed-paper look.
