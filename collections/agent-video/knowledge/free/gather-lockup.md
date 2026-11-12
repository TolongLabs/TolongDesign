---
slug: gather-lockup
title: Gather Lockup
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 150 frames (2.5 s)
length_30fps: 56
palette: light #F4F4F0, dark #000400, accent #A53321
used_in: none
---

# Gather Lockup

> A wall of work under a headline falls apart, cuts to a row of four, and each
> slot hands over to the mark and wordmark.

## What it shows

Seven captioned pictures sit scattered around a three-line headline. The
headline words drift apart and vanish one by one while the wall pictures cut
toward the middle. Four pictures land in a centre row, and each slot swaps its
image, shrinks, and steps aside. The mark slides in from the right as the
wordmark spells itself out letter by letter with a split tail. The finished
lockup holds centred to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                            | Curve |
| ----- | --------------- | --------------------------------------------------------------------- | ----- |
| 0–16  | 0–16            | Wall of seven tiles and five title words hold with small drifts       | hold  |
| 16–19 | 16–19           | Title words separate and vanish; tiles cut toward the centre row      | hold  |
| 19–25 | 19–25           | Four tiles gather into a centre row; outer tiles leave                | hold  |
| 25–34 | 25–34           | Row slots swap pictures, shrink, and step down one by one             | hold  |
| 31–41 | 31–41           | Mark slides in over four poses; wordmark reveals 2, 4, then 6 letters | hold  |
| 41–56 | 41–56           | Finished lockup holds still                                           | hold  |

## Techniques

- `Collage`: seven captioned tiles on measured tracks cut into a four-slot row,
  then swap and clear (source)
- `SplitText`: the five title words drift apart word by word and vanish by frame
  18 (source)
- `Lockup`: the mark steps across four poses while the wordmark reveals 2, 4,
  then 6 letters with a split tail and a 10.79 px gap (source)
- `Card`: each tile is a unit box scaled up with the picture laid in by
  fractional offsets, never snapped (source)
- Static wall and headline at frame 0, spreading words by frame 15, four-picture
  row at frame 25, partial wordmark at frame 35, full lockup from frame 40 to
  the end (observed)

## Props to expose

| Prop             | Type                      | Default                                      | Purpose                                                               |
| ---------------- | ------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| lines            | string[][]                | [["Ship"], ["your", "demo"], ["in", "code"]] | Title words in reading order                                          |
| images           | string[]                  | 15 showcase URLs                             | Pictures 0 to 6 for the wall, 7 to 10 for the row, 11 to 14 for swaps |
| captions         | string[]                  | 7 caption strings                            | Caption under each wall tile                                          |
| wordmark         | string                    | snapcn                                       | Wordmark the row turns into                                           |
| logo             | { width, height, shapes } | snapcn mark paths                            | Mark drawn as SVG paths                                               |
| font             | string                    | Inter Tight                                  | Face for title, captions and wordmark                                 |
| wordmarkColor    | string                    | theme foreground                             | Wordmark colour                                                       |
| wordmarkTracking | number                    | -0.03                                        | Wordmark letter spacing in em                                         |
| backdrop         | string                    | theme background                             | Page colour under everything                                          |
| speed            | number                    | 1                                            | Time multiplier                                                       |
| theme            | Partial<SnapCnTheme>      | —                                            | Design-system token overrides                                         |
| mode             | light \| dark             | —                                            | Theme selector                                                        |

## Rebuild it

1. Build the 1920 by 1080 stage and drive it with a seconds clock at 24 fps,
   clamping at frame 44.
2. Pose seven tiles and five title words from per-frame key tables; cut between
   poses, never ease.
3. Vanish each title word at its last frame while drifting its keyed x and size.
4. Cut the surviving tiles into a four-slot centre row, swap each picture on its
   key, then shrink slots away.
5. Slide the mark through its four x keys and reveal the wordmark 2, 4, then 6
   letters with the tail split.
6. Nudge the lockup left by 0.28 wordmark sizes per letter past six.
7. Hold the finished lockup to the end of the run.

## Pitfalls

- Easing between poses destroys the print-like held states; the source only
  cuts.
- Sizing tiles with left, top, width and height snaps them to device pixels;
  scale a large unit box instead.
- Revealing all six wordmark letters at once skips the measured 2, 4, 6 beat.
