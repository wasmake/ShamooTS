import { PlatformKind, type Platform, type PlatformCapability } from '@shamoo/core';
import { definePlatform } from '@shamoo/platform';
import type { VelocityEntrypointContext } from '@shamoo/velocity-raw';

export interface VelocityEntrypoint {
  start(context: VelocityEntrypointContext): void | Promise<void>;
  stop?(context: VelocityEntrypointContext): void | Promise<void>;
}
export function defineVelocityEntrypoint(entrypoint: VelocityEntrypoint): VelocityEntrypoint {
  return Object.freeze(entrypoint);
}
export function createVelocityPlatform(
  capabilities: Iterable<PlatformCapability> = [],
  name = 'Velocity',
): Platform {
  return definePlatform({
    kind: PlatformKind.VELOCITY,
    name,
    capabilities,
  });
}
