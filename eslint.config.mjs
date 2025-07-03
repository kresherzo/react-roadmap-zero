// eslint.config.mjs
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  /* 1. Уже «плоский» набор правил JS */
  js.configs.recommended,

  /* 2. React-набор → через FlatCompat */
  ...compat.config(reactPlugin.configs.recommended),

  /* 3. Prettier-набор → тоже через FlatCompat  */
  ...compat.config(prettierPlugin.configs.recommended),

  /* 4. Ваша надстройка */
  {
    languageOptions: {
      globals: { ...globals.browser },
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    settings: {
  react: { version: 'detect' },
},

    rules: {
      'prettier/prettier': 'error',
    },
  },  
];
