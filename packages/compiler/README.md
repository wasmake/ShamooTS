# @shamoo/compiler

The compiler resolves a tsconfig, type-checks reachable plugin sources, discovers
TypeScript decorator AST, validates platform and permission boundaries, and
returns canonical `CompilerMetadata` in memory. The `shamooc` executable is
provided by `@shamoo/cli` and runs the same complete build as `shamoo build`.
