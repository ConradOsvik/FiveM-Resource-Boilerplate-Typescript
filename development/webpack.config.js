const path = require('path')
const glob = require('glob')

const client = {
  mode: 'production',
  entry: glob.sync('./__client__/**/*.ts').reduce(function (obj, el) {
    obj[path.parse(el).name] = el
    return obj
  }, {}),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/client'),
  },
}

const server = {
  mode: 'production',
  entry: glob.sync('./__server__/**/*.ts').reduce(function (obj, el) {
    obj[path.parse(el).name] = el
    return obj
  }, {}),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server'),
  },
}

module.exports = [client, server]
