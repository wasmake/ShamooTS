# Dual-platform plugin

One platform-neutral plugin declaration compiled into a single universal Paper and Velocity
installation. `src/plugin.ts` contains no platform imports, so `shamooc` assigns it to both lazy
platform graphs.

## Structure

- `src/plugin.ts` provides common lifecycle and command behavior.
- `src/paper.ts` is the import-only Paper source graph root.
- `src/velocity.ts` is the import-only Velocity source graph root.
- `test/plugin.test.ts` verifies the shared behavior.

Platform-specific components can be imported by only the corresponding source root without making
them reachable from the opposite lazy graph.

## Build

```sh
pnpm install
pnpm typecheck
pnpm test
pnpm build
```

## Ready-to-run

Use the checked-in
[`examples/compiled/dual-platform-plugin`](../compiled/dual-platform-plugin) installation, or
download `shamoo-example-dual-platform-plugin-<version>.tgz` from the GitHub release. The exact same
three-file artifact can be installed in either the Paper or Velocity ShamooRuntime watched root.
Copy it to both hosts if the example should run on both.
