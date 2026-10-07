---
name: Hyperbrowser Design.md
slug: hyperbrowser-design-md
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://design-md.hyperbrowser.ai/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'DESIGN.MD generator extracting rules from websites.'
paywall: freemium
pricing_summary:
  'Hyperbrowser lists 5,000 free credits, $0.001 per credit, and paid plans
  starting at $30/month.'
open_source: false
license: unknown
category_tags: [design-systems, web-extraction, api]
best_for: ['website to DESIGN.md', 'agent research']
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Hyperbrowser Design.md

> DESIGN.MD generator extracting rules from websites. TolongLabs use: Use its
> browser extractor to turn a public reference site into DESIGN.md context.

## At a glance

| Field          | Value                                                     |
| -------------- | --------------------------------------------------------- |
| Source         | [Official site](https://design-md.hyperbrowser.ai/)       |
| Paywall        | **Freemium** — 5,000 free credits; paid plans from $30/mo |
| Open source    | No — unknown                                              |
| Type           | Browser-based DESIGN.md extractor                         |
| Works with     | Browser, Hyperbrowser API, Markdown                       |
| Best for       | website to DESIGN.md, agent research                      |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use                    |

## What it is

Hyperbrowser Design.md is a browser-based tool for extracting DESIGN.md from a
website, following Google’s open format. Its page asks for a Hyperbrowser API
key and says the key stays in the browser.

The app page is JavaScript-driven and displayed a loading shell during review,
so its live form could not be inspected end to end. Hyperbrowser pricing
documents credits; review generated files for coverage and accuracy.

## Paywall and pricing

- **Free:** A Hyperbrowser account lists 5,000 free credits. The generator
  requires its API key.
- **Paid:** Usage is $0.001 per credit; Startup is $30/month and Scale is
  $100/month. Check current allowances and billing details.
- **Sign-up required?:** Yes. Create or use a Hyperbrowser account to obtain an
  API key.
- **Licence for client work:** The generator page does not link a source
  repository or publish an app license. Treat the hosted tool as closed source;
  confirm service and source-site rights for client work.

Checked 2026-10-07.

## How to use

1. Open the generator and enter a public website URL and a Hyperbrowser API key.
   Review privacy details before using a production credential.

2. Generate the DESIGN.md and inspect type, color, spacing, and component
   guidance. Compare several source pages rather than treating one capture as
   complete.

3. Keep useful rules in project context and ask the agent to use client-owned
   content and assets; check the result at multiple breakpoints.

## Examples

- [Apple public site input](https://www.apple.com/) — Try a consumer-product
  marketing site as an extraction input.
- [Stripe public site input](https://stripe.com/) — Try a financial platform
  with product and story sections.
- [Linear public site input](https://linear.app/) — Try a SaaS product site with
  a product-led direction.

## When to use it

- Use it when a public URL should become agent-readable design context and you
  have Hyperbrowser credits.
- Skip it for private sources or when extraction fails; use a manual audit or a
  similar catalog entry.

## Agent notes

Markdown output is directly usable by an agent after a human checks it.

No CLI or MCP setup was exposed by the generator page. Keep API keys out of
prompts and source control.

## Alternatives in this repo

- [designmd.supply](../agents-mcp/designmd-supply.md) — Use a simple hosted
  generator with an MIT-licensed codebase.
- [designmd.me](../agents-mcp/designmd-me.md) — Use a CLI-enabled extractor with
  documented credit costs.
- [getdesign.md](../agents-mcp/getdesign-md.md) — Select a prebuilt analysis
  instead of extracting a site.

## Sources

- [Generator](https://design-md.hyperbrowser.ai/) — checked 2026-10-07
- [Hyperbrowser pricing](https://www.hyperbrowser.ai/) — checked 2026-10-07
- [Apple input](https://www.apple.com/) — checked 2026-10-07
- [Stripe input](https://stripe.com/) — checked 2026-10-07
- [Linear input](https://linear.app/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
