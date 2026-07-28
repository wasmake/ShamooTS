# Commands

`@shamoo/commands` declares command routes and method-parameter bindings that `shamooc` discovers at
build time. On Paper, ShamooRuntime validates each route, parses an invocation into data-only values,
enforces its permission and sender restriction, and invokes the compiled method with the decorated
parameters.

The API is intentionally smaller than a native Brigadier tree. For background on the command-method
model, see Incendo Cloud's [annotation command methods](https://cloud.incendo.org/annotations/#command-methods).
Shamoo's syntax and decorators below are its own compile-time contract.

## Route syntax

Pass the complete route to `@Command`:

```ts
@Command('mail send <target> [message...]')
```

Or separate a shared root with either `@Subcommand` form:

```ts
@Subcommand('mail send <target>')
@Subcommand('mail', 'send <target>')
```

The syntax consists of whitespace-separated tokens.

| Form           | Meaning                                                               |
| -------------- | --------------------------------------------------------------------- |
| `mail`         | Literal root. Every route begins with one.                            |
| `send`         | Case-insensitive literal below the root.                              |
| `<target>`     | Required positional argument.                                         |
| `[message]`    | Optional positional argument.                                         |
| `<message...>` | Required trailing greedy string, joined with spaces.                  |
| `[message...]` | Optional trailing greedy string, joined with spaces when it is given. |

Route rules are strict:

- Roots and root aliases are normalized to lower case. The resulting labels must match
  `[a-z0-9][a-z0-9_-]{0,63}`.
- Argument names must match `[A-Za-z][A-Za-z0-9_-]{0,63}`. Every syntax argument must have exactly
  one matching `@Argument`, and every `@Argument` must appear in the syntax.
- Required arguments and literals cannot follow an optional argument.
- A greedy argument must be last and must use the `string` parser.
- Options are declarations, not syntax tokens. Do not put `--option` in the route string.
- Routes under one root are aggregated and the most specific matching route wins. Literal, restricted,
  required, and typed routes are preferred over catch-all routes.
- Every route owned by one plugin and sharing a root must declare exactly the same root aliases.

## Method decorators

Import the typed declarations from `@shamoo/commands` rather than the untyped low-level declarations
from `@shamoo/decorators`.

### `CommandOptions`

| Property      | Type                             | Default | Behavior                                                    |
| ------------- | -------------------------------- | ------- | ----------------------------------------------------------- |
| `aliases`     | `readonly string[]`              | `[]`    | Alternate labels for the root.                              |
| `description` | `string`                         | `''`    | Route description metadata.                                 |
| `permission`  | `string`                         | `''`    | Permission checked before the handler; empty allows anyone. |
| `sender`      | `'any' \| 'player' \| 'console'` | `'any'` | Restricts the route to a Paper sender kind.                 |

`@Command(syntax, options)` and both `@Subcommand` overloads accept this table.

### `ArgumentOptions`

| Property      | Type                | Default  | Behavior                                                   |
| ------------- | ------------------- | -------- | ---------------------------------------------------------- |
| `parser`      | `CommandParser`     | Inferred | Explicit parser override applied before method invocation. |
| `suggestions` | `readonly string[]` | `[]`     | Static or magic completion source.                         |

Declare a positional binding with `@Argument(name, options)`.

### `OptionOptions`

| Property      | Type                | Default  | Behavior                                                  |
| ------------- | ------------------- | -------- | --------------------------------------------------------- |
| `parser`      | `CommandParser`     | Inferred | Explicit parser override applied to the option value.     |
| `suggestions` | `readonly string[]` | `[]`     | Static or magic completion source.                        |
| `aliases`     | `readonly string[]` | `[]`     | One-character short names such as `['v']` for `-v`.       |
| `required`    | `boolean`           | `false`  | Rejects the route match when the option was not supplied. |

Declare an option binding with `@Option(name, options)`. Long and short forms can occur among the
positional tokens:

```text
--amount 4
--amount=4
-a 4
-a=4
```

A bare boolean option, such as `--verbose`, binds `true`. `--verbose=false` explicitly binds `false`.
Options cannot be repeated. A required option must be present. An omitted optional option is absent
from `context.options` and binds as `undefined`.

Use a standalone `--` to end option parsing when a positional value begins with a dash. Every token
after the sentinel is positional, including values such as `--literal` or `-1`. An unknown long option
before the sentinel is still rejected rather than treated as a positional value.

### Context bindings

| Decorator         | Bound value                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| `@Argument(name)` | Parsed value from `context.arguments[name]`, or `undefined` for an omitted optional argument. |
| `@Option(name)`   | Parsed value from `context.options[name]`, or `undefined` when omitted.                       |
| `@Sender()`       | Immutable `CommandSender` data: `name`, `kind`, and a player `id` when available.             |
| `@Context()`      | The complete platform context. Paper handlers use `PaperCommandContext`.                      |

Decorate every command method parameter. Parameter order is independent from command input order;
the decorator name performs the lookup. `PaperCommandContext` also contains the selected `alias`, the
raw post-root `input`, and immutable `arguments` and `options` records.

`@Argument`, `@Option`, `@Sender`, and `@Context` are method-parameter bindings. Using one on a
property is a compile error; Shamoo does not perform hidden command property assignment.

## Parser inference

When `parser` is omitted, `shamooc` resolves the decorated method parameter's TypeScript type and
writes the inferred parser into compiler metadata. Runtime reflection is not involved. It first
removes `undefined` and `null`, so optional bindings infer from their remaining type.

| TypeScript parameter type                                  | Emitted parser |
| ---------------------------------------------------------- | -------------- |
| `string`                                                   | `string`       |
| `number`                                                   | `number`       |
| `boolean`                                                  | `boolean`      |
| Exact `Player` identity exported by `@shamoo/commands`     | `player`       |
| Homogeneous string primitive literal union or string enum  | `string`       |
| Homogeneous number primitive literal union or numeric enum | `number`       |

Literal unions and enums select a base parser; they do not restrict accepted input to declared
members. Validate that domain rule in the handler. An explicit `parser` always takes precedence, so
`integer` and `material` overrides continue to work for number and string parameters.

Omitting `parser` for an array, mixed primitive union, structural lookalike of `Player`, or another
unsupported/ambiguous type is a compile error. Arrays have no bounded route representation. Bind one
supported scalar value with an explicit parser and perform collection or domain conversion in the
method instead.

## Parsers

| Parser     | Bound Type | Accepted input and result                                                                |
| ---------- | ---------- | ---------------------------------------------------------------------------------------- |
| `string`   | `string`   | One non-empty token, or the space-joined remainder for a greedy argument.                |
| `integer`  | `number`   | A signed 32-bit decimal integer.                                                         |
| `number`   | `number`   | Any finite Java/JavaScript double, including decimal and exponent forms.                 |
| `boolean`  | `boolean`  | Case-insensitive `true` or `false`; a bare boolean option is `true`.                     |
| `player`   | `Player`   | Exact, currently online Paper player; returns immutable `id`, `name`, and `online` data. |
| `material` | `string`   | Case-insensitive Bukkit material name, normalized to its upper-case enum name.           |

A parser failure means the route does not match, so the method is not invoked. The `player` parser
does not resolve cached offline players; use a string argument followed by
`PaperCommandContext.findPlayer` when cached lookup is required. A parsed material is a Bukkit enum
name, but APIs such as `item()` apply their own stricter suitability checks.

Shamoo currently provides no range, enum, quoted-text, or custom parser declaration. Validate domain
rules in the handler, and use a trailing greedy string for multi-word text.

## Suggestions

`suggestions` has three modes:

| Value                  | Source                                                                   |
| ---------------------- | ------------------------------------------------------------------------ |
| `[]`                   | Parser defaults: booleans, online players, and materials suggest values. |
| `['players']`          | Magic dynamic list of current online player names.                       |
| `['materials']`        | Magic dynamic list of Bukkit material names.                             |
| Any other string array | Static values, such as `['1', '16', '64']`.                              |

Completions are case-insensitively filtered and sorted. Used options are omitted. Suggestions are
empty when the sender does not satisfy the route's sender restriction or permission.

## Complete example

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
import { Plugin } from '@shamoo/decorators';
import { miniMessage, type PaperCommandContext } from '@shamoo/paper';

@Plugin({ name: 'welcome' })
export class WelcomePlugin {
  @Command('welcome [player] [message...]', {
    aliases: ['hi'],
    description: 'Welcome an online player.',
    permission: 'welcome.use',
    sender: 'player',
  })
  public async welcome(
    @Argument('player', { suggestions: ['players'] })
    player: Player | undefined,
    @Argument('message') message: string | undefined,
    @Option('loud', { aliases: ['l'] }) loud: boolean | undefined,
    @Sender() sender: CommandSender,
    @Context() context: PaperCommandContext,
  ): Promise<void> {
    const greeting = loud === true ? (message ?? 'Welcome').toUpperCase() : (message ?? 'Welcome');
    await context.reply(
      miniMessage('<gold><greeting>, <player>!</gold>', {
        placeholders: { greeting, player: player?.name ?? sender.name },
      }),
    );
  }
}
```

See [`examples/commands`](../examples/commands) for shared-root subcommands, parsed materials and
integers, protected UI, and actions. [`examples/economy`](../examples/economy) demonstrates using a
string argument with cached player lookup and stricter fixed-point currency validation.

## Results, security, and lifecycle

`CommandSender.kind` is `player`, `console`, or `other` for command blocks and other Paper sender
implementations. The `sender: 'console'` restriction matches only Paper's console sender.

Paper command methods return `void` or `Promise<void>`. Native dispatch is asynchronous and ignores
decorated method return values; a returned number, string, boolean, or object is never a response.
Send every response explicitly with the asynchronous `PaperCommandContext.reply`, `openInventory`, or
`giveItem` operations described in the [Paper rich text/UI guide](paper-rich-text-ui.md).

Command DTOs are copied, validated, and frozen at the JavaScript boundary. Native Bukkit sender,
player, item, inventory, and Adventure component objects never enter plugin code. Context operations
use an opaque host token that is not exposed on the public context and remains active only until the
command callback's promise settles. Await every context operation before returning. Do not retain a
context for later work; capture data and perform later work through an appropriate scheduler or fresh
callback instead.

Registrations are owned by the plugin and removed when its runtime resources close. The compiler
records command declarations in the existing metadata schema. Before any `paperRegisterCommand` host
call or callback registration, the generated adapter normalizes and validates every route, checks
syntax-to-binding parity and shared-root alias agreement, and rejects malformed or duplicate argument
names, option names, short aliases, and static suggestions. The JVM repeats descriptor validation,
including unsupported parser or sender values. Permission and sender checks happen before plugin code
runs.

The rich typed route implementation documented here is currently Paper-specific. The Velocity
adapter registers command roots but does not yet provide this Paper parser, parameter-binding, or UI
context surface.
