import { CommunicationClient, defineRemoteProcedure, jsonCodec } from '@shamoo/communication';
import { Container } from '@shamoo/di';
import {
  PAPER_VELOCITY_MESSAGE_BRIDGE,
  PAPER_VELOCITY_TRANSPORT,
  PaperVelocityTransport,
  VelocityTransportUnavailableError,
  createPaperHostApi,
  paperCommunicationProviders,
} from '@shamoo/paper';
import { describe, expect, it } from 'vitest';

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
