---
slug: word-montage
title: Word Montage
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 260 frames (4.33 s)
length_30fps: 130
palette: light #F0ECEC, dark #101010, accent #E81C2A
used_in: none
---

# Word Montage

> Seven pictures gather round a line that keeps changing its mind, then fall
> away into the sentence they were building.

## What it shows

Pictures and small squares lie on paper as flat two-tone prints. They slide into
four clusters round the center while their color develops out of the duotone.
The middle word cycles through demo, launch, and changelog as each cluster lands
its last pixels. The full wall holds, then every picture drains back through its
inks and falls toward the middle. A hard cut flips paper to night, and the
closing line writes itself word by word behind pale paper slugs.

## Timeline

| Phase    | Frames (30 fps) | What moves                                                                         | Curve               |
| -------- | --------------- | ---------------------------------------------------------------------------------- | ------------------- |
| Scatter  | 0–9             | Prints lie scattered; the first pictures slide toward their clusters               | ease-out (observed) |
| Demo     | 9–26            | "Your demo" centers; color develops from duotone; the cluster holds                | hold (observed)     |
| Cycle    | 26–59           | The middle word swaps demo to launch to changelog; the remaining clusters land     | ease-out (observed) |
| Wall     | 59–68           | The seven-picture wall rests on "Your changelog"                                   | hold (observed)     |
| Collapse | 68–88           | Pictures drain to grey wash and fall to the middle                                 | ease-in (inferred)  |
| Night    | 88–103          | act flip to black on a hard cut; the closing line writes word by word behind slugs | linear (observed)   |
| Hold     | 103–130         | "that render for you" rests on black                                               | hold (observed)     |

## Techniques

- `Stage`: paper act, then an act flip to ink on the cut (observed)
- `Collage`: seven pictures gather in four clusters round the line (observed)
- `TextSwap`: the middle word cycles demo, launch, changelog (observed)
- `custom: grade-develop`: pictures resolve from two-tone print to full color on
  one shared grade (observed)
- `MotionBlur`: directional blur on the falling pictures (inferred)
- `Typewriter`: the closing line writes word by word behind paper slugs
  (observed)

## Props to expose

| Prop          | Type     | Default                                        | Purpose                                             |
| ------------- | -------- | ---------------------------------------------- | --------------------------------------------------- |
| words         | string[] | ["Your demo", "Your launch", "Your changelog"] | Center lines the wall cycles through (proposed)     |
| images        | string[] | seven artwork URLs                             | Pictures that gather round the line (proposed)      |
| closing       | string   | "that render for you"                          | Line typed on the night beat (proposed)             |
| developFrames | number   | 12                                             | Frames for a picture to resolve to color (proposed) |
| accent        | string   | "#E81C2A"                                      | Duotone ink and closing-beat accents (proposed)     |

## Rebuild it

1. Lay the prints on a paper `Stage`; slide the first cluster in as a `Collage`.
2. Cycle the center word with `TextSwap` as each cluster lands.
3. Develop every picture through the shared grade with the custom develop.
4. Rest the full wall, then drain the pictures and fall them to the middle with
   `MotionBlur`.
5. `hard cut` to ink and `act flip` the stage.
6. `Typewriter` the closing line behind pale slugs; hold it.

## Pitfalls

- Developing pictures on separate grades; one shared grade keeps them one wall.
- Cross-dissolving the drain; pictures fall rigidly about their own centers.
- Typing the closing line without slugs; the pale rectangles ride each word.
- Cutting without flipping the act; the night beat must land on black.
