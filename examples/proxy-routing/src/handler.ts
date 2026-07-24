import type { CommunicationRequestHandler } from '@shamoo/communication';
import { createVelocityCommunicationHandler } from '@shamoo/velocity';

import { routeLookup } from './contracts.js';

export interface RoutingTable {
  readonly defaultServer: string;
  readonly players?: Readonly<Record<string, string>>;
}

export function createRouteRequestHandler(table: RoutingTable): CommunicationRequestHandler {
  if (table.defaultServer.trim().length === 0) {
    throw new TypeError('The default route must be a non-empty server name.');
  }

  return (request) => {
    if (
      request.contract.id !== routeLookup.id ||
      request.contract.version !== routeLookup.version ||
      request.operation !== routeLookup.operation
    ) {
      return Promise.resolve({
        protocolVersion: 1,
        kind: 'response',
        requestId: request.requestId,
        status: 'error',
        error: {
          code: 'not_found',
          message: 'The requested routing operation is not available.',
        },
      });
    }

    const input = routeLookup.request.decode(request.payload);
    const playerServer = table.players?.[input.player];
    return Promise.resolve({
      protocolVersion: 1,
      kind: 'response',
      requestId: request.requestId,
      status: 'success',
      payload: routeLookup.response.encode({
        server: playerServer ?? table.defaultServer,
        matchedPlayerRule: playerServer !== undefined,
      }),
    });
  };
}

export function createVelocityRouteEndpoint(
  table: RoutingTable,
): (payload: Uint8Array) => Promise<Uint8Array> {
  return createVelocityCommunicationHandler(createRouteRequestHandler(table));
}
