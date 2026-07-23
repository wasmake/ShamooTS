import { PlatformKind, type PackageName } from '@shamoo/core';

export const RUNTIME_PROTOCOL_VERSION = 1 as const;
export interface RuntimeHandshake {
  readonly protocolVersion: typeof RUNTIME_PROTOCOL_VERSION;
  readonly packageName: PackageName;
  readonly platform: PlatformKind;
}
export function isRuntimeHandshake(value: unknown): value is RuntimeHandshake {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<RuntimeHandshake>;
  return (
    candidate.protocolVersion === RUNTIME_PROTOCOL_VERSION &&
    typeof candidate.packageName === 'string' &&
    candidate.platform !== undefined &&
    Object.values(PlatformKind).includes(candidate.platform)
  );
}
