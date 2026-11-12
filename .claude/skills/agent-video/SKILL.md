---
name: agent-video
description:
  Use when making a launch film, release video, app launch or product video in
  Remotion, when rebuilding or studying a snapcn template or component, or when
  adding a scene to TolongLabs' collections/agent-video kit.
---

# Agent Video

Make 20 to 40 second launch films with
[collections/agent-video](../../../collections/agent-video/README.md). A film is
a `TemplateSpec`: an ordered list of beats, each one scene kind at a frame
count, with its copy in `props`. The README is the API and command reference;
[knowledge/system.md](../../../collections/agent-video/knowledge/system.md) is
the house style (acts, cuts, accent, motion rules). Read both before writing.

## Steps

1. **Pin the brief.** Product name, the one problem it solves, the moment only
   it can deliver, one number you can prove, the closing line, the accent. Done
   when each is a concrete string or token; never invent product labels or
   numbers.
2. **Pick the closest template** in `src/templates/` by story shape:
   `launch-film` (claim, work, tap, offer, proof), `ask-agent` (chat-first),
   `whats-new` (release), `app-launch` (phone app), `why-switch` (against the
   old way). Done when every beat of the brief maps to a beat of the template,
   or is marked new.
3. **Copy and fill it.** New file, new `id`, every string in `props` rewritten
   from the brief (`copySlots(spec)` lists them). Keep paper and ink alternating
   and beats near their reference length. Done when
   `bun test collections/agent-video` passes.
4. **Build missing beats.** Find the beat's role in `knowledge/system.md`, read
   the closest teardown in `knowledge/templates/`, `knowledge/free/` or
   `knowledge/pro/`, and write a scene from `src/kit/` primitives following the
   scene contract in the README. Register it in `src/scenes/kinds.ts` and
   `src/scenes/index.tsx`. Done when `bun run agent-video:typecheck` is clean.
5. **Render and look.** `bun run agent-video:previews -- --only <id>`, then open
   `media/<id>.sheet.png`. Done when every beat reads at phone size, nothing
   clips or overlaps, and the accent appears only on the emphasised word, the
   active control and the number.
6. **Ship.** `bun run agent-video:render -- <id> out/<id>.mp4`, one composition
   per aspect ratio. Done when the mp4 plays through and its last frame is the
   lockup.

## Gotchas

- Scenes are pure functions of the frame: timings via `f(n)` from `useBeat`,
  randomness via `seeded`, never component state or CSS transitions.
- Templates are pure data; the root `bun test` imports them without React.
- The knowledge docs tag facts `(source)`, `(observed)` or `(inferred)`; check
  an inferred number on a render before relying on it.
- snapcn's copy and brand stay out of our films; rebuild the idea, write our own
  words.
