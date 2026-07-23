import { access, mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  diffVelocityBindings,
  generateVelocityBindings,
  syncVelocityBindings,
} from '@shamoo/velocity-codegen';
import { describe, expect, it } from 'vitest';

const velocityModel = {
  schemaVersion: 2 as const,
  platform: 'velocity' as const,
  apiVersion: 'test',
  generatedBy: 'test',
  declarations: [{ id: 'a.Event', javaName: 'a.Event', name: 'Event', kind: 'class' as const }],
  events: [{ type: 'Event', javaName: 'a.Event', cancellable: true }],
};

describe('Velocity codegen filesystem wrapper', () => {
  it('generates, syncs, and detects changed output', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-velocity-'));
    const request = { model: velocityModel, outputDirectory };
    await expect(generateVelocityBindings(request)).resolves.toMatchObject({
      coverage: { platform: 'velocity' },
    });
    const changed = await syncVelocityBindings(request);
    expect(changed.length).toBeGreaterThanOrEqual(5);
    await expect(syncVelocityBindings(request)).resolves.toEqual([]);
    await writeFile(join(outputDirectory, 'events.generated.ts'), 'stale');
    const difference = await diffVelocityBindings(request);
    expect(difference.events).toMatchObject({ changed: true, actual: 'stale' });
    expect(difference.declarations.changed).toBe(false);
    expect(difference.coverage.changed).toBe(false);
    expect(Object.values(difference.shards).every((item) => !item.changed)).toBe(true);

    const stale = join(outputDirectory, 'binding-packages/stale.generated.d.ts');
    await writeFile(stale, 'stale');
    expect(
      (await diffVelocityBindings(request)).shards['binding-packages/stale.generated.d.ts'],
    ).toMatchObject({ changed: true, expected: '', actual: 'stale' });
    expect(await syncVelocityBindings(request)).toContain(stale);
    await expect(access(stale)).rejects.toMatchObject({ code: 'ENOENT' });
  });

  it('accepts a model path and rejects non-Velocity models', async () => {
    const outputDirectory = await mkdtemp(join(tmpdir(), 'shamoo-velocity-model-'));
    const path = join(outputDirectory, 'model.json');
    await writeFile(path, JSON.stringify(velocityModel));
    await expect(generateVelocityBindings({ model: path, outputDirectory })).resolves.toMatchObject(
      {
        coverage: { platform: 'velocity' },
      },
    );
    await expect(
      generateVelocityBindings({
        model: { ...velocityModel, platform: 'paper' },
        outputDirectory,
      }),
    ).rejects.toThrow('Expected velocity model, received paper');
  });
});
