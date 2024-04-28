import eslint from '@eslint/js';
import globals from 'globals';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';

export default [
  eslint.configs.recommended,
  // '@typescript-eslint/recommended',
  eslintPluginPrettierRecommended,
  //'import/warnings',
  unicorn.configs['flat/recommended'],
  {
    ignores: ['node_modules', 'lib/**/*', 'coverage/**/*'],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      'unused-imports': eslintPluginUnusedImports
    },
    rules: {
      'no-debugger': 'error',
      'no-console': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'unused-imports/no-unused-imports-ts': 'error',
      //'import/order': 'warn',
      'unicorn/prefer-node-protocol': 'off'
    }
  }
];
