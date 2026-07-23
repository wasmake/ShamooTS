import { PlatformKind, platformName, type Platform, type PlatformCapability } from '@shamoo/core';

export function createTestPlatform(
  capabilities: Iterable<PlatformCapability> = [],
  kind = PlatformKind.PAPER,
): Platform {
  return Object.freeze({
    capabilities: new Set(capabilities),
    kind,
    name: platformName(`test-${kind}`),
  });
}
