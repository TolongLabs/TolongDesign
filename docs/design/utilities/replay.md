---
name: Replay
slug: replay
section: Utilities
section_slug: utilities
source_url: 'https://letsreplay.co/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Session replay and visitor recording for websites.
paywall: unknown
pricing_summary:
  'Unknown; the homepage returns HTTP 200 with an empty visible body, while
  `/pricing` and `/docs` return HTTP 404. No price was found.'
open_source: false
license: unknown
category_tags: [analytics, session-replay, user-research]
best_for: [website session review]
stack: []
agent_friendly: false
last_verified: 2026-10-07
---

# Replay

> Session replay and visitor recording for websites. The product could not be
> verified because its official page title loaded but the visible page body was
> empty during this check.

## At a glance

| Field          | Value                                                                |
| -------------- | -------------------------------------------------------------------- |
| Source         | [letsreplay.co](https://letsreplay.co/)                              |
| Paywall        | **Unknown** — no pricing or access details load on the current site. |
| Open source    | No official public source repository was found.                      |
| Type           | Session replay service, according to the page title and listing      |
| Works with     | Not verified                                                         |
| Best for       | Not verified; listed for website session replay                      |
| Agent-friendly | No verified API, SDK, or agent interface                             |

## What it is

On 2026-10-07, a headless browser opened `https://letsreplay.co/` with HTTP 200
and the title “Replay – Session Replay & Visitor Recording.” The visible body
text was empty and the page contained zero links.

The page title and Designeer blurb identify the intended category as session
replay and visitor recording, but the current deployment exposed no product
interface, setup guide, or privacy information. Searches for an official GitHub
repository, Product Hunt page, and X/Twitter announcement did not surface one.
The current service and its paywall therefore remain unverified.

## Paywall and pricing

- **Free:** Unknown; no visible product interface or free tier was available.
- **Paid:** Unknown; no price was found in other checked sources.
- **Sign-up required?** Unknown; the root page exposed no account or workflow.
- **Licence for client work:** Unknown; no service terms or data-processing
  terms were available.

Paywall is **unknown** because the official site exposed no visible product
content or pricing on 2026-10-07.

## How to use

No installation or recording workflow could be verified. The root returned HTTP
200 but contained no visible text or links. Before considering the service for a
live site:

1. Confirm the vendor and product are still active at the official domain.
2. Review the current browser SDK or script installation instructions and
   determine whether recording can be restricted by route or user consent.
3. Check masking for personal data, session retention, deletion controls, and
   data-processing terms.
4. Test a non-sensitive page and confirm the replay does not capture private
   form fields or credentials.

These are evaluation requirements for session replay tools, not product
instructions for Replay.

## Examples

No product example or demo could be verified. The official homepage exposed no
visible content or links, and searches did not surface an official repository or
launch page. No example links are included rather than presenting duplicate or
unrelated pages as product demos.

## When to use it

- Reevaluate it only after confirming the vendor's current status and reviewing
  its privacy and data-processing documentation.
- Compare any recording tool's masking and retention controls against the site's
  legal and product requirements.
- Skip it for a live site until consent, sensitive-field masking, retention, and
  deletion behavior are documented.

## Agent notes

- Official URL: [letsreplay.co](https://letsreplay.co/); HTTP 200 and the page
  title loaded on 2026-10-07, but the visible body was empty and had no links.
- No package, script snippet, CLI, API, MCP endpoint, or `llms.txt` was
  verified.
- No pricing, data-processing terms, privacy controls, or sample replays were
  found.
- Do not add an unverified tracking script to a client project.

## Alternatives in this repo

- [Mesurer](../utilities/mesurer.md) — inspect and annotate a live page during
  visual QA without claiming session analytics.
- [Screenshot Studio](../utilities/screenshot-studio.md) — prepare static
  screenshot mockups rather than record visits.
- [Shiori](../utilities/shiori.md) — save and retrieve research links rather
  than track visitor sessions.

## Sources

- [Official Replay site](https://letsreplay.co/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
