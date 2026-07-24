# Custom events

This example defines a semver-versioned custom event with a bounded, runtime-validating JSON
codec. `VersionedEventBus` only delivers events to compatible subscribers, awaits asynchronous
handlers, and returns closeable subscription ownership.

> **Source-only demonstration:** this example has no server entrypoint and is not included in the
> ready-to-run release archives.

```sh
pnpm --filter @shamoo-examples/custom-events typecheck
pnpm --filter @shamoo-examples/custom-events test
```

The bus is in-process and platform-neutral. Host-backed contract events currently require an
explicit Paper or Velocity host facade adapter; compiler communication event metadata is not
automatically wired by the bundled TypeScript runtime adapter.
