import { defineServiceContract } from '@shamoo/communication';

export interface EconomyService {
  balance(accountId: string): number;
  deposit(accountId: string, amount: number): number;
  withdraw(accountId: string, amount: number): number;
  transfer(fromAccountId: string, toAccountId: string, amount: number): void;
}

export const ECONOMY_SERVICE = defineServiceContract<EconomyService>({
  id: 'example/economy',
  version: '1.0.0',
  methods: ['balance', 'deposit', 'withdraw', 'transfer'],
});

export class EconomyValidationError extends Error {
  public readonly code = 'ECONOMY_VALIDATION';

  public constructor(message: string) {
    super(message);
    this.name = 'EconomyValidationError';
  }
}

export class InsufficientFundsError extends Error {
  public readonly code = 'INSUFFICIENT_FUNDS';

  public constructor(
    public readonly accountId: string,
    public readonly balance: number,
    public readonly requested: number,
  ) {
    super(`Account ${accountId} has ${String(balance)} but ${String(requested)} was requested.`);
    this.name = 'InsufficientFundsError';
  }
}

function accountId(value: string): string {
  const normalized = value.trim();
  if (!/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(normalized))
    throw new EconomyValidationError(
      'Account IDs must be 1-64 letters, digits, dots, underscores, or hyphens.',
    );
  return normalized;
}

function positiveAmount(value: number): number {
  if (!Number.isSafeInteger(value) || value <= 0)
    throw new EconomyValidationError('Amounts must be positive safe integers.');
  return value;
}

export class InMemoryEconomy implements EconomyService {
  readonly #balances = new Map<string, number>();

  public balance(rawAccountId: string): number {
    return this.#balances.get(accountId(rawAccountId)) ?? 0;
  }

  public deposit(rawAccountId: string, rawAmount: number): number {
    const id = accountId(rawAccountId);
    const amount = positiveAmount(rawAmount);
    const next = (this.#balances.get(id) ?? 0) + amount;
    if (!Number.isSafeInteger(next))
      throw new EconomyValidationError('The resulting balance exceeds the safe integer range.');
    this.#balances.set(id, next);
    return next;
  }

  public withdraw(rawAccountId: string, rawAmount: number): number {
    const id = accountId(rawAccountId);
    const amount = positiveAmount(rawAmount);
    const current = this.#balances.get(id) ?? 0;
    if (current < amount) throw new InsufficientFundsError(id, current, amount);
    const next = current - amount;
    this.#balances.set(id, next);
    return next;
  }

  public transfer(rawFromAccountId: string, rawToAccountId: string, rawAmount: number): void {
    const from = accountId(rawFromAccountId);
    const to = accountId(rawToAccountId);
    const amount = positiveAmount(rawAmount);
    if (from === to) throw new EconomyValidationError('Transfer accounts must be different.');

    const sourceBalance = this.#balances.get(from) ?? 0;
    if (sourceBalance < amount) throw new InsufficientFundsError(from, sourceBalance, amount);
    const destinationBalance = (this.#balances.get(to) ?? 0) + amount;
    if (!Number.isSafeInteger(destinationBalance))
      throw new EconomyValidationError('The resulting balance exceeds the safe integer range.');

    this.#balances.set(from, sourceBalance - amount);
    this.#balances.set(to, destinationBalance);
  }
}

export function runEconomyDemo(): Readonly<Record<string, number>> {
  const economy = new InMemoryEconomy();
  economy.deposit('alex', 1_000);
  economy.transfer('alex', 'sam', 275);
  return Object.freeze({
    alex: economy.balance('alex'),
    sam: economy.balance('sam'),
  });
}
