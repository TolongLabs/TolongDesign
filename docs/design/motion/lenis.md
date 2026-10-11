---
name: Lenis
slug: lenis
section: Motion
section_slug: motion
source_url: https://github.com/darkroomengineering/lenis
designeer_url: https://github.com/darkroomengineering/lenis
designeer_blurb: Smooth scroll as it should be.
paywall: free
pricing_summary:
  'Free, MIT-licensed core package; no paid tier or sign-up is listed for the
  core.'
open_source: true
license: MIT
category_tags: [smooth-scroll, scroll-linked-animation, gsap, react, javascript]
best_for: [scroll-linked animation, WebGL scroll sync, smooth anchor navigation]
stack: [javascript, typescript, react, vue, gsap]
agent_friendly: true
last_verified: 2026-10-11
---

# Lenis

> Smooth scroll as it should be. Reach for Lenis when a page needs coordinated
> scroll motion while keeping the browser's native scroll containers.

## At a glance

| Field          | Value                                                                                 |
| -------------- | ------------------------------------------------------------------------------------- |
| Source         | [GitHub](https://github.com/darkroomengineering/lenis)                                |
| Paywall        | **Free** — MIT-licensed core; no core paid tier is listed                             |
| Open source    | Yes — MIT ([licence](https://github.com/darkroomengineering/lenis/blob/main/LICENSE)) |
| Type           | Browser-side JavaScript smooth-scroll library                                         |
| Works with     | Vanilla JS/TS, React, Vue, Nuxt, Framer, GSAP ScrollTrigger                           |
| Best for       | Scroll-linked animation, WebGL sync, smooth anchor navigation                         |
| Agent-friendly | Yes — npm package, public source, typed API and examples                              |

## What it is

Lenis is a browser-side scroll runtime by darkroom.engineering. It coordinates
wheel, touch and programmatic movement through one loop while using the
browser's native scroll positions, not whole-page CSS transforms. This suits
scroll-linked DOM, WebGL and GSAP work.

The `lenis` package exports core and subpaths such as `lenis/react`,
`lenis/vue`, `lenis/nuxt` and `lenis/snap`. The core is a scroll tool, not an
animation timeline. Its MIT licence and free status do not cover separate
templates.

## Paywall and pricing

- **Free:** The public `lenis` package is free under MIT.
- **Paid:** No core paid tier or price is listed.
- **Sign-up required?** No sign-up is listed for the public package.
- **Licence for client work:** MIT permits commercial use. Retain the copyright
  and permission notices in copies or substantial portions; the software is
  provided without warranty.

The core is **free**, not freemium. The separate
[Lenis Templates entry](../interface-design/lenis-templates.md) covers the
directory and linked products. Check each template's pricing and licence; those
terms do not change the core package's classification.

Checked on 2026-10-11.

## How to use

1. Install with Bun: `bun add lenis`. Import `lenis`; the old
   `@studio-freight/lenis` package is deprecated and directs users to it.

2. Import the recommended stylesheet and choose one frame clock:

   ```js
   import Lenis from 'lenis'
   import 'lenis/dist/lenis.css'

   const lenis = new Lenis({ autoRaf: true })
   const unsubscribe = lenis.on('scroll', (event) => console.log(event))

   function cleanupLenis() {
     unsubscribe()
     lenis.destroy()
   }
   ```

   In core v1.3.x, `autoRaf` defaults to `false`. A manual loop calls `raf` with
   the `requestAnimationFrame` timestamp in milliseconds:

   ```js
   const lenis = new Lenis() // autoRaf defaults to false
   let rafId = 0
   function raf(time) {
     lenis.raf(time) // milliseconds
     rafId = requestAnimationFrame(raf)
   }
   rafId = requestAnimationFrame(raf)

   function cleanupLenis() {
     cancelAnimationFrame(rafId)
     lenis.destroy()
   }
   ```

3. In React, the adapter creates the instance in an effect and calls `destroy()`
   on cleanup. `useLenis` reads the root instance:

   ```jsx
   import { ReactLenis, useLenis } from 'lenis/react'
   function App() {
     useLenis((lenis) => console.log(lenis))
     return <ReactLenis root />
   }
   ```

   Use this alternative GSAP clock instead of the automatic or manual loop
   above. Remove the ticker callback on cleanup and convert seconds to
   milliseconds:

   ```js
   import Lenis from 'lenis'
   import 'lenis/dist/lenis.css'
   import gsap from 'gsap'
   import { ScrollTrigger } from 'gsap/ScrollTrigger'

   gsap.registerPlugin(ScrollTrigger)
   const lenis = new Lenis({ autoRaf: false })
   const unsubscribe = lenis.on('scroll', ScrollTrigger.update)
   const update = (time) => lenis.raf(time * 1000)
   gsap.ticker.add(update)
   gsap.ticker.lagSmoothing(0)

   function cleanupLenis() {
     gsap.ticker.remove(update)
     unsubscribe()
     lenis.destroy()
   }
   ```

   `duration` is in seconds; `raf(time)` is in milliseconds. `ReactLenis` owns
   its instance and loop by default. Pass `options={{ autoRaf: false }}` when
   supplying GSAP's clock; the integrating component owns that ticker callback.
   The recommended `lagSmoothing(0)` changes GSAP's shared ticker; keep it at
   app scope or restore the app's setting when the integration ends.

Use `anchors: true` for same-page fragment scrolling; an options object can set
`offset` and `onComplete`. To let known nested areas scroll natively, use
`data-lenis-prevent` or a `prevent` callback. `allowNestedScroll` checks the DOM
during scroll handling and can cost performance. The imported stylesheet
provides documented root, stopped-scroll, nested overscroll and iframe styles.

For a modal that should scroll on its own, the official HTML example uses:

```html
<div data-lenis-prevent>scrollable content</div>
```

## Examples

- [Core README setup and GSAP example](https://github.com/darkroomengineering/lenis/blob/main/README.md#setup)
  — auto/manual RAF and ticker wiring; source inspected, no demo visual.
- [React adapter examples](https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md#examples)
  — root provider and cleanup; source inspected, no app visual.
- [Maintainer's nested modal CodePen](https://codepen.io/ClementRoche/pen/PoLdjpw)
  — `data-lenis-prevent`; code inspected, preview not visually inspected.

Core lifecycle, React provider and GSAP ticker snippets type-check against
`lenis@1.3.26`, React 19.2.0 and GSAP 3.15.0. This verifies API compatibility,
not rendered motion, runtime cleanup, device behavior or accessibility.

## When to use it

- Use it to drive WebGL, parallax or a GSAP ScrollTrigger timeline from scroll.
- Use it for controlled smooth input when you can test target browsers/devices.
- Skip it when ordinary document scrolling is enough; native scrolling avoids
  Lenis's extra loop and leaves anchor, keyboard and focus behavior to browsers.
- Keep `respectReducedMotion: true` (the default). Reduced motion makes input
  1:1 and programmatic scrolls instant, while the instance keeps running.
- That preference does not remove Lenis. For fully untouched native input, omit
  Lenis on that view and leave the browser's normal scroll behavior in place.

## Agent notes

- Stable npm `latest` was `lenis@1.3.26` on 2026-10-11; `dev` was 2.0.0-dev.5.
- Instantiate on the client: core defaults use `window` and `document`. In
  Next.js, put React usage behind a client boundary. The adapter's effect
  cleanup supports React Strict Mode setup/cleanup cycles.
- Anchor source handles clicks and calls `scrollTo`; no explicit focus transfer
  or keyboard handler was found. Test fragment focus and keyboard navigation.
- `syncTouch` is opt-in and may behave unexpectedly on iOS before 16. Nested
  scroll, iframe wheel forwarding and fixed-position Safari elements need device
  testing. No universal frame-rate guarantee is stated.
- `@studio-freight/lenis` was renamed to `lenis`; use the current package.

## Alternatives in this repo

- [GSAP](../motion/gsap.md) — use its timeline and ScrollTrigger tools when
  scroll-driven sequencing, pinning or scrubbing is the main requirement.
- [Motion](../motion/motion.md) — use it for React/Vue component transitions,
  gestures and layout animation; it does not replace the browser's scroll
  container.

## Sources

- [Official site](https://lenis.dev/) — checked 2026-10-11
- [GitHub README](https://github.com/darkroomengineering/lenis/blob/main/README.md)
  — checked 2026-10-11
- [Pinned core source](https://github.com/darkroomengineering/lenis/blob/eea71595f5ae595f49b21ed87520822d3624098a/packages/core/src/lenis.ts)
  — checked 2026-10-11
- [npm package](https://www.npmjs.com/package/lenis) and
  [v1.3.26 release](https://github.com/darkroomengineering/lenis/releases/tag/v1.3.26)
  — checked 2026-10-11
- [React README](https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md)
  and
  [adapter source](https://github.com/darkroomengineering/lenis/blob/eea71595f5ae595f49b21ed87520822d3624098a/packages/react/src/provider.tsx)
  — checked 2026-10-11
- [MIT licence](https://github.com/darkroomengineering/lenis/blob/main/LICENSE)
  — checked 2026-10-11
- [Legacy package notice](https://www.npmjs.com/package/@studio-freight/lenis) —
  checked 2026-10-11
- [Nested modal CodePen](https://codepen.io/ClementRoche/pen/PoLdjpw) — checked
  2026-10-11; source only, no visual inspection
- [Showcase](https://lenis.dev/showcase) — checked 2026-10-11; text inspection
  returned only the page shell
- Direct-add metadata uses the GitHub source URL; no Designeer listing is
  claimed.
