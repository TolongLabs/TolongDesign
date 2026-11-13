---
name: Granola
slug: granola
section: Desktop
section_slug: desktop
source_url: 'https://granola.ai/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'AI notepad generating meeting summaries without bots.'
paywall: freemium
pricing_summary:
  'Free tier covers basic AI meeting notes and custom templates; Business plan
  is $14/user/month ($18/mo monthly) for unlimited notes and CRM integrations.'
open_source: false
license: proprietary
category_tags: [notes, ai, transcription, meetings, macos]
best_for: [client scoping, design discovery, sprint reviews, spec extraction]
stack: []
execution_mode: reference
surface: ['desktop']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Granola

> AI notepad generating meeting summaries without bots. TolongLabs developers
> reach for Granola to capture client design discussions and technical discovery
> sessions without intrusive bots joining video calls.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [granola.ai](https://granola.ai/)                             |
| Paywall        | **Freemium** — free tier available; Business $14/user/mo      |
| Open source    | No — proprietary desktop software                             |
| Type           | Native desktop AI notepad and transcription application       |
| Works with     | macOS (Apple silicon & Intel), Zoom, Google Meet, Teams       |
| Best for       | Client scoping, design discovery, sprint reviews, spec notes  |
| Agent-friendly | No — GUI desktop application; export notes manually to agents |

## What it is

Granola is an AI-powered desktop notepad engineered specifically for meetings
and technical interviews. Unlike conventional meeting transcription services
that dispatch a robotic third-party recording bot (such as Otter or Fireflies)
into Zoom, Google Meet, or Microsoft Teams calls, Granola captures computer
audio and microphone inputs entirely locally on your machine.

During a client design call or sprint review, developers type rough, bulleted
notes in Granola just as they would in Apple Notes or Notion. After the call,
Granola blends your rough manual bullet points with the full audio transcript,
using modern LLM reasoning models to flesh out comprehensive action items,
architectural choices, and design constraints without hallucinating topics you
did not care to mention.

Because notes are grounded in your actual handwritten bullets, the resulting
summaries reflect developer priorities rather than endless transcript dumps.
Granola organizes notes into searchable folders, provides custom prompt
templates tailored to product discovery or engineering specs, and connects to
tools like Notion and Slack.

## Paywall and pricing

- **Free (Basic):** Free to download and use. Includes AI-enhanced meeting
  notes, custom prompt templates, shared workspace folders, multi-language
  transcription, and in-note AI chat for querying meeting details.
- **Paid:**
  - **Business:** $14 per user/month billed annually ($18/user/month billed
    monthly). Includes unlimited meeting notes and full historical search,
    access to advanced AI reasoning models, shared team folders, centralized
    admin billing, and direct integrations with Notion, HubSpot, Zapier, Attio,
    and Affinity.
  - **Enterprise:** Starting at $35 per user/month for custom enterprise data
    retention policies, custom security reviews, and dedicated account support.
- **Sign-up required?** Yes, account creation (Google or Apple sign-in) is
  required to sync transcripts and generate AI notes.
- **Licence for client work:** Allowed for commercial client consulting, design
  calls, and internal engineering documentation.

Checked on the official pricing documentation on 2026-10-07.

## How to use

1. Download and install Granola for macOS from the official website:

```bash
brew install --cask granola
```

2. Grant system permissions for microphone recording and system audio capture
   when prompted by macOS.

3. Start a design discovery or sprint meeting in Google Meet or Zoom. Open
   Granola and click "Record". Because Granola operates via system audio
   drivers, no bot joins the participant list.

4. Type shorthand notes during the call:

- Note key user requirements: `User wants dark mode by default`
- Record technical decisions: `Prefers Tailwind v4 and Lucide icons`
- Note deadlines and constraints: `Launch beta on Nov 1`

5. Stop recording when the call concludes:

- Select a summary template (e.g. "Client Brief", "Bug Triage", or "Action
  Items").
- Granola enhances your handwritten notes into structured Markdown.
- Click "Share" to copy the formatted Markdown directly into a project brief or
  issue description for coding agents.

## Examples

- [Granola Product Overview](https://granola.ai/) — Official product overview
  demonstrating bot-free recording and real-time audio synthesis.
- [Granola Pricing](https://granola.ai/pricing) — Official plan comparison
  detailing Basic, Business, and Enterprise capabilities.
- [Granola Blog](https://granola.ai/blog) — Articles and release notes covering
  integrations with Notion and template customization.

## When to use it

- Use it when conducting client discovery calls, design review sessions, or
  architecture reviews where having an automated bot join the call is awkward or
  disallowed by client privacy policies.
- Use it to produce clean, structured Markdown requirements that you can feed
  directly into coding agents or prompt files.
- Skip it if you require a terminal-native recording workflow or scriptable CLI;
  use [Warp](../desktop/warp.md) terminal logs instead.
- Skip it if you need full video screen capture and timeline editing; use
  [Descript](../video-capture/descript.md) or
  [Screen Studio](../video-capture/screen-studio.md) instead.

## Agent notes

- Granola is a closed-source GUI macOS desktop application.
- Coding agents cannot interface directly with Granola via local socket or CLI.
- To use Granola notes in an agentic coding workflow, copy the generated
  Markdown summary from Granola and paste it into a project brief or
  `.cursorrules` / `AGENTS.md` context document.

## Alternatives in this repo

- [Warp](../desktop/warp.md) — Rust terminal with built-in AI assistant for
  capturing and debugging CLI command sessions.
- [Descript](../video-capture/descript.md) — Full audio/video editor that
  transcribes dialogue and lets you edit recordings by editing text.

## Sources

- [Official site](https://granola.ai/) — checked 2026-10-07
- [Pricing](https://granola.ai/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
