import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const aliases = Object.fromEntries(
  [
    'common',
    'communication',
    'core',
    'decorators',
    'di',
    'filters',
    'guards',
    'interceptors',
    'lifecycle',
    'metadata',
    'pipes',
    'platform',
    'runtime-protocol',
    'testing',
    'validation',
  ].map((name) => [
    `@shamoo/${name}`,
    fileURLToPath(new URL(`../../packages/${name}/src/index.ts`, import.meta.url)),
  ]),
);

export default defineConfig({
  resolve: { alias: aliases },
  test: {
    include: ['test/**/*.test.ts'],
  },
});
