# ADR 0004: Metadata-driven lifecycle and invocation runtime

## Status

Accepted

## Context

Compiler discovery alone does not define safe execution. Lifecycle hooks and handlers need the same
DI semantics, deterministic cleanup, cancellation, scoped resources, and a boundary that does not
turn metadata JSON into executable input.

## Decision

The lifecycle package owns orchestration and the shared invocation runtime. Compiler manifests are
adapted through a versioned, whitelist-based loader and explicit component/token resolvers. Each
invocation creates one event, command, or task child container and disposes it exactly once.
Guards, pipes, validators, interceptors, and filters remain source-bearing packages with standalone
composition functions. Draining and active-call accounting are runtime concerns; platform dispatch
is not.

## Consequences

Lifecycle and handler behavior is testable without a Minecraft host, cleanup remains reliable after
partial failure, and metadata cannot call arbitrary properties. Platform adapters still need to
register host listeners and translate host payloads into invocation descriptors.
