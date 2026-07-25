# Examples

ShamooTS includes runnable server plugins and source-only demonstrations. Eight canonical universal
installations are checked in under [`compiled`](compiled), and release candidates attach one
ready-to-run archive for each runnable example.

## Ready-to-run examples

| Example                                                | Platform           | Purpose                                          |
| ------------------------------------------------------ | ------------------ | ------------------------------------------------ |
| [`commands`](commands)                                 | Paper              | Commands and callback-scoped command context     |
| [`complete-paper-plugin`](complete-paper-plugin)       | Paper              | Lifecycle, events, commands, and scheduling      |
| [`complete-velocity-plugin`](complete-velocity-plugin) | Velocity           | Lifecycle, events, and proxy commands            |
| [`configuration`](configuration)                       | Paper              | Validated configuration decoding                 |
| [`dual-platform-plugin`](dual-platform-plugin)         | Paper and Velocity | One common plugin with lazy platform graphs      |
| [`economy`](economy)                                   | Paper              | In-memory balances, payments, and item selling   |
| [`folia`](folia)                                       | Paper/Folia        | Region-owned and entity-owned scheduling helpers |
| [`hello-world`](hello-world)                           | Paper              | Minimal lifecycle plugin                         |

Download `shamoo-example-<example>-<version>.tgz` from the latest GitHub release, or use the matching
checked-in `examples/compiled/<plugin-id>` directory. Extract or copy the complete installation into
ShamooRuntime's watched root:

- Paper: `<server>/plugins/ShamooRuntime/plugins`
- Velocity: `<server>/plugins/shamooruntime/plugins`

Each archive contains one installation directory with `index.js`, `index.js.map`, and
`shamoo-plugin.json`. Do not place it in the server's general `plugins` directory. ShamooRuntime
itself must already be installed there. The dual-platform example uses the same artifact on Paper
and Velocity; install that directory into each host where it should run.

Build all installations locally with `pnpm examples:build`. The command regenerates the eight
checked-in three-file directories under `examples/compiled`.

## Source-only demonstrations

These examples intentionally do not produce server archives because they demonstrate contracts
that are not currently wired as standalone Runtime plugins:

- [`cross-plugin-services`](cross-plugin-services)
- [`custom-events`](custom-events)
- [`hot-reload`](hot-reload)
- [`proxy-routing`](proxy-routing)
- [`testing`](testing)

Their READMEs describe the missing runtime boundary and how to run their tests.
