import eslint from '@eslint/js';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/.tsbuild/**',
      '**/dist/**',
      '**/coverage/**',
      '**/node_modules/**',
      'docs/generated/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  { ...importX.flatConfigs.recommended, files: ['**/*.ts'] },
  { ...importX.flatConfigs.typescript, files: ['**/*.ts'] },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: new URL('../..', import.meta.url).pathname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-duplicates': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@shamoo/*/src', '@shamoo/*/src/**'],
              message: 'Import only documented package exports.',
            },
            {
              group: ['@shamoo/test-utils'],
              message: 'Test utilities are internal and may only be used by test files.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@shamoo/*/src', '@shamoo/*/src/**'],
              message: 'Tests must exercise public package exports.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.mjs', '**/*.js'],
    ...tseslint.configs.disableTypeChecked,
    languageOptions: {
      globals: globals.node,
    },
  },
);
