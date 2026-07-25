# Complete Velocity plugin

A complete compiler-discovered Velocity plugin with startup and shutdown lifecycle hooks,
generated Velocity event decorators, and a command. Runtime callbacks provide data-only
`{ type }` DTOs rather than Java event proxies. The component deliberately has no constructor
dependencies because the current bundled runtime adapter can only instantiate zero-constructor
components.

## Structure

- `src/plugin.ts` contains the common Shamoo declaration and behavior.
- `src/velocity.ts` is the import-only Velocity source graph root.
- `test/plugin.test.ts` exercises lifecycle, event, and command behavior without a server.

The runtime adapter discovers and constructs the exported decorated class directly.

## Commands

`/velocity-status` returns an event-derived player count. Because callback DTOs contain no player
identity, the example tracks post-login and disconnect counts rather than usernames.

## Build

```sh
pnpm install
pnpm typecheck
pnpm test
pnpm build
```

## Ready-to-run

Use the checked-in
[`examples/compiled/complete-velocity-plugin`](../compiled/complete-velocity-plugin) installation,
or download `shamoo-example-complete-velocity-plugin-<version>.tgz` from the GitHub release. Copy or
extract it into `<velocity-server>/plugins/shamooruntime/plugins`, not Velocity's general `plugins`
directory.

For a local source build, install the three files generated in `dist/` using the
server's artifact-management workflow.
