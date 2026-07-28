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

`paperManagedLobby(request)` exposes the optional owner-scoped managed-lobby Runtime binding. It
supports ensure, read, write, reload, status, and bounded native execute operations. Configuration is
stored and parsed by the Runtime as eight UTF-8 YAML files; TypeScript sends file content, not a
fabricated normalized configuration object. Requests are validated exactly, while extensible
`{ ok, state, error?, ... }` response maps are recursively copied, safely validated, and frozen. The
direct call passes no compiler metadata because the Runtime captures the calling plugin owner when it
creates the host binding. Missing bindings throw `ManagedLobbyUnavailableError`; malformed requests,
non-Promise host returns, and malformed results throw `ManagedLobbyProtocolError`. Portal create,
remove, enable, disable, and destination mutations require the editor player UUID. Portal destinations
are discriminated as `server` or `menu` with a canonical ID target, or `spawn` with the target omitted.
Optional request values are always omitted rather than sent as null. The Runtime guarantees a Promise
for every operation, including `status`; immediate host results are a protocol violation. A successful
coordinated `reload` result includes `messagesContent`, the exact accepted UTF-8 `messages.yml` text.
Boundary data is limited to 32 nesting levels, 100,000 values, 10,000 entries per collection, and 1
MiB per string; result states are bounded to 128 characters and failure errors to 512 characters.
