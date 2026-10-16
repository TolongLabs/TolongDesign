# Resource metadata

Use these fields to shortlist resources. Open the full tool doc before using a
result: these fields do not certify licensing, compatibility, unattended
automation or current pricing. The source schema lives in
[`scripts/catalogue-schema.ts`](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/catalogue-schema.ts).

## Execution mode

Set one `execution_mode` from the resource's primary documented workflow, not
from optional integrations or the fact that it has a website.

| Value         | Documented workflow                                                    |
| ------------- | ---------------------------------------------------------------------- |
| `registry`    | A registry CLI adds component source to the project.                   |
| `package`     | Install a code dependency and use its API.                             |
| `snippet`     | Copy the documented HTML, CSS, JavaScript or other source.             |
| `mcp-skill`   | Operate a dedicated agent MCP server, skill or CLI.                    |
| `browser-app` | Use a browser editor, generator or converter to produce/export output. |
| `reference`   | Read or browse a resource, or operate a desktop app manually.          |

A gallery remains `reference` even when a browser can open it. A desktop app is
not `package` merely because its installation instructions use a shell command.
When multiple paths exist, choose the path the How-to-use section recommends;
record access limits and alternative paths in Agent notes.

`agent_friendly` remains a compatibility field for existing callers. Prefer
execution mode when choosing a tool an agent will actually operate. Neither
field grants access to a paid integration or permission to copy licensed assets.

## Surface

`surface` is a nonempty list of documented output or use domains. It is
independent of the section: component-libraries can contain email, PDF, audio,
video and terminal tools without moving their docs.

- Interface/output domains: `web-ui`, `web-3d`, `mobile-ui`, `cli-tui`, `email`,
  `pdf`, `video`, `og-image`, `audio`, `comics`, `desktop`, `print`.
- Other assets: `web-asset`, including badges, decorative cursor pets, textures
  and exported image/vector assets which are not interface component libraries.
- Supporting resources: `reference`, `development`, `hosting`.

Add multiple surfaces only when the doc describes those uses. A framework name
or a theoretical conversion does not establish a supported surface.

## Status

| Value         | Meaning at the doc's verification date                                       |
| ------------- | ---------------------------------------------------------------------------- |
| `active`      | The documented workflow is available, with no recorded availability failure. |
| `degraded`    | A documented limitation or temporary failure affects that workflow.          |
| `unreachable` | The original resource is down, removed, replaced or otherwise unavailable.   |

Default search excludes unreachable resources. Use `--include-unreachable` for
historical research or a repair sweep. Active is a dated statement, not a live
health check. Recheck old docs before depending on them.

`bun run links -- --status` reports suggested status and request evidence; it
does not edit the docs. Confirm the original product and workflow before
applying a suggestion. A successful HTTP response can still be a placeholder or
a different product. Authentication, bot-blocking and rate-limit responses are
undetermined, not proof of removal.

When changing availability, add a dated reason to the doc and update
`last_verified` and the relevant Sources dates. A metadata-only normalization
preserves existing verification dates; it does not claim a fresh pricing check.

## Stack

Use canonical values from `STACKS` in the source schema. Maintenance validation
rejects unknown values and noncanonical aliases. Queries accept the documented
aliases, such as `framer-motion` for `motion` and `radix-ui` for `radix`.

Keep specialized documented technologies. Add `shadcn` only for documented
registry or shadcn compatibility, not because a resource looks like shadcn.
Category tags are search terms, not compatibility evidence.

## Generated fields and creator credits

The index's `install` field is derived from the first shell code block under How
to use. It can include setup steps; read the doc before executing it. A compact
card points to the doc for long blocks instead of clipping commands. Never
hand-edit this field in `data/index.json`.

A person can have `created_tools: [section/slug]`. Each linked ID has a matching
`created_tools_evidence` record with `source_url`, `checked` and a literal
attribution `quote` from an official tool, repo or author page. The validator
checks IDs and evidence coverage; the generated people table links to both the
tool doc and its credit source. Missing links mean unresearched, not that the
person has created nothing. Name/host similarity is not attribution evidence.

After source edits, run `bun run index`, `bun run check` and `bun run format`.
