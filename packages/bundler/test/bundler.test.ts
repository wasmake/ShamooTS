import { mkdtemp, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { COMPILER_METADATA_VERSION, type CompilerManifest } from '@shamoo/metadata';
import { describe, expect, it } from 'vitest';

import { bundlePlugin } from '../src/index.js';

const projectRoot = dirname(fileURLToPath(import.meta.url));
const manifest: CompilerManifest = {
  formatVersion: COMPILER_METADATA_VERSION,
  compilerVersion: 'test',
  packageName: '@fixture/bundle',
  components: [],
  modules: [],
  entrypoints: {
    paper: { source: 'fixtures/paper.ts', output: 'paper/index.js' },
    velocity: { source: 'fixtures/velocity.ts', output: 'velocity/index.js' },
  },
};

describe('platform bundler', () => {
  it('emits separate real ESM bundles and source maps', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-'));
    const artifacts = await bundlePlugin({ manifest, projectRoot, outputDirectory });
    expect(artifacts.map((item) => item.platform)).toEqual(['paper', 'velocity']);
    const paper = await readFile(join(outputDirectory, 'paper/index.js'), 'utf8');
    const velocity = await readFile(join(outputDirectory, 'velocity/index.js'), 'utf8');
    expect(paper).toContain('paper-only');
    expect(paper).not.toContain('velocity-only');
    expect(velocity).toContain('velocity-only');
    await expect(readFile(join(outputDirectory, 'paper/index.js.map'), 'utf8')).resolves.toContain(
      'sourcesContent',
    );
  });

  it('rejects opposite-platform imports and accepts an empty platform selection', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-leak-'));
    await expect(
      bundlePlugin({
        manifest: {
          ...manifest,
          entrypoints: { paper: { source: 'fixtures/leak.ts', output: 'paper/index.js' } },
        },
        projectRoot,
        outputDirectory,
      }),
    ).rejects.toThrow('paper bundle cannot import');
    await expect(
      bundlePlugin({
        manifest: { ...manifest, entrypoints: {} },
        projectRoot,
        outputDirectory,
      }),
    ).resolves.toEqual([]);
  });

  it.each(['fixtures/leak-export.ts', 'fixtures/leak-dynamic.ts'])(
    'rejects opposite-platform graph edges from %s',
    async (source) => {
      const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-bundle-edge-'));
      await expect(
        bundlePlugin({
          manifest: {
            ...manifest,
            entrypoints: { paper: { source, output: 'paper/index.js' } },
          },
          projectRoot,
          outputDirectory,
        }),
      ).rejects.toThrow('paper bundle cannot import');
    },
  );
});
