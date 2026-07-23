/**
 * Compiler-discovered command declarations.
 */
export { Argument, Command, Option, Sender, Subcommand } from '@shamoo/decorators';
export interface CommandContext {
  readonly input: string;
  readonly sender: unknown;
  readonly arguments: Readonly<Record<string, unknown>>;
}
