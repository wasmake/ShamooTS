# Folia

Typed, executable helpers for region-owned and entity-owned Paper work. Call
`scheduleOwnedWork` with a host-provided `PaperScheduler`; the helper deliberately does
not claim that Shamoo currently exposes a scheduler through dependency injection.

```sh
pnpm typecheck
pnpm build
```

`cancelRegion`, `cancelEntity`, and `cancelAll` preserve each native
`ScheduledTask.cancel()` result. The two owners are cancelled independently rather than
being collapsed into one boolean. The deployable plugin component logs its lifecycle,
while platform integration is responsible for calling the helper with a real scheduler
and entity.
