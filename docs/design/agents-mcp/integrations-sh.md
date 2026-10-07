---
name: integrations.sh
slug: integrations-sh
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://integrations.sh/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Repository of API integration specifications for agents.'
paywall: free
pricing_summary:
  'The catalog, API, and MCP service are free; the repository is MIT licensed.'
open_source: true
license: MIT
category_tags: [api-specifications, mcp, integrations]
best_for: ['agent API context', 'provider integration discovery']
stack: [rest, mcp, openapi, graphql]
agent_friendly: true
last_verified: 2026-10-07
---

# integrations.sh

> Repository of API integration specifications for agents. TolongLabs use: Use
> its catalog to find API specifications before an agent writes an integration.

## At a glance

| Field          | Value                                             |
| -------------- | ------------------------------------------------- |
| Source         | [Official site](https://integrations.sh/)         |
| Paywall        | **Free** — Free MIT catalog, API, and MCP         |
| Open source    | Yes — MIT                                         |
| Type           | Searchable catalog of integration specifications  |
| Works with     | REST API, MCP, OpenAPI, GraphQL, CLI specs        |
| Best for       | agent API context, provider integration discovery |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use            |

## What it is

integrations.sh catalogs specifications across MCP, OpenAPI, GraphQL, and CLI
formats. Search by provider or domain to find API surfaces for an agent or
developer.

The public API and MCP are read-only and require no credentials according to the
repository. The MIT catalog helps discovery but does not replace provider
documentation.

## Paywall and pricing

- **Free:** The public catalog, REST API, and MCP service are free without
  credentials.
- **Paid:** No paid plan or usage charge was listed in the official site or
  repository.
- **Sign-up required?:** No account or API key is required for the public
  catalog, API, or MCP endpoint.
- **Licence for client work:** The repository is MIT licensed. Provider APIs and
  names remain subject to each provider’s terms.

Checked 2026-10-07.

## How to use

1. Search for a provider domain and filter by format to find the endpoint type
   relevant to your task.

2. Open a provider page and pass the relevant specification to the agent.
   Confirm authentication and behavior in official provider documentation.

3. For automation, query the public REST API or connect MCP. Use results for
   discovery, then test against a provider sandbox.

```bash
curl -s https://integrations.sh/api/stripe.com/detect
```

## Examples

- [Canva integrations](https://integrations.sh/canva.com/) — Inspect the
  provider view for Canva.
- [Atlassian integrations](https://integrations.sh/atlassian.com/) — Review a
  provider with multiple product surfaces.
- [HubSpot integrations](https://integrations.sh/hubspot.com/) — Compare another
  API provider’s listed formats.

## When to use it

- Use it when an agent needs a map of an API or MCP surface before
  implementation.
- Skip it for guaranteed current semantics or credentials; use provider docs and
  a test environment.

## Agent notes

The README documents MCP and REST routes such as `/api.json` and
`/api/{domain}/detect`; check it for current patterns.

Specifications can go stale. Verify important fields against official docs
before production code.

## Alternatives in this repo

- [Webclaw](../agents-mcp/webclaw.md) — Extract public pages into Markdown and
  structured data.
- [is-agentic.com](../agents-mcp/is-agentic-com.md) — Score public
  machine-readability.
- [fx](../agents-mcp/fx.md) — Implement a verified integration with a local
  agent.

## Sources

- [Official catalog](https://integrations.sh/) — checked 2026-10-07
- [GitHub repository](https://github.com/UsefulSoftwareCo/integrations) —
  checked 2026-10-07
- [Canva page](https://integrations.sh/canva.com/) — checked 2026-10-07
- [Atlassian page](https://integrations.sh/atlassian.com/) — checked 2026-10-07
- [HubSpot page](https://integrations.sh/hubspot.com/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
