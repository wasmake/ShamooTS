import { ServiceRegistry, ServiceUnavailableError } from '@shamoo/communication';
import { describe, expect, it, vi } from 'vitest';

import { GENERATION_SERVICE, PluginGeneration } from '../src/index.js';

describe('explicit generation reload', () => {
  it('drains old work and keeps the stable proxy bound to the replacement', async () => {
    const registry = new ServiceRegistry();
    const oldGeneration = new PluginGeneration('old', registry);
    const consumer = registry.service(GENERATION_SERVICE, '^1.0.0');
    expect(consumer.generation()).toBe('old');

    let release: (() => void) | undefined;
    const active = oldGeneration.runTask(
      () =>
        new Promise<string>((resolve) => {
          release = () => {
            resolve('finished');
          };
        }),
    );
    await vi.waitFor(() => {
      expect(oldGeneration.activeCount).toBe(1);
    });
    await vi.waitFor(() => {
      expect(release).toBeTypeOf('function');
    });

    const stopping = oldGeneration.stop();
    await vi.waitFor(() => {
      expect(oldGeneration.draining).toBe(true);
    });
    const replacement = new PluginGeneration('new', registry);
    expect(registry.service(GENERATION_SERVICE, '^1.0.0')).toBe(consumer);
    expect(consumer.generation()).toBe('new');

    release?.();
    await expect(active).resolves.toBe('finished');
    await stopping;
    expect(oldGeneration.disposed).toBe(true);
    expect(consumer.generation()).toBe('new');

    await replacement.stop();
    expect(() => consumer.generation()).toThrow(ServiceUnavailableError);
  });

  it('makes generation shutdown idempotent', async () => {
    const generation = new PluginGeneration('only', new ServiceRegistry());
    const first = generation.stop();
    const second = generation.stop();
    expect(second).toBe(first);
    await first;
    expect(generation.disposed).toBe(true);
  });
});
