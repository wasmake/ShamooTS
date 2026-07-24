# Configuration

A validated configuration source/decoder pair loaded during the compiler-discovered
`load` lifecycle stage. The decoder treats source data as untrusted, checks every field,
normalizes the greeting, and returns an immutable configuration value.

```sh
pnpm typecheck
pnpm build
```

`@shamoo/config` currently provides source and decoder contracts rather than a file
loader or reload manager. This example therefore uses a deterministic in-memory source
and performs one meaningful lifecycle load; it does not claim automatic file watching or
`@ConfigValue` injection.
