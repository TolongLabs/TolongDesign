---
slug: hype-reel
title: Hype Reel
tier: pro
category: scenes
evidence: film
demo: 960x540 at 60 fps, 193 frames (3.22 s)
length_30fps: 97
palette: light #E4E4EC, dark #000000, accent #A76711
used_in: none
---

# Hype Reel

> A vertical video post going viral: its view count races up while reactions
> pile in around it.

## What it shows

The shot opens tight on the corner of a vertical phone card while its view count
races from 10k past 149k. It cuts out to the whole card under its caption and
keeps counting through 219k, 357k and 427k. Avatars, chat bubbles and reaction
chips spring in around the card one after another. A hand reaches into the frame
near the end. The count tops out at 999k and the pile settles.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                 | Curve             |
| ----- | --------------- | ---------------------------------------------------------------------------------------------------------- | ----------------- |
| 1     | 0–13            | Tight close-up on the card corner; the count races 10k to 149k                                             | linear            |
| 2     | 13–19           | Hard cut out to the full card under its caption; the count passes 219k                                     | hold              |
| 3     | 19–45           | The full phone card sits centred; the count climbs to 510k; the camera eases back                          | ease-out          |
| 4     | 45–71           | Avatars, bubbles and reaction chips spring in around the card; the count reaches 787k; brief hold at 59–65 | spring            |
| 5     | 71–96           | A hand reaches in; the count tops 999k; the pile settles                                                   | spring, then hold |

## Techniques

- `Stage`: black field holding the centred card (observed)
- `Camera`: slow pullback across the whole run (observed)
- `DeviceFrame`: vertical phone card with rounded corners, caption and glowing
  edge (observed)
- `CountUp`: view count formatted as 10k through 999k (observed)
- `ChatBubble`: reaction bubbles springing in around the card (observed)
- `Pill`: reaction chips such as "NEED THIS ASAP" and "This is peak" (observed)
- `IconTile`: round avatar faces arriving with the bubbles (observed)
- `Reveal`: each arrival pops in with overshoot (observed)

## Props to expose

| Prop       | Type                                | Default                                                                    | Purpose                                                  |
| ---------- | ----------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------- |
| startCount | number                              | 10000                                                                      | View count on the first frame (proposed)                 |
| endCount   | string                              | "999k"                                                                     | Formatted count the race tops out at (proposed)          |
| caption    | string                              | "Our whole launch video is snapcn Pro components. Shipped in an afternoon" | Caption over the card (proposed)                         |
| reactions  | { avatar: string; label: string }[] | six items as observed                                                      | Bubbles and chips that spring in (proposed)              |
| cardMedia  | string                              | null                                                                       | Vertical video or image inside the phone card (proposed) |

## Rebuild it

1. Open tight on the card corner with a glowing `DeviceFrame` edge.
2. Run `CountUp` fast from the start count under a slow `Camera` pullback.
3. Cut hard out to the full card with its caption.
4. Spring each `ChatBubble`, `Pill` and `IconTile` in with `Reveal` overshoot,
   staggered.
5. Keep the count climbing the whole time.
6. Land the count at its top value and hold the settled pile.

## Pitfalls

- Counting at a constant step size instead of accelerating flattens the viral
  read.
- Springing all reactions in together hides the pile-up rhythm.
- Losing the card glow on the wide shot drops the focal point.
- Holding the end card too briefly hides the final count.
