# Commands

Runnable Paper commands using the callback-scoped, data-only `PaperCommandContext`.

- `/shamoo-ping` replies with `pong`.
- `/shamoo-greet [name] [--uppercase]` greets the requested name or the sender.

```sh
pnpm typecheck
pnpm build
```

The Runtime provides sender identity, tokenized arguments, feedback, cached player lookup,
main-hand inspection, and atomic main-hand removal without exposing native Java objects.
Parameter decorators and the guard/pipe/interceptor invocation pipeline remain separate from
this direct command context.

## Ready-to-run

Download `shamoo-example-commands-paper-<version>.tgz` from the GitHub release and extract it into
`<paper-server>/plugins/ShamooRuntime/plugins`. The archive is already compiled; do not place it in
Paper's general `plugins` directory.
