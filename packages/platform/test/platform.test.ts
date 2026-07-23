import { PlatformCapability, PlatformKind } from '@shamoo/core';
import {
  MissingCapabilitiesError,
  assertCapabilities,
  definePlatform,
  supportsCapabilities,
} from '@shamoo/platform';
import { describe, expect, it } from 'vitest';

describe('platform declarations', () => {
  const platform = definePlatform({
    capabilities: [PlatformCapability.EVENTS],
    kind: PlatformKind.PAPER,
    name: ' Paper test ',
  });

  it('normalizes identity and checks capabilities', () => {
    expect(platform.name).toBe('Paper test');
    expect(supportsCapabilities(platform, [PlatformCapability.EVENTS])).toBe(true);
    expect(supportsCapabilities(platform, [PlatformCapability.COMMANDS])).toBe(false);
  });

  it('reports unavailable capabilities', () => {
    expect(() => {
      assertCapabilities(platform, [PlatformCapability.COMMANDS]);
    }).toThrow(MissingCapabilitiesError);
  });
});
