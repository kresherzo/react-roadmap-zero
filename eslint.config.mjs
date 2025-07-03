// eslint.config.mjs  — Flat-config
import js from "@eslint/js";           // «eslint:recommended» в формате Flat
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  js.configs.recommended,              // раньше было "eslint:recommended"
  reactPlugin.configs.recommended,     // раньше "plugin:react/recommended"
  prettierPlugin.configs.recommended,  // раньше "plugin:prettier/recommended"

  {
    languageOptions: {
      globals: { ...globals.browser },
      sourceType: "module",
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { react: reactPlugin, prettier: prettierPlugin },
    rules: { "prettier/prettier": "error" },
  },
];
