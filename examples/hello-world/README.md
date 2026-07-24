# Hello world

A minimal deployable Paper plugin using Shamoo's compiler-discovered lifecycle and
platform entrypoint APIs. Both the Paper entrypoint and plugin component emit lifecycle
messages so a successful load and shutdown are visible in the Runtime log.

```sh
pnpm typecheck
pnpm build
```

`pnpm build` writes the Paper bundle and compiler metadata to `dist/`. `pnpm deploy` regenerates the
checked-in installation under `deployment/paper`.

## Ready-to-run

Drag [`deployment/paper/hello-world`](deployment/paper/hello-world) into
`<paper-server>/plugins/ShamooRuntime/plugins`. Restart the server or let ShamooRuntime's watcher
discover it. Run `pnpm deploy` here to regenerate the checked-in installation.
