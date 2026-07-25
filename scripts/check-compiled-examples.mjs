import { execFile } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { promisify } from 'node:util';

const execute = promisify(execFile);
const root = resolve(import.meta.dirname, '..');
const compiledRoot = resolve(root, 'examples/compiled');
const installations = [
  'commands',
  'complete-paper-plugin',
  'complete-velocity-plugin',
  'configuration',
  'dual-platform-plugin',
  'economy',
  'folia',
  'hello-world',
];
const requiredFiles = ['index.js', 'index.js.map', 'shamoo-plugin.json'];
const allowDirty = process.argv.slice(2).includes('--allow-dirty');
if (process.argv.slice(2).some((argument) => argument !== '--allow-dirty'))
  throw new TypeError('Usage: node scripts/check-compiled-examples.mjs [--allow-dirty]');
const expectedPaths = installations
  .flatMap((installation) =>
    requiredFiles.map((file) => `examples/compiled/${installation}/${file}`),
  )
  .sort();

const rootEntries = await readdir(compiledRoot, { withFileTypes: true });
const actualInstallations = rootEntries.map((entry) => entry.name).sort();
if (
  rootEntries.some((entry) => !entry.isDirectory()) ||
  JSON.stringify(actualInstallations) !== JSON.stringify(installations)
) {
  throw new Error(
    `Expected compiled installations ${installations.join(', ')}; found ${actualInstallations.join(', ') || 'nothing'}.`,
  );
}

for (const installation of installations) {
  const entries = await readdir(resolve(compiledRoot, installation), { withFileTypes: true });
  const actualFiles = entries.map((entry) => entry.name).sort();
  if (
    entries.some((entry) => !entry.isFile()) ||
    JSON.stringify(actualFiles) !== JSON.stringify(requiredFiles)
  ) {
    throw new Error(
      `${installation} must contain exactly ${requiredFiles.join(', ')}; found ${actualFiles.join(', ') || 'nothing'}.`,
    );
  }
}

const { stdout: trackedFiles } = await execute('git', ['ls-files', '--', 'examples/compiled'], {
  cwd: root,
  encoding: 'utf8',
});
const actualTrackedPaths = trackedFiles.trim().split('\n').filter(Boolean).sort();
if (JSON.stringify(actualTrackedPaths) !== JSON.stringify(expectedPaths)) {
  throw new Error(
    `Expected all 24 compiled paths to be tracked; found:\n${actualTrackedPaths.join('\n')}`,
  );
}

const { stdout: changesFromHead } = await execute(
  'git',
  ['diff', 'HEAD', '--name-status', '--', 'examples/compiled'],
  { cwd: root, encoding: 'utf8' },
);
if (!allowDirty && changesFromHead.length > 0)
  throw new Error(`examples/compiled differs from HEAD:\n${changesFromHead}`);

process.stdout.write(
  `Validated 8 tracked compiled example installations (24 files)${allowDirty ? ' in expected-dirty mode' : ''}.\n`,
);
