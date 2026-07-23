export * from './generated/bindings.generated.js';
export * from './generated/events.generated.js';

import type { JavaOpaque, ProxyServer } from './generated/bindings.generated.js';

export type VelocityPlugin = JavaOpaque<'java.lang.Object'>;

export interface VelocityEntrypointContext {
  readonly plugin: VelocityPlugin;
  readonly proxy: ProxyServer;
}
