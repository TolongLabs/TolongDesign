---
slug: cursor-track
title: Cursor Track
tier: free
category: screens
evidence: source+film
demo: 960x540 at 60 fps, 264 frames (4.4 s)
length_30fps: 132
palette: light #F4F4F4, dark none, accent none
used_in: none
---

# Cursor Track

> A synthetic cursor that walks normalized waypoints and pulses a click ring on
> arrival. Use it over any UI sim, or where the recording's real cursor never
> made it.

## What it shows

Nothing but a page at first. A small arrow fades up as it starts moving, walks
to a point and pulses an expanding ring on arrival. It crosses the frame, clicks
again, then moves off to the upper right. The page underneath never moves; only
the pointer and its rings do.

## Timeline

| Phase | Frames (30 fps) | What moves                                             | Curve                                                           |
| ----- | --------------- | ------------------------------------------------------ | --------------------------------------------------------------- |
| 1     | 0–6             | Cursor fades up over the first waypoint's own duration | out cubic; (source)                                             |
| 2     | 8–30            | Travel to the first point, click ring 30–44            | in-out cubic; ring out cubic with linear opacity fade; (source) |
| 3     | 52–72           | Travel to the second point, click ring 72–86           | in-out cubic; ring out cubic with linear opacity fade; (source) |
| 4     | 96–114          | Travel to the last point, no click                     | in-out cubic; (source)                                          |
| 5     | 114–132         | Cursor rests at the end of the path                    | hold; (observed)                                                |

## Techniques

- `Cursor`: normalized waypoints with per-leg durations, truncated fold-forward
  so an overrunning leg never averages two destinations, same-time ties broken
  by array order (source)

## Props to expose

| Prop         | Type                 | Default           | Purpose                                                                     |
| ------------ | -------------------- | ----------------- | --------------------------------------------------------------------------- |
| children     | ReactNode            | none              | Whatever the cursor moves over, rendered full-bleed underneath              |
| path         | CursorWaypoint[]     | 4-point demo path | Waypoints in any order; first places, rest travel; `click` rings on arrival |
| variant      | "arrow" \| "dot"     | "arrow"           | Hand-drawn outlined arrow, or a touch puck                                  |
| size         | number               | 3.9% of height    | Cursor height in px                                                         |
| color        | string               | theme foreground  | Cursor ink                                                                  |
| outlineColor | string               | theme background  | Rim that keeps the cursor readable over footage                             |
| ringColor    | string               | theme primary     | Click ring ink                                                              |
| clickFrames  | number               | 14                | Frames a click ring lives                                                   |
| showBefore   | boolean              | false             | Park the cursor at the first waypoint before its `at`                       |
| theme        | Partial<SnapCnTheme> | theme default     | Design token overrides                                                      |
| mode         | "light" \| "dark"    | "light"           | Theme switch; dark flips ink and rim together                               |
| speed        | number               | 1                 | Time multiplier against every `at`                                          |
| className    | string               | ""                | Wrapper class passthrough                                                   |

## Rebuild it

1. Sort waypoints by `at`; place the cursor at the first and fade it up over its
   duration.
2. Move each leg with in-out cubic toward the live pose, truncating at the next
   leg's start.
3. On arrival, grow a ring from 0.18 to 1.1 cursor heights over `clickFrames`
   with linear opacity fade.
4. Draw the arrow as vector ink over a rim with a soft shadow, hotspot at the
   tip.
5. Let overlapping rings resolve to the latest one alive, never stacked.
6. End the shot at the last arrival plus clicks plus an 18-frame tail.

```js
p = interpolate(until, [at, at + dur], [0, 1], { easing: inOutCubic })
x += (m.x - x) * p // fold forward, never blend destinations
```

## Pitfalls

- Easing travel like a camera; a pointer accelerates and decelerates, a camera
  curve reads robotic.
- Stacking two quick rings on one point; only the latest alive ring draws.
- Sizing the cursor in absolute px at every crop; default to 3.9% of composition
  height.
- Using an emoji or font glyph for the arrow; hinting rides the one element that
  moves every frame.
- Giving the cursor a hold field; the hold is the gap between waypoints' `at`
  values.
