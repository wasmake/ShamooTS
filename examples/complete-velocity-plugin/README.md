# Complete Velocity plugin

A complete compiler-discovered Velocity plugin with startup and shutdown lifecycle hooks, typed
generated Velocity events, and a command. The component deliberately has no constructor
dependencies because the current bundled runtime adapter can only instantiate zero-constructor
components.

## Structure

- `src/plugin.ts` contains the common Shamoo declaration and behavior.
- `src/velocity.ts` is the Velocity bundle entrypoint.
- `test/plugin.test.ts` exercises lifecycle, event, and command behavior without a server.

The entrypoint uses zero-argument hooks. Although `defineVelocityEntrypoint` accepts a
`VelocityEntrypointContext`, the current runtime adapter does not pass that context to bundled
entrypoints.

## Commands

`/velocity-status` returns the number of players observed between post-login and disconnect
events.

## Build

```sh
pnpm install
pnpm typecheck
pnpm test
pnpm build
```

Deploy the generated installation with `pnpm shamoo deploy --velocity <watched-root>`. The target
is ShamooRuntime's watched plugin directory, not Velocity's general `plugins` directory.
