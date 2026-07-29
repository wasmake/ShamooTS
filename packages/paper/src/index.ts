import { PlatformKind, type Platform, type PlatformCapability } from '@shamoo/core';
import type {
  CommandParser,
  CommandSender,
  Context as CommandContext,
  Item as CommandItem,
  Player as CommandPlayer,
} from '@shamoo/commands';
import type {
  BinaryRequestOptions,
  BinaryRequestTransport,
  TransportAvailability,
} from '@shamoo/communication';
import { definePlatform } from '@shamoo/platform';
import { createToken, type Provider } from '@shamoo/di';
import { invokePaperCallback } from '@shamoo/paper-raw';
import type {
  Entity,
  GeneratedEventCancellabilityMap,
  GeneratedEventMap,
  GlobalRegionScheduler,
  PaperEntrypointContext,
  Player,
  ScheduledTask,
} from '@shamoo/paper-raw';

export interface PaperEntrypoint {
  enable(context: PaperEntrypointContext): void | Promise<void>;
  disable?(context: PaperEntrypointContext): void | Promise<void>;
}
export function definePaperEntrypoint(entrypoint: PaperEntrypoint): PaperEntrypoint {
  return Object.freeze(entrypoint);
}
export function createPaperPlatform(
  capabilities: Iterable<PlatformCapability> = [],
  name = 'Paper',
): Platform {
  return definePlatform({
    kind: PlatformKind.PAPER,
    name,
    capabilities,
  });
}

export interface MutablePaperEvent<T> {
  readonly event: T;
  readonly cancelled: boolean;
  setCancelled(cancelled: boolean): void;
}
export interface PaperEventContext<T> {
  readonly event: T;
}
export type PaperEventType = keyof GeneratedEventMap;
export type RegisteredPaperEvent<Name extends PaperEventType> =
  GeneratedEventCancellabilityMap[Name] extends true
    ? MutablePaperEvent<GeneratedEventMap[Name]>
    : PaperEventContext<GeneratedEventMap[Name]>;
export type PaperEventHandler<Name extends PaperEventType> = (
  context: RegisteredPaperEvent<Name>,
) => void | Promise<void>;
export interface PaperEventRegistry {
  on<Name extends PaperEventType>(type: Name, handler: PaperEventHandler<Name>): () => void;
}

export type PaperCommandSender = CommandSender;
export type PaperCommandPlayer = CommandPlayer;
export type PaperCommandItem = CommandItem;

export type PaperAction = 'click' | 'left' | 'right';
export type PaperActionCallback = (context: PaperActionContext) => unknown;

export interface PaperActionContext {
  readonly sender: PaperCommandSender;
  readonly action: PaperAction;
  readonly slot?: number;
  readonly item?: PaperCommandItem;
  reply(message: TextLike): Promise<boolean>;
}

export type ClickActionDescriptor =
  | {
      readonly action: 'open-url' | 'run-command' | 'suggest-command' | 'copy-to-clipboard';
      readonly value: string;
    }
  | { readonly action: 'change-page'; readonly value: number }
  | {
      readonly action: 'callback';
      readonly callback: PaperActionCallback;
      readonly uses?: number;
      readonly lifetimeSeconds?: number;
    };

export interface TextStyle {
  readonly color?: string;
  readonly font?: string;
  readonly bold?: boolean;
  readonly italic?: boolean;
  readonly underlined?: boolean;
  readonly strikethrough?: boolean;
  readonly obfuscated?: boolean;
  readonly insertion?: string;
}

export interface TextOptions extends TextStyle {
  readonly children?: readonly TextLike[];
  readonly click?: ClickActionDescriptor;
}

export interface TextDescriptor extends TextStyle {
  readonly kind: 'text';
  readonly content: string;
  readonly children?: readonly TextLike[];
  readonly click?: ClickActionDescriptor;
}

export interface MiniMessageDescriptor {
  readonly kind: 'mini-message';
  readonly content: string;
  readonly placeholders?: Readonly<Record<string, TextLike>>;
  readonly miniPlaceholders?: boolean;
}

export interface MiniMessageOptions {
  readonly placeholders?: Readonly<Record<string, TextLike>>;
  /** Resolve audience and global tags from MiniPlaceholders when that plugin is installed. */
  readonly miniPlaceholders?: boolean;
}

export interface LegacyTextDescriptor {
  readonly kind: 'legacy';
  readonly content: string;
  readonly character: string;
}

export type TextLike = string | TextDescriptor | MiniMessageDescriptor | LegacyTextDescriptor;

function callbackBound(value: number | undefined, name: string, maximum: number): void {
  if (value !== undefined && (!Number.isSafeInteger(value) || value < 1 || value > maximum))
    throw new TypeError(`${name} must be an integer from 1 through ${String(maximum)}.`);
}

function clickValue(click: Exclude<ClickActionDescriptor, { readonly action: 'callback' }>): void {
  if (click.action === 'change-page') {
    if (
      !Number.isSafeInteger(click.value) ||
      click.value < -2_147_483_648 ||
      click.value > 2_147_483_647
    )
      throw new TypeError('Change-page value must be a 32-bit integer.');
  } else if (
    typeof click.value !== 'string' ||
    click.value.trim().length === 0 ||
    click.value.length > 32_767
  ) {
    throw new TypeError('Click action value must be bounded nonblank text.');
  }
}

export function text(content: string, options: TextOptions = {}): TextDescriptor {
  if (options.click?.action === 'callback') {
    callbackBound(options.click.uses, 'Callback uses', 1_000);
    callbackBound(options.click.lifetimeSeconds, 'Callback lifetimeSeconds', 3_600);
  } else if (options.click !== undefined) clickValue(options.click);
  return Object.freeze({
    kind: 'text',
    content,
    ...(options.color === undefined ? {} : { color: options.color }),
    ...(options.font === undefined ? {} : { font: options.font }),
    ...(options.bold === undefined ? {} : { bold: options.bold }),
    ...(options.italic === undefined ? {} : { italic: options.italic }),
    ...(options.underlined === undefined ? {} : { underlined: options.underlined }),
    ...(options.strikethrough === undefined ? {} : { strikethrough: options.strikethrough }),
    ...(options.obfuscated === undefined ? {} : { obfuscated: options.obfuscated }),
    ...(options.insertion === undefined ? {} : { insertion: options.insertion }),
    ...(options.children === undefined || options.children.length === 0
      ? {}
      : { children: Object.freeze([...options.children]) }),
    ...(options.click === undefined ? {} : { click: Object.freeze({ ...options.click }) }),
  });
}

export function miniMessage(
  content: string,
  options: MiniMessageOptions = {},
): MiniMessageDescriptor {
  const placeholders = options.placeholders === undefined ? undefined : { ...options.placeholders };
  if (
    placeholders !== undefined &&
    Object.keys(placeholders).some((key) => key.trim().length === 0)
  )
    throw new TypeError('MiniMessage placeholder keys must be nonblank.');
  return Object.freeze({
    kind: 'mini-message',
    content,
    ...(placeholders === undefined || Object.keys(placeholders).length === 0
      ? {}
      : { placeholders: Object.freeze(placeholders) }),
    ...(options.miniPlaceholders === undefined
      ? {}
      : { miniPlaceholders: options.miniPlaceholders }),
  });
}

export function legacyText(content: string, character = '&'): LegacyTextDescriptor {
  if (character !== '&' && character !== '§')
    throw new TypeError("Legacy text character must be '&' or the section sign.");
  return Object.freeze({ kind: 'legacy', content, character });
}

export interface ItemActionDescriptor {
  readonly left?: PaperActionCallback;
  readonly right?: PaperActionCallback;
  readonly preventDefault?: boolean;
}

export type ActionDescriptor = ItemActionDescriptor;

export interface ItemDescriptor {
  readonly kind: 'item';
  readonly material: string;
  readonly amount: number;
  readonly lore: readonly TextLike[];
  readonly name?: TextLike;
  readonly actions?: ItemActionDescriptor;
}

export interface ItemOptions {
  readonly amount?: number;
  readonly lore?: readonly TextLike[];
  readonly name?: TextLike;
  readonly actions?: ItemActionDescriptor;
}

export function item(material: string, options: ItemOptions = {}): ItemDescriptor {
  if (material.trim().length === 0 || material.length > 32_767)
    throw new TypeError('Item material must be bounded nonblank text.');
  const amount = options.amount ?? 1;
  if (!Number.isSafeInteger(amount) || amount < 1 || amount > 99)
    throw new TypeError('Item amount must be an integer from 1 through 99.');
  const lore = options.lore ?? [];
  if (lore.length > 256) throw new TypeError('Item lore must contain at most 256 lines.');
  const actions =
    options.actions === undefined
      ? undefined
      : Object.freeze({
          ...(options.actions.left === undefined ? {} : { left: options.actions.left }),
          ...(options.actions.right === undefined ? {} : { right: options.actions.right }),
          preventDefault: options.actions.preventDefault ?? true,
        });
  return Object.freeze({
    kind: 'item',
    material,
    amount,
    lore: Object.freeze([...lore]),
    ...(options.name === undefined ? {} : { name: options.name }),
    ...(actions === undefined ? {} : { actions }),
  });
}

export interface InventorySlotDescriptor {
  readonly slot: number;
  readonly item: ItemDescriptor;
}

export interface InventoryDescriptor {
  readonly kind: 'inventory';
  readonly rows: number;
  readonly title: TextLike;
  readonly protected: boolean;
  readonly slots: readonly InventorySlotDescriptor[];
}

export interface InventoryOptions {
  readonly protected?: boolean;
  readonly slots?: readonly InventorySlotDescriptor[];
}

export function inventory(
  rows: number,
  title: TextLike,
  options: InventoryOptions = {},
): InventoryDescriptor {
  if (!Number.isSafeInteger(rows) || rows < 1 || rows > 6)
    throw new TypeError('Inventory rows must be an integer from 1 through 6.');
  const occupied = new Set<number>();
  const slots = (options.slots ?? []).map((entry) => {
    if (!Number.isSafeInteger(entry.slot) || entry.slot < 0 || entry.slot >= rows * 9)
      throw new TypeError('Inventory slot is outside the inventory.');
    if (occupied.has(entry.slot)) throw new TypeError('Inventory slots must be unique.');
    occupied.add(entry.slot);
    return Object.freeze({ slot: entry.slot, item: entry.item });
  });
  return Object.freeze({
    kind: 'inventory',
    rows,
    title,
    protected: options.protected ?? true,
    slots: Object.freeze(slots),
  });
}

export type PaperCommandResult = void | Promise<void>;

export interface PaperCommandContext extends CommandContext {
  reply(message: TextLike): Promise<boolean>;
  openInventory(inventory: InventoryDescriptor): Promise<boolean>;
  giveItem(item: ItemDescriptor): Promise<boolean>;
  findPlayer(name: string): Promise<PaperCommandPlayer | null>;
  mainHand(): Promise<PaperCommandItem | null>;
  takeMainHand(material: string, amount: number): Promise<boolean>;
}
export interface PaperCommandRegistry {
  register(name: string, execute: (context: PaperCommandContext) => PaperCommandResult): () => void;
}
export interface ScheduledHandle {
  readonly native: ScheduledTask;
  cancel(): ReturnType<ScheduledTask['cancel']>;
}
export interface PaperScheduler {
  server(task: () => void, delayTicks?: number): ScheduledHandle;
  global(scheduler: GlobalRegionScheduler, task: () => void, delayTicks?: number): ScheduledHandle;
  region(
    world: string,
    chunkX: number,
    chunkZ: number,
    task: () => void,
    delayTicks?: number,
  ): ScheduledHandle;
  entity(entity: Entity, task: () => void, delayTicks?: number): ScheduledHandle;
}
export interface PaperMessagingChannel<T> {
  readonly key: string;
  encode(value: T): Uint8Array;
  decode(payload: Uint8Array): T;
}
export interface PaperMessenger {
  send<T>(player: Player, channel: PaperMessagingChannel<T>, value: T): void;
}

export interface PaperCommandArgumentDescriptor {
  readonly name: string;
  readonly parser: CommandParser;
  readonly suggestions: readonly string[];
}

export interface PaperCommandOptionDescriptor extends PaperCommandArgumentDescriptor {
  readonly aliases: readonly string[];
  readonly required: boolean;
}

export interface PaperCommandRouteDescriptor {
  readonly syntax: string;
  readonly description: string;
  readonly permission: string;
  readonly sender: 'any' | 'player' | 'console';
  readonly arguments: readonly PaperCommandArgumentDescriptor[];
  readonly options: readonly PaperCommandOptionDescriptor[];
}

export interface PaperRuntimeHost {
  registerCallback(name: string, callback: (...values: readonly unknown[]) => unknown): boolean;
  unregisterCallback(name: string): boolean;
  paperSubscribeEvent(
    metadata: object,
    type: string,
    priority: string,
    ignoreCancelled: boolean,
    callback: { readonly $callback: string },
  ): unknown;
  paperRegisterCommand(
    metadata: object,
    root: string,
    aliases: readonly string[],
    route: PaperCommandRouteDescriptor,
    callback: { readonly $callback: string },
  ): Promise<unknown>;
  paperCommandReply(metadata: object, token: string, message: unknown): Promise<unknown>;
  paperCommandOpenInventory(metadata: object, token: string, inventory: unknown): Promise<unknown>;
  paperCommandGiveItem(metadata: object, token: string, item: unknown): Promise<unknown>;
  paperCommandFindPlayer(metadata: object, token: string, name: string): Promise<unknown>;
  paperCommandMainHand(metadata: object, token: string): Promise<unknown>;
  paperCommandTakeMainHand(
    metadata: object,
    token: string,
    material: string,
    amount: number,
  ): Promise<unknown>;
  paperScheduleGlobal(metadata: object, callback: { readonly $callback: string }): unknown;
  paperSubscribePacket(metadata: object, callback: { readonly $callback: string }): unknown;
  paperProxyRequest(metadata: object, payload: Uint8Array): Promise<PaperProxyResponse>;
  shamooProvideService(id: string, version: string, callback: string): unknown;
  shamooSubscribeEvent(id: string, versionRange: string, callback: string): unknown;
  shamooPublishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
}

export interface PaperHostApi {
  on(type: string, handler: (event: unknown) => unknown, priority?: string): void;
  command(
    name: string,
    handler: (context: PaperCommandContext) => PaperCommandResult,
    aliases?: readonly string[],
  ): Promise<void>;
  schedule(handler: () => unknown): void;
  packet(handler: (packet: unknown) => unknown): void;
  provideService(
    id: string,
    version: string,
    handler: (operation: string, values: readonly unknown[]) => unknown,
  ): void;
  subscribeEvent(id: string, versionRange: string, handler: (payload: unknown) => unknown): void;
  publishEvent(id: string, version: string, payload: unknown): Promise<unknown>;
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
  return commandData(commandRecord(value, label), label) as Readonly<Record<string, unknown>>;
}

function commandSender(value: unknown): PaperCommandSender {
  const raw = commandRecord(value, 'sender');
  const senderKeys = Object.hasOwn(raw, 'id') ? ['name', 'kind', 'id'] : ['name', 'kind'];
  commandKeys(raw, senderKeys, 'sender');
  const kind = raw.kind;
  if (kind !== 'player' && kind !== 'console' && kind !== 'other')
    throw new TypeError('Invalid Paper command sender kind.');
  const name = commandString(raw.name, 'sender name');
  return Object.hasOwn(raw, 'id')
    ? Object.freeze({ name, kind, id: commandString(raw.id, 'sender id') })
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

type EncodedDescriptor =
  | null
  | boolean
  | number
  | string
  | readonly EncodedDescriptor[]
  | { readonly [key: string]: EncodedDescriptor };

type ValidatedDescriptor =
  | null
  | boolean
  | number
  | string
  | ((...values: readonly unknown[]) => unknown)
  | readonly ValidatedDescriptor[]
  | { readonly [key: string]: ValidatedDescriptor };

interface DescriptorCallbackState {
  sequence: number;
}

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
    return value.map((entry) => validateDescriptor(entry, depth + 1, nextAncestors));
  const prototype: unknown = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null)
    throw new TypeError('Unsupported Paper descriptor object.');
  const record = value as Readonly<Record<string, unknown>>;
  return Object.fromEntries(
    (keys as string[]).map((key) => {
      const entry = record[key];
      if (entry === undefined) throw new TypeError('Paper descriptors cannot contain undefined.');
      return [key, validateDescriptor(entry, depth + 1, nextAncestors)];
    }),
  );
}

function rollbackCallbacks(host: PaperRuntimeHost, names: readonly string[]): void {
  for (const name of names) {
    try {
      host.unregisterCallback(name);
    } catch {
      // Preserve the operation failure while attempting every rollback.
    }
  }
}

function encodeDescriptor(
  host: PaperRuntimeHost,
  metadata: object,
  callbackBase: string,
  callbacks: DescriptorCallbackState,
  registered: string[],
  value: ValidatedDescriptor,
): EncodedDescriptor {
  if (typeof value === 'function') {
    const name = `${callbackBase}.${String(callbacks.sequence++)}`;
    const accepted = host.registerCallback(name, (...values) => {
      if (values.length !== 1) throw new TypeError('Invalid Paper action callback arguments.');
      return Reflect.apply(value, undefined, [
        paperActionContext(host, metadata, callbackBase, callbacks, values[0]),
      ]);
    });
    if (!accepted) throw new Error(`Runtime rejected callback registration: ${name}`);
    registered.push(name);
    return { $callback: name };
  }
  if (value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) {
    const entries = value as readonly ValidatedDescriptor[];
    return entries.map((entry) =>
      encodeDescriptor(host, metadata, callbackBase, callbacks, registered, entry),
    );
  }
  const record = value as Readonly<Record<string, ValidatedDescriptor>>;
  return Object.fromEntries(
    Object.entries(record).map(([key, entry]) => [
      key,
      encodeDescriptor(host, metadata, callbackBase, callbacks, registered, entry),
    ]),
  );
}

function descriptorCommandPromise<T>(
  host: PaperRuntimeHost,
  metadata: object,
  callbackBase: string,
  callbacks: DescriptorCallbackState,
  value: unknown,
  operation: (descriptor: EncodedDescriptor) => unknown,
  label: string,
  validate: (result: unknown) => T,
): Promise<T> {
  const descriptor = validateDescriptor(value);
  const registered: string[] = [];
  try {
    return commandPromise(
      operation(encodeDescriptor(host, metadata, callbackBase, callbacks, registered, descriptor)),
      label,
      validate,
    );
  } catch (failure) {
    rollbackCallbacks(host, registered);
    throw failure;
  }
}

function paperActionContext(
  host: PaperRuntimeHost,
  metadata: object,
  callbackBase: string,
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
  const actionItem = Object.hasOwn(raw, 'item') ? commandItem(raw.item) : undefined;
  if (actionItem === null) throw new TypeError('Invalid Paper command action item.');
  return Object.freeze({
    sender: commandSender(raw.sender),
    action,
    ...(Object.hasOwn(raw, 'slot') ? { slot: commandNumber(raw.slot, 'action slot') } : {}),
    ...(actionItem === undefined ? {} : { item: actionItem }),
    reply: (message: TextLike) =>
      descriptorCommandPromise(
        host,
        metadata,
        callbackBase,
        callbacks,
        message,
        (descriptor) => host.paperCommandReply(metadata, token, descriptor),
        'reply result',
        (result) => commandBoolean(result, 'reply result'),
      ),
  });
}

function paperCommandContext(
  host: PaperRuntimeHost,
  metadata: object,
  callbackBase: string,
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
    reply: (message: TextLike) =>
      descriptorCommandPromise(
        host,
        metadata,
        callbackBase,
        callbacks,
        message,
        (descriptor) => host.paperCommandReply(metadata, token, descriptor),
        'reply result',
        (result) => commandBoolean(result, 'reply result'),
      ),
    openInventory: (inventoryDescriptor: InventoryDescriptor) =>
      descriptorCommandPromise(
        host,
        metadata,
        callbackBase,
        callbacks,
        inventoryDescriptor,
        (descriptor) => host.paperCommandOpenInventory(metadata, token, descriptor),
        'open-inventory result',
        (result) => commandBoolean(result, 'open-inventory result'),
      ),
    giveItem: (itemDescriptor: ItemDescriptor) =>
      descriptorCommandPromise(
        host,
        metadata,
        callbackBase,
        callbacks,
        itemDescriptor,
        (descriptor) => host.paperCommandGiveItem(metadata, token, descriptor),
        'give-item result',
        (result) => commandBoolean(result, 'give-item result'),
      ),
    findPlayer: (playerName: string) =>
      commandPromise(
        host.paperCommandFindPlayer(metadata, token, playerName),
        'find-player result',
        commandPlayer,
      ),
    mainHand: () =>
      commandPromise(host.paperCommandMainHand(metadata, token), 'main-hand result', commandItem),
    takeMainHand: (material: string, amount: number) =>
      commandPromise(
        host.paperCommandTakeMainHand(metadata, token, material, amount),
        'take-main-hand result',
        (result) => commandBoolean(result, 'take-main-hand result'),
      ),
  });
}

/** Publishable facade over ShamooRuntime's explicit data-only Paper host operations. */
export function createPaperHostApi(host: PaperRuntimeHost, namespace = 'paper.api'): PaperHostApi {
  let sequence = 0;
  const callback = (kind: string, handler: (...values: readonly never[]) => unknown): string => {
    const name = `${namespace}.${kind}.${String(sequence++)}`;
    if (!host.registerCallback(name, (...values) => Reflect.apply(handler, undefined, values)))
      throw new Error(`Runtime rejected callback registration: ${name}`);
    return name;
  };
  const marker = (name: string): { readonly $callback: string } => ({ $callback: name });
  const registerOperation = (
    kind: string,
    handler: (...values: readonly never[]) => unknown,
    operation: (name: string) => unknown,
  ): void => {
    const name = callback(kind, handler);
    try {
      operation(name);
    } catch (failure) {
      rollbackCallbacks(host, [name]);
      throw failure;
    }
  };
  const api: PaperHostApi = {
    on(type, handler, priority = 'NORMAL') {
      const hydrated = (...values: readonly never[]): unknown => {
        return invokePaperCallback(handler, values);
      };
      registerOperation('event', hydrated, (name) =>
        host.paperSubscribeEvent({ source: 'api' }, type, priority, false, marker(name)),
      );
    },
    command(name, handler, aliases = []) {
      const metadata = { source: 'api' };
      const descriptorCallbacks: DescriptorCallbackState = { sequence: 0 };
      let commandCallback = '';
      const commandHandler = (...values: readonly unknown[]): unknown => {
        if (values.length !== 1) throw new TypeError('Invalid Paper command callback arguments.');
        return handler(
          paperCommandContext(host, metadata, commandCallback, descriptorCallbacks, values[0]),
        );
      };
      commandCallback = callback('command', commandHandler);
      try {
        return commandPromise(
          host.paperRegisterCommand(
            metadata,
            name,
            aliases,
            {
              syntax: '',
              description: '',
              permission: '',
              sender: 'any',
              arguments: [],
              options: [],
            },
            marker(commandCallback),
          ),
          'registration result',
          () => undefined,
        ).catch((failure: unknown) => {
          rollbackCallbacks(host, [commandCallback]);
          throw failure;
        });
      } catch (failure) {
        rollbackCallbacks(host, [commandCallback]);
        throw failure;
      }
    },
    schedule(handler) {
      registerOperation('task', handler, (name) =>
        host.paperScheduleGlobal({ source: 'api' }, marker(name)),
      );
    },
    packet(handler) {
      registerOperation('packet', handler, (name) =>
        host.paperSubscribePacket({ source: 'api' }, marker(name)),
      );
    },
    provideService(id, version, handler) {
      registerOperation('service', handler, (name) => host.shamooProvideService(id, version, name));
    },
    subscribeEvent(id, versionRange, handler) {
      registerOperation('contract-event', handler, (name) =>
        host.shamooSubscribeEvent(id, versionRange, name),
      );
    },
    publishEvent: (id, version, payload) => host.shamooPublishEvent(id, version, payload),
  };
  return Object.freeze(api);
}

export function paperHostCommunicationProviders(host: PaperRuntimeHost): readonly Provider[] {
  return Object.freeze([
    {
      provide: PAPER_VELOCITY_MESSAGE_BRIDGE,
      useValue: {
        request: (payload: Uint8Array) => host.paperProxyRequest({ source: 'api' }, payload),
      },
    },
    ...paperCommunicationProviders(),
  ]);
}

/** Result returned by ShamooRuntime's Java OptionalProxyTransport.Response record. */
export interface PaperProxyResponse {
  readonly available: boolean;
  readonly payload: Uint8Array;
  readonly error?: string | null;
}

/** Host-owned binding matching OptionalProxyTransport.request(byte[]). */
export interface PaperVelocityMessageBridge {
  request(payload: Uint8Array): Promise<PaperProxyResponse>;
}

export const PAPER_VELOCITY_MESSAGE_BRIDGE = createToken<PaperVelocityMessageBridge>(
  'ShamooRuntime Paper Velocity message bridge',
);
export const PAPER_VELOCITY_TRANSPORT = createToken<BinaryRequestTransport>(
  'Paper Velocity request transport',
);

/** DI providers consume the host bridge when ShamooRuntime supplies it and remain optional otherwise. */
export function paperCommunicationProviders(): readonly Provider[] {
  return Object.freeze([
    {
      provide: PAPER_VELOCITY_TRANSPORT,
      useFactory: (...dependencies: readonly unknown[]) =>
        new PaperVelocityTransport(dependencies[0] as PaperVelocityMessageBridge | undefined),
      inject: [{ token: PAPER_VELOCITY_MESSAGE_BRIDGE, optional: true }],
    },
  ]);
}

/** Paper-side adapter for optional request/response communication with Shamoo Velocity. */
export class PaperVelocityTransport implements BinaryRequestTransport {
  public constructor(private readonly bridge?: PaperVelocityMessageBridge) {}

  public availability(): TransportAvailability {
    return this.bridge === undefined
      ? {
          available: false,
          reason: 'Shamoo Velocity transport is not installed; Paper is running standalone.',
        }
      : { available: true };
  }

  public async request(payload: Uint8Array, options: BinaryRequestOptions): Promise<Uint8Array> {
    const availability = this.availability();
    if (!availability.available) throw new VelocityTransportUnavailableError(availability.reason);
    if (options.signal.aborted) throw options.signal.reason;
    const response = await this.bridge?.request(payload.slice());
    if (!response?.available)
      throw new VelocityTransportUnavailableError('Shamoo Velocity transport is unavailable.');
    if (response.error !== undefined && response.error !== null)
      throw new VelocityTransportUnavailableError(response.error);
    return response.payload.slice();
  }
}

export class VelocityTransportUnavailableError extends Error {
  public readonly code = 'VELOCITY_TRANSPORT_UNAVAILABLE';
  public constructor(message: string) {
    super(message);
    this.name = 'VelocityTransportUnavailableError';
  }
}
