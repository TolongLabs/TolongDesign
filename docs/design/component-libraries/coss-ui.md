---
name: 'coss ui'
slug: 'coss-ui'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://coss.com/ui'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Copy-paste components built on Base UI.'
paywall: free
pricing_summary: 'Free and MIT licensed; no paid tier was listed.'
open_source: true
license: MIT
category_tags: ['react', 'tailwind', 'base-ui', 'shadcn']
best_for: ['accessible primitives', 'product interfaces']
stack: ['react', 'tailwind', 'base-ui', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# coss ui

> Copy-paste components built on Base UI.

A TolongLabs developer can reach for it when the app needs Base UI-backed React
primitives with local source and a Tailwind v4 setup.

## At a glance

| Field          | Value                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------- |
| Source         | [coss.com/ui](https://coss.com/ui)                                                          |
| Paywall        | **Free** — Free and MIT licensed; no paid tier was listed.                                  |
| Open source    | Yes — The official licensing document identifies the UI application source as MIT licensed. |
| Type           | Copy-paste component library built on Base UI                                               |
| Works with     | React, Tailwind CSS v4, Base UI, shadcn CLI                                                 |
| Best for       | accessible primitives, product interfaces                                                   |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                             |

## What it is

coss ui is a collection of copy-paste React components built on Base UI. It
follows shadcn-style distribution and gives the project local component source.

The docs require Tailwind CSS v4 and explain setup through the shadcn CLI or
manual copying. The components are designed around Base UI primitives.

The official repository’s licensing note identifies `apps/ui/` as MIT licensed.
Check the repository document for other paths because it is a mixed-content
repository.

## Paywall and pricing

- **Free:** The public component docs, registry, and source are free.
- **Paid:** Not published; no paid plan was listed.
- **Sign-up required?** No — public docs and CLI instructions do not require an
  account.
- **Licence for client work:** MIT permits commercial use subject to its notice
  and attribution terms.

Pricing and access were checked on 2026-10-07.

## How to use

1. Confirm the app uses React and Tailwind CSS v4.
2. Initialize the registry with the COSS style preset, then add the component
   through the CLI.
3. Read the component page for its parts and props, then adapt the copied source
   and styles to the project.

Install or add the documented component with:

```bash
pnpm dlx shadcn@latest init @coss/style
```

The official docs show this minimal usage or setup:

```tsx
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogPanel,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

;<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <DialogPanel>Content</DialogPanel>
    <DialogFooter>
      <DialogClose>Close</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>
```

## Examples

- [Dialog](https://coss.com/ui/docs/components/dialog) — Dialog composition and
  component API.
- [Menu](https://coss.com/ui/docs/components/menu) — Menu and nested item
  patterns.
- [Drawer](https://coss.com/ui/docs/components/drawer) — Drawer interaction for
  a mobile or side panel.

## When to use it

- Use it when the app needs Base UI-backed React primitives with local source
  and a Tailwind v4 setup.

- Skip it when the project is on Tailwind v3 or needs a larger prebuilt design
  system; compare [HeroUI](../component-libraries/heroui.md) or
  [daisyUI](../component-libraries/daisyui.md).

## Agent notes

- Tailwind CSS v4 is a stated requirement.
- The docs support shadcn CLI setup and manual copying.
- The repository licensing file scopes the MIT statement to `apps/ui/`; check
  the path of any code you reuse.

## Alternatives in this repo

- [HeroUI](../component-libraries/heroui.md) — Accessible React component
  library with React Aria.
- [daisyUI](../component-libraries/daisyui.md) — Tailwind component classes with
  broad framework support.
- [Kibo UI](../component-libraries/kibo-ui.md) — Copyable components for shadcn
  applications.

## Sources

- [Official site](https://coss.com/ui) — checked 2026-10-07
- [Get started](https://coss.com/ui/docs/get-started) — checked 2026-10-07
- [Dialog](https://coss.com/ui/docs/components/dialog) — checked 2026-10-07
- [Menu](https://coss.com/ui/docs/components/menu) — checked 2026-10-07
- [Drawer](https://coss.com/ui/docs/components/drawer) — checked 2026-10-07
- [Licensing](https://github.com/cosscom/coss/blob/main/LICENSING.md) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
