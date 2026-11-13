---
name: REA
slug: rea
section: Agents & MCP
section_slug: agents-mcp
source_url: https://github.com/morluto/rea
designeer_url: https://github.com/morluto/rea
designeer_blurb: >-
  Reverse engineer anything with agents, from app behavior down to native
  binaries.
paywall: free
pricing_summary: >-
  REA's CLI and MCP server are free and MIT licensed; no REA price is published.
  Model/provider charges and third-party analysis-engine licences are separate.
open_source: true
license: MIT
category_tags:
  [ai, agent, browser, cli, mcp, reverse-engineering, software-analysis]
best_for:
  [
    public web reference analysis,
    authorized app analysis,
    evidence-led reconstruction
  ]
stack: ['nodejs', 'npm', 'mcp', 'chrome']
execution_mode: mcp-skill
surface: ['development', 'reference']
status: active
agent_friendly: true
last_verified: 2026-10-11
---

# REA

> Reverse engineer anything with agents, from app behavior down to native
> binaries. Use its local MCP and CLI workflows to study public UI references or
> software you are authorized to inspect.

## At a glance

| Field          | Value                                                                          |
| -------------- | ------------------------------------------------------------------------------ |
| Source         | [GitHub](https://github.com/morluto/rea)                                       |
| Paywall        | **Free** — open-source CLI and MCP server; model and engine costs are separate |
| Open source    | Yes — MIT ([LICENSE](https://github.com/morluto/rea/blob/main/LICENSE))        |
| Type           | Local reverse-engineering MCP server and CLI                                   |
| Works with     | MCP agents, Node.js and npm; Chrome-family browser for web inspection          |
| Best for       | Public web references and authorized app analysis                              |
| Agent-friendly | Yes — local MCP server and documented CLI                                      |

## What it is

REA is a local reverse-engineering toolkit that connects a coding agent to MCP
tools and exposes the same workflows through a CLI. It can inspect native
binaries, JavaScript and Electron apps, .NET assemblies, websites, and other
supplied artifacts. Its results include evidence and limitations for the
conclusions it returns.

Static JavaScript and .NET analysis reads supplied files without running the
application. Browser and process captures run or interact with the selected
target under the user's permissions. Browser network results cover the observed
page and capture window; they do not establish what happened before or outside
that window. For visual-reference work, use pages you own or are authorized to
study, then build an original implementation. Public access does not grant
permission to copy assets or inspect private content.

## Paywall and pricing

- **Free:** REA's CLI and MCP server are open source under MIT. The README and
  package manifest publish no REA paid plan or price.
- **Model/provider charges:** Not published by REA. The selected model provider
  has its own terms and data policy; any provider charges are separate.
- **Native analysis engines:** Deep native analysis can use Hopper, Ghidra, or
  IDA. Setup can offer to install Hopper with approval, and Hopper may ask you
  to activate a licence on first use. Engine prices and licence terms are
  separate and not published by REA.
- **Sign-up required?** Not published for REA itself. Your selected agent or
  model provider may have separate account requirements.
- **Licence for client work:** MIT permits commercial use subject to its notice
  terms. It does not grant rights to third-party engines, target software, or
  assets.

Checked on 2026-10-11.

## How to use

1. Use Node.js `22.19+`, `24.11+`, or `26+`, with npm. To register REA with an
   MCP-capable agent, run the documented setup command:

   ```bash
   npx rea-agents setup
   ```

   Choose only the agents you want to configure. Review the proposed files and
   changes before approval. Setup backs up existing configuration and installs
   matching workflow instructions; restart the selected agent afterward. It may
   separately offer to install Hopper, which also requires approval.

2. To inspect an extracted JavaScript or Electron app directory or ASAR from the
   terminal, use the README example:

   ```bash
   npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --format json
   ```

3. For browser references, the official guide uses Chrome with a separate
   profile and a local debugging port. This Linux example opens REA's public
   Notes demo; use the installed browser executable on macOS or Windows.

   ```bash
   google-chrome \
     --remote-debugging-port=9222 \
     --user-data-dir=/tmp/rea-notes-browser \
     https://rea.tools/examples/notes-web/
   ```

4. Find the page target, then start a ten-second observation before performing
   the public UI action you want to study:

   ```bash
   npx -y rea-agents@latest list-browser-targets \
     http://127.0.0.1:9222 --format json

   npx -y rea-agents@latest inspect-web-page \
     http://127.0.0.1:9222 TARGET_ID \
     --observation-ms 10000 \
     --include-accessibility-text \
     --include-json-body-shapes --format json
   ```

   To read loaded script sources, the guide documents:

   ```bash
   npx -y rea-agents@latest inspect-web-page \
     http://127.0.0.1:9222 TARGET_ID \
     --include-script-sources --format json
   ```

5. Capture the current viewport with the command verified in REA 6.4.0:

   ```bash
   npx -y rea-agents@latest capture-web-screenshot \
     http://127.0.0.1:9222 TARGET_ID --format json
   ```

   Current 6.4.0 CLI help uses `--format json`; check installed help when
   following older guide examples. This captures only the current viewport; it
   does not scroll or prove that a 3D scene rendered. Inspect the actual image
   and report graphics or viewport limits. Keep raw captures outside the
   collection.

   Close only the browser/profile you started when finished. Use the output as
   evidence for an original design; it does not authorize copying assets or
   collecting private content. Direct CLI inspection does not require global
   agent registration or a native-analysis engine.

## Examples

- [Notes browser example](https://rea.tools/examples/notes-web/) — observe the
  Export button, its `notes.json` request, and the script that builds a CSV
  download.
- [DX-Ball sound-panning case study](https://rea.tools/showcase/dx-ball/) —
  trace a function in an executable and use its instructions and data to
  reconstruct checked C code.
- [Notion clipboard case study](https://rea.tools/showcase/notion/) — follow an
  Electron clipboard call from the page-facing API through preload IPC to the
  main-process handler.
- [TH04 bullet-pattern case study](https://rea.tools/showcase/th04/) — connect
  DOS instructions for a bullet-ring angle calculation to maintained C++ source
  and compiler checks.

## When to use it

- Use it to study a public page's structure or an observable interaction when
  the evidence will guide an original design.
- Use it for authorized analysis of local application files or binaries when you
  need evidence about implementation behavior.
- Skip it for general coding work that does not need application inspection; use
  [OpenCode](../agents-mcp/opencode.md) for a general MCP-capable coding agent.

## Agent notes

- Official docs:
  [Browser and Network Analysis guide](https://rea.tools/guides/browser/); the
  README links to setup and CLI reference material.
- npm package: `rea-agents`. The manifest exposes `rea` and `rea-agents`
  commands. The README documents `npm install --global rea-agents` and
  `rea --help` for a global install.
- Runtime floor: Node.js `^22.19.0 || ^24.11.0 || >=26.0.0`; npm is required.
  Browser analysis needs a Chrome-family browser.
- Native analysis needs an available provider such as Hopper, Ghidra, or IDA.
  Static JavaScript and .NET inspection do not need a native analysis engine.
- Setup writes REA's MCP registration and workflow instructions for the selected
  agent and backs up existing configuration. Review the exact scope before
  approving.
- Local analysis does not set the model provider's data policy. Static source
  evidence, a browser observation window, and actual runtime interaction are
  different kinds of evidence.

## Alternatives in this repo

- [OpenCode](../agents-mcp/opencode.md) — a general terminal coding agent with
  MCP client support; it can run agent workflows but does not provide REA's
  reverse-engineering analysis tools.

## Sources

- [Official README](https://github.com/morluto/rea) — checked 2026-10-11
- [MIT LICENSE](https://github.com/morluto/rea/blob/main/LICENSE) — checked
  2026-10-11
- [npm package manifest](https://github.com/morluto/rea/blob/main/package.json)
  — checked 2026-10-11
- [Browser and Network Analysis guide](https://rea.tools/guides/browser/) —
  checked 2026-10-11
- [Notes browser example](https://rea.tools/examples/notes-web/) — checked
  2026-10-11
- [DX-Ball case study](https://rea.tools/showcase/dx-ball/) — checked 2026-10-11
- [Notion case study](https://rea.tools/showcase/notion/) — checked 2026-10-11
- [TH04 case study](https://rea.tools/showcase/th04/) — checked 2026-10-11
