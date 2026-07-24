export * from './plugin.js';

import {
  createVelocityHostApi,
  defineVelocityEntrypoint,
  type VelocityRuntimeHost,
} from '@shamoo/velocity';

import { createVelocityRouteEndpoint, type RoutingTable } from './handler.js';

export interface RoutingInstallation {
  readonly callbackNamespace: string;
  close(): void;
}

let installationSequence = 0;

export function installVelocityRouting(
  host: VelocityRuntimeHost,
  table: RoutingTable,
): RoutingInstallation {
  const callbackNamespace = `example.proxy-routing.${String(installationSequence++)}`;
  const endpoint = createVelocityRouteEndpoint(table);
  let active = true;

  createVelocityHostApi(host, callbackNamespace).proxyEndpoint((payload) => {
    if (!active) throw new Error('The proxy routing endpoint is closed.');
    return endpoint(payload);
  });

  return Object.freeze({
    callbackNamespace,
    close() {
      active = false;
    },
  });
}

export const velocityEntrypoint = defineVelocityEntrypoint({
  start() {
    console.info('[proxy-routing] Velocity routing endpoint component started.');
  },
  stop() {
    console.info('[proxy-routing] Velocity routing endpoint component stopped.');
  },
});

export default velocityEntrypoint;
