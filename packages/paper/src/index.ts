import { PlatformKind, type Platform, type PlatformCapability } from '@shamoo/core';
import { definePlatform } from '@shamoo/platform';
import type { PaperEntrypointContext } from '@shamoo/paper-raw';

export interface PaperEntrypoint {
  enable(context: PaperEntrypointContext): void | Promise<void>;
  disable?(context: PaperEntrypointContext): void | Promise<void>;
}
export function definePaperEntrypoint(entrypoint: PaperEntrypoint): PaperEntrypoint {
  return Object.freeze(entrypoint);
}
export function createPaperPlatform(
  capabilities: Iterable<PlatformCapability> = [],
  name = 'Paper',
): Platform {
  return definePlatform({
    kind: PlatformKind.PAPER,
    name,
    capabilities,
  });
}
