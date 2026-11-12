---
slug: app-reveal
title: App Reveal
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 212 frames (3.53 s)
length_30fps: 106
palette: light #FCFCFC, dark none, accent none
used_in: none
---

# App Reveal

> A wordmark that folds into an app card under a diving, rolling camera.

## What it shows

The gradient word "snapcn" holds alone on white. It shrinks into the header of a
card that builds around it. The camera dives past the card, rolls, and backs off
into a settled front-on framing. The greeting "Hello, Sri. What are we shipping
today?" types in. Four suggestion chips — "Ship the demo", "Cut a launch video",
"Render the changelog", "Draft the release post" — land one at a time. The input
bar arrives below. The card holds front-on to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                  | Curve               |
| ----- | --------------- | ----------------------------------------------------------- | ------------------- |
| 1     | 0–7             | Gradient wordmark holds alone                               | hold (observed)     |
| 2     | 7–21            | Mark shrinks into the card header; card builds around it    | ease-out (observed) |
| 3     | 21–55           | Camera dives past the card, rolls, and backs off front-on   | ease-out (observed) |
| 4     | 55–85           | Greeting types; chips land one at a time; input bar arrives | ease-out (observed) |
| 5     | 85–106          | Settled front-on card holds                                 | hold (observed)     |

## Techniques

- `Stage`: plain white field (observed)
- `Lockup`: gradient wordmark assembling the opening frame (observed)
- `Card`: app card building around the shrunken mark (observed)
- `Camera`: dive past, roll, and back-off to front-on (observed)
- `MotionBlur`: smear on the fast dive (inferred)
- `Typewriter`: greeting typed at a fixed rate (observed)
- `Pill`: four suggestion chips landing in stagger (observed)
- `Composer`: input bar arriving beneath the chips (observed)
- `AppScreen`: greeting, chips, and input composed as one app surface (observed)

## Props to expose

| Prop        | Type     | Default                                                                                   | Purpose                                          |
| ----------- | -------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------ |
| brand       | string   | "snapcn"                                                                                  | Wordmark that becomes the card header (proposed) |
| greeting    | string   | "Hello, Sri. What are we shipping today?"                                                 | Typed line inside the card (proposed)            |
| chips       | string[] | ["Ship the demo", "Cut a launch video", "Render the changelog", "Draft the release post"] | Suggestion chips landing in order (proposed)     |
| diveDepth   | number   | 2.2                                                                                       | Peak camera closeness during the dive (proposed) |
| rollDegrees | number   | 12                                                                                        | Camera roll applied mid-dive (proposed)          |

## Rebuild it

1. Hold the gradient `Lockup` alone on the `Stage`.
2. Shrink the mark into the header while building the `Card` around it.
3. Dive the `Camera` past the card, roll it, and back off front-on.
4. Type the greeting with `Typewriter`.
5. Land each `Pill` chip in stagger, then arrive the `Composer` bar.
6. Hold the settled front-on card.

## Pitfalls

- Scaling the card instead of moving the camera through the dive.
- Rolling without returning to true front-on leaves a tilted end card.
- Landing all chips at once instead of staggered.
- Shrinking the mark off-centre so it misses the header slot.
