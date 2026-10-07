---
name: Foglamp
slug: foglamp
section: Agents & MCP
section_slug: agents-mcp
source_url: https://www.foglamp.dev/
designeer_url: https://designeer.xyz/build
designeer_blurb: Observability tool monitoring latency and costs.
paywall: freemium
pricing_summary:
  'Free tier includes 10k spans/month and 1 project; Pro is $49/month for 1M
  spans and 14 days retention.'
open_source: true
license: Apache-2.0
category_tags: [ai, observability, telemetry, mcp, monitoring]
best_for: [agent observability, llm cost tracking, latency debugging]
stack: [typescript, nodejs, python]
agent_friendly: true
last_verified: 2026-10-07
---

# Foglamp

> Observability tool monitoring latency and costs. Use it to trace multi-step
> agent workflows and pinpoint exactly where tokens, money, and time disappear.

## At a glance

| Field          | Value                                                                |
| -------------- | -------------------------------------------------------------------- |
| Source         | [foglamp.dev](https://www.foglamp.dev/)                              |
| Paywall        | **Freemium** — free tier (10k spans/mo); Pro $49/mo (1M spans)       |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/foglamp-labs/foglamp)) |
| Type           | AI observability and telemetry platform                              |
| Works with     | TypeScript, Node.js, Python, OpenTelemetry                           |
| Best for       | Agent observability, LLM cost tracking, latency debugging            |
| Agent-friendly | Yes — npm package, SDK integrations, OpenTelemetry standard          |

## What it is

Foglamp is an open-source observability and tracing platform built specifically
for AI agents and LLM-powered applications. As coding agents and background
design pipelines take multiple turns to reason, call tools, and inspect files,
Foglamp records every trace, span, tool execution, and token count in a
structured timeline.

Developed by Foglamp Labs, the platform offers both a hosted cloud dashboard and
a self-hostable core engine. It ingests telemetry via standard OpenTelemetry
protocols and native SDK wrappers, so web teams do not need to rewrite their
prompt logic to capture latency bottlenecks or model cost spikes.

Compared to generic application monitoring tools like Datadog or Sentry, Foglamp
structures its data model around prompt chains, tool input/output payloads, and
provider token rates. This makes it straightforward to diagnose why an agent
stalled during a component refactor or which tool call exceeded token limits.

## Paywall and pricing

- **Free:** $0 forever. Includes 10,000 spans per month, 3 days data retention,
  1 active project, community support, and full self-hosting capabilities.
- **Paid:** Pro plan is $49/month, including 1,000,000 spans per month, 14 days
  data retention, up to 5 projects, and priority email support. Overages billed
  at $5 per additional 100k spans.
- **Enterprise:** Custom volume, 90+ days retention, dedicated support, and
  custom OpenTelemetry pipeline ingest.
- **Sign-up required?** Yes, for the hosted cloud dashboard (GitHub OAuth or
  email). No sign-up required for self-hosted instances.
- **Licence for client work:** Apache-2.0 allows free commercial use,
  integration into client products, and self-hosted deployments without fee.

Checked on 2026-10-07.

## How to use

1. Install the Foglamp telemetry client in your Node.js or Bun agent runtime:

```bash
bun add foglamp
```

2. Initialize the client with your project API key or local collector endpoint:

```typescript
import { Foglamp } from 'foglamp'

const fog = new Foglamp({
  apiKey: process.env.FOGLAMP_API_KEY,
  projectId: 'tolong-design-agents'
})

export async function runAgentWorkflow(task: string) {
  return await fog.trace('agent-task', async (span) => {
    span.setTag('task', task)
    const result = await executeAgentTask(task)
    span.setMetadata({ tokens: result.totalTokens, cost: result.estimatedCost })
    return result
  })
}
```

3. Open the Foglamp web dashboard to inspect real-time traces, tool call latency
   waterfalls, and token cost breakdowns across model providers.

## Examples

- [Foglamp Quickstart](https://docs.foglamp.dev/quickstart) — step-by-step guide
  to instrumenting agent loops with TypeScript and Python.
- [Foglamp Pricing](https://www.foglamp.dev/pricing) — official tiers, span
  quotas, and data retention breakdown.
- [Foglamp GitHub Repository](https://github.com/foglamp-labs/foglamp) — open
  source codebase, Docker Compose self-hosting setup, and telemetry schemas.

## When to use it

- Use it when running autonomous AI workflows, MCP server tools, or batch
  generation scripts where you need granular tracing of latency and costs.
- Use it when debugging why an agentic web generator produces unexpected outputs
  or takes too long on tool calls.
- Skip it when building simple static sites without AI agent backends; use
  lightweight client performance monitors instead.

## Agent notes

- Official documentation URL: `https://docs.foglamp.dev/`
- npm package name: `foglamp`
- Works seamlessly in Bun, Node.js, and browser environments supporting Fetch
  and OpenTelemetry exporters.
- Supports OpenTelemetry environment variables (`OTEL_EXPORTER_OTLP_ENDPOINT`).
- Store `FOGLAMP_API_KEY` in environment variables; never commit keys to git.

## Alternatives in this repo

- [OpenCode](../agents-mcp/opencode.md) — open-source terminal AI coding agent
  with interactive execution.
- [SkillSync](../agents-mcp/skillsync.md) — cross-editor context synchronization
  and skill sharing for coding agents.
- [bb](../agents-mcp/bb.md) — lightweight developer environment for running and
  testing coding agents.

## Sources

- [Foglamp Official Site](https://www.foglamp.dev/) — checked 2026-10-07
- [Foglamp Pricing](https://www.foglamp.dev/pricing) — checked 2026-10-07
- [Foglamp Documentation](https://docs.foglamp.dev/quickstart) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build)
