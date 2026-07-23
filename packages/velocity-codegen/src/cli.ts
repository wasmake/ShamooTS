#!/usr/bin/env node
import { resolve } from 'node:path';
import { diffVelocityBindings, syncVelocityBindings } from './index.js';
async function main(): Promise<void> {
  const command = process.argv[2] ?? 'generate';
  const request = {
    ...(process.argv[3] === undefined || process.argv[3] === '-' ? {} : { model: process.argv[3] }),
    outputDirectory: process.argv[4] ?? resolve(process.cwd(), 'src', 'generated'),
  };
  if (command === 'diff') {
    const difference = await diffVelocityBindings(request);
    if (
      [
        difference.declarations,
        difference.events,
        difference.coverage,
        ...Object.values(difference.shards),
      ].some((item) => item.changed)
    ) {
      process.stderr.write('velocity generated bindings are out of date.\n');
      process.exitCode = 1;
    }
  } else if (command === 'generate' || command === 'sync') {
    const changed = await syncVelocityBindings(request);
    process.stdout.write(
      `${changed.length === 0 ? 'Verified' : 'Updated'} velocity generated bindings (${String(changed.length)} changed).\n`,
    );
  } else throw new TypeError(`Unknown codegen command: ${command}`);
}

void main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
