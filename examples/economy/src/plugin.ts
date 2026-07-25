import { Argument, Command, Context, Option, Sender, type CommandSender } from '@shamoo/commands';
import { Plugin } from '@shamoo/decorators';
import { inventory, item, miniMessage, text, type PaperCommandContext } from '@shamoo/paper';

import {
  EconomyValidationError,
  formatMoney,
  InMemoryEconomy,
  InsufficientFundsError,
  parseMoney,
} from './index.js';

export const MATERIAL_PRICES: Readonly<Record<string, number>> = Object.freeze({
  COBBLESTONE: 1,
  COAL: 25,
  COPPER_INGOT: 50,
  IRON_INGOT: 100,
  GOLD_INGOT: 250,
  EMERALD: 750,
  DIAMOND: 1_000,
});

class CommandInputError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'CommandInputError';
  }
}

interface AccountPlayer {
  readonly id: string;
  readonly name: string;
}

function playerSender(sender: CommandSender): AccountPlayer {
  if (sender.kind !== 'player' || typeof sender.id !== 'string' || sender.id.length === 0)
    throw new CommandInputError('Only players can use this command.');
  return { id: sender.id, name: sender.name };
}

async function playerNamed(context: PaperCommandContext, name: string): Promise<AccountPlayer> {
  const player = await context.findPlayer(name);
  if (player === null)
    throw new CommandInputError(`No exact or cached player named "${name}" was found.`);
  return player;
}

async function handleExpectedError(context: PaperCommandContext, error: unknown): Promise<void> {
  if (error instanceof InsufficientFundsError) {
    await context.reply(`Insufficient funds. Your balance is ${formatMoney(error.balance)}.`);
    return;
  }
  if (error instanceof CommandInputError || error instanceof EconomyValidationError) {
    await context.reply(error.message);
    return;
  }
  throw error;
}

@Plugin({ name: 'economy' })
export class EconomyPlugin {
  public readonly economy = new InMemoryEconomy();

  @Command('pay <player> <amount>', {
    description: 'Transfer decimal currency to an exact online or cached player.',
    sender: 'player',
  })
  public async pay(
    @Argument('player', { suggestions: ['players'] }) targetName: string,
    @Argument('amount', { suggestions: ['1.00', '10.00', '100.00'] }) rawAmount: string,
    @Sender() commandSender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    try {
      const sender = playerSender(commandSender);
      const target = await playerNamed(context, targetName);
      if (target.id === sender.id) throw new CommandInputError('You cannot pay yourself.');

      const amount = parseMoney(rawAmount);
      this.economy.transfer(sender.id, target.id, amount);
      await context.reply(
        `Paid ${target.name} ${formatMoney(amount)}. Your balance is ${formatMoney(this.economy.balance(sender.id))}.`,
      );
    } catch (error) {
      await handleExpectedError(context, error);
    }
  }

  @Command('bal [player]', {
    aliases: ['balance'],
    description: 'Show a player balance, optionally in raw minor units.',
  })
  public async balance(
    @Argument('player', { suggestions: ['players'] }) requestedName: string | undefined,
    @Option('minor', { aliases: ['m'], parser: 'boolean' }) minor: boolean | undefined,
    @Sender() sender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    try {
      const player =
        requestedName === undefined
          ? playerSender(sender)
          : await playerNamed(context, requestedName);
      const balance = this.economy.balance(player.id);
      await context.reply(
        minor === true
          ? `${player.name}'s balance is ${String(balance)} minor units.`
          : `${player.name}'s balance is ${formatMoney(balance)}.`,
      );
    } catch (error) {
      await handleExpectedError(context, error);
    }
  }

  @Command('sell', {
    description: 'Atomically sell the entire stack in your main hand.',
    sender: 'player',
  })
  public async sell(
    @Sender() commandSender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    try {
      const sender = playerSender(commandSender);
      const heldItem = await context.mainHand();
      if (heldItem === null) throw new CommandInputError('Hold an item in your main hand to sell.');
      const material = heldItem.material.trim().toUpperCase();
      if (material === 'AIR' || material === 'CAVE_AIR' || material === 'VOID_AIR')
        throw new CommandInputError('Hold an item in your main hand to sell.');
      if (!Number.isSafeInteger(heldItem.amount) || heldItem.amount <= 0)
        throw new CommandInputError('The held item stack is invalid.');

      const unitPrice = MATERIAL_PRICES[material];
      if (unitPrice === undefined)
        throw new CommandInputError(`${material} does not have a sell price.`);
      const proceeds = unitPrice * heldItem.amount;
      const currentBalance = this.economy.balance(sender.id);
      if (!Number.isSafeInteger(proceeds) || !Number.isSafeInteger(currentBalance + proceeds))
        throw new EconomyValidationError('The sale would exceed the safe balance limit.');

      if (!(await context.takeMainHand(heldItem.material, heldItem.amount)))
        throw new CommandInputError('Your held item changed before it could be sold. Try again.');
      const nextBalance = this.economy.deposit(sender.id, proceeds);
      await context.reply(
        `Sold ${String(heldItem.amount)} ${material} for ${formatMoney(proceeds)}. Your balance is ${formatMoney(nextBalance)}.`,
      );
    } catch (error) {
      await handleExpectedError(context, error);
    }
  }

  @Command('prices', {
    aliases: ['shop'],
    description: 'Open the protected sell-price reference.',
    sender: 'player',
  })
  public async prices(@Context() context: PaperCommandContext): Promise<void> {
    const opened = await context.openInventory(
      inventory(1, miniMessage('<gold><bold>Sell prices</bold></gold>'), {
        slots: Object.entries(MATERIAL_PRICES).map(([material, unitPrice], index) => ({
          slot: index + 1,
          item: item(material, {
            name: text(material.replaceAll('_', ' '), { color: 'gold', bold: true }),
            lore: [
              miniMessage('<gray>Each: <green><price></green></gray>', {
                placeholders: { price: formatMoney(unitPrice) },
              }),
              text('Left-click to repeat the price in chat.', { color: 'gray' }),
            ],
            actions: {
              left: async (action) => {
                await action.reply(`${material} sells for ${formatMoney(unitPrice)} each.`);
              },
            },
          }),
        })),
      }),
    );
    if (!opened) await context.reply('The price list could not be opened.');
  }
}
