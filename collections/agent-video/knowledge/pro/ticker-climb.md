---
slug: ticker-climb
title: Ticker Climb
tier: pro
category: charts
evidence: film
demo: 960x540 at 60 fps, 154 frames (2.57 s)
length_30fps: 77
palette: light #FCFCFC, dark #0C0C18, accent #156F39
used_in: none
---

# Ticker Climb

> A claim over a climbing line, then a live ticker proving it with a count and a
> trade marker.

## What it shows

"from the demos they ship" holds above a green line that pushes and settles
while the camera shares the move. The film cuts hard to a dark ticker: a symbol
card counting from 12,212 upward, a green dot riding the line tip, a "Now 12.xk"
rule tracking it, and a small "text-reveal" card that drops where a trade lands
and cools from accent to bone. The line keeps climbing under the count until the
end.

## Timeline

| Phase        | Frames (30 fps) | What moves                                                                                    | Curve                                                |
| ------------ | --------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Claim        | 0-20            | Headline settles out of a push while the line climbs under it                                 | ease-out settle, line draws left to right (observed) |
| Whip out     | 20-31           | Line and type whip with the shared camera exit                                                | ease-in accelerating (inferred)                      |
| Ticker       | 31-46           | Hard cut to symbol card, dot, and "Now" rule; count climbs 12,212 to about 12,340             | linear count (observed)                              |
| Trade marker | 46-72           | Marker card lands on the curve, accent cools, camera slides it out while count reaches 12,500 | marker ease-out, count linear (observed)             |

## Techniques

- `Stage`: dark field for both halves, headline ink above the line (observed)
- `Camera`: one push shared by line and headline at two depths, then a shared
  whip out (inferred)
- `LineDraw`: green stroke drawing left to right with a soft fill decaying below
  it (observed)
- `CountUp`: symbol card integer with comma grouping and 24h percent under it
  (observed)
- `Card`: small trade card pinned to a fixed world point on the curve (observed)
- `Pill`: "Now 12.xk" rule label tracking the leading dot (observed)

## Props to expose

| Prop       | Type   | Default                    | Purpose                                   |
| ---------- | ------ | -------------------------- | ----------------------------------------- |
| claim      | string | "from the demos they ship" | Opening headline (proposed)               |
| symbol     | string | "12,212"                   | Card start value for the count (proposed) |
| endValue   | number | 12500                      | Card end value (proposed)                 |
| tradeLabel | string | "text-reveal"              | Marker card copy (proposed)               |
| accent     | string | "#156F39"                  | Line, dot, and marker green (proposed)    |

## Rebuild it

1. Set a dark `Stage` with the claim and a `LineDraw` under it.
2. Settle the headline at 0.42 of the shared `Camera` push.
3. Whip line and type out together, then hard-cut to the ticker.
4. Start the `CountUp` card with the dot on the line tip and the `Pill` rule
   beside it.
5. Drop the trade `Card` on its world point, cool it accent to bone over 12
   frames.
6. Keep the count and line climbing to the end frame.

## Pitfalls

- Softening the join with a fade turns a hard proof cut into a dissolve.
- Anchoring the green fill to the frame instead of the stroke doubles its depth
  at the bottom.
- Moving the marker with the line tip confuses it with the live dot.
