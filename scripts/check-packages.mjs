import { access, readFile } from 'node:fs/promises';

const packages = [
  ['core', '@shamoo/core'],
  ['common', '@shamoo/common'],
  ['di', '@shamoo/di'],
  ['config', '@shamoo/config'],
  ['testing', '@shamoo/testing'],
  ['platform', '@shamoo/platform'],
  ['paper', '@shamoo/paper'],
  ['paper-raw', '@shamoo/paper-raw'],
  ['velocity', '@shamoo/velocity'],
  ['velocity-raw', '@shamoo/velocity-raw'],
  ['runtime-protocol', '@shamoo/runtime-protocol'],
  ['compiler', '@shamoo/compiler'],
  ['cli', '@shamoo/cli'],
  ['create-shamoo-plugin', '@shamoo/create-plugin'],
];

for (const [directory, expectedName] of packages) {
  const root = new URL(`../packages/${directory}/`, import.meta.url);
  const manifest = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
  if (
    manifest.name !== expectedName ||
    manifest.version !== '0.1.0-alpha.1' ||
    manifest.private === true ||
    !manifest.exports?.['.'] ||
    !manifest.files?.includes('dist') ||
    JSON.stringify(manifest.exports).includes('/src/')
  ) {
    throw new Error(`Invalid public package manifest: ${expectedName}`);
  }
  await access(new URL('dist/index.js', root));
  await access(new URL('dist/index.d.ts', root));
}

process.stdout.write(`Validated ${packages.length} public packages and built API declarations.\n`);
