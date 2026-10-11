---
name: React Three Fiber
slug: react-three-fiber
section: 3D
section_slug: 3d
source_url: https://r3f.docs.pmnd.rs/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Declarative React renderer for Three.js scenes.
paywall: free
pricing_summary:
  Free MIT-licensed software; optional sponsorship. Paid support prices are not
  published in the checked sources.
open_source: true
license: MIT
category_tags: [react, 3d, three-js, webgl, pmndrs, declarative]
best_for:
  [react 3d scenes, product configurators, interactive models, narrative 3d]
stack: [react, typescript]
agent_friendly: true
last_verified: 2026-10-11
---

# React Three Fiber

> Declarative React renderer for Three.js scenes. Use it when a React project's
> story or interaction needs a real 3D scene—not as a shortcut to good design.

## At a glance

| Field          | Value                                                                        |
| -------------- | ---------------------------------------------------------------------------- |
| Source         | [r3f.docs.pmnd.rs](https://r3f.docs.pmnd.rs/)                                |
| Paywall        | **Free** — software; optional sponsorship                                    |
| Open source    | Yes — [MIT](https://github.com/pmndrs/react-three-fiber/blob/master/LICENSE) |
| Type           | React renderer for Three.js                                                  |
| Works with     | R3F v8 + React 18; R3F v9 + React 19; Three.js and TypeScript                |
| Best for       | Product configurators, interactive models, purposeful narrative 3D           |
| Agent-friendly | Yes — typed package, JSX scene composition, official API docs                |

## What it is

React Three Fiber (R3F), maintained by Poimandres, maps JSX to Three.js objects.
`<mesh>` creates a mesh; geometry, materials, lights, and cameras compose inside
`<Canvas>`. React state can connect a product's HTML controls to its scene.

R3F supplies scene lifecycle and frame hooks. It does not supply art direction,
models, lighting choices, accessible product controls, or a guaranteed frame
rate. React's `useState` and R3F's `useFrame` / `useThree` are different APIs.

**Why it appears in polished frontends:** it makes a React-based scene easier to
compose and reuse. The result still depends on assets, materials, composition,
lighting, animation, and device-aware implementation. An attractive Three.js
example is not proof that it uses R3F.

## Paywall and pricing

- **Free:** MIT-licensed software; public npm package and GitHub source.
- **Paid:** Support or service prices are **Not published** in the checked
  package and official docs. Optional sponsorship supports maintenance.
- **Sign-up required?** No account is required to use the public package.
- **Licence for client work:** MIT permits commercial and proprietary use of the
  covered code. Preserve copyright and permission notices in copies or
  substantial portions. Separate models, fonts, environments, and dependencies
  retain their own licences.

Checked against official docs, package metadata, and licence on 2026-10-11.

## How to use

1. **Match the existing React major.** Stable npm `latest` was R3F `9.8.1` on
   2026-10-11; v10 was alpha. Recheck peer dependencies before installation.

   | Project          | Select        | Published peer constraints at this check                  |
   | ---------------- | ------------- | --------------------------------------------------------- |
   | React 18         | R3F v8        | React `>=18 <19`; Three.js `>=0.133` for `8.18.0`         |
   | React 19         | R3F v9        | React `>=19 <19.4`; Three.js `>=0.156` for `9.8.1`        |
   | Alpha experiment | R3F v10 alpha | Preview only; published alpha and preview docs can differ |

   For an existing React 19 project:

   ```bash
   bun add @react-three/fiber@9 three
   bun add -d @types/three
   ```

   Use `@react-three/fiber@8` for React 18. R3F includes its own TypeScript
   declarations; keep React and ReactDOM versions compatible with the selected
   package. Install [Drei](../3d/drei.md) only for helpers you actually need.

2. **Keep meaningful copy in HTML.** This minimal TypeScript example adapts the
   official
   [first scene](https://r3f.docs.pmnd.rs/getting-started/your-first-scene) and
   [animation tutorial](https://r3f.docs.pmnd.rs/tutorials/basic-animations). It
   defaults to a static, demand-rendered scene; the parent owns the user's
   motion preference and decides whether to pass `animate`.

   ```tsx
   import { useRef } from 'react'
   import { Canvas, useFrame } from '@react-three/fiber'
   import type { Mesh } from 'three'

   function Model({ animate }: { animate: boolean }) {
     const mesh = useRef<Mesh>(null)

     useFrame((_, delta) => {
       if (animate && mesh.current) mesh.current.rotation.y += delta * 0.35
     })

     return (
       <mesh ref={mesh}>
         <boxGeometry args={[1.5, 1.5, 1.5]} />
         <meshStandardMaterial color="#a85e4b" roughness={0.55} />
       </mesh>
     )
   }

   export function ProductScene({ animate = false }: { animate?: boolean }) {
     return (
       <figure>
         <figcaption>Product form preview</figcaption>
         <div style={{ height: 320 }}>
           <Canvas
             camera={{ position: [0, 0, 4] }}
             dpr={[1, 1.5]}
             frameloop={animate ? 'always' : 'demand'}
             fallback={<p>The 3D preview is unavailable on this device.</p>}
           >
             <ambientLight intensity={0.5} />
             <directionalLight position={[3, 4, 5]} intensity={1.5} />
             <Model animate={animate} />
           </Canvas>
         </div>
       </figure>
     )
   }
   ```

   This is a starter scene, not a production accessibility or error-handling
   solution. Add equivalent HTML controls for interactive scenes and an error
   boundary for runtime context failures. Keep essential content readable when
   JavaScript, graphics, assets, or animation are unavailable.

3. **Load and budget real assets.** Use Three.js loaders or an optional Drei
   helper such as `useGLTF`. Check model and HDRI rights. Inspect payloads with
   [gltf.report](../3d/gltf-report.md); reuse geometry/materials and use
   instancing for repeated compatible objects.

4. **Verify the actual scene.** Test target desktop/mobile devices, loading and
   error states, keyboard operation, reduced motion, and unavailable WebGL.
   Inspect rendered content; a successful screenshot can contain a blank canvas.
   Measure loading and frame times before making performance claims.

## Examples

- [Your first scene](https://r3f.docs.pmnd.rs/getting-started/your-first-scene)
  — source-backed introduction to Canvas, meshes, materials, and lights.
- [Basic animations](https://r3f.docs.pmnd.rs/tutorials/basic-animations) —
  source-backed `useFrame` and ref-mutation example.
- [Events and interaction](https://r3f.docs.pmnd.rs/tutorials/events-and-interaction)
  — mesh pointer events and discrete React state; add equivalent HTML controls.
- [T-shirt configurator](https://pmndrs.github.io/examples/t-shirt-configurator/)
  ([source](https://github.com/pmndrs/examples/blob/main/examples/t-shirt-configurator/src/Canvas.tsx))
  — inspected source uses R3F and Drei for a GLB, decal, color state, lighting,
  and pointer-driven rig. The live render was **not visually inspected** here.
- [Official examples index](https://r3f.docs.pmnd.rs/getting-started/examples) —
  discover portals, particles, physics, and scroll-controlled scenes. Inspect
  each example's source before attributing its appearance to R3F.

## When to use it

| Use case                                        | Recommendation                                                                    |
| ----------------------------------------------- | --------------------------------------------------------------------------------- |
| React product configurator or interactive model | Good fit: scene state can share the React UI's state                              |
| A 3D object explains the product or narrative   | Consider it after approving the visual direction and mobile fallback              |
| Decorative depth, a ribbon, or simple parallax  | Prefer CSS transforms and/or [GSAP](../motion/gsap.md) when sufficient            |
| Standard landing page, dashboard, or form       | Start with semantic HTML and the project's existing UI stack                      |
| Non-React project                               | Consider [Three.js](../3d/three-js.md); do not add React solely for this renderer |

## Agent notes

- **Version and framework:** check npm peers for the selected R3F major. In
  Next.js App Router, interactive Canvas code belongs behind a client boundary;
  `'use client'` is framework-specific, not a universal R3F requirement. SSR and
  dynamic-loading choices depend on the host framework.
- **Frame work:** use `useFrame` with stable refs and `delta` for rapid updates.
  Keep callbacks small; reserve React state for discrete UI changes. Demand mode
  needs `invalidate()` after imperative mutations; it requests a frame, not an
  immediate render. Do not promise a fixed FPS or “zero overhead.”
- **Device budget:** bound DPR and effects, reuse assets, and measure the real
  device/scene. `performance.current` does not lower quality automatically;
  adaptation needs application logic. Record browser, GPU/device, viewport, DPR,
  scene, warm-up, and frame-time distribution for performance claims.
- **Fallbacks and semantics:** keep copy, links, and essential controls in HTML.
  Canvas fallback covers unsupported graphics; use an error boundary for runtime
  context failure. Honor reduced motion and test keyboard/screen-reader
  behavior. Optional [pmndrs A11y](https://a11y.docs.pmnd.rs/introduction)
  provides scene-accessibility helpers; it is not automatic certification.
- **Optional ecosystem:** [Drei](../3d/drei.md) supplies `useGLTF`, controls,
  and `Html`; helpers have their own loading, decoder, camera, and occlusion
  rules. Shared cached resources and caller-owned `primitive` objects need
  deliberate disposal. Asset tooling, postprocessing, and paid models are
  separate choices.

## Alternatives in this repo

- [Three.js](../3d/three-js.md) — framework-agnostic graphics library underneath
  R3F.
- [Drei](../3d/drei.md) — optional R3F helper layer, not a replacement renderer.
- [GSAP](../motion/gsap.md) — DOM/CSS motion and scroll choreography without a
  3D scene.
- [gltf.report](../3d/gltf-report.md) — upstream asset inspection and
  optimization.
- [Blender](../3d/blender.md) — upstream 3D authoring; not a web renderer.

## Sources

All official sources below were checked on **2026-10-11**. The linked
[assessment](../../research/react-three-fiber-assessment.md) records the method
and unresolved runtime checks.

- **Package and licence:**
  [introduction/FAQ](https://r3f.docs.pmnd.rs/getting-started/introduction),
  [installation](https://r3f.docs.pmnd.rs/getting-started/installation),
  [npm metadata](https://registry.npmjs.org/%40react-three%2Ffiber), and
  [MIT licence](https://github.com/pmndrs/react-three-fiber/blob/master/LICENSE).
- **Version pairing:**
  [v8 metadata](https://registry.npmjs.org/%40react-three%2Ffiber/8.18.0),
  [v9 metadata](https://registry.npmjs.org/%40react-three%2Ffiber/9.8.1), and
  [v10 alpha guide](https://r3f.docs.pmnd.rs/next/migration/v10).
- **API and performance:** [Canvas](https://r3f.docs.pmnd.rs/api/canvas),
  [hooks](https://r3f.docs.pmnd.rs/api/hooks),
  [objects](https://r3f.docs.pmnd.rs/api/objects),
  [scaling](https://r3f.docs.pmnd.rs/advanced/scaling-performance), and
  [pitfalls](https://r3f.docs.pmnd.rs/advanced/pitfalls).
- **Examples:** official tutorials linked above and
  [configurator source](https://github.com/pmndrs/examples/blob/main/examples/t-shirt-configurator/src/Canvas.tsx)
  — source inspection, not rendered review.
- **Semantics and preferences:**
  [HTML canvas standard](https://html.spec.whatwg.org/multipage/canvas.html) and
  [pmndrs A11y](https://a11y.docs.pmnd.rs/introduction).
