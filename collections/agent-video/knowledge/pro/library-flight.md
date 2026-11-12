---
slug: library-flight
title: Library Flight
tier: pro
category: scenes
evidence: film
demo: 1280x720 at 30 fps, 130 frames (4.33 s)
length_30fps: 130
palette: light #F4F8F8, dark #000000, accent #3B7FE2
used_in: none
---

# Library Flight

> A title, a fly-through of the component library, and the line it adds up to.

## What it shows

"snapcn Pro" lockup rises on black. A cluster of screens flies at the camera and
opens into a wall of component cards on a light page. The wall drifts while the
camera creeps across it. The wall whips aside and the page cuts to black, where
"One" builds to "One subscription.", then cuts to "Endless" building to "Endless
videos.". The film ends on the closed line.

## Timeline

| Phase | Frames (30 fps) | What moves                                          | Curve    |
| ----- | --------------- | --------------------------------------------------- | -------- |
| 1     | 0–9             | Lockup rises on black; screen cluster gathers       | ease-out |
| 2     | 9–18            | Cluster flies at the camera and opens into the wall | ease-out |
| 3     | 19–66           | Wall of 32 screens drifts; camera creeps forward    | linear   |
| 4     | 67–70           | Wall whips aside into a hard cut to black           | whip     |
| 5     | 70–95           | "One" builds to "One subscription." word by word    | linear   |
| 6     | 95–104          | Hard cut; "Endless" lands                           | hold     |
| 7     | 104–130         | "Endless" builds to "Endless videos." and holds     | linear   |

## Techniques

- `Lockup`: mark plus "snapcn Pro" assembles on black (observed)
- `Collage`: 32 screens fly in on individual tracks and open into a wall
  (observed)
- `Camera`: slow forward creep across the wall, then a whip aside into the cut
  (observed)
- `SplitText`: each closing word lands as the first one moves over (observed)

## Props to expose

| Prop  | Type        | Default             | Purpose                                            |
| ----- | ----------- | ------------------- | -------------------------------------------------- |
| title | string      | "snapcn Pro"        | Opening lockup text (proposed)                     |
| cards | ReactNode[] | 32 screens          | Library screens filling the wall (proposed)        |
| lineA | string[]    | "One subscription." | First closing line, built word by word (proposed)  |
| lineB | string[]    | "Endless videos."   | Second closing line, built word by word (proposed) |

## Rebuild it

1. Rise the `Lockup` on a black `Stage` over frames 0–9.
2. Fly the screen cluster at the `Camera` over frames 9–18 and open it into the
   `Collage` wall.
3. Drift across the wall with a slow linear creep to frame 66.
4. `whip` the wall aside into a `hard cut` to black at frame 67–70.
5. `SplitText` "One subscription." word by word to frame 95.
6. Cut hard and build "Endless videos." to frame 130.

## Pitfalls

- Fading between the wall and the type beats kills the whip; the handover is a
  hard cut.
- Moving all cards on one transform flattens the fly-in; each card needs its own
  track.
- Animating the closing lines with a scale makes centred type shudder; move
  position only.
- Holding the wall static removes the drift that carries the middle of the film.
