import { Command } from '@shamoo/commands';
import { Context, Plugin } from '@shamoo/decorators';
import type { PaperCommandContext } from '@shamoo/paper';

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

function playerSender(context: PaperCommandContext): AccountPlayer {
  const { sender } = context;
  if (sender.kind !== 'player' || typeof sender.id !== 'string' || sender.id.length === 0)
    throw new CommandInputError('Only players can use this command.');
  return { id: sender.id, name: sender.name };
}

function playerNamed(context: PaperCommandContext, name: string): AccountPlayer {
  const player = context.findPlayer(name);
  if (player === null)
    throw new CommandInputError(`No exact or cached player named "${name}" was found.`);
  return player;
}

function usage(context: PaperCommandContext, syntax: string): CommandInputError {
  return new CommandInputError(`Usage: /${context.alias} ${syntax}`.trimEnd());
}

function handleExpectedError(context: PaperCommandContext, error: unknown): true {
  if (error instanceof InsufficientFundsError) {
    context.reply(`Insufficient funds. Your balance is ${formatMoney(error.balance)}.`);
    return true;
  }
  if (error instanceof CommandInputError || error instanceof EconomyValidationError) {
    context.reply(error.message);
    return true;
  }
  throw error;
}

@Plugin({ name: 'economy' })
export class EconomyPlugin {
  public readonly economy = new InMemoryEconomy();

  @Command('pay')
  public pay(@Context() context: PaperCommandContext): boolean {
    try {
      const sender = playerSender(context);
      if (context.arguments.length !== 2) throw usage(context, '<player> <amount>');

      const targetName = context.arguments[0];
      const rawAmount = context.arguments[1];
      if (targetName === undefined || rawAmount === undefined)
        throw usage(context, '<player> <amount>');
      const target = playerNamed(context, targetName);
      if (target.id === sender.id) throw new CommandInputError('You cannot pay yourself.');

      const amount = parseMoney(rawAmount);
      this.economy.transfer(sender.id, target.id, amount);
      context.reply(
        `Paid ${target.name} ${formatMoney(amount)}. Your balance is ${formatMoney(this.economy.balance(sender.id))}.`,
      );
    } catch (error) {
      return handleExpectedError(context, error);
    }
    return true;
  }

  @Command('bal')
  public balance(@Context() context: PaperCommandContext): boolean {
    try {
      if (context.arguments.length > 1) throw usage(context, '[player]');
      const requestedName = context.arguments[0];
      const player =
        requestedName === undefined ? playerSender(context) : playerNamed(context, requestedName);
      context.reply(`${player.name}'s balance is ${formatMoney(this.economy.balance(player.id))}.`);
    } catch (error) {
      return handleExpectedError(context, error);
    }
    return true;
  }

  @Command('sell')
  public sell(@Context() context: PaperCommandContext): boolean {
    try {
      const sender = playerSender(context);
      if (context.arguments.length !== 0) throw usage(context, '');

      const item = context.mainHand();
      if (item === null) throw new CommandInputError('Hold an item in your main hand to sell.');
      const material = item.material.trim().toUpperCase();
      if (material === 'AIR' || material === 'CAVE_AIR' || material === 'VOID_AIR')
        throw new CommandInputError('Hold an item in your main hand to sell.');
      if (!Number.isSafeInteger(item.amount) || item.amount <= 0)
        throw new CommandInputError('The held item stack is invalid.');

      const unitPrice = MATERIAL_PRICES[material];
      if (unitPrice === undefined)
        throw new CommandInputError(`${material} does not have a sell price.`);
      const proceeds = unitPrice * item.amount;
      const currentBalance = this.economy.balance(sender.id);
      if (!Number.isSafeInteger(proceeds) || !Number.isSafeInteger(currentBalance + proceeds))
        throw new EconomyValidationError('The sale would exceed the safe balance limit.');

      if (!context.takeMainHand(item.material, item.amount))
        throw new CommandInputError('Your held item changed before it could be sold. Try again.');
      const nextBalance = this.economy.deposit(sender.id, proceeds);
      context.reply(
        `Sold ${String(item.amount)} ${material} for ${formatMoney(proceeds)}. Your balance is ${formatMoney(nextBalance)}.`,
      );
    } catch (error) {
      return handleExpectedError(context, error);
    }
    return true;
  }
}
