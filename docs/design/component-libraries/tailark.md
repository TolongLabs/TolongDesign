---
name: 'Tailark'
slug: tailark
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://tailark.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Tailwind sections and components for marketing.'
paywall: freemium
pricing_summary:
  'Free Mist, Dusk, and Veil kits are available; paid plans start at $249
  one-time for Essentials, with Complete at $299 and Team at $499.'
open_source: true
license: 'unknown'
category_tags: [react, tailwind, blocks, marketing]
best_for: [marketing pages, landing pages]
stack: [react, nextjs, tailwind, shadcn]
agent_friendly: true
last_verified: 2026-10-07
---

# Tailark

> Tailwind sections and components for marketing. Yes — shadcn registry, setup
> prompts, and MCP server.

## At a glance

| Field          | Value                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Source         | [tailark.com](https://tailark.com/)                                                                                                                    |
| Paywall        | **Freemium** — Free Mist, Dusk, and Veil kits are available; paid plans start at $249 one-time for Essentials, with Complete at $299 and Team at $499. |
| Open source    | Source is public or described as OSS; licence caveat is below.                                                                                         |
| Type           | Marketing block and page registry                                                                                                                      |
| Works with     | Next.js App Router, shadcn/ui, Tailwind CSS, Base UI, or Radix UI                                                                                      |
| Best for       | marketing pages, landing pages                                                                                                                         |
| Agent-friendly | Yes — Yes — shadcn registry, setup prompts, and MCP server                                                                                             |

## What it is

Tailark is a shadcn registry of editable marketing blocks, full pages,
illustrations, and supporting files. Developers add a registry namespace to
components.json and install items with the shadcn CLI.

Free open-source kits are Mist, Dusk, and Veil. Paid Quartz content adds more
blocks, illustrations, and pages. Tailark supports Base UI and Radix UI
variants, with separate registry paths for each base.

The free kits are described as OSS, but the official pages reviewed did not
identify an SPDX licence. Treat the licence for a specific item as unverified
until its source metadata confirms it.

## Paywall and pricing

- **Free:** Mist, Dusk, and Veil blocks and pages are available without an
  account or API key.
- **Paid:** Essentials is $249 one-time, Complete is $299 one-time, and Team is
  $499 one-time on the current pricing page.
- **Sign-up required?** No for free kits. Paid Quartz content requires a plan,
  account, and API key.
- **Licence for client work:** Free registries are labelled OSS. Check
  item-level licensing before client delivery; no SPDX identifier was surfaced
  in the reviewed docs.

Pricing and access were checked on 2026-10-07.

## How to use

1. Use a Next.js App Router project with shadcn initialized. Pick Base UI or
   Radix UI and use the matching registry path.

2. Register @tailark-oss in components.json for free kits. For Quartz, configure
   the paid @tailark registry and keep its API key in .env.local.

3. Browse a block or page and copy its exact install command from the preview.
   Registry names depend on the selected base, so do not guess them.

4. Inspect the copied source, replace demo text, images, links, and plan
   details, then check responsive and dark-mode states.

Official setup or install command:

```bash
npx shadcn@latest init
```

Minimal documented usage or configuration example:

```json
{
  "registries": {
    "@tailark-oss": "https://oss.tailark.com/r/{name}.json"
  }
}
```

## Examples

- [Pricing Block Three](https://tailark.com/blog/shadcn-pricing-block-three) —
  Three self-serve tiers plus an enterprise contact row.
- [Feature Block Three](https://tailark.com/blog/shadcn-features-block-three) —
  A compact three-card proof strip with responsive notes.
- [Team Block Three](https://tailark.com/blog/shadcn-team-block-three) — A dense
  leadership grid with portrait and crop guidance.
- [Libre page](https://tailark.com/pages/quartz/libre) — A full-page example
  linked from Tailark.

## When to use it

- Use it when a Next.js marketing site needs editable sections or page
  scaffolding that fits an existing shadcn setup.
- Skip it when you need a framework-agnostic package or a documented permissive
  licence for every asset; compare
  [shadcn/ui](../component-libraries/shadcn-ui.md) or
  [shadcnblocks](../component-libraries/shadcnblocks.md).

## Agent notes

- Docs: https://tailark.com/docs. Quick setup assumes Next.js App Router and
  initialized shadcn.
- Free registry names are @tailark-oss; paid Quartz uses @tailark and an API
  key.
- Base UI uses /r/{name}.json; Radix projects use /r/radix/{name}.json.
- Use the site-generated command for each item and keep TAILARK_API_KEY out of
  source control.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — The underlying copyable
  primitive system.
- [shadcnblocks](../component-libraries/shadcnblocks.md) — A paid and free
  collection of shadcn page blocks.
- [Blocks.so](../component-libraries/blocks-so.md) — Another source for
  ready-made Tailwind sections.

## Sources

- [Tailark home](https://tailark.com/) — checked 2026-10-07
- [Documentation](https://tailark.com/docs) — checked 2026-10-07
- [Quick setup](https://tailark.com/docs/quick-setup) — checked 2026-10-07
- [Pricing](https://tailark.com/pricing) — checked 2026-10-07
- [Pricing Block Three](https://tailark.com/blog/shadcn-pricing-block-three) —
  checked 2026-10-07
- [Feature Block Three](https://tailark.com/blog/shadcn-features-block-three) —
  checked 2026-10-07
- [Team Block Three](https://tailark.com/blog/shadcn-team-block-three) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
