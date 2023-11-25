import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

const input = './src/index.ts';
const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input,
    onwarn: (warning, warn) => {
      if (warning.code === 'PLUGIN_WARNING') {
        return;
      }
      warn(warning);
    },
    external: ['react', 'styled-components'], // Avoid bundling peer dependencies
    plugins: [
      babel({
        exclude: 'node_modules/**',
        extensions
      }),
      external(),
      resolve({
        extensions
      }),
      commonjs({
        include: /node_modules/
      }),
      typescript()
    ],
    output: [
      {
        sourcemap: true,
        file: pkg.umd,
        format: 'umd',
        name: '@sitecloud/components',
        globals: {
          react: 'React',
          'styled-components': 'styled',
          'react-is': 'reactIs'
        },
        interop: 'compat'
      },
      { file: 'lib/index.es.js', format: 'es' }
    ]
  }
];
