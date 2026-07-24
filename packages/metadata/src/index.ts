/** Canonical, runtime-neutral output produced by `shamooc`. @packageDocumentation */

import { z } from 'zod';

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
  readonly index?: number | undefined;
  readonly property?: string | undefined;
  readonly token: TokenMetadata;
  readonly optional?: boolean | undefined;
  readonly all?: boolean | undefined;
  readonly lazy?: boolean | undefined;
  readonly name?: string | undefined;
  readonly qualifier?: string | undefined;
  readonly location: SourceLocation;
}
export interface MethodMetadata {
  readonly name: string;
  readonly lifecycle?: 'load' | 'enable' | 'ready' | 'drain' | 'disable' | 'unload' | undefined;
  readonly invocation?: 'event' | 'command' | 'task' | 'packet' | undefined;
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
export interface SourceMapMetadata {
  readonly generated: string;
  readonly map: string;
  readonly format: 'source-map-v3';
}
export interface ServiceContractMetadata {
  readonly id: string;
  readonly version: string;
  readonly componentId: string;
  readonly methods: readonly string[];
}
export interface EventContractMetadata {
  readonly id: string;
  readonly version: string;
}
export interface ServiceConsumerMetadata {
  readonly id: string;
  readonly versionRange: string;
  /** Matches ShamooRuntime DependentReloadPolicy for this acquisition. */
  readonly dependentReload: 'keep-running' | 'reload';
}
export interface CommunicationMetadata {
  readonly services: readonly ServiceContractMetadata[];
  readonly events: readonly EventContractMetadata[];
  readonly consumers: readonly ServiceConsumerMetadata[];
}
export interface CompilerManifest {
  readonly formatVersion: 2;
  readonly compilerVersion: string;
  readonly packageName: string;
  readonly components: readonly ComponentMetadata[];
  readonly modules: readonly ModuleMetadata[];
  readonly communication?: CommunicationMetadata | undefined;
  readonly permissions?:
    | {
        readonly builtins?: readonly string[] | undefined;
        readonly filesystem?:
          | {
              readonly read: readonly string[];
              readonly write: readonly string[];
            }
          | undefined;
        readonly network?: boolean | undefined;
        readonly workers?: boolean | undefined;
        readonly childProcess?: boolean | undefined;
        readonly nativeAddons?: boolean | undefined;
        readonly nms?: boolean | undefined;
        readonly packets?: boolean | undefined;
      }
    | undefined;
  readonly entrypoints: {
    readonly paper?: PlatformEntrypointMetadata | undefined;
    readonly velocity?: PlatformEntrypointMetadata | undefined;
  };
  readonly sourceMaps?: readonly SourceMapMetadata[] | undefined;
}

const strict = <T extends z.ZodRawShape>(shape: T) => z.strictObject(shape);
const locationSchema = strict({
  file: z.string().min(1),
  line: z.number().int().positive(),
  column: z.number().int().positive(),
});
const canonicalValueSchema: z.ZodType<CanonicalValue> = z.lazy(() =>
  z.union([
    z.null(),
    z.boolean(),
    z.number(),
    z.string(),
    z.array(canonicalValueSchema),
    z.record(z.string(), canonicalValueSchema),
  ]),
);
const tokenSchema = z.union([
  strict({ kind: z.literal('class'), name: z.string().min(1), module: z.string().min(1) }),
  strict({ kind: z.literal('token'), value: canonicalValueSchema }),
  strict({ kind: z.literal('token'), name: z.string().min(1), module: z.string().min(1) }),
]);
const dependencySchema = strict({
  index: z.number().int().nonnegative().optional(),
  property: z.string().min(1).optional(),
  token: tokenSchema,
  optional: z.boolean().optional(),
  all: z.boolean().optional(),
  lazy: z.boolean().optional(),
  name: z.string().min(1).optional(),
  qualifier: z.string().min(1).optional(),
  location: locationSchema,
});
const decoratorSchema = strict({
  name: z.string().min(1),
  arguments: z.array(canonicalValueSchema),
  location: locationSchema,
});
const methodSchema = strict({
  name: z.string().min(1),
  lifecycle: z.enum(['load', 'enable', 'ready', 'drain', 'disable', 'unload']).optional(),
  invocation: z.enum(['event', 'command', 'task', 'packet']).optional(),
  decorators: z.array(decoratorSchema),
  parameters: z.array(dependencySchema),
  location: locationSchema,
});
const communicationSchema = strict({
  services: z.array(
    strict({
      id: z.string().min(1),
      version: z.string().min(1),
      componentId: z.string().min(1),
      methods: z.array(z.string().min(1)),
    }),
  ),
  events: z.array(strict({ id: z.string().min(1), version: z.string().min(1) })),
  consumers: z.array(
    strict({
      id: z.string().min(1),
      versionRange: z.string().min(1),
      dependentReload: z.enum(['keep-running', 'reload']),
    }),
  ),
});

/** Strict schema for the authoritative compiler-to-adapter/Java metadata boundary. */
const CompilerManifestSchema: z.ZodType<CompilerManifest> = strict({
  formatVersion: z.literal(COMPILER_METADATA_VERSION),
  compilerVersion: z.string().min(1),
  packageName: z.string().min(1),
  components: z.array(
    strict({
      id: z.string().min(1),
      kind: z.enum([
        'plugin',
        'module',
        'component',
        'service',
        'event-listener',
        'command',
        'task',
      ]),
      name: z.string().min(1),
      file: z.string().min(1),
      platform: z.enum(['common', 'paper', 'velocity']),
      decorators: z.array(decoratorSchema),
      constructor: z.array(dependencySchema),
      properties: z.array(dependencySchema),
      methods: z.array(methodSchema),
      location: locationSchema,
    }),
  ),
  modules: z.array(
    strict({
      id: z.string().min(1),
      name: z.string().min(1),
      imports: z.array(strict({ id: z.string().min(1), forwardRef: z.boolean() })),
      declarations: z.array(z.string().min(1)),
      exports: z.array(z.string().min(1)),
      global: z.boolean(),
      location: locationSchema,
    }),
  ),
  communication: communicationSchema.optional(),
  permissions: strict({
    builtins: z.array(z.string().min(1)).optional(),
    filesystem: strict({ read: z.array(z.string()), write: z.array(z.string()) }).optional(),
    network: z.boolean().optional(),
    workers: z.boolean().optional(),
    childProcess: z.boolean().optional(),
    nativeAddons: z.boolean().optional(),
    nms: z.boolean().optional(),
    packets: z.boolean().optional(),
  }).optional(),
  entrypoints: strict({
    paper: strict({ source: z.string().min(1), output: z.string().min(1) }).optional(),
    velocity: strict({ source: z.string().min(1), output: z.string().min(1) }).optional(),
  }),
  sourceMaps: z
    .array(
      strict({
        generated: z.string().min(1),
        map: z.string().min(1),
        format: z.literal('source-map-v3'),
      }),
    )
    .optional(),
});

export function parseCompilerManifest(input: unknown): CompilerManifest {
  return CompilerManifestSchema.parse(input);
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
