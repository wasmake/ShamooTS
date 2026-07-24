import type { CompilerManifest, ComponentMetadata, MethodMetadata } from '@shamoo/metadata';

const PLATFORM_BINDING_PROTOCOL_MAJOR = 1;
const PLATFORM_BINDING_PROTOCOL_MINOR = 0;

type Data =
  | null
  | boolean
  | number
  | string
  | Uint8Array
  | readonly Data[]
  | { readonly [key: string]: Data };
type HostOperation = (...arguments_: readonly unknown[]) => unknown;
interface RuntimeHost {
  readonly registerCallback: (
    name: string,
    callback: (...values: readonly Data[]) => unknown,
  ) => boolean;
}
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
  metadata: object,
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
        operation(host, 'paperCommandReply')(metadata, token, message),
        'reply result',
      ),
    findPlayer: (playerName: string) =>
      commandPlayer(operation(host, 'paperCommandFindPlayer')(metadata, token, playerName)),
    mainHand: () => commandItem(operation(host, 'paperCommandMainHand')(metadata, token)),
    takeMainHand: (material: string, amount: number) =>
      commandBoolean(
        operation(host, 'paperCommandTakeMainHand')(metadata, token, material, amount),
        'take-main-hand result',
      ),
  });
}

function executable(
  component: ComponentMetadata,
  exports: Readonly<Record<string, unknown>>,
): object | undefined {
  const constructor = exports[component.name];
  if (typeof constructor !== 'function') return undefined;
  if (component.constructor.length > 0)
    throw new TypeError(
      `Runtime adapter cannot construct ${component.id} without generated providers.`,
    );
  return Reflect.construct(constructor, []) as object;
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

/** Installs the compiler-authoritative metadata adapter consumed by ShamooRuntime. */
export function installRuntimeAdapter(
  manifest: CompilerManifest,
  platform: 'paper' | 'velocity',
  exports: Readonly<Record<string, unknown>>,
): Readonly<Record<string, () => Promise<void>>> {
  const host = runtimeHost();
  const instances = new Map<string, object>();
  const lifecycle = new Map<string, (() => unknown)[]>();
  const callbacks = new Set<string>();
  const register = (name: string, callback: (...values: readonly Data[]) => unknown): string => {
    if (host === undefined) return name;
    if (callbacks.has(name)) return name;
    host.registerCallback(name, callback);
    callbacks.add(name);
    return name;
  };
  const call = (name: string, metadata: object, ...arguments_: readonly unknown[]): unknown =>
    host === undefined
      ? undefined
      : operation(host, name)(
          {
            ...metadata,
            namespace: platform,
            typeName: name,
            protocolMajor: PLATFORM_BINDING_PROTOCOL_MAJOR,
            protocolMinor: PLATFORM_BINDING_PROTOCOL_MINOR,
          },
          ...arguments_,
        );

  for (const component of manifest.components) {
    if (component.platform !== 'common' && component.platform !== platform) continue;
    const target = executable(component, exports);
    if (target === undefined) continue;
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
      const metadata = {
        componentId: component.id,
        method: method.name,
        decorators: method.decorators,
      };
      const commandInvoke = (...values: readonly Data[]): unknown => {
        if (values.length !== 1) throw new TypeError('Invalid Paper command callback arguments.');
        if (host === undefined) throw new TypeError('Runtime host is unavailable.');
        return invoke(paperCommandContext(host, metadata, values[0]));
      };
      const callback = register(
        `compiled.${component.id}.${method.name}`,
        platform === 'paper' && method.invocation === 'command' && host !== undefined
          ? commandInvoke
          : invoke,
      );
      const declaration = decorator(method);
      if (method.invocation === 'event') {
        const event =
          declaration?.name.startsWith('On') === true && declaration.name.endsWith('Event')
            ? declaration.name.slice(2)
            : firstString(method, method.name);
        if (platform === 'paper')
          call('paperSubscribeEvent', metadata, event, 'NORMAL', false, callbackMarker(callback));
        else call('velocitySubscribeEvent', metadata, event, 0, callbackMarker(callback));
      } else if (method.invocation === 'command') {
        const command = firstString(method, method.name);
        if (platform === 'paper')
          call('paperRegisterCommand', metadata, command, [], callbackMarker(callback));
        else call('velocityRegisterCommand', metadata, command, [], callbackMarker(callback));
      } else if (method.invocation === 'task') {
        if (platform === 'paper') call('paperScheduleGlobal', metadata, callbackMarker(callback));
        else call('velocitySchedule', metadata, 0, callbackMarker(callback));
      } else if (platform === 'paper') {
        call('paperSubscribePacket', metadata, callbackMarker(callback));
      }
    }
  }

  if (host !== undefined) {
    for (const service of manifest.communication?.services ?? []) {
      const target = instances.get(service.componentId);
      if (target === undefined) continue;
      const callback = register(`service.${service.id}`, (operationName, values) => {
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

  const defaultExport = exports.default;
  const entrypoint =
    defaultExport !== null && typeof defaultExport === 'object'
      ? (defaultExport as Readonly<Record<string, unknown>>)
      : exports;
  const aliases: Readonly<Record<string, readonly string[]>> = {
    load: ['load', 'onLoad'],
    enable: platform === 'velocity' ? ['start', 'enable', 'onEnable'] : ['enable', 'onEnable'],
    ready: ['ready', 'onReady'],
    drain: ['drain', 'onDrain'],
    disable: platform === 'velocity' ? ['stop', 'disable', 'onDisable'] : ['disable', 'onDisable'],
    unload: ['unload', 'onUnload'],
  };
  return Object.freeze(
    Object.fromEntries(
      Object.entries(aliases).map(([stage, names]) => [
        stage,
        async () => {
          const hook = names
            .map((name) => entrypoint[name])
            .find((value) => typeof value === 'function');
          if (typeof hook === 'function') await Reflect.apply(hook, defaultExport ?? exports, []);
          for (const method of lifecycle.get(stage) ?? []) await method();
        },
      ]),
    ),
  );
}
