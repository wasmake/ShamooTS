# Shamoo

Shamoo is a TypeScript framework foundation for Minecraft plugins targeting Paper servers and Velocity proxies. The current development branch adds production lifecycle orchestration, scoped invocation pipelines, compiler metadata generation, and controlled platform bundles to the protocol and dependency-injection foundation.

`shamooc` discovers components, modules, injection, lifecycle, events, commands, tasks, and invocation-pipeline declarations without legacy reflected type metadata. The lifecycle runtime validates and executes that metadata with DI, cancellation, draining, and deterministic cleanup. It does not register or dispatch host events, commands, or scheduled tasks. The bundler produces separate Paper and Velocity ESM artifacts; platform host registration, generated Paper/Velocity Java APIs, configuration file loading, and runnable packaged Minecraft plugins remain later-phase work.

## Requirements

- Node.js 22 or newer
- pnpm 10 or newer (the repository pins pnpm 11.15.0)

## Development

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm run docs
```

`pnpm check` formats, lints, typechecks, tests, builds every publishable package, and validates package manifests and generated declarations. `pnpm run docs` generates Markdown API documentation for all public packages (`pnpm docs` is a reserved pnpm command).

## Public packages

| Package                                    | Current scope                                              |
| ------------------------------------------ | ---------------------------------------------------------- |
| `@shamoo/core`                             | Paper/Velocity kinds, capabilities, and branded identities |
| `@shamoo/common`                           | Shared types and typed base errors                         |
| `@shamoo/di`                               | Plugin-local DI containers, scopes, providers, and modules |
| `@shamoo/config`                           | Source and decoder contracts; no file loader               |
| `@shamoo/testing`                          | Platform descriptors for contract tests                    |
| `@shamoo/platform`                         | Validated platform declarations and capability assertions  |
| `@shamoo/paper`, `@shamoo/paper-raw`       | Paper entrypoint declarations and opaque bridge types      |
| `@shamoo/velocity`, `@shamoo/velocity-raw` | Velocity entrypoint declarations and opaque bridge types   |
| `@shamoo/runtime-protocol`                 | Strict descriptor parsing and compatibility negotiation    |
| `@shamoo/compiler`                         | `shamooc`, TypeScript discovery, diagnostics, and metadata |
| `@shamoo/metadata`, `@shamoo/reflection`   | Canonical metadata and explicit declaration access         |
| `@shamoo/decorators`                       | Class, method, parameter, and property declarations        |
| `@shamoo/lifecycle`, `@shamoo/conditions`  | Lifecycle execution, invocation runtime, and conditions    |
| `@shamoo/events`, `@shamoo/commands`       | Event and command declaration contracts                    |
| `@shamoo/scheduler`                        | Lifecycle-owned task declaration contracts                 |
| `@shamoo/interceptors`, `guards`, `pipes`  | Invocation pipeline contracts                              |
| `@shamoo/filters`, `@shamoo/validation`    | Error and input validation contracts                       |
| `@shamoo/bundler`                          | Separate source-mapped Paper and Velocity ESM bundles      |
| `@shamoo/cli`                              | Command parsing contract; no installed executable          |
| `@shamoo/create-plugin`                    | Plugin project declarations; no interactive generator      |

See the [lifecycle guide](docs/lifecycle.md), [pipeline guide](docs/invocation-pipeline.md), [compiler guide](docs/compiler.md), [decorator reference](docs/decorators.md), [architecture](docs/architecture.md), and pinned [Winter compatibility audit](docs/winter-compatibility.md).

## License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
