# Commands

Compiler metadata examples for command, sender, argument, option, and guard declarations.
`/shamoo-ping` is a parameter-free path that works with the current adapter, while
`/shamoo-greet` records richer metadata and defensively handles absent positional values.

```sh
pnpm typecheck
pnpm build
```

Current limitation: the bundle adapter registers the first string passed to `@Command`
but does not yet resolve `@Sender`, `@Argument`, or `@Option`, and it does not execute
`@UseGuards`. It forwards values supplied by the host positionally. The declarations in
this example are therefore useful compiler metadata without claiming the full invocation
pipeline is active.
