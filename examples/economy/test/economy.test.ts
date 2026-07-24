import type { PaperCommandContext } from '@shamoo/paper';
import { describe, expect, it } from 'vitest';

import {
  ECONOMY_SERVICE,
  EconomyValidationError,
  formatMoney,
  InMemoryEconomy,
  InsufficientFundsError,
  parseMoney,
} from '../src/index.js';
import { EconomyPlugin } from '../src/plugin.js';

interface FakePlayer {
  readonly id: string;
  readonly name: string;
}

interface FakeItem {
  readonly material: string;
  readonly amount: number;
}

class FakePaperCommandContext {
  public readonly replies: string[] = [];
  public failRemoval = false;
  public heldItem: FakeItem | undefined;

  public constructor(
    public readonly sender: {
      readonly name: string;
      readonly kind: 'player' | 'other';
      readonly id?: string;
    },
    public readonly alias: string,
    private readonly commandArguments: readonly string[] = [],
    private readonly players: readonly FakePlayer[] = [],
  ) {}

  public get arguments(): readonly string[] {
    return this.commandArguments;
  }

  public reply(message: string): boolean {
    this.replies.push(message);
    return true;
  }

  public findPlayer(name: string): FakePlayer | null {
    return this.players.find((player) => player.name.toLowerCase() === name.toLowerCase()) ?? null;
  }

  public mainHand(): FakeItem | null {
    return this.heldItem ?? null;
  }

  public takeMainHand(material: string, amount: number): boolean {
    if (this.failRemoval || this.heldItem?.material !== material || this.heldItem.amount !== amount)
      return false;
    this.heldItem = undefined;
    return true;
  }

  public asContext(): PaperCommandContext {
    return this as unknown as PaperCommandContext;
  }
}

const alex = { id: '00000000-0000-0000-0000-000000000001', name: 'Alex' };
const sam = { id: '00000000-0000-0000-0000-000000000002', name: 'Sam' };

function playerContext(
  alias: string,
  arguments_: readonly string[] = [],
  sender: FakePlayer = alex,
): FakePaperCommandContext {
  return new FakePaperCommandContext(
    { id: sender.id, kind: 'player', name: sender.name },
    alias,
    arguments_,
    [alex, sam],
  );
}

describe('in-memory economy', () => {
  it('publishes the economy service contract', () => {
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

  it('preserves the ledger total across withdrawals, transfers, and failures', () => {
    const economy = new InMemoryEconomy();
    economy.deposit(alex.id, 2_000);
    economy.deposit(sam.id, 500);
    economy.transfer(alex.id, sam.id, 725);
    expect(economy.balance(alex.id) + economy.balance(sam.id)).toBe(2_500);

    economy.withdraw(sam.id, 225);
    expect(economy.balance(alex.id) + economy.balance(sam.id)).toBe(2_275);
    expect(() => {
      economy.transfer(alex.id, sam.id, 10_000);
    }).toThrow(InsufficientFundsError);
    expect(economy.balance(alex.id) + economy.balance(sam.id)).toBe(2_275);
  });

  it('prevents unsafe integer overflow', () => {
    const economy = new InMemoryEconomy();
    economy.deposit('alex', Number.MAX_SAFE_INTEGER);
    expect(() => economy.deposit('alex', 1)).toThrow(EconomyValidationError);
  });
});

describe('money parsing and formatting', () => {
  it.each([
    ['12.34', 1_234],
    ['12.3', 1_230],
    ['12', 1_200],
    [' 0.01 ', 1],
  ])('parses %s without floating-point arithmetic', (value, expected) => {
    expect(parseMoney(value)).toBe(expected);
    expect(formatMoney(expected)).toMatch(/^\$\d+\.\d{2}$/u);
  });

  it.each(['0', '0.00', '-1', '1.234', 'one', '', '90071992547410.00'])(
    'rejects invalid amount %j',
    (value) => {
      expect(() => parseMoney(value)).toThrow(EconomyValidationError);
    },
  );

  it('formats integer minor units', () => {
    expect(formatMoney(0)).toBe('$0.00');
    expect(formatMoney(1_234)).toBe('$12.34');
  });
});

describe('/pay', () => {
  it('transfers decimal amounts between UUID accounts', () => {
    const plugin = new EconomyPlugin();
    plugin.economy.deposit(alex.id, 2_000);
    const context = playerContext('pay', ['sAm', '12.34']);

    expect(plugin.pay(context.asContext())).toBe(true);
    expect(plugin.economy.balance(alex.id)).toBe(766);
    expect(plugin.economy.balance(sam.id)).toBe(1_234);
    expect(context.replies).toEqual(['Paid Sam $12.34. Your balance is $7.66.']);
  });

  it('reports usage, unknown players, self-pay, invalid amounts, and insufficient funds', () => {
    const cases = [
      playerContext('pay', []),
      playerContext('pay', ['Nobody', '1.00']),
      playerContext('pay', ['Alex', '1.00']),
      playerContext('pay', ['Sam', '1.234']),
      playerContext('pay', ['Sam', '1.00']),
    ];

    for (const context of cases) {
      const plugin = new EconomyPlugin();
      expect(plugin.pay(context.asContext())).toBe(true);
      expect(plugin.economy.balance(alex.id)).toBe(0);
      expect(plugin.economy.balance(sam.id)).toBe(0);
      expect(context.replies).toHaveLength(1);
    }
    expect(cases[0]?.replies[0]).toContain('Usage: /pay');
    expect(cases[1]?.replies[0]).toContain('No exact or cached player');
    expect(cases[2]?.replies[0]).toBe('You cannot pay yourself.');
    expect(cases[3]?.replies[0]).toContain('positive decimal');
    expect(cases[4]?.replies[0]).toBe('Insufficient funds. Your balance is $0.00.');
  });
});

describe('/bal and console senders', () => {
  it('shows a player their own balance and resolves another cached player', () => {
    const plugin = new EconomyPlugin();
    plugin.economy.deposit(alex.id, 25);
    const own = playerContext('bal');
    const other = playerContext('bal', ['Sam']);

    expect(plugin.balance(own.asContext())).toBe(true);
    expect(plugin.balance(other.asContext())).toBe(true);
    expect(own.replies).toEqual(["Alex's balance is $0.25."]);
    expect(other.replies).toEqual(["Sam's balance is $0.00."]);
  });

  it('allows targeted console balances but rejects player-only operations', () => {
    const plugin = new EconomyPlugin();
    const targeted = new FakePaperCommandContext(
      { kind: 'other', name: 'Console' },
      'bal',
      ['Alex'],
      [alex, sam],
    );
    const own = new FakePaperCommandContext({ kind: 'other', name: 'Console' }, 'bal');
    const pay = new FakePaperCommandContext(
      { kind: 'other', name: 'Console' },
      'pay',
      ['Sam', '1.00'],
      [alex, sam],
    );
    const sell = new FakePaperCommandContext({ kind: 'other', name: 'Console' }, 'sell');

    expect(plugin.balance(targeted.asContext())).toBe(true);
    expect(plugin.balance(own.asContext())).toBe(true);
    expect(plugin.pay(pay.asContext())).toBe(true);
    expect(plugin.sell(sell.asContext())).toBe(true);
    expect(targeted.replies).toEqual(["Alex's balance is $0.00."]);
    expect(own.replies[0]).toBe('Only players can use this command.');
    expect(pay.replies[0]).toBe('Only players can use this command.');
    expect(sell.replies[0]).toBe('Only players can use this command.');
  });
});

describe('/sell', () => {
  it('removes and sells the entire main-hand stack before crediting', () => {
    const plugin = new EconomyPlugin();
    const context = playerContext('sell');
    context.heldItem = { amount: 3, material: 'DIAMOND' };

    expect(plugin.sell(context.asContext())).toBe(true);
    expect(context.heldItem).toBeUndefined();
    expect(plugin.economy.balance(alex.id)).toBe(3_000);
    expect(context.replies).toEqual(['Sold 3 DIAMOND for $30.00. Your balance is $30.00.']);
  });

  it('does not credit when atomic stack removal loses a race', () => {
    const plugin = new EconomyPlugin();
    const context = playerContext('sell');
    context.heldItem = { amount: 8, material: 'IRON_INGOT' };
    context.failRemoval = true;

    expect(plugin.sell(context.asContext())).toBe(true);
    expect(context.heldItem).toEqual({ amount: 8, material: 'IRON_INGOT' });
    expect(plugin.economy.balance(alex.id)).toBe(0);
    expect(context.replies[0]).toContain('changed before it could be sold');
  });

  it.each([
    [undefined, 'Hold an item'],
    [{ amount: 1, material: 'AIR' }, 'Hold an item'],
    [{ amount: 1, material: 'DIRT' }, 'does not have a sell price'],
    [{ amount: 0, material: 'DIAMOND' }, 'stack is invalid'],
  ] as const)('rejects unsellable stacks without changing the ledger', (item, message) => {
    const plugin = new EconomyPlugin();
    const context = playerContext('sell');
    context.heldItem = item;

    expect(plugin.sell(context.asContext())).toBe(true);
    expect(plugin.economy.balance(alex.id)).toBe(0);
    expect(context.replies[0]).toContain(message);
  });

  it('preflights balance overflow before removing the stack', () => {
    const plugin = new EconomyPlugin();
    plugin.economy.deposit(alex.id, Number.MAX_SAFE_INTEGER);
    const context = playerContext('sell');
    context.heldItem = { amount: 1, material: 'DIAMOND' };

    expect(plugin.sell(context.asContext())).toBe(true);
    expect(context.heldItem).toEqual({ amount: 1, material: 'DIAMOND' });
    expect(plugin.economy.balance(alex.id)).toBe(Number.MAX_SAFE_INTEGER);
    expect(context.replies[0]).toContain('safe balance limit');
  });
});
