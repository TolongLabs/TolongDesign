---
slug: reel-collage
title: Reel Collage
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 192 frames (3.2 s)
length_30fps: 96
palette: light #F0F0EC, dark #000000, accent #377CDE
used_in: none
---

# Reel Collage

> A photo reel that shuts like an eyelid between two captions, then blooms into
> a scattered collage on a peach flush.

## What it shows

Eight shots cut fast inside a centered window while the captions above and below
grow 17% with it. The window shuts to a hairline and the captions fold into one
stacked line. The copy swaps mid-split, the lines drift apart to their rests,
and six pictures bloom in around them from 0.4–0.6 scale while a peach flush
rises and clears. The landed collage holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                  | Curve                              |
| ----- | --------------- | ------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1     | 0–29            | Reel cuts through 8 shots at 0, 3, 6, 10, 14, 19, 25, 29; type and frame zoom 1 to 1.18     | sharp in-out bezier; (source)      |
| 2     | 19–38           | Reel shuts 1 to 0 like an eyelid; captions fold to the stacked pair                         | bezier(0.8703,0,0.078,1); (source) |
| 3     | 38–46           | Stacked captions hold; copy swaps on frame 46                                               | hold; (source)                     |
| 4     | 40–73           | Swapped lines split to rests; flush rises and clears; pictures fade in 50–65 and bloom to 1 | sharp in-out bezier; (source)      |
| 5     | 73–96           | Landed collage holds with a slow leftward drift settling to 0                               | ease-out; (source)                 |

## Techniques

- `Collage`: six pictures in fixed slots blooming from 0.43–0.64 scale with a
  57px leftward pan settling to 0 (source)
- `Camera`: caption zoom 1 to 1.1741 and reel zoom 1 to 1.1852 on fitted sharp
  in-out curves (source)
- `TextSwap`: caption pair hard-swaps at frame 46 while the lines are splitting
  apart (source)
- `Reveal`: reel window closes vertically on the full-size picture; collage
  fades linearly per slot with the bottom-right trailing (source)
- `Stage`: warm page with a mint glow under everything and a peach flush rising
  48–58 and gone by 73.5 (source)

## Props to expose

| Prop       | Type     | Default                    | Purpose                                     |
| ---------- | -------- | -------------------------- | ------------------------------------------- |
| topLine    | text     | The videos                 | Caption above the reel                      |
| bottomLine | text     | That you ship              | Caption below the reel                      |
| swapTop    | text     | Especially on              | First line after the swap                   |
| swapBottom | text     | Launch day                 | Second line after the swap                  |
| slides     | string[] | eight snapcn poster stills | Reel shots in cut order                     |
| collage    | string[] | six snapcn demo clips      | Collage pictures in slot order; video plays |
| background | color    | #F5F4F2                    | The page                                    |
| glowColor  | color    | #DFE7E3                    | Soft glow under the scene                   |
| flushColor | color    | #FDC7BC                    | Peach flush around the bloom                |
| textColor  | color    | theme foreground           | Caption ink                                 |
| theme      | object   | —                          | Design-token overrides                      |
| mode       | select   | —                          | light or dark type theme                    |
| fontFamily | text     | Inter stack                | Caption face                                |
| speed      | number   | 1                          | Timeline rate multiplier                    |

## Rebuild it

1. Paint the page, mint glow and caption pair at 19.22px with −0.068em tracking
   on a 712 reference grid.
2. Cut the reel window through its 8 shots on frames 0–29, each with its own
   aspect and center offset, zooming type and frame together.
3. Shut the window to a hairline over frames 19–37 while folding the captions
   into the stacked pair.
4. Swap the copy on frame 46 and split the lines to rests (−71,−94.6) and
   (41,104.6), lower line first.
5. Fade the six pictures in over frames 50–65, bloom each from its slot scale to
   1, and pan the drift 57px to 0.
6. Raise the peach flush with the bloom and clear it by frame 73.5, then hold
   the landed collage to 96.

## Pitfalls

- Ignoring the per-shot aspect and center offsets puts cuts up to 2px off the
  measured framing.
- Fading the reel picture with its window instead of closing the window over a
  full-size picture softens the shut.
- Swapping the copy before the fold completes collides the old lines with the
  new ones mid-split.
- A clip that ends while its box is up goes blank; use clips at least as long as
  their slot is visible.
