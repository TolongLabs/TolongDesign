---
name: Drei
slug: drei
section: 3D
section_slug: 3d
source_url: https://drei.docs.pmnd.rs/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Helper components for React Three Fiber.
paywall: free
pricing_summary: 'Completely free and open source under the MIT license.'
open_source: true
license: MIT
category_tags: [react, 3d, three-js, helpers, r3f, pmndrs]
best_for:
  [orbit controls, gltf loading, environment maps, 3d text, html overlays]
stack: [react, typescript]
agent_friendly: true
last_verified: 2026-10-07
---

# Drei

> Helper components for React Three Fiber. TolongLabs developers reach for Drei
> to add battle-tested camera controls, environment lighting, glTF model
> loaders, 3D text, and HTML overlays without re-implementing low-level Three.js
> boilerplate.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [drei.docs.pmnd.rs](https://drei.docs.pmnd.rs/)            |
| Paywall        | **Free** — 100% free and open source under MIT             |
| Open source    | Yes — MIT ([GitHub](https://github.com/pmndrs/drei))       |
| Type           | Component helper library for React Three Fiber             |
| Works with     | React Three Fiber, React 18/19, Three.js, TypeScript       |
| Best for       | Orbit controls, glTF loading, environment maps, 3D text    |
| Agent-friendly | Yes — npm package (`@react-three/drei`), typed JSX helpers |

## What it is

Drei (German for "three") is the official companion library for React Three
Fiber, maintained by the Poimandres open-source community. It collects dozens of
reusable, performance-optimized abstractions for common 3D web development
patterns that would otherwise take hundreds of lines of imperative Three.js
code.

Inside Drei are ready-made components for:

- **Controls**: `<OrbitControls>`, `<PresentationControls>`, `<ScrollControls>`.
- **Loaders**: `useGLTF`, `useTexture`, `useFBX`, and `<Suspense>` caching.
- **Lighting & Staging**: `<Environment>` (HDRI presets), `<ContactShadows>`,
  `<Sky>`, `<Float>`, `<AccumulativeShadows>`, and `<Backdrop>`.
- **Typographic & 2D Integration**: `<Text>`, `<Text3D>`, and `<Html>`
  (rendering interactive HTML elements pinned to 3D coordinate spaces).
- **Shaders & Postprocessing**: `<MeshReflectorMaterial>`,
  `<MeshTransmissionMaterial>`.

By pairing Drei with React Three Fiber, building a production-grade 3D model
viewer with realistic lighting and camera controls is reduced from days of
coding to a handful of declarative JSX components.

## Paywall and pricing

- **Free:** Completely free and open-source under the MIT license.
- **Paid:** None.
- **Sign-up required?** No. Available via npm.
- **Licence for client work:** MIT license allows unrestricted use in commercial
  and client projects.

Checked on the official documentation site and repository on 2026-10-07.

## How to use

1. Install Drei alongside React Three Fiber and Three.js:

```bash
bun add @react-three/drei @react-three/fiber three @types/three
```

2. Load a 3D model with realistic environment lighting and camera controls:

```tsx
'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, useGLTF } from '@react-three/drei'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1.5} />
}

export function ProductShowcase() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Model url="/models/shoe.glb" />
          </Float>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}

// Preload the model asset
useGLTF.preload('/models/shoe.glb')
```

## Examples

- [Drei Documentation Portal](https://drei.docs.pmnd.rs/) — Interactive
  Storybook and documentation demonstrating each helper component in live 3D
  viewports.
- [Drei GitHub Repository](https://github.com/pmndrs/drei) — Upstream source
  code, issue tracker, and release changelogs.
- [pmndrs Drei Showcase](https://drei.docs.pmnd.rs/?path=/story/staging-environment--environment-story)
  — Demonstration of HDRI environment lighting presets like `city`, `sunset`,
  and `studio`.

## When to use it

- Use it whenever you use React Three Fiber; virtually every real-world R3F
  scene benefits from `<OrbitControls>`, `<Environment>`, or `useGLTF`.
- Use it to overlay HTML UI directly onto 3D meshes using the `<Html>`
  component.
- Skip it if you are not using React Three Fiber; for vanilla Three.js, import
  helpers from `three/addons/` instead.

## Agent notes

- Package: `@react-three/drei`.
- To convert a `.glb` model into a clean, typed React component automatically,
  run `npx gltfjsx model.glb`. The generated output relies heavily on Drei's
  `useGLTF`.
- Preload assets using `useGLTF.preload('/path/to/model.glb')` to prevent layout
  flash or pop-in when components mount.

## Alternatives in this repo

- [React Three Fiber](../3d/react-three-fiber.md) — The underlying React
  reconciler that Drei extends and enriches.
- [Three.js](../3d/three-js.md) — The core imperative 3D library containing
  standard addons in `three/addons/`.
- [Poly Haven](../3d/poly-haven.md) — Source for free CC0 HDRIs that can be
  loaded directly into Drei's `<Environment files="..." />`.

## Sources

- [Drei Documentation](https://drei.docs.pmnd.rs/) — checked 2026-10-07
- [Drei GitHub Repository](https://github.com/pmndrs/drei) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
