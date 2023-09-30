module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"],
    sourceType: "module",
    extraFileExtensions: [".vue"]
  },
  plugins: ["vue", "tailwindcss"],
  "ignorePatterns": [".eslintrc.cjs", "vite.config.ts"],
  rules: {},
};
