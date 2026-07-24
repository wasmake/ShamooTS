# Shamoo

Shamoo is a TypeScript framework for Minecraft plugins targeting Paper servers and Velocity proxies. The current development branch includes deterministic generated platform bindings, exact-version Paper NMS and packet surfaces, lifecycle orchestration, compiler metadata generation, and isolated platform bundles.

`shamooc` discovers components, modules, injection, lifecycle, events, commands, tasks, packets, and invocation-pipeline declarations without legacy reflected type metadata. Paper, Velocity, NMS, and packet declarations are generated from checksum-verified canonical JVM scanner models. Coverage is measured against those complete pinned models; small fixtures are used only by parser unit tests.

## Requirements

- Node.js 22 or newer
- pnpm 10 or newer (the repository pins pnpm 11.15.0)

## Development

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm codegen:check
pnpm run docs
```

`pnpm check` formats, lints, typechecks, tests, builds every publishable package, and validates package manifests and generated declarations. `pnpm run docs` generates Markdown API documentation for all public packages (`pnpm docs` is a reserved pnpm command).

The complete generated declaration compile may require `NODE_OPTIONS=--max-old-space-size=8192 pnpm check`.

## Ready-to-run examples

Each deployable example includes a checked-in Paper or Velocity installation that can be copied
directly into ShamooRuntime's watched plugin root. See the [examples catalog](examples) for platform
support, repository paths, regeneration commands, and clearly identified source-only demonstrations.

## Public packages

| Package                                    | Current scope                                                    |
| ------------------------------------------ | ---------------------------------------------------------------- |
| `@shamoo/core`                             | Paper/Velocity kinds, capabilities, and branded identities       |
| `@shamoo/common`                           | Shared types and typed base errors                               |
| `@shamoo/communication`                    | Versioned services, events, reload policy, typed transport       |
| `@shamoo/di`                               | Plugin-local DI containers, scopes, providers, and modules       |
| `@shamoo/config`                           | Source and decoder contracts; no file loader                     |
| `@shamoo/testing`                          | Platform descriptors for contract tests                          |
| `@shamoo/platform`                         | Validated platform declarations and capability assertions        |
| `@shamoo/paper`, `@shamoo/paper-raw`       | Generated Paper raw API and idiomatic platform contracts         |
| `@shamoo/paper-nms`, `paper-packets`       | Exact-version Paper-only NMS and packet declarations             |
| `@shamoo/velocity`, `@shamoo/velocity-raw` | Generated Velocity raw API and async platform contracts          |
| `@shamoo/*-codegen`, `platform-codegen`    | Scanner model validation, generation, sync, diff, coverage       |
| `@shamoo/runtime-protocol`                 | Strict descriptor parsing and compatibility negotiation          |
| `@shamoo/compiler`                         | `shamooc`, TypeScript discovery, diagnostics, and metadata       |
| `@shamoo/metadata`, `@shamoo/reflection`   | Canonical metadata and explicit declaration access               |
| `@shamoo/decorators`                       | Class, method, parameter, and property declarations              |
| `@shamoo/lifecycle`, `@shamoo/conditions`  | Lifecycle execution, invocation runtime, and conditions          |
| `@shamoo/events`, `@shamoo/commands`       | Event and command declaration contracts                          |
| `@shamoo/scheduler`                        | Lifecycle-owned task declaration contracts                       |
| `@shamoo/interceptors`, `guards`, `pipes`  | Invocation pipeline contracts                                    |
| `@shamoo/filters`, `@shamoo/validation`    | Error and input validation contracts                             |
| `@shamoo/bundler`                          | Separate source-mapped Paper and Velocity ESM bundles            |
| `@shamoo/cli`                              | Installed build, deploy, dev, doctor, migration, and codegen CLI |
| `@shamoo/create-plugin`                    | Safe non-interactive plugin project scaffolding                  |

See the [platform bindings guide](docs/platform-bindings.md), [compatibility matrix](docs/compatibility.md), [plugin communication guide](docs/communication.md), [lifecycle guide](docs/lifecycle.md), [pipeline guide](docs/invocation-pipeline.md), [compiler guide](docs/compiler.md), [decorator reference](docs/decorators.md), [release guide](docs/releases.md), and [architecture](docs/architecture.md).

## License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
