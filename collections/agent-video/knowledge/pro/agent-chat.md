---
slug: agent-chat
title: Agent Chat
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 400 frames (6.67 s)
length_30fps: 200
palette: light #FCFCFC, dark none, accent #1D9AEE
used_in: none
---

# Agent Chat

> A prompt typed, sent, and answered in a minimal chat thread.

## What it shows

An empty grey composer holds only a plus chip. The request "@snapcn make me a
20s demo of the new dashboard" types itself in while the camera pushes closer.
The field scrolls under a soft left edge as the text outgrows it. A blue send
arrow appears and the message ships. It lands as a blue user bubble. An agent
avatar and typing dots arrive. The reply streams word by word: "On it! Rendering
20 seconds at 1080p. Should be about 40 seconds." Each word shows grey for a
moment before it sets.

## Timeline

| Phase | Frames (30 fps) | What moves                                                        | Curve               |
| ----- | --------------- | ----------------------------------------------------------------- | ------------------- |
| 1     | 0–13            | Empty composer; plus chip only                                    | hold (observed)     |
| 2     | 13–80           | Prompt types; camera pushes in; field scrolls under the left edge | linear (observed)   |
| 3     | 80–93           | Send arrow arrives; the message ships                             | ease-out (observed) |
| 4     | 93–120          | Blue user bubble lands; avatar and typing dots arrive             | ease-out (observed) |
| 5     | 120–200         | Reply streams word by word; each word flashes grey, then sets     | linear (observed)   |

## Techniques

- `Stage`: plain light field, no act change (observed)
- `Composer`: grey pill field with plus chip and send arrow (observed)
- `Camera`: slow push-in during typing (observed)
- `Typewriter`: fixed-rate typing of the prompt and the reply (observed)
- `Caret`: typing edge rides both streams (inferred)
- `ChatBubble`: blue user bubble, agent bubble, typing dots, avatar (observed)

## Props to expose

| Prop         | Type   | Default                                                             | Purpose                                      |
| ------------ | ------ | ------------------------------------------------------------------- | -------------------------------------------- |
| prompt       | string | "@snapcn make me a 20s demo of the new dashboard"                   | Text typed into the composer (proposed)      |
| reply        | string | "On it! Rendering 20 seconds at 1080p. Should be about 40 seconds." | Text streamed by the agent (proposed)        |
| typingFps    | number | 30                                                                  | Characters per second at 30 fps (proposed)   |
| bubbleColor  | string | "#1D9AEE"                                                           | User bubble fill (proposed)                  |
| pendingColor | string | "#9AA0A6"                                                           | Flash colour of an unsettled word (proposed) |

## Rebuild it

1. Open on the empty `Composer` with the plus chip.
2. Type the prompt with `Typewriter` while pushing the `Camera` in.
3. Scroll the field under a soft left edge as text overflows.
4. Pop the send arrow in and ship the message.
5. Land the blue `ChatBubble`, then the avatar and typing dots.
6. Stream the reply word by word, flashing each word grey before it sets.

## Pitfalls

- Typing the reply at character rate instead of word rate breaks the rhythm.
- Skipping the grey flash makes words pop instead of settle.
- Pushing the camera after typing ends disconnects the zoom from the action.
- A composer that grows instead of scrolling breaks the framing.
