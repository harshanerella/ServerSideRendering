/*eslint linebreak-style: ["error", "windows"]*/

/*eslint no-mixed-spaces-and-tabs: "error"*/

/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

const path = require('path');

const config = {
  entry: ['babel-polyfill','./lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;
