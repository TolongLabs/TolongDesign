# Contributing To TolongDesign

Branch from `main` as `<type>/<short-topic>`, commit with a conventional message
scoped by section, and open a pull request for review. Small doc fixes can go
straight to `main`.

```bash
# docs(icons): refresh lucide pricing
# chore(scripts): add --stack filter to find
```

Scope, layout, authoring rules and commands live in [AGENTS.md](../AGENTS.md);
follow them. In short: edit source docs, then run `bun run index`,
`bun run check` and `bun run format` before committing.

## Skill Mirrors

`skills/` is the single source for agent skills. `.claude/skills` and
`.agents/skills` are directory symlinks to `../skills`, one per agent harness.
On Git for Windows, enable `core.symlinks=true` so the mirrors resolve instead
of checking out as plain files.
