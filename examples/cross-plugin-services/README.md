# Cross-plugin services

This example exercises Shamoo's versioned service contracts and stable consumer proxies in one
process. The consumer keeps the same proxy while a provider is replaced, and closing the old
provider's generation-aware registration cannot unregister the replacement.

```sh
pnpm --filter @shamoo-examples/cross-plugin-services typecheck
pnpm --filter @shamoo-examples/cross-plugin-services test
```

`ServiceRegistry` is the executable, platform-neutral service boundary. The current Paper and
Velocity host facades can publish providers but do not expose a public service-acquisition method,
so this example does not claim that its consumer runs across deployed plugin isolates.
