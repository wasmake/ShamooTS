import { execFile } from 'node:child_process';
import { mkdir, readFile, readdir, rm, unlink } from 'node:fs/promises';
import { isAbsolute, relative, resolve, sep } from 'node:path';
import { promisify } from 'node:util';

const execute = promisify(execFile);
const root = resolve(import.meta.dirname, '..');
const examplesRoot = resolve(root, 'examples');
const cli = resolve(root, 'packages/cli/dist/cli.js');
const archiveRoot = process.argv[2] === undefined ? undefined : resolve(root, process.argv[2]);
const deployableExamples = [
  'commands',
  'complete-paper-plugin',
  'complete-velocity-plugin',
  'configuration',
  'dual-platform-plugin',
  'economy',
  'folia',
  'hello-world',
];

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

if (archiveRoot !== undefined) {
  assertWithinRoot(archiveRoot, 'Example archive output');
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

for (const example of deployableExamples) {
  const project = resolve(examplesRoot, example);
  const deployment = resolve(project, 'deployment');
  const config = JSON.parse(await readFile(resolve(project, 'shamoo.config.json'), 'utf8'));
  assertWithinRoot(deployment, 'Example deployment output');
  await rm(deployment, { force: true, recursive: true });

  const { stdout, stderr } = await execute(
    process.execPath,
    [cli, 'deploy', '--project', project],
    {
      cwd: project,
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
    },
  );
  process.stdout.write(stdout);
  process.stderr.write(stderr);

  const installation = installationName(config.name);
  for (const platform of config.platforms) {
    installations += 1;
    if (archiveRoot === undefined) continue;
    const archive = resolve(
      archiveRoot,
      `shamoo-example-${example}-${platform}-${releaseVersion}.tgz`,
    );
    await execute('tar', ['-czf', archive, '-C', resolve(deployment, platform), installation], {
      cwd: root,
    });
  }
}

process.stdout.write(`Built ${String(installations)} checked-in example deployment(s).\n`);
