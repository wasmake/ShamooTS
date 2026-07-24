export * from './plugin.js';

import { definePaperEntrypoint } from '@shamoo/paper';

export default definePaperEntrypoint({
  enable() {
    console.info('[folia] Paper entrypoint enabled without assuming scheduler injection.');
  },
  disable() {
    console.info('[folia] Paper entrypoint disabled.');
  },
});
