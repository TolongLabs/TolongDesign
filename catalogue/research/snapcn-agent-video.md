---
title: 'snapcn agent video templates: teardown and rebuild'
summary:
  'Research behind collections/agent-video. Started from Shadcn Labs'' X post of
  2026-11-10 announcing five new snapcn templates ("Swap the copy, render,
  post."). Done 2026-11-12 to 2026-11-13.'
last_verified: 2026-11-13
---

# snapcn agent video templates: teardown and rebuild

Research behind
[collections/agent-video](../../collections/agent-video/README.md). Started from
Shadcn Labs' X post of 2026-11-10 announcing five new snapcn templates ("Swap
the copy, render, post."). Done 2026-11-12 to 2026-11-13.

## Question

How do the snapcn video templates work, and how do we build our own?

## Answer in short

- The templates are **paid** (Pro, Lifetime, Commercial). Their source is in a
  private folder that the public repo ignores; the public repo has the free MIT
  components, the motion rules, the agent skills and the beat list of every
  template. The post's "5 new templates" are templates 06 to 10.
- A template is **data**: an ordered list of beats, each one component at a
  fixed frame count, back to back at 1920x1080, 30 fps. No crossfades.
- The November films alternate **paper and ink acts** on the cut, use one
  low-saturation accent, and lean on typed text, chat and composer UI, phone
  screens, motion-blurred big type and a closing lockup.
- We rebuilt the five November films as our own kit and templates, and wrote 155
  teardowns (10 templates, 63 free, 82 Pro components).

## Evidence ledger

| Claim                               | Evidence                                                                                                                                                        | Type                   |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Templates are paid and gated        | Templates page copy; `lib/plans.ts`; the registry route answers 402 or serves a watermarked preview to unpaid installs; `registry/snap-cn-pro/` in `.gitignore` | Source (public repo)   |
| The page ships no template code     | REA `analyze_web_bundle` on `/docs/templates`: 113 scripts, 2 endpoints (`/api/subscribe`, GitHub API); grep of all 20 page chunks finds beat labels only       | Static bundle analysis |
| Templates 06 to 10 are the new five | Commit "Add templates 06-10 to the templates page", 2026-11-10, same day as the post                                                                            | Repo history           |
| Beat lists and lengths              | `components/docs/gallery/template-reels.ts` (generated from the private source); beat frames sum exactly to each film's frame count                             | Source + measured      |
| Cuts, acts, accents                 | Frame differences and luminance over every frame of the ten public 1080p films                                                                                  | Measured               |
| Free component internals            | MIT source in `registry/snap-cn/` and `registry/snap-cn-ui/`                                                                                                    | Source                 |
| Pro component behaviour             | 16-frame contact sheets and measurements of each public demo film                                                                                               | Observed / inferred    |

## Method

1. Read the post with Lurk (text, video with Gemini, replies).
2. Cloned the public repo (commit `e3c7268`, 2026-11-12) and read the templates
   page, registry route, plan config, motion direction (`MOTION.md`), the
   motion-quality skill and the workflow skills.
3. Ran REA bundle analysis against the live templates page in headless Chromium
   to confirm what the browser receives.
4. Downloaded the public demo films (10 templates, 55 free, 83 Pro) to a scratch
   directory, never into this repo, and built labelled contact sheets plus
   metadata (cuts, holds, acts, motion energy, palette) for each.
5. Fanned out 22 teardown chunks to `muse-spark-1.3-contributor` workers on
   public inputs only (the MIT source, the films, a fixed spec). Review fixed
   two failure modes: two chunks stopped early (re-run), and 441 timeline table
   rows were malformed (repaired mechanically). Cost about USD 0.79.
6. Designed the kit (tokens, motion maths, spec, primitives) and built the
   Launch film by hand as the worked example; four workers then built the other
   four films' scenes against their teardowns, and every render was reviewed
   here.

## Boundaries

- No snapcn code, film, still or font is committed. The knowledge base
  paraphrases; constants and prop names are quoted as facts.
- Paid behaviour is described from public films only. Numbers tagged
  `(inferred)` are readings between sampled frames, not measurements.
- Our templates rebuild structure and technique with our own copy and a
  placeholder brand (Acme). Do not ship them with snapcn's copy or brand.
- Remotion's licence applies to anything we render: free for up to three people,
  a company licence beyond that.

## Open questions

- Sound: the films are silent on the site; the templates' music and sound
  design, if any, are unknown.
- Pro components were sampled at 16 frames each; fast phases between samples are
  inferred. Scrubbing the live previews would tighten them.
- Templates 01 to 05 are documented but not rebuilt; most of their beats map
  onto existing kit scenes plus a few new ones (Underline Pair, Lockup Reveal,
  Type Dive).
