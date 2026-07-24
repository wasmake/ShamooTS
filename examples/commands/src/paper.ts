export * from './plugin.js';

import { definePaperEntrypoint } from '@shamoo/paper';

export default definePaperEntrypoint({
  enable() {
    console.info('[commands] Paper command entrypoint enabled.');
  },
  disable() {
    console.info('[commands] Paper command entrypoint disabled.');
  },
});
