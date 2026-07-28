# Testing

This example uses `@shamoo/testing` to create a deterministic Paper platform descriptor and uses
the production `LifecycleExecutor` with an explicit `Container` and lifecycle method metadata.
Vitest verifies capabilities, injected lifecycle dependencies, canonical stage order, and cleanup.

> **Source-only demonstration:** this is a test fixture, not a server plugin, and is not included in
> the ready-to-run release archives.

```sh
pnpm --filter @shamoo/example-testing typecheck
pnpm --filter @shamoo/example-testing test
```

`@shamoo/testing` does not simulate a Paper server or Velocity proxy. Runtime behavior is tested by
composing the public platform, DI, and lifecycle contracts directly.
