# @shamoo/commands

Compiler-discovered command routes and typed parameter bindings for Shamoo plugins.

```ts
import {
  Argument,
  Command,
  Context,
  Option,
  Sender,
  type CommandSender,
  type Player,
} from '@shamoo/commands';
import type { PaperCommandContext } from '@shamoo/paper';

class GreetingCommands {
  @Command('greet [player]')
  public async greet(
    @Argument('player', { suggestions: ['players'] })
    player: Player | undefined,
    @Option('loud', { aliases: ['l'] }) loud: boolean | undefined,
    @Sender() sender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    await context.reply(loud === true ? 'HELLO' : `Hello, ${player?.name ?? sender.name}`);
  }
}
```

The package provides `Command`, `Subcommand`, `Argument`, `Option`, `Sender`, and `Context`, plus
data-only sender/player/item contracts. Paper supports literal routes, required/optional/trailing
greedy arguments, typed parsers, static and dynamic suggestions, options, aliases, descriptions,
permissions, and sender restrictions.

`shamooc` infers omitted argument and option parsers from method parameter types: `string`, `number`,
`boolean`, and the exact exported `Player` identity map to their corresponding parsers after
`null`/`undefined` are removed. Homogeneous primitive literal unions and enums use their string or
number base. An explicit parser such as `integer` or `material` always wins. Arrays and ambiguous
unions require a scalar binding and explicit handling. Command bindings are valid only on method
parameters, not properties.

Paper command methods return `void` or `Promise<void>`. Native dispatch ignores decorated method
return values, so replies and UI effects must be explicit. Context host operations are
scheduler-marshalled promises and must be awaited before returning. Use a standalone `--` sentinel to
end option parsing when a positional value begins with a dash.

See the repository [command guide](../../docs/commands.md) for exact syntax and runtime behavior.
