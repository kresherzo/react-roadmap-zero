// eslint.config.mjs — Flat-config (ESLint 9)
import js from '@eslint/js';                         // «eslint:recommended»
import reactPlugin from 'eslint-plugin-react';       // React-правила
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier-как-правила
import globals from 'globals';

export default [
  // Готовые наборы правил
  js.configs.recommended,
  reactPlugin.configs.recommended,
  prettierPlugin.configs.recommended,

  // Дополнительная «пряничная» секция
  {
    languageOptions: {
      globals: { ...globals.browser },
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },

    // <--- ВАЖНО: объект, а не массив
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      // если хочется «жёлтых» предупреждений, замените "error" → "warn"
      'prettier/prettier': 'error',
    },
  },
];
