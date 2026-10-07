---
name: Kombai
slug: kombai
section: Agents & MCP
section_slug: agents-mcp
source_url: https://kombai.com/
designeer_url: https://designeer.xyz/build
designeer_blurb: AI design engineer that codes UI from context.
paywall: freemium
pricing_summary:
  'Free plan includes 300 credits/month; Pro is $20/month with 2,000 credits,
  and Team is $40/user/month for shared pools.'
open_source: false
license: proprietary
category_tags: [ai, figma, design-to-code, react, tailwind, vue]
best_for: [figma to code, ui component generation, design system compliance]
stack: [react, vue, html, css, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Kombai

> AI design engineer that codes UI from context. Use it to convert Figma vector
> frames into human-quality React, HTML/CSS, and Tailwind components.

## At a glance

| Field          | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| Source         | [kombai.com](https://kombai.com/)                                |
| Paywall        | **Freemium** — free 300 credits/mo; Pro from $20/month           |
| Open source    | No — proprietary                                                 |
| Type           | AI design engineer and Figma-to-code generation engine           |
| Works with     | Figma, VS Code, React, Tailwind CSS, HTML/CSS, Vue               |
| Best for       | Figma to code, UI component generation, design system compliance |
| Agent-friendly | Yes — VS Code extension, clean exported source, code diffing     |

## What it is

Kombai is an AI-powered design engineer designed to eliminate the tedious manual
translation between Figma mockups and production frontend code. Unlike primitive
"export to code" plugins that emit absolute positioning, inline pixel widths,
and fragile wrapper divs, Kombai analyzes designs the way a senior frontend
developer does.

Using a specialized deep learning architecture trained on UI layouts, Kombai
deduces proper flexbox hierarchies, responsive wrapping rules, semantic HTML
tags (buttons, links, navbars, forms), and logical component boundaries without
requiring designers to tag or restructure their Figma frames.

Developers access Kombai through its web workspace, Figma plugin, or direct VS
Code extension. The tool indexes private design system packages or component
libraries (such as shadcn/ui or custom corporate kits), ensuring that generated
markup reuses existing buttons, inputs, and typography tokens.

## Paywall and pricing

- **Free Plan:** Includes 300 credits per month (enough for approximately 10–15
  complex component generations or design slices), suitable for personal tests.
- **Paid Subscriptions:**
  - **Pro:** $20/month. Includes 2,000 credits per month, credit rollovers up to
    5x, email support, and SOC2 compliance.
  - **Team:** $40/user/month. Shared team credit pools, centralized billing,
    analytics, and private design system package indexing.
  - **Enterprise:** Custom pricing for large organizations requiring custom
    context engines, dedicated VPC hosting, and customized onboarding.
- **Sign-up required?** Yes, account creation (via Google, GitHub, or Figma
  OAuth) is required.
- **Licence for client work:** Generated code exported from Kombai belongs
  entirely to the user with no commercial restrictions.

Checked on 2026-10-07.

## How to use

1. Install the official Kombai plugin in Figma from the Figma Community, or
   install the Kombai extension in VS Code.
2. Select any frame, card, or full page in your Figma canvas.
3. Open Kombai and click **Generate Code**.
4. Configure your preferred output preferences:
   - Target framework: React (JSX/TSX), Vue, or pure HTML/CSS.
   - Styling approach: Tailwind CSS, CSS Modules, or pure CSS.
   - Custom component mapping: link your existing button or modal components.
5. Inspect the generated interactive preview, verify responsive behavior by
   resizing the viewport, and copy the clean component code into your codebase:

```tsx
import React from 'react'

export function PricingCard({ tier, price, features }: PricingCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-200 p-8 shadow-sm dark:border-zinc-800">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {tier}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          ${price}
        </span>
        <span className="text-sm text-zinc-500">/month</span>
      </div>
      <ul className="mt-6 flex flex-col gap-3">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <span>✓</span> {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## Examples

- [Kombai Official Site](https://kombai.com/) — interactive side-by-side demo
  comparing Figma frames to generated React code.
- [Kombai Pricing](https://kombai.com/) — details on monthly credit allotments,
  Pro features, and team plans.
- [Kombai Documentation](https://kombai.com/) — guide on component recognition,
  auto-layout deduction, and design system integration.

## When to use it

- Use it when you receive Figma mockups from designers and want to generate
  clean, semantic React and Tailwind components in minutes.
- Use it to convert complex desktop and mobile frames into responsive flexbox
  layouts without hand-writing dozens of CSS rules.
- Skip it if you don't have Figma designs and are prompting layouts from
  scratch; use Lafys or Efecto instead.

## Agent notes

- Official documentation URL: `https://kombai.com/`
- IDE extension: available for VS Code and Cursor.
- Generates clean, idiomatic TypeScript and JSX without machine-generated
  obfuscation or proprietary runtime dependencies.
- Can be configured to map Figma layer names to internal design system tokens.

## Alternatives in this repo

- [Efecto](../agents-mcp/efecto.md) — visual web design canvas where agents
  design with MCP commands in the browser.
- [Agentation](../agents-mcp/agentation.md) — on-screen DOM review tool passing
  design feedback into coding agents.
- [Capacity](../agents-mcp/capacity.md) — natural language generative workspace
  building full-stack web applications.

## Sources

- [Kombai Official Site](https://kombai.com/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
