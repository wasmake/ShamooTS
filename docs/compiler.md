# Compiler

`shamooc` is a TypeScript Compiler API application. It resolves the requested
tsconfig, performs normal TypeScript checking, walks files reachable from the
selected platform entrypoints, and reads decorator AST by imported symbol name.
Plugin constructors are never parsed as source text and the compiler does not
enable or consume `emitDecoratorMetadata`.

```sh
shamooc --project tsconfig.json \
  --entry src/plugin.ts \
  --package @example/plugin \
  --platform paper,velocity \
  --paper-entry src/paper.ts \
  --velocity-entry src/velocity.ts \
  --out dist/shamoo.metadata.json
```

The canonical JSON format is versioned by `COMPILER_METADATA_VERSION`. Keys,
components, modules, and diagnostics use stable ordering; locations are
project-relative. Metadata includes class declarations, constructor/property
dependencies, lifecycle method injection, event/command/task/config and pipeline
decorators, module edges, and per-platform source/output entrypoints.

Interfaces, aliases, primitive types, and type-only imports have no runtime
identity. Annotate them with `@Inject(createToken<T>('description'))`; diagnostics
identify the parameter or property and provide this remediation. Module cycles,
invalid decorator targets, conflicting decorators, native addons, unsupported
Node imports, undeclared builtin permissions, and platform imports outside the
selected targets fail compilation.

Node access is deny-by-default. Every builtin must appear in
`permissions.builtins`; sensitive builtins additionally require their
`filesystem`, `network`, `workers`, or `childProcess` capability. Native `.node`
addons require `nativeAddons`. Paper NMS and packet imports continue to require
`nms` and `packets`. These declarations are copied into canonical metadata, and
the bundler checks them again across direct imports, aliases, re-exports,
transitive dependencies, and dynamic imports. Dynamic paths that cannot be
resolved to a source-level string are rejected.

The bundler consumes a successful manifest and invokes pinned esbuild through
its API. Paper and Velocity entrypoints are built independently as ESM with
external source maps. An opposite-platform package declaration is rejected by
the bundler even if compiler metadata was supplied by another tool.

## Trust boundary

Compiler and bundler checks are build-time policy enforcement, not a runtime
sandbox. A granted builtin exposes the corresponding Node API, dependencies run
with the plugin process's authority, and a native addon can execute arbitrary
native code. Hosts must validate compiler metadata, grant only capabilities they
implement, isolate untrusted plugins at the process/container boundary, and
apply filesystem and network controls outside Shamoo. Metadata is untrusted
input until schema validation succeeds; generated JVM handles are host-owned and
must not be accepted from arbitrary JavaScript objects.

The bundler wraps each platform entrypoint with the Runtime lifecycle exports and
an adapter driven only by validated compiler metadata. It registers generated
events, packets, platform operations, services, and contract events through the
explicit data-only `host` global and `$callback` markers. No reflective Java
objects cross this boundary. `sourceMaps` records standard v3 bundle/map pairs;
the CLI deploys every referenced map beside its generated module for Java host
registration and stack remapping.
