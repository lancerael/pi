const crypto = require('crypto')
const c = crypto.createHash
crypto.createHash = (a) => c(a == 'md4' ? 'sha256' : a)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: '@storybook/react',
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite',
  },
}
