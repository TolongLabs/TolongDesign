---
name: Prompt Kit
slug: prompt-kit
section: Component Libraries
section_slug: component-libraries
source_url: https://www.prompt-kit.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Chat and AI interface component primitives.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [ai, chat, prompt-input, shadcn, vercel-ai-sdk]
best_for: [ai chat interfaces, copilot prompts, generative reasoning ui]
stack: ['react', 'nextjs', 'tailwind', 'motion', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Prompt Kit

> Chat and AI interface component primitives. TolongLabs developers reach for
> Prompt Kit to construct conversational interfaces, AI copilots, and model
> reasoning workflows using pre-built, accessible React components compatible
> with shadcn/ui.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [prompt-kit.com](https://www.prompt-kit.com/)                |
| Paywall        | **Free** — 100% free and open source                         |
| Open source    | Yes — MIT ([GitHub](https://github.com/ibelick/prompt-kit))  |
| Type           | AI component primitives library and shadcn registry          |
| Works with     | React, Next.js, Tailwind CSS, Vercel AI SDK, Motion          |
| Best for       | AI chat interfaces, copilot prompts, generative reasoning UI |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components             |

## What it is

Prompt Kit is an open-source React component library created by Julien Thibeaut
(@ibelick) focused exclusively on building user interfaces for artificial
intelligence applications. Built on top of shadcn/ui and Tailwind CSS, it
provides production-ready interface primitives tailored to modern LLM
interaction patterns.

Building AI applications involves unique interface challenges—such as handling
streaming tokens, auto-scrolling chat history, parsing dynamic markdown,
rendering syntax-highlighted code blocks, and exposing multi-step reasoning
chains. Prompt Kit provides modular building blocks addressing each requirement:

- **`PromptInput`:** Expandable text areas with attachment slots, model selector
  dropdowns, token counters, and submit actions.
- **`ChatContainer`:** Viewport managers with smart sticky auto-scroll behavior
  that pins to the bottom during streaming while allowing user scroll-up.
- **`Message`:** Conversational message items supporting system, user, and
  assistant roles with avatar slots and metadata badges.
- **`Reasoning`:** Collapsible thinking steps and step-by-step progress
  indicators displaying chain-of-thought outputs.
- **Streaming & Code:** Specialized markdown renderers, token stream carets, and
  Shiki-powered syntax highlighted code blocks.

Components install directly into the consumer's repository via the shadcn CLI,
allowing teams to customize styling, motion physics, and layout structure
freely.

## Paywall and pricing

- **Free:** The complete component library, registry, and documentation are 100%
  free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Permitted for
  commercial AI products, client applications, and internal enterprise tools.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Ensure your project is configured with shadcn/ui.
2. Install the desired AI component using the shadcn CLI:

```bash
bunx --bun shadcn@latest add prompt-kit/prompt-input
```

3. Or install the chat container:

```bash
bunx --bun shadcn@latest add prompt-kit/chat-container
```

4. Import and render the component, connecting it to the Vercel AI SDK:

```tsx
'use client'

import { useChat } from '@ai-sdk/react'
import { PromptInput } from '@/components/ui/prompt-input'

export function AIChatComposer() {
  const { input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="w-full max-w-2xl p-4">
      <PromptInput
        value={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        placeholder="Ask the AI agent a question..."
      />
    </div>
  )
}
```

## Examples

- [Prompt Input Documentation](https://www.prompt-kit.com/docs/prompt-input) —
  Interactive playground for testing input attachments and action slots.
- [Chat Container Component](https://www.prompt-kit.com/docs/chat-container) —
  Demonstrates sticky auto-scrolling and streaming state management.
- [Prompt Kit GitHub](https://github.com/ibelick/prompt-kit) — Source code
  repository containing component implementations and AI SDK integration demos.

## When to use it

- Use it when developing AI chatbots, agentic copilot panels, autonomous coding
  hubs, or customer support bots.
- Use it when you need robust handling of streaming text, markdown rendering,
  and reasoning traces that conform to shadcn aesthetic conventions.
- Skip it when your project only requires standard non-AI form controls; use
  [Nexvyn UI](../component-libraries/nexvyn-ui.md) or standard shadcn/ui
  instead.

## Agent notes

- Official documentation URL: `https://www.prompt-kit.com/`.
- GitHub repository: `https://github.com/ibelick/prompt-kit`.
- Components are installed via `npx shadcn add prompt-kit/<component>`.
- Designed to integrate directly with Vercel AI SDK (`@ai-sdk/react`), Radix UI,
  and Motion.

## Alternatives in this repo

- [Libraries.dev](../component-libraries/libraries-dev.md) — WebGL thinking orbs
  and glowing border beams designed for AI products.
- [interior-dev](../component-libraries/interior-dev.md) — Micro-interactions
  and instant feedback states for interactive elements.

## Sources

- [Prompt Kit Official Website](https://www.prompt-kit.com/) — checked
  2026-10-07
- [Prompt Kit Documentation](https://www.prompt-kit.com/docs/prompt-input) —
  checked 2026-10-07
- [Prompt Kit GitHub Repository](https://github.com/ibelick/prompt-kit) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
