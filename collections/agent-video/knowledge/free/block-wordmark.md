---
slug: block-wordmark
title: Block Wordmark
tier: free
category: logos
evidence: source+film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #F4F4F0, dark none, accent #0000F9
used_in: none
---

# Block Wordmark

> A square scales in, shuffles a coloured deck, splits into letter blocks, and
> swaps to type. Use it for a playful logo sting.

## What it shows

A rounded square scales up on the baseline. Coloured cards fan out from behind
it in a full shuffled turn and wind back in. The deck dips once, then the square
stretches into one block per letter, outermost first, while an ascender tab
grows. The block row holds, then each block flashes its colour and hard-cuts to
its letter, the first letter resolving last. The finished wordmark holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                 | Curve                            |
| ----- | --------------- | ------------------------------------------------------------------------------------------ | -------------------------------- |
| 1     | 0–9             | Lead square scales in on the baseline                                                      | ease-out cubic (source)          |
| 2     | 2–38            | Five deck cards turn a full 360 degrees each, staggered 2 frames, on an aggressive S-curve | bezier 0.76, 0, 0.24, 1 (source) |
| 3     | 29–38           | Shared lift falls back to the baseline                                                     | accelerating ease-in (source)    |
| 4     | 36–39           | One frame of anticipation dip, then the split starts at frame 40                           | linear dip table (source)        |
| 5     | 40–45           | Blocks travel outside-in to their slots over 5 frames each                                 | ease-out cubic (source)          |
| 6     | 42–54           | Ascender tabs grow in height only                                                          | ease-out cubic (source)          |
| 7     | 46–93           | Finished block row holds                                                                   | hold (observed)                  |
| 8     | 94–118          | Blocks flash 3 frames each on an irregular stagger and hard-cut to letters 5 frames later  | linear schedule (source)         |
| 9     | 118–150         | Finished wordmark holds                                                                    | hold (observed)                  |

## Techniques

- `Reveal`: lead square scales in over 9 frames about a baseline pivot (source)
- `Collage`: five-card deck fans a full turn each from behind the lead square
  and compresses back by frame 38 (source)
- `Camera`: shared lift at 0.665 of side on an overdamped spring, falling back
  over frames 29 to 38 (source)
- `SplitText`: square splits into one block per letter, outer pair leading, 1
  frame apart (source)
- `OutlineType`: ascender tabs measured per glyph from canvas ink grow over 12
  frames (source)
- `Highlight`: each block flashes its deck colour for 3 frames, then returns to
  ink before the swap (source)

## Props to expose

| Prop              | Type                 | Default          | Purpose                                                  |
| ----------------- | -------------------- | ---------------- | -------------------------------------------------------- |
| text              | string               | "base"           | Word to build; spaces get no block                       |
| fontSize          | number               | 160              | Size the finished wordmark is set at, in px              |
| fontFamily        | string               | Ultra            | Face; single weight 400 only                             |
| fontWeight        | number \| string     | 400              | Weight; only 400 is offered                              |
| color             | string               | "#0000FF"        | Wordmark ink                                             |
| colors            | string[] \| string   | five blue shades | Deck and flash colours in order                          |
| background        | string               | "#FAF9F6"        | Stage behind the build                                   |
| blockGap          | number               | 0.093            | Gap between blocks as a share of side                    |
| cornerRadius      | number               | 0.18             | Block corner radius as a share of side                   |
| ascenderRatio     | number               | measured         | Tab height as a share of side; omit to measure per glyph |
| ascenderStemRatio | number               | measured         | Tab width; omit to measure per glyph                     |
| blockSizing       | string               | "square"         | Square blocks or per-glyph advance widths                |
| maxWidth          | number               | 0.92             | Share of frame width the row may occupy                  |
| cards             | number               | 6                | Cards in the deck including the lead                     |
| cardStagger       | number               | 2                | Frames between one card turn starting and the next       |
| spinTurns         | number               | 1                | Full turns the deck makes                                |
| liftRatio         | number               | 0.665            | Deck lift as a share of side                             |
| growDuration      | number               | 9                | Frames the first square takes to scale in                |
| spinDuration      | number               | 33               | Frames the deck turn lasts                               |
| splitDuration     | number               | 5                | Frames a block takes to travel to its slot               |
| splitStagger      | number               | 1                | Frames inner blocks lag outer ones by                    |
| ascenderDuration  | number               | 12               | Frames an ascender tab takes to grow                     |
| holdDuration      | number               | 54               | Frames the block row holds before resolving              |
| flashStagger      | number               | 4                | Frames between letter flashes; first gap is half         |
| flashDuration     | number               | 3                | Frames a block stays lit                                 |
| flashToSwap       | number               | 5                | Frames from lighting up to letter replacement            |
| speed             | number               | 1                | Time multiplier                                          |
| theme             | Partial<SnapCnTheme> | theme            | Design-system token overrides                            |
| mode              | string               | theme mode       | Light or dark                                            |

## Rebuild it

1. Measure advance widths in the DOM and ink metrics on a canvas behind a render
   hold; side equals x-height.
2. Scale the lead square in over 9 frames about a pivot on the baseline.
3. Turn each deck card 360 degrees on the S-curve with 2-frame stagger about a
   shared bottom-centre pivot, compressing trailing turns to end by frame 38.
4. Fall the shared lift back over frames 29 to 38, dip one frame, and split
   blocks outside-in over 5 frames each.
5. Grow measured ascender tabs in height only over 12 frames from frame 42.
6. Hold the row 54 frames, then flash blocks second letter first and first
   letter last on the irregular stagger.
7. Hard-cut each block to its letter 5 frames after its flash, at final
   position, size and ink.
8. Hold the finished wordmark to frame 150.

## Pitfalls

- Softening the deck turn to a moderate ease; the whip through the middle third
  is the read of the beat.
- Crossfading or morphing blocks into letters; the swap is a hard cut, and any
  blend breaks it.
- Listing ascender letters by hand; measure ink above x-height so any script
  works.
- Sizing blocks off a fallback face; wait on the font load before measuring.
- Animating font size instead of scale, or skipping geometric precision; the
  letterforms boil.
