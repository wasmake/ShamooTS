/** Compiler-discovered command declarations. @packageDocumentation */
export { Argument, Command, Option, Sender, Subcommand } from '@shamoo/decorators';
export interface CommandContext {
  readonly input: string;
  readonly sender: unknown;
  readonly arguments: Readonly<Record<string, unknown>>;
}
