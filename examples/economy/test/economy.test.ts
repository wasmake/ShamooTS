import { describe, expect, it } from 'vitest';

import {
  ECONOMY_SERVICE,
  EconomyValidationError,
  InMemoryEconomy,
  InsufficientFundsError,
  runEconomyDemo,
} from '../src/index.js';

describe('in-memory economy', () => {
  it('executes deposits and atomic transfers', () => {
    expect(runEconomyDemo()).toEqual({ alex: 725, sam: 275 });
    expect(ECONOMY_SERVICE.methods).toEqual(['balance', 'deposit', 'withdraw', 'transfer']);
  });

  it('rejects malformed accounts and amounts', () => {
    const economy = new InMemoryEconomy();
    expect(() => economy.deposit('', 1)).toThrow(EconomyValidationError);
    expect(() => economy.deposit('alex', 0)).toThrow(EconomyValidationError);
    expect(() => economy.deposit('alex', 1.5)).toThrow(EconomyValidationError);
    expect(() => {
      economy.transfer('alex', 'alex', 1);
    }).toThrow(EconomyValidationError);
  });

  it('does not partially mutate a failed transfer', () => {
    const economy = new InMemoryEconomy();
    economy.deposit('alex', 100);

    expect(() => {
      economy.transfer('alex', 'sam', 101);
    }).toThrow(InsufficientFundsError);
    expect(economy.balance('alex')).toBe(100);
    expect(economy.balance('sam')).toBe(0);
  });

  it('prevents unsafe integer overflow', () => {
    const economy = new InMemoryEconomy();
    economy.deposit('alex', Number.MAX_SAFE_INTEGER);
    expect(() => economy.deposit('alex', 1)).toThrow(EconomyValidationError);
  });
});
