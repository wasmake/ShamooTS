#!/usr/bin/env node
import { resolve } from 'node:path';
import { diffPaperBindings, syncPaperBindings, type PaperGenerationRequest } from './index.js';

async function main(): Promise<void> {
  const command = process.argv[2] ?? 'generate';
  const surface = (process.argv[3] ?? 'paper') as PaperGenerationRequest['surface'];
  if (!['paper', 'paper-nms', 'paper-packets'].includes(surface))
    throw new TypeError(`Unknown Paper surface: ${surface}`);
  const request: PaperGenerationRequest = {
    surface,
    ...(process.argv[4] === undefined || process.argv[4] === '-' ? {} : { model: process.argv[4] }),
    outputDirectory: process.argv[5] ?? resolve(process.cwd(), 'src', 'generated'),
  };
  if (command === 'diff') {
    const difference = await diffPaperBindings(request);
    if (
      [
        difference.declarations,
        difference.metadata,
        difference.coverage,
        ...Object.values(difference.shards),
      ].some((item) => item.changed)
    ) {
      process.stderr.write(`${surface} generated bindings are out of date.\n`);
      process.exitCode = 1;
    }
  } else if (command === 'generate' || command === 'sync') {
    const changed = await syncPaperBindings(request);
    process.stdout.write(
      `${changed.length === 0 ? 'Verified' : 'Updated'} ${surface} generated bindings (${String(changed.length)} changed).\n`,
    );
  } else {
    throw new TypeError(`Unknown codegen command: ${command}`);
  }
}

void main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
