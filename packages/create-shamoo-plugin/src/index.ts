import { packageName, type PackageName, type PlatformKind } from '@shamoo/core';

export interface PluginProjectDeclaration {
  readonly name: PackageName;
  readonly platform: PlatformKind;
}
export function definePluginProject(
  name: string,
  platform: PlatformKind,
): PluginProjectDeclaration {
  return Object.freeze({ name: packageName(name), platform });
}
