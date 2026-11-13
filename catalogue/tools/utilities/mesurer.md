---
name: Mesurer
slug: mesurer
section: Utilities
section_slug: utilities
source_url: 'https://mesurer.dev/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: On-screen tool checking website pixel spacing.
paywall: free
pricing_summary:
  'The MIT-licensed browser extension and React integration have no published
  paid tier.'
open_source: true
license: MIT
category_tags: [measurement, annotation, browser-extension, react]
best_for: [spacing audits, visual QA, design feedback]
stack: ['react', 'typescript']
execution_mode: package
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Mesurer

> On-screen tool checking website pixel spacing. It combines an in-browser
> overlay with a React component for measuring and annotating a live page.

## At a glance

| Field          | Value                                                     |
| -------------- | --------------------------------------------------------- |
| Source         | [mesurer.dev](https://mesurer.dev/)                       |
| Paywall        | **Free** — MIT-licensed source; no paid tier published    |
| Open source    | Yes — [MIT on GitHub](https://github.com/ibelick/mesurer) |
| Type           | Browser measurement and feedback tool                     |
| Works with     | Chromium browser and React 18+                            |
| Best for       | Layout inspection, spacing QA, and annotations            |
| Agent-friendly | Yes — package and MCP-oriented feedback workflow          |

## What it is

Mesurer is a visual inspection layer for a web page. Its documented controls
include measuring element bounds, guides and rulers, color picking, annotations,
screenshots, video capture, and comments for agent-assisted feedback. A browser
extension can inspect a page without changing the site; the React integration
can mount the overlay inside a development build.

The project is MIT-licensed and also exposes a React component. This makes it
useful when a designer or developer needs to describe a pixel-level issue
against the actual page rather than sending a separate screenshot with vague
coordinates.

Use the overlay as a review aid, not as a replacement for responsive checks,
accessibility review, or a source-of-truth design specification.

## Paywall and pricing

- **Free:** The repository and documented tool are available under the MIT
  licence.
- **Paid:** No paid tier or subscription price was published.
- **Sign-up required?** Not stated as a requirement for the local package.
- **Licence for client work:** MIT for the code; include the licence notice when
  redistributing copies or substantial portions.

Checked 2026-10-07 against the official project documentation and repository.

## How to use

For a React development page, install the package:

```bash
bun add mesurer
```

Mount the overlay alongside the page content:

```tsx
import { Measurer } from 'mesurer'

function App() {
  return (
    <>
      <YourApp />
      <Measurer />
    </>
  )
}
```

For a page that cannot be modified, use the official browser extension. Start
with measurements and guides, then add an annotation with the observed behavior
and expected result. Include the relevant viewport and a screenshot or recording
when handing the issue to a developer or coding agent.

## Examples

- [Mesurer React documentation](https://github.com/ibelick/mesurer) — mount the
  overlay in a React 18 or later development app.
- [Mesurer project site](https://mesurer.dev/) — overview of the browser
  inspection workflow.
- [Mesurer API and usage documentation](https://github.com/ibelick/mesurer#readme)
  — package setup and the documented measurement tools.

The project documents workflows and integrations rather than a gallery of
finished websites.

## When to use it

- Use it when a page is implemented and the team needs to compare actual
  spacing, alignment, color, or responsive behavior in the browser.
- Use annotations to turn a visual review into concrete, located change
  requests.
- Skip it when the issue is a product requirement or design decision that has
  not been settled; use a design brief or prototype review first.

## Agent notes

- Package: `mesurer`; install with `bun add mesurer`.
- React integration requires React 18 or later according to the repository.
- The official repository documents a `<Measurer />` component and a browser
  extension; verify current extension installation instructions on the site.
- Use comments that identify a selector or region, expected result, and
  viewport. Do not treat a screenshot alone as a complete responsive test.
- Repository: [ibelick/mesurer](https://github.com/ibelick/mesurer).

## Alternatives in this repo

- [Agentation](../agents-mcp/agentation.md) — use when the main task is
  attaching feedback for a coding agent.
- [Screenshot Studio](../utilities/screenshot-studio.md) — use for preparing
  framed screenshot assets rather than inspecting live spacing.
- [Hallmark](../utilities/hallmark.md) — use when an agent needs broader visual
  audit and redesign guidance.

## Sources

- [Official Mesurer site](https://mesurer.dev/) — checked 2026-10-07
- [Mesurer GitHub repository](https://github.com/ibelick/mesurer) — checked
  2026-10-07
- [Repository README](https://github.com/ibelick/mesurer#readme) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
