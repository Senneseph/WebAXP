import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import yaml from '@rollup/plugin-yaml';
import html from '@rollup/plugin-html';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import pkg from '../../package.json';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'app/src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'iife',
      name: 'WebAXPApp',
      sourcemap: true,
      plugins: isProduction ? [terser()] : []
    }
  ],
  plugins: [
    resolve({
      browser: true,
      extensions: ['.js', '.ts', '.tsx']
    }),
    commonjs(),
    yaml(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      preventAssignment: true
    }),
    html({
      title: 'WebAXP Basic App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: pkg.description }
      ]
    }),
    !isProduction && serve({
      contentBase: 'dist',
      port: 3000,
      open: true
    }),
    !isProduction && livereload({
      watch: 'dist'
    })
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
};
