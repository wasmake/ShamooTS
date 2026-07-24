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
