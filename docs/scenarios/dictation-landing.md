# Dictation landing page

Acceptance scenario for [the project design workflow](../WORKFLOW.md). This is a
test brief and review rubric, not a built website or a claim of visual quality.

## Brief

Create a landing page for a dictation app with 3D, parallax, impactful
storytelling, and SEO fundamentals. Keep the work private for TolongLabs. Before
implementation, obtain the real product name, audience, feature facts, brand
constraints, existing stack, budget, and desired conversion action.

A possible narrative is thought → voice → text. This is a direction hypothesis,
not a product claim or an instruction to copy a reference. Choose the final
story and visual system through the target project's approval process.

## Retrieval and handoff check

Run from the private source checkout, or use its absolute `scripts/design.ts`
entrypoint from the target project:

```bash
bun run design -- search scroll --section motion --json
bun run design -- search 3d --stack react --json
bun run design -- search landing --section design-galleries --json
bun run design -- context gsap react-three-fiber drei saaspo image-to-code-skill --brief "Dictation landing page: 3D, parallax, storytelling, SEO" --json
```

Expected evidence: scroll search includes GSAP; React 3D search includes React
Three Fiber and Drei; gallery search includes sources without direct agent
interfaces; context contains the full requested docs, sources, dates, and
hashes. The agent then checks current official APIs and the target stack before
adopting those candidates. They are not mandatory dependencies for every
framework.

Search is literal retrieval, not semantic recommendation. Use several short
queries. A missing exact `scroll` tag must not prevent reading a relevant source
found through its full document. Do not filter out galleries merely because
`agent_friendly` is false.

## Rendered-design rubric

| Requirement       | Evidence needed in an actual target project                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| Product and story | Truthful copy and a clear narrative tied to dictation; no invented metrics or testimonials                     |
| Art direction     | Approved references plus one coherent type, color, spacing, and composition system                             |
| 3D                | Purposeful visual behavior; tested loading and a meaningful fallback, not an unrelated demo object             |
| Parallax          | Observed scroll choreography at key states, usable touch/mobile behavior, and reduced-motion support           |
| SEO               | Essential content in semantic initial HTML; title, description, canonical URL, and relevant metadata inspected |
| Accessibility     | Keyboard paths, focus, contrast, readable text, and motion preferences tested                                  |
| Performance       | Actual measurements with tool/device/method recorded; no invented scores or ranking guarantees                 |
| Visual finish     | Desktop/mobile screenshots compared with the approved direction, with mismatches revised                       |

Capture at least a desktop and mobile viewport, recording their actual sizes.
Inspect the top, a narrative transition, and the closing CTA, plus
reduced-motion behavior. Reference screenshots and generated mockups cannot
substitute for rendered implementation evidence.

## Honest completion

Record a pass, fail, or unverified result for each row with evidence. The CLI
suite verifies retrieval and context only. If a browser or image-generation tool
is unavailable, state that limit and use the workflow's evidence-gap branch.
Never claim the page looks amazing merely because the selected libraries match
the brief or the build succeeds.
