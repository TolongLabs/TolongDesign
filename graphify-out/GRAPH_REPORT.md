# Graph Report - TolongDesign  (2026-10-15)

## Corpus Check
- 57 files · ~427,503 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1296 nodes · 3956 edges · 44 communities (40 shown, 4 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 188 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Web UI Frameworks and Kits
- Visual Assets and Formats
- Design Playbook Stack
- Design CLI Core
- Private Release Pipeline
- 3D Characters and Animation
- Web Standards and Accessibility
- REA Reverse Engineering
- Runtimes and Platforms
- Motion Design Prompting
- Backend and Deploy Infra
- Comics Panel and Tone Tools
- Release Packaging Script
- Comics 3D Staging Tools
- R3F Scene Practices
- Package Manifest
- Design Galleries and Curations
- Release Tests
- Release Smoke Test
- CLI Integration Tests
- Tool Doc Template
- README Assets and Diagrams
- Doc Checker Script
- Image-to-Code Skill
- CLI Release Plan
- Design Workflow Plan
- Index Builder Script
- DESIGN.md Generators
- Dev Platform Tools
- Coding Agents
- Release Architecture Spec
- Link Checker Script
- Find Script
- Design CLI Spec
- Release Info Tests
- Workflow Spec Docs
- Prettier Config
- Agents and MCP Index
- Speech Bubble Share Format
- Comic Typesetting
- Focus Line Effects
- Radix

## God Nodes (most connected - your core abstractions)
1. `React` - 198 edges
2. `Tailwind CSS` - 120 edges
3. `Component Libraries Section Index` - 112 edges
4. `Design playbook` - 90 edges
5. `shadcn/ui` - 70 edges
6. `Next.js` - 50 edges
7. `Motion (Framer Motion)` - 38 edges
8. `Figma` - 37 edges
9. `JavaScript` - 37 edges
10. `shadcn/ui` - 36 edges

## Surprising Connections (you probably didn't know these)
- `One-Doc-Per-Entry File Boundary Rule` --semantically_similar_to--> `Payload Allowlist and Exclusions for the Release Tarball`  [INFERRED] [semantically similar]
  templates/worker-brief.md → docs/superpowers/specs/2026-10-11-private-cli-release-design.md
- `Task 2: Implement deterministic retrieval and context` --references--> `DataError`  [INFERRED]
  docs/superpowers/plans/2026-10-11-project-design-workflow.md → scripts/design-lib.ts
- `Task 2: Implement deterministic retrieval and context` --references--> `UsageError`  [INFERRED]
  docs/superpowers/plans/2026-10-11-project-design-workflow.md → scripts/design-lib.ts
- `CLI contract` --references--> `buildContext()`  [INFERRED]
  docs/superpowers/specs/2026-10-11-project-design-workflow-design.md → scripts/design-lib.ts
- `CLI contract` --references--> `DataError`  [INFERRED]
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
- **Landing-page inspiration galleries** — docs_design_design_galleries_land_book_land_book, docs_design_design_galleries_landdding_landdding, docs_design_design_galleries_landing_love_landing_love, docs_design_design_galleries_lapa_ninja_lapa_ninja, docs_design_design_galleries_landingfolio_landingfolio, docs_design_design_galleries_cta_gallery_cta_gallery [INFERRED 0.85]
- **Mobile UI pattern libraries** — docs_design_design_galleries_mobbin_mobbin, docs_design_design_galleries_pttrns_pttrns, docs_design_design_galleries_ux_archive_ux_archive, docs_design_design_galleries_screenlane_screenlane, docs_design_design_galleries_scrnshts_scrnshts [INFERRED 0.85]
- **OKLCH-based palette and ramp tooling** — docs_design_color_oklch_oklch, docs_design_color_ramps_ramps, docs_design_color_huetone_huetone [INFERRED 0.85]
- **SaaS landing page galleries** — docs_design_design_galleries_saas_landing_page_saas_landing_page, docs_design_design_galleries_saasframe_saasframe, docs_design_design_galleries_saaspo_saaspo, docs_design_design_galleries_sections_wtf_sections_wtf, docs_design_design_galleries_supahero_supahero [INFERRED 0.85]
- **shadcn/ui registry ecosystem (React + Tailwind + shadcn CLI)** — docs_design_component_libraries_shadcn_ui_shadcn_ui, concept_shadcn_ui_registry, concept_radix_ui [INFERRED 0.85]
- **Web font sourcing (foundries and distributors)** — docs_design_type_fontshare_fontshare, docs_design_type_fontsource_fontsource, docs_design_type_klim_klim, docs_design_type_velvetyne_velvetyne [INFERRED 0.85]
- **Shared CI verification gate (tests, docs check, skill mirrors, release smoke)** — _github_workflows_verify_verify_job, _github_workflows_release_release_job, _github_workflows_verify_skill_mirror_check, _github_workflows_release_skill_mirror_check, _github_workflows_verify_bun_version_pin, _github_workflows_release_bun_version_pin [INFERRED 0.95]
- **Private release trust chain: private guard, checksum, smoke install, doctor, draft publish** — _github_workflows_release_private_repo_guard, _github_workflows_release_checksum_verification, _github_workflows_release_smoke_release, _github_workflows_release_draft_release_publish, docs_cli_trust_boundary, docs_cli_doctor_command [INFERRED 0.85]
- **Five-stage project design workflow** — docs_workflow_brief_and_constraints, docs_workflow_reference_evidence, docs_workflow_visual_direction_and_behavior, docs_workflow_implementation_context, docs_workflow_build_and_rendered_verification, docs_workflow_agent_owns_design_decisions [EXTRACTED 1.00]
- **Frontmatter-Generated Catalogue Indexes** — docs_design_readme_bun_run_index_generator, docs_design_readme_design_catalogue, docs_design_3d_readme_3d_section_index, docs_design_agents_mcp_readme_agents_mcp_section_index [INFERRED 0.95]
- **Declarative R3F Scene Runtime** — docs_design_3d_react_three_fiber_react_three_fiber, docs_design_3d_react_three_fiber_canvas, docs_design_3d_react_three_fiber_useframe, docs_design_3d_react_three_fiber_usethree, docs_design_3d_react_three_fiber_demand_frameloop [EXTRACTED 1.00]
- **Source-Backed Evidence Discipline Across Docs** — docs_design_3d_react_three_fiber_screenshot_not_evidence, docs_design_agents_mcp_anatomy_evidence_not_rendered_review, docs_design_agents_mcp_image_to_code_skill_mockup_not_evidence, docs_design_3d_react_three_fiber_no_art_direction_guarantee [INFERRED 0.85]
- **Oyasumi manga tool suite (seven free browser tools by MIYADAIKU)** — docs_design_comics_komawari, docs_design_comics_fukidashi, docs_design_comics_koukasen, docs_design_comics_haikeigacha, docs_design_comics_comicalizer, docs_design_comics_readme_manga_tool_suite [INFERRED 0.85]
- **Hash-encoded state share links as the agent-facing interchange format** — docs_design_comics_fukidashi_share_hash_state, docs_design_comics_koukasen_share_hash, docs_design_comics_haikeigacha_share_link, docs_design_comics_komawari_state_hash, docs_design_comics_comicalizer_name_gacha_page_hash [INFERRED 0.85]
- **Deterministic seeded procedural generation shared across the suite** — docs_design_comics_komawari_seeded_prng_mulberry32_fnv1a, docs_design_comics_fukidashi_seeded_prng_outline, docs_design_comics_haikeigacha_procedural_room_grid, docs_design_comics_koukasen_five_generator_groups [INFERRED 0.75]
- **MIYADAIKU manga tool chain (tabbed sibling iframes sharing state by postMessage)** — docs_design_comics_namegacha_name_gacha, docs_design_comics_namegacha_pose_gacha, docs_design_comics_namegacha_iframe_sibling_mesh, docs_design_comics_rokehan_location_scout, docs_design_comics_rokehan_background_gacha, docs_design_comics_rokehan_miyadaiku [EXTRACTED 1.00]
- **Reference-not-implementation-source discipline across design reference docs** — docs_design_design_galleries_icqr_magic_tree_icqr_magic_tree, docs_design_design_galleries_icqr_magic_tree_reference_not_implementation_source, docs_design_design_galleries_icqr_magic_tree_unverified_3d_rendering, docs_design_interface_design_lenis_templates_lenis_templates, docs_design_interface_design_lenis_templates_discovery_not_source, docs_design_interface_design_lenis_templates_third_party_pricing [INFERRED 0.85]
- **Generated section index tables (frontmatter is the single source of truth)** — docs_design_design_galleries_readme_design_galleries_index, docs_design_design_galleries_readme_generated_index, docs_design_interface_design_readme_interface_design_index, docs_design_motion_readme_generated_index, docs_design_motion_readme_motion_index [EXTRACTED 1.00]
- **ICQR Magic Tree evidence chain (method to limits)** — docs_research_tree_icqr_study, docs_research_tree_icqr_reference, docs_research_tree_icqr_study_rea_browser_inspection, docs_research_tree_icqr_study_evidence_manifest, docs_research_tree_icqr_study_observed_runtime_states, docs_research_tree_icqr_study_gpu_unavailable_limit, docs_research_tree_icqr_study_capture_coverage_limits [EXTRACTED 1.00]
- **Rendered-design acceptance gate set** — docs_scenarios_dictation_landing_rendered_design_rubric, docs_scenarios_dictation_landing_honest_completion, docs_scenarios_dictation_landing_retrieval_and_handoff_check, docs_research_react_three_fiber_assessment_visual_evidence_gate, docs_research_react_three_fiber_assessment_performance_claim_correction [INFERRED 0.85]
- **Graphics capability limitation and fallback practice** — docs_design_shaders_shaders_no_webgl_fallback, docs_design_shaders_shaders_ssr_client_boundary, docs_research_tree_icqr_study_gpu_unavailable_limit, docs_scenarios_dictation_landing_rendered_design_rubric [INFERRED 0.75]
- **Private Release Packaging, Independent Verification and Deployment Flow** — docs_superpowers_plans_2026_10_11_private_cli_release_task1_diagnostics, docs_superpowers_plans_2026_10_11_private_cli_release_task2_archive, docs_superpowers_plans_2026_10_11_private_cli_release_task3_clean_install_checks, docs_superpowers_plans_2026_10_11_private_cli_release_task5_deploy [EXTRACTED 1.00]
- **Agent Design Evidence Pipeline (retrieval to rendered verification)** — docs_superpowers_specs_2026_10_11_project_design_workflow_design_readonly_cli_and_skill_approach, docs_superpowers_specs_2026_10_11_project_design_workflow_design_design_lib_interface, docs_superpowers_specs_2026_10_11_project_design_workflow_design_context_pack_provenance, docs_superpowers_specs_2026_10_11_project_design_workflow_design_five_stage_workflow, docs_superpowers_specs_2026_10_11_project_design_workflow_design_rendered_verification [INFERRED 0.85]
- **Tool Doc Authoring Contract (worker brief plus template)** — templates_worker_brief_worker_brief_template, templates_worker_brief_batch_file_contract, templates_worker_brief_research_requirements, templates_worker_brief_output_format_rules, templates_tool_doc_tool_doc_template, templates_tool_doc_frontmatter_keys, templates_tool_doc_required_h2_sections [EXTRACTED 1.00]

## Communities (44 total, 4 thin omitted)

### Community 0 - "Web UI Frameworks and Kits"
Cohesion: 0.07
Nodes (155): Alpine.js, Angular, Base UI, Canvas API, coss ui, CSS-in-JS, CSS Modules, Editframe (+147 more)

### Community 1 - "Visual Assets and Formats"
Cohesion: 0.08
Nodes (92): ASCII Art, Astro, AVIF, Dithering, Figma, Icon font / webfont, Ionic, JavaScript (+84 more)

### Community 2 - "Design Playbook Stack"
Cohesion: 0.06
Nodes (83): AI-generated imagery, Atmospheric 3D character scene, Build with an agent, CIELAB / LCH, Collect references, CSS Custom Properties, Default design stack, Framer (+75 more)

### Community 3 - "Design CLI Core"
Cohesion: 0.07
Nodes (69): Task 2: Implement deterministic retrieval and context, CLI contract, ref_node_crypto, Command, hasFlag(), buildContext(), CatalogueEntry, compareText() (+61 more)

### Community 4 - "Private Release Pipeline"
Cohesion: 0.06
Nodes (66): Bun 1.4.3 pin, SHA256SUMS verification of release archive, Draft-first release publish that refuses to overwrite a published release, SHA-pinned checkout and setup-bun actions, Private release workflow, Private repository guard, Build and publish private CLI job, Agent skill mirror cmp check (+58 more)

### Community 5 - "3D Characters and Animation"
Cohesion: 0.08
Nodes (66): THREE.AnimationAction, THREE.AnimationClip, THREE.AnimationMixer, Automatic character rigging, Canvas, Draco compression, Avatar facial expressions, FBX (+58 more)

### Community 6 - "Web Standards and Accessibility"
Cohesion: 0.12
Nodes (57): Accessibility (a11y), Agent Skills (SKILL.md), ARIA, Bootstrap, Core Web Vitals, CSS, CUDA, Fluid Typography / clamp() (+49 more)

### Community 7 - "REA Reverse Engineering"
Cohesion: 0.06
Nodes (55): React Three Fiber (design doc entry), REA, rea-agents setup writes MCP registration and workflow instructions, backing up existing config, Chrome-family browser capture over a local debugging port, Evidence-led reconstruction: public access is not permission to copy assets, Local reverse-engineering MCP server and CLI, Native analysis engines (Hopper, Ghidra, IDA), Three kinds of evidence: static source, browser observation window, runtime interaction (+47 more)

### Community 8 - "Runtimes and Platforms"
Cohesion: 0.09
Nodes (55): C, CLI, Electron, FFmpeg, Firefox / Gecko, GPU acceleration, GPUI, GraphQL (+47 more)

### Community 9 - "Motion Design Prompting"
Cohesion: 0.07
Nodes (53): AI motion-graphics visual tells, Android, cubic-bezier easing, Design tokens, Flutter, iOS, Motion prompt iteration, Motion render-stack comparison (+45 more)

### Community 10 - "Backend and Deploy Infra"
Cohesion: 0.09
Nodes (49): CI/CD, Cloudflare Workers, Docker, Drizzle ORM, Edge computing, ESLint, GDPR, Go (+41 more)

### Community 11 - "Comics Panel and Tone Tools"
Cohesion: 0.05
Nodes (49): Comicalizer (design doc), Comicalizer detail specs (Camera, per-character pos/pose/face, Balloon, Effect, same=, standing=), Comicalizer headless driving: stable #id selectors and textarea #plot, Comicalizer local-first: plot, storyboard and exports stay in the browser, Comicalizer runs on the Name Gacha engine, Comicalizer page hand-off hash (ng: z+raw-deflate base64 or j+base64), Comicalizer line-based plot markup (scenes, pages, panels, voices), Comicalizer JSON project file (format comicalizer-project, version 4) (+41 more)

### Community 12 - "Release Packaging Script"
Cohesion: 0.12
Nodes (40): main(), outputDirectory(), ROOT, UsageError, assertOutputPathIsSeparate(), assertPathDoesNotExist(), assertPortablePath(), buildRelease() (+32 more)

### Community 13 - "Comics 3D Staging Tools"
Cohesion: 0.08
Nodes (40): Agent-Drivable Selector Contract (static page, stable #id selectors, so the advertised job runs headlessly), iOS Canvas Area Ceiling (16.78 MP cap makes toBlob return null; reported as 'The image is too large to export'), CLIP STUDIO PAINT Hand-off (PSD open, then File > Import > Vector for the line ZIP), Directing-Rules Panel Scoring (12 terms, candidate scored /100 so options differ in shot, camera height, lens and gaze), SVG Layer Stack Export (Paper, Eye level, Figures, Balloons, Names, Frame borders, Panel notes, Reading-flow, Numbers, Scores), Headless Software-WebGL Run (swiftshader flags, long VRM parse wait, 600 s download timeout), Sibling-Tool Iframe PostMessage Mesh (#komaFrame/#bgFrame/#poseFrame/#fukiFrame/#koukaFrame; replies accepted only from the matching contentWindow), Joint-Angle Mannequin Figures (3D mannequins from joint angles, not image generation; swap for VRM) (+32 more)

### Community 14 - "R3F Scene Practices"
Cohesion: 0.09
Nodes (26): Blender Doc, Drei Doc, gltf.report Doc, Asset Rights Check plus Instancing and Geometry Reuse, Canvas Component, Demand Frameloop and Parent-Owned Motion Preference, Device and Frame-Time Budget Discipline, HTML-Owned Copy and Canvas Fallback (+18 more)

### Community 15 - "Package Manifest"
Cohesion: 0.08
Nodes (25): description, devDependencies, prettier, @types/bun, yaml, engines, bun, name (+17 more)

### Community 16 - "Design Galleries and Curations"
Cohesion: 0.18
Nodes (24): App Store Optimization, OpenAPI, 60fps, before.click, bestdesignsonx.com, cta.gallery, Curated Domains, Curations (+16 more)

### Community 17 - "Release Tests"
Cohesion: 0.11
Nodes (21): ref_node_url, ArchiveEntry, assertDoctorSkills(), assertWithin(), buildFixture(), collectFiles(), decode(), entrypoint (+13 more)

### Community 18 - "Release Smoke Test"
Cohesion: 0.28
Nodes (19): ArchiveEntry, assertWithin(), collectFiles(), decode(), doctorResult(), fail(), inspectArchive(), installArchive() (+11 more)

### Community 19 - "CLI Integration Tests"
Cohesion: 0.14
Nodes (15): ref_node_fs, ref_node_os, ref_node_path, decode(), entrypoint, runCli(), sourceRoot, temporaryCwds (+7 more)

### Community 20 - "Tool Doc Template"
Cohesion: 0.16
Nodes (17): Task 5: Register the image-to-code Companion Resource, Agent Notes Section (machine-oriented hints), Alternatives in This Repo Section, At a Glance Summary Table, Examples Section (three concrete links), Tool Doc Frontmatter Key Set, How to Use Section (real install command and minimal snippet), Paywall and Pricing Section Rules (+9 more)

### Community 21 - "README Assets and Diagrams"
Cohesion: 0.17
Nodes (15): Archify 3.0.1 Renderer, Design Workflow Diagram (design-workflow.svg), Hero Banner (tolongdesign-hero.png), Original README Assets Manifest, No Third-Party Asset Reuse, Anatomy Skill, anatomy-figures npm Package, Archify External Alternative (+7 more)

### Community 22 - "Doc Checker Script"
Cohesion: 0.18
Nodes (13): errors, quiet, { tools }, warnings, Catalogue, CatalogueTool, Doc, FRONTMATTER_KEYS (+5 more)

### Community 23 - "Image-to-Code Skill"
Cohesion: 0.14
Nodes (14): Physical-Machine Metaphor for Technical Ideas, Agent notes, Alternatives in this repo, At a glance, ChatGPT Images (suggested generator), Examples, How to use, Image-to-code skill (+6 more)

### Community 24 - "CLI Release Plan"
Cohesion: 0.24
Nodes (14): Bounded File Ownership Split (Main / Packager Worker / Test Worker), Global Constraints (v0.1.0, private, no network, AFK authority), Goal: Installable Private TolongDesign v0.1.0 Release, Private CLI Release Implementation Plan, Review Focus: Five Release Risks, Task 1: Version and Installation Diagnostics (release-info.ts), Task 2: Allowlisted Production Archive (release-lib.ts, prepare-release.ts), Task 3: Independent Clean-Install and Negative Checks (+6 more)

### Community 25 - "Design Workflow Plan"
Cohesion: 0.20
Nodes (14): Architecture: Agent Judgment Outside the Deterministic CLI, File responsibilities, Global constraints, Goal: Private Use-Case Retrieval with Provenance-Backed Context, Project design workflow implementation plan, Review focus, Review Focus: Retrieval and Safety Risks, Task 1: Establish the failing CLI contract (+6 more)

### Community 26 - "Index Builder Script"
Cohesion: 0.18
Nodes (11): blurbs, cell(), count(), entries, Entry, overview, PAYWALL_LABEL, peopleMd (+3 more)

### Community 27 - "DESIGN.md Generators"
Cohesion: 0.47
Nodes (12): DESIGN.md, HTML-to-video rendering, Aura, designmd.me, designmd.supply, getdesign.md, Hyperbrowser Design.md, HyperFrames (+4 more)

### Community 28 - "Dev Platform Tools"
Cohesion: 0.25
Nodes (11): Bun, OpenTelemetry, PostgreSQL, Vercel AI SDK, Arc labs, bb, Capacity, Foglamp (+3 more)

### Community 29 - "Coding Agents"
Cohesion: 0.55
Nodes (11): Claude Code, Cursor, Agentation, Causal, Distill, Efecto, Impeccable, Kombai (+3 more)

### Community 30 - "Release Architecture Spec"
Cohesion: 0.24
Nodes (11): buildRelease Interface and ReleaseBuildResult, CLI Compatibility Contract (search/show/context unchanged, exit codes), Deployment Choice: Authenticated Private GitHub Releases Tarball, doctor --json Diagnostic Contract (schema_version 1, root, manifest_verified), Payload Allowlist and Exclusions for the Release Tarball, Rejected Alternatives: Private Package Registry and Hosted Service, Release Manifest Schema Version 1 (path-to-SHA256 of payload), Source and Agent Handoff (doctor root, skill mirrors, no auto-install) (+3 more)

### Community 31 - "Link Checker Script"
Cohesion: 0.20
Nodes (8): ref_bun, blocked, broken, files, queue, status, urls, where

### Community 32 - "Find Script"
Cohesion: 0.29
Nodes (9): args, flag(), has(), hits, lower(), text, { tools }, valued (+1 more)

### Community 33 - "Design CLI Spec"
Cohesion: 0.31
Nodes (9): CLI Command Contract: search, show, context, Context Pack with Provenance Manifest (schema_version 1, sha256), design-lib.ts Public Interface (loadResources, searchResources, resolveResource, buildContext), Jev Semantic Ranking Rejected, Approach: Read-Only Bun CLI plus Mirrored design-project Skill, Safe Markdown Fencing for Embedded Documents, search --json Result Contract and Excerpt Evidence Rule, Project Design Workflow Spec (+1 more)

### Community 34 - "Release Info Tests"
Cohesion: 0.33
Nodes (7): ref_bun_test, fixture(), fixtures, manifest(), sha(), source, write()

### Community 35 - "Workflow Spec Docs"
Cohesion: 0.29
Nodes (5): Agent workflow, Approach, Intent and authorization, Project design workflow, Verification and boundaries

### Community 36 - "Prettier Config"
Cohesion: 0.29
Nodes (6): overrides, printWidth, $schema, semi, singleQuote, trailingComma

### Community 37 - "Agents and MCP Index"
Cohesion: 0.60
Nodes (4): Anatomy (index entry), Dray, Agents & MCP Tool Index, DESIGN.md Agent-Context Tool Cluster

### Community 38 - "Speech Bubble Share Format"
Cohesion: 0.50
Nodes (4): Non-destructive hand-edited shape handles stored per type, Uncompressed j= form exists so an agent can write a share link without a compressor, Fukidashi share hash: #z=base64url(raw deflate) or #j=base64url(JSON), window.FUKI runtime API (st, fromAny, defaultState, renderPNG, svgExport, layoutText, unionPoly)

### Community 39 - "Comic Typesetting"
Cohesion: 0.67
Nodes (3): Binary search for the smallest scale at which the text box fits the outline, SVG text becomes outlines only with the bundled Antique faces, Comics typesetting: vertical writing, 縦中横 sideways numerals, kinsoku rules

## Ambiguous Edges - Review These
- `React Three Fiber (R3F)` → `Archify External Alternative`  [AMBIGUOUS]
  docs/design/3d/react-three-fiber.md · relation: conceptually_related_to
- `Physical-Machine Metaphor for Technical Ideas` → `Instruction Content, Not an Image Service`  [AMBIGUOUS]
  docs/design/agents-mcp/image-to-code-skill.md · relation: semantically_similar_to
- `Lenis Scroll Runtime` → `Sampled Telemetry with disableTelemetry`  [AMBIGUOUS]
  docs/design/motion/lenis.md · relation: conceptually_related_to

## Knowledge Gaps
- **241 isolated node(s):** `Catalogue`, `CatalogueTool`, `Doc`, `Person`, `args` (+236 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 296 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `React Three Fiber (R3F)` and `Archify External Alternative`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Physical-Machine Metaphor for Technical Ideas` and `Instruction Content, Not an Image Service`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Lenis Scroll Runtime` and `Sampled Telemetry with disableTelemetry`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Paywall Taxonomy (free/freemium/paid/unknown)` connect `3D Characters and Animation` to `Tool Doc Template`, `Agents and MCP Index`?**
  _High betweenness centrality (0.354) - this node is a cross-community bridge._
- **Why does `Tool Doc Frontmatter Key Set` connect `Tool Doc Template` to `Design CLI Spec`, `3D Characters and Animation`?**
  _High betweenness centrality (0.330) - this node is a cross-community bridge._
- **Why does `Tool Doc Template` connect `Design CLI Spec` to `Tool Doc Template`, `Release Architecture Spec`?**
  _High betweenness centrality (0.328) - this node is a cross-community bridge._
- **Are the 15 inferred relationships involving `shadcn/ui` (e.g. with `Fancy Components` and `Float UI`) actually correct?**
  _`shadcn/ui` has 15 INFERRED edges - model-reasoned connections that need verification._