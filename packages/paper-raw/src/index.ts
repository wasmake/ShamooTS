export * from './generated/bindings.generated.js';
export * from './generated/events.generated.js';

import type { Plugin, Server } from './generated/bindings.generated.js';

export interface PaperEntrypointContext {
  readonly plugin: Plugin;
  readonly server: Server;
}
