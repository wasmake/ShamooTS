# Complete Paper plugin

A deployable Paper example combining compiler-discovered lifecycle methods, a generated
Paper event decorator, command registration, and a lifecycle-owned scheduled task.
It intentionally uses no constructor injection because the current bundle adapter only
constructs zero-dependency components.

```sh
pnpm typecheck
pnpm build
```

The `/shamoo-status` handler reports status to the Runtime log, joining players receive
a message, and the scheduled heartbeat records task execution. The current adapter
registers scheduled declarations as global work and does not interpret delay metadata;
use the `folia` example for explicit scheduler ownership.

## Ready-to-run

Download `shamoo-example-complete-paper-plugin-paper-<version>.tgz` from the GitHub release and
extract it into `<paper-server>/plugins/ShamooRuntime/plugins`. The archive includes the complete
compiled Runtime installation directory.
