import type { PaperProxyResponse } from '@shamoo/paper';
import type { VelocityRuntimeHost } from '@shamoo/velocity';
import { describe, expect, it } from 'vitest';

import { createVelocityRouteEndpoint } from '../src/handler.js';
import { createPaperRoutingClient } from '../src/paper.js';
import { installVelocityRouting } from '../src/velocity.js';

describe('proxy routing', () => {
  it('round-trips a typed request through the binary wire protocol', async () => {
    const endpoint = createVelocityRouteEndpoint({
      defaultServer: 'lobby',
      players: { Alex: 'survival' },
    });
    const client = createPaperRoutingClient({
      paperProxyRequest: async (_metadata, payload): Promise<PaperProxyResponse> => ({
        available: true,
        payload: await endpoint(payload),
        error: null,
      }),
    });

    expect(client.availability()).toEqual({ available: true });
    await expect(client.lookup('Alex')).resolves.toEqual({
      server: 'survival',
      matchedPlayerRule: true,
    });
    await expect(client.lookup('Steve')).resolves.toEqual({
      server: 'lobby',
      matchedPlayerRule: false,
    });
  });

  it('registers through an explicit Velocity host and closes locally', () => {
    const callbacks = new Map<string, (...values: readonly never[]) => unknown>();
    let marker: { readonly $callback: string } | undefined;
    const ignore = () => true;
    const host: VelocityRuntimeHost = {
      registerCallback(name, callback) {
        callbacks.set(name, callback);
        return true;
      },
      velocitySubscribeEvent: ignore,
      velocityRegisterCommand: ignore,
      velocitySchedule: ignore,
      velocityRegisterProxyEndpoint(_metadata, callback) {
        marker = callback;
        return true;
      },
      shamooProvideService: ignore,
      shamooSubscribeEvent: ignore,
      shamooPublishEvent: () => Promise.resolve(true),
    };

    const installation = installVelocityRouting(host, { defaultServer: 'lobby' });
    const callback = marker === undefined ? undefined : callbacks.get(marker.$callback);
    expect(callback).toBeTypeOf('function');
    expect(marker?.$callback).toBe(`${installation.callbackNamespace}.proxy.0`);

    installation.close();
    expect(() => callback?.(new Uint8Array() as never)).toThrow('endpoint is closed');
  });

  it('reports an unavailable standalone Paper bridge', async () => {
    const client = createPaperRoutingClient({
      paperProxyRequest: () =>
        Promise.resolve({ available: false, payload: new Uint8Array(), error: null }),
    });
    await expect(client.lookup('Alex')).rejects.toMatchObject({
      code: 'TRANSPORT_ERROR',
      cause: { code: 'VELOCITY_TRANSPORT_UNAVAILABLE' },
    });
  });
});
