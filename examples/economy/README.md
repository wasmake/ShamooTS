# Economy

A deployable Paper economy backed by a validated in-memory ledger. Accounts are keyed by player
UUID, balances are integer minor units, and no starting money is created. Players fund the economy
by selling priced items.

## Commands

- `/pay <player> <amount>` transfers money atomically to an exact online or cached player. Amounts
  use decimal currency syntax such as `12.34`; self-payments are rejected.
- `/bal [player]` shows your balance or the balance of an exact online or cached player. The console
  must provide a player.
- `/sell` sells the entire stack in the player's main hand. The stack is atomically compared and
  removed before the account is credited, so a changed item cannot be duplicated.

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

`pnpm build` writes `index.js`, `index.js.map`, and `shamoo-plugin.json` to `dist/`.
Install that directory using the server's artifact-management workflow.

All balances live only in the `EconomyPlugin` instance. They reset to zero whenever the plugin is
disabled, unloaded, redeployed, or the server restarts. No files or database are used.

## Ready-to-run

Use the checked-in [`examples/compiled/economy`](../compiled/economy) installation, or download
`shamoo-example-economy-<version>.tgz` from the GitHub release. Copy or extract it into
`<paper-server>/plugins/ShamooRuntime/plugins`. No Node.js toolchain is needed on the server. The
example remains intentionally in-memory, so balances reset on restart or reload.
