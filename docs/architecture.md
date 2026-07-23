# Architecture

## Phase 1 boundary

Shamoo is a framework foundation for TypeScript-authored Minecraft plugins. Phase 1 models Paper and Velocity hosts without claiming that Node.js can load a JVM plugin or that bridge generation exists. Public helper functions validate declarations and have no server side effects.

The dependency direction is `common/core -> platform and protocol -> paper/velocity -> compiler declarations`. Raw packages hold opaque branded host values so TypeScript code cannot accidentally treat arbitrary objects as Paper or Velocity handles. `@shamoo/di` and `@shamoo/config` expose useful contracts but no runtime container or filesystem implementation.

## Platform model

`PlatformKind` is the exact two-member enum `PAPER` and `VELOCITY`. A `Platform` has a branded name and an explicit read-only capability set. Capabilities describe commands, configuration, events, messaging, and scheduling. They are assertions by a host adapter, not evidence that Phase 1 implements those systems.

Paper and Velocity entrypoint helpers freeze declarations. The raw contexts are intentionally opaque until code generation can supply sound bridge bindings. Runtime protocol version `1` provides a shared handshake shape and validator; it is not a transport.

## Build and release

All 14 public packages share version `0.1.0-alpha.1`, export only generated `dist` artifacts, and build ESM, CommonJS, source maps, and declarations. Strict TypeScript, type-aware ESLint, Vitest, Prettier, package validation, and TypeDoc run from the root. Private packages under `internal/` contain tooling only.

Source-bearing packages are workspaces. Future scopes remain plain directories until they have behavior worth compiling, avoiding nominal modules that imply unavailable functionality.
