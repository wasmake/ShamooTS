import { getRuntimeDeclarations } from '@shamoo/decorators';
import { describe, expect, it } from 'vitest';

import { Argument, Command, Context, Option, Sender, Subcommand } from '../src/index.js';

describe('command declarations', () => {
  it('forwards typed command and parameter options to standard declarations', () => {
    class Commands {
      @Command('sample give <target>', {
        aliases: ['example'],
        description: 'Give an item',
        permission: 'sample.give',
        sender: 'player',
      })
      public execute(
        _target: unknown,
        _silent: unknown,
        _sender: unknown,
        _context: unknown,
      ): void {
        void [_target, _silent, _sender, _context];
      }

      @Subcommand('sample', 'list [page]', { description: 'List entries' })
      public list(): void {
        return;
      }
    }
    Argument('target', { parser: 'player', suggestions: ['Alex'] })(
      Commands.prototype,
      'execute',
      0,
    );
    Option('silent', { parser: 'boolean', aliases: ['s'], required: true })(
      Commands.prototype,
      'execute',
      1,
    );
    Sender()(Commands.prototype, 'execute', 2);
    Context()(Commands.prototype, 'execute', 3);

    expect(getRuntimeDeclarations(Commands)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Argument',
          arguments: ['target', { parser: 'player', suggestions: ['Alex'] }],
        }),
        expect.objectContaining({
          name: 'Command',
          arguments: [
            'sample give <target>',
            {
              aliases: ['example'],
              description: 'Give an item',
              permission: 'sample.give',
              sender: 'player',
            },
          ],
        }),
        expect.objectContaining({ name: 'Context', arguments: [] }),
        expect.objectContaining({ name: 'Option', parameterIndex: 1 }),
        expect.objectContaining({ name: 'Sender', arguments: [] }),
        expect.objectContaining({
          name: 'Subcommand',
          arguments: ['sample', 'list [page]', { description: 'List entries' }],
        }),
      ]),
    );
  });
});
