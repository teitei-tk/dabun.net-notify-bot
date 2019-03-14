module.exports = {
  env: {
    node: true,
    browser: false
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:node/recommended"
  ],
  settings: {
    node: {
      tryExtensions: [".ts", ".json", ".node"]
    }
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": ["error", { ignoreModules: true }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false
      }
    ],
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules"]
      }
    ],
    "@typescript-eslint/camelcase": 1
  }
};
