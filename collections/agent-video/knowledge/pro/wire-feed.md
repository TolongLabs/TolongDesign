---
slug: wire-feed
title: Wire Feed
tier: pro
category: scenes
evidence: film
demo: 1280x720 at 60 fps, 160 frames (2.67 s)
length_30fps: 80
palette: light #FCFCFC, dark none, accent none
used_in: none
---

# Wire Feed

> A changelog headline types itself in close, then the film cuts wide as older
> entries slide into the stack.

## What it shows

"CHANGELOG" sits over a paper feed. A caret blinks on and the headline keys in
beside it while the camera pulls back. The age fades up sliding into place, and
a hairline rule draws out beneath the entry. A match cut jumps to the wide feed
with the headline nearly done and the same caret still typing. Two older entries
slide in from the right out of a blur, roughly twenty demo frames apart. Every
age ticks upward each second while the camera eases out and drifts left to the
end.

## Timeline

| Phase   | Frames (30 fps) | What moves                                                             | Curve               |
| ------- | --------------- | ---------------------------------------------------------------------- | ------------------- |
| Open    | 0–1             | Title holds; the caret blinks on                                       | hold (observed)     |
| Type    | 1–16            | The headline keys in ("sn" by 5, "snapc" by 11); the camera pulls back | linear (observed)   |
| Meta    | 16–21           | The age fades up into place; the rule draws out beneath the entry      | ease-out (observed) |
| Second  | 21–28           | The next line starts typing up to "snapcn Pr"                          | linear (observed)   |
| Wide    | 28–37           | match cut to the wide stack; the first entry finishes under the caret  | linear (observed)   |
| Entries | 37–53           | Two older items slide in from the right out of blur; ages tick up      | ease-out (observed) |
| Drift   | 53–80           | The full stack rests; ages keep ticking; the camera eases out and left | ease-out (observed) |

## Techniques

- `Stage`: paper feed with hairline rules (observed)
- `Camera`: slow pull-back with a leftward drift (observed)
- `Typewriter`: headlines and entries key in at a fixed rate (observed)
- `Caret`: a bar caret rides the typing edge (observed)
- `Reveal`: the age fades up sliding in; entries slide in from the right out of
  blur (observed)
- `LineDraw`: the rule draws out beneath each entry (observed)

## Props to expose

| Prop     | Type                                                 | Default                 | Purpose                                                   |
| -------- | ---------------------------------------------------- | ----------------------- | --------------------------------------------------------- |
| title    | string                                               | "CHANGELOG"             | Masthead over the feed (proposed)                         |
| entries  | { source: string; headline: string; body: string }[] | three items as observed | Feed rows, newest first (proposed)                        |
| typeRate | number                                               | 30                      | Characters per second at 30 fps (proposed)                |
| entryGap | number                                               | 10                      | 30 fps frames between older entries sliding in (proposed) |
| driftPx  | number                                               | 60                      | Leftward camera drift in px over the run (proposed)       |

## Rebuild it

1. Set the paper `Stage` with the title; blink the `Caret` on.
2. `Typewriter` the headline while the `Camera` pulls back.
3. `Reveal` the age sliding in; draw the rule with `LineDraw`.
4. Start the second line, then `match cut` wide with the caret still typing.
5. Slide the two older entries in from the right out of blur, `entryGap` apart.
6. Tick every age up each second while the camera drifts left to the end.

## Pitfalls

- Sliding entries in sharp; they arrive out of a blur.
- Reflowing laid-out lines; place every row with transforms so the zoom stays
  sub-pixel.
- Freezing the ages; they tick every second to the last frame.
- Stopping the camera at the cut; it eases out through the whole run.
