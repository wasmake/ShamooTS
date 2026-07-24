export * from './plugin.js';

import { CommunicationClient } from '@shamoo/communication';
import {
  PaperVelocityTransport,
  definePaperEntrypoint,
  type PaperRuntimeHost,
} from '@shamoo/paper';

import { routeLookup, type RouteResponse } from './contracts.js';

export type PaperRoutingHost = Pick<PaperRuntimeHost, 'paperProxyRequest'>;

export interface PaperRoutingClient {
  availability(): ReturnType<CommunicationClient['availability']>;
  lookup(player: string, signal?: AbortSignal): Promise<RouteResponse>;
}

export function createPaperRoutingClient(host: PaperRoutingHost): PaperRoutingClient {
  const client = new CommunicationClient(
    new PaperVelocityTransport({
      request: (payload) => host.paperProxyRequest({ source: 'example/proxy-routing' }, payload),
    }),
  );

  return Object.freeze({
    availability: () => client.availability(),
    lookup: (player: string, signal?: AbortSignal) =>
      client.request(routeLookup, { player }, signal === undefined ? {} : { signal }),
  });
}

export const paperEntrypoint = definePaperEntrypoint({
  enable() {
    console.info('[proxy-routing] Paper routing client component enabled.');
  },
  disable() {
    console.info('[proxy-routing] Paper routing client component disabled.');
  },
});

export default paperEntrypoint;
