# Graph Report - TolongDesign  (2026-10-11)

## Corpus Check
- 474 files · ~381,633 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 3)

## Summary
- 863 nodes · 3581 edges · 24 communities (21 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bff0fa7f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- React
- MCP (Model Context Protocol)
- Design playbook
- Figma
- TolongDesign docs
- CSS
- WebGL
- TypeScript
- Motion
- lib.ts
- build-index.ts
- package.json
- design-lib.ts
- find.ts
- design.ts
- .prettierrc.json
- Radix
- File responsibilities
- design-cli.test.ts
- design-lib.test.ts
- Cloudflare
- Image-to-code skill

## God Nodes (most connected - your core abstractions)
1. `React` - 201 edges
2. `MCP (Model Context Protocol)` - 129 edges
3. `Tailwind CSS` - 121 edges
4. `Component Libraries Section Index` - 112 edges
5. `Design playbook` - 93 edges
6. `Design Galleries section README` - 80 edges
7. `shadcn/ui` - 70 edges
8. `TypeScript` - 54 edges
9. `Next.js` - 51 edges
10. `Designeer` - 50 edges

## Surprising Connections (you probably didn't know these)
- `Task 2: Implement deterministic retrieval and context` --references--> `UsageError`  [INFERRED]
  docs/superpowers/plans/2026-10-11-project-design-workflow.md → scripts/design-lib.ts
- `CLI contract` --references--> `UsageError`  [INFERRED]
  docs/superpowers/specs/2026-10-11-project-design-workflow-design.md → scripts/design-lib.ts
- `CLI contract` --references--> `buildContext()`  [INFERRED]
  docs/superpowers/specs/2026-10-11-project-design-workflow-design.md → scripts/design-lib.ts
- `llms.txt` --semantically_similar_to--> `MCP (Model Context Protocol)`  [INFERRED] [semantically similar]
  docs/design/component-libraries/fancy-components.md → AGENTS.md
- `CLI contract` --references--> `SearchOptions`  [INFERRED]
  docs/superpowers/specs/2026-10-11-project-design-workflow-design.md → scripts/design-lib.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **VRM avatar authoring and animation pipeline** — docs_design_3d_vroid_studio_vroid_studio, concept_vrm, docs_design_3d_three_vrm_three_vrm, docs_design_3d_mixamo_mixamo, concept_retargeting [EXTRACTED 1.00]
- **AI coding agents and editors** — docs_design_development_claude_code_claude_code, docs_design_development_cursor_cursor, docs_design_development_zed_zed [EXTRACTED 1.00]
- **ASCII art tools in the catalogue** — docs_design_component_libraries_ascii_rest_ascii_rest, docs_design_utilities_asciinator_asciinator, docs_design_utilities_ascii_studio_ascii_studio, docs_design_utilities_ascii_kracked_devs_ascii_kracked_devs [EXTRACTED 1.00]
- **Web design workflow stages** — concept_collect_references, concept_lock_visual_system, concept_pick_components, concept_icons_imagery_motion_3d, concept_build_with_agent, concept_ship_website [EXTRACTED 1.00]
- **Privacy analytics and logging tools** — docs_design_development_umami_umami, docs_design_development_tracwell_tracwell, docs_design_development_evlog_evlog [EXTRACTED 1.00]
- **Multi-agent coding orchestrators** — docs_design_agents_mcp_ghostex_ghostex, docs_design_agents_mcp_herdr_herdr, docs_design_agents_mcp_fx_fx, docs_design_agents_mcp_dray_dray [INFERRED 0.75]
- **Headless accessible UI primitives** — concept_radix_ui, concept_react_aria, docs_design_component_libraries_headless_ui_headless_ui [INFERRED 0.75]
- **Screen recording with cursor/zoom polish** — docs_design_video_capture_screen_studio_screen_studio, docs_design_video_capture_cursorful_cursorful, docs_design_video_capture_recordly_recordly [INFERRED 0.75]
- **Screenshot / mockup beautifier tools** — docs_design_utilities_postspark_postspark, docs_design_utilities_screenshot_studio_screenshot_studio, docs_design_utilities_screan_screan, docs_design_utilities_ray_so_ray_so [INFERRED 0.75]
- **Component libraries exposing MCP servers for AI agents** — docs_design_component_libraries_shadcn_labs_shadcn_labs, docs_design_component_libraries_shadcn_studio_shadcn_studio, docs_design_component_libraries_shadcnblocks_shadcnblocks, docs_design_component_libraries_shoogle_shoogle, docs_design_component_libraries_smooth_ui_smooth_ui, docs_design_component_libraries_spectrum_ui_spectrum_ui, concept_mcp [INFERRED 0.85]
- **Animated icon sets (Motion-based)** — docs_design_icons_lucide_animated_lucide_animated, docs_design_icons_heroicons_animated_heroicons_animated, concept_motion [INFERRED 0.85]
- **ASCII art generators** — docs_design_utilities_ascii_kracked_devs_ascii_kracked_devs, docs_design_utilities_ascii_studio_ascii_studio, docs_design_utilities_asciinator_asciinator, concept_ascii_art [INFERRED 0.85]
- **ascii.rest embedding entry points** — docs_design_component_libraries_ascii_rest_ascii_element, docs_design_component_libraries_ascii_rest_mount_api, docs_design_component_libraries_ascii_rest_frame_function [INFERRED 0.85]
- **Contrast and accessibility checking** — docs_design_color_apca_apca, docs_design_color_color_review_color_review, docs_design_color_huetone_huetone, concept_wcag [INFERRED 0.85]
- **Collaborative interface design canvases** — docs_design_interface_design_figma_figma, docs_design_interface_design_penpot_penpot, docs_design_interface_design_framer_framer [INFERRED 0.85]
- **Design-engineering resource directories** — docs_design_design_galleries_desengs_com_desengs_com, docs_design_design_galleries_designeng_tools_designeng_tools, docs_design_design_galleries_designengineer_tools_designengineer_tools, docs_design_design_galleries_greatstuff_greatstuff, docs_design_design_galleries_design_bookmark_design_bookmark, docs_design_design_galleries_isthereanytool_isthereanytool [INFERRED 0.85]
- **DESIGN.md generator/catalogue tools** — docs_design_agents_mcp_designmd_me_designmd_me, docs_design_agents_mcp_designmd_supply_designmd_supply, docs_design_agents_mcp_getdesign_md_getdesign_md, docs_design_agents_mcp_hyperbrowser_design_md_hyperbrowser_design_md, docs_design_agents_mcp_refero_refero [INFERRED 0.85]
- **Designer community showcase platforms** — docs_design_design_galleries_dribbble_dribbble, docs_design_design_galleries_behance_behance, docs_design_design_galleries_layers_layers, docs_design_design_galleries_collect_ui_collect_ui [INFERRED 0.85]
- **Git-based frontend hosting platforms with preview deployments** — docs_design_deploy_vercel_vercel, docs_design_deploy_netlify_netlify, docs_design_deploy_cloudflare_cloudflare [INFERRED 0.85]
- **GPU-accelerated terminal emulators** — docs_design_desktop_ghostty_ghostty, docs_design_desktop_warp_warp, docs_design_desktop_canario_canario, concept_gpu_acceleration [INFERRED 0.85]
- **Landing-page inspiration galleries** — docs_design_design_galleries_land_book_land_book, docs_design_design_galleries_landdding_landdding, docs_design_design_galleries_landing_love_landing_love, docs_design_design_galleries_lapa_ninja_lapa_ninja, docs_design_design_galleries_landingfolio_landingfolio, docs_design_design_galleries_cta_gallery_cta_gallery [INFERRED 0.85]
- **Mobile UI pattern libraries** — docs_design_design_galleries_mobbin_mobbin, docs_design_design_galleries_pttrns_pttrns, docs_design_design_galleries_ux_archive_ux_archive, docs_design_design_galleries_screenlane_screenlane, docs_design_design_galleries_scrnshts_scrnshts [INFERRED 0.85]
- **OKLCH-based palette and ramp tooling** — docs_design_color_oklch_oklch, docs_design_color_ramps_ramps, docs_design_color_huetone_huetone [INFERRED 0.85]
- **SaaS landing page galleries** — docs_design_design_galleries_saas_landing_page_saas_landing_page, docs_design_design_galleries_saasframe_saasframe, docs_design_design_galleries_saaspo_saaspo, docs_design_design_galleries_sections_wtf_sections_wtf, docs_design_design_galleries_supahero_supahero [INFERRED 0.85]
- **shadcn/ui registry ecosystem (React + Tailwind + shadcn CLI)** — docs_design_component_libraries_shadcn_ui_shadcn_ui, concept_shadcn_ui_registry, concept_radix_ui [INFERRED 0.85]
- **Web font sourcing (foundries and distributors)** — docs_design_type_fontshare_fontshare, docs_design_type_fontsource_fontsource, docs_design_type_klim_klim, docs_design_type_velvetyne_velvetyne [INFERRED 0.85]
- **WebGPU/WGSL shader tooling** — docs_design_shaders_shadercn_shadercn, docs_design_shaders_compute_toys_compute_toys, concept_webgpu, concept_wgsl, concept_typegpu [INFERRED 0.85]
- **Three.js + React Three Fiber + Drei web 3D stack** — docs_design_3d_three_js_three_js, docs_design_3d_react_three_fiber_react_three_fiber, docs_design_3d_drei_drei [INFERRED 0.95]

## Communities (24 total, 3 thin omitted)

### Community 0 - "React"
Cohesion: 0.08
Nodes (146): Alpine.js, Angular, Base UI, Canvas API, coss ui, CSS-in-JS, CSS Modules, Editframe (+138 more)

### Community 1 - "MCP (Model Context Protocol)"
Cohesion: 0.07
Nodes (96): Agent Skills (SKILL.md), ChatGPT Apps SDK, Claude Code, Cloudflare Workers, Cursor, DESIGN.md, Drizzle ORM, ESLint (+88 more)

### Community 2 - "Design playbook"
Cohesion: 0.08
Nodes (88): AI-generated imagery, App Store Optimization, Designeer, Framer, llms.txt, Reduced-motion preference, REST API, Webflow (+80 more)

### Community 3 - "Figma"
Cohesion: 0.09
Nodes (86): ASCII Art, Astro, AVIF, Dithering, Figma, Icon font / webfont, Ionic, JavaScript (+78 more)

### Community 4 - "TolongDesign docs"
Cohesion: 0.08
Nodes (51): Bun, CIELAB / LCH, CSS Custom Properties, Design tokens, Markdown, OKLab, OKLCH, WCAG (+43 more)

### Community 5 - "CSS"
Cohesion: 0.13
Nodes (56): Accessibility (a11y), ARIA, Bootstrap, Core Web Vitals, CSS, CUDA, Fluid Typography / clamp(), Framer Motion / Motion (+48 more)

### Community 6 - "WebGL"
Cohesion: 0.13
Nodes (51): THREE.AnimationAction, THREE.AnimationClip, THREE.AnimationMixer, Automatic character rigging, Canvas, CC0 public domain, Draco compression, Avatar facial expressions (+43 more)

### Community 7 - "TypeScript"
Cohesion: 0.12
Nodes (44): C, CLI, Electron, FFmpeg, Firefox / Gecko, GPU acceleration, HTML Canvas, macOS (+36 more)

### Community 8 - "Motion"
Cohesion: 0.18
Nodes (24): AI motion-graphics visual tells, Android, cubic-bezier easing, Flutter, iOS, Motion render-stack comparison, Prompt Motion Customize tool, React Native (+16 more)

### Community 9 - "lib.ts"
Cohesion: 0.10
Nodes (20): errors, quiet, { tools }, warnings, blocked, broken, files, queue (+12 more)

### Community 10 - "build-index.ts"
Cohesion: 0.18
Nodes (12): blurbs, cell(), count(), entries, Entry, overview, PAYWALL_LABEL, peopleMd (+4 more)

### Community 11 - "package.json"
Cohesion: 0.10
Nodes (20): description, devDependencies, prettier, @types/bun, yaml, name, private, scripts (+12 more)

### Community 12 - "design-lib.ts"
Cohesion: 0.12
Nodes (30): Task 2: Implement deterministic retrieval and context, CLI contract, CatalogueEntry, compareText(), ContextPack, ContextResource, DataError, excerptFor() (+22 more)

### Community 13 - "find.ts"
Cohesion: 0.33
Nodes (8): args, flag(), has(), hits, lower(), text, { tools }, valued

### Community 14 - "design.ts"
Cohesion: 0.25
Nodes (16): Command, hasFlag(), UsageError, parseCommand(), parseContext(), ParsedFlags, parseFlags(), parseSearch() (+8 more)

### Community 15 - ".prettierrc.json"
Cohesion: 0.29
Nodes (6): overrides, printWidth, $schema, semi, singleQuote, trailingComma

### Community 19 - "File responsibilities"
Cohesion: 0.12
Nodes (15): File responsibilities, Global constraints, Project design workflow implementation plan, Review focus, Task 1: Establish the failing CLI contract, Task 3: Independently exercise safety and compatibility, Task 4: Write the agent workflow and scenario, Task 5: Register the companion resource (+7 more)

### Community 20 - "design-cli.test.ts"
Cohesion: 0.15
Nodes (10): decode(), entrypoint, runCli(), sourceRoot, temporaryCwds, decode(), entrypoint, root (+2 more)

### Community 21 - "design-lib.test.ts"
Cohesion: 0.21
Nodes (14): buildContext(), resolveResource(), createFixtureRoot(), defaultDocPath(), fixtureMetadata(), FixtureRoot, fixtureRoots, FixtureTool (+6 more)

### Community 22 - "Cloudflare"
Cohesion: 0.38
Nodes (11): CI/CD, Docker, Edge computing, Go, Serverless, Cloudflare, Fly.io, Netlify (+3 more)

### Community 23 - "Image-to-code skill"
Cohesion: 0.20
Nodes (10): Agent notes, Alternatives in this repo, At a glance, Examples, How to use, Image-to-code skill, Paywall and pricing, Sources (+2 more)

## Knowledge Gaps
- **176 isolated node(s):** `$schema`, `printWidth`, `singleQuote`, `semi`, `trailingComma` (+171 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 198 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `React` connect `React` to `MCP (Model Context Protocol)`, `Design playbook`, `Figma`, `TolongDesign docs`, `CSS`, `WebGL`, `TypeScript`, `Motion`, `Cloudflare`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Why does `Design playbook` connect `Design playbook` to `React`, `MCP (Model Context Protocol)`, `Figma`, `TolongDesign docs`, `CSS`, `WebGL`, `TypeScript`, `Motion`, `Cloudflare`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Why does `MCP (Model Context Protocol)` connect `MCP (Model Context Protocol)` to `React`, `Design playbook`, `Figma`, `TolongDesign docs`, `CSS`, `Motion`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `MCP (Model Context Protocol)` (e.g. with `llms.txt` and `Agent Skills (SKILL.md)`) actually correct?**
  _`MCP (Model Context Protocol)` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `printWidth`, `singleQuote` to the rest of the system?**
  _176 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `React` be split into smaller, more focused modules?**
  _Cohesion score 0.07671232876712329 - nodes in this community are weakly interconnected._
- **Should `MCP (Model Context Protocol)` be split into smaller, more focused modules?**
  _Cohesion score 0.0665807560137457 - nodes in this community are weakly interconnected._