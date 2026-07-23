# Contributing

## Development setup

Use Node.js 22 or newer and the pnpm version declared in `package.json`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm check
```

Keep changes focused and add tests for observable behavior. Public package imports must use package entry points, never another package's `src/` directory. Runtime-neutral packages must not read host globals.

## Changesets

Changes to a publishable package require `pnpm changeset`. Select affected packages and describe consumer-visible behavior. Documentation, CI, examples, and private tooling changes do not require a changeset unless they alter a public package's output.

## Pull requests

- Explain the problem and the chosen boundary.
- Update tests and compatibility documentation when behavior changes.
- Run `pnpm check` locally.
- Do not commit generated `dist`, coverage, or TypeDoc output.
- Treat generated declaration changes as public API review items and run `pnpm api:check`.

By contributing, you agree that your contribution is licensed under Apache-2.0 and that you will follow the [Code of Conduct](CODE_OF_CONDUCT.md).
