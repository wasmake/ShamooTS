import { defineRemoteProcedure, jsonCodec } from '@shamoo/communication';

export interface RouteRequest {
  readonly player: string;
}

export interface RouteResponse {
  readonly server: string;
  readonly matchedPlayerRule: boolean;
}

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export const routeLookup = defineRemoteProcedure<RouteRequest, RouteResponse>({
  id: 'example/proxy-routing',
  version: '1.0.0',
  operation: 'lookup',
  request: jsonCodec<RouteRequest>({
    maximumBytes: 4_096,
    validate: (value): value is RouteRequest =>
      isRecord(value) && typeof value.player === 'string' && value.player.length > 0,
  }),
  response: jsonCodec<RouteResponse>({
    maximumBytes: 4_096,
    validate: (value): value is RouteResponse =>
      isRecord(value) &&
      typeof value.server === 'string' &&
      value.server.length > 0 &&
      typeof value.matchedPlayerRule === 'boolean',
  }),
});
