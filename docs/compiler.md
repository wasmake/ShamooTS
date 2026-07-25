# Compiler

`shamooc` invokes the same project build as `shamoo build`. It resolves
`shamoo.config.json`, type-checks the configured tsconfig, walks source graphs
reachable from enabled platform roots, and reads decorator AST by imported
symbol identity.

```sh
shamooc --project .
```

The compiler returns `CompilerMetadata` in memory. The exact subsection has
four required fields: `version`, `components`, `modules`, and `communication`.
Communication arrays are always present. Plugin identity, permissions, source
entrypoints, output paths, and source-map declarations are not compiler
metadata; identity and runtime policy live at the manifest root.

Decorated classes must be named top-level classes exported by name from their
defining module. This lets the bundler generate an ID-keyed constructor registry
that imports every class directly, without requiring platform roots to re-export
components. Duplicate executable decorators and callback-producing declarations
are rejected, and each executable method has one deterministic callback ID.

Interfaces, aliases, primitive types, and type-only imports have no runtime
identity. Annotate them with `@Inject(createToken<T>('description'))`.
Compilation also rejects module cycles, invalid decorator targets, undeclared
Node capabilities, nonliteral dynamic imports, native addons without permission,
opposite-platform imports, and Paper NMS/packet imports without their explicit
permissions.

The bundler consumes successful metadata plus source entrypoints and emits one
self-contained ESM `index.js` with an external `index.js.map`. Dynamic virtual
Paper and Velocity registries keep inactive platform top-level code unevaluated.
The compiler is the sole authority for platform and capability import policy;
the bundler does not duplicate its AST checks.

On the first Runtime lifecycle call, the generated adapter consumes
`{ plugin, platform, metadata }`, loads the selected registry, and initializes
exactly once. Source-root default lifecycle objects are ignored. Compiler-
decorated lifecycle methods are the only lifecycle mechanism.
