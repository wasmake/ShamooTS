# Compatibility matrix

This matrix describes tested TypeScript/tooling compatibility. It does not claim
Java binary compatibility outside the pinned generated models.

| Surface           | Supported baseline                | Enforcement                                          |
| ----------------- | --------------------------------- | ---------------------------------------------------- |
| Node.js           | 22 and 24                         | CI test matrix; package minimum is Node 22           |
| pnpm              | 10+, repository pinned to 11.15.0 | `packageManager`, frozen lockfile                    |
| TypeScript        | 5.8.3                             | Compiler and generated declaration validation        |
| Manifest/compiler | manifest 2, compiler versioned    | Strict parser and Runtime-supplied adapter metadata  |
| Runtime protocol  | 1.0                               | Golden binary fixtures and compatibility policy      |
| Paper API         | 1.21.8-R0.1-20250906.215025-55    | Independently 100% declarations, members, and events |
| Velocity API      | 3.4.0-20260121.190037-118         | Independently 100% declarations, members, and events |
| Paper NMS         | 1.21.8, Mojang mappings           | Exact-version, `nms` permission required             |
| Paper packets     | 1.21.8, Mojang mappings           | Exact-version, `packets` permission required         |

Paper and Velocity entrypoints are compiled independently and bundled into one
universal artifact. Common code may be reachable from both, but generated
platform APIs may not cross the opposite entrypoint. NMS and packet declarations are Paper-only and are not
semver-compatible across Minecraft versions. Opaque mappings in coverage reports
represent signature types outside the pinned scanner model; they do not reduce
the measured declaration/member/event coverage of that model.

Generated declarations are strict TypeScript inputs and must only be changed by
the checksum-verified code generators. `pnpm codegen:check` compares each platform
tree independently and fails on drift.

ShamooRuntime consumes manifest version 2 from `shamoo-plugin.json`. Compiler
metadata is the required `compiler` subsection rather than a separate file.
`index.js.map` is the fixed external source map for `index.js`; Runtime source-map
registration is exact-position and one-based. `pnpm contract:check` verifies all
public/internal release versions, the RC tag, Java Runtime base version, canonical
descriptor fixture, and v2 validation constants before candidate artifacts are
packed; the candidate workflow contains no registry publication step.
