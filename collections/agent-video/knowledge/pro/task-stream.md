---
slug: task-stream
title: Task Stream
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 476 frames (7.93 s)
length_30fps: 238
palette: light #F4F4F4, dark none, accent none
used_in: none
---

# Task Stream

> An agent task list that streams in and ticks off one row at a time.

## What it shows

"Building your video >" writes itself word by word at top left. A thin rail with
a spinner drops below it. Each task streams in word by word beside an open
circle: "Installing snapcn components", then "Composing the launch scene", then
"Rendering the final cut". A blue band sweeps each row while it runs. The circle
flashes and draws into a check before the next row starts. The camera opens
close on the first row and pulls back as the list grows. All three checks hold
at the end.

## Timeline

| Phase            | Frames (30 fps) | What moves                                                        | Curve                                      |
| ---------------- | --------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| Heading          | 0-16            | "Building your video >" writes word by word                       | linear word clock (observed)               |
| Task one streams | 16-48           | Row one words fade up and drift into place                        | ease-out per word (observed)               |
| Task one runs    | 48-79           | Blue band sweeps row, spinner glows, check draws and cools to ink | sweep linear, check pop (inferred)         |
| Task two         | 79-143          | Row two streams, runs, and checks the same way                    | same word clock and sweep (observed)       |
| Task three       | 143-206         | Row three streams, runs, and checks while camera pulls back       | same word clock, slow pull-back (observed) |
| Settle           | 206-238         | Full heading plus three checked rows holds still                  | hold (observed)                            |

## Techniques

- `Stage`: flat light field with a thin vertical rail (observed)
- `Typewriter`: heading and each task line arriving word by word (observed)
- `StepLog`: spinner row per task on a shared rail with staggered entry
  (observed)
- `Checklist`: open circle to glowing check that draws and settles to ink
  (observed)
- `Highlight`: blue band sweeping the active row while it runs (observed)
- `Camera`: slow pull-back from the first row to the whole list (inferred)

## Props to expose

| Prop           | Type     | Default                 | Purpose                                                     |
| -------------- | -------- | ----------------------- | ----------------------------------------------------------- |
| heading        | string   | "Building your video >" | Title above the rail (proposed)                             |
| tasks          | string[] | 3                       | Task lines in run order (proposed)                          |
| wordsPerSecond | number   | 8                       | Streaming rate for heading and rows (proposed)              |
| runFrames      | number   | 30                      | Frames each task spends running before it checks (proposed) |
| checkColor     | string   | "#3B82F6"               | Flash and sweep blue for the active row (proposed)          |

## Rebuild it

1. Set a light `Stage` and write the heading with a `Typewriter`.
2. Drop the `StepLog` rail and open the first spinner with a `Pill`-free circle.
3. Stream each task row word by word with a small drift-up `Reveal`.
4. Sweep a `Highlight` band across the active row while it runs.
5. Pop the circle into a drawn check, cool it from blue to ink.
6. Pull the `Camera` back as rows two and three join, then hold the checked
   list.

## Pitfalls

- Typing rows letter by letter instead of word by word breaks the measured
  cadence.
- Leaving finished rows in blue instead of settling to ink keeps everything
  "active".
- Zooming per row instead of one slow pull-back makes the list pump.
