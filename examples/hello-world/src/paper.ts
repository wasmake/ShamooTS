export * from './plugin.js';

import { definePaperEntrypoint } from '@shamoo/paper';

export default definePaperEntrypoint({
  enable() {
    console.info('[hello-world] Paper entrypoint enabled.');
  },
  disable() {
    console.info('[hello-world] Paper entrypoint disabled.');
  },
});
