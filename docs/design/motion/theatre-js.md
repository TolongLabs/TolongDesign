---
name: Theatre.js
slug: theatre-js
section: Motion
section_slug: motion
source_url: https://www.theatrejs.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Visual motion design sequencer for DOM.
paywall: free
pricing_summary:
  '100% free and open-source; @theatre/core is Apache-2.0 and the visual
  @theatre/studio editor is AGPL-3.0 for dev mode.'
open_source: true
license: Apache-2.0
category_tags:
  [motion, animation, sequencer, timeline, visual-editor, 3d, threejs, dom]
best_for:
  [visual animation sequencing, 3d web experiences, complex choreographies]
stack: [javascript, typescript, react, threejs]
agent_friendly: true
last_verified: 2026-10-07
---

# Theatre.js

> Visual motion design sequencer for DOM. Use it to design high-production
> animations, keyframes, and Three.js scenes with an in-browser graphical
> studio.

## At a glance

| Field          | Value                                                                   |
| -------------- | ----------------------------------------------------------------------- |
| Source         | [theatrejs.com](https://www.theatrejs.com/)                             |
| Paywall        | **Free** — 100% free and open source                                    |
| Open source    | Yes — Apache-2.0 core ([GitHub](https://github.com/theatre-js/theatre)) |
| Type           | Visual motion sequencer and animation design runtime                    |
| Works with     | DOM, Three.js, React, React Three Fiber, WebGL, Canvas                  |
| Best for       | Visual animation sequencing, 3D web experiences, choreography           |
| Agent-friendly | Yes — npm packages, JSON state export, programmatic playback            |

## What it is

Theatre.js is an open-source visual animation sequencer designed for creative
developers, 3D artists, and web animators. Rather than hand-coding hundreds of
numeric keyframe timestamps and bezier curves in raw code, Theatre.js injects a
visual After-Effects-style timeline editor directly into your local development
browser.

The system is split into two complementary parts:

1. **`@theatre/studio` (The Editor):** An in-browser GUI that loads only during
   development. It features keyframe tracks, curve editors, visual property
   inspectors, and multi-track audio scrubbers. Designers and engineers visually
   drag elements, tune lighting, and refine motion curves directly in the scene.
2. **`@theatre/core` (The Runtime):** A tiny, lightning-fast runtime engine
   packaged into production builds under the Apache-2.0 licence. It plays back
   the exported JSON animation state without loading the heavy studio UI.

Theatre.js works seamlessly across both traditional HTML/DOM elements and 3D
graphics engines like Three.js and React Three Fiber (R3F), making it the
standard choice for cinematic, award-winning interactive landing pages.

## Paywall and pricing

- **Free:** 100% free for both personal and commercial projects.
  - `@theatre/core` is open source under the permissive Apache-2.0 licence.
  - `@theatre/studio` is open source under AGPL-3.0 for local development
    tooling.
- **Paid:** No subscription fees, paywalls, or commercial seat charges.
- **Sign-up required?** No sign-up required.
- **Licence for client work:** Free for commercial client builds. The AGPL-3.0
  licence applies strictly to the dev-only Studio UI; the production runtime
  shipped to users is Apache-2.0, imposing no viral copyleft restrictions on
  client repositories or commercial codebases.

Checked on 2026-10-07.

## How to use

1. Install the Theatre.js core and studio packages using Bun:

```bash
bun add @theatre/core
bun add -d @theatre/studio
```

2. Initialize the project and studio in your development entry point:

```typescript
import { getProject, types } from '@theatre/core'
import studio from '@theatre/studio'

// Only initialize the visual editor in development
if (process.env.NODE_ENV === 'development') {
  studio.initialize()
}

// Create an animation project and sheet
const project = getProject('HeroAnimation')
const sheet = project.sheet('HeroScene')

// Attach an animated object to a DOM element
const heroObj = sheet.object('HeroHeading', {
  opacity: types.number(1, { range: [0, 1] }),
  y: types.number(0, { range: [-100, 100] })
})

heroObj.onValuesChange(({ opacity, y }) => {
  const el = document.getElementById('hero-heading')
  if (el) {
    el.style.opacity = `${opacity}`
    el.style.transform = `translateY(${y}px)`
  }
})

// Play the choreographed sequence
project.ready.then(() => {
  sheet.sequence.play({ iterationCount: 1 })
})
```

3. Open your browser in development mode. Use the Theatre.js Studio timeline at
   the bottom of the screen to add keyframes, scrub playback, and export the
   final state to `state.json`.

## Examples

- [Theatre.js Official Site](https://www.theatrejs.com/) — interactive homepage
  demonstrating live 3D visual sequencing.
- [Theatre.js Documentation](https://www.theatrejs.com/docs/latest) — guides
  covering basic DOM animation, Three.js integration, and audio syncing.
- [Theatre.js GitHub Repository](https://github.com/theatre-js/theatre) — source
  code, examples directory, and community discussions.

## When to use it

- Use it when choreographing high-production landing pages with 3D models,
  camera movements, lighting changes, and HTML overlays.
- Use it when designers and developers want to collaborate visually on keyframe
  timing instead of hardcoding numeric coordinates.
- Skip it for simple UI state changes (dropdowns, modals, toast alerts); use
  Motion instead.

## Agent notes

- Official documentation URL: `https://www.theatrejs.com/docs/latest`
- Core package: `@theatre/core` (Apache-2.0)
- Studio package: `@theatre/studio` (AGPL-3.0 dev-only)
- React Three Fiber integration: `@theatre/r3f`
- Ensure `@theatre/studio` is excluded from production bundles using dynamic
  imports or environment guards.

## Alternatives in this repo

- [GSAP](../motion/gsap.md) — programmatic timeline animation engine for web
  interfaces and scroll-driven stories.
- [Motion](../motion/motion.md) — production-ready animation library for React
  and component layouts.
- [Rive](../motion/rive.md) — interactive vector animation format with state
  machine logic.

## Sources

- [Theatre.js Official Site](https://www.theatrejs.com/) — checked 2026-10-07
- [Theatre.js Documentation](https://www.theatrejs.com/docs/latest) — checked
  2026-10-07
- [Theatre.js GitHub Repository](https://github.com/theatre-js/theatre) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
