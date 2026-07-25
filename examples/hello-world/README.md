# Hello world

A minimal Paper plugin using Shamoo's compiler-discovered lifecycle. `src/plugin.ts` exports the
plugin component, while `src/ready.ts` exports a second zero-constructor `@Component` with a distinct
`@OnReady` stage. The import-only Paper source root includes both files in one multi-class bundle.

```sh
pnpm typecheck
pnpm build
```

`pnpm build` writes `index.js`, `index.js.map`, and `shamoo-plugin.json` to `dist/`.
`shamoo dev` watches and rebuilds the same directory without copying it.

## Ready-to-run

Use the checked-in [`examples/compiled/hello-world`](../compiled/hello-world) installation, or
download `shamoo-example-hello-world-<version>.tgz` from the GitHub release. Copy or extract it into
`<paper-server>/plugins/ShamooRuntime/plugins`. Restart the server or let ShamooRuntime's watcher
discover the new installation directory.
