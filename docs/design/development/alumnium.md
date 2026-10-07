---
name: Alumnium
slug: alumnium
section: Development
section_slug: development
source_url: 'https://alumnium.ai/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Natural-language end-to-end testing via MCP.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [testing, mcp, ai-agents, e2e, automation]
best_for:
  [
    natural-language e2e testing,
    agent-driven qa,
    multi-platform test automation
  ]
stack: [typescript, python, java]
agent_friendly: true
last_verified: 2026-10-07
---

# Alumnium

> Natural-language end-to-end testing via MCP. TolongLabs developers use
> Alumnium to enable AI coding agents to execute, debug, and verify end-to-end
> user journeys across web and mobile applications using plain English commands.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [alumnium.ai](https://alumnium.ai/)                               |
| Paywall        | **Free** — 100% free and open source under MIT licence            |
| Open source    | Yes — MIT ([GitHub](https://github.com/alumnium-hq/alumnium))     |
| Type           | AI end-to-end testing framework and Model Context Protocol server |
| Works with     | MCP agents, Web browsers, iOS, Android, TypeScript, Python        |
| Best for       | Natural-language E2E testing, agent-driven QA, mobile testing     |
| Agent-friendly | Yes — native MCP server, CLI binary, multi-language clients       |

## What it is

Alumnium is an open-source test automation engine and Model Context Protocol
(MCP) server designed specifically for AI coding agents and QA engineers. While
traditional testing suites require hand-crafted locators, XPath queries, and
rigid assertion code, Alumnium allows agents to interact with web and mobile
interfaces using semantic, intent-based natural language.

At its core, Alumnium provides a high-performance MCP server that connects
directly to agents like Claude Code, Antigravity, or Cursor. The agent sends
high-level directives—such as "Search for running shoes and verify that the
first result costs under $100"—and Alumnium's vision and DOM analysis pipelines
translate the request into deterministic browser or mobile device actions.

Beyond agent interaction, Alumnium ships client libraries for TypeScript,
Python, and Java. This enables developers to embed natural-language test steps
directly into existing Playwright, Selenium, or Maestro test suites, blending
traditional code-based testing with flexible AI-driven assertions.

## Paywall and pricing

- **Free:** The Alumnium test runner, CLI binary, client libraries, MCP server,
  and documentation are 100% free and open source.
- **Paid:** None. No commercial licensing fees or gated features.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for unrestricted use in
  commercial, client, and proprietary QA pipelines.

Verified on the official Alumnium documentation and GitHub repository on
2026-10-07.

## How to use

1. Install the Alumnium CLI binary:

```bash
curl -LsSf https://alumnium.ai/install.sh | sh
```

2. Alternatively, install the TypeScript client package via Bun:

```bash
bun add -d alumnium
```

3. Add the Alumnium MCP server to your coding agent configuration:

```json
{
  "mcpServers": {
    "alumnium": {
      "command": "alumnium",
      "args": ["mcp"]
    }
  }
}
```

4. Write an automated test combining natural language with TypeScript:

```typescript
import { Alumnium } from 'alumnium'

async function runTestSuite() {
  const driver = new Alumnium({ platform: 'web' })
  await driver.launch('http://localhost:3000')

  // Perform natural language actions
  await driver.act('Click the sign up button in the header')
  await driver.act('Fill in the email input with test@tolonglabs.com')
  await driver.act('Submit the registration form')

  // Assert condition using natural language
  const verified = await driver.assert(
    'Verify that the onboarding welcome banner is visible'
  )
  console.log('Verification result:', verified)

  await driver.close()
}

runTestSuite()
```

## Examples

- [Alumnium Documentation](https://alumnium.ai/docs) — Setup guides, MCP
  configuration, and supported mobile/web driver options.
- [Alumnium MCP Integration Guide](https://alumnium.ai/docs/guides/mcp/) —
  Walkthrough detailing how to connect Claude Code and cursor agents to
  Alumnium.
- [GitHub Repository](https://github.com/alumnium-hq/alumnium) — Source code,
  issue tracker, and release changelogs.

## When to use it

- Use it when delegating autonomous QA testing or bug reproduction to AI coding
  agents that need to interact with live browser or mobile views.
- Use it to test complex, dynamic UI journeys where brittle CSS/XPath selectors
  frequently break in standard test suites.
- Skip it when you prefer deterministic, code-only browser automation without AI
  inference overhead; use [Playwright](../development/playwright.md).
- Skip it when managing parallel multi-agent desktop environments; see
  [Dray](../agents-mcp/dray.md).

## Agent notes

- Official documentation: `https://alumnium.ai/docs`.
- Operates natively as an MCP server (`alumnium mcp`), exposing tools to inspect
  the DOM, trigger clicks, type input, and assert visual state.
- Supports Maestro integration for native iOS and Android application testing
  alongside web browsers.
- Ensure headless Chrome or the required target browser binary is installed on
  the host environment before starting the runner.

## Alternatives in this repo

- [Playwright](../development/playwright.md) — Fast, deterministic browser
  automation framework with auto-waiting assertions and cross-browser support.
- [Dray](../agents-mcp/dray.md) — Unified desktop workspace for orchestrating
  and monitoring multiple parallel coding agents.

## Sources

- [Official site](https://alumnium.ai/) — checked 2026-10-07
- [Documentation](https://alumnium.ai/docs) — checked 2026-10-07
- [GitHub repository](https://github.com/alumnium-hq/alumnium) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build)
