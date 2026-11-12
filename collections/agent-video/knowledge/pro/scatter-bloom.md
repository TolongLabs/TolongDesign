---
slug: scatter-bloom
title: Scatter Bloom
tier: pro
category: charts
evidence: film
demo: 960x540 at 60 fps, 196 frames (3.27 s)
length_30fps: 98
palette: light #F8F8F4, dark none, accent none
used_in: none
---

# Scatter Bloom

> A scatter plot that blooms point by point on a drifting tilted plane, for
> data-density proof.

## What it shows

A tilted analytics plane carries a "Time to first frame" scatter over a Week 1
to Week 5 table. Points arrive left to right over the whole run: most on
schedule, about one in fourteen long before its turn. The cloud climbs and
widens as it grows, skewed upward. Meanwhile the plane rolls a third of a
degree, pushes in a tenth with an overshoot, and tracks two hundred pixels left.
Nothing cuts and nothing lands; the only event is the data arriving.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                     | Curve             |
| ----- | --------------- | ------------------------------------------------------------------------------ | ----------------- |
| 1     | 0–30            | First points land on the left, plane starts its drift                          | linear (observed) |
| 2     | 30–82           | Bulk of the thirteen hundred points arrives left to right as the camera tracks | linear (inferred) |
| 3     | 82–98           | Last points land on the right, full cloud drifts on                            | linear (observed) |

## Techniques

- `Stage`: white field with the tilted analytics plane and table (observed)
- `Particles`: thirteen hundred dots arriving on schedule with early outliers
  (observed)
- `Camera`: leftward track with a slight push-in, overshoot, and a third-degree
  roll (inferred)
- `AppScreen`: scatter header plus week table drawn as one plane (observed)

## Props to expose

| Prop       | Type                                | Default               | Purpose                                      |
| ---------- | ----------------------------------- | --------------------- | -------------------------------------------- |
| points     | {x: number, y: number, c: string}[] | []                    | Plot data in axis units (proposed)           |
| earlyShare | number                              | 0.07                  | Fraction of points arriving early (proposed) |
| trackPx    | number                              | 200                   | Leftward camera travel in px (proposed)      |
| title      | string                              | "Time to first frame" | Chart heading (proposed)                     |

## Rebuild it

1. Draw the tilted plane with header and week table as one surface.
2. Seed thirteen hundred points with an upward-skewed spread.
3. Release the bulk left to right over the run, holding a few back as early
   arrivals.
4. Track the camera left while pushing in a tenth with an overshoot.
5. Roll the plane a third of a degree recovered from its parallel rules.
6. Never cut; let the last frames drift on the finished cloud.

## Pitfalls

- Fading points in instead of popping them on reads as fog, not data landing.
- Panning by the points instead of the table band couples the camera to the
  cloud.
- Leveling the plane removes the tilt the whole measurement depends on.
