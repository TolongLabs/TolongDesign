---
slug: vault-count
title: Vault Count
tier: pro
category: charts
evidence: film
demo: 960x540 at 60 fps, 184 frames (3.07 s)
length_30fps: 92
palette: light #F0F8FC, dark #181C18, accent #3E5991
used_in: none
---

# Vault Count

> A vault balance ticking up while payment cards drift past it.

## What it shows

A phone showing "snapcn Vault" and "$500" sits centred on a pale field. Payment
cards for "$149 paid", "$19 paid", and "$99 paid" rise from below on both sides.
Each card loses contrast and gains blur as it climbs, so the stack reads as
depth. The vault figure ticks up in uneven steps to "$529". The phone and cards
wash out to white at the end.

## Timeline

| Phase     | Frames (30 fps) | What moves                                                   | Curve                                                                 |
| --------- | --------------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| Hold open | 0-9             | Phone at $500, one card low in frame                         | hold (observed)                                                       |
| Rise      | 9-60            | Cards rise past the phone while the counter ticks 500 to 523 | cards linear rise, count gaps 5 down to 2 frames at 60 fps (observed) |
| Peak      | 60-74           | Counter reaches $529, cards keep rising and softening        | count linear, cards ease-out (observed)                               |
| Wash out  | 74-92           | Whole scene fades to white                                   | opacity ramp (observed)                                               |

## Techniques

- `Stage`: pale field holding the device and the drifting cards (observed)
- `DeviceFrame`: centred phone with vault header, balance, and Transactions bar
  (observed)
- `Card`: payment line items with merchant mark, amount, and "paid" caption
  (observed)
- `CountUp`: vault balance ticking in shortening gaps to 15 ticks per second
  (observed)
- `MotionBlur`: rising cards lose contrast and gain blur with height (inferred)

## Props to expose

| Prop         | Type     | Default       | Purpose                                                       |
| ------------ | -------- | ------------- | ------------------------------------------------------------- |
| startBalance | number   | 500           | Vault opening figure (proposed)                               |
| endBalance   | number   | 529           | Vault closing figure (proposed)                               |
| payments     | object[] | 4             | Card rows with merchant, amount, and share copy (proposed)    |
| tickSchedule | number[] | [5,4,3,3,2,2] | Gaps between ticks in frames at 60 fps, tightening (proposed) |
| washFrames   | number   | 18            | Frames of the closing fade to white at 30 fps (proposed)      |

## Rebuild it

1. Centre a `DeviceFrame` vault screen on a pale `Stage`.
2. Feed `Card` rows in from below on alternating sides.
3. Rise each card past the phone while dropping contrast and adding blur.
4. `CountUp` the balance on the tightening tick schedule.
5. Keep the device fixed; move only numbers and cards.
6. Wash the full frame to white over the last 18 frames.

## Pitfalls

- Moving the phone breaks the anchor the rising cards read against.
- Ticking on a fixed interval loses the hesitant-then-steady rhythm.
- Recentring the balance per tick makes it shimmy on narrow-to-wide digits.
