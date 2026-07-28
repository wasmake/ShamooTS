export const MANAGED_LOBBY_FILES = Object.freeze([
  'config.yml',
  'messages.yml',
  'items.yml',
  'menus.yml',
  'scoreboard.yml',
  'servers.yml',
  'spawn.yml',
  'portals.yml',
] as const);

export type ManagedLobbyFile = (typeof MANAGED_LOBBY_FILES)[number];
export type ManagedLobbyVisibilityMode = 'all' | 'none' | 'staff' | 'cycle';

/** Plain host data bounded to 32 levels, 100,000 values, 10,000 entries per collection, and 1 MiB per string. */
export type ManagedLobbyData =
  null | boolean | number | string | readonly ManagedLobbyData[] | ManagedLobbyDataRecord;

export interface ManagedLobbyDataRecord {
  readonly [key: string]: ManagedLobbyData;
}

export interface ManagedLobbyEnsureRequest {
  readonly operation: 'ensure';
}

export interface ManagedLobbyReadRequest {
  readonly operation: 'read';
  /** Omit to read all eight managed YAML files. */
  readonly file?: ManagedLobbyFile;
}

export interface ManagedLobbyWriteRequest {
  readonly operation: 'write';
  readonly file: ManagedLobbyFile;
  /** Bounded nonblank UTF-8 YAML content of at most 1 MiB. */
  readonly content: string;
  /** Omit for the Runtime default of true. */
  readonly reload?: boolean;
}

export interface ManagedLobbyReloadRequest {
  readonly operation: 'reload';
}

export interface ManagedLobbyStatusRequest {
  readonly operation: 'status';
}

export type ManagedLobbyExecuteAction =
  | { readonly action: 'setspawn'; readonly player: string }
  | { readonly action: 'spawn'; readonly player: string }
  | { readonly action: 'items'; readonly player: string }
  | { readonly action: 'menu'; readonly player: string; readonly id: string }
  | {
      readonly action: 'visibility';
      readonly player: string;
      readonly mode: ManagedLobbyVisibilityMode;
    }
  | { readonly action: 'portal-wand'; readonly player: string }
  | { readonly action: 'portal-pos1'; readonly player: string }
  | { readonly action: 'portal-pos2'; readonly player: string }
  | {
      readonly action: 'portal-create';
      readonly player: string;
      readonly id: string;
      readonly destination?: string;
      readonly permission?: string;
      readonly priority?: number;
      readonly 'cooldown-ms'?: number;
      readonly enabled?: boolean;
      readonly visualize?: boolean;
    }
  | { readonly action: 'portal-remove'; readonly player: string; readonly id: string }
  | { readonly action: 'portal-list' }
  | { readonly action: 'portal-info'; readonly id: string }
  | { readonly action: 'portal-enable'; readonly player: string; readonly id: string }
  | { readonly action: 'portal-disable'; readonly player: string; readonly id: string }
  | {
      readonly action: 'portal-destination';
      readonly player: string;
      readonly id: string;
      readonly type: 'server' | 'menu';
      readonly target: string;
    }
  | {
      readonly action: 'portal-destination';
      readonly player: string;
      readonly id: string;
      readonly type: 'spawn';
      readonly target?: never;
    }
  | { readonly action: 'portal-visualize'; readonly player: string; readonly enabled: boolean };

export type ManagedLobbyExecuteRequest = {
  readonly operation: 'execute';
} & ManagedLobbyExecuteAction;

export type ManagedLobbyRequest =
  | ManagedLobbyEnsureRequest
  | ManagedLobbyReadRequest
  | ManagedLobbyWriteRequest
  | ManagedLobbyReloadRequest
  | ManagedLobbyStatusRequest
  | ManagedLobbyExecuteRequest;

export type ManagedLobbySuccess = ManagedLobbyDataRecord & {
  readonly ok: true;
  readonly state: string;
  readonly error?: never;
};

export type ManagedLobbyFailure = ManagedLobbyDataRecord & {
  readonly ok: false;
  readonly state: string;
  readonly error: string;
};

/**
 * Broad bounded data result returned by the Runtime's success and failure map helpers.
 * Successful `reload` results include `messagesContent` with the exact accepted `messages.yml` text.
 */
export type ManagedLobbyResult = ManagedLobbySuccess | ManagedLobbyFailure;

export interface PaperManagedLobbyHost {
  paperManagedLobby(request: ManagedLobbyRequest): Promise<unknown>;
}

export class ManagedLobbyUnavailableError extends Error {
  public readonly code = 'MANAGED_LOBBY_UNAVAILABLE';

  public constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'ManagedLobbyUnavailableError';
  }
}

export class ManagedLobbyProtocolError extends Error {
  public readonly code = 'MANAGED_LOBBY_PROTOCOL_ERROR';

  public constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'ManagedLobbyProtocolError';
  }
}

type DataRecord = Readonly<Record<string, unknown>>;

interface CopyState {
  nodes: number;
  readonly ancestors: Set<object>;
}

const MAX_FILE_BYTES = 1_048_576;
const MAX_DATA_DEPTH = 32;
const MAX_DATA_NODES = 100_000;
const MAX_COLLECTION_SIZE = 10_000;
const MAX_RESPONSE_STRING_LENGTH = MAX_FILE_BYTES;
const ID = /^[a-z][a-z0-9_-]{0,63}$/u;
const PERMISSION = /^[A-Za-z0-9._-]{1,128}$/u;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u;

function protocol(message: string): never {
  throw new ManagedLobbyProtocolError(message);
}

function copyData(value: unknown, label: string, state: CopyState, depth = 0): ManagedLobbyData {
  state.nodes += 1;
  if (state.nodes > MAX_DATA_NODES) protocol(`${label} contains too many values.`);
  if (depth > MAX_DATA_DEPTH) protocol(`${label} nesting exceeds ${String(MAX_DATA_DEPTH)}.`);
  if (value === null || typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    if (value.length > MAX_RESPONSE_STRING_LENGTH) protocol(`${label} contains oversized text.`);
    return value;
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) protocol(`${label} numbers must be finite.`);
    return value;
  }
  if (typeof value !== 'object') protocol(`${label} must contain only JSON-compatible data.`);
  if (state.ancestors.has(value)) protocol(`${label} must not contain cycles.`);
  const isArray = Array.isArray(value);
  const prototype: unknown = Object.getPrototypeOf(value);
  if (
    (isArray && prototype !== Array.prototype) ||
    (!isArray && prototype !== Object.prototype && prototype !== null)
  )
    protocol(`${label} must contain only arrays and plain objects.`);
  const keys = Reflect.ownKeys(value);
  if (keys.length > MAX_COLLECTION_SIZE) protocol(`${label} contains an oversized collection.`);
  if (keys.some((key) => typeof key !== 'string')) protocol(`${label} requires string keys.`);
  const descriptors = Object.getOwnPropertyDescriptors(value);
  if (
    (keys as string[]).some((key) => {
      if (isArray && key === 'length') return false;
      const descriptor = descriptors[key];
      return (
        descriptor === undefined ||
        !descriptor.enumerable ||
        !('value' in descriptor) ||
        descriptor.value === undefined
      );
    })
  )
    protocol(`${label} cannot contain accessors, non-enumerable properties, or undefined.`);
  state.ancestors.add(value);
  try {
    if (isArray) {
      if (keys.some((key) => key !== 'length' && !/^(0|[1-9][0-9]*)$/u.test(key as string)))
        protocol(`${label} arrays cannot have named properties.`);
      if (Object.keys(value).length !== value.length)
        protocol(`${label} arrays cannot contain empty slots.`);
      return Object.freeze(
        Array.from({ length: value.length }, (_, index) =>
          copyData(descriptors[String(index)]?.value, label, state, depth + 1),
        ),
      );
    }
    const copied: Record<string, ManagedLobbyData> = {};
    for (const key of keys as string[]) {
      Object.defineProperty(copied, key, {
        value: copyData(descriptors[key]?.value, label, state, depth + 1),
        enumerable: true,
        configurable: true,
        writable: true,
      });
    }
    return Object.freeze(copied);
  } finally {
    state.ancestors.delete(value);
  }
}

function copiedData(value: unknown, label: string): ManagedLobbyData {
  try {
    return copyData(value, label, { nodes: 0, ancestors: new Set() });
  } catch (cause) {
    if (cause instanceof ManagedLobbyProtocolError) throw cause;
    throw new ManagedLobbyProtocolError(`Unable to inspect ${label}.`, { cause });
  }
}

function record(value: unknown, path: string): DataRecord {
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    protocol(`${path} must be an object.`);
  return value as DataRecord;
}

function exact(value: DataRecord, allowed: readonly string[], path: string): void {
  const unknown = Object.keys(value).find((key) => !allowed.includes(key));
  if (unknown !== undefined) protocol(`${path} contains unknown key: ${unknown}.`);
}

function text(value: unknown, path: string, maximum: number): string {
  if (typeof value !== 'string' || value.trim().length === 0 || value.length > maximum)
    protocol(`${path} must be bounded nonblank text.`);
  return value;
}

function identifier(value: unknown, path: string): string {
  const result = text(value, path, 64);
  if (!ID.test(result)) protocol(`${path} must be a bounded lowercase identifier.`);
  return result;
}

function uuid(value: unknown, path: string): string {
  if (typeof value !== 'string' || !UUID.test(value)) protocol(`${path} must be a canonical UUID.`);
  return value;
}

function bool(value: unknown, path: string): boolean {
  if (typeof value !== 'boolean') protocol(`${path} must be a boolean.`);
  return value;
}

function number(value: unknown, path: string, minimum: number, maximum: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < minimum || value > maximum)
    protocol(`${path} must be a finite number from ${String(minimum)} through ${String(maximum)}.`);
  return value;
}

function integer(value: unknown, path: string, minimum: number, maximum: number): number {
  const result = number(value, path, minimum, maximum);
  if (!Number.isSafeInteger(result)) protocol(`${path} must be an integer.`);
  return result;
}

function visibility(value: unknown, path: string): ManagedLobbyVisibilityMode {
  if (value !== 'all' && value !== 'none' && value !== 'staff' && value !== 'cycle')
    protocol(`${path} must be all, none, staff, or cycle.`);
  return value;
}

function file(value: unknown, path: string): ManagedLobbyFile {
  if (typeof value !== 'string' || !(MANAGED_LOBBY_FILES as readonly string[]).includes(value))
    protocol(`${path} must name one of the eight managed lobby files.`);
  return value as ManagedLobbyFile;
}

function optionalIdentifier(value: unknown, path: string): void {
  if (value !== undefined) identifier(value, path);
}

function optionalInteger(value: unknown, path: string, minimum: number, maximum: number): void {
  if (value !== undefined) integer(value, path, minimum, maximum);
}

function optionalBoolean(value: unknown, path: string): void {
  if (value !== undefined) bool(value, path);
}

function execute(value: DataRecord, path: string): void {
  const action = text(value.action, `${path}.action`, 32);
  if (action === 'setspawn' || action === 'spawn' || action === 'items') {
    exact(value, ['operation', 'action', 'player'], path);
    uuid(value.player, `${path}.player`);
  } else if (action === 'menu') {
    exact(value, ['operation', 'action', 'player', 'id'], path);
    uuid(value.player, `${path}.player`);
    identifier(value.id, `${path}.id`);
  } else if (action === 'visibility') {
    exact(value, ['operation', 'action', 'player', 'mode'], path);
    uuid(value.player, `${path}.player`);
    visibility(value.mode, `${path}.mode`);
  } else if (action === 'portal-wand' || action === 'portal-pos1' || action === 'portal-pos2') {
    exact(value, ['operation', 'action', 'player'], path);
    uuid(value.player, `${path}.player`);
  } else if (action === 'portal-create') {
    exact(
      value,
      [
        'operation',
        'action',
        'player',
        'id',
        'destination',
        'permission',
        'priority',
        'cooldown-ms',
        'enabled',
        'visualize',
      ],
      path,
    );
    uuid(value.player, `${path}.player`);
    identifier(value.id, `${path}.id`);
    optionalIdentifier(value.destination, `${path}.destination`);
    if (value.permission !== undefined) {
      const permission = text(value.permission, `${path}.permission`, 128);
      if (!PERMISSION.test(permission)) protocol(`${path}.permission must be a permission node.`);
    }
    optionalInteger(value.priority, `${path}.priority`, -10_000, 10_000);
    optionalInteger(value['cooldown-ms'], `${path}.cooldown-ms`, 0, 600_000);
    optionalBoolean(value.enabled, `${path}.enabled`);
    optionalBoolean(value.visualize, `${path}.visualize`);
  } else if (action === 'portal-remove') {
    exact(value, ['operation', 'action', 'player', 'id'], path);
    uuid(value.player, `${path}.player`);
    identifier(value.id, `${path}.id`);
  } else if (action === 'portal-list') exact(value, ['operation', 'action'], path);
  else if (action === 'portal-info') {
    exact(value, ['operation', 'action', 'id'], path);
    identifier(value.id, `${path}.id`);
  } else if (action === 'portal-enable' || action === 'portal-disable') {
    exact(value, ['operation', 'action', 'player', 'id'], path);
    uuid(value.player, `${path}.player`);
    identifier(value.id, `${path}.id`);
  } else if (action === 'portal-destination') {
    exact(value, ['operation', 'action', 'player', 'id', 'type', 'target'], path);
    uuid(value.player, `${path}.player`);
    identifier(value.id, `${path}.id`);
    const type = text(value.type, `${path}.type`, 8);
    if (type === 'server' || type === 'menu') identifier(value.target, `${path}.target`);
    else if (type === 'spawn') {
      if (Object.hasOwn(value, 'target')) protocol(`${path}.target is not accepted for spawn.`);
    } else protocol(`${path}.type must be server, spawn, or menu.`);
  } else if (action === 'portal-visualize') {
    exact(value, ['operation', 'action', 'player', 'enabled'], path);
    uuid(value.player, `${path}.player`);
    bool(value.enabled, `${path}.enabled`);
  } else protocol(`${path}.action is unknown: ${action}.`);
}

function validateRequest(value: ManagedLobbyData): ManagedLobbyRequest {
  const request = record(value, 'Managed-lobby request');
  const operation = text(request.operation, 'Managed-lobby request.operation', 32);
  if (operation === 'status' || operation === 'ensure' || operation === 'reload')
    exact(request, ['operation'], 'Managed-lobby request');
  else if (operation === 'read') {
    exact(request, ['operation', 'file'], 'Managed-lobby request');
    if (request.file !== undefined) file(request.file, 'Managed-lobby request.file');
  } else if (operation === 'write') {
    exact(request, ['operation', 'file', 'content', 'reload'], 'Managed-lobby request');
    file(request.file, 'Managed-lobby request.file');
    const content = text(request.content, 'Managed-lobby request.content', MAX_FILE_BYTES);
    if (new TextEncoder().encode(content).length > MAX_FILE_BYTES)
      protocol('Managed-lobby request.content exceeds 1 MiB as UTF-8.');
    if (request.reload !== undefined) bool(request.reload, 'Managed-lobby request.reload');
  } else if (operation === 'execute') execute(request, 'Managed-lobby request');
  else protocol(`Managed-lobby request.operation is unknown: ${operation}.`);
  return request as unknown as ManagedLobbyRequest;
}

function validateResult(value: ManagedLobbyData): ManagedLobbyResult {
  const result = record(value, 'Managed-lobby result');
  bool(result.ok, 'Managed-lobby result.ok');
  text(result.state, 'Managed-lobby result.state', 128);
  if (result.ok === false) text(result.error, 'Managed-lobby result.error', 512);
  else if (Object.hasOwn(result, 'error'))
    protocol('Successful managed-lobby results must not contain error.');
  return result as unknown as ManagedLobbyResult;
}

function managedLobbyHost(): {
  readonly host: object;
  readonly operation: (...values: readonly unknown[]) => unknown;
} {
  let value: unknown;
  try {
    value = Reflect.get(globalThis, 'host');
  } catch (cause) {
    throw new ManagedLobbyUnavailableError('Unable to resolve the Shamoo Runtime host.', { cause });
  }
  if (value === null || (typeof value !== 'object' && typeof value !== 'function'))
    throw new ManagedLobbyUnavailableError('Shamoo Runtime host is unavailable.');
  let operation: unknown;
  try {
    operation = Reflect.get(value, 'paperManagedLobby');
  } catch (cause) {
    throw new ManagedLobbyUnavailableError('Managed-lobby host operation is unavailable.', {
      cause,
    });
  }
  if (typeof operation !== 'function')
    throw new ManagedLobbyUnavailableError('Managed-lobby host operation is unavailable.');
  return { host: value, operation: operation as (...values: readonly unknown[]) => unknown };
}

/**
 * Calls the owner-scoped managed-lobby Runtime binding directly. The Runtime captures plugin ownership;
 * this bridge deliberately sends only one validated data request and no compiler metadata.
 */
export function paperManagedLobby(request: ManagedLobbyRequest): Promise<ManagedLobbyResult> {
  const safeRequest = validateRequest(copiedData(request, 'Managed-lobby request'));
  const { host, operation } = managedLobbyHost();
  const pending = Reflect.apply(operation, host, [safeRequest]);
  if (!(pending instanceof Promise))
    throw new ManagedLobbyProtocolError('Managed-lobby host operation must return a Promise.');
  return pending.then((value: unknown) =>
    validateResult(copiedData(value, 'Managed-lobby result')),
  );
}
