---
name: Bolt.new
slug: bolt-new
section: Development
section_slug: development
source_url: 'https://bolt.new/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'In-browser development sandbox for full-stack applications.'
paywall: freemium
pricing_summary:
  'Free tier with daily token limits; Pro is $25/month with 10M tokens, custom
  domains, and Bolt Forge access.'
open_source: false
license: proprietary
category_tags: [ai, sandbox, webcontainers, full-stack, rapid-prototyping]
best_for: [in-browser development, prototype deployment, full-stack apps]
stack: [react, nodejs, vite, nextjs]
agent_friendly: true
last_verified: 2026-10-07
---

# Bolt.new

> In-browser development sandbox for full-stack applications. TolongLabs
> developers reach for Bolt.new to prompt, run, debug, and deploy complete
> full-stack web applications entirely inside the browser without local setup.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [bolt.new](https://bolt.new/)                                 |
| Paywall        | **Freemium** — free tier; Pro at $25/month                    |
| Open source    | No — proprietary platform (core engine powered by StackBlitz) |
| Type           | In-browser AI development environment and runtime sandbox     |
| Works with     | Vite, React, Next.js, Node.js, Express, Tailwind CSS          |
| Best for       | In-browser development, prototype deployment, full-stack apps |
| Agent-friendly | Yes — in-editor agent prompts, GitHub sync, exportable zip    |

## What it is

Bolt.new is an AI-powered in-browser development environment created by
StackBlitz. Leveraging WebContainers technology, Bolt runs a full Node.js
runtime directly within browser tabs. This allows the built-in AI agent to
execute shell commands, install npm packages, spin up dev servers, and execute
backend servers without remote container latency.

Unlike isolated UI generation tools that only output static frontend code,
Bolt.new builds full-stack architectures. It can write backend API routes,
configure local databases, execute test suites, and resolve compilation errors
autonomously by reading terminal output directly from the WebContainer session.

The platform provides a dual-pane interface combining conversational AI
instruction, an interactive Monaco code editor, a live terminal, and an embedded
browser preview with instant hot-module replacement. Projects can be downloaded
as zip archives, pushed to GitHub repositories, or deployed live to production.

## Paywall and pricing

- **Free:** $0/month. Includes daily AI token quotas, full access to the
  WebContainers browser IDE, standard hosting on `bolt.host` subdomains, and up
  to 10 GB monthly bandwidth.
- **Pro:** $25/month (or approximately $18/month billed annually). Includes 10
  million monthly tokens, no daily token cap, token rollover for up to one
  month, access to the Max AI reasoning model, custom domain support, and Bolt
  Forge for high-capacity workflows.
- **Teams & Enterprise:** Custom volume pricing. Offers centralized team
  billing, organization-wide workspace sharing, SAML SSO, and SOC 2 Type II
  compliance guarantees.
- **Sign-up required?** Yes, requires a GitHub or StackBlitz account.
- **Licence for client work:** Application source code created within Bolt.new
  belongs to the creator and can be exported for proprietary and client use.

Verified on the official Bolt.new platform on 2026-10-07.

## How to use

1. Start a new sandbox session: Open `https://bolt.new/` and describe your
   application stack and desired functionality in the initial prompt (e.g.,
   "Create a Next.js client portal with an SQLite database and authentication").
2. Supervise autonomous execution: Watch the agent generate project files, run
   `npm install` inside the browser WebContainer, and start the development
   server.
3. Review and iterate: Test interactions in the live preview window. When errors
   occur, prompt the agent to inspect the console logs and apply fixes.
4. Export or connect to Git: Link the project to a GitHub repository from the
   top header menu, or download the full workspace:

```bash
# Clone the repository exported from Bolt.new
git clone https://github.com/your-org/bolt-project.git
cd bolt-project

# Install dependencies and start local dev server
bun install
bun run dev
```

## Examples

- [Bolt.new Workspace](https://bolt.new/) — Interactive browser development
  sandbox for generating and running full-stack applications.
- [StackBlitz WebContainers](https://webcontainers.io/) — Underlying core
  technology specification powering in-browser Node.js execution.
- [Bolt.new GitHub Integration](https://bolt.new/) — Built-in repository sync
  interface allowing direct two-way commits to remote branches.

## When to use it

- Use it when testing experimental product concepts or building functional
  prototypes that require both client and server logic without setting up local
  Docker containers or dev environments.
- Use it when non-technical stakeholders or designers want to explore working
  codebases interactively in the browser.
- Skip it when you only need isolated, high-polish React UI primitives styled
  with shadcn/ui; use [v0](../development/v0.md) instead.
- Skip it for fast local builds in existing codebases; use
  [Vite](../development/vite.md) directly.

## Agent notes

- Official URL: `https://bolt.new/`.
- Projects operate inside WebContainers; native binary modules (like standard
  C++ addons or uncompiled native drivers) may fail to execute in-browser. Stick
  to pure JavaScript/TypeScript packages or WASM equivalents.
- When exporting projects, verify generated package scripts and dependencies
  with `bun install` to ensure cross-platform compatibility outside browser
  sandboxes.

## Alternatives in this repo

- [v0](../development/v0.md) — AI interface generator by Vercel tailored for
  scaffolding shadcn/ui React components and frontend landing pages.
- [Vite](../development/vite.md) — Blazing fast local frontend build tool and
  dev server for modern web applications.

## Sources

- [Official site](https://bolt.new/) — checked 2026-10-07
- [WebContainers documentation](https://webcontainers.io/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
