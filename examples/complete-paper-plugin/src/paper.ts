export * from './plugin.js';

import { definePaperEntrypoint } from '@shamoo/paper';

export default definePaperEntrypoint({
  enable() {
    console.info('[complete-paper-plugin] Paper entrypoint started.');
  },
  disable() {
    console.info('[complete-paper-plugin] Paper entrypoint stopped.');
  },
});
