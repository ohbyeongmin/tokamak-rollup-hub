import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { languageOptions: { globals: globals.browser } },
  {
    files: ["**/*.js"],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  pluginReactConfig,
];
