import baseConfig from "@power-mdx-lint/eslint-config";

export default [
  ...baseConfig,
  {
    ignores: ["pkg/**"],
  },
];
