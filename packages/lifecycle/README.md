# @shamoo/lifecycle

Production lifecycle orchestration and a common scoped invocation pipeline.

`LifecycleExecutor` consumes methods produced by `loadRuntimeMetadata`, resolves method parameters
through `@shamoo/di`, awaits hooks, enforces optional timeouts, and runs disable/unload hooks in
reverse deterministic order. Cleanup failures are aggregated rather than stopping later hooks.
Stages are ordered, idempotent, and serialized. Timeout abort signals report promptly while the
underlying hook retains its lifecycle slot until it settles.

`InvocationRuntime` provides event, command, task, and explicitly scoped service invocation. Every
call receives an ID, correlation ID, abort signal, and exactly one child DI scope. Guards, parameter
pipes and validators, interceptors, exception filters, and result/error transformations share one
pipeline. `drain()` rejects new work and waits for active calls; `maxActive` applies immediate
backpressure.
DI, pipes, and validation are inside the timeout/filter boundary, and timed-out calls retain their
scope and active accounting until the operation settles.

Platform adapters can submit compiled invocation descriptors to this runtime. Paper/Velocity event,
command, and scheduler registration or dispatch is not implemented by this package.
