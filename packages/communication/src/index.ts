/** Versioned, platform-neutral plugin communication contracts. @packageDocumentation */
import { decodeCommunicationEnvelope, encodeCommunicationEnvelope } from '@shamoo/runtime-protocol';
import { satisfies, valid, validRange } from 'semver';
import type { InvocationRuntime, LoadedRuntimeMetadata } from '@shamoo/lifecycle';
import type { CommunicationMetadata, CompilerManifest } from '@shamoo/metadata';

const contractIdPattern = /^[a-z][a-z0-9]*(?:[._/-][a-z0-9]+)*$/;

export interface Codec<T> {
  encode(value: T): Uint8Array;
  decode(payload: Uint8Array): T;
}

export interface JsonCodecOptions<T> {
  readonly validate?: (value: unknown) => value is T;
  readonly maximumBytes?: number;
}

export class CodecError extends Error {
  public readonly code = 'CODEC_ERROR';
  public constructor(
    message: string,
    public override readonly cause?: unknown,
  ) {
    super(message, { cause });
    this.name = 'CodecError';
  }
}

export function jsonCodec<T>(options: JsonCodecOptions<T> = {}): Codec<T> {
  const maximumBytes = options.maximumBytes ?? Number.POSITIVE_INFINITY;
  if (maximumBytes <= 0) throw new RangeError('Codec maximumBytes must be greater than zero.');
  return Object.freeze({
    encode(value: T): Uint8Array {
      try {
        const payload = new TextEncoder().encode(JSON.stringify(value));
        if (payload.byteLength > maximumBytes)
          throw new CodecError(`Encoded payload exceeds ${String(maximumBytes)} bytes.`);
        return payload;
      } catch (error) {
        if (error instanceof CodecError) throw error;
        throw new CodecError('Value cannot be encoded as JSON.', error);
      }
    },
    decode(payload: Uint8Array): T {
      if (
        !ArrayBuffer.isView(payload) ||
        Object.prototype.toString.call(payload) !== '[object Uint8Array]'
      )
        throw new CodecError('Payload must be a Uint8Array.');
      if (payload.byteLength > maximumBytes)
        throw new CodecError(`Encoded payload exceeds ${String(maximumBytes)} bytes.`);
      try {
        const value: unknown = JSON.parse(
          new TextDecoder('utf-8', { fatal: true }).decode(payload),
        );
        if (options.validate !== undefined && !options.validate(value))
          throw new CodecError('Decoded payload failed codec validation.');
        return value as T;
      } catch (error) {
        if (error instanceof CodecError) throw error;
        throw new CodecError('Payload is not valid UTF-8 JSON.', error);
      }
    },
  });
}

type ServiceShape = object;
type ServiceMethod<T extends ServiceShape> = Extract<keyof T, string>;

export interface ServiceContract<T extends ServiceShape> {
  readonly id: string;
  readonly version: string;
  readonly methods: readonly ServiceMethod<T>[];
}

export interface ServiceContractOptions<T extends ServiceShape> {
  readonly id: string;
  readonly version: string;
  readonly methods: readonly ServiceMethod<T>[];
}

export interface ServiceRegistration {
  readonly contractId: string;
  readonly version: string;
  close(): void;
}

export type ServiceAvailability =
  | { readonly available: true; readonly version: string }
  | { readonly available: false; readonly reason: 'missing' | 'incompatible' };

export class ServiceUnavailableError extends Error {
  public readonly code = 'SERVICE_UNAVAILABLE';
  public constructor(
    public readonly contractId: string,
    public readonly versionRange: string,
    public readonly reason: 'missing' | 'incompatible',
  ) {
    super(`Service ${contractId}@${versionRange} is ${reason}.`);
    this.name = 'ServiceUnavailableError';
  }
}

function assertContract(id: string, version: string): void {
  if (id.length > 128 || !contractIdPattern.test(id))
    throw new TypeError(`Invalid communication contract id: ${id}`);
  if (valid(version) === null)
    throw new TypeError(`Contract version must be exact semver: ${version}`);
}

export function defineServiceContract<T extends ServiceShape>(
  options: ServiceContractOptions<T>,
): ServiceContract<T> {
  assertContract(options.id, options.version);
  if (options.methods.length === 0 || new Set(options.methods).size !== options.methods.length)
    throw new TypeError('A service contract requires unique method names.');
  return Object.freeze({ ...options, methods: Object.freeze([...options.methods]) });
}

interface ProviderSlot {
  generation: number;
  version: string;
  provider: object;
}

interface ProxySlot {
  readonly range: string;
  readonly methods: ReadonlySet<string>;
  readonly adapters: ReadonlyMap<string, (...args: readonly unknown[]) => unknown>;
  readonly proxy: object;
}

/** Owns providers while retaining one proxy identity per contract and requested range. */
export class ServiceRegistry {
  readonly #providers = new Map<string, ProviderSlot>();
  readonly #proxies = new Map<string, ProxySlot>();
  #generation = 0;

  public constructor(private readonly metadata?: CommunicationMetadata) {}

  #assertDeclared(id: string, version: string, kind: 'service' | 'event'): void {
    if (this.metadata === undefined) return;
    const contracts = kind === 'service' ? this.metadata.services : this.metadata.events;
    if (!contracts.some((item) => item.id === id && item.version === version))
      throw new TypeError(
        `${kind} contract ${id}@${version} is not declared by compiler metadata.`,
      );
  }

  public register<T extends ServiceShape>(
    contract: ServiceContract<T>,
    provider: T,
  ): ServiceRegistration {
    assertContract(contract.id, contract.version);
    this.#assertDeclared(contract.id, contract.version, 'service');
    for (const method of contract.methods) {
      if (typeof Reflect.get(provider, method) !== 'function')
        throw new TypeError(`Service provider is missing method ${method}.`);
    }
    const generation = ++this.#generation;
    this.#providers.set(contract.id, { generation, version: contract.version, provider });
    let closed = false;
    return Object.freeze({
      contractId: contract.id,
      version: contract.version,
      close: () => {
        if (closed) return;
        closed = true;
        if (this.#providers.get(contract.id)?.generation === generation)
          this.#providers.delete(contract.id);
      },
    });
  }

  public availability<T extends ServiceShape>(
    contract: ServiceContract<T>,
    versionRange = contract.version,
  ): ServiceAvailability {
    this.#assertDeclared(contract.id, contract.version, 'service');
    if (validRange(versionRange) === null)
      throw new TypeError(`Invalid semver range: ${versionRange}`);
    const provider = this.#providers.get(contract.id);
    if (provider === undefined) return { available: false, reason: 'missing' };
    return satisfies(provider.version, versionRange)
      ? { available: true, version: provider.version }
      : { available: false, reason: 'incompatible' };
  }

  public service<T extends ServiceShape>(
    contract: ServiceContract<T>,
    versionRange = contract.version,
  ): T {
    this.#assertDeclared(contract.id, contract.version, 'service');
    if (validRange(versionRange) === null)
      throw new TypeError(`Invalid semver range: ${versionRange}`);
    const key = `${contract.id}\u0000${versionRange}`;
    const existing = this.#proxies.get(key);
    if (existing !== undefined) return existing.proxy as T;
    const methods = new Set<string>(contract.methods);
    const adapters = new Map<string, (...args: readonly unknown[]) => unknown>();
    for (const method of contract.methods)
      adapters.set(method, (...args: readonly unknown[]): unknown => {
        const availability = this.availability(contract, versionRange);
        if (!availability.available)
          throw new ServiceUnavailableError(contract.id, versionRange, availability.reason);
        const provider = this.#providers.get(contract.id);
        const target = provider?.provider;
        const implementation: unknown =
          target === undefined ? undefined : Reflect.get(target, method);
        if (typeof implementation !== 'function' || target === undefined)
          throw new ServiceUnavailableError(contract.id, versionRange, 'missing');
        return Reflect.apply(implementation, target, args);
      });
    const proxy = new Proxy(Object.create(null) as object, {
      get: (_target, property) => {
        if (property === Symbol.toStringTag) return 'ShamooServiceProxy';
        if (typeof property !== 'string' || !methods.has(property)) return undefined;
        return adapters.get(property);
      },
      set: () => false,
    });
    this.#proxies.set(key, { range: versionRange, methods, adapters, proxy });
    return proxy as T;
  }
}

/** Registers compiler-declared component methods through the scoped invocation runtime. */
export function registerCompilerServices(
  manifest: CompilerManifest,
  loaded: LoadedRuntimeMetadata,
  runtime: InvocationRuntime,
  registry = new ServiceRegistry(manifest.communication),
): readonly ServiceRegistration[] {
  return Object.freeze(
    (manifest.communication?.services ?? []).map((service) => {
      const methods = new Map(
        service.methods.map((method) => {
          const invocation = loaded.invocations.find(
            (item) => item.componentId === service.componentId && item.method === method,
          );
          if (invocation?.kind !== 'service')
            throw new TypeError(
              `Compiler service method ${service.componentId}.${method} has no loaded invocation binding.`,
            );
          return [method, invocation] as const;
        }),
      );
      const provider: Record<string, (...arguments_: readonly unknown[]) => Promise<unknown>> =
        Object.fromEntries(
          [...methods].map(([method, invocation]) => [
            method,
            (...arguments_: readonly unknown[]) =>
              runtime.invoke(invocation, { values: arguments_ }),
          ]),
        );
      return registry.register(
        defineServiceContract<typeof provider>({
          id: service.id,
          version: service.version,
          methods: service.methods,
        }),
        provider,
      );
    }),
  );
}

/** Selects consumer plugins whose compiler metadata requests dependent reload. */
export function dependentReloadConsumers(
  serviceId: string,
  manifests: readonly CompilerManifest[],
): readonly string[] {
  return Object.freeze(
    manifests
      .filter((manifest) =>
        manifest.communication?.consumers.some(
          (consumer) => consumer.id === serviceId && consumer.dependentReload === 'reload',
        ),
      )
      .map((manifest) => manifest.packageName)
      .sort(),
  );
}

export interface EventContract<T> {
  readonly id: string;
  readonly version: string;
  readonly codec: Codec<T>;
}

export function defineEventContract<T>(options: EventContract<T>): EventContract<T> {
  assertContract(options.id, options.version);
  return Object.freeze(options);
}

export interface EventSubscription {
  close(): void;
}

interface EventListener {
  readonly range: string;
  readonly receive: (payload: Uint8Array, version: string) => void | Promise<void>;
}

export class VersionedEventBus {
  readonly #listeners = new Map<string, Set<EventListener>>();

  public constructor(private readonly metadata?: CommunicationMetadata) {}

  #assertDeclared(contract: EventContract<unknown>): void {
    if (
      this.metadata !== undefined &&
      !this.metadata.events.some(
        (item) => item.id === contract.id && item.version === contract.version,
      )
    )
      throw new TypeError(
        `event contract ${contract.id}@${contract.version} is not declared by compiler metadata.`,
      );
  }

  public subscribe<T>(
    contract: EventContract<T>,
    handler: (event: T) => void | Promise<void>,
    versionRange = contract.version,
  ): EventSubscription {
    this.#assertDeclared(contract);
    if (validRange(versionRange) === null)
      throw new TypeError(`Invalid semver range: ${versionRange}`);
    const listener: EventListener = {
      range: versionRange,
      receive: (payload) => handler(contract.codec.decode(payload)),
    };
    const listeners = this.#listeners.get(contract.id) ?? new Set<EventListener>();
    listeners.add(listener);
    this.#listeners.set(contract.id, listeners);
    let closed = false;
    return Object.freeze({
      close: () => {
        if (closed) return;
        closed = true;
        listeners.delete(listener);
        if (listeners.size === 0) this.#listeners.delete(contract.id);
      },
    });
  }

  public async publish<T>(contract: EventContract<T>, event: T): Promise<number> {
    this.#assertDeclared(contract);
    const payload = contract.codec.encode(event);
    let pending: Promise<void>[] | undefined;
    let delivered = 0;
    for (const listener of this.#listeners.get(contract.id) ?? []) {
      if (!satisfies(contract.version, listener.range)) continue;
      delivered += 1;
      const result = listener.receive(payload, contract.version);
      if (result !== undefined) (pending ??= []).push(result);
    }
    if (pending !== undefined) await Promise.all(pending);
    return delivered;
  }
}

export type DependentReloadPolicy = 'keep-running' | 'reload';
export interface ReloadDependencyContract {
  readonly dependentPolicy: DependentReloadPolicy;
}

/** Returns dependents in deterministic nearest-first order; lifecycle shutdown may reverse it. */
export function dependentReloadOrder(
  provider: string,
  dependencies: ReadonlyMap<string, ReadonlySet<string>>,
  policy: 'none' | 'direct' | 'transitive',
): readonly string[] {
  if (policy === 'none') return [];
  const result: string[] = [];
  let frontier = [provider];
  const visited = new Set([provider]);
  do {
    const next = [...dependencies]
      .filter(
        ([plugin, required]) => !visited.has(plugin) && frontier.some((item) => required.has(item)),
      )
      .map(([plugin]) => plugin)
      .sort();
    for (const plugin of next) visited.add(plugin);
    result.push(...next);
    frontier = next;
  } while (policy === 'transitive' && frontier.length > 0);
  return Object.freeze(result);
}

export type TransportAvailability =
  { readonly available: true } | { readonly available: false; readonly reason: string };
export interface BinaryRequestOptions {
  readonly timeoutMs: number;
  readonly signal: AbortSignal;
}
export interface BinaryRequestTransport {
  availability(): TransportAvailability;
  request(payload: Uint8Array, options: BinaryRequestOptions): Promise<Uint8Array>;
}

export type CommunicationErrorCode =
  'UNAVAILABLE' | 'TIMEOUT' | 'ABORTED' | 'TRANSPORT_ERROR' | 'REMOTE_ERROR' | 'INVALID_RESPONSE';
export class CommunicationError extends Error {
  public constructor(
    public readonly code: CommunicationErrorCode,
    message: string,
    public override readonly cause?: unknown,
  ) {
    super(message, { cause });
    this.name = 'CommunicationError';
  }
}

export interface RemoteProcedure<I, O> {
  readonly id: string;
  readonly version: string;
  readonly operation: string;
  readonly request: Codec<I>;
  readonly response: Codec<O>;
}

export function defineRemoteProcedure<I, O>(
  procedure: RemoteProcedure<I, O>,
): RemoteProcedure<I, O> {
  assertContract(procedure.id, procedure.version);
  if (procedure.operation.length > 128 || !contractIdPattern.test(procedure.operation))
    throw new TypeError(`Invalid communication operation: ${procedure.operation}`);
  return Object.freeze(procedure);
}

export class CommunicationClient {
  public constructor(
    private readonly transport: BinaryRequestTransport,
    private readonly defaultTimeoutMs = 5_000,
  ) {
    if (!Number.isFinite(defaultTimeoutMs) || defaultTimeoutMs <= 0)
      throw new RangeError('Communication timeout must be a positive finite number.');
  }

  public availability(): TransportAvailability {
    return this.transport.availability();
  }

  public async request<I, O>(
    procedure: RemoteProcedure<I, O>,
    input: I,
    options: { readonly timeoutMs?: number; readonly signal?: AbortSignal } = {},
  ): Promise<O> {
    const availability = this.transport.availability();
    if (!availability.available) throw new CommunicationError('UNAVAILABLE', availability.reason);
    const timeoutMs = options.timeoutMs ?? this.defaultTimeoutMs;
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0)
      throw new RangeError('Communication timeout must be a positive finite number.');
    const requestId = crypto.randomUUID();
    const request = {
      protocolVersion: 1,
      kind: 'request',
      requestId,
      contract: { id: procedure.id, version: procedure.version },
      operation: procedure.operation,
      payload: procedure.request.encode(input),
    } satisfies CommunicationHandlerRequest;
    const abort = new AbortController();
    const externalAbort = (): void => {
      abort.abort(options.signal?.reason);
    };
    options.signal?.addEventListener('abort', externalAbort, { once: true });
    let timer: ReturnType<typeof setTimeout> | undefined;
    let rejectAbort: (error: CommunicationError) => void = () => undefined;
    const aborted = new Promise<never>((_resolve, reject) => {
      rejectAbort = reject;
    });
    const rejectWhenAborted = (): void => {
      rejectAbort(new CommunicationError('ABORTED', 'Communication request was aborted.'));
    };
    abort.signal.addEventListener('abort', rejectWhenAborted, { once: true });
    if (options.signal?.aborted === true) externalAbort();
    try {
      const timeout = new Promise<never>((_resolve, reject) => {
        timer = setTimeout(() => {
          reject(
            new CommunicationError(
              'TIMEOUT',
              `Communication request exceeded ${String(timeoutMs)}ms.`,
            ),
          );
          abort.abort('timeout');
        }, timeoutMs);
      });
      const bytes = await Promise.race([
        this.transport.request(encodeCommunicationEnvelope(request), {
          timeoutMs,
          signal: abort.signal,
        }),
        timeout,
        aborted,
      ]);
      const response = decodeCommunicationEnvelope(bytes);
      if (response.kind !== 'response' || response.requestId !== requestId)
        throw new CommunicationError('INVALID_RESPONSE', 'Response does not match the request.');
      if (response.status === 'error')
        throw new CommunicationError(
          'REMOTE_ERROR',
          `${response.error.code}: ${response.error.message}`,
        );
      return procedure.response.decode(response.payload);
    } catch (error) {
      if (error instanceof CommunicationError) throw error;
      if (options.signal?.aborted === true)
        throw new CommunicationError('ABORTED', 'Communication request was aborted.', error);
      throw new CommunicationError('TRANSPORT_ERROR', 'Communication transport failed.', error);
    } finally {
      if (timer !== undefined) clearTimeout(timer);
      abort.signal.removeEventListener('abort', rejectWhenAborted);
      options.signal?.removeEventListener('abort', externalAbort);
    }
  }
}

export interface CommunicationHandlerRequest {
  readonly protocolVersion: 1;
  readonly kind: 'request';
  readonly requestId: string;
  readonly contract: { readonly id: string; readonly version: string };
  readonly operation: string;
  readonly payload: Uint8Array;
}
export type CommunicationHandlerResponse =
  | {
      readonly protocolVersion: 1;
      readonly kind: 'response';
      readonly requestId: string;
      readonly status: 'success';
      readonly payload: Uint8Array;
    }
  | {
      readonly protocolVersion: 1;
      readonly kind: 'response';
      readonly requestId: string;
      readonly status: 'error';
      readonly error: { readonly code: string; readonly message: string };
    };
export type CommunicationRequestHandler = (
  request: CommunicationHandlerRequest,
) => Promise<CommunicationHandlerResponse>;

/** Adapts a typed envelope handler to the byte-oriented Paper/Velocity channel boundary. */
export function binaryCommunicationHandler(
  handler: CommunicationRequestHandler,
): (payload: Uint8Array) => Promise<Uint8Array> {
  return async (payload) => {
    const request = decodeCommunicationEnvelope(payload);
    if (request.kind !== 'request')
      throw new CommunicationError('INVALID_RESPONSE', 'Expected request envelope.');
    const response = await handler(request);
    if (
      (response as { readonly kind: string }).kind !== 'response' ||
      response.requestId !== request.requestId
    )
      throw new CommunicationError('INVALID_RESPONSE', 'Response does not match the request.');
    return encodeCommunicationEnvelope(response);
  };
}
