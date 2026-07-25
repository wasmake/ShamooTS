# Shamoo command reference

The `shamoo` and `shamooc` executables are provided by `@shamoo/cli` and require
Node.js 22 or newer. `shamooc [options]` is exactly equivalent to
`shamoo build [options]`.

## Project configuration

Project commands read `shamoo.config.json` from the project root. Source,
TypeScript configuration, and output paths must be relative and cannot escape
that root.

```json
{
  "name": "@example/identity",
  "platforms": ["paper", "velocity"],
  "entrypoint": "src/plugin.ts",
  "paperEntrypoint": "src/paper.ts",
  "velocityEntrypoint": "src/velocity.ts",
  "tsconfig": "tsconfig.json",
  "outDir": "dist",
  "permissions": {
    "builtins": [],
    "filesystem": { "read": [], "write": ["./data"] },
    "network": false,
    "workers": false,
    "childProcess": false,
    "nativeAddons": false
  },
  "communication": { "services": [], "events": [], "consumers": [] }
}
```

`name`, `platforms`, and `entrypoint` are required. `tsconfig` defaults to
`tsconfig.json`, and `outDir` defaults to `dist`. Platform entrypoints and
permissions are compiler inputs; they are not copied into compiler metadata.

## `shamoo create`

```sh
shamoo create <directory> [--name <package>] [--platform paper,velocity]
```

Creates TypeScript source, side-effect-only platform roots, package metadata,
and Shamoo configuration. The command refuses an existing target and does not
run an installer or package lifecycle scripts.

## `shamoo build`

```sh
shamoo build [--project <directory>]
shamooc [--project <directory>]
```

Runs compiler discovery and diagnostics, cleans `outDir`, creates one universal
source-mapped ESM bundle, and writes the manifest last. A successful build has
exactly three direct files:

- `index.js`
- `index.js.map`
- `shamoo-plugin.json`

The manifest contains descriptor policy and the required compiler metadata.
Paper and Velocity source graphs are selected lazily from Runtime lifecycle
context, so the inactive platform graph is not evaluated.

## `shamoo dev`

```sh
shamoo dev [--project <directory>]
```

Performs an initial build, then watches `src` and `shamoo.config.json`. Changes
are debounced, builds never overlap, and a change during a build schedules one
follow-up build. It does not copy artifacts to a Runtime directory.

## API synchronization

```sh
shamoo paper [sync|diff] [paper|paper-nms|paper-packets] [model|-] [output]
shamoo velocity [sync|diff] [model|-] [output]
```

`sync` deterministically updates generated bindings using the pinned API model,
or a supplied model path. `diff` returns `1` when checked-in output is stale.
`-` selects the pinned model and output defaults to `src/generated`.

## Runtime diagnostics

```sh
shamoo doctor [--project <directory>] [--json]
```

Checks Node, project configuration, the TypeScript project, and the common
source entrypoint. `--json` emits structured diagnostics for editor and CI use.

## Winter migration analyzer

```sh
shamoo migrate winter <source-directory> [--json]
```

Scans Java source without compiling or executing it and reports supported
Winter annotations with their Shamoo replacement.

## General

```sh
shamoo help
shamoo version
```
