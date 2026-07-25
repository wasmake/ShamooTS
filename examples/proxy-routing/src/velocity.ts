import { createVelocityHostApi, type VelocityRuntimeHost } from '@shamoo/velocity';

import { createVelocityRouteEndpoint, type RoutingTable } from './handler.js';
import './plugin.js';

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
