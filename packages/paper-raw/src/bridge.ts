import type { JAVA_TYPES, GeneratedJavaTypeMap } from './generated/bindings.generated.js';

const CALLBACK_HOOK = Symbol.for('shamoo.paper.callback');
const FRAME_CONTEXT = Symbol.for('shamoo.paper.frame-context');
const MAXIMUM_DEPTH = 32;
let callbackSequence = 0;
const fallbackFrames: string[] = [];
const handles = new Map<string, WeakRef<object>>();
const rawHandles = new WeakMap<object, HandleMarker>();
const types = new Map<string, object>();
interface FinalizedHandle {
  readonly id: string;
  readonly reference: WeakRef<object>;
}
const handleFinalizer = new FinalizationRegistry<FinalizedHandle>(({ id, reference }) => {
  if (handles.get(id) === reference) handles.delete(id);
  try {
    void Promise.resolve(host().paperJava({ operation: 'release', handle: id })).catch(
      () => undefined,
    );
  } catch {
    // Runtime disposal already releases every generation-owned handle.
  }
});

type JavaTypeName = keyof GeneratedJavaTypeMap;
type JavaDescriptor<Name extends JavaTypeName = JavaTypeName> = (typeof JAVA_TYPES)[Name];
type PaperCallback = (...arguments_: readonly unknown[]) => unknown;

interface FrameContext {
  exit<T>(action: () => T): T;
  getStore(): unknown;
  run<T>(frame: string, action: () => T): T;
}

interface HandleMarker {
  readonly $paperHandle: string;
  readonly $paperObject: string;
  readonly type: string;
  readonly $paperFrame?: string;
}

interface PaperRuntimeHost {
  registerCallback(name: string, callback: (...values: readonly unknown[]) => unknown): boolean;
  unregisterCallback(name: string): boolean;
  paperJava(request: Readonly<Record<string, unknown>>): unknown;
}

export interface PaperHandleControl {
  readonly $type: string;
  readonly $identity: string;
  $get<R = unknown>(name: string, descriptor?: string): Promise<R>;
  $set(name: string, value: unknown, descriptor?: string): Promise<void>;
  $invoke<R = unknown>(
    name: string,
    descriptor: string | undefined,
    ...arguments_: readonly unknown[]
  ): Promise<R>;
  $release(): Promise<boolean>;
}

export type PaperHandle<T extends object = object> = PaperHandleControl & {
  /** Compile-time Java type carried by this opaque asynchronous handle. */
  readonly __paperType?: T;
};

export interface PaperTypeControl<T extends object> {
  readonly $type: string;
  $new(descriptor: string | undefined, ...arguments_: readonly unknown[]): Promise<PaperHandle<T>>;
  $get<R = unknown>(name: string, descriptor?: string): Promise<R>;
  $set(name: string, value: unknown, descriptor?: string): Promise<void>;
  $invoke<R = unknown>(
    name: string,
    descriptor: string | undefined,
    ...arguments_: readonly unknown[]
  ): Promise<R>;
}

export type PaperType<Name extends JavaTypeName> = PaperTypeControl<GeneratedJavaTypeMap[Name]>;

export interface PaperJava {
  readonly plugin: Readonly<{ readonly $paper: 'plugin' }>;
  resolve<Name extends JavaTypeName>(descriptor: JavaDescriptor<Name>): PaperType<Name>;
  construct<Name extends JavaTypeName>(
    descriptor: JavaDescriptor<Name>,
    jvmDescriptor: string,
    ...arguments_: readonly unknown[]
  ): Promise<PaperHandle<GeneratedJavaTypeMap[Name]>>;
  invoke<T extends object, R>(
    target: PaperHandle<T>,
    owner: JavaDescriptor,
    name: string,
    jvmDescriptor: string,
    ...arguments_: readonly unknown[]
  ): Promise<R>;
  invokeStatic<R>(
    owner: JavaDescriptor,
    name: string,
    jvmDescriptor: string,
    ...arguments_: readonly unknown[]
  ): Promise<R>;
  describe(): Promise<Readonly<Record<string, unknown>>>;
  same(left: PaperHandle, right: PaperHandle): boolean;
}

function host(): PaperRuntimeHost {
  const value: unknown = Reflect.get(globalThis, 'host');
  if (value === null || typeof value !== 'object')
    throw new TypeError('ShamooRuntime Paper host is unavailable.');
  if (
    typeof Reflect.get(value, 'paperJava') !== 'function' ||
    typeof Reflect.get(value, 'registerCallback') !== 'function' ||
    typeof Reflect.get(value, 'unregisterCallback') !== 'function'
  )
    throw new TypeError('ShamooRuntime does not provide executable Paper bindings.');
  return value as PaperRuntimeHost;
}

function marker(value: unknown): HandleMarker | undefined {
  if (value === null || typeof value !== 'object') return undefined;
  const retained = rawHandles.get(value);
  if (retained !== undefined) return retained;
  const id: unknown = Reflect.get(value, '$paperHandle');
  const type: unknown = Reflect.get(value, 'type');
  const identity: unknown = Reflect.get(value, '$paperObject');
  const frame: unknown = Reflect.get(value, '$paperFrame');
  if (typeof id !== 'string' || typeof type !== 'string' || typeof identity !== 'string')
    return undefined;
  if (frame !== undefined && typeof frame !== 'string')
    throw new TypeError('Runtime returned an invalid Paper frame.');
  return {
    $paperHandle: id,
    $paperObject: identity,
    type,
    ...(frame === undefined ? {} : { $paperFrame: frame }),
  };
}

function currentFrame(): string | undefined {
  const context = Reflect.get(globalThis, FRAME_CONTEXT) as FrameContext | undefined;
  const frame = context?.getStore();
  return typeof frame === 'string' ? frame : fallbackFrames.at(-1);
}

function request(value: Readonly<Record<string, unknown>>): Promise<unknown> {
  const runtime = host();
  const target = marker(value.target);
  const frame = target === undefined ? currentFrame() : undefined;
  const payload = frame === undefined ? value : { ...value, frame };
  const registrations: string[] = [];
  try {
    const result = runtime.paperJava(
      marshal(payload, 0, new Set<object>(), registrations) as Readonly<Record<string, unknown>>,
    );
    return Promise.resolve(result).then(
      (resolved) => hydrate(resolved),
      (error: unknown) => {
        rollbackCallbacks(registrations, runtime);
        throw error;
      },
    );
  } catch (error) {
    rollbackCallbacks(registrations, runtime);
    return Promise.reject(error instanceof Error ? error : new Error(String(error)));
  }
}

function marshal(
  value: unknown,
  depth = 0,
  ancestors = new Set<object>(),
  registrations?: string[],
): unknown {
  if (depth > MAXIMUM_DEPTH) throw new TypeError('Paper argument nesting is too deep.');
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'boolean' ||
    (typeof value === 'number' && Number.isFinite(value))
  )
    return value;
  if (typeof value === 'bigint') return { $paperLong: value.toString() };
  if (typeof value === 'function') {
    const registered = callback(value as PaperCallback);
    registrations?.push(registered.$callback);
    return registered;
  }
  if (typeof value !== 'object')
    throw new TypeError('Paper arguments must be data, handles, or callbacks.');
  const raw = rawHandles.get(value);
  if (raw !== undefined) return raw;
  if (ancestors.has(value)) throw new TypeError('Paper arguments must not contain cycles.');
  ancestors.add(value);
  try {
    if (value instanceof Uint8Array) return value;
    if (Array.isArray(value))
      return value.map((item) => marshal(item, depth + 1, ancestors, registrations));
    if (value instanceof Map)
      return {
        $paperMap: [...value].map(([key, item]) => [
          marshal(key, depth + 1, ancestors, registrations),
          marshal(item, depth + 1, ancestors, registrations),
        ]),
      };
    const prototype: unknown = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null)
      throw new TypeError('Paper arguments must use plain objects.');
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        marshal(item, depth + 1, ancestors, registrations),
      ]),
    );
  } finally {
    ancestors.delete(value);
  }
}

function rollbackCallbacks(
  registrations: readonly string[],
  runtime: PaperRuntimeHost = host(),
): void {
  if (registrations.length === 0) return;
  for (const name of registrations)
    try {
      runtime.unregisterCallback(name);
    } catch {
      // Runtime disposal owns any callback that can no longer be unregistered directly.
    }
}

function callback(value: PaperCallback): Readonly<{ readonly $callback: string }> {
  const runtime = host();
  const name = `paper.raw.${String(++callbackSequence)}`;
  const registered = runtime.registerCallback(name, (...incoming: readonly unknown[]) => {
    const envelope = incoming.length === 1 ? incoming[0] : undefined;
    const isEnvelope =
      envelope !== null &&
      typeof envelope === 'object' &&
      Reflect.get(envelope, '$paperCallback') === true;
    const frame: unknown = isEnvelope ? Reflect.get(envelope, '$paperFrame') : undefined;
    const callbackArguments: readonly unknown[] = isEnvelope
      ? (Reflect.get(envelope, 'arguments') as readonly unknown[])
      : incoming;
    return withFrame(typeof frame === 'string' ? frame : undefined, () =>
      Promise.resolve(value(...callbackArguments.map((item) => hydrate(item)))).then((result) => {
        if (result === undefined) return null;
        const registrations: string[] = [];
        try {
          return marshal(result, 0, new Set<object>(), registrations);
        } catch (error) {
          rollbackCallbacks(registrations, runtime);
          throw error;
        }
      }),
    );
  });
  if (!registered) throw new Error(`Runtime rejected Paper callback registration: ${name}`);
  return Object.freeze({ $callback: name });
}

function withFrame<T>(frame: string | undefined, action: () => T): T | Promise<Awaited<T>> {
  if (frame === undefined) return action();
  const context = Reflect.get(globalThis, FRAME_CONTEXT) as FrameContext | undefined;
  if (context !== undefined) return context.run(frame, action);
  fallbackFrames.push(frame);
  try {
    const result = action();
    if (result instanceof Promise)
      return result.finally(() => {
        const index = fallbackFrames.lastIndexOf(frame);
        if (index >= 0) fallbackFrames.splice(index, 1);
      }) as Promise<Awaited<T>>;
    fallbackFrames.pop();
    return result;
  } catch (error) {
    fallbackFrames.pop();
    throw error;
  }
}

function hydrateHandle(value: HandleMarker): object {
  const existing = handles.get(value.$paperHandle);
  const retained = existing?.deref();
  if (retained !== undefined) return retained;
  if (existing !== undefined) handles.delete(value.$paperHandle);
  const target = Object.create(null) as Record<PropertyKey, unknown>;
  const proxy = new Proxy(target, {
    get(_raw, property) {
      if (property === 'then') return undefined;
      if (property === '$type') return value.type;
      if (property === '$identity') return value.$paperObject;
      if (property === '$release')
        return async () => {
          const released = await request({ operation: 'release', handle: value.$paperHandle });
          handles.delete(value.$paperHandle);
          handleFinalizer.unregister(proxy);
          return released === true;
        };
      if (property === '$get')
        return (name: string, descriptor?: string) =>
          request({
            operation: 'get',
            type: value.type,
            name,
            target: value,
            ...(descriptor === undefined ? {} : { descriptor }),
          });
      if (property === '$set')
        return (name: string, item: unknown, descriptor?: string) =>
          request({
            operation: 'set',
            type: value.type,
            name,
            target: value,
            value: item,
            ...(descriptor === undefined ? {} : { descriptor }),
          }).then(() => undefined);
      if (property === '$invoke')
        return (name: string, descriptor: string | undefined, ...arguments_: readonly unknown[]) =>
          request({
            operation: 'invoke',
            type: value.type,
            name,
            target: value,
            arguments: arguments_,
            ...(descriptor === undefined ? {} : { descriptor }),
          });
      if (typeof property !== 'string') return undefined;
      return (...arguments_: readonly unknown[]) =>
        request({
          operation: 'invoke',
          type: value.type,
          name: property,
          target: value,
          arguments: arguments_,
        });
    },
  });
  rawHandles.set(proxy, Object.freeze({ ...value }));
  const reference = new WeakRef(proxy);
  handles.set(value.$paperHandle, reference);
  handleFinalizer.register(proxy, { id: value.$paperHandle, reference }, proxy);
  return proxy;
}

export function hydratePaperValue(value: unknown, depth = 0): unknown {
  return hydrate(value, depth);
}

function hydrate(value: unknown, depth = 0): unknown {
  if (depth > MAXIMUM_DEPTH) throw new TypeError('Paper return value nesting is too deep.');
  const handle = marker(value);
  if (handle !== undefined) return hydrateHandle(handle);
  if (Array.isArray(value)) return Object.freeze(value.map((item) => hydrate(item, depth + 1)));
  if (value !== null && typeof value === 'object') {
    if (Reflect.get(value, '$paperLong') !== undefined)
      return BigInt(String(Reflect.get(value, '$paperLong')));
    if (Reflect.get(value, '$paperEnum') !== undefined) return Object.freeze({ ...value });
    const mapEntries: unknown = Reflect.get(value, '$paperMap');
    if (Array.isArray(mapEntries))
      return new Map(
        mapEntries.map((entry) => {
          if (!Array.isArray(entry) || entry.length !== 2)
            throw new TypeError('Runtime returned an invalid Paper map entry.');
          return [hydrate(entry[0], depth + 1), hydrate(entry[1], depth + 1)];
        }),
      );
    return Object.freeze(
      Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, hydrate(item, depth + 1)]),
      ),
    );
  }
  return value;
}

function resolve<Name extends JavaTypeName>(descriptor: JavaDescriptor<Name>): PaperType<Name> {
  const existing = types.get(descriptor.javaName);
  if (existing !== undefined) return existing as PaperType<Name>;
  const target = Object.create(null) as object;
  const proxy = new Proxy(target, {
    get(_raw, property) {
      if (property === 'then') return undefined;
      if (property === '$type') return descriptor.javaName;
      if (property === '$new')
        return (jvmDescriptor: string | undefined, ...arguments_: readonly unknown[]) =>
          request({
            operation: 'construct',
            type: descriptor.javaName,
            arguments: arguments_,
            ...(jvmDescriptor === undefined ? {} : { descriptor: jvmDescriptor }),
          });
      if (property === '$get')
        return (name: string, jvmDescriptor?: string) =>
          request({
            operation: 'get',
            type: descriptor.javaName,
            name,
            ...(jvmDescriptor === undefined ? {} : { descriptor: jvmDescriptor }),
          });
      if (property === '$set')
        return (name: string, value: unknown, jvmDescriptor?: string) =>
          request({
            operation: 'set',
            type: descriptor.javaName,
            name,
            value,
            ...(jvmDescriptor === undefined ? {} : { descriptor: jvmDescriptor }),
          }).then(() => undefined);
      if (property === '$invoke')
        return (
          name: string,
          jvmDescriptor: string | undefined,
          ...arguments_: readonly unknown[]
        ) =>
          request({
            operation: 'invoke',
            type: descriptor.javaName,
            name,
            arguments: arguments_,
            ...(jvmDescriptor === undefined ? {} : { descriptor: jvmDescriptor }),
          });
      if (typeof property !== 'string') return undefined;
      return (...arguments_: readonly unknown[]) =>
        request({
          operation: 'invoke',
          type: descriptor.javaName,
          name: property,
          arguments: arguments_,
        });
    },
  });
  types.set(descriptor.javaName, proxy);
  return proxy as PaperType<Name>;
}

function construct<Name extends JavaTypeName>(
  descriptor: JavaDescriptor<Name>,
  jvmDescriptor: string,
  ...arguments_: readonly unknown[]
): Promise<PaperHandle<GeneratedJavaTypeMap[Name]>> {
  return request({
    operation: 'construct',
    type: descriptor.javaName,
    descriptor: jvmDescriptor,
    arguments: arguments_,
  }) as Promise<PaperHandle<GeneratedJavaTypeMap[Name]>>;
}

function invoke<T extends object, R>(
  target: PaperHandle<T>,
  owner: JavaDescriptor,
  name: string,
  jvmDescriptor: string,
  ...arguments_: readonly unknown[]
): Promise<R> {
  return request({
    operation: 'invoke',
    type: owner.javaName,
    name,
    descriptor: jvmDescriptor,
    target,
    arguments: arguments_,
  }) as Promise<R>;
}

function invokeStatic<R>(
  owner: JavaDescriptor,
  name: string,
  jvmDescriptor: string,
  ...arguments_: readonly unknown[]
): Promise<R> {
  return request({
    operation: 'invoke',
    type: owner.javaName,
    name,
    descriptor: jvmDescriptor,
    arguments: arguments_,
  }) as Promise<R>;
}

function same(left: PaperHandle, right: PaperHandle): boolean {
  return left.$identity === right.$identity;
}

export const paperJava: PaperJava = Object.freeze({
  plugin: Object.freeze({ $paper: 'plugin' as const }),
  resolve,
  construct,
  invoke,
  invokeStatic,
  same,
  describe: () => request({ operation: 'describe' }) as Promise<Readonly<Record<string, unknown>>>,
});

Reflect.defineProperty(globalThis, CALLBACK_HOOK, {
  configurable: true,
  value: invokePaperCallback,
});

export function invokePaperCallback(
  callback: (...values: readonly unknown[]) => unknown,
  values: readonly unknown[],
): unknown {
  const first = marker(values[0]);
  return withFrame(first?.$paperFrame, () => callback(...values.map((item) => hydrate(item))));
}

/** Starts work without inheriting a bounded synchronous Paper callback frame. */
export function runOutsidePaperFrame<T>(action: () => T): T {
  const context = Reflect.get(globalThis, FRAME_CONTEXT) as FrameContext | undefined;
  if (context !== undefined) return context.exit(action);
  const retained = fallbackFrames.splice(0);
  let restoreSynchronously = true;
  try {
    const result = action();
    if (result instanceof Promise) {
      restoreSynchronously = false;
      return result.finally(() => {
        fallbackFrames.push(...retained);
      }) as T;
    }
    return result;
  } finally {
    if (restoreSynchronously) fallbackFrames.push(...retained);
  }
}
