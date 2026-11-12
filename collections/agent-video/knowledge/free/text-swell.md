---
slug: text-swell
title: Text Swell
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 220 frames (3.67 s)
length_30fps: 110
palette: light #F4F4F4, dark #000008, accent none
used_in: none
---

# Text Swell

> A lead word floats toward the viewer and hangs there while the sentence builds
> around it, then the line falls back.

## What it shows

"No" rises from below and fades up on a pale frame. It floats toward the viewer,
growing past twice its size. "extra" pushes in beside it with its letters
bouncing up off the baseline in a wave, then "charge" pushes in the same way.
The full line "No extra charge" hangs large, then falls back to normal size and
holds centered until the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                                                                             | Curve                                     |
| ----- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1     | 0–8             | Lead word fades from 0 to 1 opacity                                                                                                                                                    | linear fade (source)                      |
| 2     | 0–10            | Lead word rises into place from 0.7 em below                                                                                                                                           | cubic-bezier(0.4, 0, 0.15, 1) (source)    |
| 3     | 14–34           | Lead word floats forward from 1x to 2.1x                                                                                                                                               | cubic-bezier(0.5, 0, 0.05, 1) (source)    |
| 4     | 27–39           | Second word pushes in from 0.15 em right while the lead word shoves left; its letters swell 23 percent one after another on a 2-frame stagger, rising over 3 frames and falling over 6 | cubic-bezier(0.22, 0.8, 0.36, 1) (source) |
| 5     | 41–53           | Third word pushes in on the same 12-frame clock without bouncing                                                                                                                       | cubic-bezier(0.22, 0.8, 0.36, 1) (source) |
| 6     | 53–59           | Full line hangs at 2.1x for 6 frames                                                                                                                                                   | hold (source)                             |
| 7     | 59–77           | Whole line falls back to 1x over 18 frames                                                                                                                                             | cubic-bezier(0.4, 0, 0.2, 1) (source)     |
| 8     | 77–110          | Finished line holds still and centered                                                                                                                                                 | hold (observed)                           |

## Techniques

- `Camera`: the lead word rises from 0.7 em below, then floats forward to 2.1x
  and falls back to 1x (source)
- `SplitText`: trailing words push in one at a time on a 14-frame stagger,
  shoving the placed words left on the same clock (source)
- `Reveal`: each word enters from 0.15 em right with a 3-frame fade while the
  line slides left to make room (source)
- `SplitText`: the second word's letters swell 23 percent each on a 2-frame
  stagger, rising in 3 frames and settling in 6 (source)

## Props to expose

| Prop             | Type             | Default           | Purpose                                            |
| ---------------- | ---------------- | ----------------- | -------------------------------------------------- |
| text             | string           | "No extra charge" | The sentence; its first word leads                 |
| fontSize         | number           | 72                | Final settled type size in px                      |
| color            | string           | theme foreground  | Ink color                                          |
| fontWeight       | number \| string | 600               | Weight                                             |
| introDuration    | number           | 8                 | Frames the lead word fades in over                 |
| riseDistance     | number           | 0.7               | How far below its line the lead word starts, in em |
| riseDuration     | number           | 10                | Frames the lead word takes to rise                 |
| startScale       | number           | 1                 | Size the lead word rises in at                     |
| frontScale       | number           | 2.1               | How far forward the line floats                    |
| approachDelay    | number           | 14                | Frames before the line floats forward              |
| approachDuration | number           | 20                | Frames the float forward takes                     |
| wordDelay        | number           | 27                | Frames before the second word arrives              |
| wordStagger      | number           | 14                | Frames between trailing words                      |
| wordPush         | number           | 0.15              | How far right of its slot a word starts, in em     |
| wordPushDuration | number           | 12                | Frames a word takes to push in                     |
| bounceWords      | number           | 1                 | How many trailing words bounce their letters       |
| letterSwell      | number           | 0.23              | Peak letter growth at the top of the bounce        |
| letterStagger    | number           | 2                 | Frames between one letter starting and the next    |
| letterRise       | number           | 3                 | Frames a letter takes to swell up                  |
| letterHold       | number           | 0                 | Frames a letter stays swollen                      |
| letterFall       | number           | 6                 | Frames a letter takes to settle back               |
| holdDuration     | number           | 6                 | Frames the line stays forward once built           |
| recedeDuration   | number           | 18                | Frames the line takes to fall back                 |
| letterSpacing    | string           | "-0.03em"         | Resting letter spacing                             |
| speed            | number           | 1                 | Time multiplier on the frame clock                 |
| className        | string           | none              | Extra class on the line                            |

## Rebuild it

1. Rise the lead word from 0.7 em below over 10 frames while fading it in
   over 8.
2. Float the line forward to 2.1x between frames 14 and 34.
3. Push each trailing word in from 0.15 em right over 12 frames, sliding the
   placed words left on the same clock.
4. Bounce the second word's letters 23 percent larger on a 2-frame stagger, 3
   frames up and 6 down, pivoting each letter on the baseline.
5. Hang the full line 6 frames, then fall back to 1x over 18 frames and hold.

## Pitfalls

- Pivoting letter swells on the letter-box bottom instead of the baseline drags
  each baseline as it scales and the line boils.
- Bouncing every word instead of the second one turns a single accent into noise
  across the line.
- A front scale far past 2.1x drives the line off the frame; cap it so the
  largest line still fits.
- Fading words in over many frames instead of pushing them reads as a dissolve;
  keep the push positional.
