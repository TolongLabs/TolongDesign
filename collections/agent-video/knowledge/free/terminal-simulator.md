---
slug: terminal-simulator
title: Terminal Simulator
tier: free
category: screens
evidence: source+film
demo: 960x540 at 60 fps, 400 frames (6.67 s)
length_30fps: 200
palette: light none, dark #000000, accent #3C4175
used_in: none
---

# Terminal Simulator

> A camera flies over one dark world: headline, install command, then a typing
> terminal.

## What it shows

A headline fades in word by word on black. The camera creeps, then whips to a
package-manager panel where the install command types itself with a blinking
block. The camera pushes slowly as it types, pulls back descending, and punches
onto a green-barred terminal. Log lines burst in chunk by chunk with
freeze-frame pauses, the buffer scrolling one row per line, and a block cursor
blinks at the prompt.

## Timeline

| Phase | Frames (30 fps) | What moves       | Curve                                                                                    |
| ----- | --------------- | ---------------- | ---------------------------------------------------------------------------------------- |
| 1     | 0-22            | Intro lands      | Words fade in staggered 4 frames with blur; Easing.out cubic (source)                    |
| 2     | 22-40           | Creep            | Camera drifts right, accelerating; Easing.in quad (source)                               |
| 3     | 40-70           | Whip             | Camera flies to the command panel; Easing.bezier(0.7, 0, 0.25, 1) (source)               |
| 4     | 74-112          | Command types    | Chunked reveal plus slow push 1.55 to 1.9x; Chunked steps, inOut quad push (source)      |
| 5     | 112-138         | Pull back        | Camera zooms out and descends to the terminal; Easing.bezier(0.35, 0, 0.55, 1) (source)  |
| 6     | 138-158         | Punch in         | Camera lands on the terminal; Easing.bezier(0.75, 0, 0.3, 1) (source)                    |
| 7     | 146-200         | Lines type       | Bursty chunked reveal with step scroll; Chunked steps, no easing (source)                |
| 8     | 0-200           | Fast moves smear | Ghost copies trail at 2, 4, 6 frames back; Opacity and blur follow camera speed (source) |

## Techniques

- `Camera`: piecewise stops with per-segment easings across three fixed stations
  (source)
- `MotionBlur`: world redrawn at recent camera poses, strength ramped from focus
  speed (source)
- `Typewriter`: chunked reveal snapping up to multiples of 3 characters (source)
- `Caret`: block cursor blinking at 2 Hz on command rows (source)
- `Card`: tabbed command panel with syntax-tinted spans (source)

## Props to expose

| Prop          | Type                    | Default                                  | Purpose                                       |
| ------------- | ----------------------- | ---------------------------------------- | --------------------------------------------- |
| lines         | TerminalLine[]          | 4 demo lines                             | Terminal output with per-line delay and pause |
| intro         | string \| null          | work one step at a time, starred accents | Headline at the first station                 |
| command       | CommandSpec \| null     | npm install One Tool with 4 tabs         | Command panel at the second station           |
| background    | string                  | theme card                               | Command-panel surface                         |
| borderColor   | string                  | theme border                             | Panel hairline                                |
| theme         | Partial<SnapCnTheme>    | none                                     | Design-system token overrides                 |
| mode          | light \| dark           | dark                                     | Colour mode                                   |
| fontFamily    | string                  | none                                     | Face override                                 |
| fontSize      | number                  | 18                                       | Base size the layout scales from              |
| charsPerFrame | number                  | 2                                        | Reveal rate                                   |
| chunkSize     | number                  | 3                                        | Characters per burst                          |
| zoom          | boolean \| TerminalZoom | false                                    | Extra 2.4x landing punch                      |
| speed         | number                  | 1                                        | Playback multiplier                           |
| className     | string                  | none                                     | Extra class on the stage                      |

## Rebuild it

1. Fix three stations on one world canvas: headline, command panel, terminal
   column.
2. Resolve the shot list from which stations are present and the landing zoom.
3. Drive the camera piecewise between stops with the whip, glide, and punch
   easings.
4. Trail ghost copies of the world while the focus speed runs hot.
5. Type the command and lines with the chunked reveal from their start schedule.
6. Freeze 18 frames after lines ending in ellipsis and scroll one row per
   overflowing line.
7. Tint command words manager, subcommand, args and terminal rows by type.

## Pitfalls

- Interpolated scrolling glides; terminals snap one row per line with no easing.
- Char-by-char typing drips; the source bursts in multiples of 3.
- Per-move easings swapped between segments flatten the whip and the punch into
  one feel.
- Skipping a station without collapsing its segment leaves the camera dwelling
  on empty world.
