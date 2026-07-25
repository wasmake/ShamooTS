# @shamoo/cli

Production compiler, universal bundler, build watcher, API synchronization,
diagnostic, and migration commands for Shamoo plugins. Both `shamoo build` and
`shamooc` create the same three-file artifact. See
[`docs/cli.md`](../../docs/cli.md) for the full command reference.

```sh
shamoo create my-plugin --name @example/my-plugin --platform paper,velocity
cd my-plugin
pnpm install
pnpm shamoo doctor
pnpm shamoo build
```
