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
  readonly kind: 'player' | 'other';
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
  readonly arguments: readonly string[];
  reply(message: string): boolean;
  findPlayer(name: string): PaperCommandPlayer | null;
  mainHand(): PaperCommandItem | null;
  takeMainHand(material: string, amount: number): boolean;
}

const callbackMarker = (name: string): { readonly $callback: string } => ({ $callback: name });
const callbackEncoder = new TextEncoder();

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

function paperCommandContext(
  host: RuntimeHost,
  component: ComponentMetadata,
  method: MethodMetadata,
  value: unknown,
): PaperCommandContext {
  const raw = commandRecord(value, 'context');
  commandKeys(raw, ['token', 'sender', 'alias', 'arguments'], 'context');
  const token = commandString(raw.token, 'token');
  const rawSender = commandRecord(raw.sender, 'sender');
  const senderKeys = Object.hasOwn(rawSender, 'id') ? ['name', 'kind', 'id'] : ['name', 'kind'];
  commandKeys(rawSender, senderKeys, 'sender');
  const kind = rawSender.kind;
  if (kind !== 'player' && kind !== 'other')
    throw new TypeError('Invalid Paper command sender kind.');
  const name = commandString(rawSender.name, 'sender name');
  const sender: PaperCommandSender = Object.hasOwn(rawSender, 'id')
    ? Object.freeze({ name, kind, id: commandString(rawSender.id, 'sender id') })
    : Object.freeze({ name, kind });
  if (
    !Array.isArray(raw.arguments) ||
    !raw.arguments.every((argument) => typeof argument === 'string')
  )
    throw new TypeError('Invalid Paper command arguments.');
  const arguments_ = Object.freeze([...raw.arguments]);
  return Object.freeze({
    sender,
    alias: commandString(raw.alias, 'alias'),
    arguments: arguments_,
    reply: (message: string) =>
      commandBoolean(
        call(host, 'paper', component, method, 'paperCommandReply', token, message),
        'reply result',
      ),
    findPlayer: (playerName: string) =>
      commandPlayer(
        call(host, 'paper', component, method, 'paperCommandFindPlayer', token, playerName),
      ),
    mainHand: () =>
      commandItem(call(host, 'paper', component, method, 'paperCommandMainHand', token)),
    takeMainHand: (material: string, amount: number) =>
      commandBoolean(
        call(host, 'paper', component, method, 'paperCommandTakeMainHand', token, material, amount),
        'take-main-hand result',
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
      ].includes(item.name) ||
      (item.name.startsWith('On') && item.name.endsWith('Event')),
  );
}

function firstString(method: MethodMetadata, fallback: string): string {
  const value = decorator(method)?.arguments[0];
  return typeof value === 'string' ? value : fallback;
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
  const host = runtimeHost();
  const instances = new Map<string, object>();
  const lifecycle = new Map<LifecycleStage, (() => unknown)[]>();

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
      const callbackName = callbackId(component.id, method.name);
      const commandInvoke = (...values: readonly Data[]): unknown => {
        if (values.length !== 1) throw new TypeError('Invalid Paper command callback arguments.');
        if (host === undefined) throw new TypeError('Runtime host is unavailable.');
        return invoke(paperCommandContext(host, component, method, values[0]));
      };
      const callback = register(
        host,
        callbackName,
        platform === 'paper' && method.invocation === 'command' && host !== undefined
          ? commandInvoke
          : invoke,
      );
      if (host === undefined) continue;
      const declaration = decorator(method);
      if (method.invocation === 'event') {
        const event =
          declaration?.name.startsWith('On') === true && declaration.name.endsWith('Event')
            ? declaration.name.slice(2)
            : firstString(method, method.name);
        if (platform === 'paper')
          call(
            host,
            platform,
            component,
            method,
            'paperSubscribeEvent',
            event,
            'NORMAL',
            false,
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
      } else if (method.invocation === 'command') {
        const command = firstString(method, method.name);
        call(
          host,
          platform,
          component,
          method,
          platform === 'paper' ? 'paperRegisterCommand' : 'velocityRegisterCommand',
          command,
          [],
          callbackMarker(callback),
        );
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
      operation(host, 'shamooProvideService')(service.id, service.version, callback);
    }
  }

  const run = async (stage: LifecycleStage): Promise<void> => {
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
