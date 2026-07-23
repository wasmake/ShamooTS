/** Canonical, runtime-neutral output produced by `shamooc`. @packageDocumentation */

export const COMPILER_METADATA_VERSION = 2 as const;
export type MetadataPlatform = 'common' | 'paper' | 'velocity';
export type DeclarationKind =
  'plugin' | 'module' | 'component' | 'service' | 'event-listener' | 'command' | 'task';

export interface SourceLocation {
  readonly file: string;
  readonly line: number;
  readonly column: number;
}
export type TokenMetadata =
  | {
      readonly kind: 'class';
      readonly name: string;
      readonly module: string;
    }
  | {
      readonly kind: 'token';
      readonly value: CanonicalValue;
    }
  | {
      readonly kind: 'token';
      readonly name: string;
      readonly module: string;
    };
export interface DependencyMetadata {
  readonly index?: number;
  readonly property?: string;
  readonly token: TokenMetadata;
  readonly optional?: boolean;
  readonly all?: boolean;
  readonly lazy?: boolean;
  readonly name?: string;
  readonly qualifier?: string;
  readonly location: SourceLocation;
}
export interface MethodMetadata {
  readonly name: string;
  readonly lifecycle?: 'load' | 'enable' | 'ready' | 'drain' | 'disable' | 'unload';
  readonly invocation?: 'event' | 'command' | 'task' | 'packet';
  readonly decorators: readonly DecoratorMetadata[];
  readonly parameters: readonly DependencyMetadata[];
  readonly location: SourceLocation;
}
export interface DecoratorMetadata {
  readonly name: string;
  readonly arguments: readonly CanonicalValue[];
  readonly location: SourceLocation;
}
export type CanonicalValue =
  | null
  | boolean
  | number
  | string
  | readonly CanonicalValue[]
  | {
      readonly [key: string]: CanonicalValue;
    };
export interface ComponentMetadata {
  readonly id: string;
  readonly kind: DeclarationKind;
  readonly name: string;
  readonly file: string;
  readonly platform: MetadataPlatform;
  readonly decorators: readonly DecoratorMetadata[];
  readonly constructor: readonly DependencyMetadata[];
  readonly properties: readonly DependencyMetadata[];
  readonly methods: readonly MethodMetadata[];
  readonly location: SourceLocation;
}
export interface ModuleImportMetadata {
  readonly id: string;
  readonly forwardRef: boolean;
}
export interface ModuleMetadata {
  readonly id: string;
  readonly name: string;
  readonly imports: readonly ModuleImportMetadata[];
  readonly declarations: readonly string[];
  readonly exports: readonly string[];
  readonly global: boolean;
  readonly location: SourceLocation;
}
export interface PlatformEntrypointMetadata {
  readonly source: string;
  readonly output: string;
}
export interface CompilerManifest {
  readonly formatVersion: 2;
  readonly compilerVersion: string;
  readonly packageName: string;
  readonly components: readonly ComponentMetadata[];
  readonly modules: readonly ModuleMetadata[];
  readonly permissions?: {
    readonly nms?: boolean;
    readonly packets?: boolean;
  };
  readonly entrypoints: {
    readonly paper?: PlatformEntrypointMetadata;
    readonly velocity?: PlatformEntrypointMetadata;
  };
}

function sortValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortValue);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, item]) => [key, sortValue(item)]),
    );
  }
  return value;
}

/** Serializes metadata with recursively sorted keys and a final newline. */
export function canonicalMetadataJson(manifest: CompilerManifest): string {
  return `${JSON.stringify(sortValue(manifest), undefined, 2)}\n`;
}
