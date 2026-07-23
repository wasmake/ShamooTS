# ADR 0003: Compiler-owned metadata and platform bundles

## Status

Accepted

## Context

Runtime reflection cannot preserve interface identity, constructor source parsing
is fragile, and one combined artifact can silently expose Paper APIs to Velocity
or the reverse.

## Decision

The TypeScript compiler owns discovery and emits a versioned canonical manifest.
Decorator identity comes from imports and TypeScript's decorator AST. Concrete
classes may be inferred by the checker; erased types require explicit DI tokens.
Source locations and import paths are retained in diagnostics. Entry reachability
is platform-specific, and a pinned esbuild API invocation emits independent ESM
artifacts with a second platform-boundary check.

## Consequences

Builds are deterministic and runtime startup does not inspect TypeScript source or
legacy design metadata. Decorator and metadata schema changes require compiler
versioning. Parameter decorators currently require TypeScript's legacy syntax
mode because the standard proposal does not define them. This decision does not
provide generated Java APIs or host registration.
