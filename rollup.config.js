import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const input = './src/index.ts';
const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js');
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input,
    plugins: [
      babel({
        exclude: 'node_modules/**',
        extensions
      }),
      external(),
      resolve({
        extensions
      }),
      commonjs(),
      typescript()
    ],
    output: [
      {
        sourcemap: true,
        file: pkg.umd,
        format: 'umd',
        name: 'sitecloud-components',
        globals: {
          react: 'React',
          'styled-components': 'styled',
          'react-is': 'reactIs'
        }
      },
      { file: pkg.module, format: 'es' }
    ]
  }
];
