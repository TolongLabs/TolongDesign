---
name: Anatomy
slug: anatomy
section: Agents & MCP
section_slug: agents-mcp
source_url: https://github.com/wheresryan22/anatomy
designeer_url: https://github.com/wheresryan22/anatomy
designeer_blurb: A skill for interactive isometric technical figures.
paywall: free
pricing_summary:
  'MIT-licensed public source; no paid tier is listed. Claude Code and model
  costs are not published.'
open_source: true
license: MIT
category_tags: [agent-skill, illustration, isometric, svg, webgl]
best_for: [technical explainers, interactive figures, docs illustrations]
stack: [claude-code, nodejs, react, nextjs]
agent_friendly: true
last_verified: 2026-10-11
---

# Anatomy

> A skill for interactive isometric technical figures. Use it to explain one
> mechanism as a detailed machine-like illustration inside docs, articles, or a
> landing page.

## At a glance

| Field          | Value                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| Source         | [GitHub repository](https://github.com/wheresryan22/anatomy)                     |
| Paywall        | **Free** — public MIT-licensed source; no paid tier is listed                    |
| Open source    | Yes — MIT ([license](https://github.com/wheresryan22/anatomy/blob/main/LICENSE)) |
| Type           | Claude Code skill and isometric drawing kit                                      |
| Works with     | Claude Code; Node.js builds; React 18+ for React output                          |
| Best for       | Technical explainers and interactive illustrations                               |
| Agent-friendly | Yes — installable skill with a documented slash command                          |

## What it is

Anatomy is a Claude Code skill and a small drawing kit. Give it a technical
idea, and it guides Claude to invent a physical object whose mechanism explains
that idea. It asks for accurate values and behavior, then builds the geometry,
motion, live readout, and surrounding card from one model.

The repository documents three render paths: shaded isometric SVG, optional SVG
with a WebGL effect layer, and a beta mode that reprojects moving parts in 3D.
The WebGL canvas sits between rear and front SVG layers; the SVG remains
readable when WebGL is unavailable. The README describes pointer and keyboard
interaction and a still state for reduced motion.

This is a focused illustration workflow, not a general diagram editor. It works
best when the concept maps to a recognizable machine, instrument, tool, or piece
of furniture.

## Paywall and pricing

- **Free:** The public repository and its MIT-licensed software are available
  without a listed purchase or paid tier. The README says the kit uses Node's
  built-in modules and does not require an API key.
- **Paid:** No paid Anatomy plan or usage price is listed. Claude Code and model
  costs are not published by this project.
- **Sign-up required?** No Anatomy account is listed. Claude Code is the
  documented harness and may have separate access or billing requirements.
- **Licence for client work:** The repository is MIT-licensed. Its license
  requires the copyright and permission notice to remain with copies or
  substantial portions. The official site also describes the skill and figures
  as MIT-licensed.

Do not extend the repository license to third-party assets or dependencies. The
product page names Inter and EB Garamond and credits the pictured hands to a
public-domain photograph, but it does not give separate font terms. Check each
asset's source and terms before reusing or redistributing it.

Checked 2026-10-11.

## How to use

1. In Claude Code, install the skill using its documented command:

   ```bash
   npx skills add wheresryan22/anatomy -g -a claude-code
   ```

2. Ask for a figure by naming the concept, its real values, the interaction, and
   where it will appear. The README's example invocation is:

   ```text
   /anatomy explain how a token bucket rate limiter works, interactive
   ```

3. Name the delivery you need: standalone HTML, an SVG file with embedded
   styles, or React/Next.js source. The README also documents building a
   framework-free example with Node, for example:

   ```bash
   node examples/dial-indicator/build.mjs
   ```

The commands above are documented references; they were not run for this
research task.

## Examples

- [Dial indicator](https://github.com/wheresryan22/anatomy/tree/240a9bf7c50cc6226148762a1017466fcbc08523/examples/dial-indicator)
  — The README describes a dial gauge over gauge blocks; pointer movement shifts
  the carriage. Evidence: README example table, not a rendered review.
- [Desk computer](https://github.com/wheresryan22/anatomy/tree/240a9bf7c50cc6226148762a1017466fcbc08523/examples/desk-computer)
  — The README describes a keyboard-driven CRT and a shutdown animation.
  Evidence: README example table, not a rendered review.
- [Raptor engine](https://github.com/wheresryan22/anatomy/tree/240a9bf7c50cc6226148762a1017466fcbc08523/examples/raptor-engine)
  — The README describes a test-stand engine with WebGL plume and steam effects
  between SVG layers. Evidence: README example table, not a rendered review.

## When to use it

- Use it when a docs page, article, or landing page needs an interactive
  physical illustration of one mechanism, with accurate values and behavior.
- Skip it for architecture, workflow, sequence, data-flow, or lifecycle
  diagrams. The official external
  [Archify repository](https://github.com/tt-a1i/archify) documents those
  diagram types; no Archify entry exists in this catalogue.
- Skip it for charts, maps, or people. The README excludes chart axes and
  series, exact maps, and people. If the concept has no physical mechanism, the
  result may be a poor fit.
- It can supply one figure for a landing page; it does not design the whole
  page, its sections, or its conversion flow. For a prompt-driven page editor,
  see [Aura](../agents-mcp/aura.md). For a custom 3D scene, see
  [Three.js](../3d/three-js.md).

## Agent notes

- **Harness:** Claude Code is the documented runtime for the skill. The
  repository does not document a public MCP server or API. Do not infer private
  API access.
- **Requirements:** Node.js 20.10+ is listed for builds and checks. The README
  says skills CLI 1.7.1 asks for Node.js 22.20+. Chrome or Chromium is needed
  for the browser checks. React 18+ is needed only for React output.
- **Dependencies:** The kit uses Node's built-in modules; React is the stated
  exception for React components. The repository does not require an
  `npm install` for the core kit.
- **Output and embedding:** The README documents standalone HTML, an SVG file
  with embedded styles, and React/Next.js components. It does not publish a
  transparent-background option, iframe API, or PNG/JPEG/WebP export. A README
  prompt requests a PNG preview, but no export procedure is specified.
- **Site versus repository:** The product page shows `anatomy-figures` and five
  themes; this skill README describes copied React examples and light/dark
  themes. The public npm registry confirms `anatomy-figures@0.1.0`, MIT, with
  React/react-dom 18+ peers and a separate `wheresryan22/anatomy-figures` repo.
  Package availability is verified; its component API and runtime were not
  tested. Do not infer that its install replaces the Claude Code skill.
- **Accessibility and motion:** The official product page says figures take
  keyboard focus, respond to keys, announce changing readouts to screen readers,
  and honor reduced motion. These behaviors were not independently tested.
- **WebGL and mobile:** WebGL effects require WebGL, with SVG as a readable
  fallback. The README reports 13–15 fps for its 380-part stress example on a
  throttled phone profile under heavy load. It gives no general mobile device
  guarantee. The 3D mode is beta and is not described as production-proven.
- **Stability:** The checked `main` revision is
  `240a9bf7c50cc6226148762a1017466fcbc08523` (2026-10-11). No stability policy
  is stated; treat the beta 3D path as experimental.

## Alternatives in this repo

- [Three.js](../3d/three-js.md) — use a general scene runtime when the figure
  needs custom 3D behavior beyond Anatomy's isometric machine workflow.
- [Aura](../agents-mcp/aura.md) — use its hosted editor when the job is to
  generate and edit a whole web page rather than one explanatory figure.
- External: [Archify](https://github.com/tt-a1i/archify) — use it for technical
  architecture and process diagrams. It has no registered document in this
  catalogue as of 2026-10-11.

## Sources

- [Official README](https://github.com/wheresryan22/anatomy/blob/main/README.md)
  — checked 2026-10-11; repository requirements, formats, examples, and limits.
- [Official SKILL.md](https://github.com/wheresryan22/anatomy/blob/main/SKILL.md)
  — checked 2026-10-11; workflow and figure constraints.
- [MIT license](https://github.com/wheresryan22/anatomy/blob/main/LICENSE) —
  checked 2026-10-11.
- [Official product page](https://skills.wheresryan.sh/anatomy) — checked
  2026-10-11; accessibility, themes, package examples, and asset
  acknowledgments.
- [Verified source revision](https://github.com/wheresryan22/anatomy/commit/240a9bf7c50cc6226148762a1017466fcbc08523)
  — `main`, checked 2026-10-11.
- [Official npm package metadata](https://registry.npmjs.org/anatomy-figures/0.1.0)
  — checked 2026-10-11; package availability, MIT licence, React peers and
  separate source repository. Package runtime was not tested.
- [Archify source](https://github.com/tt-a1i/archify) — checked 2026-10-11;
  linked as an external alternative, not as a catalogue entry.
