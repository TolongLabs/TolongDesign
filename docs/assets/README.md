# Original README assets

These files explain this project. They are not copied gallery assets, templates,
or a renderer benchmark.

## Hero banner

- **File:** `tolongdesign-hero.png` — 2172 × 724 RGB PNG, 3:1 aspect ratio.
- **Generation:** one Codex `gpt-6-luna` / `max` worker used its built-in image
  tool on 2026-10-11, following the coordinator's original atelier direction.
- **Input:** abstract reference frames, material swatches, and sculptural forms.
  No supplied third-party photograph, screenshot, mascot, or brand mark.
- **Edits:** none. The repository copy matches the image-tool output bytes.
- **SHA-256:**
  `02fca14c2f2fa2c3b4ef3d6ef63c97ba2e31522ed11b111895be0f9fe20f4579`.

## Workflow diagram

- **File:** `design-workflow.svg` — original, transparent, host-theme-adaptive
  SVG.
- **Source:** [project design workflow](../WORKFLOW.md) at repository commit
  `a588cf5b9224f334a7bf2b1b956a4b8692041e2f`; each node has source evidence.
- **Renderer:** Archify 3.0.1. The final candidate passed validation, delivery,
  strict artifact checks, and real-browser checks with no diagnostics.
- **Export changes:** used SVG Auto; removed embedded font faces and the full
  canvas background/grid. System font fallbacks and adaptive theme colours
  remain. No font binaries or third-party assets are stored in this export.
- **SHA-256:**
  `32b9e71f979b9c3a79db0ca0f9d592173bb5165bd2984c8a1239ebddd6841768`.

The diagram explains agent ownership and reference handoff. It is not a claim
that the CLI generates a website or that clean tests guarantee a good design.
