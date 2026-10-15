---
name: Shadcn Labs
slug: shadcn-labs
section: Component Libraries
section_slug: component-libraries
source_url: https://www.shadcn-labs.com/
designeer_url: https://designeer.xyz/components
designeer_blurb:
  'Open-source shadcn/ui component registries and tools ecosystem.'
paywall: free
pricing_summary:
  'Free and open source ecosystem supported by community sponsors.'
open_source: true
license: MIT
category_tags: [shadcn, registry-ecosystem, devtools, react]
best_for: [shadcn discovery, specialized registries, modern web apps]
stack: ['astro', 'react', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui', 'cli-tui', 'video', 'email', 'pdf', 'og-image']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Shadcn Labs

> Open-source shadcn/ui component registries and tools ecosystem. TolongLabs
> developers reach for Shadcn Labs as a central catalog of specialized,
> domain-specific component registries extending the shadcn/ui paradigm into
> terminals, video, email, PDF, and rich text.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [shadcn-labs.com](https://www.shadcn-labs.com/)               |
| Paywall        | **Free** — 100% free and open source                          |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs))          |
| Type           | Registry ecosystem, developer community, and tooling hub      |
| Works with     | React, Next.js, Astro, Tailwind CSS, shadcn CLI               |
| Best for       | shadcn discovery, specialized registries, modern web apps     |
| Agent-friendly | Yes — public registries, CLI commands, agent skills endpoints |

## What it is

Shadcn Labs is an open-source collective and umbrella organization founded by
Aniket Pawar (@aniketpawar). While the original shadcn/ui library focuses on
core web application controls (buttons, dialogs, dropdowns), Shadcn Labs extends
this modular, copy-paste architecture into specialized software engineering
verticals.

The ecosystem unites a suite of dedicated registries that adhere to the standard
shadcn registry specification:

- **termcn:** Terminal UI components for Ink and OpenTUI.
- **framecn:** Programmatic video composition components powered by Editframe.
- **emailcn:** Cross-client email templates for React Email and MJML.
- **pdfcn:** Paginated document generation for Takumi and Forme.
- **editorcn:** Rich text and Notion-style block editors built on Tiptap.
- **startercn:** The foundational template and compiler used to build and
  publish new registries.
- **Additional registries:** Specialized tooling for AI agents (`agentcn`),
  social card generation (`ogimagecn`), WebGL shaders (`shadercn`), and MCP
  integrations (`mcpcn`).

Every project under Shadcn Labs maintains zero-vendor lock-in: components are
installed directly as source files into consumer repositories using the standard
`npx shadcn add` CLI command.

## Paywall and pricing

- **Free:** The entire ecosystem of registries, tools, templates, and
  documentation is 100% free and open source.
- **Paid:** None. The organization is supported by open-source community
  sponsorships.
- **Sign-up required?** No.
- **Licence for client work:** Projects within the organization are licensed
  under the MIT licence. All code may be freely modified and deployed in client
  and commercial solutions.

Checked on the official website and GitHub organization on 2026-10-07.

## How to use

1. Browse the centralized directory at
   [shadcn-labs.com](https://www.shadcn-labs.com/) to identify the
   domain-specific registry required for your project.

2. Install components from any Shadcn Labs registry using the standard shadcn
   CLI:

```bash
# Terminal components
bunx --bun shadcn@latest add @termcn/ink/spinner

# Rich text editor
bunx --bun shadcn@latest add @editorcn/editor

# Responsive email block
bunx --bun shadcn@latest add @emailcn/react-email/block-onboarding-default
```

3. Configure custom registries in your project's `components.json` if combining
   multiple registries in a single monorepo.

## Examples

- [Shadcn Labs Official Portal](https://www.shadcn-labs.com/) — Main hub
  showcasing active registries, maintainers, and community links.
- [Shadcn Labs GitHub Organization](https://github.com/shadcn-labs) — Monorepo
  and standalone repositories for all domain registries.
- [startercn Template](https://startercn.vercel.app/) — The foundational starter
  template powering Shadcn Labs registry documentation.

## When to use it

- Use it as an architectural index when your web application requires
  capabilities beyond standard HTML forms (e.g. video generation, terminal
  renderers, or printable PDF documents).
- Use it to leverage unified design token conventions across web, email,
  document, and terminal interfaces.
- Skip it if your application only requires standard, general-purpose web
  application components already found in core shadcn/ui.

## Agent notes

- Official hub URL: `https://www.shadcn-labs.com/`.
- GitHub organization: `https://github.com/shadcn-labs`.
- All member projects publish compatible `registry.json` endpoints ingestible by
  the shadcn CLI and automated coding agent tools.
- Compatible with Bun, Node.js, and pnpm package management workflows.

## Alternatives in this repo

- [startercn](../component-libraries/startercn.md) — The registry template
  provided by Shadcn Labs to author your own component collections.
- [Shoogle](../component-libraries/shoogle.md) — Universal search engine
  indexing blocks across hundreds of public shadcn registries.

## Sources

- [Shadcn Labs Official Portal](https://www.shadcn-labs.com/) — checked
  2026-10-07
- [Shadcn Labs GitHub Organization](https://github.com/shadcn-labs) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
