---
slug: spark-question
title: Spark Question
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 340 frames (5.67 s)
length_30fps: 170
palette: light #F8F8F4, dark #202020, accent #6A92E2
used_in: template-05 (Product tour), Hook — what if
---

# Spark Question

> A hook that asks a question one huge phrase at a time while the camera pulls
> back.

## What it shows

The film opens on paper white. A phrase lands large and settles while the camera
pulls back until it sits small and centred. A hard cut swaps in the next phrase
and the move repeats: "What if your", then "launch video" in blue, then "shipped
today", then "in five minutes?". Small four-point sparkles dart across the frame
through every beat. The last phrase cuts to "snapcn." in blue over a soft circle
whose rings drift outward, and the film holds there.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                         | Curve                              |
| ----- | --------------- | ---------------------------------------------------------------------------------- | ---------------------------------- |
| 1     | 0–15            | "What if your" blurs up word by word at large size, camera pulls back to rest size | ease-out (inferred)                |
| 2     | 15–34           | Small line holds, sparkles cross the frame                                         | hold (observed)                    |
| 3     | 34–56           | Hard cut to "launch video" in blue, same blur-up and pull-back, then hold          | hard cut, then ease-out (observed) |
| 4     | 56–90           | Hard cut to "shipped today", same move, then hold                                  | hard cut, then ease-out (observed) |
| 5     | 90–124          | Hard cut to "in five minutes?", same move, then hold                               | hard cut, then ease-out (observed) |
| 6     | 124–170         | Hard cut to "snapcn." over a soft circle, rings drift outward, hold to end         | hold (observed)                    |

## Techniques

- `Stage`: flat paper background for the whole run (observed)
- `Camera`: continuous pull-back inside each phrase, from huge type to a small
  centred line (observed)
- `Reveal`: words blur up into place one after another, oversized at first
  (observed)
- `SplitText`: per-word stagger of the blur-up within each phrase (inferred)
- `Particles`: small four-point sparkles darting past on straight flights
  (observed)
- `RadialBloom`: soft circle with outward-drifting rings behind the closing line
  (observed)

## Props to expose

| Prop          | Type     | Default | Purpose                                                         |
| ------------- | -------- | ------- | --------------------------------------------------------------- |
| phrases       | string[] | —       | The question phrases in order, plus the closing line (proposed) |
| accentPhrases | number[] | —       | Which phrases render in the accent colour (proposed)            |
| sparkleCount  | number   | —       | How many sparkles cross per phrase (proposed)                   |
| pullback      | number   | —       | Camera scale from phrase landing to rest size (proposed)        |
| holdFrames    | number   | —       | Rest frames before each hard cut (proposed)                     |

## Rebuild it

1. Set a paper `Stage` at 960x540 and centre each phrase on it.
2. For each phrase, land words huge with a `Reveal` blur-up staggered per word
   (`SplitText`).
3. Run a `Camera` pull-back during every landing until the line sits small and
   centred.
4. Cut hard between phrases with no crossfade.
5. Fly `Particles` sparkles across each beat on straight paths.
6. Close on the brand line in blue over a `RadialBloom` circle with drifting
   rings.
7. Hold the end card until the full 170 frames elapse.

## Pitfalls

- Easing the cuts instead of cutting hard turns separate beats into one slide.
- Forgetting the per-phrase pull-back leaves later phrases at the wrong size.
- Too many or too slow sparkles clutter the small held lines.
