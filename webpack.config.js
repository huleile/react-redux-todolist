/**
 * @Author: hully
 * @Date:   2017-08-31 11:41:46
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-08-31 17:38:18
 */

"use strict";

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    "webpack-dev-server/client?http://localhost:7080",
    "webpack/hot/only-dev-server",
    "react-hot-loader/patch",// react-hot-loader要使用 beta 版本，npm install react-hot-loader@next
    `${__dirname}/src/index.js`
  ],
  output: {
    path: `${__dirname}/build`,
    filename: '[name].min.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".less"]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有, 翻版必究'),
    //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html',
      favicon: './src/public/images/butterfly.ico'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),  //排序输出
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),//在webpack 2中使用NoErrorsPlugin会有警告提示
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        loader: "url-loader",
        options: {
            limit: 8192   // 小于8K 使用 base64格式图片
        }
      }
    ]
  }
}
