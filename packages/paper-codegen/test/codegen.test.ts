import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { diffPaperBindings, generatePaperBindings, syncPaperBindings } from '@shamoo/paper-codegen';
import { describe, expect, it } from 'vitest';

const model = (platform: 'paper' | 'paper-nms' | 'paper-packets') => ({
  schemaVersion: 2 as const,
  platform,
  apiVersion: 'test',
  generatedBy: 'test',
  declarations: [{ id: 'a.Value', javaName: 'a.Value', name: 'Value', kind: 'record' as const }],
  ...(platform === 'paper'
    ? { events: [{ type: 'Value', javaName: 'a.Value', cancellable: false }] }
    : {}),
  ...(platform === 'paper-packets'
    ? {
        packets: [
          {
            type: 'Value',
            javaName: 'a.Value',
            registrations: [{ phase: 'play' as const, direction: 'clientbound' as const, id: 1 }],
          },
        ],
      }
    : {}),
});

describe('Paper codegen filesystem wrapper', () => {
  it.each(['paper', 'paper-nms', 'paper-packets'] as const)(
    'syncs and diffs the %s surface',
    async (surface) => {
      const outputDirectory = await mkdtemp(join(tmpdir(), `shamoo-${surface}-`));
      const request = { surface, model: model(surface), outputDirectory };
      const first = await syncPaperBindings(request);
      expect(first.length).toBeGreaterThanOrEqual(4);
      await expect(syncPaperBindings(request)).resolves.toEqual([]);
      const difference = await diffPaperBindings(request);
      expect([
        difference.declarations,
        difference.metadata,
        difference.coverage,
        ...Object.values(difference.shards),
      ]).toEqual(expect.arrayContaining([expect.objectContaining({ changed: false })]));
      expect(Object.values(difference.shards).every((item) => !item.changed)).toBe(true);
    },
  );

  it('accepts model paths and rejects a mismatched surface', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'shamoo-paper-model-'));
    const path = join(directory, 'model.json');
    await writeFile(path, JSON.stringify(model('paper')));
    await expect(
      generatePaperBindings({ surface: 'paper', model: path, outputDirectory: directory }),
    ).resolves.toMatchObject({ coverage: { platform: 'paper' } });
    await expect(
      generatePaperBindings({
        surface: 'paper-nms',
        model: model('paper'),
        outputDirectory: directory,
      }),
    ).rejects.toThrow('Expected paper-nms model, received paper');
  });
});
