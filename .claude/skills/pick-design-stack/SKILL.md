---
name: pick-design-stack
description:
  Use when starting a new TolongLabs website or landing page and you need to
  choose component libraries, icons, type, color, motion and inspiration sources
  from the TolongDesign catalogue, respecting the project's budget (free vs
  paid).
---

# Pick A Design Stack

TolongDesign holds one researched doc per design tool. This skill turns a
project brief into a short, justified stack.

When the task also includes visual references, 3D/parallax/storytelling, full
source context, or implementation review, use `design-project` and follow
`docs/WORKFLOW.md` in the source checkout. This skill's stack table alone is not
rendered-design verification.

## Steps

1. Read the brief: product type, framework (default: Next.js + React +
   Tailwind), budget (default: **free or freemium only**), audience, tone.
2. Read [docs/PLAYBOOK.md](../../../docs/PLAYBOOK.md) for the decision order.
3. Shortlist per layer with `bun run find` (run `bun run index` first if
   `data/index.json` is stale), for example:

   ```sh
   bun run find -- --section component-libraries --surface web-ui --stack react --paywall free
   bun run find -- --section icons --paywall free
   bun run find -- --section design-galleries landing
   ```

4. Open each shortlisted doc in `docs/design/<section>/<slug>.md`. Check
   "Paywall and pricing" (licence for client work!), "How to use" and "Agent
   notes" (framework requirements, gotchas).
5. Output a stack table: layer, tool, paywall, why, doc link. One pick per layer
   plus one fallback. Flag anything paid or licence-restricted.

## Rules

- Never recommend a tool whose doc is `paywall: paid` without saying so.
- Quote prices only from the doc; if `last_verified` is older than ~3 months,
  re-check the official pricing page before relying on it.
- Do not download or commit third-party assets into the project; link them.
