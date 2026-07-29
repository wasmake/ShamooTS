# Platform bindings

## Model and generation

The JVM scanner emits intermediate JSON with `schemaVersion`, platform and API versions, declarations, events, and packets. `@shamoo/platform-codegen` validates this data before sorting it by stable JVM identity. Paper and Velocity generators expose pure generation plus file `sync` and `diff` operations. Generated files include their source API version and are deterministic for semantically identical models.

The checked-in canonical model versions, exact emitted counts, and opaque totals are generated in [the platform binding report](./platform-bindings.generated.md). Their provenance and SHA-256 values are recorded beside the models. The CLIs verify those checksums before default generation or diff. Small models under `fixtures/` are parser unit fixtures only and are never a coverage denominator.

Coverage is measured from emitted declaration symbols, members, event descriptors, exceptions, packets, registrations, and exported declaration indices against canonical model denominators. Packet declarations and registrations have separate coverage counts, so a packet registered in multiple phases contributes once to packet coverage and once per phase to registration coverage.

Generated declarations are deterministically sharded by Java package, and package barrels preserve the complete named-export surface. Event decorators are sharded by event package, yielding all 423 Paper and 46 Velocity convenience decorators. Generated declaration JSDoc and package barrels form the comprehensive reference index without asking TypeDoc to construct one monolithic symbol graph.

Use `pnpm codegen:check` to fail on drift. Package CLIs accept `generate`, `sync`, or `diff`. Paper also accepts `paper`, `paper-nms`, or `paper-packets` as the surface.

## Paper

`@shamoo/paper-raw` preserves generated Java method names, overloads, nullability, generics,
constructors, fields, constants, nested identities, and declared exceptions. `paperJava` resolves
`JAVA_TYPES` into asynchronous static controls and generation-scoped handles. `$invoke`, `$get`,
`$set`, and `$new` select only members in the exact public catalog; Runtime does not enable Javet
reflection. Live event handles execute through bounded origin-thread frames, while ordinary calls are
routed through Paper/Folia schedulers.

Paper scheduling distinguishes server, global region, region, and entity ownership. Global, region, and entity work must not be substituted for one another. Folia callers select the scheduler matching the data they access; cancellation returns the native generated cancellation state rather than a simplified boolean.

## Velocity

`@shamoo/velocity-raw` retains Velocity Java names and asynchronous result types. `@shamoo/velocity` adds promise-facing connection, command, event, messaging, and scheduler contracts. Velocity exposes only asynchronous scheduling; Paper region and entity schedulers are absent from its package.

## Events and commands

Event maps and registries are generated from each model's `events` collection. There is no handwritten event type list. Handler generic parameters select the concrete generated event. Mutable and cancellable Paper events remain live host objects; the idiomatic context exposes mutation rather than copying the event. Velocity result objects remain their nuanced native generated types.

Paper command routes support literals, parsed required/optional/greedy arguments, options, suggestions, aliases, permissions, sender restrictions, and compiler-bound method parameters. Command methods return `void` or `Promise<void>` and send responses explicitly because native dispatch ignores decorated method return values. `PaperCommandContext` provides promise-facing reply, inventory, item, player lookup, and atomic main-hand operations that ShamooRuntime marshals to the owning Paper or Folia scheduler. Rich text descriptors are validated and rendered into Adventure components without exposing native components to plugin code. Raw Brigadier declarations remain available for code that needs source and syntax exception behavior directly. See the [command guide](commands.md) and [Paper rich text/UI guide](paper-rich-text-ui.md).

## NMS and packets

`@shamoo/paper-nms` is Mojang-mapped and exact-version only. Its compatibility token is `paper-1.21.8+paper.55+mache.2`. A `LiveNmsHandle<T>` is valid only during the host lifetime that supplied it. No compatibility is promised across Minecraft, Paper, or mapping changes.

`@shamoo/paper-packets` generates every packet in the canonical model with all phase/direction registrations and available numeric IDs. `PacketType<T>`, `PacketContext<T>`, connection state, player presence, and live packet handles are typed. Handlers return explicit pass, cancel, or same-type replacement decisions. No generated signature contains an `any` type. Scanner-external JVM references use branded `JavaOpaque<JavaName>` values and are listed in coverage reports.

Opaque reference totals and parse fallback counts come directly from the generated report rather than handwritten documentation. Opaque references do not reduce declaration/member coverage because they are types referenced by modeled signatures but absent from that surface's scanner declaration set. Multiple opaque supertypes remain represented in `__javaSupertypes` metadata.

The complete workspace typecheck can require a larger V8 heap. Use `NODE_OPTIONS=--max-old-space-size=8192 pnpm check` (or apply the same option to `pnpm typecheck`, tests, and builds). Package sharding prevents TypeScript's monolithic declaration limits; `.d.ts` shards also allow Java multiple-inheritance contracts to remain represented without forcing TypeScript structural-inheritance compatibility checks.

`PacketHandler`, `OnPacketReceive`, and `OnPacketSend` are compiler-extracted method decorators. Imports require `permissions.packets: true`; NMS imports require `permissions.nms: true`. The compiler rejects either package from Velocity reachability. The bundler emits independent Paper and Velocity artifacts and rejects Paper internals in the Velocity graph.

## Versioning and security

Raw Paper and Velocity packages follow the pinned model version. NMS and packets are version-qualified by exported compatibility constants and can break on every upstream release. Regenerate, inspect the diff, compile golden tests, and deploy against the exact server version as one atomic upgrade.

NMS and packet permissions are opt-in because these surfaces bypass stable server abstractions and process live connection data. Do not retain live handles, trust packet payloads, replace packets across phases or directions, or load a generated package against a different compatibility token. Keep neutral modules free of platform imports so Velocity bundles cannot acquire Paper internals transitively.
