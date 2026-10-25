---
name: build-3d-model
description:
  Use when an agent must create, generate, or produce a 3D model (GLB/glTF)
  from text or an image — the open pipeline Spline fronts: candidates, mesh
  backend, PBR bake, decimation, editor-ready output.
---

# Build A 3D Model

Produce a real textured 3D model (GLB) from a text prompt or image, without
Spline. The pipeline is public: candidate looks, mesh via an open or API
backend, PBR bake, decimation, scene import. Facts and comparisons live in
[docs/research/spline-3d-design.md](../../docs/research/spline-3d-design.md) —
read it when choosing a backend or setting expectations on quality.

## The pipeline

1. **Clarify the input.** Text prompt or front-facing single-object image
   (PNG/JPG/WebP ≤15 MB). If only a text prompt exists and the backend is
   mesh-only, first generate one image per branch below.
2. **Generate four candidate images** (text→image step) so the user picks a
   look before geometry exists. Anything with an API works; the pick-steering
   is the point, matching Spline's "four looks" flow.
3. **Pick the mesh backend** (see the table) and mesh the chosen image.
4. **Bake PBR maps**: base color, metallic-roughness, normal.
5. **Decimate** to the render budget (web scenes: aim ≤100k triangles unless
   the frame demands more). Spline's own examples ship ~1.1M faces — raw
   output is offline quality — so decimate before real-time use.
6. **Import as GLB** into the target (three.js/R3F scene, editor project) and
   verify: loads, correct scale, PBR reads right under the scene's lighting.

Completion criterion: a GLB the user opened and accepted, not a file that
merely exists. Every generated artifact (candidates, rejected meshes) is
accounted for — kept where the user can reuse them or deleted on request.

## Mesh backends

| Backend                                  | Licence / access          | Use for                              |
| ---------------------------------------- | ------------------------- | ------------------------------------ |
| TRELLIS                                  | Open weights, MIT         | Default self-hosted; intersects/shapes |
| TripoSR                                  | Open weights, MIT         | Fastest drafts (<0.5 s on A100)      |
| Hunyuan3D 2.1                            | Open weights, restrictive | Highest PBR quality; mind licence    |
| Meshy API / Tripo API                    | Paid hosted API           | No GPU available; Spline fronts these |

Rules: self-host when a GPU exists (Runpod/H100, ~30–60 s per mesh for
TRELLIS-class); use a hosted API when none does. Never present the restrictive
licence option as the default. Same image through two backends to compare is
expected practice, not waste.

## Failure seams

- **Text-only backends drift on first try**: candidates first, mesh second —
  never mesh a look the user has not seen.
- **Raw output is high-poly**: decimation is a required step, not polish.
- **No PBR without a bake step**: many backends output vertex-colored meshes;
  check the GLB for map textures before step 5.
- **WebGL/WebGPU loaders** reject some GLB features (e.g. certain compression
  extensions). Re-export with a conservative glTF exporter if the target
  viewer fails.

The verification bar: claims need a load test in the actual target — open the
GLB in the scene (or a three.js viewer) and confirm it renders before
reporting done.
