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

The bundler consumes a successful manifest and invokes pinned esbuild through
its API. Paper and Velocity entrypoints are built independently as ESM with
external source maps. An opposite-platform package declaration is rejected by
the bundler even if compiler metadata was supplied by another tool.

Compiler output is not a generated Paper/Velocity API. Java bridge generation,
host registration, packaged plugin descriptors, and runtime dispatch are not
implemented in this phase.
