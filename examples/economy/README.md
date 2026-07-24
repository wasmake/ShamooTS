# Economy

This example implements a validated, in-memory economy behind a versioned Shamoo service
contract. Balances use non-negative safe integers representing minor currency units. Deposits,
withdrawals, and transfers reject invalid input, and failed transfers do not partially mutate
balances.

```sh
pnpm --filter @shamoo-examples/economy typecheck
pnpm --filter @shamoo-examples/economy test
```

The example deliberately makes no persistence claim. A production plugin can place a durable
store behind the same domain service once it has selected and implemented an application-specific
storage policy.
