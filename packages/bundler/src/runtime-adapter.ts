import type { CompilerMetadata, ComponentMetadata, MethodMetadata } from '@shamoo/metadata';

type Data =
  | null
  | boolean
  | number
  | string
  | Uint8Array
  | readonly Data[]
  | { readonly [key: string]: Data };
type HostOperation = (...arguments_: readonly unknown[]) => unknown;
type Platform = 'paper' | 'velocity';
type LifecycleStage = 'load' | 'enable' | 'ready' | 'drain' | 'disable' | 'unload';
type ComponentConstructor = new () => object;
type ComponentRegistry = Readonly<Record<string, ComponentConstructor>>;

interface RuntimeHost {
  readonly registerCallback: (
    name: string,
    callback: (...values: readonly Data[]) => unknown,
  ) => boolean;
  readonly unregisterCallback: (name: string) => boolean;
}
export interface RuntimeLifecycleContext {
  readonly plugin: string;
  readonly platform: Platform;
  readonly metadata: CompilerMetadata;
}
export interface PlatformRegistryModule {
  readonly components: ComponentRegistry;
}
export type PlatformLoader = () => Promise<PlatformRegistryModule>;

interface PaperCommandSender {
  readonly name: string;
  readonly kind: 'player' | 'console' | 'other';
  readonly id?: string;
}
interface PaperCommandPlayer {
  readonly id: string;
  readonly name: string;
  readonly online: boolean;
}
interface PaperCommandItem {
  readonly material: string;
  readonly amount: number;
}
interface PaperCommandContext {
  readonly sender: PaperCommandSender;
  readonly alias: string;
  readonly input: string;
  readonly arguments: Readonly<Record<string, unknown>>;
  readonly options: Readonly<Record<string, unknown>>;
  reply(message: unknown): Promise<boolean>;
  openInventory(inventory: unknown): Promise<boolean>;
  giveItem(item: unknown): Promise<boolean>;
  findPlayer(name: string): Promise<PaperCommandPlayer | null>;
  mainHand(): Promise<PaperCommandItem | null>;
  takeMainHand(material: string, amount: number): Promise<boolean>;
}

interface PaperActionContext {
  readonly sender: PaperCommandSender;
  readonly action: 'click' | 'left' | 'right';
  readonly slot?: number;
  readonly item?: PaperCommandItem;
  reply(message: unknown): Promise<boolean>;
}

interface CommandArgumentDescriptor {
  readonly name: string;
  readonly parser: string;
  readonly suggestions: readonly string[];
}

interface CommandOptionDescriptor extends CommandArgumentDescriptor {
  readonly aliases: readonly string[];
  readonly required: boolean;
}

interface CommandRouteDescriptor {
  readonly syntax: string;
  readonly description: string;
  readonly permission: string;
  readonly sender: 'any' | 'player' | 'console';
  readonly arguments: readonly CommandArgumentDescriptor[];
  readonly options: readonly CommandOptionDescriptor[];
}

interface CommandRoute {
  readonly root: string;
  readonly aliases: readonly string[];
  readonly descriptor: CommandRouteDescriptor;
}

interface DescriptorCallbackState {
  sequence: number;
}

const callbackMarker = (name: string): { readonly $callback: string } => ({ $callback: name });
const callbackEncoder = new TextEncoder();
const paperCallbackHook = Symbol.for('shamoo.paper.callback');

function callbackId(componentId: string, method: string): string {
  const encoded = [...callbackEncoder.encode(`${componentId}\u0000${method}`)]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('');
  return `compiled.${encoded}`;
}

function runtimeHost(): RuntimeHost | undefined {
  const value: unknown = Reflect.get(globalThis, 'host');
  if (value === undefined) return undefined;
  if (value === null || typeof value !== 'object')
    throw new TypeError('Runtime host must be an object.');
  const registerCallback: unknown = Reflect.get(value, 'registerCallback');
  if (typeof registerCallback !== 'function')
    throw new TypeError('Runtime host must provide registerCallback.');
  const unregisterCallback: unknown = Reflect.get(value, 'unregisterCallback');
  if (typeof unregisterCallback !== 'function')
    throw new TypeError('Runtime host must provide unregisterCallback.');
  return value as RuntimeHost;
}

function operation(host: RuntimeHost, name: string): HostOperation {
  const value: unknown = Reflect.get(host, name);
  if (typeof value !== 'function')
    throw new TypeError(`Runtime host operation is unavailable: ${name}`);
  return value.bind(host) as HostOperation;
}

function operationMetadata(
  platform: Platform,
  typeName: string,
  component: ComponentMetadata,
  method: MethodMetadata,
): object {
  return {
    namespace: platform,
    typeName,
    protocolMajor: 1,
    protocolMinor: 0,
    componentId: component.id,
    method: method.name,
    decorators: method.decorators,
  };
}

function call(
  host: RuntimeHost,
  platform: Platform,
  component: ComponentMetadata,
  method: MethodMetadata,
  name: string,
  ...arguments_: readonly unknown[]
): unknown {
  return operation(host, name)(operationMetadata(platform, name, component, method), ...arguments_);
}

function commandRecord(value: unknown, label: string): Readonly<Record<string, unknown>> {
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new TypeError(`Invalid Paper command ${label}.`);
  return value as Readonly<Record<string, unknown>>;
}

function commandKeys(
  value: Readonly<Record<string, unknown>>,
  expected: readonly string[],
  label: string,
): void {
  const keys = Reflect.ownKeys(value);
  if (
    keys.length !== expected.length ||
    keys.some((key) => typeof key !== 'string' || !expected.includes(key))
  )
    throw new TypeError(`Invalid Paper command ${label}.`);
}

function commandString(value: unknown, label: string): string {
  if (typeof value !== 'string') throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}

function commandBoolean(value: unknown, label: string): boolean {
  if (typeof value !== 'boolean') throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}

function commandPromise<T>(
  value: unknown,
  label: string,
  validate: (result: unknown) => T,
): Promise<T> {
  if (!(value instanceof Promise)) throw new TypeError(`Invalid Paper command ${label} promise.`);
  return value.then(validate);
}

function commandNumber(value: unknown, label: string): number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value))
    throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}

function commandData(value: unknown, label: string, depth = 0): unknown {
  if (depth > 32) throw new TypeError(`Invalid Paper command ${label}.`);
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'boolean' ||
    (typeof value === 'number' && Number.isFinite(value))
  )
    return value;
  if (Array.isArray(value))
    return Object.freeze(value.map((item) => commandData(item, label, depth + 1)));
  if (typeof value !== 'object' || Reflect.ownKeys(value).some((key) => typeof key !== 'string'))
    throw new TypeError(`Invalid Paper command ${label}.`);
  const source = value as Readonly<Record<string, unknown>>;
  return Object.freeze(
    Object.fromEntries(
      Object.keys(source).map((key) => [key, commandData(source[key], label, depth + 1)]),
    ),
  );
}

function commandValues(value: unknown, label: string): Readonly<Record<string, unknown>> {
  const record = commandRecord(value, label);
  return commandData(record, label) as Readonly<Record<string, unknown>>;
}

function commandSender(value: unknown): PaperCommandSender {
  const rawSender = commandRecord(value, 'sender');
  const senderKeys = Object.hasOwn(rawSender, 'id') ? ['name', 'kind', 'id'] : ['name', 'kind'];
  commandKeys(rawSender, senderKeys, 'sender');
  const kind = rawSender.kind;
  if (kind !== 'player' && kind !== 'console' && kind !== 'other')
    throw new TypeError('Invalid Paper command sender kind.');
  const name = commandString(rawSender.name, 'sender name');
  return Object.hasOwn(rawSender, 'id')
    ? Object.freeze({ name, kind, id: commandString(rawSender.id, 'sender id') })
    : Object.freeze({ name, kind });
}

function commandPlayer(value: unknown): PaperCommandPlayer | null {
  if (value === null) return null;
  const player = commandRecord(value, 'player result');
  commandKeys(player, ['id', 'name', 'online'], 'player result');
  return Object.freeze({
    id: commandString(player.id, 'player id'),
    name: commandString(player.name, 'player name'),
    online: commandBoolean(player.online, 'player online state'),
  });
}

function commandItem(value: unknown): PaperCommandItem | null {
  if (value === null) return null;
  const item = commandRecord(value, 'item result');
  commandKeys(item, ['material', 'amount'], 'item result');
  if (typeof item.amount !== 'number' || !Number.isInteger(item.amount))
    throw new TypeError('Invalid Paper command item amount.');
  return Object.freeze({
    material: commandString(item.material, 'item material'),
    amount: item.amount,
  });
}

type ValidatedDescriptor =
  | null
  | boolean
  | number
  | string
  | ((...values: readonly unknown[]) => unknown)
  | readonly ValidatedDescriptor[]
  | { readonly [key: string]: ValidatedDescriptor };

function validateDescriptor(
  value: unknown,
  depth = 0,
  ancestors: ReadonlySet<object> = new Set(),
): ValidatedDescriptor {
  if (depth > 32) throw new TypeError('Paper descriptor nesting exceeds 32.');
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'boolean' ||
    (typeof value === 'number' && Number.isFinite(value))
  )
    return value;
  if (typeof value === 'function') return value as (...values: readonly unknown[]) => unknown;
  if (typeof value !== 'object' || value instanceof Uint8Array)
    throw new TypeError('Unsupported Paper descriptor value.');
  if (ancestors.has(value)) throw new TypeError('Paper descriptors cannot contain cycles.');
  const keys = Reflect.ownKeys(value);
  if (keys.some((key) => typeof key !== 'string'))
    throw new TypeError('Paper descriptors require string keys.');
  const nextAncestors = new Set(ancestors);
  nextAncestors.add(value);
  if (Array.isArray(value))
    return value.map((item) => validateDescriptor(item, depth + 1, nextAncestors));
  const prototype: unknown = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null)
    throw new TypeError('Unsupported Paper descriptor object.');
  const record = value as Readonly<Record<string, unknown>>;
  return Object.fromEntries(
    (keys as string[]).map((key) => {
      const item = record[key];
      if (item === undefined) throw new TypeError('Paper descriptors cannot contain undefined.');
      return [key, validateDescriptor(item, depth + 1, nextAncestors)];
    }),
  );
}

function rollbackCallbacks(host: RuntimeHost, names: readonly string[]): void {
  for (const name of names) {
    try {
      host.unregisterCallback(name);
    } catch {
      // Preserve the operation failure while attempting every rollback.
    }
  }
}

function encodeDescriptor(
  host: RuntimeHost,
  component: ComponentMetadata,
  method: MethodMetadata,
  callbacks: DescriptorCallbackState,
  registered: string[],
  value: ValidatedDescriptor,
): Data {
  if (typeof value === 'function') {
    const name = `${callbackId(component.id, method.name)}.${String(callbacks.sequence++)}`;
    register(host, name, (...values) => {
      if (values.length !== 1) throw new TypeError('Invalid Paper action callback arguments.');
      return Reflect.apply(value, undefined, [
        paperActionContext(host, component, method, callbacks, values[0]),
      ]);
    });
    registered.push(name);
    return callbackMarker(name);
  }
  if (value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) {
    const entries = value as readonly ValidatedDescriptor[];
    return entries.map((item) =>
      encodeDescriptor(host, component, method, callbacks, registered, item),
    );
  }
  const record = value as Readonly<Record<string, ValidatedDescriptor>>;
  return Object.fromEntries(
    Object.entries(record).map(([key, item]) => [
      key,
      encodeDescriptor(host, component, method, callbacks, registered, item),
    ]),
  );
}

function descriptorCommandPromise<T>(
  host: RuntimeHost,
  component: ComponentMetadata,
  method: MethodMetadata,
  callbacks: DescriptorCallbackState,
  value: unknown,
  operation_: (descriptor: Data) => unknown,
  label: string,
  validate: (result: unknown) => T,
): Promise<T> {
  const descriptor = validateDescriptor(value);
  const registered: string[] = [];
  try {
    return commandPromise(
      operation_(encodeDescriptor(host, component, method, callbacks, registered, descriptor)),
      label,
      validate,
    );
  } catch (failure) {
    rollbackCallbacks(host, registered);
    throw failure;
  }
}

function paperActionContext(
  host: RuntimeHost,
  component: ComponentMetadata,
  method: MethodMetadata,
  callbacks: DescriptorCallbackState,
  value: unknown,
): PaperActionContext {
  const raw = commandRecord(value, 'action context');
  const expected = [
    'token',
    'sender',
    'action',
    ...(Object.hasOwn(raw, 'slot') ? ['slot'] : []),
    ...(Object.hasOwn(raw, 'item') ? ['item'] : []),
  ];
  commandKeys(raw, expected, 'action context');
  const token = commandString(raw.token, 'action token');
  const action = raw.action;
  if (action !== 'click' && action !== 'left' && action !== 'right')
    throw new TypeError('Invalid Paper command action.');
  const item = Object.hasOwn(raw, 'item') ? commandItem(raw.item) : undefined;
  if (item === null) throw new TypeError('Invalid Paper command action item.');
  return Object.freeze({
    sender: commandSender(raw.sender),
    action,
    ...(Object.hasOwn(raw, 'slot') ? { slot: commandNumber(raw.slot, 'action slot') } : {}),
    ...(item === undefined ? {} : { item }),
    reply: (message: unknown) =>
      descriptorCommandPromise(
        host,
        component,
        method,
        callbacks,
        message,
        (descriptor) =>
          call(host, 'paper', component, method, 'paperCommandReply', token, descriptor),
        'reply result',
        (result) => commandBoolean(result, 'reply result'),
      ),
  });
}

function paperCommandContext(
  host: RuntimeHost,
  component: ComponentMetadata,
  method: MethodMetadata,
  callbacks: DescriptorCallbackState,
  value: unknown,
): PaperCommandContext {
  const raw = commandRecord(value, 'context');
  commandKeys(raw, ['token', 'sender', 'alias', 'input', 'arguments', 'options'], 'context');
  const token = commandString(raw.token, 'token');
  return Object.freeze({
    sender: commandSender(raw.sender),
    alias: commandString(raw.alias, 'alias'),
    input: commandString(raw.input, 'input'),
    arguments: commandValues(raw.arguments, 'arguments'),
    options: commandValues(raw.options, 'options'),
    reply: (message: unknown) =>
      descriptorCommandPromise(
        host,
        component,
        method,
        callbacks,
        message,
        (descriptor) =>
          call(host, 'paper', component, method, 'paperCommandReply', token, descriptor),
        'reply result',
        (result) => commandBoolean(result, 'reply result'),
      ),
    openInventory: (inventory: unknown) =>
      descriptorCommandPromise(
        host,
        component,
        method,
        callbacks,
        inventory,
        (descriptor) =>
          call(host, 'paper', component, method, 'paperCommandOpenInventory', token, descriptor),
        'open-inventory result',
        (result) => commandBoolean(result, 'open-inventory result'),
      ),
    giveItem: (item: unknown) =>
      descriptorCommandPromise(
        host,
        component,
        method,
        callbacks,
        item,
        (descriptor) =>
          call(host, 'paper', component, method, 'paperCommandGiveItem', token, descriptor),
        'give-item result',
        (result) => commandBoolean(result, 'give-item result'),
      ),
    findPlayer: (playerName: string) =>
      commandPromise(
        call(host, 'paper', component, method, 'paperCommandFindPlayer', token, playerName),
        'find-player result',
        commandPlayer,
      ),
    mainHand: () =>
      commandPromise(
        call(host, 'paper', component, method, 'paperCommandMainHand', token),
        'main-hand result',
        commandItem,
      ),
    takeMainHand: (material: string, amount: number) =>
      commandPromise(
        call(host, 'paper', component, method, 'paperCommandTakeMainHand', token, material, amount),
        'take-main-hand result',
        (result) => commandBoolean(result, 'take-main-hand result'),
      ),
  });
}

function executable(component: ComponentMetadata, constructors: ComponentRegistry): object {
  const constructor = constructors[component.id];
  if (typeof constructor !== 'function')
    throw new TypeError(`Compiler component constructor is unavailable: ${component.id}`);
  if (component.constructor.length > 0)
    throw new TypeError(
      `Runtime adapter cannot construct ${component.id} without generated providers.`,
    );
  return Reflect.construct(constructor, []);
}

function generatedEventName(decoratorName: string): string | undefined {
  return /^On(.+Event(?:_\d+)?)$/.exec(decoratorName)?.[1];
}

function decorator(method: MethodMetadata): MethodMetadata['decorators'][number] | undefined {
  return method.decorators.find(
    (item) =>
      [
        'EventHandler',
        'Command',
        'Subcommand',
        'Scheduled',
        'Interval',
        'Timeout',
        'PacketHandler',
        'OnPacketReceive',
        'OnPacketSend',
      ].includes(item.name) || generatedEventName(item.name) !== undefined,
  );
}

function eventDecorators(method: MethodMetadata): MethodMetadata['decorators'] {
  return method.decorators.filter(
    (item) => item.name === 'EventHandler' || generatedEventName(item.name) !== undefined,
  );
}

function firstString(method: MethodMetadata, fallback: string): string {
  const value = decorator(method)?.arguments[0];
  return typeof value === 'string' ? value : fallback;
}

function metadataRecord(value: unknown, label: string): Readonly<Record<string, unknown>> {
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new TypeError(`Invalid command ${label}.`);
  return value as Readonly<Record<string, unknown>>;
}

function metadataStrings(value: unknown, label: string): readonly string[] {
  if (!Array.isArray(value) || !value.every((item) => typeof item === 'string'))
    throw new TypeError(`Invalid command ${label}.`);
  return [...value];
}

function metadataString(value: unknown, fallback: string, label: string): string {
  if (value === undefined) return fallback;
  if (typeof value !== 'string') throw new TypeError(`Invalid command ${label}.`);
  return value;
}

function metadataBoolean(value: unknown, fallback: boolean, label: string): boolean {
  if (value === undefined) return fallback;
  if (typeof value !== 'boolean') throw new TypeError(`Invalid command ${label}.`);
  return value;
}

const commandParsers = new Set(['string', 'integer', 'number', 'boolean', 'player', 'material']);

function commandParser(value: unknown, fallback: string): string {
  const parser = metadataString(value, fallback, 'parser');
  if (!commandParsers.has(parser)) throw new TypeError(`Invalid command parser: ${parser}`);
  return parser;
}

interface CommandBinding {
  readonly binding: 'Argument' | 'Option' | 'Sender' | 'Context';
  readonly arguments: readonly unknown[];
  readonly index: number;
}

function commandBindings(method: MethodMetadata): readonly CommandBinding[] {
  return method.parameters
    .flatMap((parameter) => {
      if (
        parameter.index === undefined ||
        parameter.token.kind !== 'token' ||
        !('value' in parameter.token)
      )
        return [];
      const value = parameter.token.value;
      if (value === null || typeof value !== 'object' || Array.isArray(value)) return [];
      const record = value as Readonly<Record<string, unknown>>;
      const binding = record.binding;
      const arguments_ = record.arguments;
      if (
        (binding !== 'Argument' &&
          binding !== 'Option' &&
          binding !== 'Sender' &&
          binding !== 'Context') ||
        !Array.isArray(arguments_)
      )
        return [];
      const commandBinding: CommandBinding['binding'] = binding;
      return [{ binding: commandBinding, arguments: arguments_, index: parameter.index }];
    })
    .sort((left, right) => left.index - right.index);
}

function commandBindingName(binding: CommandBinding): string {
  const name = binding.arguments[0];
  if (typeof name !== 'string' || !/^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(name))
    throw new TypeError(`Invalid @${binding.binding} command binding name.`);
  return name;
}

function commandSuggestions(value: unknown, label: string): readonly string[] {
  const suggestions = metadataStrings(value, label);
  if (
    suggestions.some((suggestion) => suggestion.trim().length === 0) ||
    new Set(suggestions).size !== suggestions.length
  )
    throw new TypeError(`Invalid command ${label}: suggestions must be unique and nonblank.`);
  return suggestions;
}

function commandOptionAliases(value: unknown, occupied: Set<string>): readonly string[] {
  const aliases = metadataStrings(value, 'Option aliases').map((value) =>
    value.startsWith('-') ? value.slice(1) : value,
  );
  for (const alias of aliases) {
    if (!/^[A-Za-z0-9]$/.test(alias))
      throw new TypeError('Invalid command option alias: expected one alphanumeric character.');
    if (occupied.has(alias)) throw new TypeError(`Duplicate command option alias: ${alias}`);
    occupied.add(alias);
  }
  return aliases;
}

function commandParameterDescriptors(method: MethodMetadata): {
  readonly arguments: readonly CommandArgumentDescriptor[];
  readonly options: readonly CommandOptionDescriptor[];
} {
  const arguments_: CommandArgumentDescriptor[] = [];
  const options: CommandOptionDescriptor[] = [];
  const argumentNames = new Set<string>();
  const optionNames = new Set<string>();
  const optionAliases = new Set<string>();
  for (const binding of commandBindings(method)) {
    if (binding.binding !== 'Argument' && binding.binding !== 'Option') continue;
    const name = commandBindingName(binding);
    const rawOptions =
      binding.arguments[1] === undefined
        ? {}
        : metadataRecord(binding.arguments[1], `${binding.binding} options`);
    const suggestions =
      rawOptions.suggestions === undefined
        ? []
        : commandSuggestions(rawOptions.suggestions, `${binding.binding} suggestions`);
    if (binding.binding === 'Argument') {
      if (argumentNames.has(name)) throw new TypeError(`Duplicate command argument name: ${name}`);
      argumentNames.add(name);
      arguments_.push({ name, parser: commandParser(rawOptions.parser, 'string'), suggestions });
    } else {
      if (optionNames.has(name)) throw new TypeError(`Duplicate command option name: ${name}`);
      optionNames.add(name);
      options.push({
        name,
        parser: commandParser(rawOptions.parser, 'boolean'),
        aliases:
          rawOptions.aliases === undefined
            ? []
            : commandOptionAliases(rawOptions.aliases, optionAliases),
        suggestions,
        required: metadataBoolean(rawOptions.required, false, 'Option required state'),
      });
    }
  }
  return { arguments: arguments_, options };
}

function commandRoot(value: string): string {
  const root = value.trim().toLowerCase();
  if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(root))
    throw new TypeError('Command syntax must begin with a valid literal root.');
  return root;
}

function commandAliases(value: unknown): readonly string[] {
  const aliases = metadataStrings(value, 'command aliases').map((alias) => {
    const normalized = alias.toLowerCase();
    if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(normalized))
      throw new TypeError(`Invalid command alias: ${alias}`);
    return normalized;
  });
  if (new Set(aliases).size !== aliases.length)
    throw new TypeError('Invalid command aliases: aliases must be unique.');
  return aliases;
}

function fullCommandSyntax(value: string): { readonly root: string; readonly syntax: string } {
  const match = /^\s*(\S+)(?:\s+([\s\S]*?))?\s*$/.exec(value);
  if (match?.[1] === undefined) throw new TypeError('Command syntax must not be empty.');
  return { root: commandRoot(match[1]), syntax: match[2] ?? '' };
}

function validateCommandSyntax(
  syntax: string,
  arguments_: readonly CommandArgumentDescriptor[],
): void {
  if (syntax.length === 0) {
    if (arguments_.length > 0)
      throw new TypeError('Command arguments contain names absent from syntax.');
    return;
  }
  const argumentsByName = new Map(arguments_.map((argument) => [argument.name, argument]));
  const used = new Set<string>();
  let optional = false;
  const tokens = syntax.split(/\s+/u);
  for (const [index, token] of tokens.entries()) {
    const required = token.startsWith('<') && token.endsWith('>');
    const optionalToken = token.startsWith('[') && token.endsWith(']');
    if (!required && !optionalToken) {
      if (/[<>[\]]/u.test(token))
        throw new TypeError(`Command syntax has malformed token: ${token}`);
      if (optional) throw new TypeError('Command syntax literal follows an optional argument.');
      continue;
    }
    let argumentName = token.slice(1, -1);
    const greedy = argumentName.endsWith('...');
    if (greedy) argumentName = argumentName.slice(0, -3);
    const argument = argumentsByName.get(argumentName);
    if (argument === undefined || used.has(argumentName))
      throw new TypeError(
        `Command syntax references an unknown or duplicate argument: ${argumentName}`,
      );
    used.add(argumentName);
    if (optional && required)
      throw new TypeError('Command syntax required argument follows an optional one.');
    if (greedy && index !== tokens.length - 1)
      throw new TypeError('Command syntax greedy argument must be last.');
    if (greedy && argument.parser !== 'string')
      throw new TypeError('Command syntax greedy argument must use string parser.');
    optional ||= optionalToken;
  }
  if (used.size !== argumentsByName.size)
    throw new TypeError('Command arguments contain names absent from syntax.');
}

function commandRoute(method: MethodMetadata): CommandRoute {
  const declaration = method.decorators.find(
    (item) => item.name === 'Command' || item.name === 'Subcommand',
  );
  if (declaration === undefined)
    throw new TypeError(`Command declaration is missing for ${method.name}.`);
  const first = declaration.arguments[0];
  if (typeof first !== 'string') throw new TypeError('Command syntax must be a string.');
  const explicitSubcommand =
    declaration.name === 'Subcommand' && typeof declaration.arguments[1] === 'string';
  const parsed = explicitSubcommand
    ? {
        root: commandRoot(first),
        syntax: (declaration.arguments[1] as string).trim(),
      }
    : fullCommandSyntax(first);
  const rawOptions = explicitSubcommand ? declaration.arguments[2] : declaration.arguments[1];
  const options =
    rawOptions === undefined ? {} : metadataRecord(rawOptions, `${declaration.name} options`);
  const parameters = commandParameterDescriptors(method);
  validateCommandSyntax(parsed.syntax, parameters.arguments);
  const sender = metadataString(options.sender, 'any', 'sender restriction');
  if (sender !== 'any' && sender !== 'player' && sender !== 'console')
    throw new TypeError(`Invalid command sender restriction: ${sender}`);
  return {
    root: parsed.root,
    aliases: options.aliases === undefined ? [] : commandAliases(options.aliases),
    descriptor: {
      syntax: parsed.syntax,
      description: metadataString(options.description, '', 'description'),
      permission: metadataString(options.permission, '', 'permission'),
      sender,
      arguments: parameters.arguments,
      options: parameters.options,
    },
  };
}

function commandInvocationValues(
  method: MethodMetadata,
  context: PaperCommandContext,
): readonly unknown[] {
  const bindings = commandBindings(method);
  if (bindings.length === 0) return [context];
  const values: unknown[] = Array.from({ length: (bindings.at(-1)?.index ?? -1) + 1 });
  for (const binding of bindings) {
    if (binding.binding === 'Argument')
      values[binding.index] = context.arguments[commandBindingName(binding)];
    else if (binding.binding === 'Option')
      values[binding.index] = context.options[commandBindingName(binding)];
    else if (binding.binding === 'Sender') values[binding.index] = context.sender;
    else values[binding.index] = context;
  }
  return values;
}

function register(
  host: RuntimeHost | undefined,
  name: string,
  callback: (...values: readonly Data[]) => unknown,
): string {
  if (host !== undefined && !host.registerCallback(name, callback))
    throw new Error(`Runtime rejected callback registration: ${name}`);
  return name;
}

/** Installs one compiler-authoritative adapter for the selected platform registry. */
export function installRuntimeAdapter(
  metadata: CompilerMetadata,
  platform: Platform,
  constructors: ComponentRegistry,
): Readonly<Record<LifecycleStage, (context: RuntimeLifecycleContext) => Promise<void>>> {
  const paperRoutes = new Map<MethodMetadata, CommandRoute>();
  if (platform === 'paper') {
    const aliasesByRoot = new Map<string, readonly string[]>();
    for (const component of metadata.components) {
      if (component.platform !== 'common' && component.platform !== platform) continue;
      for (const method of component.methods) {
        if (method.invocation !== 'command') continue;
        const route = commandRoute(method);
        const aliases = aliasesByRoot.get(route.root);
        if (
          aliases !== undefined &&
          (aliases.length !== route.aliases.length ||
            aliases.some((alias, index) => alias !== route.aliases[index]))
        )
          throw new TypeError(`Command aliases must agree for shared command root ${route.root}.`);
        aliasesByRoot.set(route.root, route.aliases);
        paperRoutes.set(method, route);
      }
    }
  }
  const host = runtimeHost();
  const instances = new Map<string, object>();
  const lifecycle = new Map<LifecycleStage, (() => unknown)[]>();
  const registrations: Promise<unknown>[] = [];

  for (const component of metadata.components) {
    if (component.platform !== 'common' && component.platform !== platform) continue;
    const target = executable(component, constructors);
    instances.set(component.id, target);
    for (const method of component.methods) {
      const implementation: unknown = Reflect.get(target, method.name);
      if (typeof implementation !== 'function')
        throw new TypeError(`Compiler executable is missing: ${component.id}.${method.name}`);
      const invoke = (...values: readonly unknown[]): unknown =>
        Reflect.apply(implementation, target, values);
      if (method.lifecycle !== undefined) {
        const methods = lifecycle.get(method.lifecycle) ?? [];
        methods.push(() => invoke());
        lifecycle.set(method.lifecycle, methods);
      }
      if (method.invocation === undefined) continue;
      const route = paperRoutes.get(method);
      const callbackName = callbackId(component.id, method.name);
      const descriptorCallbacks: DescriptorCallbackState = { sequence: 0 };
      const commandInvoke = (...values: readonly Data[]): unknown => {
        if (values.length !== 1) throw new TypeError('Invalid Paper command callback arguments.');
        if (host === undefined) throw new TypeError('Runtime host is unavailable.');
        const context = paperCommandContext(
          host,
          component,
          method,
          descriptorCallbacks,
          values[0],
        );
        return invoke(...commandInvocationValues(method, context));
      };
      const eventInvoke = (...values: readonly Data[]): unknown => {
        const hook: unknown = Reflect.get(globalThis, paperCallbackHook);
        return typeof hook === 'function'
          ? Reflect.apply(hook, undefined, [invoke, values])
          : invoke(...values);
      };
      const callback = register(
        host,
        callbackName,
        platform === 'paper' && method.invocation === 'command' && host !== undefined
          ? commandInvoke
          : platform === 'paper' && method.invocation === 'event'
            ? eventInvoke
            : invoke,
      );
      if (host === undefined) continue;
      try {
        if (method.invocation === 'event') {
          for (const eventDeclaration of eventDecorators(method)) {
            const generated = generatedEventName(eventDeclaration.name);
            const event =
              generated ??
              (typeof eventDeclaration.arguments[0] === 'string'
                ? eventDeclaration.arguments[0]
                : method.name);
            const priorityValue = eventDeclaration.arguments[generated === undefined ? 1 : 0];
            const receiveCancelledValue =
              eventDeclaration.arguments[generated === undefined ? 2 : 1];
            const priority = typeof priorityValue === 'string' ? priorityValue : 'NORMAL';
            const receiveCancelled =
              typeof receiveCancelledValue === 'boolean' ? receiveCancelledValue : false;
            if (platform === 'paper')
              call(
                host,
                platform,
                component,
                method,
                'paperSubscribeEvent',
                event,
                priority,
                receiveCancelled,
                callbackMarker(callback),
              );
            else
              call(
                host,
                platform,
                component,
                method,
                'velocitySubscribeEvent',
                event,
                0,
                callbackMarker(callback),
              );
          }
        } else if (method.invocation === 'command') {
          if (platform === 'paper') {
            if (route === undefined) throw new TypeError('Paper command route is unavailable.');
            const registration = call(
              host,
              platform,
              component,
              method,
              'paperRegisterCommand',
              route.root,
              route.aliases,
              route.descriptor,
              callbackMarker(callback),
            );
            if (!(registration instanceof Promise))
              throw new TypeError('Invalid Paper command registration promise.');
            registrations.push(
              registration.catch((failure: unknown) => {
                rollbackCallbacks(host, [callback]);
                throw failure;
              }),
            );
          } else {
            call(
              host,
              platform,
              component,
              method,
              'velocityRegisterCommand',
              fullCommandSyntax(firstString(method, method.name)).root,
              [],
              callbackMarker(callback),
            );
          }
        } else if (method.invocation === 'task') {
          call(
            host,
            platform,
            component,
            method,
            platform === 'paper' ? 'paperScheduleGlobal' : 'velocitySchedule',
            ...(platform === 'paper' ? [callbackMarker(callback)] : [0, callbackMarker(callback)]),
          );
        } else if (platform === 'paper') {
          call(host, platform, component, method, 'paperSubscribePacket', callbackMarker(callback));
        }
      } catch (failure) {
        rollbackCallbacks(host, [callback]);
        throw failure;
      }
    }
  }

  if (host !== undefined) {
    for (const service of metadata.communication.services) {
      const target = instances.get(service.componentId);
      if (target === undefined) continue;
      const callback = register(host, `service.${service.id}`, (operationName, values) => {
        if (
          typeof operationName !== 'string' ||
          !Array.isArray(values) ||
          !service.methods.includes(operationName)
        )
          throw new TypeError(`Invalid service operation for ${service.id}.`);
        const method: unknown = Reflect.get(target, operationName);
        if (typeof method !== 'function')
          throw new TypeError(`Missing service method ${operationName}.`);
        return Reflect.apply(method, target, values);
      });
      try {
        operation(host, 'shamooProvideService')(service.id, service.version, callback);
      } catch (failure) {
        rollbackCallbacks(host, [callback]);
        throw failure;
      }
    }
  }

  const run = async (stage: LifecycleStage): Promise<void> => {
    await Promise.all(registrations);
    for (const method of lifecycle.get(stage) ?? []) await method();
  };
  return Object.freeze({
    load: () => run('load'),
    enable: () => run('enable'),
    ready: () => run('ready'),
    drain: () => run('drain'),
    disable: () => run('disable'),
    unload: () => run('unload'),
  });
}

function lifecycleContext(value: unknown): RuntimeLifecycleContext {
  if (value === null || typeof value !== 'object')
    throw new TypeError('Runtime lifecycle context must be an object.');
  const context = value as Record<string, unknown>;
  if (
    typeof context.plugin !== 'string' ||
    (context.platform !== 'paper' && context.platform !== 'velocity') ||
    context.metadata === null ||
    typeof context.metadata !== 'object'
  )
    throw new TypeError('Runtime lifecycle context is invalid.');
  return {
    plugin: context.plugin,
    platform: context.platform,
    metadata: context.metadata as CompilerMetadata,
  };
}

/** Creates lifecycle exports that initialize exactly one lazy platform adapter. */
export function createRuntimeLifecycle(
  loaders: Readonly<Partial<Record<Platform, PlatformLoader>>>,
): Readonly<Record<LifecycleStage, (context: RuntimeLifecycleContext) => Promise<void>>> {
  let initialized:
    | (Pick<RuntimeLifecycleContext, 'plugin' | 'platform'> & {
        readonly adapter: Promise<ReturnType<typeof installRuntimeAdapter>>;
      })
    | undefined;
  const initialize = (
    rawContext: RuntimeLifecycleContext,
  ): Promise<ReturnType<typeof installRuntimeAdapter>> => {
    const context = lifecycleContext(rawContext);
    if (initialized !== undefined) {
      if (initialized.plugin !== context.plugin || initialized.platform !== context.platform)
        throw new TypeError('Runtime lifecycle context changed after adapter initialization.');
      return initialized.adapter;
    }
    const loader = loaders[context.platform];
    if (loader === undefined)
      throw new TypeError(`Plugin does not target the ${context.platform} platform.`);
    const adapter = loader().then((registry) =>
      installRuntimeAdapter(context.metadata, context.platform, registry.components),
    );
    initialized = { plugin: context.plugin, platform: context.platform, adapter };
    return adapter;
  };
  const run = async (stage: LifecycleStage, context: RuntimeLifecycleContext): Promise<void> => {
    const installed = await initialize(context);
    await installed[stage](context);
  };
  return Object.freeze({
    load: (context) => run('load', context),
    enable: (context) => run('enable', context),
    ready: (context) => run('ready', context),
    drain: (context) => run('drain', context),
    disable: (context) => run('disable', context),
    unload: (context) => run('unload', context),
  });
}
