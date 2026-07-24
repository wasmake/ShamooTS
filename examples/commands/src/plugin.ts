import { Argument, Command, Option, Sender } from '@shamoo/commands';
import { OnEnable, Plugin } from '@shamoo/decorators';
import { UseGuards, type Guard } from '@shamoo/guards';

export class SenderMetadataGuard implements Guard {
  public canActivate(context: Parameters<Guard['canActivate']>[0]): boolean {
    return context.attributes.has('sender');
  }
}

@Plugin({ name: 'commands' })
export class CommandsPlugin {
  @OnEnable()
  public enabled(): void {
    console.info('[commands] Registered shamoo-ping and shamoo-greet metadata.');
  }

  @Command('shamoo-ping')
  public ping(): boolean {
    console.info('[commands] pong');
    return true;
  }

  @Command('shamoo-greet')
  @UseGuards(SenderMetadataGuard)
  public greet(
    @Sender() sender?: unknown,
    @Argument('name') name?: string,
    @Option('uppercase') uppercase?: boolean,
  ): boolean {
    const recipient = typeof name === 'string' && name.trim().length > 0 ? name.trim() : 'player';
    const greeting = `Hello, ${recipient}!`;
    const output = uppercase === true ? greeting.toUpperCase() : greeting;
    console.info(`[commands] ${output} senderSupplied=${String(sender !== undefined)}`);
    return true;
  }
}
