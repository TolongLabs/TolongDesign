---
name: Orbkit
slug: orbkit
section: Shaders
section_slug: shaders
source_url: https://orbkit.zzzzshawn.cloud/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: WebGL shader renderer for orb animations.
paywall: free
pricing_summary:
  'Completely free open shader showcase with source code available.'
open_source: true
license: unknown
category_tags: [shaders, webgl, raymarching, glsl, orbs, sphere-shaders]
best_for:
  [orb animations, raymarching effects, volumetric spheres, interactive heroes]
stack: [javascript, glsl]
agent_friendly: true
last_verified: 2026-10-07
---

# Orbkit

> WebGL shader renderer for orb animations. TolongLabs developers reach for
> Orbkit to inspect and adapt advanced raymarched spherical shaders, volumetric
> clouds, and procedural orb animations for landing page heroes and interactive
> widgets.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [orbkit.zzzzshawn.cloud](https://orbkit.zzzzshawn.cloud/)  |
| Paywall        | **Free** — 100% free web showcase with viewable source     |
| Open source    | Yes — public shader codebase and viewer                    |
| Type           | WebGL shader catalog and spherical renderer                |
| Works with     | WebGL, GLSL, Three.js, React, HTML5 Canvas                 |
| Best for       | Orb animations, raymarching effects, volumetric spheres    |
| Agent-friendly | Yes — viewable and copyable GLSL source code per component |

## What it is

Orbkit (orbkit.zzzzshawn.cloud) is an interactive WebGL shader showcase and
renderer created by Shawn (`zzzzshawn`). It focuses specifically on spherical
procedural shaders and raymarched signed distance field (SDF) orbs, providing a
curated gallery of over 30 distinct animated shaders (cataloged from SHDR-01
through SHDR-33).

Each orb demonstrates a sophisticated computer graphics or math technique mapped
onto a 3D sphere:

- **Volumetric Clouds (SHDR-21)**: True raymarching with Beer-Lambert light
  transmittance, self-shadowing, and Henyey-Greenstein phase functions.
- **Magnetic Field Lines (SHDR-22)**: 90-degree Rodrigues rotation fields
  swirling around wandering axes.
- **ASCII Glyph Matrix (SHDR-23)**: CRT phosphor green terminal matrix wrapping
  a stereographic sphere with streaming fractional Brownian motion.
- **Voxel Earth (SHDR-24)**: Procedural raymarched block planet weathered by an
  integrated five-climate season clock.
- **Volumetric Godrays (SHDR-31)**: Raymarched SDF hollow shells with inner
  light scattering.
- **Spiral Galaxy (SHDR-32)**: Exponential disk galaxy with feedback-curl
  turbulence dust lanes.

Orbkit includes a built-in code inspector allowing developers to examine and
copy the exact vertex and fragment GLSL routines behind each orb effect.

## Paywall and pricing

- **Free:** The complete gallery, interactive 3D orb viewers, and GLSL source
  code inspection are completely free.
- **Paid:** None.
- **Sign-up required?** No. Accessible instantly in any browser.
- **Licence for client work:** Shaders and mathematical implementations are
  freely accessible for study and adaptation into client WebGL and Three.js
  projects.

Checked on the official Orbkit website on 2026-10-07.

## How to use

1. Open [orbkit.zzzzshawn.cloud](https://orbkit.zzzzshawn.cloud/) in your
   browser.
2. Browse the gallery of over 30 spherical shaders.
3. Select an orb (e.g., `SHDR-21` for volumetric smoke or `SHDR-32` for a
   galaxy) to view it in full resolution with mouse-driven rotation.
4. Open the code drawer to inspect the underlying GLSL uniforms and fragment
   math.
5. Integrate the shader into a Three.js or React Three Fiber scene using a
   standard `<sphereGeometry>`:

```tsx
'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { ShaderMaterial } from 'three'

// Fragment shader adapted from Orbkit
const orbFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
    vec3 col = mix(vec3(0.1, 0.2, 0.8), vec3(0.9, 0.4, 0.9), vUv.y);
    gl_FragColor = vec4(col + fresnel * 0.8, 1.0);
  }
`

export function OrbScene() {
  const matRef = useRef<ShaderMaterial>(null!)

  useFrame((state, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta
    }
  })

  return (
    <Canvas>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          ref={matRef}
          uniforms={{ uTime: { value: 0 } }}
          vertexShader={`
            varying vec2 vUv;
            varying vec3 vNormal;
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={orbFragmentShader}
        />
      </mesh>
    </Canvas>
  )
}
```

## Examples

- [Orbkit Catalog](https://orbkit.zzzzshawn.cloud/) — Interactive gallery
  rendering 30+ raymarched and procedural orb shaders.
- [SHDR-21 Volumetric Cloud](https://orbkit.zzzzshawn.cloud/) — Demonstration of
  Henyey-Greenstein phase functions and self-shadowing light diffusion.
- [SHDR-24 Voxel Earth](https://orbkit.zzzzshawn.cloud/) — Procedural planetary
  orb marched block by block with dynamic seasons.

## When to use it

- Use it when designing an AI chatbot widget, high-end hero illustration, or
  interactive token avatar that centers around an energetic glowing orb.
- Use it to study complex raymarching techniques (volumetric scattering,
  Rodrigues rotations, stereographic projections) mapped onto spherical
  manifolds.
- Skip it if you need flat 2D background gradients or UI card textures; use
  [Paper Shaders](../shaders/paper-shaders.md) instead.
- Skip it if you need WebGPU WGSL compute pipelines; use
  [shadercn](../shaders/shadercn.md) or
  [compute.toys](../shaders/compute-toys.md) instead.

## Agent notes

- Shaders are written in GLSL and render on standard WebGL 1/2 canvas elements.
- When adapting raymarched shaders, note that loop iterations (e.g. 64–128 steps
  per pixel) can strain low-power integrated GPUs. Reduce maximum ray steps or
  render at half-resolution on mobile viewports.
- The site provides copyable source strings for each component (`Shdr01` through
  `Shdr33`).

## Alternatives in this repo

- [Paper Shaders](../shaders/paper-shaders.md) — Production-ready,
  zero-dependency background shaders including mesh gradients and liquid metal.
- [shadercn](../shaders/shadercn.md) — WebGPU shader components integrated with
  shadcn/ui patterns for React.
- [Shaderfrog](../shaders/shaderfrog.md) — Visual node-based tool for composing
  and blending Three.js shaders.

## Sources

- [Orbkit Website](https://orbkit.zzzzshawn.cloud/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
