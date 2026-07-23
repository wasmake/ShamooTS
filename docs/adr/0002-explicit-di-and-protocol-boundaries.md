# ADR 0002: Explicit DI metadata and strict protocol boundaries

- Status: accepted
- Date: 2026-07-23

## Context

The Java host and TypeScript runtime require one reject-by-default plugin descriptor. Dependency injection also needs compiler-generated dependency information without making runtime behavior depend on TypeScript source text or decorator reflection.

## Decision

Protocol `1.0` uses strict Zod parsing, pinned semver validation, a canonical JSON schema, and golden JSON fixtures. Compatibility negotiation returns all actionable protocol, runtime, API, platform, Minecraft, and capability failures.

DI metadata is passed explicitly in provider definitions. Plugin containers own all registrations and caches. Modules enforce import/export visibility, and global modules remain global only inside that owner container. Invocation scopes are explicit children with scope-specific caches and context. Capturing shorter-lived values is rejected.

## Consequences

Generated bindings can target small stable interfaces and Java can test the same JSON fixtures. Runtime code never parses constructor text. Plugin roots cannot accidentally leak singleton or global values to one another.

Callers must provide metadata until compiler/decorator phases exist. Circular proxy support is intentionally limited to deferred object access. Host capability enforcement and transport remain separate responsibilities.
