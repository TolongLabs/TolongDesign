---
slug: punch-lines
title: Punch Lines
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 288 frames (4.8 s)
length_30fps: 144
palette: light #F4F4F0, dark #20201C, accent #F7258B
used_in: none
---

# Punch Lines

> Full-frame title cards that cut hard between a flicked-in statement and
> swelling hero words.

## What it shows

The statement card sits left of center while each line flicks in from 0.74em
out, sails 0.71em past its mark and settles home without crossing back, then
rushes past the camera. The hero card punches every word up from a third of its
size in a wave while the whole line pushes slowly forward. The accent payoff
card lands last in pink and holds at full size.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                 | Curve                                        |
| ----- | --------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------- |
| 1     | 0–36            | Card 1 lines flick right from −0.737em and settle critically damped, staggered 3.5 frames  | (A+Bt)e^(−2.846t); (source)                  |
| 2     | 36–48           | Card 1 rushes past the camera on 1/(1−travel) about the frame center                       | ease-in with RUSH_EASE; (source)             |
| 3     | 48–96           | Card 2 words swell 0.32 to 1 over 15 frames staggered 2.8, line pushes 0.778 up at 20.5%/s | in-out cubic bezier(0.65,0,0.35,1); (source) |
| 4     | 96              | Hard cut to the accent card already at 87% of its size                                     | hard cut; (observed)                         |
| 5     | 96–144          | Card 3 punches in pink at 2.7x and keeps pushing forward to the end                        | in-out cubic, then linear push; (source)     |

## Techniques

- `Reveal`: slide lines thrown by an initial kick on a critically damped curve —
  overshoot with no undershoot, 0.42px rms (source)
- `MotionBlur`: line smeared horizontally by its per-frame travel over root-12,
  shutting off under 0.2px (source)
- `SplitText`: punch words swelling about their own middles, staggered 2.8
  frames on an in-out cubic (source)
- `Camera`: hero push scaling about the frame center at 20.5% per second for the
  whole hold (source)
- `Stage`: full-bleed paper ground per card; the payoff card paints the same
  stage in pink (source)

## Props to expose

| Prop          | Type   | Default                                                              | Purpose                                      |
| ------------- | ------ | -------------------------------------------------------------------- | -------------------------------------------- |
| script        | text   | Ready-made scenes / for Remotion. \| One command. Own it. \| snapcn. | Cards split by \|, lines by /                |
| styles        | text   | slide,punch                                                          | Per-card look; last value repeats            |
| sizes         | text   | 1,0.945,2.7                                                          | Per-card size multiple; last repeats         |
| holds         | text   | 48                                                                   | Per-card screen time in frames; last repeats |
| accentBeat    | number | 3                                                                    | Which card paints in accentColor; 0 is none  |
| lead          | number | 4                                                                    | Entrance frames running before each cut      |
| fontSize      | number | 93                                                                   | Type size of a size-1 card in pixels         |
| fontWeight    | select | 600                                                                  | Card weight                                  |
| lineHeight    | number | 0.89                                                                 | Baseline distance in em                      |
| letterSpacing | text   | -0.022em                                                             | Resting tracking                             |
| wordSpacing   | text   | -0.02em                                                              | Crushed word gaps joining the line           |
| ground        | color  | #FAF9F6                                                              | Card ground                                  |
| ink           | color  | #141414                                                              | Card type                                    |
| accentColor   | color  | #FF1C8E                                                              | Payoff card color                            |
| slideFrom     | number | -0.737                                                               | Slide start in em                            |
| slideKick     | number | 7.34                                                                 | Slide kick in em per second                  |
| slideSettle   | number | 2.846                                                                | Slide settle rate                            |
| lineStagger   | number | 3.5                                                                  | Frames between slide lines                   |
| slideDrop     | number | 0.313                                                                | Card hang below center in em                 |
| motionBlur    | number | 1                                                                    | Shutter fraction; 0 disables                 |
| punchFrom     | number | 0.32                                                                 | Word start scale                             |
| punchFrames   | number | 15                                                                   | Word swell frames                            |
| wordStagger   | number | 2.8                                                                  | Frames between swelling words                |
| pushFrom      | number | 0.778                                                                | Line open size                               |
| pushRate      | number | 0.205                                                                | Push growth per second                       |
| rushLead      | number | 12.2                                                                 | Rush frames before card end                  |
| rushFrames    | number | 18                                                                   | Rush travel frames                           |
| rushTravel    | number | 0.85                                                                 | Rush distance share; ends 6.7x               |
| fit           | number | 0.92                                                                 | Max line share of frame width                |

## Rebuild it

1. Parse the script into cards and lay them as a straight run of hard cuts from
   holds, each clock starting lead frames early.
2. Center each card on its measured ink, not its line boxes, using the face's
   real ascent and descent.
3. Throw slide lines with (from + kick·t)e^(−settle·t) and smear each by its
   one-frame travel.
4. Swell punch words 0.32 to 1 about their vertical middles on the in-out cubic,
   staggered 2.8 frames.
5. Push punch lines from 0.778 at 20.5% per second about the frame center for
   the whole hold.
6. Rush slide cards out over the last 12.2 frames on 1/(1 − travel) and cut
   mid-motion into the next card.

## Pitfalls

- A spring fit overshoots then demands an undershoot the reference never shows;
  only the kicked critically damped curve fits.
- Scaling the rush about the type center instead of the frame center sends both
  lines the wrong way.
- Measuring the fit against the resting size lets a pushed or swung card run off
  the frame later.
- Hinted stems reshape under scale; render outlines with geometric precision or
  sizes shimmer frame to frame.
