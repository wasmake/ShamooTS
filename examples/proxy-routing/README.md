# Proxy routing

Typed Paper-to-Velocity request/response routing over Shamoo's bounded binary communication
protocol. The example keeps its contract platform-neutral, adapts it to a Velocity proxy endpoint,
and creates a Paper `CommunicationClient` over the host-owned optional proxy bridge.

> **Source-only demonstration:** the required host wiring is not currently exposed to bundled
> plugins, so publishing this example as a ready-to-run archive would be misleading.

## Runtime wiring

The current bundled entrypoint context does not expose `PaperRuntimeHost` or `VelocityRuntimeHost`,
and this example does not read the undocumented `globalThis.host` value. An embedding runtime must
pass its public host implementation explicitly:

```ts
import { createPaperRoutingClient } from './src/paper.js';
import { installVelocityRouting } from './src/velocity.js';

const installation = installVelocityRouting(velocityHost, {
  defaultServer: 'lobby',
  players: { Alex: 'survival' },
});

const client = createPaperRoutingClient(paperHost);
const route = await client.lookup('Alex');

installation.close();
```

`installVelocityRouting` owns a unique callback name and returns a local close handle. Host callback
unregistration is not currently part of `VelocityRuntimeHost`, so `close()` prevents further
handler work but cannot remove the host registration.

## Structure

- `src/contracts.ts` defines the codecs and remote procedure.
- `src/handler.ts` validates requests and creates the bounded Velocity byte handler.
- `src/velocity.ts` registers that handler through `createVelocityHostApi`.
- `src/paper.ts` constructs the Paper transport and typed client from an explicit host argument.
- `test/routing.test.ts` performs a real in-memory wire-protocol round trip.

## Build

```sh
pnpm install
pnpm typecheck
pnpm test
pnpm build
```
