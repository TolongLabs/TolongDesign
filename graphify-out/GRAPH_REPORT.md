# Graph Report - TolongDesign  (2026-10-07)

## Corpus Check
- 459 files · ~365,700 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 3)

## Summary
- 693 nodes · 3153 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 65 edges (avg confidence: 0.76)
- Token cost: 659,151 input · 0 output

## Community Hubs (Navigation)
- Component Libraries & Frameworks
- Design Galleries & Inspiration
- Coding Agents & MCP
- Icons, SVG & Asset Utilities
- Dev Tooling & Deploy
- Web Standards, Type & Reading
- 3D, WebGL & Shaders
- Video & Capture Tools
- Motion & Animation
- Doc Validation Script
- Index Builder Script
- Package Manifest
- Color Science & Tools
- Link Checker Script
- Catalogue Search CLI
- npm Scripts
- Prettier Config

## God Nodes (most connected - your core abstractions)
1. `React` - 202 edges
2. `MCP (Model Context Protocol)` - 131 edges
3. `Tailwind CSS` - 122 edges
4. `Component Libraries section index` - 109 edges
5. `Design playbook` - 91 edges
6. `Design Galleries section README` - 78 edges
7. `shadcn/ui` - 70 edges
8. `TypeScript` - 54 edges
9. `Next.js` - 52 edges
10. `Designeer` - 51 edges

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
- **DESIGN.md generator/catalogue tools** — docs_design_agents_mcp_designmd_me_designmd_me, docs_design_agents_mcp_designmd_supply_designmd_supply, docs_design_agents_mcp_getdesign_md_getdesign_md, docs_design_agents_mcp_hyperbrowser_design_md_hyperbrowser_design_md, docs_design_agents_mcp_refero_refero [INFERRED 0.85]
- **Three.js + React Three Fiber + Drei web 3D stack** — docs_design_3d_three_js_three_js, docs_design_3d_react_three_fiber_react_three_fiber, docs_design_3d_drei_drei [INFERRED 0.95]
- **Multi-agent coding orchestrators** — docs_design_agents_mcp_ghostex_ghostex, docs_design_agents_mcp_herdr_herdr, docs_design_agents_mcp_fx_fx, docs_design_agents_mcp_dray_dray [INFERRED 0.75]
- **OKLCH-based palette and ramp tooling** — docs_design_color_oklch_oklch, docs_design_color_ramps_ramps, docs_design_color_huetone_huetone, concept_oklch [INFERRED 0.85]
- **Contrast and accessibility checking** — docs_design_color_apca_apca, docs_design_color_color_review_color_review, docs_design_color_huetone_huetone, concept_wcag [INFERRED 0.85]
- **shadcn registry ecosystem** — docs_design_component_libraries_21st_dev_21st_dev, docs_design_component_libraries_8bitcn_8bitcn, docs_design_component_libraries_blocks_so_blocks_so, docs_design_component_libraries_base_cn_base_cn, concept_shadcn_ui [INFERRED 0.85]
- **Headless accessible UI primitives** — concept_radix_ui, concept_base_ui, concept_react_aria, docs_design_component_libraries_headless_ui_headless_ui [INFERRED 0.75]
- **shadcn/ui registry ecosystem (React + Tailwind + shadcn CLI)** — docs_design_component_libraries_shadcn_ui_shadcn_ui, concept_shadcn_ui_registry, concept_tailwind_css, concept_react, concept_radix_ui [INFERRED 0.85]
- **Git-based frontend hosting platforms with preview deployments** — docs_design_deploy_vercel_vercel, docs_design_deploy_netlify_netlify, docs_design_deploy_cloudflare_cloudflare [INFERRED 0.85]
- **Component libraries exposing MCP servers for AI agents** — docs_design_component_libraries_shadcn_labs_shadcn_labs, docs_design_component_libraries_shadcn_studio_shadcn_studio, docs_design_component_libraries_shadcnblocks_shadcnblocks, docs_design_component_libraries_shoogle_shoogle, docs_design_component_libraries_smooth_ui_smooth_ui, docs_design_component_libraries_spectrum_ui_spectrum_ui, concept_mcp [INFERRED 0.85]
- **Design-engineering resource directories** — docs_design_design_galleries_desengs_com_desengs_com, docs_design_design_galleries_designeng_tools_designeng_tools, docs_design_design_galleries_designengineer_tools_designengineer_tools, docs_design_design_galleries_greatstuff_greatstuff, docs_design_design_galleries_design_bookmark_design_bookmark, docs_design_design_galleries_isthereanytool_isthereanytool [INFERRED 0.85]
- **Landing-page inspiration galleries** — docs_design_design_galleries_land_book_land_book, docs_design_design_galleries_landdding_landdding, docs_design_design_galleries_landing_love_landing_love, docs_design_design_galleries_lapa_ninja_lapa_ninja, docs_design_design_galleries_landingfolio_landingfolio, docs_design_design_galleries_cta_gallery_cta_gallery [INFERRED 0.85]
- **Designer community showcase platforms** — docs_design_design_galleries_dribbble_dribbble, docs_design_design_galleries_behance_behance, docs_design_design_galleries_layers_layers, docs_design_design_galleries_collect_ui_collect_ui [INFERRED 0.85]
- **GPU-accelerated terminal emulators** — docs_design_desktop_ghostty_ghostty, docs_design_desktop_warp_warp, docs_design_desktop_canario_canario, concept_gpu_acceleration [INFERRED 0.85]
- **SaaS landing page galleries** — docs_design_design_galleries_saas_landing_page_saas_landing_page, docs_design_design_galleries_saasframe_saasframe, docs_design_design_galleries_saaspo_saaspo, docs_design_design_galleries_sections_wtf_sections_wtf, docs_design_design_galleries_supahero_supahero [INFERRED 0.85]
- **Mobile UI pattern libraries** — docs_design_design_galleries_mobbin_mobbin, docs_design_design_galleries_pttrns_pttrns, docs_design_design_galleries_ux_archive_ux_archive, docs_design_design_galleries_screenlane_screenlane, docs_design_design_galleries_scrnshts_scrnshts [INFERRED 0.85]
- **AI coding agents and editors** — docs_design_development_claude_code_claude_code, docs_design_development_cursor_cursor, docs_design_development_zed_zed [EXTRACTED 1.00]
- **Animated icon sets (Motion-based)** — docs_design_icons_lucide_animated_lucide_animated, docs_design_icons_heroicons_animated_heroicons_animated, concept_motion [INFERRED 0.85]
- **Privacy analytics and logging tools** — docs_design_development_umami_umami, docs_design_development_tracwell_tracwell, docs_design_development_evlog_evlog [EXTRACTED 1.00]
- **JavaScript animation runtimes** — docs_design_motion_gsap_gsap, docs_design_motion_motion_motion, docs_design_motion_theatre_js_theatre_js [INFERRED 0.85]
- **Designer-authored vector animation runtimes** — docs_design_motion_lottie_lottie, docs_design_motion_rive_rive, concept_canvas [INFERRED 0.75]
- **Collaborative interface design canvases** — docs_design_interface_design_figma_figma, docs_design_interface_design_penpot_penpot, docs_design_interface_design_framer_framer [INFERRED 0.85]
- **WebGPU/WGSL shader tooling** — docs_design_shaders_shadercn_shadercn, docs_design_shaders_compute_toys_compute_toys, concept_webgpu, concept_wgsl, concept_typegpu [INFERRED 0.85]
- **Web font sourcing (foundries and distributors)** — docs_design_type_fontshare_fontshare, docs_design_type_fontsource_fontsource, docs_design_type_klim_klim, docs_design_type_velvetyne_velvetyne [INFERRED 0.85]
- **ASCII art generators** — docs_design_utilities_ascii_kracked_devs_ascii_kracked_devs, docs_design_utilities_ascii_studio_ascii_studio, docs_design_utilities_asciinator_asciinator, concept_ascii_art [INFERRED 0.85]
- **Screenshot / mockup beautifier tools** — docs_design_utilities_postspark_postspark, docs_design_utilities_screenshot_studio_screenshot_studio, docs_design_utilities_screan_screan, docs_design_utilities_ray_so_ray_so [INFERRED 0.75]
- **Screen recording with cursor/zoom polish** — docs_design_video_capture_screen_studio_screen_studio, docs_design_video_capture_cursorful_cursorful, docs_design_video_capture_recordly_recordly [INFERRED 0.75]

## Communities (19 total, 2 thin omitted)

### Community 0 - "Component Libraries & Frameworks"
Cohesion: 0.08
Nodes (143): Alpine.js, Angular, Base UI, coss ui, CSS-in-JS, CSS Modules, Editframe, Forme (+135 more)

### Community 1 - "Design Galleries & Inspiration"
Cohesion: 0.08
Nodes (89): AI-generated imagery, App Store Optimization, Designeer, Flutter, Framer, llms.txt, Radix, REST API (+81 more)

### Community 2 - "Coding Agents & MCP"
Cohesion: 0.09
Nodes (78): Agent Skills (SKILL.md), Bun, ChatGPT Apps SDK, Claude Code, Cursor, DESIGN.md, Design tokens, GPUI (+70 more)

### Community 3 - "Icons, SVG & Asset Utilities"
Cohesion: 0.11
Nodes (75): ASCII Art, AVIF, Dithering, Figma, HTML Canvas, Icon font / webfont, Ionic, Lottie (+67 more)

### Community 4 - "Dev Tooling & Deploy"
Cohesion: 0.06
Nodes (75): Astro, CI/CD, Cloudflare Workers, Docker, Drizzle ORM, Edge computing, ESLint, Firefox / Gecko (+67 more)

### Community 5 - "Web Standards, Type & Reading"
Cohesion: 0.12
Nodes (58): Accessibility (a11y), ARIA, Bootstrap, Core Web Vitals, CSS, CUDA, Fluid Typography / clamp(), Framer Motion / Motion (+50 more)

### Community 6 - "3D, WebGL & Shaders"
Cohesion: 0.21
Nodes (36): Canvas, CC0 public domain, Draco compression, GLSL, glTF, glTF Transform, HDRI, Mesh Gradients (+28 more)

### Community 7 - "Video & Capture Tools"
Cohesion: 0.18
Nodes (25): C, CLI, Electron, FFmpeg, Markdown, Remotion, Swift, SwiftUI (+17 more)

### Community 8 - "Motion & Animation"
Cohesion: 0.21
Nodes (24): Android, Canvas API, cubic-bezier easing, iOS, Preact, React Native, Shaders, Solid (+16 more)

### Community 9 - "Doc Validation Script"
Cohesion: 0.17
Nodes (14): ref_node_fs, ref_node_path, errors, quiet, { tools }, warnings, Catalogue, CatalogueTool (+6 more)

### Community 10 - "Index Builder Script"
Cohesion: 0.18
Nodes (12): blurbs, cell(), count(), entries, Entry, overview, PAYWALL_LABEL, peopleMd (+4 more)

### Community 11 - "Package Manifest"
Cohesion: 0.17
Nodes (11): description, devDependencies, prettier, @types/bun, yaml, name, private, type (+3 more)

### Community 12 - "Color Science & Tools"
Cohesion: 0.36
Nodes (11): CIELAB / LCH, CSS Custom Properties, OKLab, OKLCH, WCAG, APCA, Color.review, Huetone (+3 more)

### Community 13 - "Link Checker Script"
Cohesion: 0.18
Nodes (9): ref_bun, blocked, broken, files, queue, status, urls, where (+1 more)

### Community 14 - "Catalogue Search CLI"
Cohesion: 0.33
Nodes (8): args, flag(), has(), hits, lower(), text, { tools }, valued

### Community 15 - "npm Scripts"
Cohesion: 0.29
Nodes (7): scripts, check, find, format, format:check, index, links

### Community 16 - "Prettier Config"
Cohesion: 0.29
Nodes (6): overrides, printWidth, $schema, semi, singleQuote, trailingComma

## Knowledge Gaps
- **107 isolated node(s):** `$schema`, `printWidth`, `singleQuote`, `semi`, `trailingComma` (+102 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 112 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `React` connect `Component Libraries & Frameworks` to `Design Galleries & Inspiration`, `Coding Agents & MCP`, `Icons, SVG & Asset Utilities`, `Dev Tooling & Deploy`, `Web Standards, Type & Reading`, `3D, WebGL & Shaders`, `Video & Capture Tools`, `Motion & Animation`?**
  _High betweenness centrality (0.255) - this node is a cross-community bridge._
- **Why does `MCP (Model Context Protocol)` connect `Coding Agents & MCP` to `Component Libraries & Frameworks`, `Design Galleries & Inspiration`, `Icons, SVG & Asset Utilities`, `Dev Tooling & Deploy`, `Web Standards, Type & Reading`, `Video & Capture Tools`, `Motion & Animation`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Why does `Design playbook` connect `Design Galleries & Inspiration` to `Component Libraries & Frameworks`, `Coding Agents & MCP`, `Icons, SVG & Asset Utilities`, `Dev Tooling & Deploy`, `Web Standards, Type & Reading`, `3D, WebGL & Shaders`, `Video & Capture Tools`, `Motion & Animation`, `Color Science & Tools`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `MCP (Model Context Protocol)` (e.g. with `llms.txt` and `Agent Skills (SKILL.md)`) actually correct?**
  _`MCP (Model Context Protocol)` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `printWidth`, `singleQuote` to the rest of the system?**
  _107 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Component Libraries & Frameworks` be split into smaller, more focused modules?**
  _Cohesion score 0.07820348665419088 - nodes in this community are weakly interconnected._
- **Should `Design Galleries & Inspiration` be split into smaller, more focused modules?**
  _Cohesion score 0.0822267620020429 - nodes in this community are weakly interconnected._