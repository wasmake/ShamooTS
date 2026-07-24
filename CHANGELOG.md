# Changelog

All notable changes to publishable Shamoo packages will be documented here. The project follows [Semantic Versioning](https://semver.org/) and uses Changesets to produce package-specific release notes.

## Unreleased

## 0.1.0-rc.1 - 2026-07-24

### Added

- Protocol `1.0` common descriptor validation, canonical JSON schema, compatibility negotiation, structured errors, and cross-runtime golden fixture.
- Plugin-isolated DI containers with explicit metadata, provider forms, scopes, lifecycle/disposal, overrides, traces, and deterministic module graphs.
- DI and protocol architecture documentation and integration coverage above repository thresholds.
- Compiler-discovered class, method, parameter, and property decorators with explicit interface tokens and strict conflict diagnostics.
- Canonical, source-located plugin metadata from `shamooc`, including module graphs, injection, lifecycle, events, commands, tasks, conditions, configuration bindings, and invocation pipelines.
- Reachability-aware Paper/Velocity compatibility and permission diagnostics, plus pinned-esbuild platform ESM bundles with source maps and independent leakage enforcement.
- Six-stage async lifecycle execution with DI method parameters, cancellation, deterministic reverse cleanup, and aggregate cleanup errors.
- Scoped event/command/task/service invocation with correlation, guards, pipes, validation, interceptors, filters, exact disposal, backpressure, and draining.
- Strict runtime loading of versioned compiler metadata without evaluating metadata values or arbitrary properties.
- Validated deterministic JVM API model generation for pinned Paper `1.21.8-R0.1-SNAPSHOT` and Velocity `3.4.0-SNAPSHOT` fixtures, with raw and idiomatic bindings, event parity, and exact fixture coverage reports.
- Paper-only `@shamoo/paper-nms` and `@shamoo/paper-packets` packages pinned to Minecraft protocol `1.21.8` and Mojang mappings `1.21.8+build.1`, including typed interception decisions and compiler permissions.
- Platform codegen generate, sync, and diff commands, golden output tests, separate NMS/packet coverage, package-boundary validation, and API documentation extraction.

## 0.1.0-alpha.1 - 2026-07-23

### Added

- Phase 1 monorepo and quality-tooling foundation.
- Paper and Velocity platform contracts, capabilities, and branded identities.
- Host entrypoint declarations, opaque raw bridge types, and protocol primitives.
- Publishable Phase 1 packages with synchronized alpha versions.

Later Winter migration phases are not included in this release.
