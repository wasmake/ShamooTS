# Runtime protocol

`@shamoo/runtime-protocol` is the transport-neutral contract between a generated plugin bundle and its Java host. Protocol compatibility is expressed as major/minor `1.0`: major versions must match and a host minor must be at least the protocol minor. The standalone protocol-version schema accepts any non-negative minor in major `1` so hosts can report compatible future minors. `RUNTIME_PROTOCOL_VERSION` remains the numeric major for the Phase 1 handshake; `PROTOCOL_VERSION` is the synchronized `{ major, minor }` negotiation contract. Protocol versions are not embedded in descriptor JSON.

Communication wire protocol `1` complements the manifest protocol with strict request/response envelopes for
Paper-to-Velocity plugin messaging. All integers are unsigned and network byte order. The common header is:

```text
u32 0x53484d50 ("SHMP") | u8 version=1 | u8 role | 16-byte RFC 4122 request UUID
```

Role `0` (request) appends `u16 contractIdLength | u16 versionLength | u16 operationLength | u32 payloadLength`, then
the contract ID, exact-semver version, operation, and opaque payload bytes in that order. Role `1` (success) appends
`u32 payloadLength | payload`. Role `2` (error) appends `u16 codeLength | u16 messageLength | code | message`.
Length-prefixed text is strict UTF-8. Contract IDs, operations, and error codes are non-empty and at most 128 bytes;
exact semver is at most 64 bytes; an error message is non-blank and at most 1,024 bytes. Payloads are at most 30,000
bytes and a complete frame is at most 32,766 bytes. Decoding consumes exactly one frame and rejects trailing bytes.
See [plugin communication](communication.md).

## Descriptor

`parseCommonDescriptor` accepts unknown input, rejects unknown keys at every object boundary, and returns a typed descriptor. The canonical manifest v2 top-level fields are:

- `name`, `displayName`, and `version`: lowercase plugin ID, display name, and semantic plugin version.
- `shamoo`: API/runtime npm semver ranges and manifest version `2` at `shamoo.manifest`.
- `platforms`: strict Paper and Velocity declarations. Both are present and at least one is enabled. Enabled Paper declares Minecraft and Paper API ranges plus `nms` and `packets`; enabled Velocity declares its Velocity API range. Disabled targets contain exactly `enabled: false`.
- `dependencies`: required and optional plugin-to-range maps plus `loadBefore` and `loadAfter` plugin ID arrays.
- `node`: builtins, relative filesystem read/write roots, and network, worker, child-process, and native-addon booleans.
- `reload`: watch state, non-negative debounce milliseconds, and state-preservation intent.
- `compiler`: required compiler metadata containing exactly `version`, `components`, `modules`, and `communication`.

Artifact names are fixed by the Runtime protocol and are not repeated in platform targets. Filesystem roots accept values such as `./` and `./data`; absolute paths, backslashes, and traversal are rejected. Plugin names, versions, non-empty npm ranges, duplicate dependency categories, duplicate ordering entries, self-ordering, debounce values, compiler metadata, and unknown manifest versions are validated. `ProtocolValidationError.issues` provides stable paths, validator codes, and messages.

`COMMON_DESCRIPTOR_JSON_SCHEMA` is the canonical draft 2020-12 schema export. Semver refinements are additionally enforced by the runtime parser using `semver`. The checked-in `common-descriptor.golden.json` fixture is consumed unchanged by Java parity tests and round-tripped back to JSON.

## Negotiation

`negotiateCompatibility` checks the separate protocol version, Shamoo runtime, API, selected enabled platform and its versions, Node builtins, read/write filesystem access, network, workers, child processes, and native addons. Paper's Minecraft and Paper API ranges are checked independently. It returns every incompatibility rather than stopping at the first, with a code, descriptor path, and host-specific reason.

This package defines wire data and compatibility policy. Platform adapters provide transport; it does not provide filesystem enforcement, network sandboxing, Java bridge generation, or plugin loading.
