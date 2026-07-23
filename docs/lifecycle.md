# Lifecycle runtime

`@shamoo/lifecycle` defines `OnPluginLoad`, `OnPluginEnable`, `OnPluginReady`, `OnPluginDrain`,
`OnPluginDisable`, and `OnPluginUnload`, together with the corresponding compiler decorators.

The canonical startup sequence is `load`, `enable`, then `ready`. Shutdown is `drain`, `disable`,
then `unload`. `LifecycleExecutor.execute(stage)` is idempotent. Within a stage, hooks sort by
explicit order, component ID, then method name. Disable and unload use the reverse of that order.
All cleanup hooks run even when one fails; `LifecycleAggregateError.errors` retains each structured
`LifecycleError`.

Stages must be requested in canonical order. Concurrent requests are serialized, and repeated
requests share the first result. Cleanup only visits components that successfully completed at
least one startup hook, so partial startup does not call hooks on components that were never
reached. `OnReload` is intentionally not declared: Shamoo has no hot-reload lifecycle phase.

Method parameters are represented by `RuntimeParameter`. DI dependencies use the container's full
optional, multi, lazy, named, and qualified resolution rules. A `contextKey` of `lifecycle` injects
the stage and `AbortSignal`. `timeout` aborts that signal and rejects with a wrapped
`LifecycleTimeoutError`; hook code must observe the signal to stop its own work. A timed-out hook
continues to own its lifecycle slot until its underlying work settles, preventing a later stage
from overlapping it. Timeouts include eager initialization and lifecycle method DI resolution.

`loadRuntimeMetadata` is the boundary from compiler JSON to executable descriptors. It validates
the complete manifest shape, maps only recognized lifecycle/invocation decorator names, and
delegates component/token identity to an explicit resolver. The resolver must verify each method
against compiler-generated executable bindings; manifest method names alone are never authority
to access a component property. Decorator arguments and unknown metadata properties are never
evaluated.

Container eager initialization runs before load hooks. Both container initialization and lifecycle
stages are idempotent, preventing duplicate eager provider or module hook calls.
