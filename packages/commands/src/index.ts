/** Compiler-discovered command declarations and data-only command values. */
import {
  Argument as declareArgument,
  Command as declareCommand,
  Context as declareContext,
  Option as declareOption,
  Sender as declareSender,
  Subcommand as declareSubcommand,
  type ShamooDecorator,
} from '@shamoo/decorators';

export type CommandParser = 'string' | 'integer' | 'number' | 'boolean' | 'player' | 'material';
export type ParserType = CommandParser;
export type CommandSenderKind = 'any' | 'player' | 'console';

export interface CommandOptions {
  readonly aliases?: readonly string[];
  readonly description?: string;
  readonly permission?: string;
  readonly sender?: CommandSenderKind;
}

export interface ArgumentOptions {
  readonly parser?: CommandParser;
  readonly suggestions?: readonly string[];
}

export interface OptionOptions extends ArgumentOptions {
  readonly aliases?: readonly string[];
  readonly required?: boolean;
}

export interface CommandSender {
  readonly name: string;
  readonly kind: 'player' | 'console' | 'other';
  readonly id?: string;
}

export interface Player {
  readonly id: string;
  readonly name: string;
  readonly online: boolean;
}

export interface Item {
  readonly material: string;
  readonly amount: number;
}

export interface Context {
  readonly sender: CommandSender;
  readonly alias: string;
  readonly input: string;
  readonly arguments: Readonly<Record<string, unknown>>;
  readonly options: Readonly<Record<string, unknown>>;
}

/** @deprecated Use `Context`. */
export type CommandContext = Context;

export function Command(syntax: string, options?: CommandOptions): ShamooDecorator {
  return options === undefined ? declareCommand(syntax) : declareCommand(syntax, options);
}

export function Subcommand(syntax: string, options?: CommandOptions): ShamooDecorator;
export function Subcommand(root: string, syntax: string, options?: CommandOptions): ShamooDecorator;
export function Subcommand(
  rootOrSyntax: string,
  syntaxOrOptions?: string | CommandOptions,
  options?: CommandOptions,
): ShamooDecorator {
  if (typeof syntaxOrOptions === 'string') {
    return options === undefined
      ? declareSubcommand(rootOrSyntax, syntaxOrOptions)
      : declareSubcommand(rootOrSyntax, syntaxOrOptions, options);
  }
  return syntaxOrOptions === undefined
    ? declareSubcommand(rootOrSyntax)
    : declareSubcommand(rootOrSyntax, syntaxOrOptions);
}

export function Argument(name: string, options?: ArgumentOptions): ShamooDecorator {
  return options === undefined ? declareArgument(name) : declareArgument(name, options);
}

export function Option(name: string, options?: OptionOptions): ShamooDecorator {
  return options === undefined ? declareOption(name) : declareOption(name, options);
}

export function Sender(): ShamooDecorator {
  return declareSender();
}

export function Context(): ShamooDecorator {
  return declareContext();
}
