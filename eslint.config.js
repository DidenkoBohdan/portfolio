import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
    {
      ignores: [
        'node_modules/**',
        'dist/**',
        'build/**',
        'coverage/**',
        '.vite/**',
        '**/*.d.ts',
        'vite.config.ts'
      ]
    },
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tseslint.parser,
        parserOptions: {
          project: './tsconfig.json',
          ecmaFeatures: {
            jsx: true
          }
        },
        globals: {
          ...globals.browser,
          ...globals.es2021
        }
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        'react': reactPlugin,
        'react-hooks': reactHooksPlugin,
        'import': importPlugin
      },
      rules: {
        ...eslint.configs.recommended.rules,
        ...tseslint.configs.recommended.rules,
        ...tseslint.configs.stylistic.rules,
        ...reactPlugin.configs.recommended.rules,
        ...reactHooksPlugin.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'import/prefer-default-export': 'off',
        'no-undef': 'off',
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
          }
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        'react/jsx-props-no-spreading': 'off'
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    },
    prettierConfig
);
