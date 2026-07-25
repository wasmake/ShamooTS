# @shamoo/paper

Idiomatic Paper entrypoints plus typed event, command, messaging, and server/global/region/entity
scheduler contracts. `createPaperHostApi` exposes ShamooRuntime's data-only event, command, task,
packet, service, and contract-event operations.

Paper command handlers receive a callback-scoped `PaperCommandContext` with immutable sender,
argument, and option data. It can send plain or rich replies, open protected inventories, grant
actionable items, find exact/cached players, inspect the main hand, and atomically remove an unchanged
main-hand stack. Every context host operation returns a scheduler-marshalled promise for Paper/Folia
safety and must be awaited. The opaque host token expires when the command or action callback promise
settles, and native Java objects never enter plugin code. Command handlers return `void` or
`Promise<void>`; native dispatch ignores decorated method return values, so replies are always
explicit.

Rich text builders include explicit component `text`, safe-placeholder `miniMessage`, and translated
`legacyText`. `item` supports left/right actions with default event prevention; `inventory` is
protected by default. MiniPlaceholders audience/global tags are an explicit boolean opt-in and remain
optional at runtime.

See the repository [Paper rich text/UI guide](../../docs/paper-rich-text-ui.md) and
[command guide](../../docs/commands.md). `paperHostCommunicationProviders` injects the optional host
Paper-Velocity transport; standalone operation remains explicit and sends nothing. One-to-one
generated Java declarations remain available from `@shamoo/paper-raw`.
