# Graph Report - integration  (2026-10-15)

## Corpus Check
- 527 files · ~454,046 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1996 nodes · 6911 edges · 99 communities (87 shown, 12 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 204 edges (avg confidence: 0.83)
- Token cost: 70,387 input · 12,855 output

## Community Hubs (Navigation)
- Design Galleries Resources
- Component Libraries Resources
- 3D Resources
- Retrieval Metadata
- Retrieval Metadata
- Design Galleries Resources
- REA Reverse Engineering
- Development Resources
- Comics Resources
- Reading Resources
- Release Packaging Script
- Utilities Resources
- Retrieval Metadata
- CLI Integration Tests
- Icons Resources
- Video Capture Resources
- Design CLI Core
- CLI Integration Tests
- Component Libraries Resources
- Component Libraries Resources
- Catalogue Tooling
- Component Libraries Resources
- Component Libraries Resources
- Private Release Pipeline
- Package Manifest
- Component Libraries Resources
- Type Resources
- Design Galleries Resources
- Release Info Tests
- Release Tests
- Retrieval Metadata
- Catalogue Tooling
- Catalogue Tooling
- Private Release Pipeline
- 3D Resources
- Agents Mcp Resources
- Agents Mcp Resources
- Comics Resources
- Tool Doc Template
- Link Checker Script
- Catalogue Tooling
- Catalogue Tooling
- Agents Mcp Resources
- Comics Resources
- Retrieval Metadata
- CLI Release Plan
- Design Workflow Plan
- Catalogue Tooling
- Catalogue Tooling
- Agents Mcp Resources
- Design Galleries Resources
- Private Release Pipeline
- Interface Design Resources
- Retrieval Metadata
- Deploy Resources
- Color Resources
- Retrieval Metadata
- Release Architecture Spec
- Agents Mcp Resources
- Retrieval Metadata
- Private Release Pipeline
- Design Galleries Resources
- Deploy Resources
- Agents Mcp Resources
- Design CLI Spec
- Interface Design Resources
- Component Libraries Resources
- Design Galleries Resources
- Workflow Spec Docs
- Retrieval Metadata
- Prettier Config
- Catalogue Tooling
- Whiteboard Resources
- Component Libraries Resources
- Private Release Pipeline
- Interface Design Resources
- Component Libraries Resources
- Retrieval Metadata
- Development Resources
- Component Libraries Resources
- Comics Resources
- Retrieval Metadata
- Comics Resources
- Catalogue Tooling
- Agents Mcp Resources
- Agents Mcp Resources
- Agents Mcp Resources
- Reading Resources
- Comics Resources
- Catalogue Tooling
- Design Galleries Resources
- Reading Resources
- Radix
- Catalogue Tooling
- Catalogue Tooling
- Catalogue Tooling
- Catalogue Tooling

## God Nodes (most connected - your core abstractions)
1. `Generated resource index` - 441 edges
2. `active status` - 423 edges
3. `web-ui surface` - 225 edges
4. `React` - 198 edges
5. `react stack` - 174 edges
6. `reference mode` - 167 edges
7. `reference surface` - 138 edges
8. `Tailwind CSS` - 120 edges
9. `Component Libraries Section Index` - 112 edges
10. `shadcn/ui` - 91 edges

## Surprising Connections (you probably didn't know these)
- `One-Doc-Per-Entry File Boundary Rule` --semantically_similar_to--> `Payload Allowlist and Exclusions for the Release Tarball`  [INFERRED] [semantically similar]
  templates/worker-brief.md → docs/superpowers/specs/2026-10-11-private-cli-release-design.md
- `Task 2: Implement deterministic retrieval and context` --references--> `UsageError`  [INFERRED]
  docs/superpowers/plans/2026-10-11-project-design-workflow.md → scripts/design-lib.ts
- `CLI contract` --references--> `buildContext()`  [INFERRED]
  docs/superpowers/specs/2026-10-11-project-design-workflow-design.md → scripts/design-lib.ts
- `CLI contract` --references--> `searchResources()`  [INFERRED]
  docs/superpowers/specs/2026-10-11-project-design-workflow-design.md → scripts/design-lib.ts
- `CLI contract` --references--> `UsageError`  [INFERRED]
  docs/superpowers/specs/2026-10-11-project-design-workflow-design.md → scripts/design-lib.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **VRM avatar authoring and animation pipeline** — docs_design_3d_vroid_studio_vroid_studio, concept_vrm, docs_design_3d_three_vrm_three_vrm, docs_design_3d_mixamo_mixamo, concept_retargeting [EXTRACTED 1.00]
- **AI coding agents and editors** — docs_design_development_claude_code_claude_code, docs_design_development_cursor_cursor, docs_design_development_zed_zed [EXTRACTED 1.00]
- **ASCII art tools in the catalogue** — docs_design_component_libraries_ascii_rest_ascii_rest, docs_design_utilities_asciinator_asciinator, docs_design_utilities_ascii_studio_ascii_studio, docs_design_utilities_ascii_kracked_devs_ascii_kracked_devs [EXTRACTED 1.00]
- **Generated section index tables (frontmatter is the single source of truth)** — docs_design_design_galleries_readme_design_galleries_index, docs_design_design_galleries_readme_generated_index, docs_design_interface_design_readme_interface_design_index, docs_design_motion_readme_generated_index, docs_design_motion_readme_motion_index [EXTRACTED 1.00]
- **MIYADAIKU manga tool chain (tabbed sibling iframes sharing state by postMessage)** — docs_design_comics_namegacha_name_gacha, docs_design_comics_namegacha_pose_gacha, docs_design_comics_namegacha_iframe_sibling_mesh, docs_design_comics_rokehan_location_scout, docs_design_comics_rokehan_background_gacha, docs_design_comics_rokehan_miyadaiku [EXTRACTED 1.00]
- **Web design workflow stages** — concept_collect_references, concept_lock_visual_system, concept_pick_components, concept_icons_imagery_motion_3d, concept_build_with_agent, concept_ship_website [EXTRACTED 1.00]
- **Privacy analytics and logging tools** — docs_design_development_umami_umami, docs_design_development_tracwell_tracwell, docs_design_development_evlog_evlog [EXTRACTED 1.00]
- **Private Release Packaging, Independent Verification and Deployment Flow** — docs_superpowers_plans_2026_10_11_private_cli_release_task1_diagnostics, docs_superpowers_plans_2026_10_11_private_cli_release_task2_archive, docs_superpowers_plans_2026_10_11_private_cli_release_task3_clean_install_checks, docs_superpowers_plans_2026_10_11_private_cli_release_task5_deploy [EXTRACTED 1.00]
- **Five-stage project design workflow** — docs_workflow_brief_and_constraints, docs_workflow_reference_evidence, docs_workflow_visual_direction_and_behavior, docs_workflow_implementation_context, docs_workflow_build_and_rendered_verification, docs_workflow_agent_owns_design_decisions [EXTRACTED 1.00]
- **Declarative R3F Scene Runtime** — docs_design_3d_react_three_fiber_react_three_fiber, docs_design_3d_react_three_fiber_canvas, docs_design_3d_react_three_fiber_useframe, docs_design_3d_react_three_fiber_usethree, docs_design_3d_react_three_fiber_demand_frameloop [EXTRACTED 1.00]
- **Tool Doc Authoring Contract (worker brief plus template)** — templates_worker_brief_worker_brief_template, templates_worker_brief_batch_file_contract, templates_worker_brief_research_requirements, templates_worker_brief_output_format_rules, templates_tool_doc_tool_doc_template, templates_tool_doc_frontmatter_keys, templates_tool_doc_required_h2_sections [EXTRACTED 1.00]
- **Tool Doc Contract Flow (rule to template to worker)** — integration_agents_tool_doc_contract, integration_templates_tool_doc_contract_template, integration_templates_worker_brief_work_order, integration_github_contributing_two_rules [EXTRACTED 1.00]
- **ICQR Magic Tree evidence chain (method to limits)** — docs_research_tree_icqr_study, docs_research_tree_icqr_reference, docs_research_tree_icqr_study_rea_browser_inspection, docs_research_tree_icqr_study_evidence_manifest, docs_research_tree_icqr_study_observed_runtime_states, docs_research_tree_icqr_study_gpu_unavailable_limit, docs_research_tree_icqr_study_capture_coverage_limits [EXTRACTED 1.00]
- **Multi-agent coding orchestrators** — docs_design_agents_mcp_ghostex_ghostex, docs_design_agents_mcp_herdr_herdr, docs_design_agents_mcp_fx_fx, docs_design_agents_mcp_dray_dray [INFERRED 0.75]
- **Deterministic seeded procedural generation shared across the suite** — docs_design_comics_komawari_seeded_prng_mulberry32_fnv1a, docs_design_comics_fukidashi_seeded_prng_outline, docs_design_comics_haikeigacha_procedural_room_grid, docs_design_comics_koukasen_five_generator_groups [INFERRED 0.75]
- **Graphics capability limitation and fallback practice** — docs_design_shaders_shaders_no_webgl_fallback, docs_design_shaders_shaders_ssr_client_boundary, docs_research_tree_icqr_study_gpu_unavailable_limit, docs_scenarios_dictation_landing_rendered_design_rubric [INFERRED 0.75]
- **Headless accessible UI primitives** — concept_radix_ui, concept_react_aria, docs_design_component_libraries_headless_ui_headless_ui [INFERRED 0.75]
- **Screen recording with cursor/zoom polish** — docs_design_video_capture_screen_studio_screen_studio, docs_design_video_capture_cursorful_cursorful, docs_design_video_capture_recordly_recordly [INFERRED 0.75]
- **Screenshot / mockup beautifier tools** — docs_design_utilities_postspark_postspark, docs_design_utilities_screenshot_studio_screenshot_studio, docs_design_utilities_screan_screan, docs_design_utilities_ray_so_ray_so [INFERRED 0.75]
- **Agent Design Evidence Pipeline (retrieval to rendered verification)** — docs_superpowers_specs_2026_10_11_project_design_workflow_design_readonly_cli_and_skill_approach, docs_superpowers_specs_2026_10_11_project_design_workflow_design_design_lib_interface, docs_superpowers_specs_2026_10_11_project_design_workflow_design_context_pack_provenance, docs_superpowers_specs_2026_10_11_project_design_workflow_design_five_stage_workflow, docs_superpowers_specs_2026_10_11_project_design_workflow_design_rendered_verification [INFERRED 0.85]
- **Component libraries exposing MCP servers for AI agents** — docs_design_component_libraries_shadcn_labs_shadcn_labs, docs_design_component_libraries_shadcn_studio_shadcn_studio, docs_design_component_libraries_shadcnblocks_shadcnblocks, docs_design_component_libraries_shoogle_shoogle, docs_design_component_libraries_smooth_ui_smooth_ui, docs_design_component_libraries_spectrum_ui_spectrum_ui [INFERRED 0.85]
- **Animated icon sets (Motion-based)** — docs_design_icons_lucide_animated_lucide_animated, docs_design_icons_heroicons_animated_heroicons_animated, concept_motion [INFERRED 0.85]
- **ASCII art generators** — docs_design_utilities_ascii_kracked_devs_ascii_kracked_devs, docs_design_utilities_ascii_studio_ascii_studio, docs_design_utilities_asciinator_asciinator, concept_ascii_art [INFERRED 0.85]
- **ascii.rest embedding entry points** — docs_design_component_libraries_ascii_rest_ascii_element, docs_design_component_libraries_ascii_rest_mount_api, docs_design_component_libraries_ascii_rest_frame_function [INFERRED 0.85]
- **Contrast and accessibility checking** — docs_design_color_apca_apca, docs_design_color_color_review_color_review, docs_design_color_huetone_huetone, concept_wcag [INFERRED 0.85]
- **Design-engineering resource directories** — docs_design_design_galleries_desengs_com_desengs_com, docs_design_design_galleries_designeng_tools_designeng_tools, docs_design_design_galleries_designengineer_tools_designengineer_tools, docs_design_design_galleries_greatstuff_greatstuff, docs_design_design_galleries_design_bookmark_design_bookmark, docs_design_design_galleries_isthereanytool_isthereanytool [INFERRED 0.85]
- **DESIGN.md generator/catalogue tools** — docs_design_agents_mcp_designmd_me_designmd_me, docs_design_agents_mcp_designmd_supply_designmd_supply, docs_design_agents_mcp_getdesign_md_getdesign_md, docs_design_agents_mcp_hyperbrowser_design_md_hyperbrowser_design_md, docs_design_agents_mcp_refero_refero [INFERRED 0.85]
- **Designer community showcase platforms** — docs_design_design_galleries_dribbble_dribbble, docs_design_design_galleries_behance_behance, docs_design_design_galleries_layers_layers, docs_design_design_galleries_collect_ui_collect_ui [INFERRED 0.85]
- **Git-based frontend hosting platforms with preview deployments** — docs_design_deploy_vercel_vercel, docs_design_deploy_netlify_netlify, docs_design_deploy_cloudflare_cloudflare [INFERRED 0.85]
- **GPU-accelerated terminal emulators** — docs_design_desktop_ghostty_ghostty, docs_design_desktop_warp_warp, docs_design_desktop_canario_canario, concept_gpu_acceleration [INFERRED 0.85]
- **Hash-encoded state share links as the agent-facing interchange format** — docs_design_comics_fukidashi_share_hash_state, docs_design_comics_koukasen_share_hash, docs_design_comics_haikeigacha_share_link, docs_design_comics_komawari_state_hash, docs_design_comics_comicalizer_name_gacha_page_hash [INFERRED 0.85]
- **Landing-page inspiration galleries** — docs_design_design_galleries_land_book_land_book, docs_design_design_galleries_landdding_landdding, docs_design_design_galleries_landing_love_landing_love, docs_design_design_galleries_lapa_ninja_lapa_ninja, docs_design_design_galleries_landingfolio_landingfolio, docs_design_design_galleries_cta_gallery_cta_gallery [INFERRED 0.85]
- **Local Retrieval Improvement Flow** — integration_docs_superpowers_plans_2026_10_15_agent_retrieval_issues_task2_shared_ranking, integration_docs_superpowers_plans_2026_10_15_agent_retrieval_issues_task3_link_status, integration_docs_superpowers_plans_2026_10_15_agent_retrieval_issues_task6_cli_integration, integration_docs_superpowers_specs_2026_10_15_agent_retrieval_issues_design_search_contract [INFERRED 0.85]
- **Mobile UI pattern libraries** — docs_design_design_galleries_mobbin_mobbin, docs_design_design_galleries_pttrns_pttrns, docs_design_design_galleries_ux_archive_ux_archive, docs_design_design_galleries_screenlane_screenlane, docs_design_design_galleries_scrnshts_scrnshts [INFERRED 0.85]
- **OKLCH-based palette and ramp tooling** — docs_design_color_oklch_oklch, docs_design_color_ramps_ramps, docs_design_color_huetone_huetone [INFERRED 0.85]
- **Oyasumi manga tool suite (seven free browser tools by MIYADAIKU)** — docs_design_comics_komawari, docs_design_comics_fukidashi, docs_design_comics_koukasen, docs_design_comics_haikeigacha, docs_design_comics_comicalizer, docs_design_comics_readme_manga_tool_suite [INFERRED 0.85]
- **Private release trust chain: private guard, checksum, smoke install, doctor, draft publish** — _github_workflows_release_private_repo_guard, _github_workflows_release_checksum_verification, _github_workflows_release_smoke_release, _github_workflows_release_draft_release_publish, docs_cli_trust_boundary, docs_cli_doctor_command [INFERRED 0.85]
- **Reference-not-implementation-source discipline across design reference docs** — docs_design_design_galleries_icqr_magic_tree_icqr_magic_tree, docs_design_design_galleries_icqr_magic_tree_reference_not_implementation_source, docs_design_design_galleries_icqr_magic_tree_unverified_3d_rendering, docs_design_interface_design_lenis_templates_lenis_templates, docs_design_interface_design_lenis_templates_discovery_not_source, docs_design_interface_design_lenis_templates_third_party_pricing [INFERRED 0.85]
- **Rendered-design acceptance gate set** — docs_scenarios_dictation_landing_rendered_design_rubric, docs_scenarios_dictation_landing_honest_completion, docs_scenarios_dictation_landing_retrieval_and_handoff_check, docs_research_react_three_fiber_assessment_visual_evidence_gate, docs_research_react_three_fiber_assessment_performance_claim_correction [INFERRED 0.85]
- **SaaS landing page galleries** — docs_design_design_galleries_saas_landing_page_saas_landing_page, docs_design_design_galleries_saasframe_saasframe, docs_design_design_galleries_saaspo_saaspo, docs_design_design_galleries_sections_wtf_sections_wtf, docs_design_design_galleries_supahero_supahero [INFERRED 0.85]
- **shadcn/ui registry ecosystem (React + Tailwind + shadcn CLI)** — concept_shadcn_ui, concept_shadcn_ui_registry, concept_radix_ui [INFERRED 0.85]
- **Source-Backed Evidence Discipline Across Docs** — docs_design_3d_react_three_fiber_screenshot_not_evidence, docs_design_agents_mcp_anatomy_evidence_not_rendered_review, docs_design_agents_mcp_image_to_code_skill_mockup_not_evidence, docs_design_3d_react_three_fiber_no_art_direction_guarantee [INFERRED 0.85]
- **Web font sourcing (foundries and distributors)** — docs_design_type_fontshare_fontshare, docs_design_type_fontsource_fontsource, docs_design_type_klim_klim, docs_design_type_velvetyne_velvetyne [INFERRED 0.85]
- **Shared CI verification gate (tests, docs check, skill mirrors, release smoke)** — _github_workflows_verify_verify_job, _github_workflows_release_release_job, _github_workflows_verify_skill_mirror_check, _github_workflows_release_skill_mirror_check, _github_workflows_verify_bun_version_pin, _github_workflows_release_bun_version_pin [INFERRED 0.95]
- **Frontmatter-Generated Catalogue Indexes** — docs_design_readme_bun_run_index_generator, docs_design_readme_design_catalogue, docs_design_3d_readme_3d_section_index, docs_design_agents_mcp_readme_agents_mcp_section_index [INFERRED 0.95]
- **Typed Resource Metadata Vocabulary** — integration_docs_superpowers_specs_2026_10_15_agent_retrieval_issues_design_execution_mode_vocabulary, integration_docs_superpowers_specs_2026_10_15_agent_retrieval_issues_design_surface_vocabulary, integration_docs_superpowers_specs_2026_10_15_agent_retrieval_issues_design_status_vocabulary, integration_templates_tool_doc_frontmatter_schema, integration_docs_superpowers_plans_2026_10_15_agent_retrieval_issues_task1_vocabulary [INFERRED 0.95]

## Communities (99 total, 12 thin omitted)

### Community 0 - "Design Galleries Resources"
Cohesion: 0.06
Nodes (126): reference mode, active status, reference surface, Generated resource index, Blender · 3d/blender, Poly Haven · 3d/poly-haven, designmd.me · agents-mcp/designmd-me, designmd.supply · agents-mcp/designmd-supply (+118 more)

### Community 1 - "Component Libraries Resources"
Cohesion: 0.07
Nodes (117): shadcn, registry mode, og-image surface, web-ui surface, base-ui stack, editframe stack, motion stack, nextjs stack (+109 more)

### Community 2 - "3D Resources"
Cohesion: 0.05
Nodes (86): AI motion-graphics visual tells, Android, THREE.AnimationAction, THREE.AnimationClip, THREE.AnimationMixer, Automatic character rigging, Canvas, cubic-bezier easing (+78 more)

### Community 3 - "Retrieval Metadata"
Cohesion: 0.06
Nodes (82): Benji Taylor, Josh Puckett, package mode, degraded status, audio surface, web-3d surface, astro stack, ionic stack (+74 more)

### Community 4 - "Retrieval Metadata"
Cohesion: 0.06
Nodes (64): browser-app mode, comics surface, print surface, video surface, web-asset surface, browser stack, desktop stack, fbx stack (+56 more)

### Community 5 - "Design Galleries Resources"
Cohesion: 0.09
Nodes (60): AI-generated imagery, Flutter, Framer, REST API, Webflow, Appinspo, Are.na, Awwwards (+52 more)

### Community 6 - "REA Reverse Engineering"
Cohesion: 0.06
Nodes (55): React Three Fiber (design doc entry), REA, rea-agents setup writes MCP registration and workflow instructions, backing up existing config, Chrome-family browser capture over a local debugging port, Evidence-led reconstruction: public access is not permission to copy assets, Local reverse-engineering MCP server and CLI, Native analysis engines (Hopper, Ghidra, IDA), Three kinds of evidence: static source, browser observation window, runtime interaction (+47 more)

### Community 7 - "Development Resources"
Cohesion: 0.08
Nodes (49): Bun, Cloudflare Workers, Drizzle ORM, ESLint, GDPR, Hono, Node.js, Nuxt (+41 more)

### Community 8 - "Comics Resources"
Cohesion: 0.05
Nodes (49): Comicalizer (design doc), Comicalizer detail specs (Camera, per-character pos/pose/face, Balloon, Effect, same=, standing=), Comicalizer headless driving: stable #id selectors and textarea #plot, Comicalizer local-first: plot, storyboard and exports stay in the browser, Comicalizer runs on the Name Gacha engine, Comicalizer page hand-off hash (ng: z+raw-deflate base64 or j+base64), Comicalizer line-based plot markup (scenes, pages, panels, voices), Comicalizer JSON project file (format comicalizer-project, version 4) (+41 more)

### Community 9 - "Reading Resources"
Cohesion: 0.16
Nodes (44): Accessibility (a11y), ARIA, Bootstrap, Core Web Vitals, CSS, CUDA, Framer Motion / Motion, HTML (+36 more)

### Community 10 - "Release Packaging Script"
Cohesion: 0.12
Nodes (40): main(), outputDirectory(), ROOT, UsageError, assertOutputPathIsSeparate(), assertPathDoesNotExist(), assertPortablePath(), buildRelease() (+32 more)

### Community 11 - "Utilities Resources"
Cohesion: 0.17
Nodes (42): ASCII Art, AVIF, Dithering, Lottie, Open Graph, Regular Expressions, SVG, SVGO (+34 more)

### Community 12 - "Retrieval Metadata"
Cohesion: 0.06
Nodes (42): snippet mode, email surface, alpinejs stack, bootstrap stack, css stack, figma stack, framer stack, gsap stack (+34 more)

### Community 13 - "CLI Integration Tests"
Cohesion: 0.07
Nodes (36): ref_node_fs, blurbs, count(), entries, Entry, overview, PAYWALL_LABEL, peopleMd (+28 more)

### Community 14 - "Icons Resources"
Cohesion: 0.20
Nodes (41): Figma, Icon font / webfont, Ionic, JavaScript, Svelte, Tree-shaking, Variable Fonts, Web Components (+33 more)

### Community 15 - "Video Capture Resources"
Cohesion: 0.15
Nodes (37): C, CLI, Electron, FFmpeg, Firefox / Gecko, GPU acceleration, HTML Canvas, macOS (+29 more)

### Community 16 - "Design CLI Core"
Cohesion: 0.11
Nodes (34): Task 2: Implement deterministic retrieval and context, CLI contract, CatalogueEntry, compareText(), ContextPack, ContextResource, DataError, getPaywall() (+26 more)

### Community 17 - "CLI Integration Tests"
Cohesion: 0.08
Nodes (28): ref_node_crypto, ref_node_os, ref_node_path, decode(), entrypoint, root, run(), target (+20 more)

### Community 18 - "Component Libraries Resources"
Cohesion: 0.14
Nodes (32): Base UI, CSS-in-JS, CSS Modules, GSAP, Motion (Framer Motion), MUI, Recharts, shadcn/ui (+24 more)

### Community 19 - "Component Libraries Resources"
Cohesion: 0.22
Nodes (31): React Aria, SolidJS, 8bitcn, Amicro, Bencho, beUI, blocks.so, Butter Nav (+23 more)

### Community 20 - "Catalogue Tooling"
Cohesion: 0.17
Nodes (25): hasFlag(), ParsedFlags, parseFlags(), readValue(), Command, buildContext(), excerptFor(), resolveResource() (+17 more)

### Community 21 - "Component Libraries Resources"
Cohesion: 0.19
Nodes (29): Canvas API, Preact, React, React Native, shadcn/ui registry, Solid, View Transitions API, Amacro (+21 more)

### Community 22 - "Component Libraries Resources"
Cohesion: 0.33
Nodes (27): Alpine.js, Angular, Radix UI, Tailwind CSS, Vue, Aceternity UI, Animate UI, Base CN (+19 more)

### Community 23 - "Private Release Pipeline"
Cohesion: 0.13
Nodes (26): Agent skill mirror cmp check, Agent skill mirror cmp check, context command source-backed export with SHA-256, Search is literal AND matching, not semantic ranking, 1. Brief and constraints, 2. Reference evidence, 3. Visual direction and behavior, 4. Implementation context (+18 more)

### Community 24 - "Package Manifest"
Cohesion: 0.08
Nodes (25): description, devDependencies, prettier, @types/bun, yaml, engines, bun, name (+17 more)

### Community 25 - "Component Libraries Resources"
Cohesion: 0.19
Nodes (25): Astro, Editframe, Fumadocs, Ink, llms.txt, Next.js, OpenTUI, Tiptap (+17 more)

### Community 26 - "Type Resources"
Cohesion: 0.16
Nodes (25): Atmospheric 3D character scene, Build with an agent, Collect references, Default design stack, Fluid Typography / clamp(), Choose icons, imagery, motion, and 3D, Lock the visual system, npm (+17 more)

### Community 27 - "Design Galleries Resources"
Cohesion: 0.19
Nodes (23): App Store Optimization, 60fps, before.click, bestdesignsonx.com, cta.gallery, Curated Domains, Curations, desengs.com (+15 more)

### Community 28 - "Release Info Tests"
Cohesion: 0.14
Nodes (16): ref_bun_test, Fixtures, QueryFixture, B_NORMALIZATION, compareText(), countOccurrences(), DocumentExtracted, extractStrings() (+8 more)

### Community 29 - "Release Tests"
Cohesion: 0.11
Nodes (21): ref_node_url, ArchiveEntry, assertDoctorSkills(), assertWithin(), buildFixture(), collectFiles(), decode(), entrypoint (+13 more)

### Community 30 - "Retrieval Metadata"
Cohesion: 0.09
Nodes (22): desktop surface, gpui stack, swift stack, swiftui stack, Causal · agents-mcp/causal, Distill · agents-mcp/distill, Dray · agents-mcp/dray, Ghostex · agents-mcp/ghostex (+14 more)

### Community 31 - "Catalogue Tooling"
Cohesion: 0.28
Nodes (19): ArchiveEntry, assertWithin(), collectFiles(), decode(), doctorResult(), fail(), inspectArchive(), installArchive() (+11 more)

### Community 32 - "Catalogue Tooling"
Cohesion: 0.11
Nodes (20): TolongDesign Design Starting Point, Tool Doc Contract, Created Tools and Credit Sources Column, Project Design Workflow, tolongdesign CLI, Task 1: Vocabulary and Validation, Task 2: Shared Ranking and Eval, Task 4: Index Extraction, Cards and People Renderer (+12 more)

### Community 33 - "Private Release Pipeline"
Cohesion: 0.19
Nodes (18): Verify workflow, Tests and docs job, Repository command vocabulary (check, index, find, links, format), graphify-out knowledge graph, Never invent facts rule, No third-party assets in the repo, Paywall is about the tool, not the licence, The tool-doc template is the contract (+10 more)

### Community 34 - "3D Resources"
Cohesion: 0.12
Nodes (19): Canvas Component, Demand Frameloop and Parent-Owned Motion Preference, Device and Frame-Time Budget Discipline, HTML-Owned Copy and Canvas Fallback, Model Example Component, pmndrs A11y Scene Helpers, ProductScene Example Component, React State vs Frame Hook API Separation (+11 more)

### Community 35 - "Agents Mcp Resources"
Cohesion: 0.31
Nodes (18): Agent Skills (SKILL.md), DESIGN.md, HTML-to-video rendering, Mastra, agentcn, Aura, designmd.me, designmd.supply (+10 more)

### Community 36 - "Agents Mcp Resources"
Cohesion: 0.31
Nodes (16): Cursor, Agentation, Anatomy (index entry), Causal, Distill, Dray, Efecto, Impeccable (+8 more)

### Community 37 - "Comics Resources"
Cohesion: 0.17
Nodes (17): iOS Canvas Area Ceiling (16.78 MP cap makes toBlob return null; reported as 'The image is too large to export'), Sibling-Tool Iframe PostMessage Mesh (#komaFrame/#bgFrame/#poseFrame/#fukiFrame/#koukaFrame; replies accepted only from the matching contentWindow), Pose Gacha (embedded with ?embed=1, posts {app:'posegacha', type:'pick'}), Background Gacha (room-interior sibling with the same drawing styles), Camera Read-back from __rk.VIEW.camState() (the app rewrites the hash without cam and mode, so state must be polled instead), City Packs and Tile Sources (248 packs, packs-jp, packs-it, OpenFreeMap, GSI DEM, AWS Terrain Tiles; Overpass off on the public site), Four Drawing Styles (Color, Color+Lines, Line art, Lines+tone), PNG / SVG / GLB / FBX / OBJ Exports (SVG stacks with the PNG; GLB and FBX are real metric meshes with box-projected UVs) (+9 more)

### Community 38 - "Tool Doc Template"
Cohesion: 0.16
Nodes (17): Task 5: Register the image-to-code Companion Resource, Agent Notes Section (machine-oriented hints), Alternatives in This Repo Section, At a Glance Summary Table, Examples Section (three concrete links), Tool Doc Frontmatter Key Set, How to Use Section (real install command and minimal snippet), Paywall and Pricing Section Rules (+9 more)

### Community 39 - "Link Checker Script"
Cohesion: 0.19
Nodes (13): ref_bun, buildResourceStatusReport(), checkLinksBatch(), isDnsError(), isKnownPausedResponse(), isTimeoutError(), LinkObservation, observeLink() (+5 more)

### Community 40 - "Catalogue Tooling"
Cohesion: 0.20
Nodes (14): EXECUTION_MODES, ExecutionMode, isValidDate(), isValidUrl(), normalizeStack(), Stack, STACK_ALIASES, STACKS (+6 more)

### Community 41 - "Catalogue Tooling"
Cohesion: 0.26
Nodes (11): cell(), hostLink(), PersonCredits, renderMadeCell(), renderPeopleRows(), SHELL_LANGUAGES, siteCell(), socialCell() (+3 more)

### Community 42 - "Agents Mcp Resources"
Cohesion: 0.14
Nodes (14): Physical-Machine Metaphor for Technical Ideas, Agent notes, Alternatives in this repo, At a glance, ChatGPT Images (suggested generator), Examples, How to use, Image-to-code skill (+6 more)

### Community 43 - "Comics Resources"
Cohesion: 0.22
Nodes (14): Agent-Drivable Selector Contract (static page, stable #id selectors, so the advertised job runs headlessly), CLIP STUDIO PAINT Hand-off (PSD open, then File > Import > Vector for the line ZIP), Directing-Rules Panel Scoring (12 terms, candidate scored /100 so options differ in shot, camera height, lens and gaze), SVG Layer Stack Export (Paper, Eye level, Figures, Balloons, Names, Frame borders, Panel notes, Reading-flow, Numbers, Scores), Headless Software-WebGL Run (swiftshader flags, long VRM parse wait, 600 s download timeout), Joint-Angle Mannequin Figures (3D mannequins from joint angles, not image generation; swap for VRM), Lock-and-Reroll Workflow (freeze liked panels, reroll camera or pose only), Manga Name Page (ネーム) (+6 more)

### Community 44 - "Retrieval Metadata"
Cohesion: 0.22
Nodes (14): mcp-skill mode, development surface, java stack, vercel stack, Image-to-code skill · agents-mcp/image-to-code-skill, skills · agents-mcp/skills, typeui.sh · agents-mcp/typeui-sh, Alumnium · development/alumnium (+6 more)

### Community 45 - "CLI Release Plan"
Cohesion: 0.24
Nodes (14): Bounded File Ownership Split (Main / Packager Worker / Test Worker), Global Constraints (v0.1.0, private, no network, AFK authority), Goal: Installable Private TolongDesign v0.1.0 Release, Private CLI Release Implementation Plan, Review Focus: Five Release Risks, Task 1: Version and Installation Diagnostics (release-info.ts), Task 2: Allowlisted Production Archive (release-lib.ts, prepare-release.ts), Task 3: Independent Clean-Install and Negative Checks (+6 more)

### Community 46 - "Design Workflow Plan"
Cohesion: 0.20
Nodes (14): Architecture: Agent Judgment Outside the Deterministic CLI, File responsibilities, Global constraints, Goal: Private Use-Case Retrieval with Provenance-Backed Context, Project design workflow implementation plan, Review focus, Review Focus: Retrieval and Safety Risks, Task 1: Establish the failing CLI contract (+6 more)

### Community 47 - "Catalogue Tooling"
Cohesion: 0.23
Nodes (12): createFixtureRoot(), defaultDocPath(), fixtureMetadata(), FixtureRoot, fixtureRoots, FixtureTool, markdownFor(), sectionName() (+4 more)

### Community 48 - "Catalogue Tooling"
Cohesion: 0.27
Nodes (10): inline(), bestForValue(), CARD_BUDGET, CARD_MODES, CardInput, inlineCommand(), mode(), renderResourceCard() (+2 more)

### Community 49 - "Agents Mcp Resources"
Cohesion: 0.21
Nodes (13): Archify 3.0.1 Renderer, Design Workflow Diagram (design-workflow.svg), Hero Banner (tolongdesign-hero.png), Original README Assets Manifest, No Third-Party Asset Reuse, Three.js Doc, Anatomy Skill, anatomy-figures npm Package (+5 more)

### Community 50 - "Design Galleries Resources"
Cohesion: 0.15
Nodes (13): mobile-ui surface, 60fps · design-galleries/60fps, Appinspo · design-galleries/appinspo, before.click · design-galleries/before-click, Great Apps · design-galleries/great-apps, loadmo.re · design-galleries/loadmo-re, Mobbin · design-galleries/mobbin, Pttrns · design-galleries/pttrns (+5 more)

### Community 51 - "Private Release Pipeline"
Cohesion: 0.23
Nodes (12): SHA256SUMS verification of release archive, Draft-first release publish that refuses to overwrite a published release, SHA-pinned checkout and setup-bun actions, Private release workflow, Private repository guard, Build and publish private CLI job, Isolated release install smoke test, Tag equals package version check (+4 more)

### Community 52 - "Interface Design Resources"
Cohesion: 0.20
Nodes (12): Reference, Not Implementation Source (public viewing grants no reuse of logo, code, screenshots or geometry; keep claims separate from tested behaviour), Discovery Collection, Not Source (a preview page is not the production project file; no checkout, download or collection-wide licence on the page), Framer Community Terms v1.0, Framer Remix Delivery (Use for Free or Buy on the creator site, emailed remix link copies the project into a Framer workspace), Lenis Core Library Licence does not license template projects, Lenis Templates (hand-curated third-party template directory powered by Lenis), Single-Use / Limited Licence Scope (paid limited to one project; free content allows client work only inside a broader end product; no resale or sublicensing), Purchase Preflight Checklist (budget, client scope, workspace, modify/publish rights, asset rights for images, fonts and icons) (+4 more)

### Community 53 - "Retrieval Metadata"
Cohesion: 0.24
Nodes (12): android stack, canvas stack, dart stack, flutter stack, ios stack, webgl stack, Libraries.dev · component-libraries/libraries-dev, LocalSend · desktop/localsend (+4 more)

### Community 54 - "Deploy Resources"
Cohesion: 0.38
Nodes (11): CI/CD, Docker, Edge computing, Go, Serverless, Cloudflare, Fly.io, Netlify (+3 more)

### Community 55 - "Color Resources"
Cohesion: 0.36
Nodes (11): CIELAB / LCH, CSS Custom Properties, OKLab, OKLCH, WCAG, APCA, Color.review, Huetone (+3 more)

### Community 56 - "Retrieval Metadata"
Cohesion: 0.24
Nodes (11): cli-tui surface, bash stack, fish stack, ink stack, opentui stack, zig stack, zsh stack, fx · agents-mcp/fx (+3 more)

### Community 57 - "Release Architecture Spec"
Cohesion: 0.24
Nodes (11): buildRelease Interface and ReleaseBuildResult, CLI Compatibility Contract (search/show/context unchanged, exit codes), Deployment Choice: Authenticated Private GitHub Releases Tarball, doctor --json Diagnostic Contract (schema_version 1, root, manifest_verified), Payload Allowlist and Exclusions for the Release Tarball, Rejected Alternatives: Private Package Registry and Hosted Service, Release Manifest Schema Version 1 (path-to-SHA256 of payload), Source and Agent Handoff (doctor root, skill mirrors, no auto-install) (+3 more)

### Community 58 - "Agents Mcp Resources"
Cohesion: 0.20
Nodes (11): bun stack, claude-code stack, nodejs stack, pnpm stack, Anatomy · agents-mcp/anatomy, Open Design · agents-mcp/open-design, OpenCode · agents-mcp/opencode, SkillSync · agents-mcp/skillsync (+3 more)

### Community 59 - "Retrieval Metadata"
Cohesion: 0.25
Nodes (11): c stack, cli stack, mcp stack, rest stack, rust stack, Herdr · agents-mcp/herdr, is-agentic.com · agents-mcp/is-agentic-com, Webclaw · agents-mcp/webclaw (+3 more)

### Community 60 - "Private Release Pipeline"
Cohesion: 0.33
Nodes (10): Bun 1.4.3 pin, Bun 1.4.3 pin, Checkout mode diagnostics (mode: checkout, no verified manifest), doctor --json integrity diagnostic, Exit code contract (2 usage, 1 integrity; JSON errors to stderr), Private CLI installation guide, Read-only, local, no-network CLI boundary, Update and rollback by reinstalling a verified tag (+2 more)

### Community 61 - "Design Galleries Resources"
Cohesion: 0.22
Nodes (10): Agent-Friendly Column (per-tool verdict on whether a coding agent can drive the tool), Design Galleries Index (79 tools: 49 free, 26 freemium, 1 paid, 3 unknown), Generated by 'bun run index' from doc frontmatter, do not edit by hand (single source of truth is each tool page's YAML), Paywall Taxonomy (Free / Freemium / Paid / Unknown as a first-class index column), Canvas / Tokens / Layout Systems taxonomy for interface design tools, Interface Design Index (12 tools: 6 free, 4 freemium, 2 paid), Generated by 'bun run index' from doc frontmatter, do not edit by hand, Motion Index (13 tools: 9 free, 3 freemium, 1 paid) (+2 more)

### Community 62 - "Deploy Resources"
Cohesion: 0.24
Nodes (10): hosting surface, docker stack, go stack, postgresql stack, Capacity · agents-mcp/capacity, Fly.io · deploy/fly-io, Netlify · deploy/netlify, Railway · deploy/railway (+2 more)

### Community 63 - "Agents Mcp Resources"
Cohesion: 0.31
Nodes (9): GPUI, GraphQL, OpenAPI, fx, Ghostex, Herdr, integrations.sh, is-agentic.com (+1 more)

### Community 64 - "Design CLI Spec"
Cohesion: 0.31
Nodes (9): CLI Command Contract: search, show, context, Context Pack with Provenance Manifest (schema_version 1, sha256), design-lib.ts Public Interface (loadResources, searchResources, resolveResource, buildContext), Jev Semantic Ranking Rejected, Approach: Read-Only Bun CLI plus Mirrored design-project Skill, Safe Markdown Fencing for Embedded Documents, search --json Result Contract and Excerpt Evidence Rule, Project Design Workflow Spec (+1 more)

### Community 65 - "Interface Design Resources"
Cohesion: 0.67
Nodes (7): Design tokens, design.dev, Figma, Framer, make.design, Penpot, Spline

### Community 66 - "Component Libraries Resources"
Cohesion: 0.29
Nodes (7): Forme, JSX Email, MJML, React Email, Takumi, emailcn, pdfcn

### Community 67 - "Design Galleries Resources"
Cohesion: 0.38
Nodes (7): Canvas-Led Composition (warm neutral ground, dotted ICQR mark, generous central space, rounded control group near the bottom), ICQR Magic Tree (3D QR-code tree generator and interactive design reference), REA Browser Evidence Capture (REA 6.4.0, isolated Chrome session, three recorded viewport cases), Responsive Control Group (centred group on desktop, nearly full-width group on portrait mobile), Spatial Product Metaphor (a link converted into a scannable 3D tree with season and colour customisation), Unsupported-Screen-Size Fallback (explicit message at 780x493; do not assume every viewport gets the same interface, borrow the check for own acceptance tests), Unverified 3D Rendering (headless WebGL was unavailable, so captures are not proof of tree geometry, animation or QR scannability)

### Community 68 - "Workflow Spec Docs"
Cohesion: 0.29
Nodes (5): Agent workflow, Approach, Intent and authorization, Project design workflow, Verification and boundaries

### Community 69 - "Retrieval Metadata"
Cohesion: 0.29
Nodes (7): cloudflare-workers stack, electron stack, vite stack, bb · agents-mcp/bb, Bolt.new · development/bolt-new, Vinext · development/vinext, Recordly · video-capture/recordly

### Community 70 - "Prettier Config"
Cohesion: 0.29
Nodes (6): overrides, printWidth, $schema, semi, singleQuote, trailingComma

### Community 71 - "Catalogue Tooling"
Cohesion: 0.33
Nodes (5): decode(), entrypoint, runCli(), sourceRoot, temporaryCwds

### Community 72 - "Whiteboard Resources"
Cohesion: 0.93
Nodes (6): Markdown, Excalidraw, Linear, Obsidian, Whiteboard, tldraw

### Community 73 - "Component Libraries Resources"
Cohesion: 0.33
Nodes (6): <ascii-art> custom element, ascii.rest, bas3line/ascii GitHub repo, Piece frame function (t, env) => string, mount() API, Reduced-motion first-frame hold

### Community 74 - "Private Release Pipeline"
Cohesion: 0.50
Nodes (5): Generated files are never hand-edited, Never Invent Facts, People Worth Following (132 design engineers), The Two Rules (no invented facts, no hand-edited generated files), No Invented URLs, Prices or Counts

### Community 75 - "Interface Design Resources"
Cohesion: 0.90
Nodes (5): Interface Craft, Lab01, UI Labs, UI Playbook, UIWTF

### Community 76 - "Component Libraries Resources"
Cohesion: 0.40
Nodes (5): unreachable status, Butter Nav · component-libraries/butter-nav, Availability recheck: Butter Nav, Butterfly · utilities/butterfly, Availability recheck: Butterfly

### Community 77 - "Retrieval Metadata"
Cohesion: 0.40
Nodes (5): pdf surface, forme stack, takumi stack, pdfcn · component-libraries/pdfcn, Runey · desktop/runey

### Community 78 - "Development Resources"
Cohesion: 0.40
Nodes (5): drizzle stack, hono stack, nuxt stack, Better T Stack · development/better-t-stack, evlog · development/evlog

### Community 79 - "Component Libraries Resources"
Cohesion: 0.50
Nodes (4): Satori, Shaders, 23rd, ogimagecn

### Community 80 - "Comics Resources"
Cohesion: 0.50
Nodes (4): Non-destructive hand-edited shape handles stored per type, Uncompressed j= form exists so an agent can write a share link without a compressor, Fukidashi share hash: #z=base64url(raw deflate) or #j=base64url(JSON), window.FUKI runtime API (st, fromAny, defaultState, renderPNG, svgExport, layoutText, unionPoly)

### Community 81 - "Retrieval Metadata"
Cohesion: 0.50
Nodes (4): cuda stack, gpu stack, triton stack, Learn Kernels · reading/learn-kernels

### Community 82 - "Comics Resources"
Cohesion: 0.67
Nodes (3): Binary search for the smallest scale at which the text box fits the outline, SVG text becomes outlines only with the bundled Antique faces, Comics typesetting: vertical writing, 縦中横 sideways numerals, kinsoku rules

### Community 83 - "Catalogue Tooling"
Cohesion: 0.67
Nodes (3): Agent Retrieval Improvements Implementation Plan, Agent Retrieval Improvements Design Spec, Verification Gate

### Community 84 - "Agents Mcp Resources"
Cohesion: 0.67
Nodes (3): chrome stack, npm stack, REA · agents-mcp/rea

### Community 85 - "Agents Mcp Resources"
Cohesion: 0.67
Nodes (3): eve stack, mastra stack, agentcn · agents-mcp/agentcn

### Community 86 - "Agents Mcp Resources"
Cohesion: 0.67
Nodes (3): graphql stack, openapi stack, integrations.sh · agents-mcp/integrations-sh

## Ambiguous Edges - Review These
- `React Three Fiber (R3F)` → `Archify External Alternative`  [AMBIGUOUS]
  docs/design/3d/react-three-fiber.md · relation: conceptually_related_to
- `Physical-Machine Metaphor for Technical Ideas` → `Instruction Content, Not an Image Service`  [AMBIGUOUS]
  docs/design/agents-mcp/image-to-code-skill.md · relation: semantically_similar_to
- `Lenis Scroll Runtime` → `Sampled Telemetry with disableTelemetry`  [AMBIGUOUS]
  docs/design/motion/lenis.md · relation: conceptually_related_to

## Knowledge Gaps
- **335 isolated node(s):** `InstallationInfo`, `ROOT`, `description`, `prettier`, `@types/bun` (+330 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 403 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `React Three Fiber (R3F)` and `Archify External Alternative`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Physical-Machine Metaphor for Technical Ideas` and `Instruction Content, Not an Image Service`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Lenis Scroll Runtime` and `Sampled Telemetry with disableTelemetry`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Paywall Taxonomy (free/freemium/paid/unknown)` connect `3D Resources` to `Agents Mcp Resources`, `Tool Doc Template`?**
  _High betweenness centrality (0.208) - this node is a cross-community bridge._
- **Why does `Tool Doc Frontmatter Key Set` connect `Tool Doc Template` to `Design CLI Spec`, `3D Resources`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **Why does `Tool Doc Template` connect `Design CLI Spec` to `Release Architecture Spec`, `Tool Doc Template`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **What connects `InstallationInfo`, `ROOT`, `description` to the rest of the system?**
  _335 weakly-connected nodes found - possible documentation gaps or missing edges._
## Update scope

This incremental update deterministically extracts all 441 resources' typed frontmatter and five explicit creator credits, and freshly parses changed code with AST extraction. Existing semantic evidence is retained; dated availability notes add exact current evidence. One filesystem-only River DeepSeek worker extracted the eight changed instruction/prose documents (32 nodes, 30 relationships). Its observed usage was 37,107 uncached input tokens, 33,280 cached input tokens and 12,855 output tokens; graph metadata/AST extraction uses no model calls. Qualified catalogue-record labels preserve resource identity alongside shared semantic concepts.
