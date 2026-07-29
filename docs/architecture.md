# Architecture

## Runtime foundation

Shamoo is a framework foundation for TypeScript-authored Minecraft plugins. Phase 1 models Paper and Velocity hosts without claiming that Node.js can load a JVM plugin or that bridge generation exists. Public helper functions validate declarations and have no server side effects.

The dependency direction is `common/core -> platform and protocol -> paper/velocity -> compiler declarations`. Raw packages hold opaque branded host values so TypeScript code cannot accidentally treat arbitrary objects as Paper or Velocity handles. `@shamoo/di` is an isolated runtime package; `@shamoo/config` also exposes policy-confined persistent text files supplied by Runtime.

Cross-plugin communication follows `runtime-protocol -> communication -> paper/velocity`. The neutral layer owns semver service/event contracts, reload policy, codecs, stable rebinding proxies, and transport errors. Platform packages only adapt host messaging. Paper can run without Velocity and exposes that state explicitly rather than silently dropping requests.

## Platform model

`PlatformKind` is the exact two-member enum `PAPER` and `VELOCITY`. A `Platform` has a branded name and an explicit read-only capability set. Capabilities describe commands, configuration, events, messaging, and scheduling. They are assertions by a host adapter, not evidence that Phase 1 implements those systems.

Paper and Velocity entrypoint helpers freeze declarations. The raw contexts are intentionally opaque until code generation can supply sound bridge bindings. Runtime protocol `1.0` provides strict common descriptors, JSON schema, golden fixtures, and compatibility policy; it is not a transport or sandbox.

## Container model

Each DI root represents exactly one plugin. Module graph visibility, global exports, provider caches, overrides, traces, and disposal remain inside that root. Explicit metadata is the only constructor/property/lifecycle input. Child contexts model invocation scopes and scope compatibility prevents longer-lived providers from retaining narrower values. See [DI](di.md) and [ADR 0002](adr/0002-explicit-di-and-protocol-boundaries.md).

`shamooc` produces that explicit metadata through TypeScript symbol and AST
analysis. The compiler owns platform/capability policy; the bundler produces one
universal module with lazy platform registries and does not duplicate AST checks.
See [compiler](compiler.md) and [ADR 0003](adr/0003-compiler-owned-metadata.md).

## Build and release

All public packages share version `0.1.0-rc.2`, export only generated `dist` artifacts, and build ESM, CommonJS, source maps, and declarations. Strict TypeScript, type-aware ESLint, Vitest, Prettier, package validation, and TypeDoc run from the root. Private packages under `internal/` contain tooling only.

Release-candidate tags run the complete repository check before packaging. The
workflow creates package tarballs, an SPDX JSON SBOM, and SHA-256 checksums,
uploads them as a GitHub artifact, and issues GitHub/Sigstore build-provenance
attestations over every artifact and SBOM attestations over every tarball. It
publishes all assets through a draft and refuses to replace an existing release.
It never publishes to npm; registry publication is a separate, deliberate
release action.

Shamoo's compiler and bundler form a static policy boundary, not a security
sandbox. Platform adapters own JVM objects, transport authentication, and host
capability grants. Plugin dependencies and explicitly permitted Node/native APIs
remain inside the plugin process trust boundary. See [compiler](compiler.md) and
[compatibility matrix](compatibility.md).

Source-bearing packages are workspaces. Remaining future scopes stay plain directories until they have behavior worth compiling, avoiding nominal modules that imply unavailable functionality.
