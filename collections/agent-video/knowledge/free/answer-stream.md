---
slug: answer-stream
title: Answer Stream
tier: free
category: ai-input
evidence: source+film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #F4F4F0, dark none, accent #296DE9
used_in: none
---

# Answer Stream

> A macro shot on the send button cuts hard to the answer streaming in word by
> word. Use it for the beat right after the user presses send.

## What it shows

The camera sits macro-tight on the send button and pushes in. It cuts to the
answer page on the fastest frame of that push. The question pill fills first,
then the reply streams in with each hot word cooling to foreground ink. A
headline lands under the reply, four cards arrive empty and fill, and the
composer slides back up. The camera pulls back the whole time to keep up, then
holds on the finished page.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                    | Curve                                            |
| ----- | --------------- | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| 1     | 0–15            | Macro shot settles out of its arrival, button slides 158 px left and 14 px up | ease-out (source)                                |
| 2     | 30–39           | Push into the button accelerates, press dips the button 7 percent             | cubic press over 3 down and 5 up frames (source) |
| 3     | 39              | Hard cut to the answer page, landing 27 px high                               | one frame (source)                               |
| 4     | 39–54           | Page eases down into place, question pill streams in                          | ease-out over 15 frames (source)                 |
| 5     | 41–79           | Reply streams at 25 words per second, each word cooling over 0.23 s           | linear birth clock, fixed cool clock (source)    |
| 6     | 58–91           | Camera pulls back 1.364 to 0.972 about a point above the frame, with blur     | cubic in-out (source)                            |
| 7     | 79–91           | Four cards land empty 3.5 frames apart, then fill                             | linear opacity over 3 frames (source)            |
| 8     | 73–85           | Composer slides up from below the frame                                       | ease-out over 12 frames (source)                 |
| 9     | 82–120          | Headline and card bodies finish streaming                                     | linear birth clock (source)                      |
| 10    | 120–150         | Finished page holds under a slow idle push                                    | linear (observed)                                |

## Techniques

- `Composer`: question plus send button inside one rounded surface shared by
  both shots (source)
- `Camera`: macro zoom 2.36 about the button, then pullback 1.364 to 0.972 about
  focus 0.5 by minus 0.548 (source)
- `MotionBlur`: uniform blur up to 3 px derived from the camera speed each frame
  (source)
- `ChatBubble`: question pill lands empty and fills at 16 words per second
  (source)
- `Card`: four cards land empty 3.5 frames apart and fill 4 frames later
  (source)
- `TextSwap`: every word arrives at full accent and cools to foreground over
  0.23 s, holding a six-word hot band (source)
- `Press`: send button scales to 0.93 over 3 frames and releases over 5 (source)

## Props to expose

| Prop               | Type         | Default                                                  | Purpose                                                       |
| ------------------ | ------------ | -------------------------------------------------------- | ------------------------------------------------------------- |
| question           | string       | "How do I rank higher in AI answers?"                    | Prompt in the pill and the composer                           |
| answer             | string       | two-line gap analysis                                    | Reply that streams; newline is a hard break                   |
| headline           | string       | "Your AI visibility score: 34% — here's how I'd fix it:" | Line that introduces the cards                                |
| cards              | AnswerCard[] | four built-in cards                                      | Plan cards with title, body and icon path                     |
| model              | string       | "Auto"                                                   | Composer footer label                                         |
| commitAt           | number       | 1.0                                                      | Seconds when the push into the button accelerates             |
| cutAt              | number       | 1.284                                                    | Seconds when the shot cuts; one frame, no transition          |
| pullbackAt         | number       | 1.933                                                    | Seconds when the camera starts pulling back                   |
| pullbackDuration   | number       | 1.1                                                      | Seconds the pullback takes                                    |
| pullbackFrom       | number       | 1.364                                                    | Scale the answer shot starts at                               |
| pullbackUndershoot | number       | 0.028                                                    | How far past 1 the pullback goes before recovering            |
| focusY             | number       | -0.548                                                   | Pullback focal height as a frame fraction, above the top edge |
| macroZoom          | number       | 2.36                                                     | Scale of the opening macro shot                               |
| wordsPerSecond     | number       | 25                                                       | Streaming rate in words per second                            |
| coolSeconds        | number       | 0.23                                                     | Seconds a word takes to cool to foreground                    |
| blur               | number       | 3                                                        | Peak motion blur in reference px                              |
| accentColor        | string       | theme primary                                            | Send button and hot word edge                                 |
| mode               | string       | "light"                                                  | Light or dark theme                                           |
| fontFamily         | string       | Inter and Source Serif                                   | Reply face and UI face                                        |
| speed              | number       | 1                                                        | Time multiplier on the frame clock                            |

## Rebuild it

1. Build one composer surface and frame it twice: macro about the button, then
   full page.
2. Settle the macro over 15 frames, accelerate the push from second 1.0, and cut
   at second 1.284.
3. Land the answer page 27 px high and ease it down over 15 frames.
4. Stream each text block word by word from its start frame; colour each word
   along a 9-step hot-to-foreground ramp by age.
5. Keep unborn words invisible but laid out so lines never reflow.
6. Pull back from 1.364 about focus 0.5 by minus 0.548 on cubic in-out over 1.1
   s, with speed-derived blur.
7. Land four empty cards 3.5 frames apart from second 2.642, fill each 4 frames
   later, and slide the composer up over 12 frames.
8. Hold the finished page to frame 150 under the slow linear idle push.

## Pitfalls

- Crossfading or transitioning at the cut; it is one frame wide and lands on the
  push's fastest frame.
- Removing unborn words from layout; the reflow shifts every standing word.
- Fading words in; a word arrives at full accent and only its colour moves
  after.
- Centring the pullback on the frame; the focus sits above the top edge so the
  page rises as it shrinks.
- Stopping the camera dead after the pullback; it keeps creeping back up to 1 at
  a linear rate.
