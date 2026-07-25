#!/usr/bin/env node
import { runCli } from './index.js';

void runCli(['build', ...process.argv.slice(2)])
  .then((exitCode) => {
    process.exitCode = exitCode;
  })
  .catch((error: unknown) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  });
