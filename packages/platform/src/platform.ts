import { type Platform, PlatformCapability, type PlatformKind, platformName } from '@shamoo/core';

export interface PlatformDefinition {
  readonly kind: PlatformKind;
  readonly name: string;
  readonly capabilities?: Iterable<PlatformCapability>;
}

export class MissingCapabilitiesError extends Error {
  readonly missing: readonly PlatformCapability[];
  readonly platform: Platform;

  constructor(platform: Platform, missing: readonly PlatformCapability[]) {
    super(`Platform "${platform.name}" is missing capabilities: ${missing.join(', ')}`);
    this.name = 'MissingCapabilitiesError';
    this.platform = platform;
    this.missing = Object.freeze([...missing]);
  }
}

export function definePlatform(definition: PlatformDefinition): Platform {
  const capabilities = new Set(definition.capabilities);
  for (const capability of capabilities) {
    if (!Object.values(PlatformCapability).includes(capability)) {
      throw new TypeError(`Unknown platform capability: ${capability}`);
    }
  }
  return Object.freeze({
    capabilities,
    kind: definition.kind,
    name: platformName(definition.name),
  });
}

export function supportsCapabilities(
  platform: Platform,
  required: Iterable<PlatformCapability>,
): boolean {
  return [...required].every((capability) => platform.capabilities.has(capability));
}

export function assertCapabilities(
  platform: Platform,
  required: Iterable<PlatformCapability>,
): asserts platform is Platform {
  const missing = [...new Set(required)].filter(
    (capability) => !platform.capabilities.has(capability),
  );
  if (missing.length > 0) throw new MissingCapabilitiesError(platform, missing);
}
