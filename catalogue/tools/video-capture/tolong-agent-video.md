---
name: TolongLabs Agent Video
slug: tolong-agent-video
section: Video & Capture
section_slug: video-capture
source_url: 'https://github.com/TolongLabs/TolongDesign/tree/main/collections/agent-video'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb:
  "TolongLabs' own Remotion kit and five launch-film templates, plus 155
  teardowns of snapcn templates and components."
paywall: free
pricing_summary:
  'TolongLabs collection in this repo. No cost. Remotion is free for teams of up
  to three; larger companies need a Remotion company licence.'
open_source: false
license: proprietary
category_tags:
  [
    remotion,
    launch-video,
    agent-video,
    video-templates,
    kinetic-typography,
    product-demo,
    teardown,
    motion-blur
  ]
best_for:
  [
    launch films,
    agent product announcements,
    release videos,
    app launch videos,
    studying video templates
  ]
stack: [react, remotion, typescript, bun]
execution_mode: package
surface: [video]
status: active
agent_friendly: true
last_verified: 2026-11-13
---

# TolongLabs Agent Video

> TolongLabs' own Remotion kit for agent-product launch films: five template
> films as data, the scenes and primitives they are built from, and 155
> teardowns of the snapcn templates and components that inspired them.

## At a glance

| Field          | Value                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| Source         | [collections/agent-video](../../../collections/agent-video/README.md)     |
| Paywall        | **Free**: internal collection                                             |
| Open source    | No: proprietary; source visible in this public repo                       |
| Type           | Remotion kit, template films and a teardown knowledge base                |
| Works with     | Remotion 4.0.539, React 19, Bun                                           |
| Best for       | Launch films, release videos, app launches, agent and chat UI shots       |
| Agent-friendly | Yes: templates are data, pure tests validate them, a skill drives the kit |

## What it is

A collection in this repo. `src/` holds a Remotion kit: pure motion maths and
tokens, primitives (directional motion blur, a camera, typewriter, word drum,
outline type, chat bubbles, a composer, a scripted cursor, phone and window
frames, halftone and radial-bloom backdrops, benchmark bars), scenes built from
them, and five template films written as `TemplateSpec` data: `launch-film`,
`ask-agent`, `whats-new`, `app-launch` and `why-switch`.

`knowledge/` holds 155 teardowns: all 10 snapcn template films beat by beat, 63
free components from their MIT source, and 82 Pro components from their public
demo films. Each gives the timeline in frames at 30 fps, techniques in the kit's
vocabulary, props, rebuild steps and pitfalls, with every fact tagged source,
observed or inferred. `knowledge/system.md` is the measured system behind the
films: acts, cut grammar, accents and motion rules.

## Paywall and pricing

- **Free:** everything; it is TolongLabs' own code and research.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** our code. Remotion's own licence applies to
  rendering: free for individuals and companies of up to three people.

## How to use

1. Install the kit once, then open the studio:

```bash
bun install --cwd collections/agent-video
bun run --cwd collections/agent-video demo
```

2. Copy `collections/agent-video/src/templates/launch-film.ts`, change `id`,
   `accent`, `brand` and the copy in each beat's `props`, and add it to
   `src/templates/index.ts`.
3. Run `bun run --cwd collections/agent-video test`; it validates beat ids,
   frame counts, scene kinds, copy length and film length.
4. Render a contact sheet, check it, then render the film:

```bash
bun run --cwd collections/agent-video previews -- --only launch-film
bun run --cwd collections/agent-video render -- launch-film out/launch-film.mp4
```

5. For a beat the kit lacks, read the matching teardown in `knowledge/` and
   build a scene with the primitives; register it in `src/scenes/kinds.ts` and
   `src/scenes/index.tsx`.

## Examples

- [Launch film contact sheet](https://github.com/TolongLabs/TolongDesign/blob/main/collections/agent-video/media/launch-film.sheet.png):
  seven beats, ink and paper acts, coral accent.
- [Template teardowns](https://github.com/TolongLabs/TolongDesign/blob/main/collections/agent-video/knowledge/README.md):
  all 10 snapcn films with beat sheets and rebuild steps.
- [The system](https://github.com/TolongLabs/TolongDesign/blob/main/collections/agent-video/knowledge/system.md):
  measured acts, cuts, accents and motion rules across 104 beats.

## When to use it

- Use it for a 20 to 40 second launch, release or app film where the product is
  an agent, a chat UI or an app, and you want to own the code.
- Use the teardowns to design a new beat or to pick a snapcn component.
- Skip it for a screen-recording-led demo ([Screen Studio](./screen-studio.md))
  or when Pro templates are worth buying ([snapcn](./snapcn.md)).

## Agent notes

- Skill: `skills/agent-video/SKILL.md` (mirrored for each harness through
  `.claude/skills` and `.agents/skills`).
- Templates are pure data; never put React in `src/templates/`.
- Scenes must be pure functions of the frame: no state, no effects, no
  `Math.random` (use `seeded`).
- The root `bun test` runs the collection's pure tests without its install;
  rendering needs `bun install --cwd collections/agent-video`.
- Canvas 1920x1080 at 30 fps; body text 40 px or more.

## Alternatives in this repo

- [snapcn](./snapcn.md): the commercial registry this was studied from.
- [Remocn](./remocn.md): free MIT Remotion components and shaders.
- [Remotion](./remotion.md): the framework.

## Sources

- [Collection README](https://github.com/TolongLabs/TolongDesign/blob/main/collections/agent-video/README.md):
  checked 2026-11-13
- [snapcn site](https://snapcn.dev/): checked 2026-11-12
- [snapcn templates page](https://snapcn.dev/docs/templates): checked 2026-11-12
