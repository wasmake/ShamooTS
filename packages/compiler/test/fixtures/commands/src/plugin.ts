import {
  Argument,
  Command,
  Context,
  Option,
  Sender,
  type CommandSender,
  type Context as CommandContext,
  type Player as CommandPlayer,
} from '@shamoo/commands';
import { Plugin } from '@shamoo/decorators';

import type { ReexportedPlayer } from './types.js';

enum StringMode {
  FAST = 'fast',
  SLOW = 'slow',
}

enum NumericMode {
  ONE = 1,
  TWO = 2,
}

type Direction = 'north' | 'south';
type Rank = 1 | 2;
const parser = 'integer' as const;

@Plugin()
export class CommandPlugin {
  @Command('sample give <target>', {
    aliases: ['example'],
    description: 'Give an item',
    permission: 'sample.give',
    sender: 'player',
  })
  public give(
    @Argument('target', { parser: 'player', suggestions: ['Alex', 'Steve'] }) target: CommandPlayer,
    @Option('amount', {
      parser: 'integer',
      aliases: ['a'],
      suggestions: ['1', '64'],
      required: true,
    })
    amount: number,
    @Sender() sender: CommandSender,
    @Context() context: CommandContext,
  ): void {
    void [target, amount, sender, context];
  }

  @Command(
    'infer <count> <enabled> <target> <mode> <level> <direction> <rank> <material> <shorthand> [optional] [nullableTarget]',
  )
  public inferred(
    @Argument('count') count: number,
    @Argument('enabled') enabled: boolean,
    @Argument('target') target: CommandPlayer,
    @Argument('mode') mode: StringMode,
    @Argument('level') level: NumericMode,
    @Argument('direction') direction: Direction,
    @Argument('rank') rank: Rank,
    @Argument('material', { parser: 'material' }) material: string,
    @Argument('shorthand', { parser }) shorthand: number,
    @Argument('optional') optional: number | null | undefined,
    @Argument('nullableTarget') nullableTarget: ReexportedPlayer | null | undefined,
    @Option('label') label: string | undefined,
    @Option('ratio', { required: true }) ratio: number | undefined,
    @Option('verbose') verbose: boolean | undefined,
  ): void {
    void [
      count,
      enabled,
      target,
      mode,
      level,
      direction,
      rank,
      material,
      shorthand,
      optional,
      nullableTarget,
      label,
      ratio,
      verbose,
    ];
  }
}
