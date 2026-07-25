# ADR 0003: Compiler-owned metadata and universal bundles

## Status

Accepted

## Context

Runtime reflection cannot preserve interface identity, and constructor source
parsing is fragile. A universal artifact must not evaluate the inactive platform
source graph.

## Decision

The TypeScript compiler owns discovery and returns canonical compiler metadata.
Decorator identity comes from imports and TypeScript's decorator AST. Concrete
classes may be inferred by the checker; erased types require explicit DI tokens.
Source locations and import paths are retained in diagnostics. Entry reachability
is platform-specific. A pinned esbuild API invocation emits one ESM artifact with
lazy platform registries. Import policy remains compiler-authoritative.

## Consequences

Builds are deterministic and runtime startup does not inspect TypeScript source or
legacy design metadata. Decorator and metadata schema changes require compiler
versioning. Parameter decorators currently require TypeScript's legacy syntax
mode because the standard proposal does not define them. This decision does not
provide generated Java APIs or host registration.
