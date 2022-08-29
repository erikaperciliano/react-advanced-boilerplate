module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/*stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs",
    "@storybook/preset-typescript"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
