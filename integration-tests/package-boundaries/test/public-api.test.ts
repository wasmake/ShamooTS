import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { PlatformCapability, PlatformKind } from '@shamoo/core';
import { jsonCodec } from '@shamoo/communication';
import { createPaperPlatform } from '@shamoo/paper';
import { createVelocityPlatform } from '@shamoo/velocity';
import { assertCapabilities } from '@shamoo/platform';
import { describe, expect, it } from 'vitest';

const repositoryRoot = fileURLToPath(new URL('../../..', import.meta.url));
const publicPackages = [
  'core',
  'common',
  'communication',
  'di',
  'config',
  'testing',
  'platform',
  'paper',
  'paper-raw',
  'paper-nms',
  'paper-packets',
  'paper-codegen',
  'velocity',
  'velocity-raw',
  'velocity-codegen',
  'platform-codegen',
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

  it('exposes Velocity and isolate-safe communication through public exports', () => {
    expect(createVelocityPlatform().kind).toBe(PlatformKind.VELOCITY);
    expect(jsonCodec<number>().decode(jsonCodec<number>().encode(1))).toBe(1);
  });

  it.each(publicPackages)('%s has publishable artifact exports', async (name) => {
    const manifest = JSON.parse(
      await readFile(`${repositoryRoot}/packages/${name}/package.json`, 'utf8'),
    ) as { exports: Record<string, unknown>; files: string[]; private?: boolean; version: string };
    expect(manifest.private).not.toBe(true);
    expect(manifest.version).toBe('0.1.0-rc.1');
    expect(manifest.files).toContain('dist');
    expect(JSON.stringify(manifest.exports)).not.toContain('/src/');
  });
});
