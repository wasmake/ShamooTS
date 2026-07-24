export * from './index.js';
export * from './plugin.js';

import { definePaperEntrypoint } from '@shamoo/paper';

export default definePaperEntrypoint({
  enable() {
    console.info('[economy] Paper economy enabled.');
  },
  disable() {
    console.info('[economy] Paper economy disabled; in-memory balances were discarded.');
  },
});
