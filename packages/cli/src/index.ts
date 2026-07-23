export const CLI_VERSION = '0.1.0-alpha.1' as const;
export type CliCommand = 'build' | 'help' | 'version' | 'paper' | 'velocity';
export type CodegenAction = 'generate' | 'sync' | 'diff';
export interface PlatformCodegenInvocation {
  readonly platform: 'paper' | 'velocity';
  readonly action: CodegenAction;
  readonly surface?: 'paper' | 'paper-nms' | 'paper-packets';
  readonly model?: string;
  readonly outputDirectory?: string;
}
export function parseCliCommand(argument: string | undefined): CliCommand {
  if (argument === undefined || argument === '--help' || argument === '-h') return 'help';
  if (argument === '--version' || argument === '-v') return 'version';
  if (argument === 'build' || argument === 'paper' || argument === 'velocity') return argument;
  throw new TypeError(`Unknown Shamoo command: ${argument}`);
}
export function parsePlatformCodegenInvocation(
  arguments_: readonly string[],
): PlatformCodegenInvocation {
  const platform = parseCliCommand(arguments_[0]);
  if (platform !== 'paper' && platform !== 'velocity')
    throw new TypeError('Platform code generation requires paper or velocity.');
  const action = arguments_[1] ?? 'generate';
  if (action !== 'generate' && action !== 'sync' && action !== 'diff')
    throw new TypeError(`Unknown code generation action: ${action}`);
  if (platform === 'velocity')
    return {
      platform,
      action,
      ...(arguments_[2] === undefined ? {} : { model: arguments_[2] }),
      ...(arguments_[3] === undefined ? {} : { outputDirectory: arguments_[3] }),
    };
  const surface = arguments_[2] ?? 'paper';
  if (surface !== 'paper' && surface !== 'paper-nms' && surface !== 'paper-packets')
    throw new TypeError(`Unknown Paper code generation surface: ${surface}`);
  return {
    platform,
    action,
    surface,
    ...(arguments_[3] === undefined ? {} : { model: arguments_[3] }),
    ...(arguments_[4] === undefined ? {} : { outputDirectory: arguments_[4] }),
  };
}
