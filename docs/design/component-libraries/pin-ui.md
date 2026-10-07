---
name: Pin UI
slug: pin-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://www.pinui.xyz/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Distinctive copy-paste React and Tailwind components.'
paywall: free
pricing_summary:
  'The official README distributes components as MIT-licensed shadcn registry
  items; no price or paid tier is published.'
open_source: true
license: MIT
category_tags: [react, tailwind, components, animation]
best_for: [distinctive commerce controls, tactile component ideas]
stack: [react, nextjs, tailwind, motion]
agent_friendly: true
last_verified: 2026-10-07
---

# Pin UI

> Distinctive copy-paste React components distributed through a shadcn registry.
> The component code is MIT licensed; live previews and terms triggered a
> browser security checkpoint on 2026-10-07.

## At a glance

| Field          | Value                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Source         | [pinui.xyz](https://www.pinui.xyz/)                                                                 |
| Paywall        | **Free** — the repository documents public MIT-licensed registry components; no paid tier is listed |
| Open source    | Yes — MIT for components ([GitHub README](https://github.com/Rachit315/Pin-UI/blob/main/README.md)) |
| Licence        | MIT for components; demo media and brand assets are excluded                                        |
| Type           | Copy-paste React component collection                                                               |
| Works with     | React, Next.js, TypeScript, Motion, shadcn registry                                                 |
| Best for       | Distinctive controls and interaction references                                                     |
| Agent-friendly | Yes — public shadcn install command and component source are documented                             |

## What it is

On 2026-10-07, Chromium received HTTP 429 from `https://www.pinui.xyz/` and
displayed a Vercel Security Checkpoint (“We're verifying your browser”). The
`/terms` route returned the same checkpoint, and the documented registry routes
were blocked with HTTP 403 in this browser session.

The linked public repository is more informative: its README links to
`pinui.xyz`, names the author’s X account, lists 13 components, and documents a
shadcn registry command. It states that the components are MIT-licensed and that
the Pin UI name, logo, and demo media are not included in that license. The
repository’s README is the available primary source for usage and license
details; the live previews and terms page could not be inspected.

## Paywall and pricing

- **Free:** the public README documents MIT-licensed components available from a
  shadcn registry; no payment is mentioned.
- **Paid:** no paid tier or price is published in the repository README.
- **Sign-up required?** The README does not state a sign-up requirement for
  registry installation; the live registry could not be verified in-browser.
- **Licence for client work:** the README says the components are MIT licensed.
  It excludes the Pin UI name, logo, and demo media; the `/terms` page returned
  a Vercel checkpoint and could not be reviewed.
- **Checked:** 2026-10-07.

## How to use

1. Choose a component slug from the
   [repository README](https://github.com/Rachit315/Pin-UI/blob/main/README.md).
2. Run the registry command published there, replacing `<slug>` with the
   selected item:

```bash
npx shadcn@latest add "https://pinui.xyz/r/<slug>.json"
```

3. The README says the component and its stylesheet are written to
   `components/pinui/`; Motion is the only listed dependency.
4. Review the generated source, then test keyboard, touch, responsive, and
   reduced-motion behavior in the target project.
5. Apply the MIT license to component code only; do not reuse the brand or demo
   media without separate permission.

## Examples

- [Balance Card source](https://github.com/Rachit315/Pin-UI/blob/main/components/library/BalanceCard.tsx)
  — a liquid currency selector and counting balance.
- [Add To Cart source](https://github.com/Rachit315/Pin-UI/blob/main/components/library/CartCard.tsx)
  — a product card with a drag-to-confirm checkout interaction.
- [Pin UI demo video](https://github.com/Rachit315/Pin-UI/blob/main/pin-ui-demo.mp4)
  — the repository’s collection-level component preview.

## When to use it

- Use it when a React interface needs a distinctive control that can be
  customized from copied source.
- Follow the repository README’s registry command and test the result for
  keyboard, touch, responsive, and reduced-motion behavior.
- Keep the MIT-licensed component code separate from the Pin UI name, logo, and
  demo media, which the README excludes from the license.
- Recheck the preview and terms in a regular browser; the automation session
  received Vercel checkpoints.

## Agent notes

The repository documents the shadcn command and Motion dependency. Its README
states that the component code is MIT licensed, while the product name, logo,
and demo media are excluded. The website, terms route, and registry requests
triggered Vercel checkpoints during this check; verify live previews before
relying on them.

## Alternatives in this repo

- [Great UI](../component-libraries/great-ui.md) — verified React and Tailwind
  component pages with source examples.
- [Evil Buttons](../component-libraries/evil-buttons.md) — interactive controls
  with documented install commands.

## Sources

- [Official URL](https://www.pinui.xyz/) — checked 2026-10-07; HTTP 429 Vercel
  checkpoint
- [Terms](https://pinui.xyz/terms) — checked 2026-10-07; Vercel checkpoint
- [Registry example](https://pinui.xyz/r/balance-card.json) — checked
  2026-10-07; HTTP 403 Vercel checkpoint
- [GitHub README](https://github.com/Rachit315/Pin-UI/blob/main/README.md) —
  checked 2026-10-07; component list, install command, and MIT statement
- [Balance Card source](https://github.com/Rachit315/Pin-UI/blob/main/components/library/BalanceCard.tsx)
  — checked 2026-10-07
- [Add To Cart source](https://github.com/Rachit315/Pin-UI/blob/main/components/library/CartCard.tsx)
  — checked 2026-10-07
- [Project demo video](https://github.com/Rachit315/Pin-UI/blob/main/pin-ui-demo.mp4)
  — checked 2026-10-07
- [Uicurio listing](https://uicurio.shinji.me/en/item/pin-ui/) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
