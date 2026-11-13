---
name: 'tldraw'
slug: 'tldraw'
section: 'Whiteboard'
section_slug: 'whiteboard'
source_url: 'https://tldraw.com/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Infinite whiteboard library offering React SDK.'
paywall: freemium
pricing_summary:
  'The whiteboard app is free; the SDK has a 100-day trial and commercial
  production use requires a license with no public price.'
open_source: false
license: proprietary
category_tags: ['whiteboard', 'canvas', 'react', 'sdk']
best_for: ['custom canvas apps', 'diagrams', 'collaborative whiteboards']
stack: ['react', 'typescript']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# tldraw

> Infinite whiteboard library offering React SDK.

> Reach for it when a product needs a custom, interactive canvas inside a React
> app.

## At a glance

| Field          | Value                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [tldraw.com](https://tldraw.com/)                                                                                                            |
| Paywall        | **freemium** — The whiteboard app is free; the SDK has a 100-day trial and commercial production use requires a license with no public price |
| Open source    | No — proprietary                                                                                                                             |
| Type           | React canvas SDK                                                                                                                             |
| Works with     | React, TypeScript                                                                                                                            |
| Best for       | custom canvas apps, diagrams, collaborative whiteboards                                                                                      |
| Agent-friendly | Yes — SDK packages, copyable examples, and LLM-oriented docs                                                                                 |

## What it is

tldraw is a React SDK for building infinite-canvas applications. Its SDK
includes a ready-made editor, shape and tool systems, selection, keyboard
interactions, themes, and APIs for custom shapes and tools.

The hosted tldraw whiteboard is a separate product from the SDK. The SDK is
useful when a product needs a canvas that feels native to its workflow, such as
planning, visual collaboration, or diagramming.

## Paywall and pricing

- The hosted whiteboard app is free to use.
- The SDK can be tried without a license for 100 days. A hobby license may be
  granted at tldraw's discretion and includes a watermark.
- Production use needs a valid license. Commercial pricing is quoted and not
  published.
- Sign-up is not needed to inspect the SDK; a license key is needed for licensed
  production use. The license is proprietary, not an OSI open-source license.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Scaffold the official starter with the command below, or add the SDK to an
  existing React project.
- Render the editor in a container with a nonzero size. Import the package
  stylesheet globally.
- Start from the default editor, then add custom shapes, tools, or persistence
  only when the product requires them.
- For shared sessions, evaluate tldraw's sync package and its deployment model;
  the SDK alone does not provide a hosted collaboration backend.

```bash
npm create tldraw@latest
```

```tsx
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw />
    </div>
  )
}
```

## Examples

- [ClickUp whiteboards](https://tldraw.dev/blog/clickup) — A product case study
  on rebuilding collaborative whiteboards.
- [Padlet Sandbox](https://tldraw.dev/blog/padlet) — A case study of a freeform
  canvas embedded in a learning product.
- [Mobbin custom tools](https://tldraw.dev/blog/mobbin) — A case study showing
  product-specific tools on top of the editor.

## When to use it

- Use it when a web product needs an editable, extensible canvas with React
  integration.
- Skip it for a static diagram or a simple board that can be embedded as an
  image; use Excalidraw for a sketch-first whiteboard.

## Agent notes

- Package: tldraw. Quick Start and API reference are the primary implementation
  sources.
- The editor needs a sized parent element. Import tldraw/tldraw.css in the app
  entry point.
- Production licensing is a deployment requirement. Confirm the license and key
  before shipping to users.
- The sync package is a separate piece; plan authentication, persistence, and
  hosting rather than assuming the SDK supplies them.

## Alternatives in this repo

- [Excalidraw](../whiteboard/excalidraw.md) — Open-source sketch-style
  whiteboard and React embed.
- [Obsidian](../whiteboard/obsidian.md) — Local Markdown knowledge base for
  linked project notes.

## Sources

- [Official site](https://tldraw.com/) — checked 2026-10-07
- [SDK documentation](https://tldraw.dev/) — checked 2026-10-07
- [Quick Start](https://tldraw.dev/quick-start) — checked 2026-10-07
- [Pricing](https://tldraw.dev/pricing) — checked 2026-10-07
- [License](https://tldraw.dev/community/license) — checked 2026-10-07
- [ClickUp case study](https://tldraw.dev/blog/clickup) — checked 2026-10-07
- [Padlet case study](https://tldraw.dev/blog/padlet) — checked 2026-10-07
- [Mobbin case study](https://tldraw.dev/blog/mobbin) — checked 2026-10-07
- [GitHub repository](https://github.com/tldraw/tldraw) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07;
  page was not readable in the research browser.
