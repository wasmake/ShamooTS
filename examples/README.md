# Examples

ShamooTS includes deployable server plugins and source-only demonstrations. Every deployable
example contains an already compiled installation under its own `deployment` directory.

## Ready-to-run examples

| Example                                                | Platform           | Purpose                                          |
| ------------------------------------------------------ | ------------------ | ------------------------------------------------ |
| [`commands`](commands)                                 | Paper              | Commands and callback-scoped command context     |
| [`complete-paper-plugin`](complete-paper-plugin)       | Paper              | Lifecycle, events, commands, and scheduling      |
| [`complete-velocity-plugin`](complete-velocity-plugin) | Velocity           | Lifecycle, events, and proxy commands            |
| [`configuration`](configuration)                       | Paper              | Validated configuration decoding                 |
| [`dual-platform-plugin`](dual-platform-plugin)         | Paper and Velocity | One common plugin with separate platform bundles |
| [`economy`](economy)                                   | Paper              | In-memory balances, payments, and item selling   |
| [`folia`](folia)                                       | Paper/Folia        | Region-owned and entity-owned scheduling helpers |
| [`hello-world`](hello-world)                           | Paper              | Minimal lifecycle plugin                         |

Open an example's `deployment/<platform>` directory and copy the plugin directory inside it directly
into ShamooRuntime's watched root:

- Paper: `<server>/plugins/ShamooRuntime/plugins`
- Velocity: `<server>/plugins/shamooruntime/plugins`

The checked-in plugin directory already contains its descriptor, compiler metadata, bundle, and
source map. Do not place it in the server's general `plugins` directory. ShamooRuntime itself must
already be installed there.

Run `pnpm deploy` inside one deployable example to regenerate its local installation, or run
`pnpm examples:build` from the repository root to regenerate all of them. Release candidates also
provide the same installations as platform-specific archives.

## Source-only demonstrations

These examples intentionally do not produce server archives because they demonstrate contracts
that are not currently wired as standalone Runtime plugins:

- [`cross-plugin-services`](cross-plugin-services)
- [`custom-events`](custom-events)
- [`hot-reload`](hot-reload)
- [`proxy-routing`](proxy-routing)
- [`testing`](testing)

Their READMEs describe the missing runtime boundary and how to run their tests.
