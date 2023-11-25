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
    external: ['react', 'styled-components'], // Avoid bundling peer dependencies
    plugins: [
      external(),
      resolve({
        extensions
      }),
      commonjs({
        include: /node_modules/
      }),
      babel({
        exclude: 'node_modules/**',
        extensions
      }),
      typescript()
    ],
    output: [{ file: 'lib/index.es.js', format: 'es' }]
  }
];
