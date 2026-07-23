import {
  AsyncProviderError,
  CircularDependencyError,
  DependencyResolutionError,
  DisposedScopeError,
  InvalidExportError,
  InvalidModuleError,
  InvalidProviderError,
  ModuleCycleError,
  ProviderAmbiguityError,
  ProviderConflictError,
  ProviderMissingError,
  ScopeViolationError,
} from './errors.js';
import {
  Scope,
  forwardRef as forwardModule,
  type ClassMetadata,
  type ConcreteConstructor,
  type ContainerOptions,
  type Dependency,
  type ForwardReference,
  type ModuleDefinition,
  type ModuleImport,
  type Provider,
  type ProviderInput,
  type ProviderInspection,
  type ResolutionContext,
  type ResolutionTrace,
  type ResolutionTraceEntry,
  type ServiceIdentifier,
  type TokenReference,
} from './types.js';

interface ModuleNode {
  definition: ModuleDefinition;
  imports: ModuleNode[];
  exports: Set<ServiceIdentifier>;
}
interface RecordEntry {
  provider: Provider;
  module: ModuleNode | undefined;
  index: number;
}
interface Created {
  value: unknown;
  metadata?: ClassMetadata;
}
const moduleId = /^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)*$/;

const scopeRank: Readonly<Record<Scope, number>> = {
  [Scope.SINGLETON]: 100,
  [Scope.PLUGIN]: 90,
  [Scope.MODULE]: 80,
  [Scope.PLAYER]: 60,
  [Scope.WORLD]: 60,
  [Scope.REGION]: 60,
  [Scope.PROXY]: 60,
  [Scope.EVENT]: 40,
  [Scope.COMMAND]: 40,
  [Scope.TASK]: 40,
  [Scope.TRANSIENT]: 0,
};

function scopeOf(record: RecordEntry): Scope {
  return record.provider.scope ?? (record.module === undefined ? Scope.PLUGIN : Scope.MODULE);
}

function canCapture(captor: Scope, captured: Scope): boolean {
  if (captured === Scope.TRANSIENT || captor === captured) return true;
  return scopeRank[captured] > scopeRank[captor];
}

function isForward<T>(value: T | ForwardReference<T>): value is ForwardReference<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'forward' in value &&
    typeof value.forward === 'function'
  );
}
function tokenOf<T>(value: TokenReference<T>): ServiceIdentifier<T> {
  return isForward(value) ? value.forward() : value;
}
function tokenName(token: ServiceIdentifier): string {
  if (typeof token === 'string') return token;
  if (typeof token === 'symbol') return token.description ?? token.toString();
  if (typeof token === 'function') return token.name || '<anonymous class>';
  return token.description;
}
function normalize(input: ProviderInput): Provider {
  const candidate: unknown = input;
  if (typeof candidate === 'function') {
    const constructor = candidate as ConcreteConstructor;
    return { provide: constructor, useClass: constructor };
  }
  if (typeof candidate !== 'object' || candidate === null || !('provide' in candidate))
    throw new InvalidProviderError('A provider must declare a token.');
  const provider = candidate as Provider;
  const forms = [
    'useClass',
    'useValue',
    'useFactory',
    'useAsyncFactory',
    'useExisting',
    'useDynamic',
  ].filter((key) => key in provider);
  if (forms.length !== 1)
    throw new InvalidProviderError(
      `Provider ${tokenName(provider.provide)} must declare exactly one provider form.`,
    );
  if (
    (provider.order !== undefined && !Number.isSafeInteger(provider.order)) ||
    provider.name?.length === 0 ||
    (provider.scope !== undefined && !Object.values(Scope).includes(provider.scope))
  ) {
    throw new InvalidProviderError(`Provider ${tokenName(provider.provide)} has invalid options.`);
  }
  return provider;
}
function providerKind(provider: Provider): ProviderInspection['kind'] {
  if ('useClass' in provider) return 'class';
  if ('useValue' in provider) return 'value';
  if ('useFactory' in provider) return 'factory';
  if ('useAsyncFactory' in provider) return 'asyncFactory';
  if ('useExisting' in provider) return 'existing';
  return 'dynamic';
}
function constructorDependencies(metadata: ClassMetadata | undefined): readonly Dependency[] {
  return metadata?.parameters ?? [];
}

export class Container {
  #root: Container;
  #parent?: Container;
  #scope: Scope;
  #context: ReadonlyMap<string, unknown>;
  #records: RecordEntry[];
  #modules: ModuleNode[];
  #moduleByDefinition: Map<ModuleDefinition, ModuleNode>;
  #moduleById: Map<string, ModuleNode>;
  readonly #cache = new Map<RecordEntry, unknown>();
  readonly #created: Created[] = [];
  readonly #createdValues = new Set<unknown>();
  readonly #pending = new Set<Promise<unknown>>();
  readonly #overrides: RecordEntry[] = [];
  readonly #children = new Set<Container>();
  #disposed = false;
  #disposal: Promise<void> | undefined;
  #trace: ResolutionTraceEntry[] | undefined;

  public constructor(options: ContainerOptions = {}) {
    this.#root = this;
    this.#scope = Scope.PLUGIN;
    this.#context = new Map();
    this.#records = [];
    this.#modules = [];
    this.#moduleByDefinition = new Map();
    this.#moduleById = new Map();
    this.addProviders(options.providers ?? []);
    this.#installModules(options.modules ?? []);
  }

  #installModules(modules: readonly ModuleImport[]): void {
    for (const module of modules) {
      if ('useFactory' in module && !isForward(module))
        throw new InvalidModuleError(`Async module ${module.id} requires Container.create().`);
      this.#modules.push(
        this.#visitModule(isForward(module) ? module.forward() : module, [], isForward(module)),
      );
    }
    this.#validateRecords();
    this.#validateExports();
  }

  public static async create(options: ContainerOptions = {}): Promise<Container> {
    const container = new Container(
      options.providers === undefined ? {} : { providers: options.providers },
    );
    try {
      const modules = await container.#expandModules(options.modules ?? []);
      container.#installModules(modules);
      await container.initialize();
      return container;
    } catch (error) {
      await container.dispose();
      throw error;
    }
  }

  async #expandModules(inputs: readonly ModuleImport[]): Promise<readonly ModuleImport[]> {
    const expanded = new Map<object, ModuleDefinition>();
    const pending = new Map<object, Promise<void>>();

    const start = (
      input: Exclude<ModuleImport, ForwardReference<ModuleDefinition>>,
    ): ModuleDefinition => {
      const known = expanded.get(input);
      if (known !== undefined) return known;
      const shell = { id: input.id } as ModuleDefinition;
      expanded.set(input, shell);
      const expansion = (async () => {
        const source =
          'useFactory' in input
            ? await input.useFactory(
                ...(await Promise.all(
                  (input.inject ?? []).map((dependency) =>
                    this.#resolveDependencyForModule(dependency),
                  ),
                )),
              )
            : input;
        const imports = (source.imports ?? []).map((item): ModuleImport => {
          if (isForward(item)) {
            const target = item.forward();
            const targetShell = start(target);
            return forwardModule(() => targetShell);
          }
          return start(item);
        });
        Object.assign(shell, source, { id: input.id, imports });
      })();
      pending.set(input, expansion);
      return shell;
    };

    const roots = inputs.map((input): ModuleImport => {
      if (isForward(input)) {
        const target = input.forward();
        const shell = start(target);
        return forwardModule(() => shell);
      }
      return start(input);
    });
    let observed = 0;
    while (observed < pending.size) {
      const work = [...pending.values()].slice(observed);
      observed += work.length;
      await Promise.all(work);
    }
    return roots;
  }

  async #resolveDependencyForModule(dependency: Dependency): Promise<unknown> {
    const token = tokenOf(dependency.token);
    if (dependency.lazy === true || dependency.circular === true)
      throw new InvalidModuleError('Async module dependencies cannot be lazy or circular.');
    return this.#resolveAsync(token, undefined, [], dependency);
  }

  public async initialize(): Promise<void> {
    this.#assertActive();
    await Promise.all(
      this.#records
        .filter(({ provider }) => provider.eager === true)
        .map((record) => this.#resolveRecordAsync(record, [])),
    );
  }

  #visitModule(
    definition: ModuleDefinition,
    path: readonly ModuleDefinition[],
    allowedCycle: boolean,
  ): ModuleNode {
    if (!moduleId.test(definition.id))
      throw new InvalidModuleError(`Invalid module id: ${definition.id}.`);
    const cycleAt = path.indexOf(definition);
    if (cycleAt >= 0) {
      if (!allowedCycle)
        throw new ModuleCycleError([...path.slice(cycleAt).map(({ id }) => id), definition.id]);
      const existing = this.#moduleByDefinition.get(definition);
      if (existing === undefined)
        throw new InvalidModuleError(
          `forwardRef cycle for ${definition.id} was evaluated before its module.`,
        );
      return existing;
    }
    const known = this.#moduleByDefinition.get(definition);
    if (known !== undefined) return known;
    if (this.#moduleById.has(definition.id))
      throw new InvalidModuleError(`Duplicate module id: ${definition.id}.`);
    const node: ModuleNode = {
      definition,
      imports: [],
      exports: new Set(definition.exports ?? []),
    };
    this.#moduleByDefinition.set(definition, node);
    this.#moduleById.set(definition.id, node);
    this.addProviders(definition.providers ?? [], node);
    for (const imported of definition.imports ?? []) {
      if ('useFactory' in imported && !isForward(imported))
        throw new InvalidModuleError(`Async module ${imported.id} requires Container.create().`);
      node.imports.push(
        this.#visitModule(
          isForward(imported) ? imported.forward() : imported,
          [...path, definition],
          isForward(imported),
        ),
      );
    }
    return node;
  }

  private addProviders(providers: readonly ProviderInput[], module?: ModuleNode): void {
    for (const input of providers)
      this.#records.push({ provider: normalize(input), module, index: this.#records.length });
  }

  #validateRecords(): void {
    for (const requester of [undefined, ...this.#moduleByDefinition.values()]) {
      const visible = this.#records.filter((record) => this.#visible(record, requester));
      for (const token of new Set(visible.map(({ provider }) => provider.provide))) {
        const records = visible.filter(({ provider }) => provider.provide === token);
        if (
          records.some(({ provider }) => provider.multi === true) &&
          records.some(({ provider }) => provider.multi !== true)
        )
          throw new ProviderConflictError(tokenName(token));
        if (records.filter(({ provider }) => provider.primary === true).length > 1)
          throw new ProviderConflictError(tokenName(token));
      }
    }
  }

  #validateExports(): void {
    for (const node of this.#moduleByDefinition.values()) {
      for (const token of node.exports) {
        const local = this.#records.some(
          (record) => record.module === node && record.provider.provide === token,
        );
        const imported = node.imports.some((item) => this.#moduleProvides(item, token));
        if (!local && !imported) throw new InvalidExportError(node.definition.id, tokenName(token));
      }
    }
  }

  #moduleProvides(
    node: ModuleNode,
    token: ServiceIdentifier,
    visited: ReadonlySet<ModuleNode> = new Set(),
  ): boolean {
    if (visited.has(node) || !node.exports.has(token)) return false;
    if (this.#records.some((record) => record.module === node && record.provider.provide === token))
      return true;
    const next = new Set(visited).add(node);
    return node.imports.some((imported) => this.#moduleProvides(imported, token, next));
  }

  #moduleExposes(
    node: ModuleNode,
    source: ModuleNode,
    token: ServiceIdentifier,
    visited: ReadonlySet<ModuleNode> = new Set(),
  ): boolean {
    if (visited.has(node) || !node.exports.has(token)) return false;
    if (node === source) return true;
    const next = new Set(visited).add(node);
    return node.imports.some((imported) => this.#moduleExposes(imported, source, token, next));
  }

  public child(
    scope: Exclude<Scope, Scope.SINGLETON | Scope.PLUGIN | Scope.MODULE | Scope.TRANSIENT>,
    context: Readonly<Record<string, unknown>> = {},
  ): Container {
    this.#assertActive();
    const child = new Container();
    child.#initializeChild(this, scope, new Map(Object.entries(context)));
    this.#children.add(child);
    return child;
  }

  #initializeChild(parent: Container, scope: Scope, context: ReadonlyMap<string, unknown>): void {
    this.#root = parent.#root;
    this.#parent = parent;
    this.#scope = scope;
    this.#context = context;
    this.#records = parent.#root.#records;
    this.#modules = parent.#root.#modules;
    this.#moduleByDefinition = parent.#root.#moduleByDefinition;
    this.#moduleById = parent.#root.#moduleById;
  }

  public context(key: string): unknown {
    this.#assertActive();
    return this.#context.get(key) ?? this.#parent?.context(key);
  }

  public override<T>(provider: ProviderInput<T>): void {
    this.#assertActive();
    const normalized = normalize(provider);
    this.#overrides.push({
      provider: normalized,
      module: undefined,
      index: Number.MAX_SAFE_INTEGER - this.#overrides.length,
    });
  }

  public resolve<T>(token: ServiceIdentifier<T>): T {
    return this.#resolve(token, undefined, [], undefined) as T;
  }
  public resolveAll<T>(token: ServiceIdentifier<T>): readonly T[] {
    return this.#resolve(token, undefined, [], undefined, true) as T[];
  }
  public async resolveAsync<T>(token: ServiceIdentifier<T>): Promise<T> {
    return this.#resolveAsync(token, undefined, [], undefined) as Promise<T>;
  }
  public async resolveAllAsync<T>(token: ServiceIdentifier<T>): Promise<readonly T[]> {
    return this.#resolveAsync(token, undefined, [], undefined, true) as Promise<T[]>;
  }
  /** Resolves method metadata with the same qualifiers, visibility, and optionality as provider injection. */
  public async resolveDependencyAsync(
    dependency: Dependency,
    requester?: ServiceIdentifier,
  ): Promise<unknown> {
    const token = tokenOf(dependency.token);
    const requesterModule = requester === undefined ? undefined : this.#requesterModule(requester);
    if (dependency.lazy === true)
      return () => this.#resolveAsync(token, requesterModule, [], { ...dependency, lazy: false });
    return this.#resolveAsync(token, requesterModule, [], dependency);
  }

  #requesterModule(token: ServiceIdentifier): ModuleNode | undefined {
    const records = this.#records.filter((record) => record.provider.provide === token);
    if (records.length === 0) throw new ProviderMissingError(tokenName(token));
    const modules = new Set(records.map((record) => record.module));
    if (modules.size > 1) throw new ProviderAmbiguityError(tokenName(token));
    return records[0]?.module;
  }

  #visible(record: RecordEntry, requester?: ModuleNode): boolean {
    const source = record.module;
    if (source === undefined) return true;
    if (requester === source) return true;
    if (
      [...this.#moduleByDefinition.values()].some(
        (module) =>
          module.definition.global === true &&
          this.#moduleExposes(module, source, record.provider.provide),
      )
    )
      return true;
    if (requester === undefined)
      return this.#modules.some((module) =>
        this.#moduleExposes(module, source, record.provider.provide),
      );
    return requester.imports.some((module) =>
      this.#moduleExposes(module, source, record.provider.provide),
    );
  }

  #candidates(
    token: ServiceIdentifier,
    requester: ModuleNode | undefined,
    dependency?: Dependency,
  ): RecordEntry[] {
    const override = this.#findOverride(token);
    if (override.length > 0) return override;
    return this.#records
      .filter(
        (record) =>
          record.provider.provide === token &&
          this.#visible(record, requester) &&
          (dependency?.name === undefined || record.provider.name === dependency.name) &&
          (dependency?.qualifier === undefined ||
            record.provider.qualifier === dependency.qualifier),
      )
      .sort((a, b) => (a.provider.order ?? 0) - (b.provider.order ?? 0) || a.index - b.index);
  }

  #findOverride(token: ServiceIdentifier): RecordEntry[] {
    const records = this.#overrides.filter(({ provider }) => provider.provide === token);
    return records.length > 0
      ? records
      : this.#parent === undefined
        ? []
        : this.#parent.#findOverride(token);
  }

  #select(
    token: ServiceIdentifier,
    requester: ModuleNode | undefined,
    dependency?: Dependency,
    all = false,
  ): RecordEntry[] {
    const candidates = this.#candidates(token, requester, dependency);
    if (candidates.length === 0) {
      if (dependency?.optional === true) return [];
      throw new ProviderMissingError(tokenName(token));
    }
    if (
      all ||
      dependency?.all === true ||
      (dependency === undefined && candidates.every(({ provider }) => provider.multi === true))
    )
      return candidates;
    if (candidates.length === 1) return candidates;
    const primary = candidates.filter(({ provider }) => provider.primary === true);
    if (primary.length === 1) return primary;
    throw new ProviderAmbiguityError(tokenName(token));
  }

  #resolve(
    token: ServiceIdentifier,
    requester: ModuleNode | undefined,
    stack: readonly RecordEntry[],
    dependency?: Dependency,
    all = false,
  ): unknown {
    this.#assertActive();
    this.#log('resolve', token, requester);
    const selected = this.#select(token, requester, dependency, all);
    if (selected.length === 0) return dependency?.all === true || all ? [] : undefined;
    const values = selected.map((record) => this.#resolveRecordSync(record, stack));
    return dependency?.all === true ||
      all ||
      (dependency === undefined && selected.every(({ provider }) => provider.multi === true))
      ? values
      : values[0];
  }

  async #resolveAsync(
    token: ServiceIdentifier,
    requester: ModuleNode | undefined,
    stack: readonly RecordEntry[],
    dependency?: Dependency,
    all = false,
  ): Promise<unknown> {
    this.#assertActive();
    this.#log('resolve', token, requester);
    const selected = this.#select(token, requester, dependency, all);
    if (selected.length === 0) return dependency?.all === true || all ? [] : undefined;
    const values = await Promise.all(
      selected.map((record) => this.#resolveRecordAsync(record, stack)),
    );
    return dependency?.all === true ||
      all ||
      (dependency === undefined && selected.every(({ provider }) => provider.multi === true))
      ? values
      : values[0];
  }

  #cacheOwner(record: RecordEntry): Container | undefined {
    const scope = scopeOf(record);
    if (scope === Scope.TRANSIENT) return undefined;
    if (scope === Scope.SINGLETON || scope === Scope.PLUGIN || scope === Scope.MODULE)
      return this.#root;
    const owner = this.#findScope(scope);
    if (owner === undefined)
      throw new ScopeViolationError(
        `${tokenName(record.provider.provide)} requires an active ${scope} scope.`,
      );
    return owner;
  }

  #lifecycleOwner(record: RecordEntry, stack: readonly RecordEntry[]): Container {
    const cacheOwner = this.#cacheOwner(record);
    if (cacheOwner !== undefined) return cacheOwner;
    for (let index = stack.length - 1; index >= 0; index -= 1) {
      const ancestor = stack[index];
      if (ancestor !== undefined && scopeOf(ancestor) !== Scope.TRANSIENT)
        return this.#cacheOwner(ancestor) ?? this;
    }
    return this;
  }

  #findScope(scope: Scope): Container | undefined {
    if (this.#scope === scope) return this;
    return this.#parent === undefined ? undefined : this.#parent.#findScope(scope);
  }

  #checkRecord(record: RecordEntry, stack: readonly RecordEntry[], allowCycle = false): void {
    const capturedScope = scopeOf(record);
    for (const captor of stack) {
      const captorScope = scopeOf(captor);
      if (captorScope !== Scope.TRANSIENT && !canCapture(captorScope, capturedScope))
        throw new ScopeViolationError(
          `${tokenName(captor.provider.provide)} (${captorScope}) cannot capture ${tokenName(record.provider.provide)} (${capturedScope}).`,
        );
    }
    const at = stack.indexOf(record);
    if (at >= 0 && !allowCycle)
      throw new CircularDependencyError([
        ...stack.slice(at).map(({ provider }) => tokenName(provider.provide)),
        tokenName(record.provider.provide),
      ]);
  }

  #resolveDependencySync(
    dependency: Dependency,
    owner: RecordEntry,
    stack: readonly RecordEntry[],
  ): unknown {
    const token = tokenOf(dependency.token);
    this.#log('dependency', token, owner.module);
    if (dependency.lazy === true) {
      const resolver = this.#lifecycleOwner(owner, stack);
      return () => resolver.#resolve(token, owner.module, stack, { ...dependency, lazy: false });
    }
    if (dependency.circular === true)
      return this.#circularValue(token, owner, owner.module, stack, dependency);
    try {
      return this.#resolve(token, owner.module, stack, dependency);
    } catch (error) {
      if (error instanceof CircularDependencyError || error instanceof ScopeViolationError)
        throw error;
      throw new DependencyResolutionError(tokenName(owner.provider.provide), error);
    }
  }

  async #resolveDependencyAsync(
    dependency: Dependency,
    owner: RecordEntry,
    stack: readonly RecordEntry[],
  ): Promise<unknown> {
    const token = tokenOf(dependency.token);
    this.#log('dependency', token, owner.module);
    if (dependency.lazy === true) {
      const resolver = this.#lifecycleOwner(owner, stack);
      return () =>
        resolver.#resolveAsync(token, owner.module, stack, { ...dependency, lazy: false });
    }
    if (dependency.circular === true)
      return this.#circularValue(token, owner, owner.module, stack, dependency);
    try {
      return await this.#resolveAsync(token, owner.module, stack, dependency);
    } catch (error) {
      if (error instanceof CircularDependencyError || error instanceof ScopeViolationError)
        throw error;
      throw new DependencyResolutionError(tokenName(owner.provider.provide), error);
    }
  }

  #circularValue(
    token: ServiceIdentifier,
    owner: RecordEntry,
    requester: ModuleNode | undefined,
    stack: readonly RecordEntry[],
    dependency: Dependency,
  ): unknown {
    const resolver = this.#lifecycleOwner(owner, stack);
    const selected = resolver.#select(token, requester, dependency);
    for (const record of selected) this.#checkRecord(record, stack, true);
    const proxies = selected.map((record) => {
      let target: object | undefined;
      return new Proxy(
        {},
        {
          get: (_object, property): unknown =>
            Reflect.get(
              (target ??= resolver.#resolveRecordSync(record, []) as object),
              property,
            ) as unknown,
        },
      );
    });
    return dependency.all === true ? proxies : proxies[0];
  }

  #resolveRecordSync(record: RecordEntry, stack: readonly RecordEntry[]): unknown {
    this.#checkRecord(record, stack);
    if ('useExisting' in record.provider)
      return this.#resolve(tokenOf(record.provider.useExisting), record.module, [...stack, record]);
    const owner = this.#cacheOwner(record);
    if (owner !== undefined) owner.#assertActive();
    if ('useAsyncFactory' in record.provider || 'useDynamic' in record.provider)
      throw new AsyncProviderError(tokenName(record.provider.provide));
    if (owner !== undefined && owner.#cache.has(record)) {
      this.#log('cache', record.provider.provide, record.module);
      const cached = owner.#cache.get(record);
      if (cached instanceof Promise)
        throw new AsyncProviderError(tokenName(record.provider.provide));
      return cached;
    }
    this.#log('create', record.provider.provide, record.module);
    const next = [...stack, record];
    const provider = record.provider;
    const lifecycleOwner = this.#lifecycleOwner(record, stack);
    let value: unknown;
    let metadata: ClassMetadata | undefined;
    if ('useValue' in provider) value = provider.useValue;
    else if ('useClass' in provider) {
      metadata = provider.metadata;
      const dependencies = constructorDependencies(metadata).map((dependency) =>
        this.#resolveDependencySync(dependency, record, next),
      );
      value = Reflect.construct(provider.useClass, dependencies) as unknown;
      lifecycleOwner.#trackCreated(value, metadata);
      this.#applyPropertiesSync(value, metadata, record, next);
    } else if ('useFactory' in provider)
      value = provider.useFactory(
        ...(provider.inject ?? []).map((dependency) =>
          this.#resolveDependencySync(dependency, record, next),
        ),
      );
    else throw new InvalidProviderError('Unsupported synchronous provider.');
    if (value instanceof Promise) throw new AsyncProviderError(tokenName(provider.provide));
    this.#initializeSync(value, metadata, provider.provide);
    if (owner !== undefined) owner.#cache.set(record, value);
    lifecycleOwner.#trackCreated(value, metadata);
    return value;
  }

  async #resolveRecordAsync(record: RecordEntry, stack: readonly RecordEntry[]): Promise<unknown> {
    this.#checkRecord(record, stack);
    if ('useExisting' in record.provider)
      return this.#resolveAsync(tokenOf(record.provider.useExisting), record.module, [
        ...stack,
        record,
      ]);
    const owner = this.#cacheOwner(record);
    if (owner !== undefined) owner.#assertActive();
    if (owner !== undefined && owner.#cache.has(record)) {
      this.#log('cache', record.provider.provide, record.module);
      return owner.#cache.get(record);
    }
    this.#log('create', record.provider.provide, record.module);
    const next = [...stack, record];
    const provider = record.provider;
    const lifecycleOwner = this.#lifecycleOwner(record, stack);
    const creation = (async () => {
      let value: unknown;
      let metadata: ClassMetadata | undefined;
      if ('useValue' in provider) value = provider.useValue;
      else if ('useClass' in provider) {
        metadata = provider.metadata;
        value = Reflect.construct(
          provider.useClass,
          await Promise.all(
            constructorDependencies(metadata).map((dependency) =>
              this.#resolveDependencyAsync(dependency, record, next),
            ),
          ),
        ) as unknown;
        lifecycleOwner.#trackCreated(value, metadata);
        await this.#applyPropertiesAsync(value, metadata, record, next);
      } else if ('useFactory' in provider)
        value = await provider.useFactory(
          ...(await Promise.all(
            (provider.inject ?? []).map((dependency) =>
              this.#resolveDependencyAsync(dependency, record, next),
            ),
          )),
        );
      else if ('useAsyncFactory' in provider)
        value = await provider.useAsyncFactory(
          ...(await Promise.all(
            (provider.inject ?? []).map((dependency) =>
              this.#resolveDependencyAsync(dependency, record, next),
            ),
          )),
        );
      else if ('useDynamic' in provider) {
        const dynamic = normalize(await provider.useDynamic(this.#resolutionContext()));
        if (dynamic.provide !== provider.provide)
          throw new InvalidProviderError(
            `Dynamic provider ${tokenName(provider.provide)} returned a different token.`,
          );
        value = await this.#resolveRecordAsync(
          { provider: dynamic, module: record.module, index: record.index },
          next,
        );
      } else throw new InvalidProviderError('Unsupported provider.');
      await this.#initializeAsync(value, metadata);
      lifecycleOwner.#trackCreated(value, metadata);
      return value;
    })();
    const completion = creation.then(
      (value) => {
        if (lifecycleOwner.#disposed) {
          if (owner !== undefined) owner.#cache.delete(record);
          throw new DisposedScopeError();
        }
        if (owner !== undefined) owner.#cache.set(record, value);
        return value;
      },
      (error: unknown) => {
        if (owner !== undefined) owner.#cache.delete(record);
        throw error;
      },
    );
    if (owner !== undefined) owner.#cache.set(record, completion);
    lifecycleOwner.#pending.add(completion);
    void completion.then(
      () => lifecycleOwner.#pending.delete(completion),
      () => lifecycleOwner.#pending.delete(completion),
    );
    return completion;
  }

  #trackCreated(value: unknown, metadata?: ClassMetadata): void {
    if (this.#createdValues.has(value)) return;
    this.#createdValues.add(value);
    this.#created.push({ value, ...(metadata === undefined ? {} : { metadata }) });
  }

  #resolutionContext(): ResolutionContext {
    return { container: this, scope: this.#scope, context: this.#context };
  }
  #applyPropertiesSync(
    value: unknown,
    metadata: ClassMetadata | undefined,
    owner: RecordEntry,
    stack: readonly RecordEntry[],
  ): void {
    for (const dependency of metadata?.properties ?? [])
      Reflect.set(
        value as object,
        dependency.property,
        this.#resolveDependencySync(dependency, owner, stack),
      );
  }
  async #applyPropertiesAsync(
    value: unknown,
    metadata: ClassMetadata | undefined,
    owner: RecordEntry,
    stack: readonly RecordEntry[],
  ): Promise<void> {
    for (const dependency of metadata?.properties ?? [])
      Reflect.set(
        value as object,
        dependency.property,
        await this.#resolveDependencyAsync(dependency, owner, stack),
      );
  }
  #initializeSync(
    value: unknown,
    metadata: ClassMetadata | undefined,
    token: ServiceIdentifier,
  ): void {
    const method = metadata?.lifecycle?.initialize;
    if (method === undefined) return;
    const callable = this.#lifecycleMethod(value, method);
    const result: unknown = callable.apply(value, []);
    if (result instanceof Promise) throw new AsyncProviderError(tokenName(token));
  }
  async #initializeAsync(value: unknown, metadata?: ClassMetadata): Promise<void> {
    const method = metadata?.lifecycle?.initialize;
    if (method !== undefined) await this.#lifecycleMethod(value, method).apply(value, []);
  }
  #lifecycleMethod(value: unknown, method: string | symbol): (...args: never[]) => unknown {
    const candidate = Reflect.get(value as object, method) as unknown;
    if (typeof candidate !== 'function')
      throw new InvalidProviderError(`Lifecycle member ${String(method)} is not a method.`);
    return candidate as (...args: never[]) => unknown;
  }

  public inspect(): readonly ProviderInspection[] {
    return this.#records.map((record) => ({
      token: tokenName(record.provider.provide),
      module: record.module?.definition.id,
      scope: record.provider.scope ?? (record.module === undefined ? Scope.PLUGIN : Scope.MODULE),
      kind: providerKind(record.provider),
      initialized: this.#root.#cache.has(record),
      multi: record.provider.multi === true,
      primary: record.provider.primary === true,
    }));
  }

  public trace<T>(token: ServiceIdentifier<T>): ResolutionTrace<T> {
    const entries: ResolutionTraceEntry[] = [];
    this.#trace = entries;
    try {
      return { value: this.resolve(token), entries };
    } catch (error) {
      this.#log('error', token, undefined, error instanceof Error ? error.message : String(error));
      return { error, entries };
    } finally {
      this.#trace = undefined;
    }
  }

  #log(
    action: ResolutionTraceEntry['action'],
    token: ServiceIdentifier,
    module?: ModuleNode,
    detail?: string,
  ): void {
    const trace =
      this.#trace ??
      (this.#parent === undefined ? undefined : this.#parent.#trace) ??
      this.#root.#trace;
    trace?.push({
      action,
      token: tokenName(token),
      ...(module === undefined ? {} : { module: module.definition.id }),
      ...(detail === undefined ? {} : { detail }),
    });
  }

  public dispose(): Promise<void> {
    if (this.#disposal !== undefined) return this.#disposal;
    this.#invalidateTree();
    this.#disposal = this.#disposeOwned();
    return this.#disposal;
  }

  async #disposeOwned(): Promise<void> {
    try {
      for (const child of [...this.#children].reverse()) await child.dispose();
      while (this.#pending.size > 0) await Promise.allSettled([...this.#pending]);
      for (const created of [...this.#created].reverse()) {
        const method = created.metadata?.lifecycle?.dispose;
        if (method !== undefined)
          await this.#lifecycleMethod(created.value, method).apply(created.value, []);
        else if (
          created.value !== null &&
          typeof created.value === 'object' &&
          Symbol.asyncDispose in created.value
        )
          await (created.value as AsyncDisposable)[Symbol.asyncDispose]();
        else if (
          created.value !== null &&
          typeof created.value === 'object' &&
          Symbol.dispose in created.value
        )
          (created.value as Disposable)[Symbol.dispose]();
      }
    } finally {
      this.#cache.clear();
      this.#created.length = 0;
      this.#createdValues.clear();
      if (this.#parent !== undefined) this.#parent.#children.delete(this);
    }
  }
  #invalidateTree(): void {
    this.#disposed = true;
    for (const child of this.#children) child.#invalidateTree();
  }
  #assertActive(): void {
    if (this.#disposed) throw new DisposedScopeError();
  }
}
