---
name: Three.js
slug: three-js
section: 3D
section_slug: 3d
source_url: https://threejs.org/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: JavaScript 3D library rendering WebGL scenes.
paywall: free
pricing_summary: 'Completely free and open source under the MIT license.'
open_source: true
license: MIT
category_tags: [3d, webgl, webgpu, graphics, rendering, animation]
best_for: [interactive 3d, canvas animations, product configurators, web games]
stack: [javascript, typescript]
agent_friendly: true
last_verified: 2026-10-07
---

# Three.js

> JavaScript 3D library rendering WebGL scenes. TolongLabs developers reach for
> Three.js to render hardware-accelerated 3D graphics, interactive product
> showcases, particles, and custom WebGL/WebGPU visual experiences in the
> browser.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [threejs.org](https://threejs.org/)                           |
| Paywall        | **Free** — 100% free and open source under MIT                |
| Open source    | Yes — MIT ([GitHub](https://github.com/mrdoob/three.js))      |
| Type           | 3D graphics library and scene graph runtime                   |
| Works with     | WebGL 2, WebGPU, JavaScript, TypeScript, Canvas API           |
| Best for       | Interactive 3D, canvas animations, product configurators      |
| Agent-friendly | Yes — npm package (`three`), typed definitions, standard docs |

## What it is

Three.js is the standard 3D graphics library for the web, originally created by
Ricardo Cabello (mrdoob) in 2010. It abstracts away the low-level complexities
of raw WebGL and WebGPU shader programming into an intuitive scene graph API
composed of scenes, cameras, renderers, meshes, geometries, and materials.

Inside Three.js is a comprehensive graphics engine supporting physically-based
rendering (PBR via `MeshStandardMaterial` and `MeshPhysicalMaterial`), shadow
mapping, post-processing pipelines, skeletal skinning and morph targets,
particle systems, and loaders for standard 3D formats like glTF 2.0, OBJ, and
FBX.

Recent releases include an integrated WebGPU rendering backend and node-based
material system (`three/webgpu`), allowing modern web applications to leverage
next-generation compute shaders and GPU pipelines while maintaining graceful
fallback to WebGL 2 on older hardware.

## Paywall and pricing

- **Free:** The complete library, online documentation, examples, and the
  browser-based Three.js Editor are 100% free and open source.
- **Paid:** None. There are no paid tiers or enterprise licensing fees.
- **Sign-up required?** No. Everything is accessible without registration.
- **Licence for client work:** Distributed under the MIT license. Fully
  permissive for commercial and client web development.

Checked on the official Three.js website and repository on 2026-10-07.

## How to use

1. Install Three.js and TypeScript types:

```bash
bun add three @types/three
```

2. Initialize a minimal scene, camera, and renderer:

```typescript
import * as THREE from 'three'

export function initThreeCanvas(container: HTMLElement) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Add a geometry and material
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    roughness: 0.3
  })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // Add lighting
  const light = new THREE.DirectionalLight(0xffffff, 2)
  light.position.set(2, 4, 3)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))

  // Render loop
  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
}
```

## Examples

- [Three.js Official Examples](https://threejs.org/examples/) — Hundreds of
  curated interactive demos covering WebGPU, post-processing, physics, and glTF.
- [Three.js Web-based Editor](https://threejs.org/editor/) — In-browser 3D scene
  builder for importing models, tweaking lights, and testing materials.
- [Three.js Documentation](https://threejs.org/docs/) — Complete API reference
  covering geometry classes, materials, math utilities, and loaders.

## When to use it

- Use it when building custom 3D web experiences, landing page heroes with
  interactive 3D models, or 3D product visualizers.
- Use it when you need vanilla JavaScript or framework-agnostic rendering
  without React dependencies.
- Skip it if you are building an interactive 3D scene inside a React or Next.js
  application; prefer [React Three Fiber](../3d/react-three-fiber.md) and
  [Drei](../3d/drei.md) for declarative state and lifecycle management.

## Agent notes

- Package: `three`, types: `@types/three`.
- Addons like `GLTFLoader` and `OrbitControls` are located under `three/addons/`
  (e.g., `import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'`).
- Always cap `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to
  avoid severe GPU thermal throttling on high-DPI displays.
- Remember to dispose of geometries, textures, and materials when unmounting
  canvas components in single-page apps.

## Alternatives in this repo

- [React Three Fiber](../3d/react-three-fiber.md) — Declarative React renderer
  that wraps Three.js into composable React components.
- [Blender](../3d/blender.md) — Comprehensive 3D modeling and animation suite
  used to author models before importing them into Three.js.
- [gltf.report](../3d/gltf-report.md) — Tool for inspecting, pruning, and
  optimizing glTF models before web deployment.

## Sources

- [Three.js Official Site](https://threejs.org/) — checked 2026-10-07
- [Three.js GitHub Repository](https://github.com/mrdoob/three.js) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
