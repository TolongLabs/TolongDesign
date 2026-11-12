---
slug: text-rewrite
title: Text Rewrite
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 204 frames (3.4 s)
length_30fps: 102
palette: light #F4F4F0, dark none, accent #5786E0
used_in: none
---

# Text Rewrite

> A line writes itself, jumps toward the viewer, gets selected, loses its
> opening, and types a new ending.

## What it shows

A small mark appears first on a pale frame, then "Or just add snapcn" writes
itself one word at a time with each new word arriving blue and cooling to ink.
The line jumps larger in a single frame and a selection band drags across it. A
clip edge sweeps left to right, cutting letters in half as it eats the opening
words while the mark rides the edge. The survivor "snapcn" slides to its new
center as "registry" types on beside it. The selection drops and the finished
line "snapcn registry" holds with the mark.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                             | Curve                                   |
| ----- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 1     | 4–7             | Mark appears ahead of the first word                                                                                                   | hold then fade (source)                 |
| 2     | 7–24            | Four words land one at a time, each fading up over about 3 frames and holding the accent about 6 frames before cooling over the next 6 | cubic out (source)                      |
| 3     | 31              | Line jumps forward 2.41x in a single frame while the selection drag starts                                                             | hard cut (source)                       |
| 4     | 31–37           | Selection band drags across the line over 6 frames with a sheen across it                                                              | cubic out (source)                      |
| 5     | 44–59           | Erase edge sweeps the opening words away over about 16 frames, halving letters as it passes, with the mark riding the edge             | cubic-bezier(0.42, 0, 0.19, 1) (source) |
| 6     | 60–76           | Surviving words slide to their new center while the new ending types on over about 16 frames                                           | cubic out (source)                      |
| 7     | 86–90           | Selection drops over about 5 frames                                                                                                    | linear (source)                         |
| 8     | 90–102          | Finished line holds with the mark                                                                                                      | hold (observed)                         |

## Techniques

- `SplitText`: words land one at a time on a 6-frame stagger, each arriving in
  the accent and cooling to ink (source)
- `Camera`: the line jumps 2.41x toward the viewer in a single frame at frame 31
  (source)
- `Highlight`: a selection band with a 12-stop sheen drags across the full line,
  then sweeps back off to drop it (source)
- `Reveal`: a clip edge erases the opening words left to right, cutting glyphs
  mid-letter as it passes (source)
- `custom:` edge-mark: the mark trails the line and rides the erase edge
  throughout the sweep (source)

## Props to expose

| Prop             | Type              | Default              | Purpose                                                 |
| ---------------- | ----------------- | -------------------- | ------------------------------------------------------- |
| headline         | string            | "Or just add snapcn" | The line that writes itself                             |
| keep             | number            | 1                    | Words off the end that survive the erase                |
| append           | string            | "registry"           | Text written onto the survivors                         |
| markAt           | seconds           | 0.117                | When the mark appears                                   |
| wordAt           | seconds           | 0.217                | When the first word lands                               |
| wordStagger      | seconds           | 0.189                | Gap between words, and how long a word holds the accent |
| wordDuration     | seconds           | 0.085                | How long a word takes to open                           |
| coolDelay        | seconds           | 0.189                | How long a word holds the accent                        |
| coolDuration     | seconds           | 0.189                | How long the accent takes to cool                       |
| cutAt            | seconds           | 1.033                | When the line comes forward                             |
| zoomDuration     | seconds           | 0                    | Forward move length; 0 is a single-frame cut            |
| zoom             | number            | 2.41                 | How far forward it goes                                 |
| dragAt           | seconds           | 1.033                | When the selection drag starts                          |
| dragDuration     | seconds           | 0.2                  | How long the drag takes                                 |
| eraseAt          | seconds           | 1.45                 | When the erase starts eating from the left              |
| eraseDuration    | seconds           | 0.517                | How long the erase takes                                |
| rewriteAt        | seconds           | 2.0                  | When the new ending starts typing on                    |
| rewriteDuration  | seconds           | 0.533                | How long the rewrite takes                              |
| deselectAt       | seconds           | 2.85                 | When the selection drops                                |
| deselectDuration | seconds           | 0.15                 | How long the drop takes                                 |
| fontSize         | number            | 20                   | Type size before the forward move                       |
| fontWeight       | number            | 500                  | Weight                                                  |
| centerY          | number            | 0.4902               | Line position down the frame as a share                 |
| selectionOpacity | number            | 0.21                 | Base strength of the selection                          |
| selectionAngle   | number            | 90                   | Sheen angle in degrees                                  |
| markSize         | number            | 1.15                 | Mark height in em; 0 removes the mark                   |
| glow             | boolean           | true                 | Soft wash behind the line                               |
| glowOpacity      | number            | 0.075                | Wash strength                                           |
| accentColor      | color             | #3072DB              | Arrival accent                                          |
| mode             | "light" \| "dark" | "light"              | Forced theme mode                                       |
| fontFamily       | string            | theme face           | Face label or loaded CSS family                         |

## Rebuild it

1. Fade the mark in just before the first word, and words up one at a time with
   the accent cooling to ink behind each.
2. Cut the whole line 2.41x larger in one frame while starting the selection
   drag across it.
3. Sweep a hard clip edge left to right over the opening words so glyphs halve
   as it passes, and ride the mark on that edge.
4. Slide the surviving words to their new center while typing the appended
   ending beside them.
5. Drop the selection over 5 frames and hold the finished line with the mark.
6. Keep a faint wash behind the line and a 12-stop sheen across the selection
   band.

## Pitfalls

- Easing the forward move over frames instead of cutting in one frame turns the
  snap into a mushy zoom.
- Fading erased words out instead of clipping them mid-glyph loses the hard
  editorial edge; letters must halve.
- Letting the selection band end exactly at the type edge looks clipped; pad it
  past the type on the open ends.
- Rebuilding the line layout mid-erase shifts the survivors; lay the line out
  once and move it with transforms.
