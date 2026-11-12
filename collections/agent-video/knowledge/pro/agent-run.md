---
slug: agent-run
title: Agent Run
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 640 frames (10.67 s)
length_30fps: 320
palette: light #F8F8F4, dark none, accent #2F72DC
used_in: none
---

# Agent Run

> A typed request, a pressed send, and an agent run that narrates each step.

## What it shows

A glowing composer opens on tinted paper. The request "Hi, I need a launch reel
for our component library. Something with the hero, the changelog, and pricing —
under 30 seconds." types itself under a colour wave that rides the caret. A
round blue send button appears once there is something to send. The shot punches
close onto the button with no travel in between. A pointer climbs to it, stops
dead, and presses. The field floods and the frame cuts to the run: a dotted rail
with one lit step at a time, each arriving from below with two lines of text —
Reads the Brief, Picks the Scenes, Sets the Timing, Renders the Cut, Writes the
Captions, Ships the Links. The transcript follows its last line to the end.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                   | Curve               |
| ----- | --------------- | ---------------------------------------------------------------------------- | ------------------- |
| 1     | 0–107           | Request types under the caret wave; card glows                               | linear (observed)   |
| 2     | 107–128         | Punch to a closeup on the send button; pointer climbs and stops dead         | hold (observed)     |
| 3     | 128–148         | Press lands; field floods; cut to the run rail                               | ease-out (inferred) |
| 4     | 148–210         | First steps arrive from below, one lit at a time                             | ease-out (observed) |
| 5     | 210–320         | Remaining steps arrive at a steady cadence; transcript follows the last line | linear (observed)   |

## Techniques

- `Stage`: tinted paper with a bloom wash behind the card (observed)
- `Composer`: glowing field with a round blue send button (observed)
- `Typewriter`: request typed at a fixed rate (observed)
- `Caret`: bar with a colour wave riding ahead of it (observed)
- `Camera`: instant punch to a closeup of the button, no travel (observed)
- `Cursor`: pointer climbing to the button and stopping dead (observed)
- `Press`: dip, flood of the field, handoff to the run (observed)
- `StepLog`: dotted rail with one lit step at a time, two lines each (observed)
- `LineDraw`: dotted rail the steps hang from (inferred)
- `Reveal`: each step arriving from below (observed)

## Props to expose

| Prop        | Type                                | Default                                                                                                                       | Purpose                                     |
| ----------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| request     | string                              | "Hi, I need a launch reel for our component library. Something with the hero, the changelog, and pricing — under 30 seconds." | Text typed into the composer (proposed)     |
| steps       | { title: string; detail: string }[] | six steps as observed                                                                                                         | Run log rows in order (proposed)            |
| stepCadence | number                              | 16                                                                                                                            | Frames between steps at 30 fps (proposed)   |
| accentColor | string                              | "#2F72DC"                                                                                                                     | Send button and lit-step colour (proposed)  |
| punchScale  | number                              | 1.9                                                                                                                           | Closeup scale on the send button (proposed) |

## Rebuild it

1. Open the glowing `Composer` and type the request under the `Caret` wave.
2. Pop the round send button in when text exists.
3. Punch the `Camera` to a closeup with no travel frames.
4. Climb the `Cursor` in, stop it dead, and `Press`.
5. Flood the field and cut to the `StepLog` rail.
6. Arrive one lit step at a time from below at a steady cadence.

## Pitfalls

- Animating the punch as a zoom instead of an instant cut.
- Letting the pointer drift during its dead stop.
- Lighting two steps at once; only one step stays lit.
- A cadence that wobbles makes the run feel hesitant.
