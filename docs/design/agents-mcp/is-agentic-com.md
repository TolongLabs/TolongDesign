---
name: is-agentic.com
slug: is-agentic-com
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://is-agentic.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Scores how effectively websites support crawlers.'
paywall: free
pricing_summary:
  'Public scans, CLI, API, and MCP access are free; no paid plan was listed.'
open_source: false
license: unknown
category_tags: [agent-readiness, crawler-audit, mcp]
best_for: ['site discoverability checks', 'agent-facing SEO audits']
stack: [cli, mcp, rest]
agent_friendly: true
last_verified: 2026-10-07
---

# is-agentic.com

> Scores how effectively websites support crawlers. TolongLabs use: Use its free
> reports and API to check whether public pages are readable to agents.

## At a glance

| Field          | Value                                                |
| -------------- | ---------------------------------------------------- |
| Source         | [Official site](https://is-agentic.com/)             |
| Paywall        | **Free** — Free public scanner, API, CLI, and MCP    |
| Open source    | No — unknown                                         |
| Type           | Website readiness scanner for crawlers and agents    |
| Works with     | Public websites, CLI, REST API, MCP                  |
| Best for       | site discoverability checks, agent-facing SEO audits |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use               |

## What it is

is-agentic.com scores how well a public website exposes information to crawlers
and AI agents. Reports provide machine-readability signals and link to the
published methodology.

The site also offers a read-only API, CLI, and MCP endpoint without
authentication. It is an audit utility; it does not rewrite a site or guarantee
that a model cites it.

## Paywall and pricing

- **Free:** Public scans, CLI, API, and MCP are documented as free and
  read-only.
- **Paid:** No paid tier or usage charge was listed in the official docs.
- **Sign-up required?:** No account or API key is needed for reports or
  documented read-only endpoints.
- **Licence for client work:** No public source repository or explicit software
  license was found in reviewed pages; treat the hosted service as proprietary
  and confirm terms for commercial automation.

Checked 2026-10-07.

## How to use

1. Submit a public domain to the scanner or run the documented CLI. Use JSON
   output when the report feeds automation.

2. Review the report alongside the methodology to understand each score; treat
   it as diagnostic rather than a quality ranking.

3. Use MCP or REST to include scan results in an agent workflow. Keep scans
   read-only and avoid unauthorized private domains.

```bash
npx is-agentic example.com
npx is-agentic example.com --json
```

## Examples

- [Vercel report](https://is-agentic.com/scan/vercel.com) — Scan of a
  developer-platform website.
- [Nuxt report](https://is-agentic.com/scan/nuxt.com) — Framework product and
  documentation site.
- [Ora report](https://is-agentic.com/scan/ora.ai) — Another published report
  for comparison.

## When to use it

- Use it when reviewing a client’s crawlability and agent-facing signals before
  launch.
- Skip it for full technical SEO crawling or private-site testing; pair it with
  a broader audit.

## Agent notes

Docs publish a public MCP endpoint and API route; confirm rate limits before
batches.

Use the methodology to explain scores; do not present them as an authoritative
measure of site quality.

## Alternatives in this repo

- [Webclaw](../agents-mcp/webclaw.md) — Extract public content into Markdown and
  structured data.
- [integrations.sh](../agents-mcp/integrations-sh.md) — Look up API specs and
  MCP integration details.
- [skills](../agents-mcp/skills.md) — Install reusable agent instructions from a
  public directory.

## Sources

- [Official site](https://is-agentic.com/) — checked 2026-10-07
- [API, CLI, MCP docs](https://is-agentic.com/docs) — checked 2026-10-07
- [Methodology](https://is-agentic.com/methodology) — checked 2026-10-07
- [Vercel scan](https://is-agentic.com/scan/vercel.com) — checked 2026-10-07
- [Nuxt scan](https://is-agentic.com/scan/nuxt.com) — checked 2026-10-07
- [Ora scan](https://is-agentic.com/scan/ora.ai) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
