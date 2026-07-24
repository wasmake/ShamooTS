export * from './plugin.js';

import { defineVelocityEntrypoint } from '@shamoo/velocity';

export const velocityEntrypoint = defineVelocityEntrypoint({
  start() {
    console.info('[dual-platform-plugin] Velocity entrypoint started.');
  },
  stop() {
    console.info('[dual-platform-plugin] Velocity entrypoint stopped.');
  },
});

export default velocityEntrypoint;
