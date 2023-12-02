import createConfig from '@pi-lib/config'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import keysTransformer from 'ts-transformer-keys/transformer'

export default createConfig('button', undefined, [
  resolve(),
  typescript({
    transformers: [
      (service) => ({
        before: [keysTransformer(service.getProgram()!)],
        after: [],
      }),
    ],
  }),
])
