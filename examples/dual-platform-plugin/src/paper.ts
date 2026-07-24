export * from './plugin.js';

import { definePaperEntrypoint } from '@shamoo/paper';

export const paperEntrypoint = definePaperEntrypoint({
  enable() {
    console.info('[dual-platform-plugin] Paper entrypoint enabled.');
  },
  disable() {
    console.info('[dual-platform-plugin] Paper entrypoint disabled.');
  },
});

export default paperEntrypoint;
