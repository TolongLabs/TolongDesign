---
slug: agent-tools
title: Agent Tools
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 644 frames (10.73 s)
length_30fps: 322
palette: light #F4F4F4, dark #000000, accent #C7694C
used_in: none
---

# Agent Tools

> A spark-written hook, a tool-granting composer, and a handoff to the answer.

## What it shows

A rust asterisk spark sits alone. The line "Instantly turn components into
videos." writes word by word, each new word arriving in accent and setting to
ink behind it. The line whips away on horizontal blur and the next line writes
back the other way: "Let's ship something today", the spark walking left and
laying words down behind it. A composer fades up underneath. A pointer arrives,
presses into the field, and the prompt "Hey — cut a 30-second launch film from
my snapcn scenes and the product screenshots" types itself. The attach menu
drops from the plus, the connectors submenu opens beside it, and four switches —
Design files, Docs, Screen recordings, Analytics — flip on one at a time. The
pointer leaves for send. The reply hands off to a chat transcript beside a media
collage.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                     | Curve               |
| ----- | --------------- | ------------------------------------------------------------------------------ | ------------------- |
| 1     | 0–43            | Spark mark; first line writes word by word, accent to ink                      | linear (observed)   |
| 2     | 43–64           | Line whips out on horizontal blur; second line writes back, spark walking left | ease-in (observed)  |
| 3     | 64–128          | Composer fades up; pointer presses; prompt types                               | linear (observed)   |
| 4     | 128–215         | Attach menu drops; connectors submenu opens; four toggles flip in sequence     | ease-out (observed) |
| 5     | 215–258         | Pointer travels to send; message ships                                         | ease-out (observed) |
| 6     | 258–322         | Reply handoff: chat transcript beside a media collage                          | ease-out (observed) |

## Techniques

- `Stage`: light paper, single act throughout (observed)
- `SplitText`: word-by-word writing with per-word accent arrival (observed)
- `TextSwap`: first line replaced by the second, written back the other way
  (observed)
- `MotionBlur`: horizontal blur on the whip exit (inferred)
- `Composer`: field with plus, model tag, mic, and send (observed)
- `Cursor`: hand pointer pressing the field, opening menus, leaving for send
  (observed)
- `Typewriter`: fixed-rate prompt typing (observed)
- `Press`: field press and menu-opening taps (observed)
- `Card`: attach menu and connectors submenu panels (observed)
- `custom: ToggleSwitch`: small on-off switch flipping per connector row, one at
  a time (observed)
- `ChatBubble`: reply transcript the film hands off to (observed)
- `Collage`: media grid beside the transcript (observed)

## Props to expose

| Prop        | Type     | Default                                                                               | Purpose                                            |
| ----------- | -------- | ------------------------------------------------------------------------------------- | -------------------------------------------------- |
| hookLines   | string[] | ["Instantly turn components into videos.", "Let's ship something today"]              | Spark-written lines before the composer (proposed) |
| prompt      | string   | "Hey — cut a 30-second launch film from my snapcn scenes and the product screenshots" | Text typed into the composer (proposed)            |
| connectors  | string[] | ["Design files", "Docs", "Screen recordings", "Analytics"]                            | Toggle rows switched on in order (proposed)        |
| accentColor | string   | "#C7694C"                                                                             | Spark, fresh-word, and send colour (proposed)      |

## Rebuild it

1. Write the first hook line with `SplitText`, arriving each word in accent.
2. `whip` it out on horizontal `MotionBlur`; write the second line back the
   other way.
3. Fade the `Composer` up; drive the `Cursor` in and `Press` the field.
4. Type the prompt, drop the attach `Card`, and open the connectors panel.
5. Flip each `custom: ToggleSwitch` on in sequence.
6. Send, then hand off to the `ChatBubble` transcript and `Collage`.

## Pitfalls

- Typing the hook at character rate; it must land word by word.
- Fading the first line out instead of whipping it on blur.
- Flipping all toggles at once instead of one at a time.
- Showing the answer here; this film hands off to the chat component.
