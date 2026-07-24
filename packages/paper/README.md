# @shamoo/paper

Idiomatic Paper entrypoints plus typed event, command, messaging, and server/global/region/entity scheduler contracts. `createPaperHostApi` exposes ShamooRuntime's data-only event, command, task, packet, service, and contract-event operations.

Paper command handlers receive a callback-scoped `PaperCommandContext`. It exposes immutable sender, alias, and argument data together with bounded feedback, cached player lookup, main-hand inspection, and atomic main-hand removal. The underlying opaque token expires when the callback finishes, and native Java objects never enter plugin code.

`paperHostCommunicationProviders` injects the optional host Paper-Velocity transport; standalone operation remains explicit and sends nothing. One-to-one generated Java declarations remain available from `@shamoo/paper-raw`.
