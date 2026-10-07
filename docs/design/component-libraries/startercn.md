---
name: startercn
slug: startercn
section: Component Libraries
section_slug: component-libraries
source_url: https://startercn.vercel.app/
designeer_url: https://designeer.xyz/components
designeer_blurb:
  'shadcn/ui registry template with docs, landing page, and agent support.'
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [shadcn, registry-template, fumadocs, nextjs, llms-txt]
best_for: [custom component registries, design systems, open source kits]
stack: [react, nextjs, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# startercn

> shadcn/ui registry template with docs, landing page, and agent support.
> TolongLabs developers reach for startercn to publish and maintain custom
> component registries with built-in documentation, AI agent endpoints, and
> registry distribution infrastructure.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [startercn.vercel.app](https://startercn.vercel.app/)          |
| Paywall        | **Free** — 100% free and open source                           |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs/startercn)) |
| Type           | Registry template and developer boilerplate                    |
| Works with     | Next.js, React, Tailwind CSS, Fumadocs                         |
| Best for       | Custom component registries, design systems, open-source kits  |
| Agent-friendly | Yes — native llms.txt, agent skills discovery, Fumadocs docs   |

## What it is

startercn is an open-source starter template created by Aniket Pawar under
Shadcn Labs. It provides everything necessary to build, document, and publish a
custom shadcn-compatible component registry.

With the proliferation of custom shadcn registries across the React ecosystem,
engineering teams frequently need an end-to-end framework to host component
code, generate the required `registry.json` schema files, and present an
attractive documentation site. startercn delivers this out of the box using
Next.js and Fumadocs.

Beyond standard component previews, startercn comes equipped with modern web
enhancements:

- **AI Agent Endpoints:** Built-in `llms.txt`, `llms-full.txt`, and automated
  agent skills discovery routes so coding agents can inspect and consume the
  registry programmatically.
- **Micro-Interactions & Sensory Polish:** Pre-configured audio feedback via
  `@web-kits/audio`, haptic triggers for mobile devices via `web-haptics`, and
  smooth layout transitions with Motion.
- **Documentation Infrastructure:** Documentation pages powered by Fumadocs,
  complete with code copy buttons, variant switchers, and dark mode toggles.
- **Registry Compiler:** Automated build scripts that transform internal source
  components into static JSON registry manifests consumable via
  `npx shadcn add`.

## Paywall and pricing

- **Free:** The starter template and all included features are 100% free and
  open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** MIT licence. Can be freely adapted, rebranded,
  and used for client design systems or commercial SaaS component hubs.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Clone or instantiate the template into a new repository:

```bash
git clone https://github.com/shadcn-labs/startercn.git my-registry
cd my-registry
bun install
```

2. Add your custom components into the `registry/` directory and configure their
   metadata in `registry.json`.

3. Build the static registry manifests:

```bash
bun run registry:build
```

4. Deploy to Vercel or Cloudflare Pages. Users can now install your custom
   components using the standard shadcn CLI:

```bash
bunx --bun shadcn@latest add https://your-domain.com/r/my-component.json
```

## Examples

- [startercn Demo Site](https://startercn.vercel.app/) — Live deployment of the
  starter kit showing the landing page and component directory.
- [startercn Documentation](https://startercn.vercel.app/docs) — Example
  Fumadocs site illustrating component guides and install tabs.
- [startercn GitHub Repository](https://github.com/shadcn-labs/startercn) —
  Source code containing the registry builder and configuration files.

## When to use it

- Use it when your team or agency wants to build and publish a private or public
  shadcn component registry for client work or open source.
- Use it when you need automated documentation, live component playgrounds, and
  `llms.txt` agent integration without building infrastructure from scratch.
- Skip it when you just need to consume existing UI components rather than
  publish a new registry; use [Nexvyn UI](../component-libraries/nexvyn-ui.md)
  or [Sona UI](../component-libraries/sona-ui.md) instead.

## Agent notes

- Official documentation URL: `https://startercn.vercel.app/docs`.
- Native agent discovery: `https://startercn.vercel.app/llms.txt` and
  `https://startercn.vercel.app/llms-full.txt`.
- Pre-configured with Fumadocs, Next.js App Router, Tailwind CSS, and Motion.
- Registry builder scripts compile components into standard shadcn schema format
  ready for deployment.

## Alternatives in this repo

- [Shadcn Labs](../component-libraries/shadcn-labs.md) — The ecosystem of
  specialized registries that utilizes this template pattern.
- [Shoogle](../component-libraries/shoogle.md) — Cross-registry search engine
  for discovering blocks across public registries.

## Sources

- [startercn Official Website](https://startercn.vercel.app/) — checked
  2026-10-07
- [startercn Documentation](https://startercn.vercel.app/docs) — checked
  2026-10-07
- [startercn GitHub Repository](https://github.com/shadcn-labs/startercn) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
