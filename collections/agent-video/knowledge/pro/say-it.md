---
slug: say-it
title: Say It
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 236 frames (3.93 s)
length_30fps: 118
palette: light #F8F8F4, dark #000000, accent #78A2E6
used_in: none
---

# Say It

> A word that scrambles into a play control, gets pressed, and hands off to the
> closing line.

## What it shows

The line "You just write" holds on paper. Its last word scrambles itself into
nothing through punctuation and reordered characters, leaving a pale play-button
pill standing where it was. A cursor walks up and presses it. The camera throws
at the control in a single frame, smearing. The control opens into a level bar
with the caption "Cut me a launch reel" under the cursor. The camera tracks left
past it, finds "Your scenes" already waiting, and the closing line "and they
render for you" builds a word at a time and holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                   | Curve               |
| ----- | --------------- | ------------------------------------------------------------ | ------------------- |
| 1     | 0–6             | Opening line holds                                           | hold (observed)     |
| 2     | 6–16            | Last word scrambles to nothing, play pill takes its place    | linear (observed)   |
| 3     | 16–31           | Cursor walks up and presses the control                      | ease-out (inferred) |
| 4     | 31–37           | Camera throws from 1.09x to 2.47x on one smeared frame       | linear (observed)   |
| 5     | 37–56           | Control opens into a level bar with caption under the cursor | ease-out (inferred) |
| 6     | 56–93           | Camera tracks left, second line waits                        | linear (observed)   |
| 7     | 93–110          | Closing line builds a word at a time                         | linear (observed)   |
| 8     | 110–118         | Full closing line holds                                      | hold (observed)     |

## Techniques

- `Stage`: paper field throughout, type never leaving it (observed)
- `TextSwap`: last word cycling through scrambled states two frames each
  (observed)
- `Pill`: play control standing in the word's slot, then opening into a level
  bar (observed)
- `Cursor`: pointer walking a curved path with a press dip on arrival (observed)
- `Press`: control press firing the single-frame camera throw (observed)
- `Camera`: 1.09x to 2.47x throw plus the leftward track, with smear on the fast
  frame (observed)

## Props to expose

| Prop    | Type     | Default                             | Purpose                                             |
| ------- | -------- | ----------------------------------- | --------------------------------------------------- |
| lineOne | string   | "You just write"                    | Line whose last word becomes the control (proposed) |
| caption | string   | "Cut me a launch reel"              | Caption under the opened control (proposed)         |
| lineTwo | string   | "Your scenes"                       | Line waiting past the control (proposed)            |
| closing | string[] | ["and","they","render","for","you"] | Words building the closing line (proposed)          |

## Rebuild it

1. Set lineOne on paper and hold it.
2. Scramble the last word through character states, collapsing its box smoothly.
3. Stand the play pill in the word's slot.
4. Walk the cursor in and press the control.
5. Throw the camera to 2.47x on a single frame with motion smear.
6. Open the pill into a level bar and caption.
7. Track left to the waiting second line.
8. Build the closing line word by word and hold.

## Pitfalls

- Collapsing the word box in steps makes the line twitch; shrink it
  continuously.
- Easing the camera throw over several frames loses the whip; it lands in one
  frame.
- Showing the second line before the track finishes spoils the reveal.
