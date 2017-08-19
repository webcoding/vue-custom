var path = require('path')
// var flowWebpackPlugin = require('flow-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  // 相对于此文件所在目录
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: config.appSrc,
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@root': resolve('./'),  // build 所在项目的根目录（整体项目根目录）
      '@': config.appSrc,       // 当前运行项目的 src 目录
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /(libs|node_modules)/,
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('test')],
      },
      // images from img/flags goes to flags-sprite.svg
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve('./img/system'),
        options: {
          extract: true,
          spriteFilename: 'system-sprite.svg'
        }
      },
      // // images from img/icons goes to icons-sprite.svg
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-sprite-loader',
      //   include: path.resolve('./img/icons'),
      //   options: {
      //     extract: true,
      //     spriteFilename: 'icons-sprite.svg'
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      }
    ]
  },
  plugins: [
    new SpriteLoaderPlugin(),
    // new flowWebpackPlugin(),
  ],
}
