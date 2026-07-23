import type { Constructor } from '@shamoo/common';

declare const tokenBrand: unique symbol;
export interface InjectionToken<T> {
  readonly description: string;
  readonly [tokenBrand]: T;
}

export type ServiceIdentifier<T = unknown> = Constructor<T> | InjectionToken<T> | string | symbol;
export type ConcreteConstructor<T = unknown> = new (...args: never[]) => T;
export interface ForwardReference<T> {
  readonly forward: () => T;
}
export type TokenReference<T = unknown> =
  ServiceIdentifier<T> | ForwardReference<ServiceIdentifier<T>>;

export function createToken<T>(description: string): InjectionToken<T> {
  const normalized = description.trim();
  if (normalized.length === 0) throw new TypeError('Token description must not be empty.');
  return Object.freeze({ description: normalized }) as InjectionToken<T>;
}

export function forwardRef<T>(forward: () => T): ForwardReference<T> {
  return Object.freeze({ forward });
}

export enum Scope {
  SINGLETON = 'Singleton',
  PLUGIN = 'Plugin',
  MODULE = 'Module',
  TRANSIENT = 'Transient',
  EVENT = 'Event',
  COMMAND = 'Command',
  TASK = 'Task',
  PLAYER = 'Player',
  WORLD = 'World',
  REGION = 'Region',
  PROXY = 'Proxy',
}

export interface Dependency<T = unknown> {
  readonly token: TokenReference<T>;
  readonly optional?: boolean;
  readonly lazy?: boolean;
  readonly all?: boolean;
  readonly name?: string;
  readonly qualifier?: string;
  readonly circular?: boolean;
}

export interface PropertyDependency extends Dependency {
  readonly property: string | symbol;
}

export interface LifecycleMetadata {
  readonly initialize?: string | symbol;
  readonly dispose?: string | symbol;
}

export interface ClassMetadata {
  readonly parameters?: readonly Dependency[];
  readonly properties?: readonly PropertyDependency[];
  readonly lifecycle?: LifecycleMetadata;
}

export interface ResolutionContext {
  readonly container: ContainerLike;
  readonly scope: Scope;
  readonly context: ReadonlyMap<string, unknown>;
}

export interface ContainerLike {
  resolve<T>(token: ServiceIdentifier<T>): T;
  resolveAsync<T>(token: ServiceIdentifier<T>): Promise<T>;
}

interface ProviderOptions<T> {
  readonly provide: ServiceIdentifier<T>;
  readonly scope?: Scope;
  readonly multi?: boolean;
  readonly primary?: boolean;
  readonly name?: string;
  readonly qualifier?: string;
  readonly order?: number;
  readonly eager?: boolean;
}

export interface ClassProvider<T> extends ProviderOptions<T> {
  readonly useClass: ConcreteConstructor<T>;
  readonly metadata?: ClassMetadata;
}
export interface ValueProvider<T> extends ProviderOptions<T> {
  readonly useValue: T;
}
export interface FactoryProvider<T> extends ProviderOptions<T> {
  readonly useFactory: (...dependencies: readonly unknown[]) => T;
  readonly inject?: readonly Dependency[];
}
export interface AsyncFactoryProvider<T> extends ProviderOptions<T> {
  readonly useAsyncFactory: (...dependencies: readonly unknown[]) => Promise<T>;
  readonly inject?: readonly Dependency[];
}
export interface ExistingProvider<T> extends ProviderOptions<T> {
  readonly useExisting: TokenReference<T>;
}
export interface DynamicProvider<T> extends ProviderOptions<T> {
  readonly useDynamic: (context: ResolutionContext) => Provider<T> | Promise<Provider<T>>;
}
export type Provider<T = unknown> =
  | ClassProvider<T>
  | ValueProvider<T>
  | FactoryProvider<T>
  | AsyncFactoryProvider<T>
  | ExistingProvider<T>
  | DynamicProvider<T>;
export type ProviderInput<T = unknown> = Provider<T> | ConcreteConstructor<T>;

export interface ModuleDefinition {
  readonly id: string;
  readonly imports?: readonly ModuleImport[];
  readonly providers?: readonly ProviderInput[];
  readonly exports?: readonly ServiceIdentifier[];
  readonly global?: boolean;
}
export interface DynamicModuleDefinition extends Omit<ModuleDefinition, 'imports' | 'providers'> {
  readonly imports?: readonly ModuleImport[];
  readonly providers?: readonly ProviderInput[];
}
export interface AsyncModuleDefinition {
  readonly id: string;
  readonly useFactory: (
    ...dependencies: readonly unknown[]
  ) => DynamicModuleDefinition | Promise<DynamicModuleDefinition>;
  readonly inject?: readonly Dependency[];
}
export type ModuleImport =
  ModuleDefinition | AsyncModuleDefinition | ForwardReference<ModuleDefinition>;

export interface ContainerOptions {
  readonly modules?: readonly ModuleImport[];
  readonly providers?: readonly ProviderInput[];
}

export interface ProviderInspection {
  readonly token: string;
  readonly module: string | undefined;
  readonly scope: Scope;
  readonly kind: 'class' | 'value' | 'factory' | 'asyncFactory' | 'existing' | 'dynamic';
  readonly initialized: boolean;
  readonly multi: boolean;
  readonly primary: boolean;
}

export interface ResolutionTraceEntry {
  readonly action: 'resolve' | 'cache' | 'create' | 'dependency' | 'error';
  readonly token: string;
  readonly module?: string;
  readonly detail?: string;
}

export interface ResolutionTrace<T> {
  readonly value?: T;
  readonly error?: unknown;
  readonly entries: readonly ResolutionTraceEntry[];
}
