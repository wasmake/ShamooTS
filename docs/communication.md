# Plugin communication

`@shamoo/communication` is the platform-neutral boundary for communication between Shamoo plugins. Contract IDs are stable lowercase identifiers and every service, event, and remote procedure declares an exact semantic version. Consumers select an explicit semver range rather than relying on TypeScript structural compatibility at runtime.

## Services

`ServiceRegistry.service()` returns one stable proxy for a contract and requested range. The proxy resolves its provider on every invocation, so a provider can drain, unregister, reload, and register a replacement without leaving consumers with stale objects. Calls while no compatible provider is registered throw `ServiceUnavailableError`; `availability()` distinguishes a missing provider from an incompatible version.

```ts
interface Economy {
  balance(playerId: string): Promise<number>;
}

const economy = defineServiceContract<Economy>({
  id: 'example/economy',
  version: '2.1.0',
  methods: ['balance'],
});

const service = registry.service(economy, '^2.0.0');
```

Registration handles are generation-aware. Closing an old handle after a replacement has registered cannot remove the replacement. `DependentReloadPolicy` is explicit: `none` leaves stable-proxy consumers running, `direct` reloads immediate dependents, and `transitive` reloads the complete dependent closure. `dependentReloadOrder()` supplies deterministic nearest-first planning; lifecycle shutdown can reverse that order.

## Events

`VersionedEventBus` pairs each event ID and exact version with a `Codec<T>`. Subscribers declare a semver range. Publishing serializes once and only compatible subscribers decode the payload, preventing unversioned object sharing across plugin ownership boundaries.

Use `jsonCodec()` for bounded UTF-8 JSON with an optional runtime type predicate, or provide a binary codec. Codec failures are reported as `CodecError`.

## Paper and Velocity

`PaperVelocityTransport` adapts a host-owned Paper plugin-message bridge to `CommunicationClient`. Availability is always queried explicitly. With no bridge, Paper remains fully standalone: `availability()` reports false and requests fail with `UNAVAILABLE` without attempting a send.

`createVelocityCommunicationHandler()` adapts a typed Velocity request handler to the bounded binary channel. Platform packages depend on the neutral communication package and never import one another, preserving independent Paper and Velocity bundles.

Requests have a positive timeout and optional abort signal. Failures use stable codes: `UNAVAILABLE`, `TIMEOUT`, `ABORTED`, `TRANSPORT_ERROR`, `REMOTE_ERROR`, and `INVALID_RESPONSE`. Remote procedures carry separate request and response codecs.

## Wire protocol

`@shamoo/runtime-protocol` owns communication wire version `1`. Frames use the canonical compact binary layout shared
byte-for-byte with Java: network-byte-order `SHMP` magic, version, request/success/error role, and a 16-byte UUID header;
role-specific length-prefixed UTF-8 fields then carry request contract ID plus exact semver plus operation, success
payload, or structured error code plus message. Payloads are not base64 encoded and are limited to `30,000` bytes;
complete plugin-message frames are limited to `32,766` bytes. Malformed UTF-8, invalid identifiers/UUIDs/semver,
impossible lengths, unsupported versions/roles, and trailing bytes are rejected. See [runtime protocol](protocol.md) for
the exact field layout and bounds.

The compiler does not infer these contracts from decorators. Contract factories are runtime-neutral values, while `shamooc` remains the sole authority for executable component and lifecycle metadata.
