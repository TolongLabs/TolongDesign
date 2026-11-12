---
slug: mark-grid
title: Mark Grid
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 490 frames (8.17 s)
length_30fps: 245
palette: light #F8F8F4, dark none, accent #51BB76
used_in: none
---

# Mark Grid

> A typed line that lifts away into a tile wall gathered around the mark.

## What it shows

The last scene wipes away into a soft blurred wash. A line types itself in word
by word around the mark: "every scene in one registry". The words lift off, and
a staggered wall of tiles opens around the mark as the camera eases in. A dozen
app icons fade into the wall, then three name pills rise beside their tiles, and
the finished grid holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                | Curve                      |
| ----- | --------------- | ------------------------------------------------------------------------- | -------------------------- |
| 1     | 0–16            | Previous scene wipes into a soft blurred wash                             | ease-out (inferred)        |
| 2     | 16–49           | Line types in word by word around the mark                                | linear per word (observed) |
| 3     | 49–65           | Words lift off, tile wall opens staggered round the mark, camera eases in | ease-out (observed)        |
| 4     | 65–150          | App icons fade into wall tiles one by one                                 | ease-out (observed)        |
| 5     | 150–245         | Name pills rise beside tiles, finished grid holds                         | hold (observed)            |

## Techniques

- `Stage`: paper background carrying a soft blurred wash at the open (observed)
- `Typewriter`: the line types itself in around the mark (observed)
- `Reveal`: finished words lift off word by word (observed)
- `Collage`: staggered tile wall opening around the centred mark (observed)
- `Camera`: slow ease-in as the wall opens (inferred)
- `IconTile`: app icons fading into wall tiles (observed)
- `Pill`: name pills rising beside their tiles (observed)

## Props to expose

| Prop     | Type     | Default | Purpose                                             |
| -------- | -------- | ------- | --------------------------------------------------- |
| sentence | string   | —       | The typed line, with a slot for the mark (proposed) |
| tiles    | number   | —       | Tile count in the wall (proposed)                   |
| icons    | string[] | —       | App icon assets fading into tiles (proposed)        |
| pills    | string[] | —       | Name pill labels rising beside tiles (proposed)     |
| pushIn   | number   | —       | Camera ease-in over the wall opening (proposed)     |

## Rebuild it

1. Wipe the outgoing scene into a soft blurred wash on a paper `Stage`.
2. `Typewriter` the sentence word by word around the centred mark.
3. `Reveal` the words off one by one.
4. Open the `Collage` tile wall in staggered order around the mark while the
   `Camera` eases in.
5. Fade `IconTile` icons into their tiles.
6. Rise `Pill` labels beside their tiles and hold the grid to frame 245.

## Pitfalls

- Opening all tiles at once reads as one picture instead of a gathered wall;
  stagger them.
- Centring the sentence without reserving the mark slot lets type collide with
  the mark.
- Pushing the camera too far breaks the wall edges into frame.
