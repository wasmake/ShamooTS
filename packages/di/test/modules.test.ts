import {
  Container,
  InvalidExportError,
  InvalidModuleError,
  ModuleCycleError,
  ProviderMissingError,
  createToken,
  defineAsyncModule,
  defineDynamicModule,
  defineModule,
  forwardRef,
  type ModuleDefinition,
  type ModuleImport,
} from '@shamoo/di';
import { describe, expect, it, vi } from 'vitest';

describe('module graphs', () => {
  it('enforces import/export boundaries and re-export visibility', () => {
    const hidden = createToken<string>('hidden');
    const visible = createToken<string>('visible');
    const library = defineModule({
      id: 'library',
      providers: [
        { provide: hidden, useValue: 'hidden' },
        { provide: visible, useValue: 'visible' },
      ],
      exports: [visible],
    });
    const feature = defineModule({
      id: 'feature',
      imports: [library],
      providers: [
        { provide: 'consumer', useFactory: (value) => value, inject: [{ token: visible }] },
      ],
      exports: ['consumer'],
    });
    const container = new Container({ modules: [feature] });
    expect(container.resolve('consumer')).toBe('visible');
    expect(() => container.resolve(hidden)).toThrow(ProviderMissingError);
    expect(
      () => new Container({ modules: [defineModule({ id: 'bad', exports: ['absent'] })] }),
    ).toThrow(InvalidExportError);
  });

  it('resolves providers through complete module re-export chains', () => {
    const library = defineModule({
      id: 'reexport-library',
      providers: [{ provide: 'reexported', useValue: 'visible' }],
      exports: ['reexported'],
    });
    const facade = defineModule({
      id: 'reexport-facade',
      imports: [library],
      exports: ['reexported'],
    });
    const feature = defineModule({
      id: 'reexport-feature',
      imports: [facade],
      providers: [{ provide: 'reexport-consumer', useExisting: 'reexported' }],
      exports: ['reexport-consumer'],
    });
    expect(new Container({ modules: [feature] }).resolve('reexport-consumer')).toBe('visible');
  });

  it('makes global exports available only within one plugin container', () => {
    const global = defineModule({
      id: 'global',
      global: true,
      providers: [{ provide: 'global-value', useValue: { owner: 'one' } }],
      exports: ['global-value'],
    });
    const consumer = defineModule({
      id: 'consumer',
      imports: [global],
      providers: [{ provide: 'use-global', useExisting: 'global-value' }],
      exports: ['use-global'],
    });
    const first = new Container({ modules: [consumer] });
    const second = new Container({ modules: [consumer] });
    second.override({ provide: 'global-value', useValue: { owner: 'two' } });
    expect(first.resolve<{ owner: string }>('use-global').owner).toBe('one');
    expect(second.resolve('global-value')).toEqual({ owner: 'two' });
    expect(first.resolve('global-value')).not.toBe(second.resolve('global-value'));
    expect(() => new Container().resolve('global-value')).toThrow(ProviderMissingError);
  });

  it('makes a global module re-export closure visible to unrelated modules', () => {
    const library = defineModule({
      id: 'global-library',
      providers: [
        { provide: 'global-reexport', useValue: { owner: 'first' } },
        { provide: 'library-private', useValue: 'private' },
      ],
      exports: ['global-reexport'],
    });
    const global = defineModule({
      id: 'global-facade',
      global: true,
      imports: [library],
      exports: ['global-reexport'],
    });
    const unrelated = defineModule({
      id: 'unrelated',
      providers: [
        { provide: 'global-consumer', useExisting: 'global-reexport' },
        { provide: 'private-consumer', useExisting: 'library-private' },
      ],
      exports: ['global-consumer', 'private-consumer'],
    });
    const first = new Container({ modules: [global, unrelated] });
    const second = new Container({ modules: [global, unrelated] });
    second.override({ provide: 'global-reexport', useValue: { owner: 'second' } });

    expect(first.resolve('global-consumer')).toEqual({ owner: 'first' });
    expect(second.resolve('global-consumer')).toEqual({ owner: 'second' });
    expect(() => first.resolve('private-consumer')).toThrow(ProviderMissingError);
    expect(() => new Container({ modules: [unrelated] }).resolve('global-consumer')).toThrow(
      ProviderMissingError,
    );
  });

  it('reports complete module cycles unless the edge is forwardRef', () => {
    const importsA: ModuleImport[] = [];
    const importsB: ModuleImport[] = [];
    const a: ModuleDefinition = { id: 'a', imports: importsA };
    const b: ModuleDefinition = { id: 'b', imports: importsB };
    importsA.push(b);
    importsB.push(a);
    expect(() => new Container({ modules: [a] })).toThrowError(
      new ModuleCycleError(['a', 'b', 'a']),
    );

    const forwardImports: ModuleImport[] = [];
    const forwardA: ModuleDefinition = { id: 'forward-a', imports: forwardImports };
    const forwardB: ModuleDefinition = { id: 'forward-b', imports: [forwardRef(() => forwardA)] };
    forwardImports.push(forwardB);
    expect(() => new Container({ modules: [forwardA] })).not.toThrow();
  });

  it('constructs dynamic and injected async modules deterministically', async () => {
    const factory = vi.fn((prefix: unknown) =>
      Promise.resolve(
        defineDynamicModule({
          id: 'ignored',
          providers: [{ provide: 'async-value', useValue: `${String(prefix)}value` }],
          exports: ['async-value'],
        }),
      ),
    );
    const module = defineAsyncModule({
      id: 'async-module',
      useFactory: factory,
      inject: [{ token: 'prefix' }],
    });
    const container = await Container.create({
      providers: [{ provide: 'prefix', useValue: 'the-' }],
      modules: [module],
    });
    expect(factory).toHaveBeenCalledOnce();
    expect(container.resolve('async-value')).toBe('the-value');
    expect(() => new Container({ modules: [module] })).toThrow(InvalidModuleError);
    const invalidDependency = defineAsyncModule({
      id: 'invalid-dependency',
      useFactory: () => Promise.resolve({ id: 'x' }),
      inject: [{ token: 'prefix', lazy: true }],
    });
    await expect(
      Container.create({
        providers: [{ provide: 'prefix', useValue: 'x' }],
        modules: [invalidDependency],
      }),
    ).rejects.toThrow(InvalidModuleError);
  });

  it('preserves shared module identity and recursively expands async and forward imports', async () => {
    const shared = defineModule({
      id: 'shared',
      providers: [{ provide: 'shared-value', useValue: 'shared' }],
      exports: ['shared-value'],
    });
    const left = defineModule({ id: 'left', imports: [shared], exports: ['shared-value'] });
    const right = defineModule({ id: 'right', imports: [shared], exports: ['shared-value'] });
    const nested = defineAsyncModule({
      id: 'nested',
      useFactory: () => ({ id: 'ignored-nested', imports: [shared], exports: ['shared-value'] }),
    });
    const produced = defineAsyncModule({
      id: 'produced',
      useFactory: () => ({ id: 'ignored-produced', imports: [nested], exports: ['shared-value'] }),
    });
    const forward = defineModule({
      id: 'forward-root',
      imports: [produced],
      exports: ['shared-value'],
    });
    const root = defineModule({
      id: 'diamond-root',
      imports: [left, right, forwardRef(() => forward)],
      exports: ['shared-value'],
    });
    const container = await Container.create({ modules: [root] });
    expect(container.resolve('shared-value')).toBe('shared');
  });

  it('uses one root for async module injection identity and disposal', async () => {
    const dispose = vi.fn();
    const dependency = { [Symbol.dispose]: dispose };
    let injected: unknown;
    const factory = vi.fn(() => dependency);
    const module = defineAsyncModule({
      id: 'owned-async',
      inject: [{ token: 'dependency' }],
      useFactory: (value) => {
        injected = value;
        return { id: 'ignored', providers: [{ provide: 'module-dependency', useValue: value }] };
      },
    });
    const container = await Container.create({
      providers: [{ provide: 'dependency', useFactory: factory }],
      modules: [module],
    });
    expect(injected).toBe(dependency);
    expect(container.resolve('dependency')).toBe(dependency);
    expect(factory).toHaveBeenCalledOnce();
    await container.dispose();
    expect(dispose).toHaveBeenCalledOnce();
  });

  it('validates provider conflicts only where module providers are jointly visible', () => {
    const first = defineModule({
      id: 'private-first',
      providers: [
        { provide: 'private-token', useValue: 'first', multi: true },
        {
          provide: 'first-consumer',
          useFactory: (value) => value,
          inject: [{ token: 'private-token' }],
        },
      ],
      exports: ['first-consumer'],
    });
    const second = defineModule({
      id: 'private-second',
      providers: [
        { provide: 'private-token', useValue: 'second' },
        { provide: 'second-consumer', useExisting: 'private-token' },
      ],
      exports: ['second-consumer'],
    });
    const container = new Container({ modules: [first, second] });
    expect(container.resolve('first-consumer')).toBe('first');
    expect(container.resolve('second-consumer')).toBe('second');
  });

  it('resolves method dependencies in the requesting provider module', async () => {
    class PrivateConsumer {
      public readonly privateConsumer = true;
    }
    const privateModule = defineModule({
      id: 'method-requester',
      providers: [PrivateConsumer, { provide: 'private-method-value', useValue: 'private' }],
    });
    const container = new Container({ modules: [privateModule] });

    await expect(
      container.resolveDependencyAsync({ token: 'private-method-value' }, PrivateConsumer),
    ).resolves.toBe('private');
    await expect(
      container.resolveDependencyAsync({ token: 'private-method-value' }),
    ).rejects.toThrow(ProviderMissingError);
  });

  it('validates module definitions', () => {
    expect(() => defineModule({ id: 'Bad module' })).toThrow(InvalidModuleError);
    expect(() =>
      defineAsyncModule({ id: '', useFactory: () => Promise.resolve({ id: 'x' }) }),
    ).toThrow(InvalidModuleError);
    expect(() => new Container({ modules: [{ id: 'Bad direct' }] })).toThrow(InvalidModuleError);
    expect(() => new Container({ modules: [{ id: 'duplicate' }, { id: 'duplicate' }] })).toThrow(
      InvalidModuleError,
    );
  });
});
