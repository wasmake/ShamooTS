# Invocation pipeline

`InvocationRuntime.invoke()` is the common execution path for event, command, task, and service
methods. Event, command, and task calls create their matching DI scope. Service calls must declare
which of those scopes applies; the runtime never silently chooses one.

The pipeline order is:

1. Create an invocation ID, preserve or create a correlation ID, and create one child DI scope.
2. Resolve context and DI parameters, then run each parameter's pipes and validators.
3. Evaluate guards in declaration order.
4. Enter interceptors in declaration order and unwind their result/error paths in reverse order.
5. Invoke the handler and apply optional result transformation.
6. Apply optional error transformation and exception filters.
7. Dispose the child scope exactly once on every completion path.

Parameter DI uses the declaring component's module as requester, preserving access to private
providers without exposing them at the plugin root. DI resolution, pipes, and validation all run
inside the timeout and exception-filter boundary.

The invocation context exposes immutable arguments and attributes plus an `AbortSignal`.
Interceptor `proceed()` is single-use. A false guard raises `GuardRejectedError`; validators collect
issues in `ValidationError`; filters may recover with a result or throw for the next filter.

`maxActive` rejects excess work with `backpressure`. `drain()` immediately rejects new calls and
waits for the active count to reach zero, optionally raising `DrainTimeoutError`. Invocation
timeouts abort the call signal and raise `InvocationTimeoutError`. Timeout reporting does not
dispose the scope or decrement the active count early: ownership remains until the operation
settles or cooperatively observes its abort signal.

This runtime is platform-neutral. Paper/Velocity listener registration, command registration,
scheduler ownership, payload extraction, and host result delivery remain adapter work and are not
claimed as supported dispatch.
