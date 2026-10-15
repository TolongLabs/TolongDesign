---
name: Better T Stack
slug: better-t-stack
section: Development
section_slug: development
source_url: 'https://www.better-t-stack.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'CLI scaffolding modern full-stack TypeScript setups.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [cli, scaffolding, typescript, full-stack, mcp]
best_for: [project initialization, full-stack typescript, agent scaffolding]
stack: ['typescript', 'nextjs', 'hono', 'drizzle', 'tailwind']
execution_mode: mcp-skill
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Better T Stack

> CLI scaffolding modern full-stack TypeScript setups. TolongLabs developers use
> Better T Stack to spin up tailored, end-to-end type-safe web applications with
> best-practice combinations of modern frameworks, ORMs, and auth providers.

## At a glance

| Field          | Value                                                                         |
| -------------- | ----------------------------------------------------------------------------- |
| Source         | [better-t-stack.dev](https://www.better-t-stack.dev/)                         |
| Paywall        | **Free** — 100% free and open source under MIT licence                        |
| Open source    | Yes — MIT ([GitHub](https://github.com/AmanVarshney01/create-better-t-stack)) |
| Type           | Full-stack project generator and CLI scaffolding tool                         |
| Works with     | Next.js, Vite, TanStack Router, Hono, Express, Drizzle, Prisma                |
| Best for       | Project initialization, full-stack TypeScript, agent setups                   |
| Agent-friendly | Yes — CLI flags, JSON commands, stdio MCP server for agents                   |

## What it is

Better T Stack (distributed as `create-better-t-stack`) is an interactive CLI
and project scaffolding generator created by Aman Varshney. Designed to
modernize the initial setup phase of TypeScript web development, it allows
developers to mix and match modern libraries into a cohesive, pre-configured
monorepo or standalone application.

Instead of locking developers into a single rigid opinion, Better T Stack
provides granular choice across every layer of the architecture: frontend
frameworks (Next.js, Vite, TanStack Start, React Router), backend API runtimes
(Hono, Fastify, Express, Elysia), database ORMs (Drizzle ORM, Prisma),
authentication systems (Better Auth, NextAuth/Auth.js), and styling solutions
(Tailwind CSS v4, shadcn/ui).

Crucially, Better T Stack is architected from the ground up to support AI coding
agents. In addition to its interactive terminal UI, the CLI exposes
non-interactive flags, structured JSON command execution, and a dedicated local
stdio Model Context Protocol (MCP) server that enables agents to generate,
query, and modify full-stack boilerplates programmatically.

## Paywall and pricing

- **Free:** The CLI, web generator, MCP server, templates, and documentation are
  100% free and open source.
- **Paid:** None. Supported by community sponsorships.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for commercial and client
  projects without restrictions.

Verified on the official Better T Stack website and GitHub repository on
2026-10-07.

## How to use

1. Interactively scaffold a new full-stack application:

```bash
bunx create-better-t-stack@latest
```

2. Alternatively, run non-interactively using CLI flags:

```bash
bunx create-better-t-stack@latest my-app \
  --frontend next \
  --backend hono \
  --database postgres \
  --orm drizzle \
  --auth better-auth \
  --styling tailwind \
  --package-manager bun
```

3. Navigate to the project directory and start development:

```bash
cd my-app
bun install
bun run db:push
bun run dev
```

4. Connect to an agent via MCP: Configure the Better T Stack MCP server inside
   your agent settings (e.g., in `claude_desktop_config.json` or Antigravity):

```json
{
  "mcpServers": {
    "better-t-stack": {
      "command": "bunx",
      "args": ["create-better-t-stack@latest", "--mcp"]
    }
  }
}
```

## Examples

- [Better T Stack Documentation](https://www.better-t-stack.dev/docs) — Setup
  instructions, supported framework matrices, and CLI argument guides.
- [Better T Stack Web Builder](https://www.better-t-stack.dev/) — Interactive
  visual UI to configure and export stack recipes directly from the browser.
- [GitHub Repository](https://github.com/AmanVarshney01/create-better-t-stack) —
  Source codebase, template templates, and open issues.

## When to use it

- Use it at the start of any new web project or client MVP where you want a
  type-safe foundation with Drizzle, Hono, and Better Auth without manual
  wiring.
- Use it when delegating initial project scaffolding to an autonomous coding
  agent via MCP.
- Skip it when you only need a standalone frontend build tool without backend
  infrastructure; use [Vite](../development/vite.md) directly.
- Skip it if comparing high-level AI tech stacks across the industry; refer to
  [AI Stack](../development/ai-stack.md).

## Agent notes

- Official site: `https://www.better-t-stack.dev/`.
- Built specifically for coding agents: supports programmatic invocation via
  structured JSON and a local stdio MCP server
  (`bunx create-better-t-stack --mcp`).
- When scaffolding non-interactively, always specify `--package-manager bun` to
  align with TolongLabs project standards.
- Pre-configures environment variables in `.env.example` along with database
  connection strings and auth secrets.

## Alternatives in this repo

- [Vite](../development/vite.md) — Standard frontend build tool for standalone
  single-page applications.
- [AI Stack](../development/ai-stack.md) — Directory and CLI for tracking,
  comparing, and synchronizing AI development stacks.

## Sources

- [Official site](https://www.better-t-stack.dev/) — checked 2026-10-07
- [Documentation](https://www.better-t-stack.dev/docs) — checked 2026-10-07
- [GitHub repository](https://github.com/AmanVarshney01/create-better-t-stack) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
