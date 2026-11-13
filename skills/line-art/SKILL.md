---
name: line-art
description:
  Use when building an animated line-art (ink, pen, hand-drawn) illustration,
  character, walk cycle, street or day-night scene, or exporting one to SVG, GIF
  or video, with TolongLabs' collections/line-art library.
metadata:
  audience: checkout
---

# Line Art

Build ink-on-paper SVG animation with
[collections/line-art](../../collections/line-art/README.md). The README is the
API reference: read it, and the scene in `demo/scenes.ts`, before writing
anything.

## Steps

1. **Pin the look.** Choose pen weight, paper, figure scale and one or two flat
   accent colours. Done when each is a concrete value.
2. **Set up.** Copy `src/` into the project, or import it by path. Done when a
   blank `stage()` renders in the target page.
3. **Build one piece first**: one character or one corner of the scene. Render
   it with `toSVG()` and show it, beside the reference if there is one. Done
   when the user approves it. A full set built in one pass comes back generic.
4. **Compose.** Characters are `Figure` = body plan + `Part[]` (or a `CAST`
   preset). Animals are `Animal`. Scenery is strokes drawn once with `.keep()`.
   Time of day comes from `palette(τ)` + `applyPalette()`. Pointer wind comes
   from `wind()` + `bindPointerWind()`. Make the scene take a `Surface`, so the
   same code runs live and headless.
5. **Verify** (below). Done when every check passes on rendered frames, not on
   source.
6. **Export** if asked: frames → `toSVG({ width })` → ffmpeg. Copy the encoder
   settings from `scripts/previews.ts`.

## Rules

- **Solved motion.** Move walkers only through `Figure.update()`
  (`gait.speed × scale`). Gestures go through `body.reach()` and keyed
  `beats()`. Anything that hangs or trails uses `spring()` / `pendulum()`.
  Free-running sines on a body read as procedural.
- **Garments from the skeleton.** A new part reads `Skeleton` joints (forward
  knee, ankles, hands) so the cloth moves with the stride.
- **Faceless figures.** Character comes from hair, hats, props and gait.
- **Reactions, not UI.** Clicks make the world respond (wave, wag, light on) and
  return to idle by themselves. Controls live outside the card.
- **New means new.** When asked for something "like this", keep the medium and
  timing feel; invent the characters, places and props.
- **Natural pace.** When a day is compressed, compress arrivals and the sky;
  gaits keep their real speed.

## Verify

Render headless frames (`headlessSurface()`, fixed `dt = 1/60`) and look at
crops at full size:

- planted feet hold still against the ground; the leading leg draws on top
- the body rises over the planted foot (walk) or flies (run); arms alternate
- garments open and close with the stride; bags and scarves lag, then settle
- every interaction, stepped at start, middle and end, returns to idle
- τ = 0.3, 0.5, 0.72, 0.76, 0.85, 0.95: contrast holds except at the brief ink
  flip, and lights come on one by one
- `bun run --cwd collections/line-art test` and
  `bun run --cwd collections/line-art typecheck` pass
