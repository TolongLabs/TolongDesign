---
name: evlog
slug: evlog
section: Development
section_slug: development
source_url: 'https://www.evlog.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Structured logging framework for web applications.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags:
  [logging, observability, structured-errors, typescript, ai-agents]
best_for: [wide event logging, agent-driven debugging, full-stack tracing]
stack: [typescript, nodejs, nextjs, nuxt, hono]
agent_friendly: true
last_verified: 2026-10-07
---

# evlog

> Structured logging framework for web applications. TolongLabs developers use
> evlog to replace noisy log streams with wide, structured events and actionable
> errors that AI coding agents can parse and diagnose automatically.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [evlog.dev](https://www.evlog.dev/)                            |
| Paywall        | **Free** — 100% free and open source under MIT licence         |
| Open source    | Yes — MIT ([GitHub](https://github.com/evloghq/evlog))         |
| Type           | Structured logging framework and agent observability engine    |
| Works with     | Nuxt, Nitro, Next.js, SvelteKit, TanStack Start, Hono, Express |
| Best for       | Wide event logging, agent-driven debugging, full-stack tracing |
| Agent-friendly | Yes — local NDJSON file drains, CLI (`evlog map`), agent skill |

## What it is

evlog is a modern TypeScript logging framework founded on the principle that
"digging through logs is not observability; it's hope." Instead of emitting
unstructured, disconnected strings with `console.log`, evlog accumulates context
across the lifecycle of a request, emitting a single comprehensive "wide event"
when the request completes.

evlog introduces first-class structured errors featuring typed fields for `why`
(the root cause explanation), `fix` (prescriptive steps to resolve the issue),
and documentation URLs. If an endpoint encounters a failure, the emitted log
contains the entire journey: caller context, request parameters, execution time,
and exact remediation instructions.

A core focus of evlog is AI agent readiness. It includes a local filesystem
drain that writes structured NDJSON records directly to disk, allowing coding
agents to parse error streams, diagnose root causes, and submit code fixes
without human intervention. It also includes an `evlog map` CLI tool that scans
codebases to detect uninstrumented routes and missing error patterns.

## Paywall and pricing

- **Free:** The evlog library, framework adapters, CLI tool, and agent skills
  are 100% free and open source.
- **Paid:** None. No hosted paywalls or subscription tiers.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for commercial, client,
  and proprietary production deployments.

Verified on the official evlog website and documentation on 2026-10-07.

## How to use

1. Install evlog and your framework adapter:

```bash
bun add evlog
```

2. Accumulate context and throw actionable errors in an API handler (e.g., Hono
   or Nitro):

```typescript
import { useLogger, createError } from 'evlog'

export async function handleCheckout(event: RequestEvent) {
  const log = useLogger(event)

  // Accumulate context throughout the execution
  log.set({ user: { id: 1842, plan: 'pro' } })
  log.set({ cart: { items: 3, total: 99.99 } })

  const payment = await processPayment()

  if (!payment.success) {
    // Emit an actionable error with clear diagnosis for agents and humans
    throw createError({
      status: 402,
      message: 'Payment failed',
      why: 'Card issuer declined transaction due to insufficient funds',
      fix: 'Prompt customer to update payment method or try another card',
      links: ['https://stripe.com/docs/declines']
    })
  }

  return { orderId: payment.id }
}
```

3. Audit logging coverage across your codebase with the CLI:

```bash
bunx evlog map
```

4. Install the official agent skill for AI assistants:

```bash
npx skills add https://www.evlog.dev
```

## Examples

- [evlog Documentation](https://www.evlog.dev/) — Architecture guide covering
  wide events, structured error catalogs, and framework adapters.
- [evlog Agent Skills](https://www.evlog.dev/) — Specification for configuring
  coding agents to diagnose NDJSON log files autonomously.
- [evlog Framework Adapters](https://www.evlog.dev/) — Integration examples for
  Next.js, Nuxt, Hono, Cloudflare Workers, and Express.

## When to use it

- Use it across backend APIs, server actions, and Cloudflare Workers to capture
  rich error diagnostics and user context in a single event.
- Use it on projects where AI coding agents assist with debugging and triage;
  the structured `why` and `fix` fields dramatically improve agent accuracy.
- Skip it when you only need high-level website traffic metrics and visitor
  funnel analytics; use [Umami](../development/umami.md) or
  [Tracwell](../development/tracwell.md).

## Agent notes

- Official site: `https://www.evlog.dev/`.
- File system drain: configure evlog to output to a local `.logs/` directory in
  NDJSON format. Coding agents can read the file to locate runtime stack traces
  and immediate fix recommendations.
- Run `bunx evlog map` to generate an observability score and identify routes
  that lack structured logging context.
- Provides native TypeScript typings and zero-config context propagation via
  AsyncLocalStorage.

## Alternatives in this repo

- [Umami](../development/umami.md) — Open-source, cookieless web analytics
  tracking pageviews and custom interaction events.
- [Tracwell](../development/tracwell.md) — Conversion-focused web analytics
  tracking user journeys, funnel drop-offs, and revenue.

## Sources

- [Official site](https://www.evlog.dev/) — checked 2026-10-07
- [Documentation](https://www.evlog.dev/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
