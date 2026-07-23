/** Strict, transport-neutral contracts shared by Shamoo hosts and generated bridges. @packageDocumentation */
import { satisfies, valid, validRange } from 'semver';
import { z } from 'zod';

export const RUNTIME_PROTOCOL_VERSION = 1 as const;
export const PROTOCOL_VERSION = Object.freeze({ major: 1, minor: 0 } as const);
export const MANIFEST_VERSION = 1 as const;

const identifier = /^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)*$/;
const entrypoint =
  /^(?!\/)(?![A-Za-z]:)(?!.*\\)(?!.*\0)(?!.*(?:^|\/)\.\.(?:\/|$))(?!.*\/\/)(?:\.\/)?[A-Za-z0-9._/-]+\.(?:js|mjs|cjs)$/;
const safePath = /^(?!\/)(?![A-Za-z]:)(?!.*\\)(?!.*\s)(?!.*(?:^|\/)\.\.(?:\/|$))[^:*?"<>|]+$/;

const strictObject = <T extends z.ZodRawShape>(shape: T) => z.strictObject(shape);
const hasControlCharacter = (value: string): boolean => {
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    if (code <= 0x1f || (code >= 0x7f && code <= 0x9f)) return true;
  }
  return false;
};
const nonEmpty = z.string().trim().min(1);
const nameSchema = z.string().regex(identifier, 'Expected a lowercase Shamoo identifier.');
const rangeSchema = z
  .string()
  .refine(
    (value) => value.trim().length > 0 && validRange(value) !== null,
    'Invalid semver range.',
  );
const versionSchema = z
  .string()
  .refine((value) => valid(value) !== null, 'Invalid semantic version.');
const pathSchema = z
  .string()
  .regex(safePath, 'Expected a safe relative path without traversal.')
  .refine((value) => !hasControlCharacter(value), 'Expected a path without control characters.');
const entrypointSchema = z
  .string()
  .regex(entrypoint, 'Expected a safe relative JavaScript entrypoint.');
const dependencyMapSchema = z.record(nameSchema, rangeSchema);

export const ProtocolVersionSchema = strictObject({
  major: z.literal(PROTOCOL_VERSION.major),
  minor: z.number().int().nonnegative(),
});

const enabledPaperPlatformSchema = strictObject({
  enabled: z.literal(true),
  entrypoint: entrypointSchema,
  minecraft: rangeSchema,
  paperApi: rangeSchema,
});
const paperPlatformSchema = z.discriminatedUnion('enabled', [
  enabledPaperPlatformSchema,
  strictObject({
    enabled: z.literal(false),
    entrypoint: entrypointSchema.optional(),
    minecraft: rangeSchema.optional(),
    paperApi: rangeSchema.optional(),
  }),
]);
const enabledVelocityPlatformSchema = strictObject({
  enabled: z.literal(true),
  entrypoint: entrypointSchema,
  velocityApi: rangeSchema,
});
const velocityPlatformSchema = z.discriminatedUnion('enabled', [
  enabledVelocityPlatformSchema,
  strictObject({
    enabled: z.literal(false),
    entrypoint: entrypointSchema.optional(),
    velocityApi: rangeSchema.optional(),
  }),
]);
const platformsSchema = z.union(
  [
    strictObject({ paper: enabledPaperPlatformSchema, velocity: velocityPlatformSchema }),
    strictObject({ paper: paperPlatformSchema, velocity: enabledVelocityPlatformSchema }),
  ],
  { error: 'At least one platform must be enabled.' },
);

export const CommonDescriptorSchema = strictObject({
  name: nameSchema,
  displayName: nonEmpty,
  version: versionSchema,
  shamoo: strictObject({
    api: rangeSchema,
    runtime: rangeSchema,
    manifest: z.literal(MANIFEST_VERSION),
  }),
  platforms: platformsSchema,
  dependencies: strictObject({
    required: dependencyMapSchema,
    optional: dependencyMapSchema,
    loadBefore: z.array(nameSchema),
    loadAfter: z.array(nameSchema),
  }),
  node: strictObject({
    builtins: z.array(z.string().regex(/^node:[a-z][a-z0-9_/-]*$/)),
    filesystem: strictObject({
      read: z.array(pathSchema),
      write: z.array(pathSchema),
    }),
    network: z.boolean(),
    workers: z.boolean(),
    childProcess: z.boolean(),
    nativeAddons: z.boolean(),
  }),
  reload: strictObject({
    watch: z.boolean(),
    debounceMs: z.number().int().nonnegative(),
    preserveState: z.boolean(),
  }),
}).superRefine((descriptor, context) => {
  const required = Object.keys(descriptor.dependencies.required);
  const duplicateDependency = Object.keys(descriptor.dependencies.optional).find((name) =>
    required.includes(name),
  );
  if (duplicateDependency !== undefined) {
    context.addIssue({
      code: 'custom',
      path: ['dependencies', 'optional', duplicateDependency],
      message: `Dependency cannot be both required and optional: ${duplicateDependency}`,
    });
  }

  const ordering = [...descriptor.dependencies.loadBefore, ...descriptor.dependencies.loadAfter];
  const duplicateOrder = ordering.find((name, index) => ordering.indexOf(name) !== index);
  if (duplicateOrder !== undefined) {
    context.addIssue({
      code: 'custom',
      path: ['dependencies'],
      message: `Duplicate load ordering entry: ${duplicateOrder}`,
    });
  }
  if (ordering.includes(descriptor.name)) {
    context.addIssue({
      code: 'custom',
      path: ['dependencies'],
      message: 'A plugin cannot order itself.',
    });
  }
});

export type ProtocolVersion = z.infer<typeof ProtocolVersionSchema>;
export type CommonDescriptor = z.infer<typeof CommonDescriptorSchema>;

export interface RuntimeHandshake {
  readonly protocolVersion: typeof RUNTIME_PROTOCOL_VERSION;
  readonly packageName: string;
  readonly platform: 'paper' | 'velocity';
}

const packageName = /^(?:@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*$/;

export function isRuntimeHandshake(value: unknown): value is RuntimeHandshake {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<RuntimeHandshake>;
  return (
    candidate.protocolVersion === RUNTIME_PROTOCOL_VERSION &&
    typeof candidate.packageName === 'string' &&
    packageName.test(candidate.packageName) &&
    (candidate.platform === 'paper' || candidate.platform === 'velocity')
  );
}

export interface ProtocolIssue {
  readonly code: string;
  readonly path: readonly (string | number)[];
  readonly message: string;
}

export class ProtocolValidationError extends Error {
  public readonly code = 'PROTOCOL_VALIDATION';
  public constructor(public readonly issues: readonly ProtocolIssue[]) {
    super(
      `Invalid Shamoo descriptor: ${issues.map((issue) => `${issue.path.join('.') || '<root>'}: ${issue.message}`).join('; ')}`,
    );
    this.name = 'ProtocolValidationError';
  }
}

export function parseCommonDescriptor(value: unknown): CommonDescriptor {
  const result = CommonDescriptorSchema.safeParse(value);
  if (!result.success) {
    throw new ProtocolValidationError(
      result.error.issues.map(({ code, path, message }) => ({
        code,
        path: path.map(String),
        message,
      })),
    );
  }
  return result.data;
}

export function isCommonDescriptor(value: unknown): value is CommonDescriptor {
  return CommonDescriptorSchema.safeParse(value).success;
}

export const COMMON_DESCRIPTOR_JSON_SCHEMA = Object.freeze(
  z.toJSONSchema(CommonDescriptorSchema, { target: 'draft-7', unrepresentable: 'throw' }),
);

export type RuntimePlatform =
  | {
      readonly name: 'paper';
      readonly minecraftVersion: string;
      readonly paperApiVersion: string;
    }
  | { readonly name: 'velocity'; readonly velocityApiVersion: string };

export interface RuntimeCompatibility {
  readonly protocol: { readonly major: number; readonly minor: number };
  readonly runtimeVersion: string;
  readonly apiVersion: string;
  readonly platform: RuntimePlatform;
  readonly node: {
    readonly builtins: ReadonlySet<string>;
    readonly filesystem: { readonly read: boolean; readonly write: boolean };
    readonly network: boolean;
    readonly workers: boolean;
    readonly childProcess: boolean;
    readonly nativeAddons: boolean;
  };
}

export interface CompatibilityReason {
  readonly code: 'PROTOCOL' | 'RUNTIME' | 'API' | 'PLATFORM' | 'MINECRAFT' | 'CAPABILITY';
  readonly path: string;
  readonly message: string;
}

export interface CompatibilityResult {
  readonly compatible: boolean;
  readonly reasons: readonly CompatibilityReason[];
}

export function negotiateCompatibility(
  descriptor: CommonDescriptor,
  runtime: RuntimeCompatibility,
): CompatibilityResult {
  const reasons: CompatibilityReason[] = [];
  if (
    runtime.protocol.major !== PROTOCOL_VERSION.major ||
    runtime.protocol.minor < PROTOCOL_VERSION.minor
  ) {
    reasons.push({
      code: 'PROTOCOL',
      path: 'protocol',
      message: `Protocol ${String(PROTOCOL_VERSION.major)}.${String(PROTOCOL_VERSION.minor)} is required; host provides ${String(runtime.protocol.major)}.${String(runtime.protocol.minor)}.`,
    });
  }
  if (!satisfies(runtime.runtimeVersion, descriptor.shamoo.runtime)) {
    reasons.push({
      code: 'RUNTIME',
      path: 'shamoo.runtime',
      message: `Runtime ${runtime.runtimeVersion} does not satisfy ${descriptor.shamoo.runtime}.`,
    });
  }
  if (!satisfies(runtime.apiVersion, descriptor.shamoo.api)) {
    reasons.push({
      code: 'API',
      path: 'shamoo.api',
      message: `API ${runtime.apiVersion} does not satisfy ${descriptor.shamoo.api}.`,
    });
  }

  if (runtime.platform.name === 'paper') {
    const paper = descriptor.platforms.paper;
    if (!paper.enabled) {
      reasons.push({
        code: 'PLATFORM',
        path: 'platforms.paper.enabled',
        message: 'The manifest does not enable paper.',
      });
    } else {
      if (!satisfies(runtime.platform.minecraftVersion, paper.minecraft)) {
        reasons.push({
          code: 'MINECRAFT',
          path: 'platforms.paper.minecraft',
          message: `Minecraft ${runtime.platform.minecraftVersion} does not satisfy ${paper.minecraft}.`,
        });
      }
      if (!satisfies(runtime.platform.paperApiVersion, paper.paperApi)) {
        reasons.push({
          code: 'PLATFORM',
          path: 'platforms.paper.paperApi',
          message: `Paper API ${runtime.platform.paperApiVersion} does not satisfy ${paper.paperApi}.`,
        });
      }
    }
  } else {
    const velocity = descriptor.platforms.velocity;
    if (!velocity.enabled) {
      reasons.push({
        code: 'PLATFORM',
        path: 'platforms.velocity.enabled',
        message: 'The manifest does not enable velocity.',
      });
    } else if (!satisfies(runtime.platform.velocityApiVersion, velocity.velocityApi)) {
      reasons.push({
        code: 'PLATFORM',
        path: 'platforms.velocity.velocityApi',
        message: `Velocity API ${runtime.platform.velocityApiVersion} does not satisfy ${velocity.velocityApi}.`,
      });
    }
  }

  for (const builtin of descriptor.node.builtins) {
    if (!runtime.node.builtins.has(builtin)) {
      reasons.push({
        code: 'CAPABILITY',
        path: 'node.builtins',
        message: `Node builtin ${builtin} is unavailable.`,
      });
    }
  }
  const capabilities: readonly [string, boolean, boolean][] = [
    ['filesystem.read', descriptor.node.filesystem.read.length > 0, runtime.node.filesystem.read],
    [
      'filesystem.write',
      descriptor.node.filesystem.write.length > 0,
      runtime.node.filesystem.write,
    ],
    ['network', descriptor.node.network, runtime.node.network],
    ['workers', descriptor.node.workers, runtime.node.workers],
    ['childProcess', descriptor.node.childProcess, runtime.node.childProcess],
    ['nativeAddons', descriptor.node.nativeAddons, runtime.node.nativeAddons],
  ];
  for (const [capability, required, available] of capabilities) {
    if (required && !available) {
      reasons.push({
        code: 'CAPABILITY',
        path: `node.${capability}`,
        message: `Host does not permit ${capability}.`,
      });
    }
  }
  return { compatible: reasons.length === 0, reasons };
}
