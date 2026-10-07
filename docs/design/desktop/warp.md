---
name: Warp
slug: warp
section: Desktop
section_slug: desktop
source_url: 'https://warp.dev/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Rust-based terminal with block outputs and AI.'
paywall: freemium
pricing_summary:
  'Free tier with core terminal features and BYO-inference; Build plan starts at
  $20/month ($18/mo annual) with $20 AI credit.'
open_source: true
license: AGPL-3.0
category_tags: [terminal, cli, rust, ai, developer-tools]
best_for: [agentic workflows, terminal navigation, command history management]
stack: [rust, bash, zsh, fish]
agent_friendly: true
last_verified: 2026-10-07
---

# Warp

> Rust-based terminal with block outputs and AI. TolongLabs developers reach for
> Warp to treat terminal commands and outputs as discrete, navigable blocks with
> integrated AI-assisted command generation and team workflows.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [warp.dev](https://warp.dev/)                                     |
| Paywall        | **Freemium** — free tier with BYOLLM; Build $20/mo with AI credit |
| Open source    | Yes — AGPL-3.0 ([GitHub](https://github.com/warpdotdev/warp))     |
| Type           | Native desktop terminal emulator                                  |
| Works with     | macOS, Linux, Windows (preview), Bash, Zsh, Fish                  |
| Best for       | Agentic workflows, terminal navigation, command history           |
| Agent-friendly | Yes — CLI agents, blocks architecture, llms.txt, API keys         |

## What it is

Warp is a modern terminal emulator re-engineered from the ground up in Rust with
GPU acceleration. Rather than treating the terminal as an endless scrolling grid
of text characters like classic VT100 emulators, Warp groups terminal
interactions into structured "blocks" containing individual commands and their
corresponding standard output.

Each block can be selected, copied, bookmarked, searched, or shared directly via
permalink. Warp integrates modern text-editor conventions into the command
prompt, including mouse cursor placement, multi-cursor editing, automatic syntax
highlighting, and completion menus that work like a modern IDE.

Beyond UI polish, Warp embeds Warp AI and Warp Agent capabilities directly into
the CLI. Developers can explain terminal errors with a keystroke, generate shell
pipelines from natural language queries, index local repository documentation,
and route agentic workflows directly from the shell prompt.

## Paywall and pricing

- **Free:** Free forever for individuals and small teams (up to 10 members).
  Includes the full terminal emulator, unlimited blocks, block sharing,
  community workflows, and support for bringing your own LLM API keys (OpenAI,
  Anthropic, Google) or SuperGrok subscriptions without markup.
- **Paid:**
  - **Build:** $20/month ($18/month billed annually). Includes $20 of monthly AI
    credit at provider API rates, Warp Agent access, higher codebase indexing
    limits, and support for purchasing additional pooled agent usage.
  - **Max:** $200/month ($180/month billed annually). Includes $200 of monthly
    AI usage credit for heavy agent workloads.
  - **Business:** $50/seat/month ($45/seat/month billed annually, up to 25
    members). Includes $20 monthly usage per seat, team usage analytics, SSO,
    and centralized zero-data-retention (ZDR) policy enforcement.
  - **Enterprise:** Custom contract pricing for unlimited seats, custom cloud
    BYOLLM routing (AWS Bedrock, Google Vertex AI), and dedicated SLA support.
- **Sign-up required?** Yes, account creation is required to use Warp.
- **Licence for client work:** Free tier and paid tiers permit commercial and
  client software development without restriction.

Checked on the official pricing documentation on 2026-10-07.

## How to use

1. Install Warp on macOS using Homebrew:

```bash
brew install --cask warp
```

Or on Linux distributions via official apt/rpm repositories:

```bash
sudo apt-get install warp-terminal
```

2. Sign in and configure your default shell (Zsh, Bash, or Fish). Warp
   automatically hooks into your shell prompt without requiring modifications to
   `.zshrc` or `.bashrc`.

3. Use Warp Blocks to navigate output:

- Press `Cmd + Up` / `Cmd + Down` to navigate between command blocks.
- Right-click any block or press `Cmd + Shift + C` to copy either the exact
  command or its raw terminal output.
- Press `Cmd + R` to open the interactive, fuzzy-searchable command history
  menu.

4. Invoke AI assistance and terminal agent capabilities:

- Press `Cmd + I` or type `#` to query Warp AI for shell commands in natural
  language.
- If a command fails, click the "Explain Error" button atop the block to analyze
  stack traces and suggested fixes.
- Configure BYOK in `Settings > AI` with your personal Anthropic or OpenAI API
  key if you prefer zero-overhead direct billing.

## Examples

- [Warp Agent Documentation](https://docs.warp.dev/agents/) — Official guide on
  running terminal agents, workflow orchestration, and prompt execution.
- [Warp Platform Overview](https://docs.warp.dev/platform/overview/) —
  Architecture breakdown of block rendering, input editors, and session
  management.
- [Warp Features: Blocks](https://docs.warp.dev/features/blocks) — Detailed
  reference for block selection, search filters, and sharing workflows.

## When to use it

- Use it when you want a fast, GPU-accelerated terminal on macOS or Linux that
  replaces legacy terminal buffers with structured, inspectable blocks.
- Use it when executing long-running agent scripts, server commands, or complex
  CLI toolchains where visual separation and easy error inspection are critical.
- Skip it when you require a headless server terminal or lightweight CLI over
  SSH that runs inside non-GUI environments; use tmux or standard ssh clients.
- Skip it when you prefer a browser-like tab and pane arrangement without
  mandatory account sign-in; use [Canario](../desktop/canario.md) instead.

## Agent notes

- Official documentation: `https://docs.warp.dev/`.
- Machine documentation index: `https://docs.warp.dev/llms.txt`.
- GitHub repository: `https://github.com/warpdotdev/warp`.
- Supports Bring Your Own Key (BYOK) for OpenAI, Anthropic, and Google API keys
  under individual accounts.
- Zero Data Retention (ZDR) agreements prevent telemetry from training public
  LLM weights; individual users can disable data telemetry under
  `Settings > Privacy`.

## Alternatives in this repo

- [Canario](../desktop/canario.md) — Fast Rio-based terminal for macOS organized
  into browser-style spaces and split panes without account sign-in.
- [LocalSend](../desktop/localsend.md) — Open-source local network utility to
  share build artifacts, logs, and files between developer machines.

## Sources

- [Official site](https://warp.dev/) — checked 2026-10-07
- [Pricing](https://warp.dev/pricing) — checked 2026-10-07
- [Warp Documentation](https://docs.warp.dev/) — checked 2026-10-07
- [Warp GitHub](https://github.com/warpdotdev/warp) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
