---
slug: card-rail
title: Card Rail
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 216 frames (3.6 s)
length_30fps: 108
palette: light #F8FCFC, dark #000000, accent #436B9F
used_in: none
---

# Card Rail

> A rail of cards flicked sideways across a tilted 3D plane. Use it to browse a
> library of scenes without a looping carousel.

## What it shows

A title holds the top of the frame while a row of cards sits on a surface that
recedes into the frame, feet wider than heads. The rail leaves at speed and
decelerates for well over a second, coming to rest about one card further along.
It is flicked again twice more, each flick carrying the creep of the last one
with it. Cards repeat from the list when the rail runs out. The settled rail
holds for a beat at the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                             | Curve                             |
| ----- | --------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 1     | 0–66            | First flick: rail travels 323 px, peaking at 29 px per frame on frame 3, still moving at 2 px per frame a second later | measured table, clamped; (source) |
| 2     | 30–96           | Second flick starts and adds its travel on top of the first one's creep                                                | measured table, summed; (source)  |
| 3     | 60–108          | Third flick starts; rail nearly lands by frame 108 and holds                                                           | measured table, summed; (source)  |
| 4     | 0–108           | Title stays fixed; plane tilt never changes                                                                            | hold; (observed)                  |

## Techniques

- `Stage`: backdrop as a 138-degree linear gradient or a picture plate, never
  moving (source)
- `Card`: 259.2 by 323.3 px cards with 10 px corners, a 16:9 picture over title,
  small print and tag (source)
- `custom: FlickRail`: each flick runs the same measured seconds-to-share table,
  positions sum across overlapping flicks, 323 px of travel per flick (source)
- `custom: TiltPlane`: horizontal scale grows with height about a 300.6 px
  horizon under 740 px of perspective depth, type stays upright (source)

## Props to expose

| Prop       | Type                 | Default           | Purpose                                                     |
| ---------- | -------------------- | ----------------- | ----------------------------------------------------------- |
| cards      | RailCard[] \| string | 9 registry scenes | Cards in order; string form splits on `\|` and `>`          |
| heading    | string               | "Browse scenes"   | Line fixed at the top of the frame                          |
| from       | number               | 0                 | Frame the first flick starts on; negative starts mid-motion |
| flicks     | number               | 3                 | How many flicks; each carries the rail about one card along |
| every      | number               | 30                | Frames between flick starts                                 |
| offset     | number               | 0                 | Rail position before it moves, in layout px                 |
| backdrop   | string               | ""                | Two gradient stops split by `\|`, or one picture            |
| theme      | Partial<SnapCnTheme> | theme default     | Design token overrides                                      |
| mode       | "light" \| "dark"    | "light"           | Theme switch                                                |
| fontFamily | string               | "Default"         | Typeface override                                           |

## Rebuild it

1. Fix a `Stage` backdrop and a static title; neither moves for the whole shot.
2. Lay cards on a `custom: TiltPlane` 259.2 px wide with 54.2 px gaps, feet
   wider than heads, type upright.
3. At each flick start (`from + k * every`), run the measured
   `custom: FlickRail` table and sum the travels.
4. Cover the frame at its widest plus one card leaving and one arriving; repeat
   the list to the right only.
5. Let the last flick nearly land by the final frame and hold the settled rail
   for a beat.
6. Draw each card as a `Card`: picture, title, small print, tag.

```js
travelled = 0
for (let k = 0; k < flicks; k++)
  travelled += TRAVEL * read(FLICK, (frame - from - k * every) / fps)
```

## Pitfalls

- Easing a flick with a standard ease; a cubic-out arrives four times too early
  and a spring overshoots something that never overshoots.
- Advancing exactly one pitch per flick; the measured travel overshoots the
  pitch and that overshoot reads as a flick.
- Wrapping cards to the left of the start; the rail has a beginning and nothing
  is drawn before the first card.
- Tilting the type with the plane; horizontals stay horizontal and the type
  stays upright.
- Moving the title with the rail; it holds the top of the frame still.
