---
name: 'Cloudflare'
slug: 'cloudflare'
section: 'Deploy'
section_slug: 'deploy'
source_url: 'https://developers.cloudflare.com/workers/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Global edge network running serverless Workers.'
paywall: freemium
pricing_summary:
  'Workers has a free allowance; the Paid plan starts at a $5 monthly account
  minimum plus metered usage.'
open_source: false
license: proprietary
category_tags: ['edge', 'serverless', 'hosting', 'cdn']
best_for: ['edge apps', 'full-stack websites', 'serverless apis']
stack: ['cloudflare-workers', 'javascript', 'typescript']
execution_mode: mcp-skill
surface: ['hosting']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Cloudflare

> Global edge network running serverless Workers.

> Use it when edge execution and Cloudflare bindings are central to the
> application.

## At a glance

| Field          | Value                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| Source         | [developers.cloudflare.com](https://developers.cloudflare.com/workers/)                                              |
| Paywall        | **freemium** — Workers has a free allowance; the Paid plan starts at a $5 monthly account minimum plus metered usage |
| Open source    | No — proprietary                                                                                                     |
| Type           | Edge compute and application platform                                                                                |
| Works with     | Workers, JavaScript, TypeScript, framework adapters                                                                  |
| Best for       | edge apps, full-stack websites, serverless apis                                                                      |
| Agent-friendly | Yes — Wrangler CLI, public docs, and agent-oriented documentation                                                    |

## What it is

Cloudflare Workers runs server-side code on Cloudflare's global network. The
platform includes routing, bindings to data services, scheduled events, and
framework integrations.

The assigned product is Workers, not every Cloudflare service. Developers can
deploy APIs, background handlers, and full-stack web apps; framework support
varies by runtime and adapter.

Workers fits projects that need edge execution or Cloudflare platform bindings.
Review runtime compatibility and service pricing for the exact workload before
moving a conventional Node server.

## Paywall and pricing

- The Free plan includes a published request allowance. Workers Paid has a $5
  per account per month minimum and charges for metered usage beyond included
  allowances.
- The Paid plan also covers associated products such as Pages Functions, KV,
  Hyperdrive, and Durable Objects under their documented terms.
- An account is required to create and deploy production Workers. The hosted
  service is proprietary; Wrangler is a separate open-source CLI.
- Check the pricing page for current included allowances and usage rates; quotas
  differ by feature.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Install or invoke Create Cloudflare to scaffold a Worker or a supported
  framework app.
- For an Astro app, the official guide uses the command shown below; choose a
  framework only after checking its Workers adapter.
- Develop locally, configure bindings and secrets with the documented Wrangler
  workflow, then deploy to a Cloudflare account.
- Check compatibility flags, runtime APIs, and included service quotas before
  adopting a framework-specific feature.

```bash
npm create cloudflare@latest -- my-astro-app --framework=astro
```

## Examples

- [Return HTML](https://developers.cloudflare.com/workers/examples/return-html/)
  — A small Worker response example.
- [Cron trigger](https://developers.cloudflare.com/workers/examples/cron-trigger/)
  — A scheduled Worker pattern.
- [WebSockets](https://developers.cloudflare.com/workers/examples/websockets/) —
  A real-time connection example.

## When to use it

- Use it for edge APIs, lightweight full-stack applications, scheduled work, or
  products already using Cloudflare services.
- Skip it when the application depends on Node APIs or long-running processes
  that do not fit the Workers runtime; compare Railway or Fly.io.

## Agent notes

- CLI: Wrangler, typically invoked through the Create Cloudflare project or the
  official Wrangler documentation.
- Cloudflare publishes a documentation index and agent-friendly materials; use
  current framework guides for supported runtime behavior.
- A Worker can bind to KV, Durable Objects, and other products, each with its
  own limits and billing behavior.
- Do not assume a framework's Node deployment target works unchanged on Workers;
  validate the adapter and API compatibility.

## Alternatives in this repo

- [Vercel](../deploy/vercel.md) — Managed frontend hosting with a strong Next.js
  workflow.
- [Netlify](../deploy/netlify.md) — Git-connected framework deployment with
  integrated previews.
- [Fly.io](../deploy/fly-io.md) — Regional container hosting when a conventional
  container runtime is needed.

## Sources

- [Workers documentation](https://developers.cloudflare.com/workers/) — checked
  2026-10-07
- [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
  — checked 2026-10-07
- [Get started](https://developers.cloudflare.com/workers/get-started/) —
  checked 2026-10-07
- [Examples](https://developers.cloudflare.com/workers/examples/) — checked
  2026-10-07
- [Framework web apps](https://developers.cloudflare.com/workers/framework-guides/web-apps/)
  — checked 2026-10-07
- [Astro guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
  — checked 2026-10-07
- [HTML response example](https://developers.cloudflare.com/workers/examples/return-html/)
  — checked 2026-10-07
- [Cron example](https://developers.cloudflare.com/workers/examples/cron-trigger/)
  — checked 2026-10-07
- [WebSockets example](https://developers.cloudflare.com/workers/examples/websockets/)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07; page
  was not readable in the research browser.
