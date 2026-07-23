import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { PlatformCapability, PlatformKind } from '@shamoo/core';
import { createPaperPlatform } from '@shamoo/paper';
import { assertCapabilities } from '@shamoo/platform';
import { describe, expect, it } from 'vitest';

const repositoryRoot = fileURLToPath(new URL('../../..', import.meta.url));
const publicPackages = [
  'core',
  'common',
  'di',
  'config',
  'testing',
  'platform',
  'paper',
  'paper-raw',
  'velocity',
  'velocity-raw',
  'runtime-protocol',
  'compiler',
  'cli',
  'create-shamoo-plugin',
  'metadata',
  'decorators',
  'lifecycle',
  'conditions',
  'events',
  'commands',
  'scheduler',
  'interceptors',
  'guards',
  'pipes',
  'filters',
  'validation',
  'reflection',
  'bundler',
];

describe('public package boundaries', () => {
  it('composes a Paper descriptor through public exports', () => {
    const platform = createPaperPlatform([PlatformCapability.EVENTS]);
    expect(platform.kind).toBe(PlatformKind.PAPER);
    expect(() => {
      assertCapabilities(platform, [PlatformCapability.EVENTS]);
    }).not.toThrow();
  });

  it.each(publicPackages)('%s has publishable artifact exports', async (name) => {
    const manifest = JSON.parse(
      await readFile(`${repositoryRoot}/packages/${name}/package.json`, 'utf8'),
    ) as { exports: Record<string, unknown>; files: string[]; private?: boolean; version: string };
    expect(manifest.private).not.toBe(true);
    expect(manifest.version).toBe('0.1.0-alpha.1');
    expect(manifest.files).toContain('dist');
    expect(JSON.stringify(manifest.exports)).not.toContain('/src/');
  });
});
