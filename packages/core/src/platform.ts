/** Minecraft server runtimes supported by the framework. */
export enum PlatformKind {
  PAPER = 'paper',
  VELOCITY = 'velocity',
}

/** Runtime facilities which an adapter can truthfully provide. */
export enum PlatformCapability {
  COMMANDS = 'commands',
  CONFIGURATION = 'configuration',
  EVENTS = 'events',
  MESSAGING = 'messaging',
  SCHEDULING = 'scheduling',
}

declare const packageNameBrand: unique symbol;
declare const platformNameBrand: unique symbol;

export type PackageName = string & { readonly [packageNameBrand]: 'PackageName' };
export type PlatformName = string & { readonly [platformNameBrand]: 'PlatformName' };

export interface Platform {
  readonly kind: PlatformKind;
  readonly name: PlatformName;
  readonly capabilities: ReadonlySet<PlatformCapability>;
}

export function packageName(value: string): PackageName {
  const normalized = value.trim();
  if (!/^@?[a-z0-9][a-z0-9._/-]*$/.test(normalized)) {
    throw new TypeError(`Invalid package name: ${value}`);
  }
  return normalized as PackageName;
}

export function platformName(value: string): PlatformName {
  const normalized = value.trim();
  if (normalized.length === 0) throw new TypeError('Platform name must not be empty.');
  return normalized as PlatformName;
}
