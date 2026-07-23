import type { Options } from 'tsup';

const libraryDefaults = {
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  platform: 'neutral',
  sourcemap: true,
  splitting: false,
  target: 'es2022',
  treeshake: true,
} satisfies Options;

export function defineLibraryConfig(overrides: Options = {}): Options {
  return { ...libraryDefaults, ...overrides };
}
