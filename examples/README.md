# Examples

ShamooTS includes deployable server plugins and source-only demonstrations. Release candidates
attach one ready-to-run archive for each supported platform of every deployable example.

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

Download the archive matching the example and platform from the latest GitHub release. Extract it
directly into ShamooRuntime's watched root:

- Paper: `<server>/plugins/ShamooRuntime/plugins`
- Velocity: `<server>/plugins/shamooruntime/plugins`

The archive already contains the installation directory, descriptor, compiler metadata, bundle,
and source map. Do not place it in the server's general `plugins` directory. ShamooRuntime itself
must already be installed there.

Build all installations locally with `pnpm examples:build`. Generated directories are written to
`examples/compiled/paper` and `examples/compiled/velocity` and can be copied to the corresponding
watched root without further compilation.

## Source-only demonstrations

These examples intentionally do not produce server archives because they demonstrate contracts
that are not currently wired as standalone Runtime plugins:

- [`cross-plugin-services`](cross-plugin-services)
- [`custom-events`](custom-events)
- [`hot-reload`](hot-reload)
- [`proxy-routing`](proxy-routing)
- [`testing`](testing)

Their READMEs describe the missing runtime boundary and how to run their tests.
