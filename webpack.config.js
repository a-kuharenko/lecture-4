'use strict'

const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, { mode }) => {

  // config object
  const cfg = {
    mode,
    entry: './src', // aka `'./src/index.js'`
    output: {
      filename: 'bundle.js',
      path: resolve('dist/') // resolves to absolute path, e. g. /home/...
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader', // aka `use: ['babel-loader']`
          options: {
            presets: [
              '@babel/react' // to allow babel compile jsx
            ]
          }
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }

  return cfg
}
