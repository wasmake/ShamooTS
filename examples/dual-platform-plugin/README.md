# Dual-platform plugin

One platform-neutral plugin declaration compiled into independent Paper and Velocity bundles.
`src/plugin.ts` contains no platform imports, so `shamooc` assigns it to the common reachability
graph. The two thin entrypoints select the host lifecycle names without sharing platform APIs.

## Structure

- `src/plugin.ts` provides common lifecycle and command behavior.
- `src/paper.ts` exports the Paper entrypoint.
- `src/velocity.ts` exports the Velocity entrypoint.
- `test/plugin.test.ts` verifies the shared behavior and both frozen entrypoint declarations.

The default entrypoint hooks intentionally accept no context because the current bundled runtime
adapter invokes them without one. Platform-specific code can be added behind the corresponding
entrypoint without making it reachable from the opposite bundle.

## Build

```sh
pnpm install
pnpm typecheck
pnpm test
pnpm build
```

## Ready-to-run

Download the archive for the server receiving the plugin:

- Paper: `shamoo-example-dual-platform-plugin-paper-<version>.tgz`
- Velocity: `shamoo-example-dual-platform-plugin-velocity-<version>.tgz`

Extract it into that server's ShamooRuntime watched root. Each archive is independent and already
contains the correct platform bundle; installing one does not install the example on both servers.
