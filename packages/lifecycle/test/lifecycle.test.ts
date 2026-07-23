import { Container, Scope, createToken } from '@shamoo/di';
import {
  DrainTimeoutError,
  InvocationRuntime,
  InvocationTimeoutError,
  LifecycleError,
  LifecycleExecutor,
  LifecycleOrderError,
  LifecycleTimeoutError,
  MetadataValidationError,
  isCompilerManifest,
  loadRuntimeMetadata,
  type InvocationRejectedError,
  type LifecycleAggregateError,
  type LifecycleMethod,
} from '@shamoo/lifecycle';
import { describe, expect, it, vi } from 'vitest';

const location = { file: 'plugin.ts', line: 1, column: 1 };

describe('LifecycleExecutor', () => {
  it('initializes eager providers once when load execution is repeated', async () => {
    const initialize = vi.fn();
    class EagerProvider {
      public initialize(): void {
        initialize();
      }
    }
    const container = await Container.create({
      providers: [
        {
          provide: EagerProvider,
          useClass: EagerProvider,
          eager: true,
          metadata: { lifecycle: { initialize: 'initialize' } },
        },
      ],
    });
    const executor = new LifecycleExecutor(container, []);
    await executor.execute('load');
    await executor.execute('load');
    expect(initialize).toHaveBeenCalledOnce();
  });

  it('runs every stage deterministically, resolves method DI, awaits async work, and cleans up in reverse', async () => {
    const calls: string[] = [];
    const token = createToken<string>('method value');
    const first = {
      load(value: string) {
        calls.push(`first:load:${value}`);
      },
      enable() {
        return Promise.resolve().then(() => calls.push('first:enable'));
      },
      ready() {
        calls.push('first:ready');
      },
      drain() {
        calls.push('first:drain');
      },
      disable() {
        calls.push('first:disable');
      },
      unload() {
        calls.push('first:unload');
      },
    };
    const second = {
      load() {
        calls.push('second:load');
      },
      disable() {
        calls.push('second:disable');
      },
      unload() {
        calls.push('second:unload');
      },
    };
    const methods: LifecycleMethod[] = [
      { componentId: 'b', target: second, method: 'load', stage: 'load', order: 2 },
      {
        componentId: 'a',
        target: first,
        method: 'load',
        stage: 'load',
        order: 1,
        parameters: [{ index: 0, dependency: { token } }],
      },
      { componentId: 'a', target: first, method: 'enable', stage: 'enable' },
      { componentId: 'a', target: first, method: 'ready', stage: 'ready' },
      { componentId: 'a', target: first, method: 'drain', stage: 'drain' },
      { componentId: 'a', target: first, method: 'disable', stage: 'disable', order: 1 },
      { componentId: 'b', target: second, method: 'disable', stage: 'disable', order: 2 },
      { componentId: 'a', target: first, method: 'unload', stage: 'unload', order: 1 },
      { componentId: 'b', target: second, method: 'unload', stage: 'unload', order: 2 },
    ];
    const executor = new LifecycleExecutor(
      new Container({ providers: [{ provide: token, useValue: 'injected', eager: true }] }),
      methods,
    );
    for (const stage of ['load', 'enable', 'ready', 'drain', 'disable', 'unload'] as const)
      await executor.execute(stage);
    await executor.execute('load');
    expect(calls).toEqual([
      'first:load:injected',
      'second:load',
      'first:enable',
      'first:ready',
      'first:drain',
      'second:disable',
      'first:disable',
      'second:unload',
      'first:unload',
    ]);
  });

  it('wraps startup errors, aggregates all cleanup errors, and aborts timed out hooks', async () => {
    const broken = {
      fail: () => {
        throw new Error('broken');
      },
    };
    const brokenExecutor = new LifecycleExecutor(new Container(), [
      { componentId: 'broken', target: { start: () => undefined }, method: 'start', stage: 'load' },
      { componentId: 'broken', target: broken, method: 'fail', stage: 'enable' },
    ]);
    await brokenExecutor.execute('load');
    await expect(brokenExecutor.execute('enable')).rejects.toBeInstanceOf(LifecycleError);

    const cleanup = {
      fail: vi.fn(() => {
        throw new Error('cleanup');
      }),
    };
    const executor = new LifecycleExecutor(new Container(), [
      { componentId: 'a', target: { start: () => undefined }, method: 'start', stage: 'load' },
      { componentId: 'b', target: { start: () => undefined }, method: 'start', stage: 'load' },
      { componentId: 'a', target: cleanup, method: 'fail', stage: 'disable' },
      { componentId: 'b', target: cleanup, method: 'fail', stage: 'disable' },
    ]);
    await executor.execute('load');
    await executor.execute('enable');
    await executor.execute('ready');
    await executor.execute('drain');
    const aggregate = await executor.execute('disable').catch((error: unknown) => error);
    expect(aggregate).toBeInstanceOf(AggregateError);
    expect((aggregate as LifecycleAggregateError).errors).toHaveLength(2);
    expect(cleanup.fail).toHaveBeenCalledTimes(2);

    let signal: AbortSignal | undefined;
    const slow = {
      run: (context: { signal: AbortSignal }) => {
        signal = context.signal;
        return new Promise(() => undefined);
      },
    };
    const timeoutExecutor = new LifecycleExecutor(
      new Container(),
      [
        {
          componentId: 'slow',
          target: slow,
          method: 'run',
          stage: 'ready',
          parameters: [{ index: 0, contextKey: 'lifecycle' }],
        },
      ],
      { timeout: 1 },
    );
    await timeoutExecutor.execute('load');
    await timeoutExecutor.execute('enable');
    const timeout = await timeoutExecutor.execute('ready').catch((error: unknown) => error);
    expect(timeout).toBeInstanceOf(LifecycleError);
    expect((timeout as LifecycleError).cause).toBeInstanceOf(LifecycleTimeoutError);
    expect(signal?.aborted).toBe(true);
  });

  it('tracks only reached components for partial cleanup', async () => {
    const calls: string[] = [];
    const target = {
      first: () => calls.push('first:load'),
      fail: () => {
        throw new Error('load failed');
      },
      firstDisable: () => calls.push('first:disable'),
      secondDisable: () => calls.push('second:disable'),
      firstUnload: () => calls.push('first:unload'),
      secondUnload: () => calls.push('second:unload'),
    };
    const executor = new LifecycleExecutor(new Container(), [
      { componentId: 'first', target, method: 'first', stage: 'load' },
      { componentId: 'second', target, method: 'fail', stage: 'load' },
      { componentId: 'first', target, method: 'firstDisable', stage: 'disable' },
      { componentId: 'second', target, method: 'secondDisable', stage: 'disable' },
      { componentId: 'first', target, method: 'firstUnload', stage: 'unload' },
      { componentId: 'second', target, method: 'secondUnload', stage: 'unload' },
    ]);

    await expect(executor.execute('load')).rejects.toBeInstanceOf(LifecycleError);
    await executor.execute('enable');
    await executor.execute('ready');
    await executor.execute('drain');
    await executor.execute('disable');
    await executor.execute('unload');
    expect(calls).toEqual(['first:load', 'first:disable', 'first:unload']);
  });

  it('serializes concurrent stages and enforces ordered idempotent execution', async () => {
    const calls: string[] = [];
    let release: (() => void) | undefined;
    const target = {
      load: () =>
        new Promise<void>((resolve) => {
          release = () => {
            calls.push('load');
            resolve();
          };
        }),
      enable: () => calls.push('enable'),
    };
    const executor = new LifecycleExecutor(new Container(), [
      { componentId: 'component', target, method: 'load', stage: 'load' },
      { componentId: 'component', target, method: 'enable', stage: 'enable' },
    ]);
    await expect(executor.execute('enable')).rejects.toBeInstanceOf(LifecycleOrderError);
    const load = executor.execute('load');
    const repeated = executor.execute('load');
    const enable = executor.execute('enable');
    expect(calls).toEqual([]);
    await vi.waitFor(() => {
      expect(release).toBeTypeOf('function');
    });
    release?.();
    await Promise.all([load, repeated, enable]);
    expect(calls).toEqual(['load', 'enable']);
  });

  it('times lifecycle method DI and keeps the next stage serialized until DI settles', async () => {
    let release: (() => void) | undefined;
    const dependency = createToken<string>('slow lifecycle dependency');
    const container = new Container({
      providers: [
        {
          provide: dependency,
          useAsyncFactory: () =>
            new Promise<string>((resolve) => {
              release = () => {
                resolve('ready');
              };
            }),
        },
      ],
    });
    const ready = vi.fn();
    const executor = new LifecycleExecutor(
      container,
      [
        {
          componentId: 'component',
          target: { ready },
          method: 'ready',
          stage: 'ready',
          parameters: [{ index: 0, dependency: { token: dependency } }],
        },
      ],
      { timeout: 1 },
    );
    await executor.execute('load');
    await executor.execute('enable');
    const timeout = await executor.execute('ready').catch((error: unknown) => error);
    expect(timeout).toBeInstanceOf(LifecycleError);
    expect((timeout as LifecycleError).cause).toBeInstanceOf(LifecycleTimeoutError);
    const drain = executor.execute('drain');
    await Promise.resolve();
    let drained = false;
    void drain.then(() => {
      drained = true;
    });
    expect(drained).toBe(false);
    release?.();
    await drain;
    expect(ready).toHaveBeenCalledWith('ready');
  });
});

describe('InvocationRuntime', () => {
  it('runs guards, pipes, validation, interceptors, filters, transformations, and context injection', async () => {
    const order: string[] = [];
    const target = {
      execute: (value: string, sender: unknown) => {
        order.push(`handler:${value}:${String(sender)}`);
        return value;
      },
    };
    const runtime = new InvocationRuntime(new Container());
    const result = await runtime.invoke(
      {
        kind: 'command',
        target,
        method: 'execute',
        parameters: [
          {
            index: 0,
            pipes: [
              {
                transform: (value) => {
                  order.push('pipe');
                  return String(value).toUpperCase();
                },
              },
            ],
            validators: [
              {
                validate: () => {
                  order.push('validate');
                  return [];
                },
              },
            ],
          },
          { index: 1, contextKey: 'sender' },
        ],
        guards: [
          {
            canActivate: (context) => {
              order.push(`guard:${context.correlationId}`);
              return true;
            },
          },
        ],
        interceptors: [
          {
            intercept: async (context) => {
              order.push('before');
              const value = await context.proceed();
              order.push('after');
              return `${String(value)}!`;
            },
          },
        ],
        transformResult: (value) => `[${String(value)}]`,
      },
      { values: ['hello'], context: { sender: 'console' }, correlationId: 'corr' },
    );
    expect(result).toBe('[HELLO!]');
    expect(order).toEqual([
      'pipe',
      'validate',
      'guard:corr',
      'before',
      'handler:HELLO:console',
      'after',
    ]);

    await expect(
      runtime.invoke({
        kind: 'event',
        target,
        method: 'execute',
        guards: [{ canActivate: () => false }],
        filters: [{ catch: (error) => `filtered:${(error as Error).name}` }],
      }),
    ).resolves.toBe('filtered:GuardRejectedError');
  });

  it('creates the applicable scope and disposes it exactly once on success and failure', async () => {
    const dispose = vi.fn();
    const scoped = createToken<object>('scoped');
    const container = new Container({
      providers: [
        {
          provide: scoped,
          scope: Scope.EVENT,
          useFactory: () => ({ [Symbol.dispose]: dispose }),
        },
      ],
    });
    const target = {
      success: (value: unknown) => value,
      fail: () => {
        throw new Error('fail');
      },
    };
    const runtime = new InvocationRuntime(container);
    await runtime.invoke({
      kind: 'event',
      target,
      method: 'success',
      parameters: [{ index: 0, dependency: { token: scoped } }],
    });
    await expect(
      runtime.invoke({
        kind: 'event',
        target,
        method: 'fail',
        parameters: [{ index: 0, dependency: { token: scoped } }],
      }),
    ).rejects.toThrow('fail');
    expect(dispose).toHaveBeenCalledTimes(2);
    await expect(
      runtime.invoke({
        kind: 'command',
        target,
        method: 'success',
        parameters: [{ index: 0, dependency: { token: scoped } }],
      }),
    ).rejects.toThrow('requires an active Event scope');
    await expect(runtime.invoke({ kind: 'service', target, method: 'success' })).rejects.toThrow(
      'require an event, command, or task scope',
    );
    await expect(
      runtime.invoke({ kind: 'service', scope: 'task', target, method: 'success' }),
    ).resolves.toBeUndefined();
  });

  it('transforms errors through filters, reports validation, and enforces interceptor continuation', async () => {
    const target = {
      fail() {
        throw new Error('handler');
      },
      value(value: unknown) {
        return value;
      },
    };
    const runtime = new InvocationRuntime(new Container());
    await expect(
      runtime.invoke({
        kind: 'event',
        target,
        method: 'fail',
        transformError: () => new Error('transformed'),
        filters: [
          {
            catch: () => {
              throw new Error('next');
            },
          },
          { catch: (error) => (error as Error).message },
        ],
      }),
    ).resolves.toBe('next');
    await expect(
      runtime.invoke(
        {
          kind: 'event',
          target,
          method: 'value',
          parameters: [
            {
              index: 0,
              validators: [{ validate: () => [{ path: ['value'], message: 'invalid' }] }],
            },
          ],
        },
        { values: ['bad'] },
      ),
    ).rejects.toMatchObject({ code: 'SHAMOO_VALIDATION' });
    await expect(
      runtime.invoke({
        kind: 'task',
        target,
        method: 'value',
        interceptors: [
          {
            intercept: async (context) => {
              await context.proceed();
              return context.proceed();
            },
          },
        ],
      }),
    ).rejects.toThrow('more than once');
  });

  it('tracks concurrency, rejects backpressure and draining, waits for active calls, and times out', async () => {
    let release: (() => void) | undefined;
    const target = {
      wait: () =>
        new Promise<void>((resolve) => {
          release = resolve;
        }),
    };
    const runtime = new InvocationRuntime(new Container(), { maxActive: 1 });
    const active = runtime.invoke({ kind: 'task', target, method: 'wait' });
    await vi.waitFor(() => {
      expect(runtime.activeCount).toBe(1);
    });
    await expect(runtime.invoke({ kind: 'task', target, method: 'wait' })).rejects.toMatchObject({
      reason: 'backpressure',
    } satisfies Partial<InvocationRejectedError>);
    const draining = runtime.drain(100);
    await expect(runtime.invoke({ kind: 'task', target, method: 'wait' })).rejects.toMatchObject({
      reason: 'draining',
    } satisfies Partial<InvocationRejectedError>);
    release?.();
    await Promise.all([active, draining]);
    expect(runtime.activeCount).toBe(0);

    const blocked = new InvocationRuntime(new Container());
    void blocked.invoke({ kind: 'task', target, method: 'wait' }).catch(() => undefined);
    await vi.waitFor(() => {
      expect(blocked.activeCount).toBe(1);
    });
    await expect(blocked.drain(1)).rejects.toBeInstanceOf(DrainTimeoutError);
    release?.();

    const timeout = new InvocationRuntime(new Container(), { timeout: 1 });
    await expect(timeout.invoke({ kind: 'task', target, method: 'wait' })).rejects.toBeInstanceOf(
      InvocationTimeoutError,
    );
    expect(timeout.activeCount).toBe(1);
    release?.();
    await vi.waitFor(() => {
      expect(timeout.activeCount).toBe(0);
    });
  });

  it('times parameter DI while retaining the scope and filters DI, pipe, and validation failures', async () => {
    let release: (() => void) | undefined;
    const dispose = vi.fn();
    const slow = createToken<object>('slow invocation dependency');
    const container = new Container({
      providers: [
        {
          provide: slow,
          scope: Scope.TASK,
          useAsyncFactory: () =>
            new Promise<object>((resolve) => {
              release = () => {
                resolve({ [Symbol.dispose]: dispose });
              };
            }),
        },
      ],
    });
    const runtime = new InvocationRuntime(container, { timeout: 1 });
    await expect(
      runtime.invoke({
        kind: 'task',
        target: { run: () => undefined },
        method: 'run',
        parameters: [{ index: 0, dependency: { token: slow } }],
      }),
    ).rejects.toBeInstanceOf(InvocationTimeoutError);
    expect(runtime.activeCount).toBe(1);
    expect(dispose).not.toHaveBeenCalled();
    release?.();
    await vi.waitFor(() => {
      expect(runtime.activeCount).toBe(0);
    });
    expect(dispose).toHaveBeenCalledOnce();

    const cooperative = new InvocationRuntime(new Container(), { timeout: 1 });
    await expect(
      cooperative.invoke({
        kind: 'task',
        target: {
          run: (signal: AbortSignal) =>
            new Promise<void>((_resolve, reject) => {
              signal.addEventListener(
                'abort',
                () => {
                  reject(new Error('aborted', { cause: signal.reason }));
                },
                { once: true },
              );
            }),
        },
        method: 'run',
        parameters: [{ index: 0, contextKey: 'abortSignal' }],
      }),
    ).rejects.toBeInstanceOf(InvocationTimeoutError);
    await vi.waitFor(() => {
      expect(cooperative.activeCount).toBe(0);
    });

    const filtered = new InvocationRuntime(new Container());
    await expect(
      filtered.invoke({
        kind: 'event',
        target: { run: () => undefined },
        method: 'run',
        parameters: [{ index: 0, dependency: { token: 'missing' } }],
        filters: [{ catch: (error) => (error as { code: string }).code }],
      }),
    ).resolves.toBe('PROVIDER_MISSING');
    await expect(
      filtered.invoke(
        {
          kind: 'event',
          target: { run: () => undefined },
          method: 'run',
          parameters: [
            {
              index: 0,
              pipes: [{ transform: () => Promise.reject(new Error('pipe')) }],
            },
          ],
          filters: [{ catch: (error) => (error as Error).message }],
        },
        { values: ['value'] },
      ),
    ).resolves.toBe('pipe');
    await expect(
      filtered.invoke(
        {
          kind: 'event',
          target: { run: () => undefined },
          method: 'run',
          parameters: [
            { index: 0, validators: [{ validate: () => [{ path: [], message: 'invalid' }] }] },
          ],
          filters: [{ catch: (error) => (error as { code: string }).code }],
        },
        { values: ['value'] },
      ),
    ).resolves.toBe('SHAMOO_VALIDATION');
  });

  it('validates runtime limits and permanently rejects work after disposal', async () => {
    expect(() => new InvocationRuntime(new Container(), { maxActive: 0 })).toThrow(RangeError);
    const runtime = new InvocationRuntime(new Container());
    await runtime.dispose();
    await runtime.dispose();
    await expect(
      runtime.invoke({ kind: 'task', target: {}, method: 'missing' }),
    ).rejects.toMatchObject({
      reason: 'disposed',
    });
    await expect(runtime.drain()).rejects.toMatchObject({ reason: 'disposed' });
  });

  it('releases active accounting when scoped disposal fails', async () => {
    const scoped = createToken<object>('failing disposal');
    const container = new Container({
      providers: [
        {
          provide: scoped,
          scope: Scope.TASK,
          useFactory: () => ({
            [Symbol.dispose]() {
              throw new Error('dispose failed');
            },
          }),
        },
      ],
    });
    const runtime = new InvocationRuntime(container);
    await expect(
      runtime.invoke({
        kind: 'task',
        target: { run: () => undefined },
        method: 'run',
        parameters: [{ index: 0, dependency: { token: scoped } }],
      }),
    ).rejects.toThrow('dispose failed');
    expect(runtime.activeCount).toBe(0);
    await runtime.drain();
  });
});

describe('compiler metadata adapter', () => {
  it('loads only executable whitelisted fields and maps lifecycle, scope, context, and DI parameters', () => {
    const target = { load: vi.fn(), command: vi.fn() };
    const manifest = {
      formatVersion: 2,
      compilerVersion: 'test',
      packageName: '@test/plugin',
      modules: [],
      entrypoints: {},
      components: [
        {
          id: 'plugin.ts#Plugin',
          kind: 'plugin',
          name: 'Plugin',
          file: 'plugin.ts',
          platform: 'common',
          decorators: [],
          constructor: [],
          properties: [],
          methods: [
            {
              name: 'load',
              decorators: [
                {
                  name: 'OnLoad',
                  arguments: [],
                  location,
                  arbitrary: () => {
                    throw new Error('must not run');
                  },
                },
              ],
              parameters: [{ index: 0, token: { kind: 'token', value: 'dependency' }, location }],
              location,
            },
            {
              name: 'command',
              decorators: [{ name: 'Command', arguments: [], location }],
              parameters: [
                {
                  index: 0,
                  token: { kind: 'token', value: { binding: 'Sender', value: 'value' } },
                  location,
                },
              ],
              location,
            },
          ],
          location,
        },
      ],
    };
    const loaded = loadRuntimeMetadata(manifest, {
      resolveComponent: () => target,
      resolveToken: (token) => ('value' in token ? JSON.stringify(token.value) : token.name),
      isExecutableMethod: (_component, method) => method === 'load' || method === 'command',
    });
    expect(loaded.lifecycle).toMatchObject([{ stage: 'load', method: 'load' }]);
    expect(loaded.invocations).toMatchObject([
      { kind: 'command', method: 'command', parameters: [{ contextKey: 'sender' }] },
    ]);
    expect(isCompilerManifest(manifest)).toBe(true);
    expect(isCompilerManifest(null)).toBe(false);

    const substituted = {
      ...manifest,
      components: manifest.components.map((component) => ({
        ...component,
        methods: component.methods.map((method, index) =>
          index === 0 ? { ...method, name: 'toString' } : method,
        ),
      })),
    };
    expect(() =>
      loadRuntimeMetadata(substituted, {
        resolveComponent: () => target,
        resolveToken: () => 'token',
        isExecutableMethod: () => false,
      }),
    ).toThrow('compiler executable allowlist');
  });

  it.each([
    {},
    { formatVersion: 1, components: [], modules: [], entrypoints: {} },
    { formatVersion: 2, components: [{}], modules: [], entrypoints: {} },
    {
      formatVersion: 2,
      components: [
        {
          id: 'x',
          methods: [
            { name: 'x', decorators: [{ name: 'OnLoad' }, { name: 'Command' }], parameters: [] },
          ],
        },
      ],
      modules: [],
      entrypoints: {},
    },
  ])('rejects malformed or incompatible metadata %#', (manifest) => {
    expect(() =>
      loadRuntimeMetadata(manifest, {
        resolveComponent: () => ({}),
        resolveToken: () => 'token',
        isExecutableMethod: () => true,
      }),
    ).toThrow(MetadataValidationError);
  });

  it('rejects deep schema mismatches in the manifest type guard', () => {
    const invalid = {
      formatVersion: 2,
      compilerVersion: 'test',
      packageName: 'plugin',
      components: [],
      modules: [
        {
          id: 'module',
          name: 'Module',
          imports: [{ id: 'other', forwardRef: 'false' }],
          declarations: [],
          exports: [],
          global: false,
          location,
        },
      ],
      entrypoints: {},
    };
    expect(isCompilerManifest(invalid)).toBe(false);
  });
});
