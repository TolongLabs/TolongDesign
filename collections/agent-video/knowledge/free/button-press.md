---
slug: button-press
title: Button Press
tier: free
category: cursor
evidence: source+film
demo: 960x540 at 60 fps, 252 frames (4.2 s)
length_30fps: 126
palette: light #F4F4F0, dark none, accent #3A71C2
used_in: none
---

# Button Press

> A scripted cursor walks onto a split action button, presses it, and the label
> runs to done. Use it for the deploy, publish, or send beat.

## What it shows

A split button with label, divider, and chevron fades up. A cursor climbs in
from the lower right and stops on it. The button darkens on hover, dips under
the press, and the label slides from idle to pending with a spinner. The cursor
waits on the button while it works. The label slides to done, a tick draws
itself, and the cursor leaves down and right. The done state holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                               | Curve                           |
| ----- | --------------- | -------------------------------------------------------- | ------------------------------- |
| 1     | 0–14            | Button fades and rises 12 px into place                  | cubic-bezier(0.2, 0.6, 0.35, 1) |
| 2     | 8–36            | Cursor walks two waypoints, decelerating onto the button | measured waypoints              |
| 3     | 30–36           | Button darkens 14 percent toward foreground              | linear                          |
| 4     | 36–46           | Button dips to 0.965 on a sine and returns               | linear in, sine out             |
| 5     | 38–46           | Idle label slides out, pending slides in with spinner    | cubic-bezier(0.2, 0.6, 0.35, 1) |
| 6     | 46–76           | Pending holds, spinner turns 12 degrees per frame        | linear                          |
| 7     | 76–84           | Pending slides out, done slides in                       | cubic-bezier(0.2, 0.6, 0.35, 1) |
| 8     | 80–90           | Check tick draws via dash offset 1 to 0                  | cubic-bezier(0.2, 0.6, 0.35, 1) |
| 9     | 90–108          | Cursor exits down and right                              | measured waypoint               |
| 10    | 108–126         | Done state holds                                         | hold                            |

Rows above tagged (source), except the closing hold (observed).

## Techniques

- `Cursor`: three-waypoint path with click stop at frame 36 and exit at 90
  (source)
- `Press`: 3.5 percent scale dip on the surface only, then label state change
  (source)
- `TextSwap`: labels roll 14 px over 8 frames each way at frames 38 and 76
  (source)
- `LineDraw`: tick draws over 10 frames by stroke dash offset (source)
- `custom: spinner`: 9 px arc rotating linearly while pending (source)
- `Reveal`: button enters over 14 frames (source)

## Props to expose

| Prop    | Type          | Default      | Purpose                                      |
| ------- | ------------- | ------------ | -------------------------------------------- |
| label   | string        | "Deploy"     | Idle label                                   |
| pending | string        | "Deploying…" | Working label                                |
| done    | string        | "Deployed"   | Finished label                               |
| width   | number        | 320          | Button width at 720p, scaled by frame height |
| theme   | Partial theme | undefined    | Design tokens for paint and radius           |
| mode    | light \| dark | undefined    | Theme variant                                |
| speed   | number        | 1            | Time multiplier on the frame clock           |

## Rebuild it

1. Size the button from `width`, 76 units tall, radius from the theme.
2. Walk the cursor along its waypoints and stop dead three frames before the
   press.
3. Ramp hover darken over the 6 frames before contact.
4. Dip the surface only to 0.965 on a half sine; keep the label unscaled.
5. Roll labels 14 px out and in over 8 frames at frames 38 and 76.
6. Spin the pending arc at a constant 12 degrees per frame.
7. Draw the tick by dash offset over frames 80 to 90, then hold done.

## Pitfalls

- Scaling the label with the dip makes the type boil; press the surface alone.
- The cursor must arrive before frame 36 and sit still; sliding through the
  click breaks the beat.
- Label phases slide 8 frames each way; crossfading them smears the swap.
- The spinner is linear; easing it makes the work feel uneven.
- Size the button for the longest of the three labels or the pending text wraps.
