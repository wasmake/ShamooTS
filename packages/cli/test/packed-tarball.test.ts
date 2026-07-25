import { execFile } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';

import { afterAll, describe, expect, it } from 'vitest';

const execute = promisify(execFile);
const repository = resolve(import.meta.dirname, '../../..');
const temporary: string[] = [];

afterAll(async () => {
  await Promise.all(temporary.map((path) => rm(path, { recursive: true, force: true })));
});

describe('packed CLI', () => {
  it('installs the packed workspace dependency closure and executes its bin', async () => {
    const root = await mkdtemp(join(tmpdir(), 'shamoo-packed-cli-'));
    temporary.push(root);
    const tarballs = join(root, 'tarballs');
    await execute('pnpm', ['--filter', '@shamoo/cli...', 'build'], {
      cwd: repository,
      timeout: 120_000,
    });
    await execute('pnpm', ['--filter', '@shamoo/cli...', 'pack', '--pack-destination', tarballs], {
      cwd: repository,
      timeout: 120_000,
    });
    const packages = (await readdir(tarballs))
      .filter((name) => name.endsWith('.tgz'))
      .map((name) => join(tarballs, name));
    expect(packages.length).toBeGreaterThan(1);
    await execute(
      'npm',
      [
        'install',
        '--ignore-scripts',
        '--no-audit',
        '--no-fund',
        '--package-lock=false',
        ...packages,
      ],
      { cwd: root, timeout: 120_000 },
    );
    const executable = process.platform === 'win32' ? 'shamoo.cmd' : 'shamoo';
    const result = await execute(join(root, 'node_modules', '.bin', executable), ['--version'], {
      cwd: root,
      timeout: 30_000,
    });
    expect(result.stdout.trim()).toMatch(/^0\.1\.0-rc\.1$/u);
    const cli = join(root, 'node_modules', '.bin', executable);
    await execute(cli, ['create', 'fixture', '--name', 'packed-fixture', '--platform', 'paper'], {
      cwd: root,
      timeout: 30_000,
    });
    await writeFile(
      join(root, 'fixture/src/paper.ts'),
      'export default { enable() {} };\n',
      'utf8',
    );
    await writeFile(join(root, 'fixture/src/plugin.ts'), 'export {};\n', 'utf8');
    await execute(cli, ['build', '--project', 'fixture'], { cwd: root, timeout: 120_000 });
    expect((await readdir(join(root, 'fixture/dist'))).sort()).toEqual([
      'index.js',
      'index.js.map',
      'shamoo-plugin.json',
    ]);
    const shamooManifest = await readFile(join(root, 'fixture/dist/shamoo-plugin.json'), 'utf8');
    await expect(readFile(join(root, 'fixture/dist/index.js.map'), 'utf8')).resolves.toContain(
      'runtime-adapter.ts',
    );

    const compilerExecutable = process.platform === 'win32' ? 'shamooc.cmd' : 'shamooc';
    const shamooc = join(root, 'node_modules', '.bin', compilerExecutable);
    await execute(shamooc, ['--project', 'fixture'], { cwd: root, timeout: 120_000 });
    expect((await readdir(join(root, 'fixture/dist'))).sort()).toEqual([
      'index.js',
      'index.js.map',
      'shamoo-plugin.json',
    ]);
    await expect(readFile(join(root, 'fixture/dist/shamoo-plugin.json'), 'utf8')).resolves.toBe(
      shamooManifest,
    );
  }, 180_000);
});
