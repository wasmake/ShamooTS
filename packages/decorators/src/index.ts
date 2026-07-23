/**
 * Standard decorators whose declarations are consumed by `shamooc`.
 */
import type { Scope, ServiceIdentifier } from '@shamoo/di';

export const SHAMOO_DECLARATIONS = Symbol.for('shamoo.decorator.declarations');
const symbolWithMetadata = Symbol as typeof Symbol & { metadata?: symbol };
const STANDARD_METADATA = symbolWithMetadata.metadata ?? Symbol.for('Symbol.metadata');
if (symbolWithMetadata.metadata === undefined) {
  Object.defineProperty(symbolWithMetadata, 'metadata', {
    value: STANDARD_METADATA,
  });
}
export type DecoratorTarget = 'class' | 'method' | 'parameter' | 'property';
export interface RuntimeDecoratorDeclaration {
  readonly name: string;
  readonly target: DecoratorTarget;
  readonly arguments: readonly unknown[];
  readonly member?: string | symbol;
  readonly parameterIndex?: number;
}

interface MetadataCarrier {
  [SHAMOO_DECLARATIONS]?: RuntimeDecoratorDeclaration[];
}
interface Context {
  readonly kind: string;
  readonly name?: string | symbol;
  readonly metadata?: MetadataCarrier;
}
export type ShamooDecorator = (...invocation: unknown[]) => void;
const runtimeDeclarations = new WeakMap<object, RuntimeDecoratorDeclaration[]>();
const repeatableDeclarations = new Set([
  'Requires',
  'Validate',
  'Scheduled',
  'UseInterceptors',
  'UseGuards',
  'UsePipes',
  'Catch',
]);
const conflictGroups: readonly (readonly string[])[] = [
  ['Plugin', 'Module', 'Component', 'Injectable', 'Service'],
  ['OnLoad', 'OnEnable', 'OnDisable', 'OnReload'],
  ['EventHandler', 'Command', 'Subcommand', 'Scheduled', 'Interval', 'Timeout'],
  ['Inject', 'ConfigValue', 'Argument', 'Option', 'Sender'],
];

function declarationsForMetadata(metadata: MetadataCarrier): RuntimeDecoratorDeclaration[] {
  if (!Object.prototype.hasOwnProperty.call(metadata, SHAMOO_DECLARATIONS)) {
    Object.defineProperty(metadata, SHAMOO_DECLARATIONS, {
      configurable: true,
      enumerable: false,
      value: [],
      writable: true,
    });
  }
  return metadata[SHAMOO_DECLARATIONS] ?? [];
}

function assertCompatible(
  declarations: readonly RuntimeDecoratorDeclaration[],
  declarationValue: RuntimeDecoratorDeclaration,
): void {
  const sameTarget = declarations.filter(
    (item) =>
      item.target === declarationValue.target &&
      item.member === declarationValue.member &&
      item.parameterIndex === declarationValue.parameterIndex,
  );
  if (
    !repeatableDeclarations.has(declarationValue.name) &&
    sameTarget.some((item) => item.name === declarationValue.name)
  ) {
    throw new TypeError(
      `@${declarationValue.name} is duplicated on ${String(declarationValue.member ?? 'class')}.`,
    );
  }
  const conflict = conflictGroups.find(
    (group) =>
      group.includes(declarationValue.name) && sameTarget.some((item) => group.includes(item.name)),
  );
  if (conflict !== undefined) {
    const existing = sameTarget.find((item) => conflict.includes(item.name));
    throw new TypeError(
      `@${declarationValue.name} conflicts with @${existing?.name ?? 'unknown'} on ${String(declarationValue.member ?? 'class')}.`,
    );
  }
}

function declaration(
  name: string,
  targets: readonly DecoratorTarget[],
  args: readonly unknown[],
): ShamooDecorator {
  return (...invocation) => {
    const value = invocation[0];
    const possibleContext = invocation[1];
    const standard =
      typeof possibleContext === 'object' && possibleContext !== null && 'kind' in possibleContext;
    const context = standard ? (possibleContext as Context) : undefined;
    const parameterIndex = typeof invocation[2] === 'number' ? invocation[2] : undefined;
    const member =
      context?.name ??
      (typeof possibleContext === 'string' || typeof possibleContext === 'symbol'
        ? possibleContext
        : undefined);
    const target =
      context?.kind === 'field'
        ? 'property'
        : parameterIndex !== undefined
          ? 'parameter'
          : (context?.kind ??
            (member === undefined ? 'class' : invocation.length >= 3 ? 'method' : 'property'));
    if (!targets.includes(target as DecoratorTarget)) {
      throw new TypeError(`@${name} cannot decorate a ${target}.`);
    }
    const declarationValue = Object.freeze({
      name,
      target: target as DecoratorTarget,
      arguments: args,
      ...(member === undefined ? {} : { member }),
      ...(parameterIndex === undefined ? {} : { parameterIndex }),
    });
    const owner = standard
      ? typeof value === 'function'
        ? value
        : undefined
      : typeof value === 'function'
        ? value
        : (value as object).constructor;
    const declarations =
      context?.metadata === undefined
        ? (runtimeDeclarations.get(owner as object) ?? [])
        : declarationsForMetadata(context.metadata);
    assertCompatible(declarations, declarationValue);
    declarations.push(declarationValue);
    if (owner !== undefined && (!standard || target === 'class')) {
      runtimeDeclarations.set(owner, declarations);
    }
  };
}

function namedClass(name: string) {
  return (options: Readonly<Record<string, unknown>> = {}): ShamooDecorator =>
    declaration(name, ['class'], [options]);
}
function method(name: string) {
  return (...args: readonly unknown[]): ShamooDecorator => declaration(name, ['method'], args);
}
function member(name: string) {
  return (...args: readonly unknown[]): ShamooDecorator =>
    declaration(name, ['parameter', 'property'], args);
}

export const Plugin = namedClass('Plugin');
export const Module = namedClass('Module');
export const Component = namedClass('Component');
export const Injectable = namedClass('Injectable');
export const Service = (
  options: { readonly scope?: Scope; readonly token?: ServiceIdentifier } = {},
): ShamooDecorator => declaration('Service', ['class'], [options]);
export const Global = (): ShamooDecorator => declaration('Global', ['class'], []);
export const Primary = (): ShamooDecorator => declaration('Primary', ['class'], []);

export const Inject = (token: ServiceIdentifier): ShamooDecorator => member('Inject')(token);
export const Optional = member('Optional');
export const InjectAll = member('InjectAll');
export const Lazy = member('Lazy');
export const Named = member('Named');
export const Qualifier = member('Qualifier');
export const ConfigValue = member('ConfigValue');

export const OnLoad = method('OnLoad');
export const OnEnable = method('OnEnable');
export const OnDisable = method('OnDisable');
export const OnReload = method('OnReload');
export const EventHandler = method('EventHandler');
export const Command = method('Command');
export const Subcommand = method('Subcommand');
export const Argument = member('Argument');
export const Option = member('Option');
export const Sender = member('Sender');
export const Scheduled = method('Scheduled');
export const Interval = method('Interval');
export const Timeout = method('Timeout');
export const Requires = (...conditions: readonly unknown[]): ShamooDecorator =>
  declaration('Requires', ['class', 'method'], conditions);
export const RequiresExpression = (expression: string): ShamooDecorator =>
  declaration('RequiresExpression', ['class', 'method'], [expression]);
export const UseInterceptors = (...types: readonly unknown[]): ShamooDecorator =>
  declaration('UseInterceptors', ['class', 'method'], types);
export const UseGuards = (...types: readonly unknown[]): ShamooDecorator =>
  declaration('UseGuards', ['class', 'method'], types);
export const UsePipes = (...types: readonly unknown[]): ShamooDecorator =>
  declaration('UsePipes', ['class', 'method'], types);
export const Catch = (...types: readonly unknown[]): ShamooDecorator =>
  declaration('Catch', ['class', 'method'], types);
export const Validate = (...rules: readonly unknown[]): ShamooDecorator =>
  member('Validate')(...rules);

export function getRuntimeDeclarations(target: object): readonly RuntimeDecoratorDeclaration[] {
  const metadata = Object.prototype.hasOwnProperty.call(target, STANDARD_METADATA)
    ? (target as { [STANDARD_METADATA]?: MetadataCarrier })[STANDARD_METADATA]
    : undefined;
  const standardDeclarations =
    metadata !== undefined && Object.prototype.hasOwnProperty.call(metadata, SHAMOO_DECLARATIONS)
      ? (metadata[SHAMOO_DECLARATIONS] ?? [])
      : [];
  return Object.freeze(
    [...new Set([...(runtimeDeclarations.get(target) ?? []), ...standardDeclarations])].sort(
      (left, right) =>
        `${left.name}:${String(left.member ?? '')}:${String(left.parameterIndex ?? '')}`.localeCompare(
          `${right.name}:${String(right.member ?? '')}:${String(right.parameterIndex ?? '')}`,
        ),
    ),
  );
}
