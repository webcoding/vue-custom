// var path = require('path')
// // var flowWebpackPlugin = require('flow-webpack-plugin')
// // const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
// var utils = require('./utils')
// var config = require('../config')
// var vueLoaderConfig = require('./vue-loader.conf')
import path from 'path'
import webpack from 'webpack'
// import flowWebpackPlugin from 'flow-webpack-plugin'
// import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'
import * as utils from './utils'
import config from '../config'
// console.log(config)
import vueLoaderConfig from './vue-loader.conf'

function resolve (dir) {
  // 相对于此文件所在目录
  return path.join(__dirname, '..', dir)
}

console.log('注入全局变量：')
console.log(JSON.stringify(config.injectConst, null, 2))
// const svgDirs = [
//   // require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
//   // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
// ]
// module.exports = {
export default {
  target: 'web',
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
    extensions: ['.js', '.json', '.vue', '.css', '.md'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 'style': resolve('packages/style'), // 样式引用没法用怎么回事
      '@': config.appSrc,      // 当前运行项目的 src 目录
      '@root': resolve('./'),  // build 所在项目的根目录（整体项目根目录）
      '@packages': resolve('./packages'),
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
      {
        test: /\.md/,
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true,
          use: [
            [require('markdown-it-container'), 'demo']
          ], preprocess(MarkdownIt, source) {
            const styleRegexp = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/i;
            const scriptRegexp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i;
            MarkdownIt.renderer.rules.table_open = () =>
              '<table class="kit-doc-table">';
            return source.replace(styleRegexp, '').replace(scriptRegexp, '');
          }
        }
      },
      // {
      //   test: /\.md$/,
      //   use: [
      //     { loader: "html-loader" },
      //     {
      //       loader: "markdown-loader",
      //       options: {
      //         /* your options here */
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     { loader: 'css-loader',
      //       options: {
      //         importLoaders: 1
      //       }
      //     },
      //     { loader: 'postcss-loader',
      //       options: {
      //         config: {
      //           path: resolve('./postcss.config.js'),
      //         }
      //       }
      //     },
      //   ],
      // },

      // images from img/flags goes to flags-sprite.svg
      // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      {
        test: /\.svg$/i,
        loader: 'svg-sprite-loader',
        // include: svgDirs,
        // include: path.resolve('./img/system'),
        options: {
          runtimeCompat: true,
          // 不要提取成一个外部独立文件使用，这样与按需加载理念冲突
          // extract: true,
          // spriteFilename: 'svg-sprite.[hash:6].svg'
        },
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ...config.injectConst,
    }),
    // 不需要提取配置
    // new SpriteLoaderPlugin(),
    // new flowWebpackPlugin(),
  ],
}
