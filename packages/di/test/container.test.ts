import {
  AsyncProviderError,
  CircularDependencyError,
  Container,
  DependencyResolutionError,
  DisposedScopeError,
  InvalidProviderError,
  ProviderAmbiguityError,
  ProviderConflictError,
  ProviderMissingError,
  Scope,
  ScopeViolationError,
  createToken,
  forwardRef,
} from '@shamoo/di';
import { describe, expect, expectTypeOf, it, vi } from 'vitest';

const MESSAGE = createToken<string>('message');

describe('provider resolution', () => {
  it('supports class, value, factory, existing, symbol, string and typed tokens', () => {
    const SYMBOL = Symbol('symbol');
    class Greeter {
      public suffix = '!';
      public constructor(public readonly message: string) {}
    }
    const container = new Container({
      providers: [
        { provide: MESSAGE, useValue: 'hello' },
        {
          provide: Greeter,
          useClass: Greeter,
          metadata: {
            parameters: [{ token: MESSAGE }],
            properties: [{ property: 'suffix', token: SYMBOL }],
          },
        },
        { provide: SYMBOL, useValue: '?' },
        {
          provide: 'greeting',
          useFactory: (greeter) => `${(greeter as Greeter).message}${(greeter as Greeter).suffix}`,
          inject: [{ token: Greeter }],
        },
        { provide: 'alias', useExisting: 'greeting' },
      ],
    });
    expect(container.resolve('alias')).toBe('hello?');
    expect(container.resolve(Greeter)).toBe(container.resolve(Greeter));
    expectTypeOf(container.resolve(MESSAGE)).toEqualTypeOf<string>();
  });

  it('supports optional, lazy, all, named, qualified, primary and deterministic ordering', () => {
    const container = new Container({
      providers: [
        { provide: 'item', useValue: 'second', multi: true, order: 2, name: 'b' },
        { provide: 'item', useValue: 'first', multi: true, order: 1, name: 'a', qualifier: 'blue' },
        { provide: 'choice', useValue: 'fallback' },
        { provide: 'choice', useValue: 'primary', primary: true },
        {
          provide: 'result',
          useFactory: (missing, lazy, all, named) => ({ missing, lazy, all, named }),
          inject: [
            { token: 'missing', optional: true },
            { token: 'choice', lazy: true },
            { token: 'item', all: true },
            { token: 'item', name: 'a', qualifier: 'blue' },
          ],
        },
      ],
    });
    const result = container.resolve<{
      missing?: unknown;
      lazy: () => string;
      all: string[];
      named: string;
    }>('result');
    expect(result.missing).toBeUndefined();
    expect(result.lazy()).toBe('primary');
    expect(result.all).toEqual(['first', 'second']);
    expect(result.named).toBe('first');
    expect(container.resolveAll('item')).toEqual(['first', 'second']);
  });

  it('rejects missing, ambiguous and conflicting provider declarations', () => {
    expect(() => new Container().resolve('absent')).toThrow(ProviderMissingError);
    expect(() =>
      new Container({
        providers: [
          { provide: 'x', useValue: 1 },
          { provide: 'x', useValue: 2 },
        ],
      }).resolve('x'),
    ).toThrow(ProviderAmbiguityError);
    expect(
      () =>
        new Container({
          providers: [
            { provide: 'x', useValue: 1, multi: true },
            { provide: 'x', useValue: 2 },
          ],
        }),
    ).toThrow(ProviderConflictError);
    expect(
      () =>
        new Container({
          providers: [
            { provide: 'x', useValue: 1, primary: true },
            { provide: 'x', useValue: 2, primary: true },
          ],
        }),
    ).toThrow(ProviderConflictError);
    expect(
      () => new Container({ providers: [{ provide: 'x', useValue: 1, useFactory: () => 2 }] }),
    ).toThrow(InvalidProviderError);
    expect(() => new Container({ providers: [{ provide: 'x', useValue: 1, order: 1.5 }] })).toThrow(
      InvalidProviderError,
    );
    expect(() => new Container({ providers: [{ provide: 'x', useValue: 1, name: '' }] })).toThrow(
      InvalidProviderError,
    );
    expect(
      () =>
        new Container({
          providers: [{ provide: 'x', useValue: 1, scope: 'Invalid' as Scope }],
        }),
    ).toThrow(InvalidProviderError);
    expect(() => createToken('   ')).toThrow(TypeError);
  });

  it('returns an empty collection for an optional all dependency', () => {
    const container = new Container({
      providers: [
        {
          provide: 'result',
          useFactory: (values) => values,
          inject: [{ token: 'missing', optional: true, all: true }],
        },
      ],
    });
    expect(container.resolve('result')).toEqual([]);
  });

  it('wraps dependency failures and detects complete circular paths', () => {
    const circular = new Container({
      providers: [
        { provide: 'a', useFactory: (value) => value, inject: [{ token: 'b' }] },
        { provide: 'b', useFactory: (value) => value, inject: [{ token: 'a' }] },
      ],
    });
    expect(() => circular.resolve('a')).toThrowError(new CircularDependencyError(['a', 'b', 'a']));
    const missing = new Container({
      providers: [{ provide: 'a', useFactory: (value) => value, inject: [{ token: 'b' }] }],
    });
    expect(() => missing.resolve('a')).toThrow(DependencyResolutionError);
  });

  it('supports forward references and explicit lazy circular proxies', () => {
    class A {
      public constructor(public readonly b: B) {}
      public name = 'a';
    }
    class B {
      public constructor(public readonly a: A) {}
      public read(): string {
        return this.a.name;
      }
    }
    const container = new Container({
      providers: [
        { provide: A, useClass: A, metadata: { parameters: [{ token: forwardRef(() => B) }] } },
        { provide: B, useClass: B, metadata: { parameters: [{ token: A, circular: true }] } },
      ],
    });
    expect(container.resolve(A).b.read()).toBe('a');
  });

  it('supports local overrides, introspection and resolution traces', () => {
    const root = new Container({ providers: [{ provide: MESSAGE, useValue: 'root' }] });
    const child = root.child(Scope.COMMAND, { sender: 'console' });
    child.override({ provide: MESSAGE, useValue: 'override' });
    expect(child.resolve(MESSAGE)).toBe('override');
    expect(root.resolve(MESSAGE)).toBe('root');
    expect(child.context('sender')).toBe('console');
    expect(root.inspect()).toEqual([
      expect.objectContaining({ token: 'message', kind: 'value', initialized: true }),
    ]);
    expect(root.trace(MESSAGE)).toMatchObject({
      value: 'root',
      entries: [{ action: 'resolve' }, { action: 'cache' }],
    });
    const failedTrace = root.trace('missing');
    expect(failedTrace.error).toBeInstanceOf(ProviderMissingError);
    expect(failedTrace.entries.some(({ action }) => action === 'error')).toBe(true);
  });
});

describe('async and lifecycle behavior', () => {
  it('initializes eager async factories and dynamic providers', async () => {
    const factory = vi.fn(() => Promise.resolve('ready'));
    const container = await Container.create({
      providers: [
        { provide: 'async', useAsyncFactory: factory, eager: true },
        {
          provide: 'dynamic',
          useDynamic: ({ scope }) => Promise.resolve({ provide: 'dynamic', useValue: scope }),
        },
      ],
    });
    expect(factory).toHaveBeenCalledOnce();
    expect(await container.resolveAsync('async')).toBe('ready');
    expect(await container.resolveAsync('dynamic')).toBe(Scope.PLUGIN);
    expect(() => container.resolve('async')).toThrow(AsyncProviderError);
    expect(container.inspect()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: 'asyncFactory' }),
        expect.objectContaining({ kind: 'dynamic' }),
      ]),
    );
    const invalidDynamic = new Container({
      providers: [
        {
          provide: 'expected',
          useDynamic: () => ({ provide: 'different', useValue: true }),
        },
      ],
    });
    await expect(invalidDynamic.resolveAsync('expected')).rejects.toThrow(InvalidProviderError);
  });

  it('replaces async creation promises for synchronously resolvable providers', async () => {
    const value = {};
    const container = new Container({
      providers: [{ provide: 'sync-factory', useFactory: () => value }],
    });
    expect(await container.resolveAsync('sync-factory')).toBe(value);
    expect(container.resolve('sync-factory')).toBe(value);
  });

  it('rejects promises at synchronous factory and lifecycle boundaries', () => {
    class AsyncLifecycle {
      public initialize(): Promise<void> {
        return Promise.resolve();
      }
    }
    const factory = new Container({
      providers: [{ provide: 'promise', useFactory: () => Promise.resolve('value') }],
    });
    expect(() => factory.resolve('promise')).toThrow(AsyncProviderError);
    const lifecycle = new Container({
      providers: [
        {
          provide: AsyncLifecycle,
          useClass: AsyncLifecycle,
          metadata: { lifecycle: { initialize: 'initialize' } },
        },
      ],
    });
    expect(() => lifecycle.resolve(AsyncLifecycle)).toThrow(AsyncProviderError);
    const invalidLifecycle = new Container({
      providers: [
        {
          provide: 'invalid-lifecycle',
          useClass: AsyncLifecycle,
          metadata: { lifecycle: { initialize: 'missing' } },
        },
      ],
    });
    expect(() => invalidLifecycle.resolve('invalid-lifecycle')).toThrow(InvalidProviderError);
  });

  it('runs explicit property and lifecycle metadata and disposes in reverse order', async () => {
    const calls: string[] = [];
    class Service {
      public dependency = '';
      public constructor(private readonly id: string) {}
      public async initialize(): Promise<void> {
        await Promise.resolve();
        calls.push(`init:${this.id}:${this.dependency}`);
      }
      public dispose(): void {
        calls.push(`dispose:${this.id}`);
      }
    }
    const container = new Container({
      providers: [
        { provide: 'dependency', useValue: 'set' },
        {
          provide: 'one',
          useClass: Service,
          scope: Scope.TRANSIENT,
          metadata: {
            parameters: [{ token: 'one-id' }],
            properties: [{ property: 'dependency', token: 'dependency' }],
            lifecycle: { initialize: 'initialize', dispose: 'dispose' },
          },
        },
        { provide: 'one-id', useValue: 'one' },
        {
          provide: 'two',
          useClass: Service,
          scope: Scope.TRANSIENT,
          metadata: { parameters: [{ token: 'two-id' }], lifecycle: { dispose: 'dispose' } },
        },
        { provide: 'two-id', useValue: 'two' },
      ],
    });
    await container.resolveAsync('one');
    container.resolve('two');
    await container.dispose();
    expect(calls).toEqual(['init:one:set', 'dispose:two', 'dispose:one']);
    expect(() => container.resolve('dependency')).toThrow(DisposedScopeError);
    await container.dispose();
  });

  it('uses native disposal protocols', async () => {
    const calls: string[] = [];
    const container = new Container({
      providers: [
        {
          provide: 'sync',
          useValue: { [Symbol.dispose]: () => calls.push('sync') },
          scope: Scope.TRANSIENT,
        },
        {
          provide: 'async',
          useValue: {
            [Symbol.asyncDispose]: async () => {
              await Promise.resolve();
              calls.push('async');
            },
          },
          scope: Scope.TRANSIENT,
        },
      ],
    });
    container.resolve('sync');
    container.resolve('async');
    await container.dispose();
    expect(calls).toEqual(['async', 'sync']);
  });

  it('disposes aliases and dynamic provider results once by object identity', async () => {
    const aliasDispose = vi.fn();
    const dynamicDispose = vi.fn();
    const aliased = { [Symbol.dispose]: aliasDispose };
    const dynamic = { [Symbol.dispose]: dynamicDispose };
    const container = new Container({
      providers: [
        { provide: 'target', useValue: aliased },
        { provide: 'alias', useExisting: 'target' },
        { provide: 'dynamic', useDynamic: () => ({ provide: 'dynamic', useValue: dynamic }) },
      ],
    });
    expect(container.resolve('alias')).toBe(aliased);
    expect(await container.resolveAsync('dynamic')).toBe(dynamic);
    await container.dispose();
    expect(aliasDispose).toHaveBeenCalledOnce();
    expect(dynamicDispose).toHaveBeenCalledOnce();
  });

  it('coordinates disposal with in-flight async creation', async () => {
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    const dispose = vi.fn();
    const container = new Container({
      providers: [
        {
          provide: 'resource',
          useAsyncFactory: async () => {
            await gate;
            return { [Symbol.asyncDispose]: dispose };
          },
        },
      ],
    });
    const resolution = container.resolveAsync('resource');
    const disposal = container.dispose();
    release();
    await expect(resolution).rejects.toThrow(DisposedScopeError);
    await disposal;
    expect(dispose).toHaveBeenCalledOnce();
  });

  it('owns class instances before property injection and initialization complete', async () => {
    const calls: string[] = [];
    class PropertyFailure {
      public dispose(): void {
        calls.push('dispose:property');
      }
    }
    class SyncInitializeFailure {
      public initialize(): never {
        throw new Error('sync initialization failed');
      }
      public dispose(): void {
        calls.push('dispose:sync');
      }
    }
    class AsyncInitializeFailure {
      public dependency?: object;
      public async initialize(): Promise<never> {
        await Promise.resolve();
        throw new Error('async initialization failed');
      }
      public dispose(): void {
        calls.push('dispose:async');
      }
    }

    const propertyContainer = new Container({
      providers: [
        {
          provide: PropertyFailure,
          useClass: PropertyFailure,
          metadata: {
            properties: [{ property: 'missing', token: 'missing' }],
            lifecycle: { dispose: 'dispose' },
          },
        },
      ],
    });
    expect(() => propertyContainer.resolve(PropertyFailure)).toThrow(DependencyResolutionError);
    await propertyContainer.dispose();

    const syncContainer = new Container({
      providers: [
        {
          provide: SyncInitializeFailure,
          useClass: SyncInitializeFailure,
          metadata: { lifecycle: { initialize: 'initialize', dispose: 'dispose' } },
        },
      ],
    });
    expect(() => syncContainer.resolve(SyncInitializeFailure)).toThrow(
      'sync initialization failed',
    );
    await syncContainer.dispose();

    const dependency = { [Symbol.dispose]: () => calls.push('dispose:dependency') };
    await expect(
      Container.create({
        providers: [
          { provide: 'async-dependency', useValue: dependency },
          {
            provide: AsyncInitializeFailure,
            useClass: AsyncInitializeFailure,
            eager: true,
            metadata: {
              properties: [{ property: 'dependency', token: 'async-dependency' }],
              lifecycle: { initialize: 'initialize', dispose: 'dispose' },
            },
          },
        ],
      }),
    ).rejects.toThrow('async initialization failed');

    expect(calls).toEqual([
      'dispose:property',
      'dispose:sync',
      'dispose:dependency',
      'dispose:async',
    ]);
  });
});

describe('scope behavior', () => {
  const invocationScopes = [
    Scope.EVENT,
    Scope.COMMAND,
    Scope.TASK,
    Scope.PLAYER,
    Scope.WORLD,
    Scope.REGION,
    Scope.PROXY,
  ] as const;
  it.each(invocationScopes)('caches %s providers in matching invocation scopes', (scope) => {
    const root = new Container({ providers: [{ provide: scope, useFactory: () => ({}), scope }] });
    expect(() => root.resolve(scope)).toThrow(ScopeViolationError);
    const child = root.child(scope, { key: scope });
    expect(child.resolve(scope)).toBe(child.resolve(scope));
    expect(root.child(scope).resolve(scope)).not.toBe(child.resolve(scope));
  });

  it('prevents long-lived providers from capturing narrower scopes', () => {
    const root = new Container({
      providers: [
        { provide: 'event', useValue: {}, scope: Scope.EVENT },
        {
          provide: 'plugin',
          useFactory: (event) => event,
          inject: [{ token: 'event' }],
          scope: Scope.PLUGIN,
        },
        {
          provide: 'lazy-plugin',
          useFactory: (event) => event,
          inject: [{ token: 'event', lazy: true }],
          scope: Scope.PLUGIN,
        },
      ],
    });
    expect(() => root.child(Scope.EVENT).resolve('plugin')).toThrow(ScopeViolationError);
    const lazy = root.child(Scope.EVENT).resolve<() => unknown>('lazy-plugin');
    expect(() => lazy()).toThrow(ScopeViolationError);
  });

  it('validates effective transient capture paths and rejects sibling scope domains', () => {
    const root = new Container({
      providers: [
        { provide: 'event', useValue: {}, scope: Scope.EVENT },
        {
          provide: 'transient',
          useFactory: (event) => event,
          inject: [{ token: 'event' }],
          scope: Scope.TRANSIENT,
        },
        {
          provide: 'plugin',
          useFactory: (transient) => transient,
          inject: [{ token: 'transient' }],
          scope: Scope.PLUGIN,
        },
        { provide: 'command', useValue: {}, scope: Scope.COMMAND },
        {
          provide: 'event-consumer',
          useFactory: (command) => command,
          inject: [{ token: 'command' }],
          scope: Scope.EVENT,
        },
        { provide: 'player', useValue: {}, scope: Scope.PLAYER },
        {
          provide: 'compatible-event',
          useFactory: (player) => player,
          inject: [{ token: 'player' }],
          scope: Scope.EVENT,
        },
      ],
    });
    expect(() => root.child(Scope.EVENT).resolve('plugin')).toThrow(ScopeViolationError);
    expect(() => root.child(Scope.EVENT).child(Scope.COMMAND).resolve('event-consumer')).toThrow(
      ScopeViolationError,
    );
    expect(root.child(Scope.PLAYER).child(Scope.EVENT).resolve('compatible-event')).toBeInstanceOf(
      Object,
    );
  });

  it('applies scope checks to circular dependencies without binding root caches to children', () => {
    const scoped = new Container({
      providers: [
        { provide: 'event', useValue: { name: 'event' }, scope: Scope.EVENT },
        {
          provide: 'plugin',
          useFactory: (event) => event,
          inject: [{ token: 'event', circular: true }],
        },
      ],
    });
    expect(() => scoped.child(Scope.EVENT).resolve('plugin')).toThrow(ScopeViolationError);

    const rootValue = { name: 'root' };
    const root = new Container({
      providers: [
        { provide: 'value', useValue: rootValue },
        {
          provide: 'holder',
          useFactory: (value) => value,
          inject: [{ token: 'value', circular: true }],
        },
      ],
    });
    const child = root.child(Scope.COMMAND);
    child.override({ provide: 'value', useValue: { name: 'child' } });
    const holder = child.resolve<{ name: string }>('holder');
    expect(holder.name).toBe('root');
    expect(root.resolve('holder')).toBe(holder);
  });

  it('invalidates and disposes child trees in reverse creation order', async () => {
    const calls: string[] = [];
    let command = 0;
    const resource = (name: string): Disposable => ({
      [Symbol.dispose]: () => calls.push(name),
    });
    const root = new Container({
      providers: [
        { provide: 'root-resource', useFactory: () => resource('root') },
        {
          provide: 'command-resource',
          useFactory: () => resource(`command-${String((command += 1))}`),
          scope: Scope.COMMAND,
        },
        {
          provide: 'event-resource',
          useFactory: () => resource('event'),
          scope: Scope.EVENT,
        },
      ],
    });
    const first = root.child(Scope.COMMAND);
    const nested = first.child(Scope.EVENT);
    const second = root.child(Scope.COMMAND);
    root.resolve('root-resource');
    first.resolve('command-resource');
    nested.resolve('event-resource');
    second.resolve('command-resource');

    const disposal = root.dispose();
    expect(() => first.resolve('command-resource')).toThrow(DisposedScopeError);
    expect(() => nested.context('anything')).toThrow(DisposedScopeError);
    expect(() => second.child(Scope.EVENT)).toThrow(DisposedScopeError);
    await disposal;
    await Promise.all([root.dispose(), first.dispose(), nested.dispose(), second.dispose()]);

    expect(calls).toEqual(['command-2', 'event', 'command-1', 'root']);
  });
});
