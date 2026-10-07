---
name: mcpcn
slug: mcpcn
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://mcpcn.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'ChatGPT, Claude, and MCP app UI components for React.'
paywall: free
pricing_summary:
  'The React component registry is free and open source under MIT.'
open_source: true
license: MIT
category_tags: [react, mcp-apps, components]
best_for: ['MCP app interfaces', 'ChatGPT and Claude UI blocks']
stack: [react, typescript, base-ui, shadcn]
agent_friendly: true
last_verified: 2026-10-07
---

# mcpcn

> ChatGPT, Claude, and MCP app UI components for React. TolongLabs use: Use its
> copyable React blocks to build interfaces for MCP-enabled apps.

## At a glance

| Field          | Value                                            |
| -------------- | ------------------------------------------------ |
| Source         | [Official site](https://mcpcn.dev/)              |
| Paywall        | **Free** — Free MIT component registry           |
| Open source    | Yes — MIT                                        |
| Type           | Copy-paste React components for MCP Apps         |
| Works with     | React, Base UI, shadcn CLI, OpenUI               |
| Best for       | MCP app interfaces, ChatGPT and Claude UI blocks |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use           |

## What it is

mcpcn is a shadcn-compatible registry of copyable React components for MCP Apps,
including ChatGPT and Claude interfaces. It uses Base UI and offers form, list,
status, messaging, social, and event blocks.

The CLI copies source into the project so the team can inspect and customize
components instead of depending on a hosted runtime. Docs cover installation,
examples, OpenUI, and MCP.

## Paywall and pricing

- **Free:** Components, registry, and source are free and MIT licensed.
- **Paid:** No paid tier or charge was listed.
- **Sign-up required?:** No mcpcn account is required; a React project and
  shadcn CLI are needed.
- **Licence for client work:** MIT permits commercial use subject to license
  terms and notices. Check dependency and copied-asset licenses separately.

Checked 2026-10-07.

## How to use

1. Open component docs and choose a block matching the interaction. Check
   prerequisites and Apps SDK guidance before adding it.

2. Use the shadcn CLI to copy the component into the project; the docs provide a
   Bun package-runner option.

3. Compose the copied component with real MCP app data and actions. Test the
   embedded viewport and keyboard behavior, not only a full page.

```bash
bunx shadcn@latest add @mcpcn/contact-form
```

```tsx
import {
  ContactForm,
  ContactFormActions,
  ContactFormContactFields,
  ContactFormContent,
  ContactFormHeader,
  ContactFormMessageField,
  ContactFormNameFields
} from '@/components/ui/contact-form'

export function Contact() {
  return (
    <ContactForm>
      <ContactFormContent>
        <ContactFormHeader className="mb-6" />
        <ContactFormNameFields />
        <ContactFormContactFields />
        <ContactFormMessageField />
        <ContactFormActions />
      </ContactFormContent>
    </ContactForm>
  )
}
```

## Examples

- [Contact form](https://www.mcpcn.dev/docs/blocks/form/contact-form) — Complete
  contact fields and file attachment.
- [Product list](https://www.mcpcn.dev/docs/blocks/list/product-list) — List,
  grid, carousel, and picker variants.
- [Blocks index](https://www.mcpcn.dev/docs/blocks) — Browse forms, payments,
  selection, messaging, and events.

## When to use it

- Use it when an MCP app needs a reusable UI block that lives in project source.
- Skip it for a conventional website unrelated to MCP Apps; use the project’s
  component system.

## Agent notes

Docs provide llms.txt, Markdown pages, and an agent skill file. Give an agent
the relevant component page before installation.

The registry follows Base UI and shadcn conventions; inspect import paths and
aliases in an existing app.

## Alternatives in this repo

- [agentcn](../agents-mcp/agentcn.md) — Add agent behavior and recipes rather
  than UI blocks.
- [typeui.sh](../agents-mcp/typeui-sh.md) — Use design prompts and skill
  resources.
- [Open Design](../agents-mcp/open-design.md) — Generate and review an
  agent-made HTML interface.

## Sources

- [Official site](https://www.mcpcn.dev/) — checked 2026-10-07
- [GitHub repository and MIT license](https://github.com/shadcn-labs/mcpcn) —
  checked 2026-10-07
- [Contact form docs](https://www.mcpcn.dev/docs/blocks/form/contact-form) —
  checked 2026-10-07
- [Product list docs](https://www.mcpcn.dev/docs/blocks/list/product-list) —
  checked 2026-10-07
- [Blocks index](https://www.mcpcn.dev/docs/blocks) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
