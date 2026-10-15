---
name: Vessa
slug: vessa
section: Utilities
section_slug: utilities
source_url: https://vessa.design/
designeer_url: https://designeer.xyz/utilities
designeer_blurb: Publish brand guidelines as live pages.
paywall: freemium
pricing_summary:
  'Build guidelines free; publishing is a one-time fee of €39 (or €25.35 launch
  offer) per brand with no subscription.'
open_source: false
license: proprietary
category_tags:
  [brand-guidelines, design-tokens, client-handoff, mcp, animated-branding]
best_for: [brand guidelines, client handoff, design systems, design tokens]
stack: []
execution_mode: browser-app
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Vessa

> Publish brand guidelines as live pages. TolongLabs developers reach for Vessa
> to replace static, neglected brand guideline PDFs with interactive web links
> featuring one-click color copying, live CSS motion values, and MCP agent
> authoring.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [vessa.design](https://vessa.design/)                           |
| Paywall        | **Freemium** — Build free; publish €39 (launch €25.35) one-time |
| Open source    | No — Proprietary web platform and brand hosting service         |
| Type           | Interactive brand guideline builder and publishing platform     |
| Works with     | Web browsers, MCP clients (Claude, Cursor, ChatGPT), CSS, SVG   |
| Best for       | Brand guidelines, client handoff, design tokens, motion specs   |
| Agent-friendly | Yes — Built-in Model Context Protocol (MCP) server support      |

## What it is

Vessa is a web publishing tool created to modernize brand identity delivery. In
conventional design workflows, agencies spend weeks developing brand identities
only to flatten them into static 60-page PDF decks that clients rarely open and
developers struggle to translate accurately into code.

Vessa converts brand guidelines into responsive, live web pages delivered at a
single permalink (such as `vessa.design/brand/your-brand`). Every brand element
on the page is interactive:

- **Colors:** Clicking a swatch copies the exact hex, RGB, or design token value
  directly to the clipboard.
- **Motion:** Rather than vague descriptions, transitions play in real time with
  exact CSS duration and easing curve values exposed for engineering teams.
- **Typography & Logos:** Font specimens and logo asset variants (SVG, vector)
  are downloadable directly from the live page.

Crucially, Vessa integrates with the Model Context Protocol (MCP). Designers and
developers can connect Claude, Cursor, or ChatGPT to Vessa's MCP server, point
the AI at a brand folder or existing website URL, and have the agent populate
sections, upload logos, extract color tokens, and draft the entire guideline
collaboratively.

## Paywall and pricing

- **Free:** Building, drafting, and editing the entire brand guideline is
  completely free. No credit card is required to create a project.
- **Paid:** Publishing a guideline to a public live URL requires a one-time
  payment with no ongoing subscriptions:
  - **One brand:** Standard price €39 one-time (launch offer €25.35 + VAT).
  - **Five brands:** Standard price €195 one-time (launch offer €126.75 + VAT)
    for multi-client studios.
- **Sign-up required?** Yes, an account is required to draft and publish
  guidelines.
- **Licence for client work:** Commercial client handoff is the primary design
  goal. Clients never receive a bill or renewal notice; published links stay
  live and editable indefinitely.

Verified on the official pricing and web application on 2026-10-07.

## How to use

1. Sign up at [vessa.design](https://vessa.design/) and start a new brand.
2. Enter your live website URL to automatically scan and import existing fonts,
   primary colors, and logo marks, or draft from a written brief.
3. Connect Vessa via MCP to your AI coding agent (Cursor, Claude, or ChatGPT) to
   populate guidelines directly from your local project repository:

```json
{
  "mcpServers": {
    "vessa": {
      "url": "https://vessa.design/mcp"
    }
  }
}
```

4. Define your brand's motion parameters (e.g. `duration: 200ms`,
   `ease: cubic-bezier(0.16, 1, 0.3, 1)`) so front-end developers can replicate
   animations with exact values.
5. Review the interactive draft and publish when ready to your custom brand link
   (`vessa.design/brand/client-name`).
6. Share the link with engineering and client stakeholders for immediate token
   inspection and asset downloads.

## Examples

- [Vessa Platform](https://vessa.design/) — Official web application and builder
  overview.
- [Vessa Pricing Section](https://vessa.design/#pricing) — Transparent one-time
  brand publishing model with zero recurring subscriptions.
- [Live Brand Demo](https://vessa.design/brand/vanta) — Interactive specimen
  demonstrating live color copying, token tables, and motion previews.

## When to use it

- Use it when concluding a client branding or web design project to provide an
  interactive handoff that clients and developers will actually consult.
- Use it when you need to specify exact animation timings and easing curves
  alongside static visual identity assets.
- Skip it if you only need raw screenshot mockups; use
  [ui.camera](../utilities/ui-camera.md) or [Ray.so](../utilities/ray-so.md).
- Skip it if you are looking for social preview cards; use
  [OGFolio](../utilities/ogfolio.md) instead.

## Agent notes

- Official site: `https://vessa.design/`.
- First-class MCP support: AI agents in Cursor or Claude can read brand tokens
  and write sections directly via MCP.
- URLs stay editable after publication; updating a color or logo in Vessa
  propagates immediately to the live link without re-issuing files to clients.

## Alternatives in this repo

- [ui.camera](../utilities/ui-camera.md) — 3D scene staging tool for software
  product photography and marketing mockups.
- [OGFolio](../utilities/ogfolio.md) — Gallery and validator for Open Graph
  social sharing cards and meta tags.
- [Design Minis](../utilities/design-minis.md) — Curated collection of
  single-purpose micro design utilities.

## Sources

- [Official site](https://vessa.design/) — checked 2026-10-07
- [Pricing section](https://vessa.design/#pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
