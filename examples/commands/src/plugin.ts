import { Command } from '@shamoo/commands';
import { Context, OnEnable, Plugin } from '@shamoo/decorators';
import type { PaperCommandContext } from '@shamoo/paper';

@Plugin({ name: 'commands' })
export class CommandsPlugin {
  @OnEnable()
  public enabled(): void {
    console.info('[commands] Registered shamoo-ping and shamoo-greet.');
  }

  @Command('shamoo-ping')
  public ping(@Context() context: PaperCommandContext): boolean {
    context.reply('pong');
    return true;
  }

  @Command('shamoo-greet')
  public greet(@Context() context: PaperCommandContext): boolean {
    const uppercase = context.arguments.includes('--uppercase');
    const recipient =
      context.arguments.find((value) => value !== '--uppercase') ?? context.sender.name;
    const greeting = `Hello, ${recipient}!`;
    context.reply(uppercase ? greeting.toUpperCase() : greeting);
    return true;
  }
}
