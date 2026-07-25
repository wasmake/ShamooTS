import {
  Argument,
  Command,
  Context,
  Option,
  Sender,
  Subcommand,
  type CommandSender,
  type Player,
} from '@shamoo/commands';
import { OnEnable, Plugin } from '@shamoo/decorators';
import {
  inventory,
  item,
  legacyText,
  miniMessage,
  text,
  type PaperCommandContext,
} from '@shamoo/paper';

@Plugin({ name: 'commands' })
export class CommandsPlugin {
  @OnEnable()
  public enabled(): void {
    console.info('[commands] Registered ping, greet, and the interactive showcase.');
  }

  @Command('shamoo-ping', {
    aliases: ['sping'],
    description: 'Check whether the Shamoo commands example is responding.',
  })
  public async ping(
    @Sender() sender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    await context.reply(
      text('pong', {
        color: 'green',
        bold: true,
        children: [text(` for ${sender.name}`, { color: 'gray', bold: false })],
      }),
    );
  }

  @Command('shamoo-greet [player] [message...]', {
    aliases: ['sgreet'],
    description: 'Greet an online player with an optional custom message.',
  })
  public async greet(
    @Argument('player', { parser: 'player', suggestions: ['players'] })
    player: Player | undefined,
    @Argument('message') message: string | undefined,
    @Option('uppercase', { aliases: ['u'], parser: 'boolean' }) uppercase: boolean | undefined,
    @Sender() sender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    const recipient = player?.name ?? sender.name;
    const greeting = uppercase === true ? (message ?? 'Hello').toUpperCase() : (message ?? 'Hello');
    await context.reply(
      miniMessage('<gold><bold><greeting></bold></gold><gray>, </gray><aqua><recipient></aqua>!', {
        placeholders: { greeting, recipient },
      }),
    );
  }

  @Subcommand('shamoo-showcase', 'menu', {
    aliases: ['shamoo-demo'],
    description: 'Open a protected rich-text and item-action showcase.',
    permission: 'shamoo.showcase',
    sender: 'player',
  })
  public async menu(@Context() context: PaperCommandContext): Promise<void> {
    const opened = await context.openInventory(
      inventory(
        1,
        miniMessage('<gradient:#5de0e6:#8b5cf6><bold>Shamoo Showcase</bold></gradient>'),
        {
          slots: [
            {
              slot: 2,
              item: item('COMPASS', {
                name: text('Explore commands', { color: 'aqua', bold: true }),
                lore: [
                  legacyText('&7Left-click for a quick tip.'),
                  text('This menu is protected.'),
                ],
                actions: {
                  left: async (action) => {
                    await action.reply(
                      miniMessage(
                        '<aqua>Try <white>/shamoo-greet Alex Welcome aboard</white>.</aqua>',
                      ),
                    );
                  },
                },
              }),
            },
            {
              slot: 6,
              item: item('EMERALD', {
                name: miniMessage('<green><bold>Grant an action item</bold></green>'),
                lore: [
                  legacyText('&7Use &f/shamoo-showcase grant emerald&7.'),
                  text('Granted items react to left and right clicks.', { color: 'gray' }),
                ],
              }),
            },
          ],
        },
      ),
    );
    if (!opened) {
      await context.reply(legacyText('&cThe showcase could not be opened.'));
      return;
    }

    await context.reply(
      text('Showcase opened. ', {
        color: 'gray',
        children: [
          text('Click for a private tip.', {
            color: 'aqua',
            underlined: true,
            click: {
              action: 'callback',
              uses: 2,
              lifetimeSeconds: 60,
              callback: async (action) => {
                await action.reply(
                  miniMessage(
                    '<green>Callbacks can safely reply without exposing native objects.</green>',
                  ),
                );
              },
            },
          }),
        ],
      }),
    );
  }

  @Subcommand('shamoo-showcase', 'grant <material> [amount]', {
    aliases: ['shamoo-demo'],
    description: 'Grant an item whose left and right clicks run TypeScript callbacks.',
    permission: 'shamoo.showcase',
    sender: 'player',
  })
  public async grant(
    @Argument('material', { parser: 'material', suggestions: ['materials'] }) material: string,
    @Argument('amount', { parser: 'integer', suggestions: ['1', '16', '64'] })
    amount: number | undefined,
    @Option('announce', { aliases: ['a'], parser: 'boolean' }) announce: boolean | undefined,
    @Sender() sender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    const count = amount ?? 1;
    if (count < 1 || count > 64) {
      await context.reply(legacyText('&cAmount must be between 1 and 64.'));
      return;
    }

    const granted = await context.giveItem(
      item(material, {
        amount: count,
        name: miniMessage('<gradient:green:aqua><material></gradient>', {
          placeholders: { material },
        }),
        lore: [
          legacyText(`&7Granted to &f${sender.name}&7 by Shamoo.`),
          text('Left-click or right-click while holding this item.', { color: 'yellow' }),
        ],
        actions: {
          left: async (action) => {
            await action.reply(legacyText('&aLeft-click received.'));
          },
          right: async (action) => {
            await action.reply(
              miniMessage('<aqua>You used <white><material></white>.</aqua>', {
                placeholders: { material: action.item?.material ?? material },
              }),
            );
          },
          preventDefault: true,
        },
      }),
    );
    if (granted && announce === true) {
      await context.reply(
        miniMessage('<green>Granted <amount>x <material> to <player>.</green>', {
          placeholders: { amount: String(count), material, player: sender.name },
        }),
      );
    } else if (!granted) {
      await context.reply(legacyText('&cThe item could not be granted.'));
    }
  }
}
