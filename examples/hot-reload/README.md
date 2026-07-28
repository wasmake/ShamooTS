# Hot reload

Shamoo has no in-place `OnReload` lifecycle stage. This example instead models reload as explicit
replacement of a complete plugin generation. Each generation owns its invocation runtime and
service registration; shutdown drains active work, closes externally visible registrations, then
disposes the runtime and DI container.

> **Source-only demonstration:** this lifecycle simulation is not a standalone server plugin and
> is not included in the ready-to-run release archives.

The consumer keeps one stable service proxy. Registering the replacement before the old generation
finishes draining provides a clean handoff, and the old generation's registration handle cannot
remove the new provider.

```sh
pnpm --filter @shamoo/example-hot-reload typecheck
pnpm --filter @shamoo/example-hot-reload test
```

For Runtime development, `shamoo dev` performs build-only watching. It should not be described as
JavaScript module hot replacement or state preservation.
