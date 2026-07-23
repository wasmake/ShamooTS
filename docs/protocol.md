# Runtime protocol

`@shamoo/runtime-protocol` is the transport-neutral contract between a generated plugin bundle and its Java host. Protocol compatibility is expressed as major/minor `1.0`: major versions must match and a host minor must be at least the protocol minor. The standalone protocol-version schema accepts any non-negative minor in major `1` so hosts can report compatible future minors. `RUNTIME_PROTOCOL_VERSION` remains the numeric major for the Phase 1 handshake; `PROTOCOL_VERSION` is the synchronized `{ major, minor }` negotiation contract. Protocol versions are not embedded in descriptor JSON.

## Descriptor

`parseCommonDescriptor` accepts unknown input, rejects unknown keys at every object boundary, and returns a typed descriptor. The canonical manifest v1 top-level fields are:

- `name`, `displayName`, and `version`: lowercase plugin ID, display name, and semantic plugin version.
- `shamoo`: API/runtime npm semver ranges and manifest version `1` at `shamoo.manifest`.
- `platforms`: strict Paper and Velocity declarations. Both are present and at least one is enabled. Enabled Paper declares its entrypoint, Minecraft range, and Paper API range; enabled Velocity declares its entrypoint and Velocity API range.
- `dependencies`: required and optional plugin-to-range maps plus `loadBefore` and `loadAfter` plugin ID arrays.
- `node`: builtins, relative filesystem read/write roots, and network, worker, child-process, and native-addon booleans.
- `reload`: watch state, non-negative debounce milliseconds, and state-preservation intent.

Entrypoints must be safe `.js`, `.mjs`, or `.cjs` relative paths. Filesystem roots accept values such as `./` and `./data`; absolute paths, backslashes, traversal, whitespace, and control characters are rejected. Plugin names, versions, non-empty npm ranges, duplicate dependency categories, duplicate ordering entries, self-ordering, debounce values, and unknown manifest versions are validated. Disabled platforms may omit target-specific fields, but any supplied fields are still validated. `ProtocolValidationError.issues` provides stable paths, validator codes, and messages.

`COMMON_DESCRIPTOR_JSON_SCHEMA` is the canonical draft-07 schema export. Semver refinements are additionally enforced by the runtime parser using `semver`. The checked-in `common-descriptor.golden.json` fixture is intended to be consumed unchanged by Java parity tests and round-tripped back to JSON.

## Negotiation

`negotiateCompatibility` checks the separate protocol version, Shamoo runtime, API, selected enabled platform and its versions, Node builtins, read/write filesystem access, network, workers, child processes, and native addons. Paper's Minecraft and Paper API ranges are checked independently. It returns every incompatibility rather than stopping at the first, with a code, descriptor path, and host-specific reason.

This package defines data and compatibility policy. It does not provide transport, filesystem enforcement, network sandboxing, Java bridge generation, or plugin loading.
