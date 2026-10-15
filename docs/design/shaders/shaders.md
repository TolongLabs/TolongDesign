---
name: Shaders
slug: shaders
section: Shaders
section_slug: shaders
source_url: 'https://github.com/shader-effects-inc/shaders'
designeer_url: 'https://github.com/shader-effects-inc/shaders'
designeer_blurb: WebGPU components for React, Vue, Svelte, Solid, JS and Framer.
paywall: freemium
pricing_summary: >-
  The MIT package and scratch-built or free-designated exports are free for
  commercial use; Pro content requires a plan ($199/year; Lifetime price not
  published).
open_source: true
license: MIT
category_tags: [webgpu, shaders, components, graphics, canvas]
best_for: [webgpu effects, shader backgrounds, interactive graphics]
stack: ['react', 'vue', 'svelte', 'solid', 'javascript', 'framer']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-11
---

# Shaders

> WebGPU components for React, Vue, Svelte, Solid, JS and Framer. Use it for
> WebGPU effects in frontend apps.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [GitHub](https://github.com/shader-effects-inc/shaders)         |
| Paywall        | **Freemium** — package is free; Pro is $199/year                |
| Open source    | Yes — MIT for the package, engine, components, bindings and CLI |
| Type           | WebGPU component library and hosted design editor               |
| Works with     | React, Vue, Svelte, Solid, JavaScript and Framer                |
| Agent-friendly | Yes — typed API, CLI, MCP, agent skill and llms.txt             |

## What it is

Shaders is a WebGPU effects library from Shader Effects, Inc. One `shaders`
package exposes shared components to React, Vue, Svelte, Solid and JavaScript;
the hosted editor exports framework code, while Framer uses its plugin.

Version 4.0.4; component counts vary: pricing says 210+, docs 190+, and README
200+. Treat these as changing page counts, not a reconciled inventory.

This entry covers only `shader-effects-inc/shaders`.
[Paper Shaders](../shaders/paper-shaders.md) is a separate product and API.

## Paywall and pricing

- **Free:** the MIT package, scratch-built effects, and free-designated content
  allow commercial use under their applicable terms. The editor advertises free
  design and export; account requirements depend on the feature and are not
  exhaustively stated on the pricing page.
- **Pro:** annual $199; a Lifetime option is listed without a published price.
  It adds Pro presets and sections, version history, watermark-free HD export,
  and Pro library access through Framer, CLI and MCP. Counts conflict: pricing
  says 750+ presets; the README says 1,000+.
- **Sign-up required?** No for the npm package. Saved platform work and Pro
  access use accounts; confirm the current flow before exporting. Pro content
  requires an active subscription or Lifetime entitlement.
- **Licence for client work:** retain MIT copyright and permission notices with
  copies or substantial portions of package code. Free-designated content has
  separate commercial-use terms. Pro exports are project-scoped and cannot be
  redistributed as a library, preset pack or template; existing exports remain
  licensed for those projects after the plan ends.

Checked 2026-10-11: the hosted platform and content have separate terms; the
repository MIT licence does not cover them.

## How to use

1. Install the verified version: `bun add shaders@4.0.4`.

2. Import from the entry point for your runtime. These are peer versions
   published in the package metadata:

   | Runtime    | Import                 | Supported peer version |
   | ---------- | ---------------------- | ---------------------- |
   | React      | `shaders/react`        | React 18 or 19         |
   | Vue        | `shaders/vue`          | Vue 3.5+               |
   | Svelte     | `shaders/svelte`       | Svelte 5               |
   | Solid      | `shaders/solid`        | Solid 1.8+             |
   | JavaScript | `shaders/js`           | ESM; no framework peer |
   | Framer     | Official Framer plugin | No npm entry point     |

3. Compose layers in one `<Shader>` canvas. In Next.js, render it in a client
   component because WebGPU needs a browser:

   ```tsx
   'use client'

   import { Shader, LinearGradient, CursorTrail } from 'shaders/react'

   export const HeroEffect = () => (
     <Shader style={{ width: '100%', height: 320 }} disableTelemetry>
       <LinearGradient colorA="#0f172a" colorB="#7c3aed" />
       <CursorTrail />
     </Shader>
   )
   ```

4. In JavaScript, call
   `const shader = await createShader(canvas, { components: [{ type: 'LinearGradient', props: {} }] })`.
   Use `shader.update()` for props and `shader.destroy()` on teardown. Framework
   adapters clean up on unmount.

5. For saved designs, run `npx shaders connect` and `npx shaders install`. The
   CLI writes component files; searching is free, Pro presets require Pro.
   `npx shaders@latest install-mcp` configures an MCP client.

## Examples

- [React quickstart](https://shaders.com/docs/guide/react/quickstart) — layers a
  gradient and cursor trail, then changes a prop from a range input.
- [LinearGradient reference](https://shaders.com/docs/components/lineargradient)
  — documents real props, defaults, color spaces and framework usage.
- [JavaScript quickstart](https://shaders.com/docs/guide/js/quickstart) — shows
  canvas sizing, `createShader()`, runtime updates, resize and disposal.

The React snippet type-checks against `shaders@4.0.4` and React 19.2.0. This
verifies the API shape, not rendering, GPU performance or accessibility. No
browser render ran or live example was visually inspected.

## When to use it

- Use it for layered textures, gradients, filters or pointer-driven WebGPU
  effects with one shared API across frameworks.
- Skip it when devices need a non-WebGPU path. There is no WebGL fallback, so
  provide an HTML/CSS image or gradient. For broader 3D, compare
  [React Three Fiber](../3d/react-three-fiber.md) or
  [Three.js](../3d/three-js.md); for timeline motion, use
  [GSAP](../motion/gsap.md).
- For Paper's separate product, see
  [Paper Shaders](../shaders/paper-shaders.md).

## Agent notes

- Import through `shaders/react`, `/vue`, `/svelte`, `/solid` or `/js`; other
  exports include `shaders/core`, `shaders/std` and `shaders/config`.
- WebGPU is required. No exact browser versions or minimum GPU are published.
  Without it, the canvas stays transparent and the unavailable hook fires; its
  name varies by runtime. Provide a fallback.
- SSR needs a client boundary: React/Next uses `'use client'` or `ssr: false`,
  Vue/Nuxt uses `ClientOnly`, Svelte initializes on mount, and Solid uses
  `clientOnly` or a mounted guard.
- One `<Shader>` renders one CSS-sized canvas. The renderer caps at 60fps with a
  16.67ms budget. Rough modern-GPU estimates run from ~0–0.1ms for very light
  layers to ~1–2ms+ for heavy filters. Nesting, size and pixel density raise
  costs; these are not guarantees. Framework animations pause offscreen; JS
  rendering drops to ~1fps.
- npm metadata lists 29,453,730 unpacked bytes across 3,662 files, not browser
  bundle size. Optimized network payload is not published.
- No ARIA/screen-reader guidance or automatic reduced-motion support was found.
  Keep meaningful content in HTML; handle fallback and motion in-app.
- The License Agreement describes sampled telemetry (typically 1–5%), respects
  Do Not Track and supports `disableTelemetry`; it lists performance, component
  use, domain, browser family, device type and renderer.
- `defineShader()`/`shaders/std` support custom effects; WGSL is stable, while
  composable primitives and `HTMLInCanvas` are experimental. `HTMLInCanvas`
  needs Chrome Canary with a flag.
- Agent references: `https://shaders.com/llms.txt` and
  `https://shaders.com/llms-full.txt`; CLI `npx shaders`, MCP
  `npx shaders@latest install-mcp`.

## Alternatives in this repo

- [Paper Shaders](../shaders/paper-shaders.md) — separate shader package and
  product; do not reuse Shaders package names or licence details.
- [React Three Fiber](../3d/react-three-fiber.md) — declarative React access to
  Three.js when the project needs a broader 3D scene graph.
- [GSAP](../motion/gsap.md) — timeline animation for DOM and other frontend
  content without a dedicated WebGPU effects renderer.

## Sources

- [GitHub README](https://github.com/shader-effects-inc/shaders) and
  [v4.0.4 release](https://github.com/shader-effects-inc/shaders/releases/tag/v4.0.4)
  — checked 2026-10-11
- [npm package metadata](https://registry.npmjs.org/shaders/latest) — checked
  2026-10-11
- [Pricing](https://shaders.com/pricing),
  [License Agreement](https://shaders.com/license) and
  [Terms](https://shaders.com/terms) — checked 2026-10-11
- Docs: [Getting started](https://shaders.com/docs/guide),
  [React quickstart](https://shaders.com/docs/guide/react/quickstart),
  [JS quickstart](https://shaders.com/docs/guide/js/quickstart) — checked
  2026-10-11
- [Component index](https://shaders.com/docs/components),
  [LinearGradient](https://shaders.com/docs/components/lineargradient),
  [Performance guide](https://shaders.com/docs/guide/performance) — checked
  2026-10-11
- Framework pages: [React](https://shaders.com/react),
  [Vue](https://shaders.com/vue), [Svelte](https://shaders.com/svelte),
  [Solid](https://shaders.com/solid),
  [JavaScript](https://shaders.com/javascript) — checked 2026-10-11
- SSR guides: [React](https://shaders.com/docs/guide/react/ssr),
  [Vue/Nuxt](https://shaders.com/docs/guide/vue/ssr),
  [SvelteKit](https://shaders.com/docs/guide/svelte/ssr),
  [SolidStart](https://shaders.com/docs/guide/solid/ssr) — checked 2026-10-11
- [Browser check](https://shaders.com/check) — checked 2026-10-11; page read,
  renderer test not run
- Framework lifecycle source, checked 2026-10-11 at v4.0.4:
  [React](https://raw.githubusercontent.com/shader-effects-inc/shaders/81fd4ece5d493ca6c424a2af41f0e2c361ec8258/packages/react/src/engine/Shader.tsx),
  [Vue](https://raw.githubusercontent.com/shader-effects-inc/shaders/81fd4ece5d493ca6c424a2af41f0e2c361ec8258/packages/vue/src/engine/Shader.vue),
  [Svelte](https://raw.githubusercontent.com/shader-effects-inc/shaders/81fd4ece5d493ca6c424a2af41f0e2c361ec8258/packages/svelte/src/lib/engine/Shader.svelte),
  [Solid](https://raw.githubusercontent.com/shader-effects-inc/shaders/81fd4ece5d493ca6c424a2af41f0e2c361ec8258/packages/solid/src/engine/Shader.tsx)
