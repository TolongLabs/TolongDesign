---
slug: prompt-zoom
title: Prompt Zoom
tier: free
category: ai-input
evidence: source+film
demo: 960x540 at 60 fps, 180 frames (3.0 s)
length_30fps: 90
palette: light #F4F4F0, dark none, accent #457FE4
used_in: none
---

# Prompt Zoom

> An assistant home screen that hard-cuts into its own input mid-sentence while
> the prompt keeps typing.

## What it shows

A serif greeting with a starburst mark sits over a field showing its
placeholder. The prompt starts typing at 18 characters per second. One frame
later the view snaps 2.547x into the caret and the sentence carries straight on
at the new size, the greeting looming large above. The finished line holds with
a blinking caret.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                 | Curve              |
| ----- | --------------- | -------------------------------------------------------------------------- | ------------------ |
| 1     | 0–11            | Greeting, placeholder field and footer rest; caret blinks on a 1.06s cycle | hold; (source)     |
| 2     | 11–30           | Prompt types at 18 chars/sec under the wide framing                        | linear; (source)   |
| 3     | 30              | Single-frame cut to 2.547x about the caret point; typing never pauses      | hard cut; (source) |
| 4     | 30–54           | Sentence finishes typing at the pushed-in size                             | linear; (source)   |
| 5     | 54–90           | Full line holds; caret blinks while idle                                   | hold; (observed)   |

## Techniques

- `Composer`: greeting, 461 by 86 field, add affordance, model readout and
  static chip row on a 810 by 450 stage (source)
- `Typewriter`: character count floored from elapsed frames at 18 per second,
  placeholder until the first lands (source)
- `Caret`: solid while a character is landing, blinking on a 1.06s cycle when
  idle (source)
- `Camera`: static 2.547x scale about focus (0.27, 0.516), toggled as a boolean
  with no ramp (source)

## Props to expose

| Prop           | Type     | Default                    | Purpose                                 |
| -------------- | -------- | -------------------------- | --------------------------------------- |
| greeting       | text     | Up late?                   | Line above the field with the starburst |
| placeholder    | text     | How can I help you today?  | Shown until typing starts               |
| text           | text     | Get me a plan for tomorrow | Prompt that types itself                |
| chips          | string[] | none                       | Static suggestion pills under the field |
| model          | text     | Auto                       | Model label in the field footer         |
| effort         | text     | Medium                     | Effort label beside the model           |
| typeStart      | number   | 0.35                       | Typing start in seconds                 |
| cutAt          | number   | 1.0                        | Cut time in seconds, mid-sentence       |
| charsPerSecond | number   | 18                         | Typing rate, as measured                |
| zoom           | number   | 2.547                      | Cut magnification, as measured          |
| focusX         | number   | 0.27                       | Cut focal point across the frame        |
| focusY         | number   | 0.516                      | Cut focal point down the frame          |
| accentColor    | color    | #266DF0                    | Starburst mark color                    |
| theme          | object   | —                          | Design-token overrides                  |
| mode           | select   | —                          | light or dark paint                     |

## Rebuild it

1. Lay out the 810 by 450 stage: greeting at y 145, field at (173, 197) sized
   461 by 86, chips at y 301.
2. Blink the caret on the 1.06s cycle until typing starts at 0.35s.
3. Reveal characters at 18 per second and keep the caret solid while the count
   is growing.
4. At 1.0s toggle the scale to 2.547 about (0.27, 0.516) on a single frame with
   no interpolation.
5. Keep typing through the cut at the same rate so one continuous action spans
   it.
6. Hold the finished line with the idle blink to 90 frames.

## Pitfalls

- Interpolating the cut over even two frames turns the snap into a zoom and the
  shot stops reading.
- Anchoring the zoom on the field center instead of the caret point misses the
  measured edges by whole pixels.
- Typing at a constant but unmeasured rate drifts the finish by a beat; 18
  chars/sec is the fitted value.
- A drop shadow on a field this size renders as a grey smear; the reference uses
  none.
