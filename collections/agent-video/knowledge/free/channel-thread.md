---
slug: channel-thread
title: Channel Thread
tier: free
category: social
evidence: source+film
demo: 960x540 at 60 fps, 220 frames (3.67 s)
length_30fps: 110
palette: light none, dark #040808, accent #714835
used_in: none
---

# Channel Thread

> A work chat filling itself in one message at a time, with typing dots and
> event-driven scrolling. Use it for team-chat proof beats.

## What it shows

The first message sits under an avatar, a bold name and a quiet timestamp. A
second message from the same person joins the group without repeating the name.
Nothing moves for a stretch. A new person's row opens, three dots pulse on the
line the message will take, the transcript scrolls once by exactly the room the
line needs, and the avatar, name and words land. The pattern repeats for the
next reply, older lines fading toward the top of the frame. The finished thread
holds still.

## Timeline

| Phase | Frames (30 fps) | What moves                                                  | Curve                                        |
| ----- | --------------- | ----------------------------------------------------------- | -------------------------------------------- |
| 1     | 0–12            | First two lines land; second joins the group, no new name   | hard cut; (source)                           |
| 2     | 12–37           | Transcript sits byte-identical still                        | hold; (observed)                             |
| 3     | 37–60           | Row opens, dots pulse, transcript scrolls 92 px once        | measured scroll table, rate-scaled; (source) |
| 4     | 60–72           | Sam's avatar, name and "Already done." land; stack rests    | hard cut, then hold; (source)                |
| 5     | 72–84           | Second row opens, dots pulse, transcript scrolls 46 px once | measured scroll table, rate-scaled; (source) |
| 6     | 84–110          | "Built it out of snapcn." lands; finished thread holds      | hard cut, then hold; (observed)              |

## Techniques

- `Stage`: dark page; the transcript is white type on black by default (source)
- `custom: ThreadRow`: avatar, bold name, timestamp and plain lines with fixed
  gaps, 37.59 name to first line, 46.01 line to line, 69.0 to the next name
  (source)
- `ChatBubble`: typing dots on the arriving line, one dot every 0.1 s, opening 3
  frames before the row paints (source)
- `Camera`: one vertical translate over laid-out-once positions; scrolls only by
  how far the newest baseline falls past the 219.48 anchor, longer moves read
  faster along the same table (source)
- `Reveal`: rows cut in with no fade; age reads through a position-based fade
  envelope that stops at 0.098, never zero (source)

## Props to expose

| Prop       | Type                      | Default              | Purpose                                                                                                            |
| ---------- | ------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| messages   | ThreadMessage[] \| string | 4-line rhea/sam demo | Conversation in order; string form splits on `\|`, each `avatar > name time > text`, text-only continues the group |
| theme      | Partial<SnapCnTheme>      | theme default        | Design token overrides                                                                                             |
| mode       | "light" \| "dark"         | "dark"               | Theme switch; dark is the measured look                                                                            |
| fontFamily | string                    | "Default"            | Typeface override                                                                                                  |

## Rebuild it

1. Lay the whole transcript out once in absolute positions from the four gap
   numbers; never re-flow it.
2. Cut each row in on its arrival frame with no fade; group same-author runs
   under one name.
3. Open a new person's row first, pulse `ChatBubble` dots for about 23 frames,
   then land avatar, name and words.
4. `Camera` scroll once per row that passes the anchor, by exactly the
   overshoot, along the measured table.
5. Fade lines only by height through the fixed envelope so old lines dim toward
   the top.
6. Hold the finished thread still for most of a second.

## Pitfalls

- Scrolling a little on every message; rows that stay above the anchor move
  nothing at all.
- Smoothing the scroll with an ease; the measured table accelerates for 4 frames
  and spends most of a second arriving.
- Anchoring the dots to the scroll; they are timed from the row opening, 3
  frames after it.
- Fading rows in on arrival; arrival is a hard cut and only position fades.
- Re-laying the stack out per frame; scroll is one translate over fixed
  positions, which is what keeps still frames identical.
