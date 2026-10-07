---
name: Are.na
slug: are-na
section: Design Galleries
section_slug: design-galleries
source_url: 'https://www.are.na/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Collaborative research and visual bookmarking platform.'
paywall: freemium
pricing_summary:
  'Free tier includes up to 200 connections; Premium is $7/mo or $70/yr for
  unlimited blocks, reader mode, and full-text search.'
open_source: false
license: proprietary
category_tags:
  [research, moodboards, visual-bookmarking, channels, collaborative]
best_for:
  [
    creative research moodboards,
    visual bibliography,
    design team knowledge organization
  ]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Are.na

> Collaborative research and visual bookmarking platform. TolongLabs developers,
> researchers, and coding agents reach for Are.na to build non-algorithmic
> moodboards, curate conceptual bibliographies, and sync research via REST API.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [are.na](https://www.are.na/)                                  |
| Paywall        | **Freemium** — free tier (200 blocks); Premium $7/mo or $70/yr |
| Open source    | No — proprietary (open developer API)                          |
| Type           | Visual research and collaborative bookmarking platform         |
| Works with     | Web browsers, mobile apps, official REST API                   |
| Best for       | Creative moodboarding, design research, knowledge graphs       |
| Agent-friendly | Yes — official REST API with public documentation              |

## What it is

Are.na is an independent visual bookmarking, thinking, and research platform
founded by Charles Broskoski, Daniel Pianetti, Chris Barley, and Chris Sherron.
Designed intentionally as an alternative to algorithmic, engagement-driven
social media, Are.na operates without ads, likes, follower counts, or behavioral
recommendation feeds.

The platform is structured around "blocks" (images, links, code snippets, PDFs,
text fragments, and embeds) organized into collaborative "channels". Users can
connect any public block from someone else's channel into their own channels,
creating a decentralized web of interconnected ideas, visual references, and
conceptual research trails.

In the design and software community, Are.na is heavily utilized for deep
creative research: collecting historical typography specimens, interface design
critiques, architectural photographs, obscure website links, and conceptual
frameworks that lie outside the mainstream design conversation.

## Paywall and pricing

- **Free:** Free Guest account allows creating public and private channels,
  connecting up to 200 blocks, exploring the public network, and using the REST
  API.
- **Paid:** Premium membership removes the 200-block connection limit entirely
  and unlocks features such as Reader mode, full-text PDF and page search, Table
  view, custom block thumbnails, and pinned blocks. Premium costs $7/month or
  $70/year. An extended Supporter tier is also offered for contributing members.
- **Sign-up required?** Browsing public channels is open. An account is required
  to save blocks, create channels, or obtain API tokens.
- **Licence for client work:** Blocks contain user-uploaded and linked web
  assets subject to their original copyrights. Are.na functions as an internal
  research and ideation tool.

Verified on the official Are.na billing documentation on 2026-10-07.

## How to use

1. Create a dedicated channel: Set up a project channel (e.g., "TolongLabs
   Client Aesthetics" or "Minimal Interface Lore") with open or closed
   permissions.
2. Connect cross-disciplinary references: Save web URLs, typography specimens,
   SVG diagrams, and code snippets into the channel using browser extensions or
   the mobile app.
3. Discover connected thought: Click "Connected Channels" on any block to
   explore adjacent research compiled by other designers, architects, and
   thinkers.
4. Programmatically query channels: Use the Are.na REST API to fetch blocks,
   markdown notes, and image URLs directly into project documentation or
   automated brief generators:

```bash
# Fetch channel blocks using the official Are.na API
curl -s "https://api.are.na/v2/channels/useful-design-tools/contents" \
  -H "Authorization: Bearer YOUR_ARENA_TOKEN"
```

## Examples

- [Are.na Explore Feed](https://www.are.na/explore) — Live public network of
  newly updated channels across technology, art, and visual theory.
- [Are.na Developer Portal](https://dev.are.na/) — Official API documentation,
  OAuth guide, and Personal Access Token management.
- [Are.na Billing & Plans](https://www.are.na/billing) — Overview of Free,
  Premium ($7/mo), and Supporter membership tiers.

## When to use it

- Use it when conducting deep qualitative research, brand ideation, or
  conceptual moodboarding for client engagements.
- Use it when building automated tools that pull structured visual bookmarks via
  its public REST API.
- Skip it when you just need copy-paste UI component code or standardized SaaS
  landing page blocks; choose
  [Landingfolio](../design-galleries/landingfolio.md) instead.

## Agent notes

- Exceptionally agent-friendly: Are.na provides a well-documented public REST
  API (`https://api.are.na/v2/`) with endpoint documentation at `dev.are.na`.
- Agents can query channels, retrieve block contents, search by tags, and
  programmatically create blocks using access tokens.
- High signal-to-noise ratio: Content on Are.na is curated by independent human
  practitioners, making channel bibliographies valuable training and
  benchmarking material for creative direction.

## Alternatives in this repo

- [Pinterest](../design-galleries/pinterest.md) — Mainstream consumer visual
  discovery engine with broad lifestyle and design imagery.
- [Designspiration](../design-galleries/designspiration.md) — Visual design
  platform featuring hex-code color search and moodboards.
- [SiteInspire](../design-galleries/siteinspire.md) — Curated gallery
  specifically focused on web and interactive interface craft.

## Sources

- [Official site](https://www.are.na/) — checked 2026-10-07
- [Developer Portal](https://dev.are.na/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/)
