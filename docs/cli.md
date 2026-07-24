# Shamoo command reference

The `shamoo` executable is provided by `@shamoo/cli` and requires Node.js 22 or
newer. Commands return `0` on success and `1` for stale generated APIs, failed
diagnostics, compilation failures, or invalid invocations.

## Project configuration

Project commands read `shamoo.config.json` from the project root. Source,
TypeScript configuration, and output paths must be relative and cannot escape
that root. Development deployment targets may be absolute or project-relative.

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
  "deploy": {
    "paper": "../paper/shamoo-plugins",
    "velocity": "../velocity/shamoo-plugins"
  }
}
```

`name`, `platforms`, and `entrypoint` are required. `tsconfig` defaults to
`tsconfig.json`, and `outDir` defaults to `dist`.

## `shamoo create`

```sh
shamoo create <directory> [--name <package>] [--platform paper,velocity]
```

Creates TypeScript source, platform entrypoints, package metadata, and Shamoo
configuration. The command refuses an existing target and does not run an
installer or package lifecycle scripts.

## `shamoo build`

```sh
shamoo build [--project <directory>]
```

Runs compiler discovery and diagnostics, writes `shamoo.metadata.json`, and
creates an independent source-mapped ESM bundle for each configured platform.

## `shamoo deploy`

```sh
shamoo deploy [--project <directory>] [--paper <directory>] [--velocity <directory>]
```

Builds a Runtime installation directory under each configured watched plugin
directory. Each installation contains `shamoo-plugin.json`, compiler metadata,
and descriptor-relative platform bundle/source-map paths. These are ShamooRuntime
watch roots, not native Paper or Velocity `plugins` directories. Command-line
targets override `deploy` configuration.

Exact default watched-root examples:

- Paper: `<paper-server>/plugins/ShamooRuntime/plugins`, from
  `plugins.directory: plugins` relative to ShamooRuntime's plugin data folder.
- Velocity: `<velocity-server>/plugins/shamooruntime/plugins`, or the absolute
  directory supplied with `-Dshamoo.plugins.directory=/absolute/watched/root`.

`shamoo.config.json` may declare `communication.services`,
`communication.events`, and `communication.consumers`; these declarations are
compiled into the authoritative metadata consumed by the bundled host adapter.
`compatibility` config supplies descriptor API, Runtime, Minecraft, Paper API,
and Velocity API ranges rather than weakening deployed descriptors implicitly.

## `shamoo dev`

```sh
shamoo dev [--project <directory>] [--paper <directory>] [--velocity <directory>]
```

Performs an initial build and deployment, then watches `src` and
`shamoo.config.json`. Changes are debounced, builds never overlap, and a change
that arrives during a build schedules one follow-up build. Stop with `SIGINT` or
`SIGTERM`.

## API synchronization

```sh
shamoo paper [sync|diff] [paper|paper-nms|paper-packets] [model|-] [output]
shamoo velocity [sync|diff] [model|-] [output]
```

`sync` deterministically updates generated bindings using the pinned API model,
or a supplied model path. `diff` performs the same generation in memory and
returns `1` when checked-in output is stale. `-` selects the pinned model. Output
defaults to `src/generated`. `generate` is accepted as an alias for `sync`.

## Runtime diagnostics

```sh
shamoo doctor [--project <directory>] [--json]
```

Checks the Node runtime, parses and validates project configuration, verifies the
TypeScript project and common entrypoint are readable, and reports missing
development deployment targets as warnings. `--json` emits structured
diagnostics for editor and CI integration.

## Winter migration analyzer

```sh
shamoo migrate winter <source-directory> [--json]
```

Scans Java source without compiling or executing it and identifies supported
Winter annotations/imports with their Shamoo replacement and semantic migration
notes. Symbolic links are not followed. The report is an aid, not an automatic
source rewrite; review [`winter-compatibility.md`](winter-compatibility.md) for
the pinned audit and intentional differences.

## General

```sh
shamoo help
shamoo version
```
