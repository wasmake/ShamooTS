import { execFile } from 'node:child_process';
import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { promisify } from 'node:util';

const execute = promisify(execFile);
const root = resolve(import.meta.dirname, '..');
const releaseDirectory = resolve(process.argv[2] ?? resolve(root, 'release'));
const packageDirectories = await readdir(resolve(root, 'packages'), { withFileTypes: true });
const expected = [];

for (const directory of packageDirectories) {
  if (!directory.isDirectory()) continue;
  let manifest;
  try {
    manifest = JSON.parse(
      await readFile(resolve(root, 'packages', directory.name, 'package.json'), 'utf8'),
    );
  } catch (error) {
    if (error?.code === 'ENOENT') continue;
    throw error;
  }
  if (manifest.private !== true && manifest.name?.startsWith('@shamoo/')) {
    expected.push([manifest.name, manifest.version]);
  }
}

const archiveNames = (await readdir(releaseDirectory))
  .filter((name) => name.endsWith('.tgz'))
  .sort();
if (archiveNames.length !== expected.length) {
  throw new Error(`Expected ${expected.length} tarballs, found ${archiveNames.length}.`);
}

const actual = [];
for (const archiveName of archiveNames) {
  const { stdout } = await execute(
    'tar',
    ['-xOf', resolve(releaseDirectory, archiveName), 'package/package.json'],
    { encoding: 'utf8', maxBuffer: 1024 * 1024 },
  );
  const manifest = JSON.parse(stdout);
  actual.push([manifest.name, manifest.version]);
  for (const group of [
    manifest.dependencies,
    manifest.devDependencies,
    manifest.optionalDependencies,
    manifest.peerDependencies,
  ]) {
    if (Object.values(group ?? {}).some((range) => range.startsWith('workspace:'))) {
      throw new Error(`${archiveName} contains an unresolved workspace dependency.`);
    }
  }
}

expected.sort(([left], [right]) => left.localeCompare(right));
actual.sort(([left], [right]) => left.localeCompare(right));
if (JSON.stringify(actual) !== JSON.stringify(expected)) {
  throw new Error(
    `Packed package names or versions differ from source manifests.\nExpected: ${JSON.stringify(expected)}\nActual: ${JSON.stringify(actual)}`,
  );
}

process.stdout.write(`Validated ${actual.length} release tarballs and their packed manifests.\n`);
