import {
  Argument,
  Command,
  Context,
  Option,
  Sender,
  type CommandSender,
  type Context as CommandContext,
  type Player,
} from '@shamoo/commands';
import { Plugin } from '@shamoo/decorators';

@Plugin()
export class CommandPlugin {
  @Command('sample give <target>', {
    aliases: ['example'],
    description: 'Give an item',
    permission: 'sample.give',
    sender: 'player',
  })
  public give(
    @Argument('target', { parser: 'player', suggestions: ['Alex', 'Steve'] }) target: Player,
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
}
