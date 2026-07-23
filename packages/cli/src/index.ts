export const CLI_VERSION = '0.1.0-alpha.1' as const;
export type CliCommand = 'build' | 'help' | 'version';
export function parseCliCommand(argument: string | undefined): CliCommand {
  if (argument === undefined || argument === '--help' || argument === '-h') return 'help';
  if (argument === '--version' || argument === '-v') return 'version';
  if (argument === 'build') return argument;
  throw new TypeError(`Unknown Shamoo command: ${argument}`);
}
