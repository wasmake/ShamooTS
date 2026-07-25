# Commands

A deployable Paper command showcase built entirely from compiler-discovered, typed declarations.

## Try it

- `/shamoo-ping` or `/sping` returns a composed text component.
- `/shamoo-greet [player] [message...] [--uppercase|-u]` uses an exact online-player parser,
  player suggestions, an optional greedy message, a boolean option, and safe MiniMessage
  placeholders. Use `--` before a dash-prefixed positional value to end option parsing.
- `/shamoo-showcase menu` or `/shamoo-demo menu` opens a protected inventory containing
  MiniMessage, component, and translated legacy text. The chat response includes a callback limited
  to two uses and 60 seconds.
- `/shamoo-showcase grant <material> [amount] [--announce|-a]` grants a left/right actionable item.
  Material suggestions come from Paper and amount suggestions are static.

The showcase routes require a player with `shamoo.showcase`. Every route sharing the
`shamoo-showcase` root declares the same `shamoo-demo` alias, as required by the runtime.

## Verify and build

From this directory, or with the equivalent workspace filter from the repository root:

```sh
pnpm typecheck
pnpm build
```

`pnpm build` writes `index.js`, `index.js.map`, and `shamoo-plugin.json` to `dist/`. The runtime
receives immutable sender, parsed argument, and option data; native Bukkit and Adventure objects do
not enter plugin code. Every context operation is asynchronous and explicitly awaited. Its token
remains valid only until the command or action callback promise settles. Native dispatch ignores
decorated method return values, so responses and UI effects are explicit.

See the repository [command guide](../../docs/commands.md) and
[Paper rich text/UI guide](../../docs/paper-rich-text-ui.md) for the complete API and lifecycle
rules.

## Ready-to-run

Use the checked-in [`examples/compiled/commands`](../compiled/commands) installation, or download
`shamoo-example-commands-<version>.tgz` from the GitHub release. Copy or extract the complete
installation into `<paper-server>/plugins/ShamooRuntime/plugins`, not Paper's general `plugins`
directory.
