import { jsonCodec } from '@shamoo/communication';
import { decodeCommunicationEnvelope, encodeCommunicationEnvelope } from '@shamoo/runtime-protocol';
import { createVelocityCommunicationHandler, createVelocityHostApi } from '@shamoo/velocity';
import { describe, expect, it } from 'vitest';

describe('Velocity communication adapter', () => {
  it('publishes data-only callback markers through host-backed APIs', () => {
    const callbacks = new Map<string, (...values: readonly never[]) => unknown>();
    const calls: unknown[][] = [];
    const operation = (...values: unknown[]) => {
      calls.push(values);
      return true;
    };
    const api = createVelocityHostApi({
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      velocitySubscribeEvent: operation,
      velocityRegisterCommand: operation,
      velocitySchedule: operation,
      velocityRegisterProxyEndpoint: operation,
      shamooProvideService: operation,
      shamooSubscribeEvent: operation,
      shamooPublishEvent: () => Promise.resolve(true),
    });
    api.on('PostLoginEvent', () => undefined);
    api.proxyEndpoint(() => new Uint8Array());
    expect(calls[0]?.at(-1)).toEqual({ $callback: 'velocity.api.event.0' });
    expect(calls[1]?.at(-1)).toEqual({ $callback: 'velocity.api.proxy.1' });
    expect(callbacks.size).toBe(2);
  });

  it('decodes requests and returns encoded responses without retaining mutable bytes', async () => {
    const codec = jsonCodec<string>();
    const handler = createVelocityCommunicationHandler((request) =>
      Promise.resolve({
        protocolVersion: 1,
        kind: 'response',
        requestId: request.requestId,
        status: 'success',
        payload: codec.encode('pong'),
      }),
    );
    const request = encodeCommunicationEnvelope({
      protocolVersion: 1,
      kind: 'request',
      requestId: '00112233-4455-6677-8899-aabbccddeeff',
      contract: { id: 'example.ping', version: '1.0.0' },
      operation: 'ping',
      payload: codec.encode('ping'),
    });
    const response = decodeCommunicationEnvelope(await handler(request));
    expect(response.kind).toBe('response');
    expect(
      response.kind === 'response' && response.status === 'success'
        ? codec.decode(response.payload)
        : undefined,
    ).toBe('pong');
  });
});
