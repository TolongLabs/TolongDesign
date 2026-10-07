---
name: React Three Fiber
slug: react-three-fiber
section: 3D
section_slug: 3d
source_url: https://r3f.docs.pmnd.rs/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Declarative React renderer for Three.js scenes.
paywall: free
pricing_summary: 'Completely free and open source under the MIT license.'
open_source: true
license: MIT
category_tags: [react, 3d, three-js, webgl, pmndrs, declarative]
best_for:
  [react 3d scenes, landing page animations, interactive models, ui integration]
stack: [react, typescript]
agent_friendly: true
last_verified: 2026-10-07
---

# React Three Fiber

> Declarative React renderer for Three.js scenes. TolongLabs developers reach
> for React Three Fiber (R3F) to compose 3D scenes with standard React state,
> props, and hooks, eliminating imperative Three.js lifecycle boilerplate.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [r3f.docs.pmnd.rs](https://r3f.docs.pmnd.rs/)                     |
| Paywall        | **Free** — 100% free and open source under MIT                    |
| Open source    | Yes — MIT ([GitHub](https://github.com/pmndrs/react-three-fiber)) |
| Type           | React reconciler for Three.js                                     |
| Works with     | React 18/19, Next.js, Three.js, TypeScript                        |
| Best for       | React 3D scenes, landing page animations, interactive models      |
| Agent-friendly | Yes — npm package (`@react-three/fiber`), declarative JSX         |

## What it is

React Three Fiber (R3F) is a custom React reconciler for Three.js maintained by
the Poimandres (pmndrs) open-source collective. Instead of wrapping Three.js in
clunky component wrappers, R3F translates standard JSX tags directly into
Three.js objects; for example, `<mesh />` instantiates `new THREE.Mesh()`, and
`<boxGeometry />` instantiates `new THREE.BoxGeometry()`.

Because R3F is a first-class reconciler, it participates directly in React's
component tree. It handles canvas resizing, device pixel ratio scaling, pointer
events, and unmount disposal automatically. Developers can drive 3D transforms
and materials using familiar React hooks (`useFrame`, `useThree`, `useState`),
combining 3D graphics seamlessly with ordinary HTML UI.

R3F introduces zero performance overhead compared to raw Three.js: all rendering
and loop updates bypass the React reconciliation phase and occur directly on the
underlying Three.js scene graph at 60–120 frames per second.

## Paywall and pricing

- **Free:** Entirely free and open source under the MIT license.
- **Paid:** None.
- **Sign-up required?** No. Available publicly on npm and GitHub.
- **Licence for client work:** MIT license allows unrestricted commercial,
  proprietary, and client use.

Checked on the official documentation site and GitHub repository on 2026-10-07.

## How to use

1. Install React Three Fiber and Three.js dependencies:

```bash
bun add @react-three/fiber three @types/three
```

2. Create an interactive 3D component with React state and frame hooks:

```tsx
'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

function RotatingCube() {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)

  // Run on every animation frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.7
  })

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.2 : 1}
      onClick={() => console.log('Clicked cube')}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? '#ef4444' : '#3b82f6'} />
    </mesh>
  )
}

export function Scene() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <RotatingCube />
      </Canvas>
    </div>
  )
}
```

## Examples

- [R3F Official Documentation](https://r3f.docs.pmnd.rs/getting-started/introduction)
  — Official guide detailing basic setup, props handling, and frame lifecycle.
- [R3F Examples Showcase](https://r3f.docs.pmnd.rs/getting-started/examples) —
  Interactive CodeSandbox collection featuring physics, particles, and portals.
- [pmndrs GitHub Repository](https://github.com/pmndrs/react-three-fiber) —
  Upstream source repository containing reconciler tests, core API, and
  releases.

## When to use it

- Use it on React and Next.js websites whenever you need 3D models, interactive
  canvas backgrounds, or product previews.
- Use it when 3D scenes need to communicate with UI state (e.g. clicking a 3D
  shoe updates an HTML shopping cart).
- Skip it for projects written in vanilla JavaScript or non-React frameworks;
  use raw [Three.js](../3d/three-js.md) instead.

## Agent notes

- Package: `@react-three/fiber`. Companion library [Drei](../3d/drei.md)
  (`@react-three/drei`) should almost always be installed alongside it.
- In Next.js App Router, any component rendering `<Canvas>` must be a client
  component with `'use client'`.
- Never put `setState` inside `useFrame`; update mutable Three.js refs directly
  (e.g. `ref.current.position.x += delta`) to maintain 60 FPS performance.

## Alternatives in this repo

- [Three.js](../3d/three-js.md) — The underlying imperative 3D library without
  React integration.
- [Drei](../3d/drei.md) — Essential companion library providing high-level R3F
  helpers, camera controls, and loaders.
- [gltf.report](../3d/gltf-report.md) — Optimizer for preparing 3D assets before
  loading them with R3F's `useGLTF`.

## Sources

- [React Three Fiber Docs](https://r3f.docs.pmnd.rs/) — checked 2026-10-07
- [pmndrs/react-three-fiber GitHub](https://github.com/pmndrs/react-three-fiber)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
