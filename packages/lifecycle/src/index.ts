/** Lifecycle orchestration, compiler metadata loading, and scoped invocation runtime. */
import { applyExceptionFilters, type ExceptionFilter } from '@shamoo/filters';
import { runGuards, type Guard } from '@shamoo/guards';
import {
  composeInterceptors,
  type Interceptor,
  type InvocationContext,
  type InvocationKind,
} from '@shamoo/interceptors';
import {
  COMPILER_METADATA_VERSION,
  type CompilerManifest,
  type DependencyMetadata,
  type TokenMetadata,
} from '@shamoo/metadata';
import { applyPipes, type Pipe } from '@shamoo/pipes';
import { validateValue, type Validator } from '@shamoo/validation';
import { Scope, type Container, type Dependency, type ServiceIdentifier } from '@shamoo/di';

export {
  OnDisable,
  OnDrain,
  OnEnable,
  OnLoad,
  OnReady,
  OnUnload,
  Context,
} from '@shamoo/decorators';

export type LifecycleStage = 'load' | 'enable' | 'ready' | 'drain' | 'disable' | 'unload';
export interface LifecycleContext {
  readonly stage: LifecycleStage;
  readonly signal: AbortSignal;
}
export interface OnPluginLoad {
  onPluginLoad(context: LifecycleContext): void | Promise<void>;
}
export interface OnPluginEnable {
  onPluginEnable(context: LifecycleContext): void | Promise<void>;
}
export interface OnPluginReady {
  onPluginReady(context: LifecycleContext): void | Promise<void>;
}
export interface OnPluginDrain {
  onPluginDrain(context: LifecycleContext): void | Promise<void>;
}
export interface OnPluginDisable {
  onPluginDisable(context: LifecycleContext): void | Promise<void>;
}
export interface OnPluginUnload {
  onPluginUnload(context: LifecycleContext): void | Promise<void>;
}

export interface RuntimeParameter {
  readonly index: number;
  readonly dependency?: Dependency;
  readonly contextKey?: string;
  readonly name?: string;
  readonly pipes?: readonly Pipe[];
  readonly validators?: readonly Validator[];
}
export interface LifecycleMethod {
  readonly componentId: string;
  readonly target: object;
  readonly method: string | symbol;
  readonly stage: LifecycleStage;
  readonly parameters?: readonly RuntimeParameter[];
  readonly order?: number;
  /** Provider token whose declaring module controls method-parameter visibility. */
  readonly requester?: ServiceIdentifier;
}
export interface LifecycleExecutorOptions {
  readonly timeout?: number;
}

export class LifecycleError extends Error {
  public readonly code = 'SHAMOO_LIFECYCLE';
  public constructor(
    public readonly stage: LifecycleStage,
    public readonly componentId: string,
    public readonly method: string | symbol,
    public override readonly cause: unknown,
  ) {
    super(`Lifecycle ${stage} failed at ${componentId}.${String(method)}.`, { cause });
    this.name = 'LifecycleError';
  }
}
export class LifecycleTimeoutError extends Error {
  public readonly code = 'SHAMOO_LIFECYCLE_TIMEOUT';
  public constructor(
    public readonly stage: LifecycleStage,
    public readonly timeout: number,
  ) {
    super(`Lifecycle ${stage} exceeded ${String(timeout)}ms.`);
    this.name = 'LifecycleTimeoutError';
  }
}
export class LifecycleOrderError extends Error {
  public readonly code = 'SHAMOO_LIFECYCLE_ORDER';
  public constructor(
    public readonly expected: LifecycleStage | undefined,
    public readonly received: LifecycleStage,
  ) {
    super(
      expected === undefined
        ? `Lifecycle ${received} cannot run after unload.`
        : `Lifecycle ${received} cannot run before ${expected}.`,
    );
    this.name = 'LifecycleOrderError';
  }
}
export class LifecycleAggregateError extends AggregateError {
  public readonly code = 'SHAMOO_LIFECYCLE_CLEANUP';
  public constructor(
    public readonly stage: 'disable' | 'unload',
    errors: readonly LifecycleError[],
  ) {
    super(errors, `Lifecycle ${stage} completed with ${String(errors.length)} error(s).`);
    this.name = 'LifecycleAggregateError';
  }
}

function callable(target: object, method: string | symbol): (...args: unknown[]) => unknown {
  const value: unknown = Reflect.get(target, method);
  if (typeof value !== 'function') throw new TypeError(`${String(method)} is not callable.`);
  return value as (...args: unknown[]) => unknown;
}
function ordered(methods: readonly LifecycleMethod[]): LifecycleMethod[] {
  return [...methods].sort(
    (left, right) =>
      (left.order ?? 0) - (right.order ?? 0) ||
      left.componentId.localeCompare(right.componentId) ||
      String(left.method).localeCompare(String(right.method)),
  );
}
function timeoutResult<T>(
  work: Promise<T>,
  milliseconds: number | undefined,
  abort: AbortController,
  timeoutError: () => Error,
): Promise<T> {
  if (milliseconds === undefined) return work;
  if (!Number.isFinite(milliseconds) || milliseconds < 0)
    return Promise.reject(new RangeError('Timeout must be a non-negative finite number.'));
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      const error = timeoutError();
      abort.abort(error);
      reject(error);
    }, milliseconds);
    void work.then(resolve, reject).finally(() => {
      clearTimeout(timer);
    });
  });
}

export class LifecycleExecutor {
  readonly #methods: readonly LifecycleMethod[];
  readonly #container: Container;
  readonly #timeout: number | undefined;
  readonly #started = new Set<string>();
  readonly #outcomes = new Map<LifecycleStage, Promise<void>>();
  #nextStage = 0;
  #settlement: Promise<void> = Promise.resolve();

  public constructor(
    container: Container,
    methods: readonly LifecycleMethod[],
    options: LifecycleExecutorOptions = {},
  ) {
    this.#container = container;
    this.#methods = methods;
    this.#timeout = options.timeout;
  }

  public execute(stage: LifecycleStage): Promise<void> {
    const existing = this.#outcomes.get(stage);
    if (existing !== undefined) return existing;
    const stages: readonly LifecycleStage[] = [
      'load',
      'enable',
      'ready',
      'drain',
      'disable',
      'unload',
    ];
    if (stages[this.#nextStage] !== stage)
      return Promise.reject(new LifecycleOrderError(stages[this.#nextStage], stage));
    this.#nextStage += 1;
    let resolveOutcome: () => void = () => undefined;
    let rejectOutcome: (error: unknown) => void = () => undefined;
    const outcome = new Promise<void>((resolve, reject) => {
      resolveOutcome = resolve;
      rejectOutcome = reject;
    });
    this.#outcomes.set(stage, outcome);
    this.#settlement = this.#settlement
      .then(
        () => this.#run(stage, resolveOutcome, rejectOutcome),
        () => this.#run(stage, resolveOutcome, rejectOutcome),
      )
      .catch(() => undefined);
    return outcome;
  }

  async #run(
    stage: LifecycleStage,
    resolveOutcome: () => void,
    rejectOutcome: (error: unknown) => void,
  ): Promise<void> {
    if (stage === 'load') {
      const abort = new AbortController();
      const initialization = this.#container.initialize();
      try {
        await timeoutResult(
          initialization,
          this.#timeout,
          abort,
          () => new LifecycleTimeoutError(stage, this.#timeout ?? 0),
        );
      } catch (cause) {
        rejectOutcome(new LifecycleError(stage, 'container', 'initialize', cause));
        await initialization.catch(() => undefined);
        return;
      }
    }
    let methods = ordered(this.#methods.filter((item) => item.stage === stage));
    const cleanup = stage === 'disable' || stage === 'unload';
    if (cleanup) methods = methods.filter((item) => this.#started.has(item.componentId)).reverse();
    const errors: LifecycleError[] = [];
    for (const metadata of methods) {
      const work = this.#invoke(metadata);
      try {
        await timeoutResult(
          work.promise,
          this.#timeout,
          work.abort,
          () => new LifecycleTimeoutError(metadata.stage, this.#timeout ?? 0),
        );
        if (!cleanup) this.#started.add(metadata.componentId);
      } catch (cause) {
        const error = new LifecycleError(stage, metadata.componentId, metadata.method, cause);
        if (!cleanup) {
          rejectOutcome(error);
          await work.promise.catch(() => undefined);
          return;
        }
        errors.push(error);
        await work.promise.catch(() => undefined);
      }
    }
    if (errors.length > 0) {
      rejectOutcome(
        new LifecycleAggregateError(stage === 'disable' ? 'disable' : 'unload', errors),
      );
      return;
    }
    resolveOutcome();
  }

  #invoke(metadata: LifecycleMethod): { promise: Promise<void>; abort: AbortController } {
    const abort = new AbortController();
    const promise = (async () => {
      const parameters = metadata.parameters ?? [];
      const length = parameters.reduce((maximum, item) => Math.max(maximum, item.index + 1), 0);
      const args = Array.from<unknown>({ length });
      for (const parameter of parameters) {
        args[parameter.index] =
          parameter.contextKey === 'lifecycle'
            ? ({ stage: metadata.stage, signal: abort.signal } satisfies LifecycleContext)
            : parameter.dependency === undefined
              ? undefined
              : await this.#container.resolveDependencyAsync(
                  parameter.dependency,
                  metadata.requester,
                );
      }
      await callable(metadata.target, metadata.method).apply(metadata.target, args);
    })();
    return { promise, abort };
  }
}

export interface InvocationMethod {
  readonly kind: InvocationKind;
  /** Required for service methods because they inherit no platform dispatch scope. */
  readonly scope?: 'event' | 'command' | 'task';
  readonly target: object;
  readonly method: string | symbol;
  /** Provider token whose declaring module controls method-parameter visibility. */
  readonly requester?: ServiceIdentifier;
  readonly parameters?: readonly RuntimeParameter[];
  readonly interceptors?: readonly Interceptor[];
  readonly guards?: readonly Guard[];
  readonly filters?: readonly ExceptionFilter[];
  readonly transformResult?: (value: unknown, context: InvocationContext) => unknown;
  readonly transformError?: (error: unknown, context: InvocationContext) => unknown;
}
export interface InvokeOptions {
  readonly values?: readonly unknown[];
  readonly context?: Readonly<Record<string, unknown>>;
  readonly correlationId?: string;
  readonly timeout?: number;
  readonly signal?: AbortSignal;
}
export interface InvocationRuntimeOptions {
  readonly maxActive?: number;
  readonly timeout?: number;
}

export class InvocationRejectedError extends Error {
  public readonly code = 'SHAMOO_INVOCATION_REJECTED';
  public constructor(public readonly reason: 'draining' | 'disposed' | 'backpressure') {
    super(`Invocation rejected: ${reason}.`);
    this.name = 'InvocationRejectedError';
  }
}
export class InvocationTimeoutError extends Error {
  public readonly code = 'SHAMOO_INVOCATION_TIMEOUT';
  public constructor(public readonly timeout: number) {
    super(`Invocation exceeded ${String(timeout)}ms.`);
    this.name = 'InvocationTimeoutError';
  }
}
export class DrainTimeoutError extends Error {
  public readonly code = 'SHAMOO_DRAIN_TIMEOUT';
  public constructor(
    public readonly active: number,
    public readonly timeout: number,
  ) {
    super(`Drain exceeded ${String(timeout)}ms with ${String(active)} invocation(s) active.`);
    this.name = 'DrainTimeoutError';
  }
}

type InvocationScope = Scope.EVENT | Scope.COMMAND | Scope.TASK;
const invocationScopes: Readonly<Record<Exclude<InvocationKind, 'service'>, InvocationScope>> = {
  event: Scope.EVENT,
  command: Scope.COMMAND,
  task: Scope.TASK,
  packet: Scope.EVENT,
};
let invocationSequence = 0;

export class InvocationRuntime {
  readonly #container: Container;
  readonly #maxActive: number;
  readonly #timeout: number | undefined;
  readonly #idle = new Set<() => void>();
  #callables = new WeakMap<object, Map<string | symbol, (...args: unknown[]) => unknown>>();
  #active = 0;
  #draining = false;
  #disposed = false;

  public constructor(container: Container, options: InvocationRuntimeOptions = {}) {
    this.#container = container;
    this.#maxActive = options.maxActive ?? Number.POSITIVE_INFINITY;
    this.#timeout = options.timeout;
    if (this.#maxActive <= 0) throw new RangeError('maxActive must be greater than zero.');
  }
  public get activeCount(): number {
    return this.#active;
  }
  public get draining(): boolean {
    return this.#draining;
  }

  public async invoke(metadata: InvocationMethod, options: InvokeOptions = {}): Promise<unknown> {
    if (this.#disposed) throw new InvocationRejectedError('disposed');
    if (this.#draining) throw new InvocationRejectedError('draining');
    if (this.#active >= this.#maxActive) throw new InvocationRejectedError('backpressure');
    this.#active += 1;
    const id = `invocation-${String(++invocationSequence)}`;
    const correlationId = options.correlationId ?? id;
    const abort = new AbortController();
    const onAbort = (): void => {
      abort.abort(options.signal?.reason);
    };
    options.signal?.addEventListener('abort', onAbort, { once: true });
    if (options.signal?.aborted === true) onAbort();
    const contextValues = {
      ...options.context,
      invocationId: id,
      correlationId,
      abortSignal: abort.signal,
    };
    const operation = (async (): Promise<unknown> => {
      let scope: Container | undefined;
      let context: InvocationContext = {
        id,
        correlationId,
        kind: metadata.kind,
        target: metadata.target,
        method: metadata.method,
        arguments: [],
        signal: abort.signal,
        attributes: new Map(Object.entries(contextValues)),
        proceed: () => Promise.reject(new Error('No continuation.')),
      };
      try {
        const scopeKind = metadata.kind === 'service' ? metadata.scope : metadata.kind;
        if (scopeKind === undefined)
          throw new TypeError('Service invocations require an event, command, or task scope.');
        scope = this.#container.child(invocationScopes[scopeKind], contextValues);
        const args = await this.#parameters(scope, metadata, options.values ?? [], abort.signal);
        context = {
          id,
          correlationId,
          kind: metadata.kind,
          target: metadata.target,
          method: metadata.method,
          arguments: args,
          signal: abort.signal,
          attributes: context.attributes,
          proceed: () => Promise.reject(new Error('No continuation.')),
        };
        await runGuards(metadata.guards ?? [], context);
        const result = await composeInterceptors(context, metadata.interceptors ?? [], () =>
          this.#callable(metadata.target, metadata.method)(...args),
        );
        return metadata.transformResult === undefined
          ? result
          : metadata.transformResult(result, context);
      } catch (error) {
        const transformed =
          metadata.transformError === undefined
            ? error
            : await metadata.transformError(error, context);
        return await applyExceptionFilters(transformed, metadata.filters ?? [], context);
      } finally {
        options.signal?.removeEventListener('abort', onAbort);
        try {
          await scope?.dispose();
        } finally {
          this.#active -= 1;
          if (this.#active === 0) {
            for (const resolve of this.#idle) resolve();
            this.#idle.clear();
          }
        }
      }
    })();
    return timeoutResult(
      operation,
      options.timeout ?? this.#timeout,
      abort,
      () => new InvocationTimeoutError(options.timeout ?? this.#timeout ?? 0),
    );
  }

  #callable(target: object, method: string | symbol): (...args: unknown[]) => unknown {
    let methods = this.#callables.get(target);
    if (methods === undefined) {
      methods = new Map();
      this.#callables.set(target, methods);
    }
    let adapter = methods.get(method);
    if (adapter === undefined) {
      const value = callable(target, method);
      adapter = (...args) => Reflect.apply(value, target, args);
      methods.set(method, adapter);
    }
    return adapter;
  }

  async #parameters(
    scope: Container,
    metadata: InvocationMethod,
    values: readonly unknown[],
    signal: AbortSignal,
  ): Promise<unknown[]> {
    const parameters = metadata.parameters ?? [];
    const length = Math.max(values.length, ...parameters.map((item) => item.index + 1), 0);
    const args = Array.from({ length }, (_, index): unknown => values[index]);
    for (const parameter of parameters) {
      let value =
        parameter.contextKey === undefined
          ? parameter.dependency === undefined
            ? args[parameter.index]
            : await scope.resolveDependencyAsync(parameter.dependency, metadata.requester)
          : scope.context(parameter.contextKey);
      value = await applyPipes(value, parameter.pipes ?? [], {
        kind: metadata.kind,
        index: parameter.index,
        ...(parameter.name === undefined ? {} : { parameter: parameter.name }),
        signal,
      });
      await validateValue(value, parameter.validators ?? []);
      args[parameter.index] = value;
    }
    return args;
  }

  public async drain(timeout?: number): Promise<void> {
    if (this.#disposed) throw new InvocationRejectedError('disposed');
    this.#draining = true;
    if (this.#active === 0) return;
    const wait = new Promise<void>((resolve) => {
      this.#idle.add(resolve);
    });
    if (timeout === undefined) return wait;
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([
        wait,
        new Promise<never>((_resolve, reject) => {
          timer = setTimeout(() => {
            reject(new DrainTimeoutError(this.#active, timeout));
          }, timeout);
        }),
      ]);
    } finally {
      if (timer !== undefined) clearTimeout(timer);
    }
  }

  public async dispose(timeout?: number): Promise<void> {
    if (this.#disposed) return;
    await this.drain(timeout);
    this.#disposed = true;
    this.#callables = new WeakMap();
  }
}

export interface RuntimeMetadataResolver {
  resolveComponent(id: string): object;
  resolveToken(token: TokenMetadata): ServiceIdentifier;
  /** Checks the method against executable bindings generated for this component by the compiler. */
  isExecutableMethod(componentId: string, method: string): boolean;
  /** Returns the component provider token used to retain private module visibility. */
  resolveRequester?(componentId: string): ServiceIdentifier;
}
export interface LoadedRuntimeMetadata {
  readonly lifecycle: readonly LifecycleMethod[];
  readonly invocations: readonly (InvocationMethod & { readonly componentId: string })[];
}
export class MetadataValidationError extends Error {
  public readonly code = 'SHAMOO_METADATA_INVALID';
  public constructor(message: string) {
    super(message);
    this.name = 'MetadataValidationError';
  }
}

const lifecycleNames: Readonly<Record<string, LifecycleStage>> = {
  OnLoad: 'load',
  OnEnable: 'enable',
  OnReady: 'ready',
  OnDrain: 'drain',
  OnDisable: 'disable',
  OnUnload: 'unload',
};
const invocationNames: Readonly<Record<string, InvocationKind>> = {
  EventHandler: 'event',
  Command: 'command',
  Subcommand: 'command',
  Scheduled: 'task',
  Interval: 'task',
  Timeout: 'task',
  PacketHandler: 'packet',
  OnPacketReceive: 'packet',
  OnPacketSend: 'packet',
};
function assertRecord(value: unknown, label: string): asserts value is Record<string, unknown> {
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new MetadataValidationError(`${label} must be an object.`);
}
function runtimeParameter(input: unknown, resolver: RuntimeMetadataResolver): RuntimeParameter {
  assertRecord(input, 'Method parameter');
  if (!Number.isSafeInteger(input.index) || (typeof input.index === 'number' && input.index < 0))
    throw new MetadataValidationError('Method parameter index must be a non-negative integer.');
  assertRecord(input.token, 'Method parameter token');
  if (input.token.kind !== 'class' && input.token.kind !== 'token')
    throw new MetadataValidationError('Method parameter token kind is invalid.');
  const value = input as unknown as DependencyMetadata;
  const tokenValue = 'value' in value.token ? value.token.value : undefined;
  if (
    value.token.kind === 'token' &&
    tokenValue !== null &&
    typeof tokenValue === 'object' &&
    !Array.isArray(tokenValue) &&
    typeof (tokenValue as Record<string, unknown>).binding === 'string'
  ) {
    const contextToken = tokenValue as Record<string, unknown>;
    const binding = contextToken.binding as string;
    if (!['Argument', 'Option', 'Sender', 'ConfigValue', 'Context'].includes(binding))
      throw new MetadataValidationError(`Unsupported context binding ${binding}.`);
    const key = binding === 'Sender' ? 'sender' : String(contextToken.value);
    return { index: value.index ?? 0, contextKey: key };
  }
  return {
    index: value.index ?? 0,
    dependency: {
      token: resolver.resolveToken(value.token),
      ...(value.optional === true ? { optional: true } : {}),
      ...(value.all === true ? { all: true } : {}),
      ...(value.lazy === true ? { lazy: true } : {}),
      ...(value.name === undefined ? {} : { name: value.name }),
      ...(value.qualifier === undefined ? {} : { qualifier: value.qualifier }),
    },
  };
}

/** Validates and whitelists executable fields from compiler metadata. */
export function loadRuntimeMetadata(
  input: unknown,
  resolver: RuntimeMetadataResolver,
): LoadedRuntimeMetadata {
  if (!isCompilerManifest(input))
    throw new MetadataValidationError('Manifest does not match the compiler metadata schema.');
  const lifecycle: LifecycleMethod[] = [];
  const invocations: (InvocationMethod & { componentId: string })[] = [];
  const serviceMethods = new Set(
    input.communication?.services.flatMap((service) =>
      service.methods.map((method) => `${service.componentId}\u0000${method}`),
    ) ?? [],
  );
  for (const rawComponent of input.components) {
    assertRecord(rawComponent, 'Component');
    if (typeof rawComponent.id !== 'string' || !Array.isArray(rawComponent.methods))
      throw new MetadataValidationError('Component id and methods are required.');
    const target = resolver.resolveComponent(rawComponent.id);
    for (const rawMethod of rawComponent.methods) {
      assertRecord(rawMethod, 'Method');
      if (
        typeof rawMethod.name !== 'string' ||
        !Array.isArray(rawMethod.decorators) ||
        !Array.isArray(rawMethod.parameters)
      )
        throw new MetadataValidationError('Method name, decorators, and parameters are required.');
      const names = rawMethod.decorators.map((decorator) => {
        assertRecord(decorator, 'Decorator');
        if (typeof decorator.name !== 'string')
          throw new MetadataValidationError('Decorator name is required.');
        return decorator.name;
      });
      const decoratorExecutables = names.filter(
        (name) => lifecycleNames[name] !== undefined || invocationNames[name] !== undefined,
      );
      if (decoratorExecutables.length > 1)
        throw new MetadataValidationError(
          `Method ${rawMethod.name} has conflicting executable decorators.`,
        );
      const emittedLifecycle = rawMethod.lifecycle;
      const emittedInvocation = rawMethod.invocation;
      if (
        (emittedLifecycle !== undefined &&
          (typeof emittedLifecycle !== 'string' ||
            !['load', 'enable', 'ready', 'drain', 'disable', 'unload'].includes(
              emittedLifecycle,
            ))) ||
        (emittedInvocation !== undefined &&
          (typeof emittedInvocation !== 'string' ||
            !['event', 'command', 'task', 'packet'].includes(emittedInvocation)))
      )
        throw new MetadataValidationError(`Method ${rawMethod.name} has an invalid runtime stage.`);
      if (emittedLifecycle !== undefined && emittedInvocation !== undefined)
        throw new MetadataValidationError(
          `Method ${rawMethod.name} has conflicting compiler runtime metadata.`,
        );
      const decoratorName = decoratorExecutables[0];
      const decoratorLifecycle =
        decoratorName === undefined ? undefined : lifecycleNames[decoratorName];
      const decoratorInvocation =
        decoratorName === undefined ? undefined : invocationNames[decoratorName];
      const stage = (emittedLifecycle ?? decoratorLifecycle) as LifecycleStage | undefined;
      const declaredService = serviceMethods.has(`${rawComponent.id}\u0000${rawMethod.name}`);
      const kind = (emittedInvocation ??
        decoratorInvocation ??
        (declaredService ? 'service' : undefined)) as InvocationKind | undefined;
      if (stage === undefined && kind === undefined) continue;
      if (!resolver.isExecutableMethod(rawComponent.id, rawMethod.name))
        throw new MetadataValidationError(
          `Method ${rawComponent.id}.${rawMethod.name} is not in the compiler executable allowlist.`,
        );
      const parameters = rawMethod.parameters.map((item) => runtimeParameter(item, resolver));
      if (stage !== undefined) {
        if (decoratorLifecycle !== undefined && decoratorLifecycle !== stage)
          throw new MetadataValidationError(
            `Method ${rawMethod.name} lifecycle stage disagrees with its decorator.`,
          );
        lifecycle.push({
          componentId: rawComponent.id,
          target,
          method: rawMethod.name,
          stage,
          parameters,
          ...(resolver.resolveRequester === undefined
            ? {}
            : { requester: resolver.resolveRequester(rawComponent.id) }),
        });
      } else {
        if (kind !== undefined) {
          if (decoratorInvocation !== undefined && decoratorInvocation !== kind)
            throw new MetadataValidationError(
              `Method ${rawMethod.name} invocation kind disagrees with its decorator.`,
            );
          invocations.push({
            componentId: rawComponent.id,
            kind,
            target,
            method: rawMethod.name,
            parameters,
            ...(kind === 'service' ? { scope: 'task' as const } : {}),
            ...(resolver.resolveRequester === undefined
              ? {}
              : { requester: resolver.resolveRequester(rawComponent.id) }),
          });
        }
      }
    }
  }
  return { lifecycle: ordered(lifecycle), invocations };
}

export function isCompilerManifest(value: unknown): value is CompilerManifest {
  try {
    return compilerManifest(value);
  } catch {
    return false;
  }
}

function sourceLocation(value: unknown): boolean {
  if (!record(value)) return false;
  return (
    typeof value.file === 'string' && positiveInteger(value.line) && positiveInteger(value.column)
  );
}
function canonicalValue(value: unknown): boolean {
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'boolean' ||
    (typeof value === 'number' && Number.isFinite(value))
  )
    return true;
  if (Array.isArray(value)) return value.every(canonicalValue);
  return record(value) && Object.values(value).every(canonicalValue);
}
function tokenMetadata(value: unknown): boolean {
  if (!record(value)) return false;
  if (value.kind === 'class')
    return typeof value.name === 'string' && typeof value.module === 'string';
  if (value.kind !== 'token') return false;
  return (
    ('value' in value && canonicalValue(value.value)) ||
    (typeof value.name === 'string' && typeof value.module === 'string')
  );
}
function dependencyMetadata(value: unknown, kind: 'parameter' | 'property'): boolean {
  if (!record(value) || !tokenMetadata(value.token) || !sourceLocation(value.location))
    return false;
  if (kind === 'parameter' ? !nonNegativeInteger(value.index) : typeof value.property !== 'string')
    return false;
  return (
    optionalBoolean(value.optional) &&
    optionalBoolean(value.all) &&
    optionalBoolean(value.lazy) &&
    optionalString(value.name) &&
    optionalString(value.qualifier)
  );
}
function decoratorMetadata(value: unknown): boolean {
  return (
    record(value) &&
    typeof value.name === 'string' &&
    Array.isArray(value.arguments) &&
    value.arguments.every(canonicalValue) &&
    sourceLocation(value.location)
  );
}
function methodMetadata(value: unknown): boolean {
  return (
    record(value) &&
    typeof value.name === 'string' &&
    optionalEnum(value.lifecycle, ['load', 'enable', 'ready', 'drain', 'disable', 'unload']) &&
    optionalEnum(value.invocation, ['event', 'command', 'task', 'packet']) &&
    Array.isArray(value.decorators) &&
    value.decorators.every(decoratorMetadata) &&
    Array.isArray(value.parameters) &&
    value.parameters.every((item) => dependencyMetadata(item, 'parameter')) &&
    sourceLocation(value.location)
  );
}
function componentMetadata(value: unknown): boolean {
  return (
    record(value) &&
    typeof value.id === 'string' &&
    ['plugin', 'module', 'component', 'service', 'event-listener', 'command', 'task'].includes(
      String(value.kind),
    ) &&
    typeof value.name === 'string' &&
    typeof value.file === 'string' &&
    ['common', 'paper', 'velocity'].includes(String(value.platform)) &&
    Array.isArray(value.decorators) &&
    value.decorators.every(decoratorMetadata) &&
    Array.isArray(value.constructor) &&
    value.constructor.every((item) => dependencyMetadata(item, 'parameter')) &&
    Array.isArray(value.properties) &&
    value.properties.every((item) => dependencyMetadata(item, 'property')) &&
    Array.isArray(value.methods) &&
    value.methods.every(methodMetadata) &&
    sourceLocation(value.location)
  );
}
function moduleMetadata(value: unknown): boolean {
  return (
    record(value) &&
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    Array.isArray(value.imports) &&
    value.imports.every(
      (item) => record(item) && typeof item.id === 'string' && typeof item.forwardRef === 'boolean',
    ) &&
    Array.isArray(value.declarations) &&
    value.declarations.every((item) => typeof item === 'string') &&
    Array.isArray(value.exports) &&
    value.exports.every((item) => typeof item === 'string') &&
    typeof value.global === 'boolean' &&
    sourceLocation(value.location)
  );
}
function entrypointMetadata(value: unknown): boolean {
  return record(value) && typeof value.source === 'string' && typeof value.output === 'string';
}
function permissionsMetadata(value: unknown): boolean {
  if (!record(value)) return false;
  const keys = new Set([
    'builtins',
    'filesystem',
    'network',
    'workers',
    'childProcess',
    'nativeAddons',
    'nms',
    'packets',
  ]);
  if (Object.keys(value).some((key) => !keys.has(key))) return false;
  const builtins = value.builtins;
  if (
    builtins !== undefined &&
    (!Array.isArray(builtins) ||
      builtins.some((item) => typeof item !== 'string' || !item.startsWith('node:')) ||
      new Set(builtins).size !== builtins.length)
  )
    return false;
  const filesystem = value.filesystem;
  if (
    filesystem !== undefined &&
    (!record(filesystem) ||
      !Array.isArray(filesystem.read) ||
      !filesystem.read.every((item) => typeof item === 'string') ||
      !Array.isArray(filesystem.write) ||
      !filesystem.write.every((item) => typeof item === 'string'))
  )
    return false;
  return [...keys]
    .filter((key) => key !== 'builtins' && key !== 'filesystem')
    .every((key) => value[key] === undefined || value[key] === true);
}
function compilerManifest(value: unknown): value is CompilerManifest {
  if (!record(value) || !record(value.entrypoints)) return false;
  return (
    value.formatVersion === COMPILER_METADATA_VERSION &&
    typeof value.compilerVersion === 'string' &&
    typeof value.packageName === 'string' &&
    Array.isArray(value.components) &&
    value.components.every(componentMetadata) &&
    Array.isArray(value.modules) &&
    value.modules.every(moduleMetadata) &&
    (value.permissions === undefined || permissionsMetadata(value.permissions)) &&
    (value.communication === undefined || communicationMetadata(value.communication)) &&
    (value.entrypoints.paper === undefined || entrypointMetadata(value.entrypoints.paper)) &&
    (value.entrypoints.velocity === undefined || entrypointMetadata(value.entrypoints.velocity))
  );
}
function communicationMetadata(value: unknown): boolean {
  if (
    !record(value) ||
    !Array.isArray(value.services) ||
    !Array.isArray(value.events) ||
    !Array.isArray(value.consumers)
  )
    return false;
  return (
    value.services.every(
      (item) =>
        record(item) &&
        typeof item.id === 'string' &&
        typeof item.version === 'string' &&
        typeof item.componentId === 'string' &&
        Array.isArray(item.methods) &&
        item.methods.every((method) => typeof method === 'string'),
    ) &&
    value.events.every(
      (item) => record(item) && typeof item.id === 'string' && typeof item.version === 'string',
    ) &&
    value.consumers.every(
      (item) =>
        record(item) &&
        typeof item.id === 'string' &&
        typeof item.versionRange === 'string' &&
        (item.dependentReload === 'keep-running' || item.dependentReload === 'reload'),
    )
  );
}
function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function nonNegativeInteger(value: unknown): boolean {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;
}
function positiveInteger(value: unknown): boolean {
  return typeof value === 'number' && Number.isSafeInteger(value) && value > 0;
}
function optionalBoolean(value: unknown): boolean {
  return value === undefined || typeof value === 'boolean';
}
function optionalString(value: unknown): boolean {
  return value === undefined || typeof value === 'string';
}
function optionalEnum(value: unknown, values: readonly string[]): boolean {
  return value === undefined || (typeof value === 'string' && values.includes(value));
}
