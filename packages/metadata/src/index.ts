/** Compiler-owned metadata embedded in a Shamoo plugin manifest. @packageDocumentation */

import { valid, validRange } from 'semver';
import { z } from 'zod';

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
export interface CompilerMetadata {
  readonly version: string;
  readonly components: readonly ComponentMetadata[];
  readonly modules: readonly ModuleMetadata[];
  readonly communication: CommunicationMetadata;
}

const strict = <T extends z.ZodRawShape>(shape: T) => z.strictObject(shape);
const nonWhitespace = z
  .string()
  .min(1)
  .max(256)
  .refine((value) => value.trim().length > 0, 'Expected non-blank text.');
const exactSemanticVersion =
  /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-(?:0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*))*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;
const number = String.raw`(?:0|[1-9]\d*)`;
const versionIdentifier = String.raw`(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)`;
const prerelease = String.raw`(?:-${versionIdentifier}(?:\.${versionIdentifier})*)`;
const build = String.raw`(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)`;
const fullVersion = String.raw`${number}\.${number}\.${number}${prerelease}?${build}?`;
const wildcard = String.raw`(?:x|X|\*)`;
const partialVersion = String.raw`(?:${fullVersion}|${number}(?:\.(?:${number}(?:\.(?:${number}|${wildcard}))?|${wildcard}))?|${wildcard})`;
const simpleRange = String.raw`(?:(?:<=|>=|<|>|=)[ \t]*|(?:\^|~>?))?${partialVersion}`;
const rangeSet = String.raw`(?:${partialVersion}[ \t]+-[ \t]+${partialVersion}|${simpleRange}(?:[ \t]+${simpleRange})*)`;
const npmSemverRange = new RegExp(
  String.raw`^[ \t]*${rangeSet}(?:[ \t]*\|\|[ \t]*${rangeSet})*[ \t]*$`,
);
const semanticVersion = nonWhitespace
  .regex(exactSemanticVersion, 'Expected an exact semantic version.')
  .refine((value) => valid(value) !== null, 'Expected an exact semantic version.');
const semanticRange = nonWhitespace
  .regex(npmSemverRange, 'Expected an NPM semantic version range.')
  .refine((value) => validRange(value) !== null, 'Expected an NPM semantic version range.');
const communicationId = nonWhitespace.regex(
  /^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)*$/,
  'Expected a lowercase communication contract identifier.',
);
const uniqueStrings = z
  .array(nonWhitespace)
  .refine((values) => new Set(values).size === values.length, 'Entries must be unique.');
const locationSchema = strict({
  file: nonWhitespace,
  line: z.number().int().positive(),
  column: z.number().int().positive(),
});
function canonicalArray(value: CanonicalValue): value is readonly CanonicalValue[] {
  return Array.isArray(value);
}

function canonicalDepth(value: CanonicalValue): number {
  if (value === null || typeof value !== 'object') return 0;
  const children = canonicalArray(value) ? value : Object.values(value);
  let maximum = -1;
  for (const child of children) maximum = Math.max(maximum, canonicalDepth(child));
  return maximum < 0 ? 0 : maximum + 1;
}
const canonicalValueSchema: z.ZodType<CanonicalValue> = z
  .lazy(() =>
    z.union([
      z.null(),
      z.boolean(),
      z.number(),
      z.string(),
      z.array(canonicalValueSchema),
      z.record(z.string(), canonicalValueSchema),
    ]),
  )
  .refine((value) => canonicalDepth(value) <= 64, 'Canonical value nesting exceeds 64.');
const tokenSchema = z.union([
  strict({ kind: z.literal('class'), name: nonWhitespace, module: nonWhitespace }),
  strict({ kind: z.literal('token'), value: canonicalValueSchema }),
  strict({ kind: z.literal('token'), name: nonWhitespace, module: nonWhitespace }),
]);
const dependencySchema = strict({
  index: z.number().int().nonnegative().optional(),
  property: nonWhitespace.optional(),
  token: tokenSchema,
  optional: z.boolean().optional(),
  all: z.boolean().optional(),
  lazy: z.boolean().optional(),
  name: nonWhitespace.optional(),
  qualifier: nonWhitespace.optional(),
  location: locationSchema,
});
const decoratorSchema = strict({
  name: nonWhitespace,
  arguments: z.array(canonicalValueSchema),
  location: locationSchema,
});
const methodSchema = strict({
  name: nonWhitespace,
  lifecycle: z.enum(['load', 'enable', 'ready', 'drain', 'disable', 'unload']).optional(),
  invocation: z.enum(['event', 'command', 'task', 'packet']).optional(),
  decorators: z.array(decoratorSchema),
  parameters: z.array(dependencySchema),
  location: locationSchema,
});
const communicationSchema = strict({
  services: z.array(
    strict({
      id: communicationId,
      version: semanticVersion,
      componentId: nonWhitespace,
      methods: uniqueStrings,
    }),
  ),
  events: z.array(strict({ id: communicationId, version: semanticVersion })),
  consumers: z.array(
    strict({
      id: communicationId,
      versionRange: semanticRange,
      dependentReload: z.enum(['keep-running', 'reload']),
    }),
  ),
}).superRefine((communication, context) => {
  for (const key of ['services', 'events', 'consumers'] as const) {
    const values = communication[key];
    const seen = new Set<string>();
    values.forEach((item, index) => {
      if (seen.has(item.id))
        context.addIssue({
          code: 'custom',
          path: [key, index, 'id'],
          message: `Contract id is duplicated: ${item.id}`,
        });
      seen.add(item.id);
    });
  }
});

/** Strict schema for the authoritative compiler-to-adapter/Java metadata boundary. */
export const CompilerMetadataSchema: z.ZodType<CompilerMetadata> = strict({
  version: nonWhitespace,
  components: z.array(
    strict({
      id: nonWhitespace,
      kind: z.enum([
        'plugin',
        'module',
        'component',
        'service',
        'event-listener',
        'command',
        'task',
      ]),
      name: nonWhitespace,
      file: nonWhitespace,
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
      id: nonWhitespace,
      name: nonWhitespace,
      imports: z.array(strict({ id: nonWhitespace, forwardRef: z.boolean() })),
      declarations: uniqueStrings,
      exports: uniqueStrings,
      global: z.boolean(),
      location: locationSchema,
    }),
  ),
  communication: communicationSchema,
}).superRefine((metadata, context) => {
  const componentIds = new Set<string>();
  metadata.components.forEach((component, componentIndex) => {
    if (componentIds.has(component.id))
      context.addIssue({
        code: 'custom',
        path: ['components', componentIndex, 'id'],
        message: `Component id is duplicated: ${component.id}`,
      });
    componentIds.add(component.id);

    const methodNames = new Set<string>();
    component.methods.forEach((method, methodIndex) => {
      if (methodNames.has(method.name))
        context.addIssue({
          code: 'custom',
          path: ['components', componentIndex, 'methods', methodIndex, 'name'],
          message: `Method name is duplicated in ${component.id}: ${method.name}`,
        });
      methodNames.add(method.name);
      if (method.lifecycle !== undefined && method.invocation !== undefined)
        context.addIssue({
          code: 'custom',
          path: ['components', componentIndex, 'methods', methodIndex],
          message: 'A method cannot declare both lifecycle and invocation roles.',
        });
    });
  });
  metadata.communication.services.forEach((service, index) => {
    if (!componentIds.has(service.componentId))
      context.addIssue({
        code: 'custom',
        path: ['communication', 'services', index, 'componentId'],
        message: `Service references an unknown component: ${service.componentId}`,
      });
  });
});

export function parseCompilerMetadata(input: unknown): CompilerMetadata {
  return CompilerMetadataSchema.parse(input);
}
