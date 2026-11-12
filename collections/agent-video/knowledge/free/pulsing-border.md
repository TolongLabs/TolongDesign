---
slug: pulsing-border
title: Pulsing Border
tier: free
category: effects
evidence: source
demo: 960x540 at 30 fps, 180 frames (6.0 s)
length_30fps: 180
palette: light none, dark none, accent #266DF0
used_in: none
---

# Pulsing Border

> A transparent glowing frame that breathes around the scene edges while a
> response streams.

## What it shows

Nothing enters and nothing leaves. A soft two-color glow hugs the frame edges
and pulses continuously over whatever plays beneath it, since the layer is
transparent by default. It runs as long as it is mounted and loops seamlessly.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                             | Curve            |
| ----- | --------------- | -------------------------------------------------------------------------------------- | ---------------- |
| 1     | 0–180           | Glow breathes around the edges on a shader clock of (frame/fps) times speed times 1000 | linear; (source) |
| 2     | 0–180           | Underlying scene plays through untouched beneath the transparent layer                 | hold; (source)   |

## Techniques

- `custom: ShaderBorder`: WebGL border pulse with roundness 0.08, thickness
  0.06, intensity 0.15 and bloom 0.2, clocked deterministically from the current
  frame (source)
- `Stage`: transparent full-frame layer that composites over any content without
  painting a ground (source)

## Props to expose

| Prop       | Type     | Default      | Purpose                                                       |
| ---------- | -------- | ------------ | ------------------------------------------------------------- |
| speed      | number   | 0.6          | Pulse rate driving the shader clock                           |
| colorBack  | color    | #00000000    | Layer background; transparent so content shows through        |
| colors     | string[] | glow A and B | Shader palette override                                       |
| glowColorA | color    | #266DF0      | First glow color; defaults to the primary token lifted to rgb |
| glowColorB | color    | #6D9BF5      | Second glow color; primary mixed 0.35 toward the page         |
| roundness  | number   | 0.08         | Border corner roundness                                       |
| thickness  | number   | 0.06         | Border thickness                                              |
| intensity  | number   | 0.15         | Glow intensity                                                |
| bloom      | number   | 0.2          | Glow spread                                                   |
| theme      | object   | —            | Design-token overrides                                        |
| mode       | select   | —            | light or dark token source                                    |

## Rebuild it

1. Mount an absolute transparent layer over the scene sized to the composition.
2. Drive the shader clock from the current frame as (frame/fps) times speed
   times 1000 so renders are frame-exact.
3. Resolve both glow colors to plain rgb since the shader has no oklch support.
4. Gate the first render behind delayRender until the shader reports ready.
5. Hold the pulse for the full 180 frames with no entrance or exit.

## Pitfalls

- Letting the shader run on a wall clock instead of the frame clock breaks
  frame-exact renders.
- An opaque backing color hides the scene the border is supposed to float over.
- Passing oklch token strings straight into WebGL produces wrong colors; convert
  to rgb first.
- Releasing the render before the shader mounts drops the effect from the first
  frames.
