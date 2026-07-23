# Shamoo

Shamoo is a TypeScript framework foundation for Minecraft plugins targeting Paper servers and Velocity proxies. The current development branch adds the synchronized Phase 2 protocol and a substantial Phase 3 dependency-injection/module runtime to the Phase 1 package foundation.

It does not yet provide decorator/compiler discovery, event or command registration, scheduling, configuration files, Java bridge generation, bundling, or runnable Minecraft plugins. DI lifecycle methods are supported only through explicit generated metadata contracts.

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

`pnpm check` formats, lints, typechecks, tests, builds every publishable package, and validates package manifests and generated declarations. `pnpm run docs` generates Markdown API documentation for all 14 public packages (`pnpm docs` is a reserved pnpm command).

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
| `@shamoo/compiler`                         | Compilation request validation; no compiler pipeline       |
| `@shamoo/cli`                              | Command parsing contract; no installed executable          |
| `@shamoo/create-plugin`                    | Plugin project declarations; no interactive generator      |

Required future package and example scopes are present with README files that identify their implementation gates. See [architecture](docs/architecture.md) and the pinned [Winter compatibility audit](docs/winter-compatibility.md).

## License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
