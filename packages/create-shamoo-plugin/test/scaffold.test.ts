import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { PlatformKind } from '@shamoo/core';
import { afterEach, describe, expect, it } from 'vitest';

import { defaultPluginName, scaffoldPlugin } from '../src/index.js';

const temporary: string[] = [];

afterEach(async () => {
  await Promise.all(temporary.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

describe('plugin scaffolding', () => {
  it('creates a dual-platform project without executing installation', async () => {
    const parent = await mkdtemp(join(tmpdir(), 'shamoo-scaffold-'));
    temporary.push(parent);
    const directory = join(parent, 'identity');
    const result = await scaffoldPlugin({
      directory,
      name: '@example/identity',
      platforms: [PlatformKind.PAPER, PlatformKind.VELOCITY],
    });
    expect(result.files).toContain('src/paper.ts');
    expect(result.files).toContain('src/velocity.ts');
    await expect(readFile(join(directory, 'RUNTIME.md'), 'utf8')).resolves.toContain(
      '<paper-server>/plugins/ShamooRuntime/plugins',
    );
    expect(JSON.parse(await readFile(join(directory, 'shamoo.config.json'), 'utf8'))).toMatchObject(
      {
        name: '@example/identity',
        platforms: ['paper', 'velocity'],
      },
    );
  });

  it.each([
    ['paper', PlatformKind.PAPER, 'npm', 'npm@10.0.0'],
    ['velocity', PlatformKind.VELOCITY, 'yarn', 'yarn@1.22.22'],
  ] as const)(
    'creates a single %s project with the selected package manager',
    async (directoryName, platform, packageManager, expectedManager) => {
      const parent = await mkdtemp(join(tmpdir(), 'shamoo-scaffold-single-'));
      temporary.push(parent);
      const directory = join(parent, directoryName);
      const result = await scaffoldPlugin({
        directory,
        name: `example-${directoryName}`,
        platforms: [platform],
        packageManager,
      });
      const packageValue = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8')) as {
        packageManager: string;
        dependencies: Record<string, string>;
        devDependencies: Record<string, string>;
      };
      expect(packageValue.packageManager).toBe(expectedManager);
      expect(result.files).toContain(`src/${directoryName}.ts`);
      expect(
        Object.keys(packageValue.dependencies).some((name) => name.endsWith(directoryName)),
      ).toBe(true);
      expect(new Set(Object.values(packageValue.dependencies))).toEqual(new Set(['^0.1.0-rc.1']));
      expect(packageValue.devDependencies['@shamoo/cli']).toBe('^0.1.0-rc.1');
    },
  );

  it('rejects unsafe, invalid, duplicate, and existing targets', async () => {
    const parent = await mkdtemp(join(tmpdir(), 'shamoo-scaffold-'));
    temporary.push(parent);
    await expect(scaffoldPlugin({ directory: '', name: 'valid' })).rejects.toThrow(
      'must not be empty',
    );
    await expect(
      scaffoldPlugin({ directory: join(parent, 'bad'), name: 'Invalid Name' }),
    ).rejects.toThrow('Invalid package name');
    await expect(
      scaffoldPlugin({
        directory: join(parent, 'duplicate'),
        name: 'valid',
        platforms: [PlatformKind.PAPER, PlatformKind.PAPER],
      }),
    ).rejects.toThrow('must be unique');
    await expect(
      scaffoldPlugin({ directory: join(parent, 'empty'), name: 'valid', platforms: [] }),
    ).rejects.toThrow('At least one');
    await expect(
      scaffoldPlugin({
        directory: join(parent, 'unknown'),
        name: 'valid',
        platforms: ['unknown' as PlatformKind],
      }),
    ).rejects.toThrow('paper or velocity');
    await expect(scaffoldPlugin({ directory: parent, name: 'valid' })).rejects.toThrow(
      'already exists',
    );
    expect(defaultPluginName('/tmp/My Plugin')).toBe('my-plugin');
  });
});
