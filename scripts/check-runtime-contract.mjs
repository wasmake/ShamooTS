import { readFile, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const runtimeRoot = resolve(process.env.SHAMOO_RUNTIME_ROOT ?? `${root}/../ShamooRuntime`);
const packageDirectories = await readdir(resolve(root, 'packages'), { withFileTypes: true });
const versions = [];
for (const directory of packageDirectories) {
  if (!directory.isDirectory()) continue;
  try {
    const manifest = JSON.parse(
      await readFile(resolve(root, 'packages', directory.name, 'package.json'), 'utf8'),
    );
    if (typeof manifest.name === 'string' && manifest.name.startsWith('@shamoo/'))
      versions.push([manifest.name, manifest.version]);
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
}
const releaseVersion = versions[0]?.[1];
if (
  typeof releaseVersion !== 'string' ||
  versions.some(([, version]) => version !== releaseVersion)
)
  throw new Error(`Public package versions are not synchronized: ${JSON.stringify(versions)}`);

for (const [file, expression] of [
  ['packages/cli/src/index.ts', /CLI_VERSION = '([^']+)'/u],
  ['packages/compiler/src/index.ts', /SHAMOO_COMPILER_VERSION = '([^']+)'/u],
]) {
  const match = expression.exec(await readFile(resolve(root, file), 'utf8'));
  if (match?.[1] !== releaseVersion)
    throw new Error(`${file} version does not match ${releaseVersion}.`);
}

const tag = process.env.GITHUB_REF_NAME;
if (tag !== undefined) {
  if (releaseVersion.includes('-')) {
    const expectedTag = `v${releaseVersion}`;
    if (tag !== expectedTag)
      throw new Error(`Release tag ${tag} must exactly match ${expectedTag}.`);
  } else {
    const expected = new RegExp(
      `^v${releaseVersion.replaceAll('.', '\\.')}-rc\\.[1-9][0-9]*$`,
      'u',
    );
    if (!expected.test(tag)) throw new Error(`RC tag ${tag} must match v${releaseVersion}-rc.N.`);
  }
}

const runtimeProperties = await readFile(resolve(runtimeRoot, 'gradle.properties'), 'utf8');
const runtimeVersion = /^projectVersion=(.+)$/mu.exec(runtimeProperties)?.[1];
const stableVersion = releaseVersion.split('-')[0];
if (runtimeVersion !== `${stableVersion}-SNAPSHOT` && runtimeVersion !== stableVersion)
  throw new Error(
    `Runtime ${runtimeVersion ?? 'unknown'} is incompatible with TS ${releaseVersion}.`,
  );

const tsGolden = JSON.parse(
  await readFile(
    resolve(root, 'packages/runtime-protocol/test/fixtures/common-descriptor.golden.json'),
    'utf8',
  ),
);
const javaGolden = JSON.parse(
  await readFile(
    resolve(runtimeRoot, 'runtime-protocol/src/test/resources/manifests/full-v2.json'),
    'utf8',
  ),
);
if (JSON.stringify(tsGolden) !== JSON.stringify(javaGolden))
  throw new Error('Java and TypeScript canonical v2 descriptor fixtures differ.');

const javaValidation = await readFile(
  resolve(
    runtimeRoot,
    'runtime-protocol/src/main/java/dev/shamoo/runtime/protocol/ManifestValidation.java',
  ),
  'utf8',
);
const javaReload = await readFile(
  resolve(
    runtimeRoot,
    'runtime-protocol/src/main/java/dev/shamoo/runtime/protocol/ReloadPolicy.java',
  ),
  'utf8',
);
const javaArtifacts = await readFile(
  resolve(
    runtimeRoot,
    'runtime-protocol/src/main/java/dev/shamoo/runtime/protocol/PluginArtifactProtocol.java',
  ),
  'utf8',
);
for (const contract of [
  'value.length() > 64',
  '(?:node:)?',
  '".".equals(segment)',
  '"..".equals(segment)',
])
  if (!javaValidation.includes(contract))
    throw new Error(`Runtime validation contract is missing ${contract}.`);
if (!javaReload.includes('MAX_DEBOUNCE_MS = 60_000'))
  throw new Error('Runtime debounce contract is not canonical v2.');
for (const artifact of ['index.js', 'index.js.map', 'shamoo-plugin.json'])
  if (!javaArtifacts.includes(`"${artifact}"`))
    throw new Error(`Runtime artifact contract is missing ${artifact}.`);

process.stdout.write(
  `Verified TS ${releaseVersion} against Runtime ${runtimeVersion}, manifest v2, and the shared descriptor fixture.\n`,
);
