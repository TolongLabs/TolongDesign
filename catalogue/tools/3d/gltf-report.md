---
name: gltf.report
slug: gltf-report
section: 3D
section_slug: 3d
source_url: https://gltf.report/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Web-based optimizer for 3D glTF files.
paywall: free
pricing_summary:
  'Completely free web tool and open-source core SDK under the MIT license.'
open_source: true
license: MIT
category_tags: [gltf, 3d-optimizer, webgl, meshopt, draco, gltf-transform]
best_for:
  [model optimization, mesh compression, texture resizing, gltf validation]
stack: ['javascript', 'nodejs']
execution_mode: browser-app
surface: ['web-3d', 'web-asset']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# gltf.report

> Web-based optimizer for 3D glTF files. TolongLabs developers reach for
> gltf.report to inspect, validate, and radically compress 3D glTF/GLB models
> before loading them into web applications, reducing bundle sizes and GPU
> memory.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [gltf.report](https://gltf.report/)                                |
| Paywall        | **Free** — 100% free web tool and open-source CLI                  |
| Open source    | Yes — MIT ([GitHub](https://github.com/donmccurdy/glTF-Transform)) |
| Type           | 3D model inspector, validator, and optimizer                       |
| Works with     | glTF 2.0, GLB, Draco, Meshopt, WebP, KTX2/Basis Universal          |
| Best for       | Model optimization, mesh compression, texture resizing             |
| Agent-friendly | Yes — CLI companion (`@gltf-transform/cli`), local processing      |

## What it is

gltf.report is a specialized web-based inspector, validator, and optimizer for
glTF 2.0 and GLB models, developed by Don McCurdy (a Khronos 3D Formats working
group contributor). It addresses one of the primary hurdles of web 3D: raw
exports from tools like Blender are often bloated with redundant vertex data,
oversized PNG textures, and uncompressed geometry.

When you drag and drop a 3D model into gltf.report, the tool generates an
exhaustive audit report detailing mesh triangle counts, draw calls, material
complexity, animation channels, and texture resolutions. Privacy is strictly
preserved: all parsing, rendering, and transformations run locally in your
browser via WebAssembly, without uploading models to remote servers.

Behind the web interface sits `glTF-Transform`, an open-source JavaScript and
TypeScript SDK. Through the web UI or its companion CLI, developers can prune
unused node hierarchies, weld identical vertices, resize textures to powers of
two, compress textures to WebP or KTX2, and apply Meshopt or Draco geometric
compression.

## Paywall and pricing

- **Free:** The web application and the underlying `@gltf-transform` packages
  are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No. Works immediately in any modern web browser.
- **Licence for client work:** Distributed under the MIT license. Permitted for
  commercial web optimization pipelines and client projects without restriction.

Checked on the official gltf.report site and GitHub repository on 2026-10-07.

## How to use

1. Open [gltf.report](https://gltf.report/) in your browser.
2. Drag and drop your `.glb` or `.gltf` file onto the window.
3. Review the **Summary** tab for performance warnings:
   - Check if draw calls exceed 15–20.
   - Check if texture memory exceeds 50MB.
   - Identify uncompressed textures or high triangle counts.
4. Go to the **Transform** panel or run automated scripts directly in the web
   editor to compress textures and simplify geometry.
5. Export the optimized `.glb` file.

Alternatively, use the companion CLI in build scripts or CI pipelines:

```bash
bunx @gltf-transform/cli optimize input.glb output.glb --compress meshopt
```

Verify in code with React Three Fiber:

```tsx
import { useGLTF } from '@react-three/drei'

export function OptimizedModel() {
  const { scene } = useGLTF('/models/output.glb')
  return <primitive object={scene} />
}
```

## Examples

- [gltf.report Web Tool](https://gltf.report/) — Live web-based inspector and
  model optimizer with real-time 3D viewport.
- [glTF-Transform GitHub Repository](https://github.com/donmccurdy/glTF-Transform)
  — The core open-source engine powering gltf.report with full CLI and Node.js
  APIs.
- [glTF-Report-Feedback Repository](https://github.com/donmccurdy/glTF-Report-Feedback)
  — Official issue tracker and feature roadmap for the web tool.

## When to use it

- Use it on every 3D asset before shipping it to production; unoptimized glTF
  files often shrink by 60% to 90% in file size and memory footprint.
- Use it to diagnose why a 3D model fails to render, renders black, or causes
  excessive mobile frame drops.
- Skip it if you need to author or edit 3D geometry from scratch; use
  [Blender](../3d/blender.md) instead.

## Agent notes

- Companion CLI package: `@gltf-transform/cli` (can be executed via
  `bunx @gltf-transform/cli`).
- Common optimization command for agents:
  `bunx @gltf-transform/cli optimize input.glb output.glb --texture-compress webp --compress meshopt`
- Meshopt compression is generally preferred over Draco on the web because it
  decompresses significantly faster on mobile CPU/Wasm runtimes.

## Alternatives in this repo

- [Blender](../3d/blender.md) — 3D modeling suite used to create and export the
  original 3D assets before compression.
- [Three.js](../3d/three-js.md) — The JavaScript rendering engine that loads the
  compressed glTF assets in the browser.
- [React Three Fiber](../3d/react-three-fiber.md) — React reconciler where
  optimized models are loaded via `useGLTF`.

## Sources

- [gltf.report Web Application](https://gltf.report/) — checked 2026-10-07
- [glTF-Transform GitHub Repository](https://github.com/donmccurdy/glTF-Transform)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
