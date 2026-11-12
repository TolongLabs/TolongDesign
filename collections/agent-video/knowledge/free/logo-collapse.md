---
slug: logo-collapse
title: Logo Collapse
tier: free
category: logos
evidence: source+film
demo: 960x540 at 60 fps, 104 frames (1.73 s)
length_30fps: 52
palette: light #F4F4F0, dark #000000, accent #344F7D
used_in: none
---

# Logo Collapse

> A stack of photo cards flicks through shrinking sizes and collapses into a
> logo lockup. Use it as a fast intro sting when the footage itself should say
> the brand.

## What it shows

Six photo cards cut one after another at the frame centre, each smaller and each
held for fewer frames than the last. The run winds up instead of ticking evenly.
The last card cuts to a faint 60 px tile carrying the mark, the tile drops away
after two frames, and the mark lands oversized and settles in three steps. The
mark steps aside twice, the wordmark appears whole beside it, and two small
accent squares ping above and below the lockup before the finished sting holds.

## Timeline

| Phase                 | Frames (30 fps) | What moves                                                                                             | Curve                                 |
| --------------------- | --------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| Card run              | 0–22            | Six cards cut at sizes 0.82 down to 0.36 of frame height, held 1, 5, 5, 4, 2, 5 frames; nothing tweens | hard cuts, holds as listed (source)   |
| Tile beat             | 22–24           | Plain 60 px tile with the mark cuts in and holds two frames                                            | hard cut (source)                     |
| Mark lands            | 22–26           | Mark box lands at 32 px, then 25, 24, 24 before resting at 22 px                                       | stepped, one size per frame (source)  |
| Mark steps aside      | 28–30           | Centre moves 294 to 281.5 at 28, then to the lockup at 30                                              | stepped holds, no ease (source)       |
| Wordmark and brackets | 30–47           | Wordmark appears whole at 30; accent squares land at 7 px at 37 and 42, settling to 4 px over 5 frames | stepped, squares ease over 5 (source) |
| Hold                  | 47–52           | Finished lockup rests                                                                                  | hold (observed)                       |

## Techniques

- `Collage`: six shots cut through one centred slot, sizes given as parallel
  lists, never one ratio or formula (source)
- `Lockup`: mark lands with overshoot to 32 px against a 22 px rest, steps aside
  in two, wordmark set in Inter Tight at −0.073em tracking (source)
- `Reveal`: nothing cross-fades; every change between shots is a hard cut, and
  the box is constant to the pixel across each hold (source)
- `Card`: the 60 px tile beat bridges the photo run and the bare mark for
  exactly 2 frames (source)
- `Pill`: not used; the two bracket marks are plain accent squares fading to
  0.34 opacity (source)

## Props to expose

| Prop       | Type                 | Default                     | Purpose                                            |
| ---------- | -------------------- | --------------------------- | -------------------------------------------------- |
| images     | string               | 6 poster urls, \| separated | Shots cut through in order; split on \|, not comma |
| sizes      | string               | 0.82x0.461,…,0.36x0.203     | Each card as share of frame height, w or wxh       |
| holds      | string               | 1,5,5,4,2,5                 | Frames each shot is held                           |
| mark       | string               | /logo/snapcn.png            | Mark the stack collapses into                      |
| wordmark   | string               | snapcn                      | Word landing beside the mark                       |
| background | string               | ""                          | Optional plate behind everything                   |
| accent     | string               | theme primary               | Colour of the two bracket marks                    |
| theme      | Partial<SnapCnTheme> | —                           | Design-token overrides                             |
| mode       | "light" \| "dark"    | "light"                     | Page the sting sits on                             |
| fontFamily | string               | Default                     | Face for the wordmark                              |

## Rebuild it

1. Hold one centred card per shot at the listed sizes and holds, cutting between
   them with no tween or fade.
2. At frame 22 cut to the 60 px tile with the mark for exactly 2 frames, then
   drop the tile.
3. Land the mark at 32 px and step it 25, 24, 24, 22 on consecutive frames.
4. Step the mark centre aside at 28 and again at 30, and place the whole
   wordmark at 30 with −0.073em tracking.
5. Ping the two accent squares at 37 and 42, each landing at 7 px and settling
   to 4 px over 5 frames while fading toward 0.34.
6. Hold the finished lockup to frame 52.

## Pitfalls

- Easing card sizes between beats turns the dealt-prints read into a zoom; the
  cuts must be hard.
- Deriving sizes from one ratio misses the reference run, which is not geometric
  in either series.
- Skipping the two-frame tile beat makes the collapse read as a shrinking card
  rather than prints resolving into a logo.
- Splitting the images list on commas breaks data: urls, which carry their own
  comma.
