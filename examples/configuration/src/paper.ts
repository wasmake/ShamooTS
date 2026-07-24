export * from './plugin.js';

import { definePaperEntrypoint } from '@shamoo/paper';

export default definePaperEntrypoint({
  enable() {
    console.info('[configuration] Paper entrypoint enabled.');
  },
  disable() {
    console.info('[configuration] Paper entrypoint disabled.');
  },
});
