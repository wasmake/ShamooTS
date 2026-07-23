import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@shamoo/cli': fileURLToPath(new URL('./packages/cli/src/index.ts', import.meta.url)),
      '@shamoo/common': fileURLToPath(new URL('./packages/common/src/index.ts', import.meta.url)),
      '@shamoo/compiler': fileURLToPath(
        new URL('./packages/compiler/src/index.ts', import.meta.url),
      ),
      '@shamoo/config': fileURLToPath(new URL('./packages/config/src/index.ts', import.meta.url)),
      '@shamoo/core': fileURLToPath(new URL('./packages/core/src/index.ts', import.meta.url)),
      '@shamoo/create-plugin': fileURLToPath(
        new URL('./packages/create-shamoo-plugin/src/index.ts', import.meta.url),
      ),
      '@shamoo/di': fileURLToPath(new URL('./packages/di/src/index.ts', import.meta.url)),
      '@shamoo/paper': fileURLToPath(new URL('./packages/paper/src/index.ts', import.meta.url)),
      '@shamoo/paper-raw': fileURLToPath(
        new URL('./packages/paper-raw/src/index.ts', import.meta.url),
      ),
      '@shamoo/platform': fileURLToPath(
        new URL('./packages/platform/src/index.ts', import.meta.url),
      ),
      '@shamoo/test-utils': fileURLToPath(
        new URL('./internal/test-utils/src/index.ts', import.meta.url),
      ),
      '@shamoo/testing': fileURLToPath(new URL('./packages/testing/src/index.ts', import.meta.url)),
      '@shamoo/runtime-protocol': fileURLToPath(
        new URL('./packages/runtime-protocol/src/index.ts', import.meta.url),
      ),
      '@shamoo/velocity': fileURLToPath(
        new URL('./packages/velocity/src/index.ts', import.meta.url),
      ),
      '@shamoo/velocity-raw': fileURLToPath(
        new URL('./packages/velocity-raw/src/index.ts', import.meta.url),
      ),
    },
  },
  test: {
    coverage: {
      include: ['packages/*/src/**/*.ts'],
      provider: 'v8',
      reporter: ['text', 'json-summary'],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
    include: ['packages/*/test/**/*.test.ts', 'integration-tests/*/test/**/*.test.ts'],
    pool: 'threads',
  },
});
