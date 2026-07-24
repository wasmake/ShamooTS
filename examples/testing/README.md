# Testing

This example uses `@shamoo/testing` to create a deterministic Paper platform descriptor and uses
the production `LifecycleExecutor` with an explicit `Container` and lifecycle method metadata.
Vitest verifies capabilities, injected lifecycle dependencies, canonical stage order, and cleanup.

```sh
pnpm --filter @shamoo-examples/testing typecheck
pnpm --filter @shamoo-examples/testing test
```

`@shamoo/testing` does not simulate a Paper server or Velocity proxy. Runtime behavior is tested by
composing the public platform, DI, and lifecycle contracts directly.
