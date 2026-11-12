---
slug: phone-pitch
title: Phone Pitch
tier: pro
category: screens
evidence: film
demo: 960x540 at 60 fps, 470 frames (7.83 s)
length_30fps: 235
palette: light #ECF8FC, dark #101418, accent #5399FC
used_in: none
---

# Phone Pitch

> A headline beside a phone: the pitch shot, with the thread on screen answering
> back.

## What it shows

A phone rests at frame right on a pale ground. A two-line headline says itself a
word at a time at frame left. On the screen a chat thread runs: requests land in
blue, short replies land in grey, typing dots breathe between answers. The
camera pans into the phone and the thread scrolls under its own motion while the
headline slides away. The film ends tight on the thread as the last reply lands.

## Timeline

| Phase | Frames (30 fps) | What moves                                                               | Curve    |
| ----- | --------------- | ------------------------------------------------------------------------ | -------- |
| 1     | 0–15            | Phone put down from the right, keeping 77% of remaining distance a frame | ease-out |
| 2     | 15–35           | Headline arrives word by word, each settling from right, small and light | ease-out |
| 3     | 35–75           | Headline and phone hold; first grey reply lands in the thread            | hold     |
| 4     | 75–95           | Camera pans into the phone; headline slides out left                     | ease-in  |
| 5     | 95–140          | Thread scrolls; blue and grey bubbles arrive in turn                     | linear   |
| 6     | 140–205         | Typing dots breathe; replies land; thread keeps scrolling                | linear   |
| 7     | 205–235         | Tight-on-thread hold as the last reply lands                             | hold     |

## Techniques

- `DeviceFrame`: phone put down with an exponential settle, not a slide
  (observed)
- `SplitText`: two-line headline arrives a word at a time from the right
  (observed)
- `Camera`: accelerating pan into the phone while the headline exits (observed)
- `ChatBubble`: blue requests, grey replies and typing dots landing on their own
  beats (observed)

## Props to expose

| Prop         | Type             | Default                | Purpose                                                        |
| ------------ | ---------------- | ---------------------- | -------------------------------------------------------------- |
| headline     | string[]         | "Let snapcn handle it" | Two-line pitch headline (proposed)                             |
| messages     | { side, text }[] | observed thread        | Chat thread played on the phone screen (proposed)              |
| settleRate   | number           | 0.77                   | Share of remaining distance kept per frame on entry (proposed) |
| screenHeader | string           | "snapcn"               | Thread header name and avatar (proposed)                       |

## Rebuild it

1. Put the `DeviceFrame` down from the right over frames 0–15 on the exponential
   settle.
2. Arrive the headline word by word over frames 15–35 from slightly right and
   small.
3. Hold to frame 75 and land the first grey reply in the thread.
4. Pan the `Camera` into the phone over frames 75–95 as the headline exits left.
5. Scroll the thread and land bubbles in turn through frame 205, with typing
   dots between answers.
6. Hold tight on the thread to frame 235.

## Pitfalls

- Sliding the phone in at constant speed reads as a push; it must decelerate
  exponentially.
- Popping all headline words at once loses the staggered settle that sells the
  pitch.
- Freezing the thread between messages makes it look dead; it scrolls and
  breathes throughout.
- Cutting instead of panning into the phone breaks the single-shot pitch read.
