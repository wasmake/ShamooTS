import type { CommandSender } from '@shamoo/commands';
import type {
  InventoryDescriptor,
  ItemDescriptor,
  PaperCommandContext,
  TextLike,
} from '@shamoo/paper';
import { describe, expect, it } from 'vitest';

import {
  ECONOMY_SERVICE,
  EconomyValidationError,
  formatMoney,
  InMemoryEconomy,
  InsufficientFundsError,
  parseMoney,
} from '../src/index.js';
import { EconomyPlugin, MATERIAL_PRICES } from '../src/plugin.js';

interface FakePlayer {
  readonly id: string;
  readonly name: string;
  readonly online: boolean;
}

interface FakeItem {
  readonly material: string;
  readonly amount: number;
}

class FakePaperCommandContext {
  public readonly arguments: Readonly<Record<string, unknown>> = Object.freeze({});
  public readonly input = '';
  public readonly openedInventories: InventoryDescriptor[] = [];
  public readonly options: Readonly<Record<string, unknown>> = Object.freeze({});
  public readonly replies: TextLike[] = [];
  public failRemoval = false;
  public heldItem: FakeItem | undefined;

  public constructor(
    public readonly sender: CommandSender,
    public readonly alias: string,
    private readonly players: readonly FakePlayer[] = [],
  ) {}

  public reply(message: TextLike): Promise<boolean> {
    this.replies.push(message);
    return Promise.resolve(true);
  }

  public openInventory(descriptor: InventoryDescriptor): Promise<boolean> {
    this.openedInventories.push(descriptor);
    return Promise.resolve(true);
  }

  public giveItem(descriptor: ItemDescriptor): Promise<boolean> {
    void descriptor;
    return Promise.resolve(true);
  }

  public findPlayer(name: string): Promise<FakePlayer | null> {
    const player = this.players.find(
      (candidate) => candidate.name.toLowerCase() === name.toLowerCase(),
    );
    return Promise.resolve(player === undefined ? null : { ...player, online: true });
  }

  public mainHand(): Promise<FakeItem | null> {
    return Promise.resolve(this.heldItem ?? null);
  }

  public takeMainHand(material: string, amount: number): Promise<boolean> {
    if (this.failRemoval || this.heldItem?.material !== material || this.heldItem.amount !== amount)
      return Promise.resolve(false);
    this.heldItem = undefined;
    return Promise.resolve(true);
  }

  public asContext(): PaperCommandContext {
    return this;
  }
}

const alex = { id: '00000000-0000-0000-0000-000000000001', name: 'Alex', online: true };
const sam = { id: '00000000-0000-0000-0000-000000000002', name: 'Sam', online: true };

function playerContext(alias: string, sender: FakePlayer = alex): FakePaperCommandContext {
  return new FakePaperCommandContext({ id: sender.id, kind: 'player', name: sender.name }, alias, [
    alex,
    sam,
  ]);
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
  it('transfers decimal amounts between UUID accounts', async () => {
    const plugin = new EconomyPlugin();
    plugin.economy.deposit(alex.id, 2_000);
    const context = playerContext('pay');

    await plugin.pay('sAm', '12.34', context.sender, context.asContext());
    expect(plugin.economy.balance(alex.id)).toBe(766);
    expect(plugin.economy.balance(sam.id)).toBe(1_234);
    expect(context.replies).toEqual(['Paid Sam $12.34. Your balance is $7.66.']);
  });

  it('rejects unknown players, self-pay, invalid amounts, and insufficient funds', async () => {
    const cases = [
      { amount: '1.00', context: playerContext('pay'), target: 'Nobody' },
      { amount: '1.00', context: playerContext('pay'), target: 'Alex' },
      { amount: '1.234', context: playerContext('pay'), target: 'Sam' },
      { amount: '1.00', context: playerContext('pay'), target: 'Sam' },
    ];

    for (const { amount, context, target } of cases) {
      const plugin = new EconomyPlugin();
      await plugin.pay(target, amount, context.sender, context.asContext());
      expect(plugin.economy.balance(alex.id)).toBe(0);
      expect(plugin.economy.balance(sam.id)).toBe(0);
      expect(context.replies).toHaveLength(1);
    }
    expect(cases[0]?.context.replies[0]).toContain('No exact or cached player');
    expect(cases[1]?.context.replies[0]).toBe('You cannot pay yourself.');
    expect(cases[2]?.context.replies[0]).toContain('positive decimal');
    expect(cases[3]?.context.replies[0]).toBe('Insufficient funds. Your balance is $0.00.');
  });
});

describe('/bal and console senders', () => {
  it('shows a player their own balance and resolves another cached player', async () => {
    const plugin = new EconomyPlugin();
    plugin.economy.deposit(alex.id, 25);
    const own = playerContext('bal');
    const other = playerContext('bal');

    await plugin.balance(undefined, undefined, own.sender, own.asContext());
    await plugin.balance('Sam', undefined, other.sender, other.asContext());
    expect(own.replies).toEqual(["Alex's balance is $0.25."]);
    expect(other.replies).toEqual(["Sam's balance is $0.00."]);
  });

  it('can display the bound boolean option as minor units', async () => {
    const plugin = new EconomyPlugin();
    plugin.economy.deposit(alex.id, 125);
    const context = playerContext('bal');

    await plugin.balance(undefined, true, context.sender, context.asContext());
    expect(context.replies).toEqual(["Alex's balance is 125 minor units."]);
  });

  it('allows targeted console balances but rejects player-only operations', async () => {
    const plugin = new EconomyPlugin();
    const targeted = new FakePaperCommandContext({ kind: 'console', name: 'Console' }, 'bal', [
      alex,
      sam,
    ]);
    const own = new FakePaperCommandContext({ kind: 'console', name: 'Console' }, 'bal');
    const pay = new FakePaperCommandContext({ kind: 'console', name: 'Console' }, 'pay', [
      alex,
      sam,
    ]);
    const sell = new FakePaperCommandContext({ kind: 'console', name: 'Console' }, 'sell');

    await plugin.balance('Alex', undefined, targeted.sender, targeted.asContext());
    await plugin.balance(undefined, undefined, own.sender, own.asContext());
    await plugin.pay('Sam', '1.00', pay.sender, pay.asContext());
    await plugin.sell(sell.sender, sell.asContext());
    expect(targeted.replies).toEqual(["Alex's balance is $0.00."]);
    expect(own.replies[0]).toBe('Only players can use this command.');
    expect(pay.replies[0]).toBe('Only players can use this command.');
    expect(sell.replies[0]).toBe('Only players can use this command.');
  });
});

describe('/sell', () => {
  it('removes and sells the entire main-hand stack before crediting', async () => {
    const plugin = new EconomyPlugin();
    const context = playerContext('sell');
    context.heldItem = { amount: 3, material: 'DIAMOND' };

    await plugin.sell(context.sender, context.asContext());
    expect(context.heldItem).toBeUndefined();
    expect(plugin.economy.balance(alex.id)).toBe(3_000);
    expect(context.replies).toEqual(['Sold 3 DIAMOND for $30.00. Your balance is $30.00.']);
  });

  it('does not credit when atomic stack removal loses a race', async () => {
    const plugin = new EconomyPlugin();
    const context = playerContext('sell');
    context.heldItem = { amount: 8, material: 'IRON_INGOT' };
    context.failRemoval = true;

    await plugin.sell(context.sender, context.asContext());
    expect(context.heldItem).toEqual({ amount: 8, material: 'IRON_INGOT' });
    expect(plugin.economy.balance(alex.id)).toBe(0);
    expect(context.replies[0]).toContain('changed before it could be sold');
  });

  it.each([
    [undefined, 'Hold an item'],
    [{ amount: 1, material: 'AIR' }, 'Hold an item'],
    [{ amount: 1, material: 'DIRT' }, 'does not have a sell price'],
    [{ amount: 0, material: 'DIAMOND' }, 'stack is invalid'],
  ] as const)('rejects unsellable stacks without changing the ledger', async (item, message) => {
    const plugin = new EconomyPlugin();
    const context = playerContext('sell');
    context.heldItem = item;

    await plugin.sell(context.sender, context.asContext());
    expect(plugin.economy.balance(alex.id)).toBe(0);
    expect(context.replies[0]).toContain(message);
  });

  it('preflights balance overflow before removing the stack', async () => {
    const plugin = new EconomyPlugin();
    plugin.economy.deposit(alex.id, Number.MAX_SAFE_INTEGER);
    const context = playerContext('sell');
    context.heldItem = { amount: 1, material: 'DIAMOND' };

    await plugin.sell(context.sender, context.asContext());
    expect(context.heldItem).toEqual({ amount: 1, material: 'DIAMOND' });
    expect(plugin.economy.balance(alex.id)).toBe(Number.MAX_SAFE_INTEGER);
    expect(context.replies[0]).toContain('safe balance limit');
  });
});

describe('/prices', () => {
  it('opens a protected, actionable price list', async () => {
    const plugin = new EconomyPlugin();
    const context = playerContext('prices');

    await plugin.prices(context.asContext());
    expect(context.openedInventories).toHaveLength(1);
    expect(context.openedInventories[0]).toMatchObject({
      kind: 'inventory',
      protected: true,
      rows: 1,
    });
    expect(context.openedInventories[0]?.slots).toHaveLength(Object.keys(MATERIAL_PRICES).length);
    expect(context.openedInventories[0]?.slots[0]?.item.actions?.left).toBeTypeOf('function');
  });
});
