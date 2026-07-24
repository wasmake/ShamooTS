import { CommunicationClient, defineRemoteProcedure, jsonCodec } from '@shamoo/communication';
import { Container } from '@shamoo/di';
import {
  PAPER_VELOCITY_MESSAGE_BRIDGE,
  PAPER_VELOCITY_TRANSPORT,
  PaperVelocityTransport,
  VelocityTransportUnavailableError,
  createPaperHostApi,
  paperCommunicationProviders,
  type PaperCommandContext,
  type PaperRuntimeHost,
} from '@shamoo/paper';
import { describe, expect, it } from 'vitest';

function invokeCallback(
  callback: (...values: readonly never[]) => unknown,
  value: unknown,
): unknown {
  const result: unknown = Reflect.apply(callback, undefined, [value]);
  return result;
}

describe('Paper Velocity communication', () => {
  it('uses explicit callback markers for Paper, service, and contract event host APIs', async () => {
    const callbacks = new Map<string, (...values: readonly never[]) => unknown>();
    const calls: { name: string; values: readonly unknown[] }[] = [];
    const record =
      (name: string) =>
      (...values: readonly unknown[]) => {
        calls.push({ name, values });
        return true;
      };
    const api = createPaperHostApi({
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      paperSubscribeEvent: record('event'),
      paperRegisterCommand: record('command'),
      paperCommandReply: record('command-reply'),
      paperCommandFindPlayer: record('command-find-player'),
      paperCommandMainHand: record('command-main-hand'),
      paperCommandTakeMainHand: record('command-take-main-hand'),
      paperScheduleGlobal: record('task'),
      paperSubscribePacket: record('packet'),
      paperProxyRequest: () => Promise.resolve({ available: false, payload: new Uint8Array() }),
      shamooProvideService: record('service'),
      shamooSubscribeEvent: record('contract-event'),
      shamooPublishEvent: (...values) => {
        calls.push({ name: 'publish', values });
        return Promise.resolve(true);
      },
    });
    api.on('PlayerJoinEvent', () => undefined);
    api.provideService('example/service', '1.0.0', () => undefined);
    api.subscribeEvent('example/event', '^1.0.0', () => undefined);
    await api.publishEvent('example/event', '1.0.0', { online: true });
    expect(calls.map((item) => item.name)).toEqual([
      'event',
      'service',
      'contract-event',
      'publish',
    ]);
    expect(calls[0]?.values.at(-1)).toEqual({ $callback: 'paper.api.event.0' });
    expect(callbacks.size).toBe(3);
  });

  it('registers data-only command contexts and routes operations with a hidden token', () => {
    const callbacks = new Map<string, (...values: readonly never[]) => unknown>();
    const registrations: (readonly unknown[])[] = [];
    const operations: { readonly name: string; readonly values: readonly unknown[] }[] = [];
    const operation =
      (name: string, result: unknown) =>
      (...values: readonly unknown[]) => {
        operations.push({ name, values });
        return result;
      };
    const host: PaperRuntimeHost = {
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      paperSubscribeEvent: () => true,
      paperRegisterCommand(...values) {
        registrations.push(values);
        return true;
      },
      paperCommandReply: operation('reply', true),
      paperCommandFindPlayer: operation('findPlayer', {
        id: 'player-id',
        name: 'Sam',
        online: true,
      }),
      paperCommandMainHand: operation('mainHand', { material: 'DIAMOND', amount: 3 }),
      paperCommandTakeMainHand: operation('takeMainHand', false),
      paperScheduleGlobal: () => true,
      paperSubscribePacket: () => true,
      paperProxyRequest: () => Promise.resolve({ available: false, payload: new Uint8Array() }),
      shamooProvideService: () => true,
      shamooSubscribeEvent: () => true,
      shamooPublishEvent: () => Promise.resolve(true),
    };
    let context: PaperCommandContext | undefined;
    createPaperHostApi(host).command(
      'sample',
      (value) => {
        context = value;
        expect(value.reply('hello')).toBe(true);
        expect(value.findPlayer('Sam')).toEqual({ id: 'player-id', name: 'Sam', online: true });
        expect(value.mainHand()).toEqual({ material: 'DIAMOND', amount: 3 });
        expect(value.takeMainHand('DIAMOND', 3)).toBe(false);
        return true;
      },
      ['example'],
    );
    expect(registrations).toEqual([
      [{ source: 'api' }, 'sample', ['example'], { $callback: 'paper.api.command.0' }],
    ]);
    const callback = callbacks.get('paper.api.command.0');
    expect(callback).toBeDefined();
    if (callback === undefined) throw new Error('Paper command callback was not registered.');
    const rawArguments = ['one', 'two'];
    expect(
      invokeCallback(callback, {
        token: 'secret-token',
        sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
        alias: 'sample',
        arguments: rawArguments,
      }),
    ).toBe(true);
    expect(context).toMatchObject({
      sender: { name: 'Alex', kind: 'player', id: 'sender-id' },
      alias: 'sample',
      arguments: ['one', 'two'],
    });
    expect(context).not.toHaveProperty('token');
    expect(Object.isFrozen(context)).toBe(true);
    expect(Object.isFrozen(context?.sender)).toBe(true);
    expect(Object.isFrozen(context?.arguments)).toBe(true);
    expect(context?.arguments).not.toBe(rawArguments);
    expect(operations).toEqual([
      { name: 'reply', values: [{ source: 'api' }, 'secret-token', 'hello'] },
      { name: 'findPlayer', values: [{ source: 'api' }, 'secret-token', 'Sam'] },
      { name: 'mainHand', values: [{ source: 'api' }, 'secret-token'] },
      {
        name: 'takeMainHand',
        values: [{ source: 'api' }, 'secret-token', 'DIAMOND', 3],
      },
    ]);
  });

  it('rejects malformed command DTOs and operation results', () => {
    const callbacks = new Map<string, (...values: readonly never[]) => unknown>();
    let mainHandResult: unknown = { material: 'DIAMOND', amount: 1.5 };
    const host: PaperRuntimeHost = {
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      paperSubscribeEvent: () => true,
      paperRegisterCommand: () => true,
      paperCommandReply: () => 'yes',
      paperCommandFindPlayer: () => ({ id: 'id', name: 'Sam', online: 'yes' }),
      paperCommandMainHand: () => mainHandResult,
      paperCommandTakeMainHand: () => 1,
      paperScheduleGlobal: () => true,
      paperSubscribePacket: () => true,
      paperProxyRequest: () => Promise.resolve({ available: false, payload: new Uint8Array() }),
      shamooProvideService: () => true,
      shamooSubscribeEvent: () => true,
      shamooPublishEvent: () => Promise.resolve(true),
    };
    createPaperHostApi(host).command('sample', (context) => {
      switch (context.arguments[0]) {
        case 'reply':
          return context.reply('message');
        case 'find':
          return context.findPlayer('Sam');
        case 'take':
          return context.takeMainHand('DIAMOND', 1);
        default:
          return context.mainHand();
      }
    });
    const callback = callbacks.get('paper.api.command.0');
    expect(callback).toBeDefined();
    if (callback === undefined) throw new Error('Paper command callback was not registered.');
    const invoke = (value: unknown): unknown => invokeCallback(callback, value);
    expect(() => invoke(null)).toThrow(TypeError);
    expect(() =>
      invoke({
        token: 'token',
        sender: { name: 'Console', kind: 'invalid' },
        alias: 'sample',
        arguments: [],
      }),
    ).toThrow(TypeError);
    expect(() =>
      invoke({
        token: 'token',
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: ['valid', 1],
      }),
    ).toThrow(TypeError);
    expect(() =>
      invoke({
        token: 'token',
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: [],
      }),
    ).toThrow('Invalid Paper command item amount');
    expect(() =>
      invoke({
        token: 'token',
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: ['reply'],
      }),
    ).toThrow('Invalid Paper command reply result');
    expect(() =>
      invoke({
        token: 'token',
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: ['find'],
      }),
    ).toThrow('Invalid Paper command player online state');
    expect(() =>
      invoke({
        token: 'token',
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: ['take'],
      }),
    ).toThrow('Invalid Paper command take-main-hand result');
    mainHandResult = null;
    expect(
      invoke({
        token: 'token',
        sender: { name: 'Console', kind: 'other' },
        alias: 'sample',
        arguments: [],
      }),
    ).toBeNull();
  });

  it('is explicitly unavailable and does not send when Paper runs standalone', async () => {
    const transport = new PaperVelocityTransport();
    expect(transport.availability()).toEqual({
      available: false,
      reason: 'Shamoo Velocity transport is not installed; Paper is running standalone.',
    });
    await expect(
      transport.request(new Uint8Array(), { timeoutMs: 10, signal: new AbortController().signal }),
    ).rejects.toBeInstanceOf(VelocityTransportUnavailableError);

    const procedure = defineRemoteProcedure({
      id: 'example/ping',
      version: '1.0.0',
      operation: 'ping',
      request: jsonCodec<null>(),
      response: jsonCodec<string>(),
    });
    await expect(new CommunicationClient(transport).request(procedure, null)).rejects.toMatchObject(
      {
        code: 'UNAVAILABLE',
      },
    );
  });

  it('copies payloads across an available host bridge', async () => {
    const original = Uint8Array.of(1, 2);
    let received: Uint8Array | undefined;
    const transport = new PaperVelocityTransport({
      request: (payload) => {
        received = payload;
        payload[0] = 9;
        return Promise.resolve({ available: true, payload, error: null });
      },
    });
    expect(transport.availability()).toEqual({ available: true });
    await expect(
      transport.request(original, { timeoutMs: 10, signal: new AbortController().signal }),
    ).resolves.toEqual(Uint8Array.of(9, 2));
    expect(received).not.toBe(original);
    expect(original).toEqual(Uint8Array.of(1, 2));
  });

  it('uses the bridge unavailability reason without sending', async () => {
    const transport = new PaperVelocityTransport({
      request: () =>
        Promise.resolve({
          available: true,
          payload: new Uint8Array(),
          error: 'proxy disconnected',
        }),
    });
    await expect(
      transport.request(new Uint8Array(), {
        timeoutMs: 10,
        signal: new AbortController().signal,
      }),
    ).rejects.toThrow('proxy disconnected');
  });

  it('honors cancellation and host availability responses', async () => {
    const request = new PaperVelocityTransport({
      request: () => Promise.resolve({ available: false, payload: new Uint8Array(), error: null }),
    });
    const abort = new AbortController();
    abort.abort(new Error('cancelled'));
    await expect(
      request.request(new Uint8Array(), { timeoutMs: 10, signal: abort.signal }),
    ).rejects.toThrow('cancelled');
    await expect(
      request.request(new Uint8Array(), {
        timeoutMs: 10,
        signal: new AbortController().signal,
      }),
    ).rejects.toThrow('Shamoo Velocity transport is unavailable');
  });

  it('injects the host capability when present and remains standalone when absent', () => {
    const standalone = new Container({ providers: paperCommunicationProviders() });
    expect(standalone.resolve(PAPER_VELOCITY_TRANSPORT).availability().available).toBe(false);
    const hosted = new Container({
      providers: [
        {
          provide: PAPER_VELOCITY_MESSAGE_BRIDGE,
          useValue: {
            request: (payload: Uint8Array) =>
              Promise.resolve({ available: true, payload, error: null }),
          },
        },
        ...paperCommunicationProviders(),
      ],
    });
    expect(hosted.resolve(PAPER_VELOCITY_TRANSPORT).availability()).toEqual({ available: true });
  });
});
