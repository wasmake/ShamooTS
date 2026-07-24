import { PlatformCapability, PlatformKind } from '@shamoo/core';
import { supportsCapabilities } from '@shamoo/platform';
import { describe, expect, it } from 'vitest';

import { createTestingExample, runTestingExample } from '../src/index.js';

describe('Shamoo testing composition', () => {
  it('creates a deterministic test platform with explicit capabilities', () => {
    const { platform } = createTestingExample();
    expect(platform.kind).toBe(PlatformKind.PAPER);
    expect(platform.name).toBe('test-paper');
    expect(supportsCapabilities(platform, [PlatformCapability.EVENTS])).toBe(true);
    expect(supportsCapabilities(platform, [PlatformCapability.SCHEDULING])).toBe(false);
  });

  it('executes all lifecycle stages with DI and deterministic cleanup', async () => {
    const example = await runTestingExample();
    expect(example.calls).toEqual([
      'load:hello from DI',
      'enable',
      'ready',
      'drain',
      'disable',
      'unload',
    ]);
  });

  it('shares the result of an idempotently repeated stage', async () => {
    const example = createTestingExample();
    const first = example.executor.execute('load');
    const repeated = example.executor.execute('load');
    expect(repeated).toBe(first);
    await first;
    expect(example.calls).toEqual(['load:hello from DI']);
  });
});
