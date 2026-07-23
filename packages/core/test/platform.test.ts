import { packageName, PlatformCapability, PlatformKind, platformName } from '@shamoo/core';
import { describe, expect, it } from 'vitest';

describe('core platform contracts', () => {
  it('exposes only Paper and Velocity platform kinds', () => {
    expect(Object.values(PlatformKind)).toEqual(['paper', 'velocity']);
  });

  it('brands validated names', () => {
    expect(packageName('@example/plugin')).toBe('@example/plugin');
    expect(platformName(' Paper ')).toBe('Paper');
    expect(() => platformName(' ')).toThrow('must not be empty');
  });

  it('publishes stable capability values', () => {
    expect(Object.values(PlatformCapability)).toContain('events');
  });
});
