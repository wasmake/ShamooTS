# Complete Paper plugin

A ready-to-install Paper example combining compiler-discovered lifecycle methods, a generated
Paper event decorator, command registration, and a lifecycle-owned scheduled task.
It intentionally uses no constructor injection because the current bundle adapter only
constructs zero-dependency components.

```sh
pnpm typecheck
pnpm build
```

The `/shamoo-status` handler reports status to the Runtime log. Runtime event callbacks are
data-only DTOs, so the join handler consumes `{ type, asynchronous }` rather than a Java event
proxy. The argument-free `@Scheduled()` declaration registers one immediate global task with no
timing options. Use the `folia` example for explicit scheduler ownership.

## Ready-to-run

Use the checked-in [`examples/compiled/complete-paper-plugin`](../compiled/complete-paper-plugin)
installation, or download `shamoo-example-complete-paper-plugin-<version>.tgz` from the GitHub
release. Copy or extract the complete installation into
`<paper-server>/plugins/ShamooRuntime/plugins`.
