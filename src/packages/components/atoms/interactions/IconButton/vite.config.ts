import createConfig from '@pi-lib/config'
import replace from '@rollup/plugin-replace'

export default createConfig('icon-button', {
  external: [
    'react',
    'styled-components',
    'react/jsx-runtime',
    '@pi-lib/styles',
  ],
  output: {
    globals: {
      react: 'React',
    },
  },
  plugins: [
    replace({
      ___CLOUDFRONT_URL___: process.env.CLOUDFRONT_URL,
    }),
  ],
})
