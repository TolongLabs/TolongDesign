---
slug: word-captions
title: Word Captions
tier: free
category: captions
evidence: source+film
demo: 960x540 at 60 fps, 192 frames (3.2 s)
length_30fps: 96
palette: light #F4F4F4, dark #101414, accent none
used_in: none
---

# Word Captions

> Burned-in word captions in channel styles with the spoken word popping. Use it
> for talking-head footage that needs readable subtitles.

## What it shows

The demo runs the boxed look: white Roboto on a solid black box, low on the
frame. Pages arrive as short phrases and each fills the box line by line. The
first page holds for most of the film, then cuts to the next phrase near the
end. Nothing moves except the page swaps; the caption sits still and reads.
Other presets swap the box for outlined heavy type with a springing accent word.

## Timeline

| Phase       | Frames (30 fps)     | What moves                                                                                  | Curve                                               |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Page in     | start–start+3       | New page opacity fades 0 to 1 over 3 frames (source)                                        | linear (source)                                     |
| Active word | word.start–word.end | Spoken word scales to the preset pop on a spring, pivoted on the measured baseline (source) | spring damping 11, stiffness 190, mass 0.7 (source) |
| Page hold   | between beats       | Current page sits static; unspoken words stay ink white (source)                            | hold (source)                                       |
| Page change | at group boundary   | Old page cuts out; new page fades in over 3 frames (source)                                 | linear (source)                                     |
| Demo beats  | 3–70, 73–96         | First phrase holds, then cuts to the second phrase near frame 70 (observed)                 | hold (observed)                                     |

## Techniques

- `Reveal`: each page fades in over 3 frames; the spoken word scale-pops to
  1.06–1.14 depending on preset (source)
- `OutlineType`: heavy outside stroke via paint-order stroke fill, 0 to 0.1 of
  font size by preset, so stems keep full width (source)
- `Pill`: the clean preset wraps the line in a quiet rounded scrim instead of
  outline or box (source)
- `custom: line-box`: the boxed look paints white Roboto on a solid black box
  cloned per line with box-decoration-break (source)
- `Stage`: the caption anchors to the safe-area bottom inset, 8 percent for
  16:9, 11 for 1:1, 20 for 9:16 (source)

## Props to expose

| Prop          | Type                    | Default                     | Purpose                                           |
| ------------- | ----------------------- | --------------------------- | ------------------------------------------------- |
| captions      | Caption[]               | —                           | Word captions in ms, the Whisper-shaped input     |
| srt           | string                  | —                           | Subtitles pasted in; cues split into words        |
| words         | CaptionWord[] \| string | demo sentence               | Frame-timed words, or a string paced evenly       |
| preset        | CaptionPreset           | "boxed"                     | One of boxed, youtube, beast, hormozi, pop, clean |
| maxWords      | number                  | preset default              | Words per page cap                                |
| maxChars      | number                  | preset default              | Character budget keeping a page to 1–2 lines      |
| pageBreakMs   | number                  | 420                         | Pause that starts a new page, in ms               |
| groupSize     | number                  | 0                           | Fixed words per beat when set; pages otherwise    |
| activeStyle   | CaptionActiveStyle      | "pop"                       | pop, highlight, or color for the spoken word      |
| aspect        | CaptionAspect           | "16:9"                      | Safe-area preset for the frame shape              |
| maxWidth      | number                  | 86 percent of width         | Caption block width cap in px                     |
| fontSize      | number                  | 0                           | 0 means the preset decides from the short side    |
| textColor     | string                  | theme foreground            | Caption ink                                       |
| pillColor     | string                  | 55 percent theme background | Backdrop pill; empty string hides it              |
| accentColor   | string                  | "#FFE81F"                   | Active-word accent for highlight and color styles |
| accentCycle   | string[]                | green, yellow, red, blue    | Colours the hormozi block cycles through          |
| strokeColor   | string                  | "#000000"                   | Outline colour                                    |
| strokeRatio   | number                  | preset default              | Outline width as a fraction of font size          |
| uppercase     | boolean                 | preset default              | Force upper case                                  |
| framesPerWord | number                  | 14                          | Pacing for a plain-string transcript              |
| fontWeight    | number                  | 0                           | 0 means the preset decides                        |
| speed         | number                  | 1                           | Time multiplier                                   |
| theme         | Partial<SnapCnTheme>    | —                           | Design-token overrides                            |
| mode          | "light" \| "dark"       | "dark"                      | Caption scrims default to dark                    |
| fontFamily    | string                  | —                           | Face label; overrides theme.fontFamily            |
| className     | string                  | —                           | Class for the outer wrapper                       |

## Rebuild it

1. Resolve input priority: captions ms, then srt, then frame-timed words, then a
   paced string at 14 frames per word.
2. Group words into pages by maxWords, maxChars, and the pause gap; fixed
   groupSize bypasses this.
3. Size type at 6 to 12.5 percent of the short side with Montserrat 700–900,
   Roboto for boxed.
4. Draw the stroke first and the fill over it with paint-order, never
   webkit-text-stroke alone.
5. Pop the spoken word on the spring pivoted on the measured baseline, never the
   box middle.
6. Pin the block to the aspect bottom inset and fade each page in over 3 frames.
7. Hold pages static between beats; swap on a cut, not a crossfade.

## Pitfalls

- Centring the stroke on the glyph eats the letterform; fill must paint over the
  stroke.
- Pivoting the pop on the box bottom drags the word down the pixel grid as it
  scales.
- Sizing from frame height instead of the short side shrinks captions to
  subtitles on 9:16.
- Setting beat gaps in em welds words together; columnGap needs px against the
  real font size.
- Blocking the Player on the baseline measurement strands the preview on
  StrictMode remounts.
