# Hello world

A minimal deployable Paper plugin using Shamoo's compiler-discovered lifecycle and
platform entrypoint APIs. Both the Paper entrypoint and plugin component emit lifecycle
messages so a successful load and shutdown are visible in the Runtime log.

```sh
pnpm typecheck
pnpm build
```

`pnpm build` writes the Paper bundle and compiler metadata to `dist/`. Configure a
`deploy.paper` watched-root path in `shamoo.config.json` before running `shamoo deploy`
or `shamoo dev`.

## Ready-to-run

Download `shamoo-example-hello-world-paper-<version>.tgz` from the GitHub release and extract it
into `<paper-server>/plugins/ShamooRuntime/plugins`. Restart the server or let ShamooRuntime's
watcher discover the new installation directory.
