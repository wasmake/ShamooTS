import { InvalidDeclarationError } from '@shamoo/common';
import type { PackageName, PlatformKind } from '@shamoo/core';

export interface PluginCompilationRequest {
  readonly entrypoint: string;
  readonly packageName: PackageName;
  readonly platforms: readonly PlatformKind[];
}
export function validateCompilationRequest(request: PluginCompilationRequest): void {
  if (request.entrypoint.trim().length === 0)
    throw new InvalidDeclarationError('Compiler entrypoint must not be empty.');
  if (request.platforms.length === 0)
    throw new InvalidDeclarationError('At least one target platform is required.');
}
