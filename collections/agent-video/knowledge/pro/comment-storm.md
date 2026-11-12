---
slug: comment-storm
title: Comment Storm
tier: pro
category: social
evidence: film
demo: 960x1692 at 60 fps, 545 frames (9.08 s)
length_30fps: 273
palette: light #FCFCFC, dark #000000, accent #84C769
used_in: none
---

# Comment Storm

> A launch crowd buries the frame asking for Pro. Use it for social proof under
> a release.

## What it shows

One question types itself into a pill on black and holds alone. Replies pile in
after it: pills tossed with an overshoot and a tilt, cards that open downward
and type their own lines. Arrivals come faster and faster while the camera pulls
back the whole time. The act flips from dark to light around the middle of the
run. The camera starts to shake, folds the pile into its centre, and a hard cut
lands on black.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                        | Curve               |
| ----- | --------------- | ------------------------------------------------------------------------------------------------- | ------------------- |
| 1     | 0–18            | Opening question types into its pill on black                                                     | linear (observed)   |
| 2     | 18–46           | Question holds alone                                                                              | hold (observed)     |
| 3     | 46–114          | Pills and cards pile in, faster and faster; camera pulls back throughout; act flips dark to light | ease-in (observed)  |
| 4     | 114–260         | Wall buries the portrait frame; camera keeps retreating and starts to shake                       | ease-in (inferred)  |
| 5     | 260–267         | Pile folds into the centre of the frame                                                           | ease-out (inferred) |
| 6     | 267–273         | Hard cut to black; hold                                                                           | hold (observed)     |

## Techniques

- `Stage`: dark ground, then a light act from about frame 114, then black on the
  cut (observed)
- `Pill`: question and reply pills toss in with overshoot and tilt (observed)
- `Card`: reply cards open downward and type their own lines (observed)
- `Typewriter`: opening question and card bodies type in place (observed)
- `Camera`: continuous pull-back across the run, accelerating as arrivals
  accelerate, with shake late (observed)
- `Collage`: pile positions, entrances, and typing rates replay a fixed measured
  layout; nothing is random (observed)

## Props to expose

| Prop       | Type     | Default                                                                                     | Purpose                                                         |
| ---------- | -------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `question` | string   | `"When Pro?"`                                                                               | Opening question typed into the first pill (proposed)           |
| `comments` | string[] | `["where is the Pro tier?", "When's the release date?", "Pro???", "Still waiting for Pro"]` | Reply texts piled in after the question (proposed)              |
| `actFlip`  | number   | `114`                                                                                       | Frame at 30 fps where the ground flips dark to light (proposed) |
| `accent`   | string   | `"#84C769"`                                                                                 | Pill tint for the opening question (proposed)                   |

## Rebuild it

1. Type the opening question into a centred pill on black and hold it alone.
2. Toss reply pills in with an overshoot and a slight tilt, alternating sides.
3. Open reply cards downward and type their lines inside them.
4. Tighten the gap between arrivals steadily while pulling the camera back on
   one curve.
5. Flip the ground from dark to light near frame 114 without pausing arrivals.
6. Add camera shake late, fold the whole pile into the centre, and hard-cut to
   black.

## Pitfalls

- Randomising positions or timings breaks the measured pile; every arrival is
  fixed.
- Pausing the pull-back for the act flip splits one move into two shots.
- Cards that simply fade in lose the opening-downward read; the card edge must
  travel.
- A soft ending instead of the hard cut to black lets the energy leak out.
