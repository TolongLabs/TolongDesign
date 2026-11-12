---
slug: click-type
title: Click Type
tier: free
category: cursor
evidence: source+film
demo: 960x540 at 60 fps, 206 frames (3.43 s)
length_30fps: 103
palette: light #F8FCFC, dark #181818, accent none
used_in: none
---

# Click Type

> A cursor flies in, clicks a prompt field, and the request types itself in
> close-up as send arms. Use it for the moment a demo starts asking.

## What it shows

A glass composer fades up on a blue wash while its placeholder writes itself. A
cursor enters from the left edge, lands in the field and clicks. The shot
hard-cuts into the field at 1.9×, anchored so the first letter stays pinned. The
real prompt types at the caret, the send button fills with ink once there is
something to send, and the caret keeps blinking after the line finishes.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                      | Curve                                     |
| ----- | --------------- | ------------------------------------------------------------------------------- | ----------------------------------------- |
| 1     | 0–12            | Composer fades up and rises 14 px                                               | cubic-bezier(0.2, 0.6, 0.35, 1); (source) |
| 2     | 4–26            | Placeholder writes itself at 1.5 chars per frame                                | linear; (source)                          |
| 3     | 6–30            | Cursor enters off-frame left, travels to the field, clicks on arrival           | in-out cubic per leg; (source)            |
| 4     | 34–34           | Hard cut into the field at 1.9×, first letter pinned                            | hard cut; (source)                        |
| 5     | 38–67           | Prompt types, one frame per char and two per space; send arms on the first char | linear; (source)                          |
| 6     | 67–103          | Finished line and armed send hold; caret blinks at 1.6 per second               | hold with blink; (observed)               |

## Techniques

- `Composer`: glass panel over a cool wash, writing surface, hint row, plus, mic
  and round send button (source)
- `Typewriter`: placeholder at 1.5 chars per frame in the wide shot, prompt at
  one frame per char with two per space in close-up (source)
- `Caret`: solid bar while typing, blinking at 1.6 per second once waiting
  (source)
- `Cursor`: two-leg scripted path from off-frame left, click ripple on arrival
  at frame 30 (source)
- `Camera`: constant 1.9× close-up pinned on the first letter, so type never
  scales while it moves (source)

## Props to expose

| Prop        | Type                 | Default                              | Purpose                                           |
| ----------- | -------------------- | ------------------------------------ | ------------------------------------------------- |
| placeholder | string               | "Describe what you want to build..." | Muted text that writes itself in the wide shot    |
| prompt      | string               | "Build me a marketing site"          | Text typed after the cut; sets the natural length |
| hint        | string               | "New suggestion"                     | Small label at the field's bottom-left            |
| accentColor | string               | theme primary                        | Wash behind the composer                          |
| theme       | Partial<SnapCnTheme> | theme default                        | Design token overrides                            |
| mode        | "light" \| "dark"    | "light"                              | Theme switch                                      |
| speed       | number               | 1                                    | Time multiplier                                   |
| className   | string               | ""                                   | Wrapper class passthrough                         |

## Rebuild it

1. Paint the `Composer`: wash, glass panel, writing surface, hint row and send
   button.
2. Fade the panel up over 12 frames while the placeholder `Typewriter` runs at
   1.5 chars per frame.
3. Fly the `Cursor` in from off-frame left and click the field at frame 30.
4. Hard-cut at frame 34 to a `Camera` 1.9× close-up with the first letter
   pinned; leave the cursor behind.
5. `Typewriter` the prompt at one frame per char, two per space, with a solid
   `Caret`.
6. Arm the send button to ink on the first typed char and blink the caret when
   the line finishes.
7. Hold the finished field 36 frames.

## Pitfalls

- Zooming with a moving camera; the close-up is one constant scale, which is
  what keeps type off the pixel grid.
- Typing spaces at one frame each; a space costs two frames and sets the whole
  length.
- Arming send before the first char lands; the button fills only once there is
  something to send.
- Carrying the cursor past the cut; it belongs to the wide shot and never enters
  the close-up.
- Blinking the caret while typing; it stays solid until the line waits.
