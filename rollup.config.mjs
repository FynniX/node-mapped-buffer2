// rollup.config.mjs
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import multi from '@rollup/plugin-multi-entry'
import eslint from '@rollup/plugin-eslint'

export default {
  input: 'lib/**/*.ts',
  external: ['fs', 'path', 'antlr4'],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
      exports: 'named',
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      exports: 'named',
    }
  ],
  plugins: [
    typescript(),
    commonjs(),
    multi({
      preserveModules: true,
    }),
    eslint()
  ]
}
