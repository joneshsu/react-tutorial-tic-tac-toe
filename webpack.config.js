const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: "development",

  entry: "./src/components/Game.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "src")
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]

};