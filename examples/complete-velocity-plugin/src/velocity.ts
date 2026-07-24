export * from './plugin.js';

import { defineVelocityEntrypoint } from '@shamoo/velocity';

export const velocityEntrypoint = defineVelocityEntrypoint({
  start() {
    console.info('[complete-velocity-plugin] Velocity entrypoint started.');
  },
  stop() {
    console.info('[complete-velocity-plugin] Velocity entrypoint stopped.');
  },
});

export default velocityEntrypoint;
