# Collections

TolongLabs' own design code. The rest of this repo documents other people's
tools in `docs/design/`. A collection is something we built and own. It ships
with its source, tests, previews and an agent skill, and has a catalogue doc so
`bun run find` returns it next to third-party options.

| Collection                       | What it is                                                                                            | Catalogue doc                                               |
| -------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [line-art](./line-art/README.md) | Animated ink-on-paper SVG: solved walk/run/trot gaits, rig + costume parts, line boil, SVG/GIF export | [tolong-line-art](../docs/design/motion/tolong-line-art.md) |

## Layout of a collection

```
collections/<name>/
  README.md        what it is, previews, API, commands
  src/             the library (dependency-free where possible)
  test/            bun tests, run by the root `bun test`
  demo/            a live page and the scenes it shows
  scripts/         generators (previews, exports)
  media/           generated previews, committed (our own output only)
  tsconfig.json    strict typecheck for the collection
```

Rules: no third-party assets, generated media only from our own code, and a
catalogue doc in `docs/design/<section>/` registered in `data/catalogue.json`.
