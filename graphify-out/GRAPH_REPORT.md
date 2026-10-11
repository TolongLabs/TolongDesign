# Graph Report - TolongDesign  (2026-10-11)

## Corpus Check
- 10 files · ~370,937 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 736 nodes · 3335 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 66 edges (avg confidence: 0.76)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- React component libraries
- Agents, MCP and dev tools
- Design galleries
- Icons, Figma and utilities
- Playbook and repo docs
- Reading and web fundamentals
- 3D, WebGL and characters
- Video and desktop capture
- Motion tools
- Doc checker library
- Index builder
- Package manifest
- Link checker
- Find script
- npm scripts
- Prettier config
- Radix

## God Nodes (most connected - your core abstractions)
1. `React` - 201 edges
2. `MCP (Model Context Protocol)` - 129 edges
3. `Tailwind CSS` - 121 edges
4. `Component Libraries Section Index` - 112 edges
5. `Design playbook` - 90 edges
6. `Design Galleries section README` - 80 edges
7. `shadcn/ui` - 70 edges
8. `TypeScript` - 54 edges
9. `Next.js` - 51 edges
10. `Designeer` - 50 edges

## Surprising Connections (you probably didn't know these)
- `llms.txt` --semantically_similar_to--> `MCP (Model Context Protocol)`  [INFERRED] [semantically similar]
  docs/design/component-libraries/fancy-components.md → AGENTS.md
- `MCP (Model Context Protocol)` --semantically_similar_to--> `Agent Skills (SKILL.md)`  [INFERRED] [semantically similar]
  AGENTS.md → .github/CONTRIBUTING.md
- `Flowbite` --conceptually_related_to--> `MCP (Model Context Protocol)`  [INFERRED]
  docs/design/component-libraries/flowbite.md → AGENTS.md
- `FlyonUI` --conceptually_related_to--> `MCP (Model Context Protocol)`  [INFERRED]
  docs/design/component-libraries/flyonui.md → AGENTS.md
- `GetLayers` --conceptually_related_to--> `MCP (Model Context Protocol)`  [INFERRED]
  docs/design/component-libraries/getlayers.md → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **AI coding agents and editors** — docs_design_development_claude_code_claude_code, docs_design_development_cursor_cursor, docs_design_development_zed_zed [EXTRACTED 1.00]
- **ASCII art tools in the catalogue** — docs_design_component_libraries_ascii_rest_ascii_rest, docs_design_utilities_asciinator_asciinator, docs_design_utilities_ascii_studio_ascii_studio, docs_design_utilities_ascii_kracked_devs_ascii_kracked_devs [EXTRACTED 1.00]
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
- **VRM avatar authoring and animation pipeline** — docs_design_3d_vroid_studio_vroid_studio, concept_vrm, docs_design_3d_three_vrm_three_vrm, docs_design_3d_mixamo_mixamo, concept_retargeting [EXTRACTED 1.00]
- **Web design workflow stages** — concept_collect_references, concept_lock_visual_system, concept_pick_components, concept_icons_imagery_motion_3d, concept_build_with_agent, concept_ship_website [EXTRACTED 1.00]

## Communities (19 total, 3 thin omitted)

### Community 0 - "React component libraries"
Cohesion: 0.07
Nodes (152): Alpine.js, Angular, Astro, Base UI, coss ui, CSS-in-JS, CSS Modules, Editframe (+144 more)

### Community 1 - "Agents, MCP and dev tools"
Cohesion: 0.07
Nodes (102): Agent Skills (SKILL.md), ChatGPT Apps SDK, Claude Code, Cloudflare Workers, Cursor, DESIGN.md, Drizzle ORM, ESLint (+94 more)

### Community 2 - "Design galleries"
Cohesion: 0.10
Nodes (85): AI-generated imagery, App Store Optimization, Designeer, Framer, llms.txt, REST API, Webflow, 60fps (+77 more)

### Community 3 - "Icons, Figma and utilities"
Cohesion: 0.10
Nodes (80): ASCII Art, AVIF, Canvas API, Dithering, Figma, Icon font / webfont, Ionic, Lottie (+72 more)

### Community 4 - "Playbook and repo docs"
Cohesion: 0.07
Nodes (61): Atmospheric 3D character scene, Build with an agent, Bun, CI/CD, CIELAB / LCH, Collect references, CSS Custom Properties, Default design stack (+53 more)

### Community 5 - "Reading and web fundamentals"
Cohesion: 0.12
Nodes (58): Accessibility (a11y), ARIA, Bootstrap, Core Web Vitals, CSS, CUDA, Fluid Typography / clamp(), Framer Motion / Motion (+50 more)

### Community 6 - "3D, WebGL and characters"
Cohesion: 0.13
Nodes (52): THREE.AnimationAction, THREE.AnimationClip, THREE.AnimationMixer, Automatic character rigging, Canvas, CC0 public domain, Draco compression, Avatar facial expressions (+44 more)

### Community 7 - "Video and desktop capture"
Cohesion: 0.14
Nodes (39): C, CLI, Electron, FFmpeg, Firefox / Gecko, GPU acceleration, HTML Canvas, macOS (+31 more)

### Community 8 - "Motion tools"
Cohesion: 0.17
Nodes (27): AI motion-graphics visual tells, Android, cubic-bezier easing, Flutter, iOS, Motion prompt iteration, Motion render-stack comparison, Copy and adapt a proven motion prompt (+19 more)

### Community 9 - "Doc checker library"
Cohesion: 0.17
Nodes (14): ref_node_fs, ref_node_path, errors, quiet, { tools }, warnings, Catalogue, CatalogueTool (+6 more)

### Community 10 - "Index builder"
Cohesion: 0.18
Nodes (12): blurbs, cell(), count(), entries, Entry, overview, PAYWALL_LABEL, peopleMd (+4 more)

### Community 11 - "Package manifest"
Cohesion: 0.17
Nodes (11): description, devDependencies, prettier, @types/bun, yaml, name, private, type (+3 more)

### Community 12 - "Link checker"
Cohesion: 0.18
Nodes (9): ref_bun, blocked, broken, files, queue, status, urls, where (+1 more)

### Community 13 - "Find script"
Cohesion: 0.33
Nodes (8): args, flag(), has(), hits, lower(), text, { tools }, valued

### Community 14 - "npm scripts"
Cohesion: 0.29
Nodes (7): scripts, check, find, format, format:check, index, links

### Community 15 - "Prettier config"
Cohesion: 0.29
Nodes (6): overrides, printWidth, $schema, semi, singleQuote, trailingComma

## Knowledge Gaps
- **121 isolated node(s):** `Catalogue`, `CatalogueTool`, `Doc`, `Person`, `Entry` (+116 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 139 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `React` connect `React component libraries` to `Agents, MCP and dev tools`, `Design galleries`, `Icons, Figma and utilities`, `Playbook and repo docs`, `Reading and web fundamentals`, `3D, WebGL and characters`, `Video and desktop capture`, `Motion tools`?**
  _High betweenness centrality (0.236) - this node is a cross-community bridge._
- **Why does `MCP (Model Context Protocol)` connect `Agents, MCP and dev tools` to `React component libraries`, `Design galleries`, `Icons, Figma and utilities`, `Playbook and repo docs`, `Reading and web fundamentals`, `Motion tools`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `Design playbook` connect `Playbook and repo docs` to `React component libraries`, `Agents, MCP and dev tools`, `Design galleries`, `Icons, Figma and utilities`, `Reading and web fundamentals`, `3D, WebGL and characters`, `Video and desktop capture`, `Motion tools`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `MCP (Model Context Protocol)` (e.g. with `llms.txt` and `Agent Skills (SKILL.md)`) actually correct?**
  _`MCP (Model Context Protocol)` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Catalogue`, `CatalogueTool`, `Doc` to the rest of the system?**
  _121 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `React component libraries` be split into smaller, more focused modules?**
  _Cohesion score 0.07310909724642732 - nodes in this community are weakly interconnected._
- **Should `Agents, MCP and dev tools` be split into smaller, more focused modules?**
  _Cohesion score 0.0656183265385362 - nodes in this community are weakly interconnected._