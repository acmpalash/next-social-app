import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next", "next/core-web-vitals"],
  plugins: ["next"],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    // Your custom rules here
  },
  ignores: ["node_modules/", "dist/", ".next/"], // Ignore unnecessary folders
};
