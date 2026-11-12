---
slug: snap-cn-ui
title: snap-cn-ui primitives
tier: free
category: ui-primitives
evidence: source
demo: none
length_30fps: 120
palette: light #FAF9F6, dark #0A0A0B, accent #3072DB
used_in: none
---

# snap-cn-ui primitives

> The shared theme, timeline math, caret, and input atoms that scene components
> paint from. Install it before any scene.

## What it shows

This item ships no film of its own. It is the kit underneath the scenes: a
shadcn token set in concrete values, frame maths for typewriters and state
steps, easing and spring tokens, a deterministic blinking caret, and a
timeline-driven input field. Scenes call the theme hook for colours, the
timeline helpers for reveal counts and step state, and mount the caret and input
atoms directly. The caret and input previews each run 120 frames.

## Timeline

| Phase        | Frames (30 fps) | What moves                                                                                            | Curve              |
| ------------ | --------------- | ----------------------------------------------------------------------------------------------------- | ------------------ |
| Type         | caller-paced    | useTypewriter reveals characters at 20 per second by default from a start frame (source)              | linear (source)    |
| Blink        | continuous      | The caret toggles opacity 1 and 0 each half period at 1 blink per second by default (source)          | step (source)      |
| State tween  | at–at+8         | useStateTransition walks idle, hover, active, typing, blur, invalid over 8 frames by default (source) | out cubic (source) |
| Input ring   | same window     | The input ring grows 0 to 3 px while border, ring, and background colours mix in oklch (source)       | out cubic (source) |
| Value reveal | same window     | The input value wipes in by character count while the placeholder fades out (source)                  | out cubic (source) |

## Techniques

- `Typewriter`: revealCount and revealedText map a frame to a character count at
  a caller-set rate (source)
- `Caret`: a pure function of the current frame; fixed pixel size with a
  deterministic blink and no timers (source)
- `Composer`: the input atom renders six shadcn states as tweened styles, with
  caret heights 14, 17, and 19 px by size (source)
- `custom: token-paint`: every colour resolves through concrete theme hex mixed
  in oklch, never a CSS variable (source)

## Props to expose

| Prop            | Type                      | Default               | Purpose                                                                  |
| --------------- | ------------------------- | --------------------- | ------------------------------------------------------------------------ |
| theme           | Partial<SnapCnTheme>      | light shadcn set      | Token overrides; background #FAF9F6, foreground #141414, primary #3072DB |
| mode            | "light" \| "dark"         | "light"               | Which token base to paint from; dark page is #0A0A0B                     |
| fontFamily      | string                    | —                     | Face label from the fonts allowlist; unset keeps each scene's own face   |
| color           | string                    | currentColor          | Caret bar colour                                                         |
| width           | number                    | 2                     | Caret bar width in px                                                    |
| height          | number                    | 18                    | Caret bar height in px                                                   |
| blink           | boolean                   | false                 | Blink the caret instead of holding it solid                              |
| blinkPerSecond  | number                    | 1                     | Caret blink rate                                                         |
| state           | InputState                | "idle"                | One of idle, hover, active, typing, blur, invalid                        |
| value           | string                    | "remotion@snapcn.dev" | Input value, revealed by character count                                 |
| placeholder     | string                    | "you@example.com"     | Placeholder shown until the value reveals                                |
| size            | "sm" \| "default" \| "lg" | "default"             | Input scale; caret height follows it                                     |
| primary         | string                    | —                     | Accent override folded into the theme                                    |
| speed           | number                    | 1                     | Time multiplier on every schedule                                        |
| defaultDuration | number                    | 8                     | Frames each state transition takes                                       |

## Rebuild it

1. Mirror the shadcn token set as concrete hex strings for light and dark, with
   primary #3072DB in both.
2. Write the timeline helpers pure: framesFor, revealCount, revealedText,
   useTypewriter, useCurrentState, useStateTransition.
3. Ship the easing tokens out, in, inOut as cubics and the snappy, soft, bouncy
   spring configs.
4. Build the caret as a frame-deterministic inline-block with the half-period
   blink math.
5. Build the input as shadcn classes plus tweened styles only for ring width,
   reveals, and mixed colours.
6. Tween state changes through easings.out over 8 frames with oklch colour
   mixing.

```tsx
<SnapCnUIProvider theme={{ primary: '#3072DB' }} mode="dark">
  <Input state="typing" />
</SnapCnUIProvider>
```

## Pitfalls

- Reading var(--token) resolves to nothing under the headless renderer; ship
  concrete values.
- Animating input states with classes alone drops the 300 ms tween the component
  exists for.
- Letting the caret push layout shifts every glyph downstream; keep it
  zero-width.
- Measuring type with offsetTop rounds to whole pixels; use
  getBoundingClientRect for sub-pixel work.
- Leaving hinting on re-snaps stems mid-scale; set geometricPrecision on scaled
  type.
