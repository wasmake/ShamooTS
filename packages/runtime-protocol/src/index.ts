/** Strict, transport-neutral contracts shared by Shamoo hosts and generated bridges. @packageDocumentation */
import { satisfies, valid, validRange } from 'semver';
import { z } from 'zod';

export const RUNTIME_PROTOCOL_VERSION = 1 as const;
export const PROTOCOL_VERSION = Object.freeze({ major: 1, minor: 0 } as const);
export const MANIFEST_VERSION = 1 as const;
export const COMMUNICATION_PROTOCOL_VERSION = 1 as const;
/** Maximum complete plugin-message frame accepted by Paper and Velocity adapters. */
export const MAX_COMMUNICATION_FRAME_BYTES = 32_766;
/** Maximum opaque request or success payload; binary framing avoids base64 expansion. */
export const MAX_COMMUNICATION_PAYLOAD_BYTES = 30_000;

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
const nameSchema = z.string().max(64).regex(identifier, 'Expected a lowercase Shamoo identifier.');
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
  .refine((value) => !hasControlCharacter(value), 'Expected a path without control characters.')
  .refine((value) => {
    const normalized = value.startsWith('./') ? value.slice(2) : value;
    return (
      normalized === '' ||
      normalized
        .split('/')
        .every((segment) => segment !== '' && segment !== '.' && segment !== '..')
    );
  }, 'Expected a path without empty, dot, or traversal segments.');
const entrypointSchema = z
  .string()
  .regex(entrypoint, 'Expected a safe relative JavaScript entrypoint.')
  .refine((value) => {
    const normalized = value.startsWith('./') ? value.slice(2) : value;
    return normalized
      .split('/')
      .every((segment) => segment !== '' && segment !== '.' && segment !== '..');
  }, 'Expected an entrypoint without empty, dot, or traversal segments.');
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
    debounceMs: z.number().int().min(0).max(60_000),
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
  for (const [path, values] of [
    [['node', 'builtins'], descriptor.node.builtins],
    [['node', 'filesystem', 'read'], descriptor.node.filesystem.read],
    [['node', 'filesystem', 'write'], descriptor.node.filesystem.write],
    [['dependencies', 'loadBefore'], descriptor.dependencies.loadBefore],
    [['dependencies', 'loadAfter'], descriptor.dependencies.loadAfter],
  ] as const) {
    if (new Set(values).size !== values.length)
      context.addIssue({ code: 'custom', path: [...path], message: 'Entries must be unique.' });
  }
});

export type ProtocolVersion = z.infer<typeof ProtocolVersionSchema>;
export type CommonDescriptor = z.infer<typeof CommonDescriptorSchema>;

export interface RuntimeHandshake {
  readonly protocolVersion: typeof RUNTIME_PROTOCOL_VERSION;
  readonly packageName: string;
  readonly platform: 'paper' | 'velocity';
}

export interface CommunicationContractReference {
  readonly id: string;
  readonly version: string;
}
export interface CommunicationRequestEnvelope {
  readonly protocolVersion: typeof COMMUNICATION_PROTOCOL_VERSION;
  readonly kind: 'request';
  readonly requestId: string;
  readonly contract: CommunicationContractReference;
  readonly operation: string;
  readonly payload: Uint8Array;
}
export type CommunicationResponseEnvelope =
  | {
      readonly protocolVersion: typeof COMMUNICATION_PROTOCOL_VERSION;
      readonly kind: 'response';
      readonly requestId: string;
      readonly status: 'success';
      readonly payload: Uint8Array;
    }
  | {
      readonly protocolVersion: typeof COMMUNICATION_PROTOCOL_VERSION;
      readonly kind: 'response';
      readonly requestId: string;
      readonly status: 'error';
      readonly error: { readonly code: string; readonly message: string };
    };
export type CommunicationEnvelope = CommunicationRequestEnvelope | CommunicationResponseEnvelope;

const communicationContractId = /^[a-z][a-z0-9]*(?:[._/-][a-z0-9]+)*$/;
const communicationUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const COMMUNICATION_MAGIC = 0x53484d50;
const COMMUNICATION_HEADER_BYTES = 22;
const MAX_COMMUNICATION_IDENTIFIER_BYTES = 128;
const MAX_COMMUNICATION_VERSION_BYTES = 64;
const MAX_COMMUNICATION_ERROR_MESSAGE_BYTES = 1_024;
const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8', { fatal: true });

function copiedBytes(value: Uint8Array, field: string): Uint8Array {
  if (!ArrayBuffer.isView(value) || Object.prototype.toString.call(value) !== '[object Uint8Array]')
    wireError(`${field} must be a Uint8Array.`);
  return new Uint8Array(value.buffer, value.byteOffset, value.byteLength).slice();
}

export class CommunicationWireError extends Error {
  public readonly code = 'COMMUNICATION_WIRE_INVALID';
  public constructor(message: string) {
    super(message);
    this.name = 'CommunicationWireError';
  }
}

function wireError(message: string): never {
  throw new CommunicationWireError(message);
}

function strictBytes(value: string, maximum: number, field: string): Uint8Array {
  for (let index = 0; index < value.length; index += 1) {
    const unit = value.charCodeAt(index);
    if (unit >= 0xd800 && unit <= 0xdbff) {
      const next = value.charCodeAt(++index);
      if (next < 0xdc00 || next > 0xdfff) wireError(`${field} is not valid Unicode.`);
    } else if (unit >= 0xdc00 && unit <= 0xdfff) wireError(`${field} is not valid Unicode.`);
  }
  const bytes = encoder.encode(value);
  if (bytes.byteLength === 0 || bytes.byteLength > maximum)
    wireError(`Invalid ${field} byte length.`);
  return bytes;
}

function uuidBytes(value: string): Uint8Array {
  if (!communicationUuid.test(value)) wireError('Request ID must be a UUID.');
  const hex = value.replaceAll('-', '');
  return Uint8Array.from({ length: 16 }, (_, index) =>
    Number.parseInt(hex.slice(index * 2, index * 2 + 2), 16),
  );
}

function bytesUuid(value: Uint8Array): string {
  const hex = [...value].map((item) => item.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function payloadBytes(payload: Uint8Array): Uint8Array {
  const copy = copiedBytes(payload, 'Communication payload');
  if (copy.byteLength > MAX_COMMUNICATION_PAYLOAD_BYTES)
    wireError(`Communication payload exceeds ${String(MAX_COMMUNICATION_PAYLOAD_BYTES)} bytes.`);
  return copy;
}

/** Encodes the canonical network-byte-order binary frame used by Java host channel adapters. */
export function encodeCommunicationEnvelope(envelope: CommunicationEnvelope): Uint8Array {
  if (
    (envelope as { readonly protocolVersion: number }).protocolVersion !==
    COMMUNICATION_PROTOCOL_VERSION
  )
    wireError('Unsupported communication protocol version.');
  const requestId = uuidBytes(envelope.requestId);
  let role: number;
  let fields: readonly (readonly [Uint8Array, 2 | 4])[];
  if (envelope.kind === 'request') {
    if (!communicationContractId.test(envelope.contract.id)) wireError('Invalid contract id.');
    if (valid(envelope.contract.version) !== envelope.contract.version)
      wireError('Contract version must be exact semver.');
    if (!identifier.test(envelope.operation)) wireError('Invalid operation.');
    const contract = strictBytes(
      envelope.contract.id,
      MAX_COMMUNICATION_IDENTIFIER_BYTES,
      'contract id',
    );
    const version = strictBytes(
      envelope.contract.version,
      MAX_COMMUNICATION_VERSION_BYTES,
      'contract version',
    );
    const operation = strictBytes(
      envelope.operation,
      MAX_COMMUNICATION_IDENTIFIER_BYTES,
      'operation',
    );
    const payload = payloadBytes(envelope.payload);
    role = 0;
    fields = [
      [contract, 2],
      [version, 2],
      [operation, 2],
      [payload, 4],
    ];
  } else if (envelope.status === 'success') {
    role = 1;
    fields = [[payloadBytes(envelope.payload), 4]];
  } else {
    if (!identifier.test(envelope.error.code)) wireError('Invalid error code.');
    if (envelope.error.message.trim().length === 0) wireError('Error message must not be blank.');
    role = 2;
    fields = [
      [strictBytes(envelope.error.code, MAX_COMMUNICATION_IDENTIFIER_BYTES, 'error code'), 2],
      [
        strictBytes(envelope.error.message, MAX_COMMUNICATION_ERROR_MESSAGE_BYTES, 'error message'),
        2,
      ],
    ];
  }
  const size =
    COMMUNICATION_HEADER_BYTES +
    fields.reduce((sum, [field, width]) => sum + width + field.byteLength, 0);
  if (size > MAX_COMMUNICATION_FRAME_BYTES)
    wireError(`Communication frame exceeds ${String(MAX_COMMUNICATION_FRAME_BYTES)} bytes.`);
  const frame = new Uint8Array(size);
  const view = new DataView(frame.buffer);
  view.setUint32(0, COMMUNICATION_MAGIC);
  frame[4] = COMMUNICATION_PROTOCOL_VERSION;
  frame[5] = role;
  frame.set(requestId, 6);
  let offset = COMMUNICATION_HEADER_BYTES;
  for (const [field, width] of fields) {
    if (width === 2) view.setUint16(offset, field.byteLength);
    else view.setUint32(offset, field.byteLength);
    offset += width;
  }
  for (const [field] of fields) {
    frame.set(field, offset);
    offset += field.byteLength;
  }
  return frame;
}

/** Strictly decodes one bounded binary frame and rejects malformed UTF-8 and trailing bytes. */
export function decodeCommunicationEnvelope(frame: Uint8Array): CommunicationEnvelope {
  if (
    !ArrayBuffer.isView(frame) ||
    Object.prototype.toString.call(frame) !== '[object Uint8Array]' ||
    frame.byteLength < COMMUNICATION_HEADER_BYTES ||
    frame.byteLength > MAX_COMMUNICATION_FRAME_BYTES
  )
    wireError('Invalid communication frame size.');
  try {
    const view = new DataView(frame.buffer, frame.byteOffset, frame.byteLength);
    if (view.getUint32(0) !== COMMUNICATION_MAGIC) wireError('Invalid communication magic.');
    if (frame[4] !== COMMUNICATION_PROTOCOL_VERSION)
      wireError('Unsupported communication protocol version.');
    const role = frame[5];
    if (role === undefined || role > 2) wireError('Invalid communication role.');
    const requestId = bytesUuid(frame.subarray(6, 22));
    let offset = COMMUNICATION_HEADER_BYTES;
    const length = (width: 2 | 4, maximum: number, field: string, allowEmpty = false): number => {
      if (offset + width > frame.byteLength) wireError(`Truncated ${field} length.`);
      const result = width === 2 ? view.getUint16(offset) : view.getUint32(offset);
      offset += width;
      if ((!allowEmpty && result === 0) || result > maximum) wireError(`Invalid ${field} length.`);
      return result;
    };
    const text = (bytes: number, field: string): string => {
      if (offset + bytes > frame.byteLength) wireError(`Truncated ${field}.`);
      const result = decoder.decode(frame.subarray(offset, offset + bytes));
      offset += bytes;
      return result;
    };
    if (role === 0) {
      const contractLength = length(2, MAX_COMMUNICATION_IDENTIFIER_BYTES, 'contract id');
      const versionLength = length(2, MAX_COMMUNICATION_VERSION_BYTES, 'contract version');
      const operationLength = length(2, MAX_COMMUNICATION_IDENTIFIER_BYTES, 'operation');
      const payloadLength = length(4, MAX_COMMUNICATION_PAYLOAD_BYTES, 'payload', true);
      const expected = offset + contractLength + versionLength + operationLength + payloadLength;
      if (expected !== frame.byteLength) wireError('Request lengths do not match the frame.');
      const contractId = text(contractLength, 'contract id');
      const contractVersion = text(versionLength, 'contract version');
      const operation = text(operationLength, 'operation');
      const payload = frame.slice(offset, offset + payloadLength);
      if (!communicationContractId.test(contractId)) wireError('Invalid contract id.');
      if (valid(contractVersion) !== contractVersion)
        wireError('Contract version must be exact semver.');
      if (!identifier.test(operation)) wireError('Invalid operation.');
      return {
        protocolVersion: 1,
        kind: 'request',
        requestId,
        contract: { id: contractId, version: contractVersion },
        operation,
        payload,
      };
    }
    if (role === 1) {
      const payloadLength = length(4, MAX_COMMUNICATION_PAYLOAD_BYTES, 'payload', true);
      if (offset + payloadLength !== frame.byteLength)
        wireError('Response length does not match the frame.');
      return {
        protocolVersion: 1,
        kind: 'response',
        requestId,
        status: 'success',
        payload: frame.slice(offset),
      };
    }
    const codeLength = length(2, MAX_COMMUNICATION_IDENTIFIER_BYTES, 'error code');
    const messageLength = length(2, MAX_COMMUNICATION_ERROR_MESSAGE_BYTES, 'error message');
    if (offset + codeLength + messageLength !== frame.byteLength)
      wireError('Error lengths do not match the frame.');
    const code = text(codeLength, 'error code');
    const message = text(messageLength, 'error message');
    if (!identifier.test(code) || message.trim().length === 0)
      wireError('Invalid structured error.');
    return {
      protocolVersion: 1,
      kind: 'response',
      requestId,
      status: 'error',
      error: { code, message },
    };
  } catch (error) {
    if (error instanceof CommunicationWireError) throw error;
    throw new CommunicationWireError(
      `Invalid communication frame: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/** One-based source position matching Runtime's SourcePosition record. */
export interface RuntimeSourcePosition {
  readonly resourceName: string;
  readonly line: number;
  readonly column: number;
}

export interface RuntimeStackFrame extends RuntimeSourcePosition {
  readonly functionName?: string;
}

export interface CrossRuntimeTrace {
  readonly pluginId: string;
  readonly message: string;
  readonly sourcePosition?: RuntimeSourcePosition;
  readonly frames: readonly RuntimeStackFrame[];
  readonly scriptStack?: string;
}

function sourcePosition(value: RuntimeSourcePosition): RuntimeSourcePosition {
  if (
    value.resourceName.trim().length === 0 ||
    !Number.isSafeInteger(value.line) ||
    value.line < 1 ||
    !Number.isSafeInteger(value.column) ||
    value.column < 1
  )
    throw new TypeError('Runtime source positions require a resource name and one-based integers.');
  return Object.freeze({ ...value });
}

/** Exact-position mapper with the same fallback semantics as Runtime's SourceMapRegistry. */
export class RuntimeSourceMap {
  readonly #positions = new Map<string, RuntimeSourcePosition>();

  public register(generated: RuntimeSourcePosition, original: RuntimeSourcePosition): void {
    const key = sourcePosition(generated);
    this.#positions.set(
      `${key.resourceName}\u0000${String(key.line)}\u0000${String(key.column)}`,
      sourcePosition(original),
    );
  }

  public map(generated: RuntimeSourcePosition): RuntimeSourcePosition {
    const key = sourcePosition(generated);
    return (
      this.#positions.get(
        `${key.resourceName}\u0000${String(key.line)}\u0000${String(key.column)}`,
      ) ?? key
    );
  }

  public clear(): void {
    this.#positions.clear();
  }

  public get size(): number {
    return this.#positions.size;
  }
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
