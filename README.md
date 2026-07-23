# Shamoo

Shamoo is a TypeScript framework foundation for Minecraft plugins targeting Paper servers and Velocity proxies. Version `0.1.0-alpha.1` is **Phase 1**: it establishes package boundaries, platform contracts, host entrypoint declarations, protocol primitives, and strict repository tooling.

It does not yet provide a dependency injection container, decorator discovery, lifecycle execution, event or command registration, scheduling, configuration files, Java bridge generation, bundling, or runnable Minecraft plugins. Those capabilities remain explicitly phase-gated.

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

`pnpm check` formats, lints, typechecks, tests, builds every publishable package, and validates package manifests and generated declarations. `pnpm run docs` generates Markdown API documentation for all 14 public Phase 1 packages (`pnpm docs` is a reserved pnpm command).

## Public packages

| Package                                    | Phase 1 scope                                              |
| ------------------------------------------ | ---------------------------------------------------------- |
| `@shamoo/core`                             | Paper/Velocity kinds, capabilities, and branded identities |
| `@shamoo/common`                           | Shared types and typed base errors                         |
| `@shamoo/di`                               | Injection tokens and service identifiers; no container     |
| `@shamoo/config`                           | Source and decoder contracts; no file loader               |
| `@shamoo/testing`                          | Platform descriptors for contract tests                    |
| `@shamoo/platform`                         | Validated platform declarations and capability assertions  |
| `@shamoo/paper`, `@shamoo/paper-raw`       | Paper entrypoint declarations and opaque bridge types      |
| `@shamoo/velocity`, `@shamoo/velocity-raw` | Velocity entrypoint declarations and opaque bridge types   |
| `@shamoo/runtime-protocol`                 | Versioned host/runtime handshake primitives                |
| `@shamoo/compiler`                         | Compilation request validation; no compiler pipeline       |
| `@shamoo/cli`                              | Command parsing contract; no installed executable          |
| `@shamoo/create-plugin`                    | Plugin project declarations; no interactive generator      |

Required future package and example scopes are present with README files that identify their implementation gates. See [architecture](docs/architecture.md) and the pinned [Winter compatibility audit](docs/winter-compatibility.md).

## License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
