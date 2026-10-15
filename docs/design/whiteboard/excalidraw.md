---
name: 'Excalidraw'
slug: 'excalidraw'
section: 'Whiteboard'
section_slug: 'whiteboard'
source_url: 'https://excalidraw.com/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Collaborative whiteboard with hand-drawn sketch aesthetic.'
paywall: freemium
pricing_summary:
  'The Excalidraw app and MIT-licensed React package are free; Excalidraw+
  starts at $6 per user per month.'
open_source: true
license: MIT
category_tags: ['whiteboard', 'diagrams', 'wireframes', 'react']
best_for: ['sketch diagrams', 'wireframes', 'canvas embedding']
stack: ['react', 'typescript']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Excalidraw

> Collaborative whiteboard with hand-drawn sketch aesthetic.

> Use it to embed quick, hand-drawn diagrams without building canvas
> interactions from scratch.

## At a glance

| Field          | Value                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Source         | [excalidraw.com](https://excalidraw.com/)                                                                              |
| Paywall        | **freemium** — The Excalidraw app and MIT-licensed React package are free; Excalidraw+ starts at $6 per user per month |
| Open source    | Yes — MIT                                                                                                              |
| Type           | Whiteboard app and React package                                                                                       |
| Works with     | Web, React, TypeScript                                                                                                 |
| Best for       | sketch diagrams, wireframes, canvas embedding                                                                          |
| Agent-friendly | Yes — npm package, source repository, and documented integration examples                                              |

## What it is

Excalidraw is a browser whiteboard for hand-drawn diagrams, notes, and
wireframes. Its editor has an intentionally rough visual style, local editing,
export, and sharing features.

The open-source React package embeds the editor in another product. The hosted
Excalidraw+ service adds cloud and team features; those hosted capabilities
should not be assumed to come with the package.

## Paywall and pricing

- The public Excalidraw app and the React package are free. No account is
  required to draw locally in the basic app.
- Excalidraw+ is listed at $6 per user per month and adds hosted scenes, sync,
  and team features.
- Sign-up is required for Excalidraw+ collaboration features, not for the local
  app.
- The package is MIT licensed, including commercial use subject to the MIT
  license.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Add the package and its React peer dependencies with the command below, then
  give its parent a defined height and width.
- Import the package CSS once, then render the editor where the drawing surface
  belongs.
- Use the documented imperative API or initial data when an application needs to
  load or save scenes.
- Use Excalidraw+ for the hosted collaboration product; its app services are
  distinct from the MIT package.

```bash
bun add react react-dom @excalidraw/excalidraw
```

```tsx
import { Excalidraw } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'

export default function Drawing() {
  return (
    <div style={{ height: '100vh' }}>
      <Excalidraw />
    </div>
  )
}
```

## Examples

- [Next.js integration example](https://github.com/excalidraw/excalidraw/tree/master/examples/with-nextjs)
  — Reference for embedding the editor in a Next.js app.
- [Browser script example](https://github.com/excalidraw/excalidraw/tree/master/examples/with-script-in-browser)
  — Shows a browser-based integration outside a typical app scaffold.
- [Hosted editor](https://excalidraw.com/) — Try the sketch-first workflow and
  export behavior.

## When to use it

- Use it for rough diagrams, workshop boards, or a sketch aesthetic that makes
  drafts feel approachable.
- Skip it when the canvas needs a fully bespoke visual language or custom data
  model; evaluate tldraw instead.

## Agent notes

- Package: @excalidraw/excalidraw. The docs installation page lists the React
  dependencies and import setup.
- The parent container must have nonzero dimensions or the editor will not be
  visible.
- The hosted app includes collaboration features that are not a drop-in backend
  in the open-source component.
- For Next.js, follow the repository example and avoid server-rendering the
  browser-only editor.

## Alternatives in this repo

- [tldraw](../whiteboard/tldraw.md) — Extensible React SDK for highly customized
  canvas products.
- [Obsidian](../whiteboard/obsidian.md) — Local-first Markdown system for
  durable notes rather than live drawing.

## Sources

- [Official app](https://excalidraw.com/) — checked 2026-10-07
- [Documentation](https://docs.excalidraw.com/docs) — checked 2026-10-07
- [Package installation](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/installation)
  — checked 2026-10-07
- [Excalidraw+ pricing](https://plus.excalidraw.com/pricing) — checked
  2026-10-07
- [GitHub repository and license](https://github.com/excalidraw/excalidraw) —
  checked 2026-10-07
- [Next.js example](https://github.com/excalidraw/excalidraw/tree/master/examples/with-nextjs)
  — checked 2026-10-07
- [Browser example](https://github.com/excalidraw/excalidraw/tree/master/examples/with-script-in-browser)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07;
  page was not readable in the research browser.
