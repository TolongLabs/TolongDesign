# React Three Fiber assessment

**Verdict:** keep and improve the existing guide. R3F is useful for React-based
interactive 3D, not a universal recipe for a good-looking frontend.

> This is source research, not a rendered-demo or GPU benchmark. No claim about
> a famous site's stack or a guaranteed visual result follows from it.

## Where it earns its cost

| Project need                               | Decision                    | Reason                                                                 |
| ------------------------------------------ | --------------------------- | ---------------------------------------------------------------------- |
| React product configurator                 | Good candidate              | Scene state can connect to normal HTML product controls                |
| Interactive model or spatial visualization | Good candidate              | JSX, component reuse, events, and loaders fit React composition        |
| Narrative that needs a real 3D object      | Conditional                 | Approve its purpose, assets, camera/motion, and mobile fallback first  |
| Decorative depth or simple parallax        | Start with CSS/DOM motion   | A renderer is unnecessary when simpler transforms tell the same story  |
| Ordinary marketing page or non-React app   | Preserve the existing stack | R3F alone does not improve typography, composition, copy, or usability |

Our Vellvoice pilot used original CSS 3D and GSAP in Astro. That demonstrates
one simpler implementation path, not an R3F comparison or evidence against R3F.

## Findings that changed the guide

| Earlier wording                               | Correction                                                                                         |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Zero overhead and 60–120 FPS                  | Maintainer FAQ wording is not a reproducible cross-device guarantee                                |
| Works with React 18/19                        | Select R3F v8 for React 18; v9 for React 19; check published peer ranges                           |
| Drei should almost always be installed        | Install optional helpers only when the chosen scene needs them                                     |
| Pointer-only cube with continuous motion      | Static/demand default, equivalent HTML content, motion ownership, and fallback guidance            |
| Unrestricted commercial use; no paid services | MIT notice conditions apply; separate asset rights and unpublished service pricing remain separate |

Stable npm `latest` was `9.8.1` on 2026-10-11; v10 was alpha. The published
alpha package and preview docs had different React ceilings. Use actual package
peers for installation, not an inferred compatibility promise.

## What the agent needs

1. **Scene purpose:** explain what the 3D object communicates or lets people do.
2. **Asset context:** provenance, licences, payloads, materials, lighting, and
   loaders.
3. **Runtime budget:** target devices, DPR, effects, loading, and measured frame
   times.
4. **Fallbacks:** semantic HTML, keyboard access, reduced motion, loading/error
   UI, and unavailable graphics.
5. **Visual evidence:** inspect actual scene renders and source attribution
   before claiming an example uses R3F.

Keep approved page-critical copy outside the canvas. A screenshot command can
succeed while the scene remains blank; the
[REA/ICQR study](./tree-icqr-study.md) records that distinction.

## Research method and limits

- Three independent Codex workers used `gpt-6-luna` at `max`: package/licence
  facts, performance/accessibility constraints, and source-backed examples.
- Evidence came from official pmndrs docs and source, npm package metadata,
  Three.js API docs, and the HTML canvas standard; checked 2026-10-11.
- The configurator source explicitly imports R3F and Drei. Its live render was
  not visually inspected. Showcase tiles alone do not prove implementation.
- No app, phone, GPU, FPS, bundle-size, or with/without-R3F benchmark was run.
- This did not add a duplicate resource or change the catalogue's tool count.

## Start here

- [Updated R3F guide](../design/3d/react-three-fiber.md) — install pairing,
  starter code, source links, and task-specific agent guidance.
- [Official introduction](https://r3f.docs.pmnd.rs/getting-started/introduction)
  and [performance pitfalls](https://r3f.docs.pmnd.rs/advanced/pitfalls).
- [Canvas API](https://r3f.docs.pmnd.rs/api/canvas) and
  [object lifecycle](https://r3f.docs.pmnd.rs/api/objects).
- [Configurator source](https://github.com/pmndrs/examples/blob/main/examples/t-shirt-configurator/src/Canvas.tsx).
- [HTML canvas semantics](https://html.spec.whatwg.org/multipage/canvas.html).
