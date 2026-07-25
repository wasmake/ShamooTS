import { describe, expect, it } from 'vitest';

import { DualPlatformPlugin } from '../src/plugin.js';

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
});
