---
slug: glow-map
title: Glow Map
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #FCFCFC, dark none, accent none
used_in: none
---

# Glow Map

> A dotted world map that fades in while glowing location markers pop across it.

## What it shows

The film opens on a blank white field. A world map made of small grey dots wipes
in from the left until every continent reads. Blue glowing markers then pop onto
cities one at a time, each firing an expanding ring that fades as the next
marker lands. New markers keep arriving across the Americas, Europe, Africa and
Asia while older rings decay. The film ends on the full map studded with steady
glowing points.

## Timeline

| Phase      | Frames (30 fps) | What moves                                                 | Curve                            |
| ---------- | --------------- | ---------------------------------------------------------- | -------------------------------- |
| Blank      | 0-1             | White field, nothing on screen                             | hold (observed)                  |
| Map wipe   | 1-12            | Dot map fades and slides in from the left                  | ease-out (inferred)              |
| Map settle | 12-25           | Continents finish resolving left to right                  | ease-out (inferred)              |
| Marker run | 25-135          | Blue markers pop with expanding rings, staggered by region | spring pop per marker (inferred) |
| Full hold  | 135-150         | Map and markers rest with faint glow                       | hold (observed)                  |

## Techniques

- `Halftone`: continents render as a field of small grey dots on white
  (observed)
- `Stage`: single paper act for the whole run (observed)
- `Reveal`: map enters with a left-to-right fade, fastest in the first second
  (observed)
- `RadialBloom`: each marker fires one or two expanding rings that fade out
  (observed)
- `Particles`: markers arrive staggered across regions, never all at once
  (inferred)

## Props to expose

| Prop        | Type                                   | Default | Purpose                                        |
| ----------- | -------------------------------------- | ------- | ---------------------------------------------- |
| locations   | { x: number, y: number, at: number }[] | []      | Marker positions and arrival frames (proposed) |
| markerColor | string                                 | #2B6CB0 | Glow point colour (proposed)                   |
| ringCount   | number                                 | 2       | Expanding rings per marker (proposed)          |
| dotColor    | string                                 | #9AA0A6 | Map dot colour (proposed)                      |
| dotPitch    | number                                 | 8       | Map grid spacing in pixels (proposed)          |

## Rebuild it

1. Paint the paper `Stage` and lay the dotted continent map off-screen left.
2. Wipe the map in left to right over frames 1 to 25.
3. Pop markers on their arrival frames with a scale spring.
4. Fire expanding `RadialBloom` rings from each new marker.
5. Stagger arrivals by region with holds between waves.
6. Rest the full studded map for the final 15 frames.

## Pitfalls

- Fading the whole map up at once loses the left-to-right wipe read.
- Firing all rings on one clock makes arrivals feel simultaneous.
- Letting rings persist instead of decaying clutters the continents.
- Tinting the map dots blue kills the contrast with the markers.
