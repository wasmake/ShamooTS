import { describe, expect, it } from 'vitest';

import { paperEntrypoint } from '../src/paper.js';
import { DualPlatformPlugin } from '../src/plugin.js';
import { velocityEntrypoint } from '../src/velocity.js';

describe('dual-platform plugin', () => {
  it('uses the same stateful command behavior on either platform', () => {
    const plugin = new DualPlatformPlugin();
    expect(plugin.status()).toBe(0);
    plugin.enable();
    expect(plugin.enabled).toBe(true);
    expect(plugin.status()).toBe(2);
    expect(plugin.status()).toBe(3);
    plugin.disable();
    expect(plugin.enabled).toBe(false);
    expect(plugin.status()).toBe(0);
  });

  it('exports independent frozen platform entrypoints', () => {
    expect(Object.isFrozen(paperEntrypoint)).toBe(true);
    expect(Object.isFrozen(velocityEntrypoint)).toBe(true);
    expect(typeof paperEntrypoint.enable).toBe('function');
    expect(typeof velocityEntrypoint.start).toBe('function');
  });
});
