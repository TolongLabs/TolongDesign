# Collections

TolongLabs' own design code. The rest of this repo documents other people's
tools in `catalogue/tools/`. A collection is something we built and own. It
ships with its source, tests, previews and an agent skill, and has a catalogue
doc so `tolongdesign search` returns it next to third-party options.

| Collection                             | What it is                                                                                                 | Catalogue doc                                                                |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [line-art](./line-art/README.md)       | Animated ink-on-paper SVG: solved walk/run/trot gaits, rig + costume parts, line boil, SVG/GIF export      | [tolong-line-art](../catalogue/tools/motion/tolong-line-art.md)              |
| [agent-video](./agent-video/README.md) | Remotion kit and five launch-film templates as data, plus 155 teardowns of snapcn templates and components | [tolong-agent-video](../catalogue/tools/video-capture/tolong-agent-video.md) |

## Layout of a collection

```
collections/<name>/
  README.md        what it is, previews, API, commands
  package.json     private, no version pinning at the root: demo, previews, typecheck, test
  src/             the library (dependency-free where possible)
  test/            bun tests, run by the root `bun test`
  demo/            a live page and the scenes it shows
  scripts/         generators (previews, exports)
  media/           generated previews, committed (our own output only)
  knowledge/       optional: teardowns and research the collection was built from
  tsconfig.json    strict typecheck for the collection
```

Every collection is its own package and uses the same script names: `demo`,
`previews`, `typecheck` and `test`. Extras are allowed (`render`, `knowledge`).
Run one with `bun run --cwd collections/<name> <script>`; the root
`package.json` names no collection.

A collection that needs runtime dependencies (agent-video needs Remotion)
installs them with `bun install --cwd collections/<name>`; its tests that run
under the root `bun test` must import only dependency-free modules.

Rules: no third-party assets, generated media only from our own code, and a
catalogue doc in `catalogue/tools/<section>/` registered in
`catalogue/catalogue.json`.
