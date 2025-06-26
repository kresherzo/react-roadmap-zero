import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs,jsx}"],
  plugins: {
    js,
    prettier: prettierPlugin,
  },
  extends: [
    "js/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  languageOptions: {
    globals: globals.browser,
    sourceType: "module", // Заменили "script" на "module" для совместимости с .mjs
  },
});