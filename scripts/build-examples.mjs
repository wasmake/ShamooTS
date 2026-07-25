import { execFile } from 'node:child_process';
import { copyFile, mkdir, readFile, readdir, rm, unlink } from 'node:fs/promises';
import { isAbsolute, relative, resolve, sep } from 'node:path';
import { promisify } from 'node:util';

const execute = promisify(execFile);
const root = resolve(import.meta.dirname, '..');
const examplesRoot = resolve(root, 'examples');
const outputRoot = resolve(root, process.argv[2] ?? 'examples/compiled');
const archiveRoot = process.argv[3] === undefined ? undefined : resolve(root, process.argv[3]);
const compiler = resolve(root, 'packages/cli/dist/shamooc.js');
const installableExamples = [
  'commands',
  'complete-paper-plugin',
  'complete-velocity-plugin',
  'configuration',
  'dual-platform-plugin',
  'economy',
  'folia',
  'hello-world',
];
const installationFiles = ['index.js', 'index.js.map', 'shamoo-plugin.json'];

function assertWithinRoot(path, label) {
  const location = relative(root, path);
  if (
    location.length === 0 ||
    location === '..' ||
    location.startsWith(`..${sep}`) ||
    isAbsolute(location)
  ) {
    throw new TypeError(`${label} must remain inside the repository.`);
  }
}

function installationName(packageName) {
  return (packageName.split('/').at(-1) ?? packageName).replace(/[^a-zA-Z0-9._-]/gu, '-');
}

async function assertInstallation(directory, label) {
  const entries = await readdir(directory, { withFileTypes: true });
  const actual = entries.map((entry) => entry.name).sort();
  if (
    entries.some((entry) => !entry.isFile()) ||
    JSON.stringify(actual) !== JSON.stringify(installationFiles)
  ) {
    throw new Error(
      `${label} must contain exactly ${installationFiles.join(', ')}; found ${actual.join(', ') || 'nothing'}.`,
    );
  }
}

assertWithinRoot(outputRoot, 'Example output');
if (archiveRoot !== undefined) assertWithinRoot(archiveRoot, 'Example archive output');
await rm(outputRoot, { force: true, recursive: true });
await mkdir(outputRoot, { recursive: true });
if (archiveRoot !== undefined) {
  await mkdir(archiveRoot, { recursive: true });
  const oldArchives = (await readdir(archiveRoot)).filter(
    (name) => name.startsWith('shamoo-example-') && name.endsWith('.tgz'),
  );
  await Promise.all(oldArchives.map((name) => unlink(resolve(archiveRoot, name))));
}

const releaseManifest = JSON.parse(
  await readFile(resolve(root, 'packages/core/package.json'), 'utf8'),
);
const releaseVersion = releaseManifest.version;
let installations = 0;

for (const example of installableExamples) {
  const project = resolve(examplesRoot, example);
  const config = JSON.parse(await readFile(resolve(project, 'shamoo.config.json'), 'utf8'));
  const { stdout, stderr } = await execute(process.execPath, [compiler, '--project', project], {
    cwd: project,
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
  });
  process.stdout.write(stdout);
  process.stderr.write(stderr);

  const installation = installationName(config.name);
  const source = resolve(project, config.outDir ?? 'dist');
  await assertInstallation(source, `${example} compiler output`);
  const output = resolve(outputRoot, installation);
  await mkdir(output, { recursive: true });
  for (const file of installationFiles)
    await copyFile(resolve(source, file), resolve(output, file));
  await assertInstallation(output, `${example} copied installation`);
  installations += 1;
  if (archiveRoot !== undefined) {
    const archive = resolve(archiveRoot, `shamoo-example-${example}-${releaseVersion}.tgz`);
    await execute('tar', ['-czf', archive, '-C', outputRoot, installation], {
      cwd: root,
    });
  }
}

process.stdout.write(
  `Built ${String(installations)} universal example installation(s) in ${outputRoot}.\n`,
);
