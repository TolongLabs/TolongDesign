---
name: Poly Haven
slug: poly-haven
section: 3D
section_slug: 3d
source_url: https://polyhaven.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Public asset library offering CC0 textures.
paywall: free
pricing_summary:
  'Completely free public asset library under the CC0 1.0 Universal license.'
open_source: true
license: CC0-1.0
category_tags: [3d-assets, textures, pbr, hdri, 3d-models, public-domain]
best_for:
  [realistic lighting, pbr materials, background environments, 3d scenes]
stack: []
execution_mode: reference
surface: ['web-asset', 'web-3d', 'reference']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Poly Haven

> Public asset library offering CC0 textures. TolongLabs developers and 3D
> artists reach for Poly Haven to download high-fidelity, photorealistic HDRIs,
> PBR texture maps, and 3D models with unrestricted public domain licensing.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [polyhaven.com](https://polyhaven.com/)                     |
| Paywall        | **Free** — 100% free under Creative Commons CC0             |
| Open source    | Yes — CC0-1.0 ([GitHub](https://github.com/Poly-Haven))     |
| Type           | 3D asset repository (HDRIs, PBR Textures, Models)           |
| Works with     | Blender, Three.js, React Three Fiber, WebGL, glTF, EXR, HDR |
| Best for       | Realistic lighting, PBR materials, background environments  |
| Agent-friendly | Yes — public REST API, predictable direct download URLs     |

## What it is

Poly Haven is a curated public asset repository providing 100% free, high-end
digital content for 3D artists and web developers. Founded by Greg Zaal, Rob
Tudert, and Rico Cilliers, Poly Haven originated from the merger of HDRI Haven,
Texture Haven, and 3D Model Haven.

The library contains hundreds of professionally captured High Dynamic Range
Images (HDRIs), physically-based rendering (PBR) texture sets (including albedo,
roughness, normal, displacement, and ambient occlusion maps), and scan-based 3D
models. Every asset is photographed, unclipped, and calibrated using
color-managed hardware rigs to guarantee physical accuracy in photorealistic
rendering pipelines.

For web developers building 3D experiences with Three.js or React Three Fiber,
Poly Haven is the premier source for environment maps. An HDRI loaded into an
environment lighting stage provides complex ambient reflections, directional
lighting, and realistic specular highlights without requiring tedious manual
virtual light placement.

## Paywall and pricing

- **Free:** Every HDRI, texture, and model is 100% free to download in all
  available resolutions (from 1k mobile-friendly files up to 16k production
  plates).
- **Paid:** None. No pro tier, paywall, or asset purchase required. Funded
  entirely via community donations and Patreon sponsorships.
- **Sign-up required?** No. Direct downloads do not require an account or email.
- **Licence for client work:** Released under the Creative Commons CC0 1.0
  Universal Public Domain Dedication. Fully permissive for all commercial,
  client, and proprietary applications with no attribution required.

Checked on the official Poly Haven website on 2026-10-07.

## How to use

1. Browse [polyhaven.com](https://polyhaven.com/) and choose an HDRI (e.g.
   `studio_small_08`) or PBR texture set.
2. For web applications, select the **1k** or **2k** resolution in `.hdr` or
   `.exr` format (higher resolutions create unnecessarily huge web downloads).
3. Download the asset and place it into your project's `public/` folder (e.g.
   `public/environments/studio_small_08_1k.hdr`).

4. Use the HDRI in React Three Fiber with Drei:

```tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

export function Showcase() {
  return (
    <div className="h-96 w-full">
      <Canvas>
        <ambientLight intensity={0.2} />
        {/* Load Poly Haven HDRI directly */}
        <Environment files="/environments/studio_small_08_1k.hdr" />
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial metalness={0.9} roughness={0.1} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
```

## Examples

- [Poly Haven HDRIs](https://polyhaven.com/hdris) — Curated collection of
  indoor, outdoor, studio, and night sky high dynamic range lighting
  environments.
- [Poly Haven Textures](https://polyhaven.com/textures) — Physically-based
  texture sets covering wood, metal, fabric, stone, concrete, and terrain.
- [Poly Haven 3D Models](https://polyhaven.com/models) — Photorealistic 3D
  models with pre-configured PBR materials in glTF/GLB and Blender formats.

## When to use it

- Use it whenever you need realistic lighting and reflections in a Three.js or
  React Three Fiber scene.
- Use it to source high-resolution surface textures for Blender materials.
- Skip it if you need stylized, non-photorealistic, or low-poly game assets;
  model them directly in [Blender](../3d/blender.md) instead.

## Agent notes

- Public API available at `https://api.polyhaven.com/files/{id}` for direct
  programmatic asset fetching.
- For web projects, never ship textures or HDRIs larger than 1k or 2k
  resolution; a 4k EXR file can easily exceed 25MB and crash mobile WebGL
  context memory.
- In Three.js, load HDR files using `RGBELoader` from
  `three/addons/loaders/RGBELoader.js`.

## Alternatives in this repo

- [Blender](../3d/blender.md) — 3D modeling and rendering software where Poly
  Haven textures and HDRIs are applied.
- [Three.js](../3d/three-js.md) — Browser 3D runtime that renders Poly Haven
  environment maps via `MeshStandardMaterial`.
- [Drei](../3d/drei.md) — React Three Fiber helper library that loads Poly Haven
  HDRIs using `<Environment files="..." />`.

## Sources

- [Poly Haven Website](https://polyhaven.com/) — checked 2026-10-07
- [Poly Haven About & Licensing](https://polyhaven.com/license) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
