#!/usr/bin/env node
import { packageName, PlatformKind } from '@shamoo/core';

import { compilePlugin } from './index.js';

function option(arguments_: readonly string[], name: string): string | undefined {
  const index = arguments_.indexOf(name);
  return index < 0 ? undefined : arguments_[index + 1];
}

async function main(): Promise<void> {
  const arguments_ = process.argv.slice(2);
  if (arguments_.includes('--help')) {
    process.stdout.write(
      'Usage: shamooc --project tsconfig.json --entry src/plugin.ts --package @scope/name --platform paper[,velocity] --out dist/shamoo.metadata.json\n',
    );
    return;
  }
  const entrypoint = option(arguments_, '--entry');
  const name = option(arguments_, '--package');
  const platforms = option(arguments_, '--platform');
  if (entrypoint === undefined || name === undefined || platforms === undefined) {
    throw new TypeError(
      'shamooc requires --entry, --package, and --platform. Run with --help for usage.',
    );
  }
  const parsedPlatforms = platforms.split(',').map((platform) => {
    if (platform === 'paper') return PlatformKind.PAPER;
    if (platform === 'velocity') return PlatformKind.VELOCITY;
    throw new TypeError(`Unsupported platform: ${platform}.`);
  });
  const project = option(arguments_, '--project');
  const paperEntrypoint = option(arguments_, '--paper-entry');
  const velocityEntrypoint = option(arguments_, '--velocity-entry');
  const output = option(arguments_, '--out');
  const result = await compilePlugin({
    ...(project === undefined ? {} : { tsconfig: project }),
    entrypoint,
    packageName: packageName(name),
    platforms: parsedPlatforms,
    ...(paperEntrypoint === undefined ? {} : { paperEntrypoint }),
    ...(velocityEntrypoint === undefined ? {} : { velocityEntrypoint }),
    ...(output === undefined ? {} : { output }),
  });
  if (result.metadata === undefined) {
    for (const diagnostic of result.diagnostics) {
      const at =
        diagnostic.location === undefined
          ? ''
          : ` ${diagnostic.location.file}:${String(diagnostic.location.line)}:${String(diagnostic.location.column)}`;
      process.stderr.write(`${diagnostic.code}${at}: ${diagnostic.message}\n`);
    }
    process.exitCode = 1;
  } else if (output === undefined) process.stdout.write(result.metadata);
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
