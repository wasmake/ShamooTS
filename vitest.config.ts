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
      '@shamoo/metadata': fileURLToPath(
        new URL('./packages/metadata/src/index.ts', import.meta.url),
      ),
      '@shamoo/decorators': fileURLToPath(
        new URL('./packages/decorators/src/index.ts', import.meta.url),
      ),
      '@shamoo/interceptors': fileURLToPath(
        new URL('./packages/interceptors/src/index.ts', import.meta.url),
      ),
      '@shamoo/filters': fileURLToPath(new URL('./packages/filters/src/index.ts', import.meta.url)),
      '@shamoo/guards': fileURLToPath(new URL('./packages/guards/src/index.ts', import.meta.url)),
      '@shamoo/lifecycle': fileURLToPath(
        new URL('./packages/lifecycle/src/index.ts', import.meta.url),
      ),
      '@shamoo/pipes': fileURLToPath(new URL('./packages/pipes/src/index.ts', import.meta.url)),
      '@shamoo/validation': fileURLToPath(
        new URL('./packages/validation/src/index.ts', import.meta.url),
      ),
      '@shamoo/paper': fileURLToPath(new URL('./packages/paper/src/index.ts', import.meta.url)),
      '@shamoo/paper-raw': fileURLToPath(
        new URL('./packages/paper-raw/src/index.ts', import.meta.url),
      ),
      '@shamoo/paper-nms': fileURLToPath(
        new URL('./packages/paper-nms/src/index.ts', import.meta.url),
      ),
      '@shamoo/paper-packets': fileURLToPath(
        new URL('./packages/paper-packets/src/index.ts', import.meta.url),
      ),
      '@shamoo/paper-codegen': fileURLToPath(
        new URL('./packages/paper-codegen/src/index.ts', import.meta.url),
      ),
      '@shamoo/velocity-codegen': fileURLToPath(
        new URL('./packages/velocity-codegen/src/index.ts', import.meta.url),
      ),
      '@shamoo/platform-codegen': fileURLToPath(
        new URL('./packages/platform-codegen/src/index.ts', import.meta.url),
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
      exclude: ['packages/*/src/generated/**'],
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
    testTimeout: 60_000,
  },
});
