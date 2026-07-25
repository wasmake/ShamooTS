# Economy

A deployable Paper economy backed by a validated in-memory ledger. Accounts are keyed by player
UUID, balances are integer minor units, and no starting money is created. Players fund the economy
by selling priced items.

## Commands

- `/pay <player> <amount>` transfers money atomically to an exact online or cached player. Player
  names and decimal amounts are bound with `@Argument`; amounts such as `12.34` are converted to
  minor units without floating-point arithmetic. Self-payments are rejected.
- `/bal [player] [--minor|-m]` or `/balance` shows your balance or an exact online/cached player's
  balance. The bound boolean option switches to raw minor units. The console must provide a player.
- `/sell` atomically compares and removes the player's complete main-hand stack before crediting the
  ledger, so a changed item cannot be duplicated.
- `/prices` or `/shop` opens a protected one-row price list. Its item callbacks repeat prices in chat
  without exposing the underlying Bukkit inventory or item objects.

The compiler emits route syntax, parser/suggestion metadata, sender restrictions, and parameter
bindings. The runtime rejects malformed invocations before the handler runs. Custom `parseMoney`
validation remains in the handler because currency syntax is intentionally stricter than the general
`number` parser.

All Paper context operations are scheduler-marshalled promises. The handlers await player lookup,
main-hand inspection/removal, inventory opening, and explicit replies before returning `void`.
Decorated method return values are ignored by native dispatch.

## Prices

Prices are minor units per item and are configured in `MATERIAL_PRICES` in `src/plugin.ts`.

| Material     | Unit price |
| ------------ | ---------: |
| Cobblestone  |      $0.01 |
| Coal         |      $0.25 |
| Copper ingot |      $0.50 |
| Iron ingot   |      $1.00 |
| Gold ingot   |      $2.50 |
| Emerald      |      $7.50 |
| Diamond      |     $10.00 |

Air, invalid stacks, and materials absent from this table cannot be sold.

## Build

From this directory, or with the equivalent workspace filter from the repository root:

```sh
pnpm test
pnpm typecheck
pnpm build
```

`pnpm build` writes `index.js`, `index.js.map`, and `shamoo-plugin.json` to `dist/`. Install that
directory using the server's artifact-management workflow. See the repository
[command guide](../../docs/commands.md) and
[Paper rich text/UI guide](../../docs/paper-rich-text-ui.md) for the binding and inventory APIs.

All balances live only in the `EconomyPlugin` instance. They reset to zero whenever the plugin is
disabled, unloaded, redeployed, or the server restarts. No files or database are used.

## Ready-to-run

Use the checked-in [`examples/compiled/economy`](../compiled/economy) installation, or download
`shamoo-example-economy-<version>.tgz` from the GitHub release. Copy or extract it into
`<paper-server>/plugins/ShamooRuntime/plugins`. No Node.js toolchain is needed on the server. The
example remains intentionally in-memory, so balances reset on restart or reload.
