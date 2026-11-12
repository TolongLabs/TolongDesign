---
slug: chat-thread
title: Chat Thread
tier: pro
category: social
evidence: film
demo: 960x540 at 60 fps, 220 frames (3.67 s)
length_30fps: 110
palette: light none, dark #040404, accent #326B53
used_in: none
---

# Chat Thread

> A chat thread sends itself one bubble at a time. Use it for the moment a
> finished demo gets shared.

## What it shows

The frame starts black. A green bubble reading "HELLO." fades up in place and
holds. A second bubble, "your demo video is ready...", arrives below it and
pushes the stack up, eased. A third bubble carries a snapcn.dev link. A fourth
asks "what do you think??". Each arrival displaces everything above it while the
whole thread creeps upward underneath, so the stack never looks frozen between
messages. The camera pulls back gently across the clip. Every bubble carries a
"3:00 PM" timestamp and a double check.

## Timeline

| Phase | Frames (30 fps) | What moves                                                    | Curve               |
| ----- | --------------- | ------------------------------------------------------------- | ------------------- |
| 1     | 0–7             | "HELLO." fades up in place                                    | ease-out (observed) |
| 2     | 7–20            | Stack sits still                                              | hold (observed)     |
| 3     | 20–29           | Second bubble arrives below; stack above displaces upward     | ease-out (inferred) |
| 4     | 29–44           | Stack holds while the thread creeps upward underneath         | hold (inferred)     |
| 5     | 44–59           | Link bubble arrives; camera pulls back gently                 | ease-out (observed) |
| 6     | 59–73           | "what do you think??" arrives; stack re-anchors to the bottom | ease-out (inferred) |
| 7     | 73–110          | Full thread holds with a slow upward creep                    | hold (observed)     |

## Techniques

- `Stage`: black ground at #040404 for the whole run (observed)
- `ChatBubble`: four bubbles arrive one at a time and fade up in place with no
  slide (observed)
- `Camera`: gentle pull-back across the clip while the stack stays
  bottom-anchored (observed)
- `Card`: link bubble carries a two-line snapcn.dev URL as its body (observed)
- `Pill`: timestamp and double-check row rides inside each bubble (observed)

## Props to expose

| Prop          | Type   | Default                                                                                                           | Purpose                                                      |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `messages`    | string | `"HELLO.;your demo video is ready...;https://snapcn.dev/v/1XNhz1Zkdfotpy_OV88kifWIqFKxWdw27;what do you think??"` | Semicolon-separated bubble texts in arrival order (proposed) |
| `timestamp`   | string | `"3:00 PM"`                                                                                                       | Timestamp printed in each bubble (proposed)                  |
| `bubbleColor` | string | `"#326B53"`                                                                                                       | Bubble fill tint (proposed)                                  |
| `arrivalGap`  | number | `15`                                                                                                              | Frames between bubble arrivals at 30 fps (proposed)          |

## Rebuild it

1. Anchor an empty stack to the bottom of a black frame.
2. Fade the first bubble up in place over about 7 frames with no travel.
3. Hold until the next beat, then fade the next bubble in below and ease the
   stack above it upward by exactly the room the newcomer needs.
4. Creep the whole thread upward slowly between arrivals so no two holds match.
5. Pull the camera back gently across the full 110 frames.
6. End on the full stack and hold it still to the last frame.

## Pitfalls

- Bubbles that slide in from the side read as notifications, not as a thread
  sending itself; they must fade up in place.
- A stack that sits pixel-still between arrivals looks stuck; keep the slow
  creep running.
- Re-centring the stack instead of bottom-anchoring it makes every arrival shove
  old messages down as well as up.
- Dropping the timestamp or the double check loses the messaging-app read.
