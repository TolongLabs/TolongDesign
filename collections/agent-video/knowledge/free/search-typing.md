---
slug: search-typing
title: Search Typing
tier: free
category: ai-input
evidence: source+film
demo: 960x540 at 60 fps, 420 frames (7.0 s)
length_30fps: 210
palette: light #F4F4F4, dark none, accent none
used_in: none
---

# Search Typing

> A search field wider than the shot types a query, pages across, then lands
> whole.

## What it shows

A long search field sits parked with a blinking caret. On the first keystroke it
dollies forward 1.25x and the sentence types across its left half. When the
caret nears the frame edge the field slides to its right half and typing
continues. The finished line holds at the front, then the field recedes past its
start until the whole field and sentence sit in frame together.

## Timeline

| Phase | Frames (30 fps) | What moves    | Curve                                                                                         |
| ----- | --------------- | ------------- | --------------------------------------------------------------------------------------------- |
| 1     | 0-15            | Parked hold   | Caret blinks, field still; Hold (observed)                                                    |
| 2     | 15-39           | Dolly forward | Scale rest to 1.25x about the baseline; Easing.inOut sine (source)                            |
| 3     | 15-150          | Typing        | Characters land on a seeded schedule; Base interval with word and punctuation pauses (source) |
| 4     | 90-105          | Page across   | Field slides left-cap to right-cap anchor; Easing.inOut cubic (source)                        |
| 5     | 150-177         | Hold at front | Finished line still; Hold (source)                                                            |
| 6     | 177-213         | Recede        | Scale forward to whole-field fit; Easing.inOut cubic (source)                                 |

## Techniques

- `Typewriter`: per-character schedule with 0.35 humanize jitter, 1.55x word
  pauses, 2.2x punctuation pauses (source)
- `Caret`: 1 Hz square wave with eased edges, sized 0.024 by 0.434 of field
  height (source)
- `Camera`: baseline-pivoted dolly, anchored pan, retreat past the start to a
  whole-field fit (source)
- `Composer`: search field with icon, measured insets, sentence laid out once
  and revealed by clip (source)

## Props to expose

| Prop                 | Type                      | Default       | Purpose                                 |
| -------------------- | ------------------------- | ------------- | --------------------------------------- |
| text                 | string                    | none          | Sentence typed into the field           |
| charsPerSecond       | number                    | 14            | Base typing rate                        |
| humanize             | number                    | 0.35          | Keystroke jitter 0 to 1, seeded         |
| wordPause            | number                    | 1.55          | Beat after a space, in intervals        |
| punctuationPause     | number                    | 2.2           | Beat after punctuation, in intervals    |
| startDelay           | number                    | 0.5           | Parked seconds before typing            |
| dollyDuration        | number                    | 0.8           | Seconds coming forward                  |
| panDuration          | number                    | 0.5           | Seconds sliding to the right half       |
| holdAfter            | number                    | 0.9           | Seconds holding the finished line       |
| recedeDuration       | number                    | 1.2           | Seconds going back                      |
| dolly                | number                    | 1.25          | Forward scale factor                    |
| fieldHeight          | number                    | 0.27          | Field height as a share of frame        |
| frontVisible         | number                    | 0.56          | Share of the field in frame at front    |
| edgeInset            | number                    | 40            | Margin between field cap and frame edge |
| caretBlinksPerSecond | number                    | 1             | Caret rate                              |
| caret                | boolean                   | true          | Show the caret                          |
| surface              | shadcn \| glass           | shadcn        | Field finish                            |
| mode                 | light \| dark             | light         | Colour mode                             |
| icon                 | search \| sparkle \| none | search        | Leading glyph                           |
| fontWeight           | number                    | 300           | Type weight                             |
| seed                 | string                    | search-typing | Seed for the jitter                     |
| fontFamily           | string                    | none          | Face override                           |
| speed                | number                    | 1             | Playback multiplier                     |
| className            | string                    | none          | Extra class on the field                |

## Rebuild it

1. Lay out the full sentence once and reveal it by clipping to measured
   advances.
2. Pivot the camera scale on the measured text baseline, never the box middle.
3. Build the typing schedule from rate, pauses, and seeded jitter.
4. Dolly forward on the first keystroke while typing runs.
5. Pan when the caret passes 88 percent of the page width.
6. Hold the finished line, then recede to a whole-field fit.
7. Measure advances and baseline only after the real face loads.

## Pitfalls

- Pivoting scale on the box centre climbs the pixel grid in whole-pixel jumps.
- Measuring against a fallback face moves every advance and the baseline.
- Firing the pan at the frame edge lets the caret spill off before the field
  catches up.
- A hard-edged caret blink strobes at 60 fps; the source eases only the edges.
