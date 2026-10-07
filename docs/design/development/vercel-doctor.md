---
name: Vercel Doctor
slug: vercel-doctor
section: Development
section_slug: development
source_url: 'https://vercel-doctor.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: Diagnostic tool identifying Next.js performance bottlenecks.
paywall: free
pricing_summary:
  'The MIT-licensed CLI is free to run; no paid plan or separate price is
  published.'
open_source: true
license: MIT
category_tags: [nextjs, diagnostics, performance, cost-optimization, cli]
best_for: [vercel-hosted next.js, code review, agent-assisted fixes]
stack: [nextjs, nodejs, vercel]
agent_friendly: true
last_verified: 2026-10-07
---

# Vercel Doctor

> Diagnostic tool identifying Next.js performance bottlenecks. Use it to scan a
> Next.js codebase for patterns that can increase Vercel usage and cost.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [vercel-doctor.com](https://vercel-doctor.com/)                   |
| Paywall        | **Free** — public MIT-licensed CLI                                |
| Open source    | Yes — MIT ([GitHub](https://github.com/Aniket-508/vercel-doctor)) |
| Type           | Next.js code diagnostics CLI                                      |
| Works with     | Next.js projects, especially those deployed on Vercel             |
| Best for       | Cost-pattern review, targeted fixes, CI checks                    |
| Agent-friendly | Yes — CLI, Node API, AI coding-agent skill                        |

## What it is

Vercel Doctor scans a Next.js codebase for source patterns associated with
higher Vercel costs. The checks cover areas such as function duration, caching,
image optimization, request invocations, platform usage, and dead code. Its
guidance adapts to the detected Next.js major version.

The command reports a score and actionable diagnostics. Each finding includes an
explanation; verbose mode can show affected paths and line numbers. This is a
code review tool, not a Vercel billing dashboard or a browser measurement suite.
Review each suggested change against the route's intended behavior.

The project is published under the MIT license. It can be run as an on-demand
CLI, used through a Node.js API, or installed as a skill for supported coding
assistants, including Codex.

## Paywall and pricing

- **Free:** the public CLI, its documented API, and the agent skill are free to
  use under the repository's MIT license.
- **Paid:** no paid plan or separate product price is published on the official
  docs or repository reviewed.
- **Sign-up required?** No account is required to run the CLI or read the public
  repository.
- **Licence for client work:** the repository is MIT-licensed, which permits
  commercial use subject to the license terms. Keep the MIT notice when
  redistributing the software.

Pricing and license checked 2026-10-07.

## How to use

1. From the root of a Next.js project, run the official quick-start command:

   ```bash
   npx -y vercel-doctor@latest .
   ```

   It runs without adding the package to the project's dependencies.

2. Read the diagnostics, then prioritize high-impact errors before warnings. Use
   `--verbose` to see affected files and line numbers.
3. After changes on a feature branch, scan changed files with:

   ```bash
   npx -y vercel-doctor@latest . --diff
   ```

4. For a monorepo, select a workspace project with `--project <name>`. Use
   `--yes --score` for non-interactive CI output.
5. If a generated or intentionally exceptional file produces noise, add an
   ignore rule or file glob in `vercel-doctor.config.json`:

   ```json
   {
     "ignore": {
       "rules": ["vercel-doctor/nextjs-image-missing-sizes"],
       "files": ["src/generated/**"]
     }
   }
   ```

   The docs also allow this configuration under `vercelDoctor` in
   `package.json`.

## Examples

- [Function Duration rules](https://www.vercel-doctor.com/docs/rules/function-duration)
  — identifies independent sequential awaits and blocking work that can extend
  serverless function execution.
- [Caching rules](https://www.vercel-doctor.com/docs/rules/caching) — explains
  patterns such as `force-dynamic` and `no-store` that can bypass Vercel
  caching.
- [Image Optimization rules](https://www.vercel-doctor.com/docs/rules/image-optimization)
  — covers missing `sizes`, broad remote patterns, and image optimization
  settings that affect usage.

## When to use it

- Use it before deploying a Next.js app to Vercel or when reviewing code that
  may cause unnecessary function execution, cache misses, or image use.
- Use it in a focused fix loop: scan, inspect the exact rule, change code, and
  rescan the branch with `--diff`.
- Skip it for non-Next.js projects or when the question is about real user
  performance in a browser. Use [Playwright](../development/playwright.md) for
  browser-level checks, or [Biome](../development/biome.md) for general
  formatting and linting.

## Agent notes

- The CLI package is `vercel-doctor`; the official quick start is
  `npx -y vercel-doctor@latest .`. It also exports a Node API and Oxlint plugin,
  documented in the [CLI reference](https://www.vercel-doctor.com/docs/cli).
- Install the coding-agent skill with the official command
  `npx skills add aniket-508/vercel-doctor`. The docs list Codex, Cursor, Claude
  Code, Gemini CLI, and other supported tools.
- `--output json` and `--output markdown` support automation; `--report` writes
  a report, and `--ai-prompts` exports known fixes for an agent.
- `--offline` skips the anonymous telemetry used for score calculation. Check
  individual findings and project context rather than treating the aggregate
  score as a deploy decision.

## Alternatives in this repo

- [Playwright](../development/playwright.md) — checks behavior in a real browser
  rather than scanning source for Vercel-specific cost patterns.
- [Biome](../development/biome.md) — provides general formatting and lint checks
  rather than Vercel cost diagnostics.

## Sources

- [Official site](https://vercel-doctor.com/) — checked 2026-10-07; the homepage
  did not render, but the docs were available.
- [Getting started](https://www.vercel-doctor.com/docs) — checked 2026-10-07
- [CLI reference](https://www.vercel-doctor.com/docs/cli) — checked 2026-10-07
- [AI Skills guide](https://www.vercel-doctor.com/docs/ai-skills) — checked
  2026-10-07
- [GitHub repository and MIT license](https://github.com/Aniket-508/vercel-doctor)
  — checked 2026-10-07
- [Function Duration rules](https://www.vercel-doctor.com/docs/rules/function-duration)
  — checked 2026-10-07
- [Caching rules](https://www.vercel-doctor.com/docs/rules/caching) — checked
  2026-10-07
- [Image Optimization rules](https://www.vercel-doctor.com/docs/rules/image-optimization)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07; the
  page did not render in the browser.
