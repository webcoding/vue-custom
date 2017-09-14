// var path = require('path')
// var utils = require('./utils')
// var config = require('../config')
// var isProduction = process.env.NODE_ENV === 'production'
// var px2rem = require('postcss-plugin-px2rem')
// // var px2rem = require('postcss-pxtorem')
// // var colourPalette = require('colour-palette')
// // var sugarss = require('sugarss')
import path from 'path'
import px2rem from 'postcss-plugin-px2rem'
import * as utils from './utils'
import config from '../config'

var isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, '../' + dir)
}

// module.exports = {
export default {
  loaders: utils.cssLoaders({
    // 这里还可以配置更多的参数，用于 loader 的 options
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
  }),
  // https://vue-loader.vuejs.org/zh-cn/features/postcss.html
  postcss: [
    // @use postcss-reverse-media;
    // @use postcss-extend;
    // @use postcss-mixins;
    // @use postcss-apply;
    // @use postcss-triangle;
    // @use postcss-color-function;
    // @use postcss-flexbox;
    // @use lost;
    // @use postcss-nested;
    // @use postcss-for;
    // @use postcss-each;
    // @use postcss-conditionals;
    // @use postcss-media-minmax;
    // @use postcss-custom-media;
    // @use postcss-discard-comments;
    // @use postcss-simple-vars;
    // @use postcss-cssnext;

    // options: {
    //   // processors: [
    //   //   require('postcss-strip-inline-comments'),
    //   // ],
    //   // syntax: require('postcss-scss'),
    //   parser: require('sugarss'), // use sugarss parser
    // },
    // plugins: [
    // require('poststylus'),
    // require('postcss-use')({
    //   resolveFromFile: true,
    //   modules: [
    //     'cssnext',
    //     'nested',
    //     // 'simple-vars',
    //     'for',
    //     'position',
    //     'size',
    //   ],
    // }),
    // require('postcss-strip-inline-comments'),
    // require('postcss-scss'),

    // require('postcss-inline-comment'),

    // 加重注释默认会保留，但多了 N 多空行
    // require('postcss-discard-comments')({
    //   removeAllButFirst: true,
    // }),
    // require('postcss-discard-empty'),
    // require('postcss-cssnext'),
    // require('cssnano')({
    //   preset: ['default']
    // }),

    // 以下依赖的插件，在项目中一个个加太复杂了
    // 统一整理一个插件 postcss-tools 处理掉
    // 现在可以在 .postcssrc.js 内配置使用的插件（postcss-load 会自动去读取）
    // npm i colour-palette postcss-loader postcss-cssnext postcss-import postcss-nested postcss-nesting postcss-simple-vars postcss-at-rules-variables postcss-functions postcss-position postcss-plugin-px2rem postcss-position postcss-size colorguard stylelint postcss-write-svg --save-dev
    // require('autoprefixer')({
    //   browsers: ['last 3 versions']
    // }),
    // postcss-cssnext 已经包含了 autoprefixer


    // require('autoprefixer'),

    // require('postcss-simple-vars'), // 和下面这个不能同时用
    // require('postcss-advanced-variables'),
    // require('precss'),
    // require('postcss-calc'),
    // require('postcss-for'),
    require('postcss-position'),
    require('postcss-size'),
    // require('postcss-tools'),
    // require('postcss-import')({
    //   plugins: [
    //     require('postcss-strip-inline-comments'),
    //   ],
    // }),
    // require('postcss-partial-import')({
    //   // root: config.root,
    //   extension: '.pcss',
    // }),
    // require('postcss-nested'),
    // require('postcss-nesting'),
    // require('postcss-safe-parser'),
    // require('postcss-simple-vars')({
    //   variables: function () {
    //     // var fn = resolve('vui/styles/fn')
    //     // console.log(fn)
    //     return resolve('vui/styles/fn.pcss');
    //   },
    // }),
    // require('postcss-at-rules-variables'),
    // require('postcss-functions')({
    //   functions: {
    //     colorPalette: colourPalette,
    //   },
    // }),
    // require('stylelint'),
    // require('postcss-write-svg'),
    // require('postcss-tools'),
    // require('postcss-plugin-bem'),
    // require('postcss-plugin-color-functions'),
    // // require('saladcss-partial-import'),
    // // require('precss'),

      // require('postcss-mixins'),
    // require('postcss-advanced-variables'),
    // require('postcss-custom-media'),
    // require('postcss-at-rules-variables'),
    //   // postcss-custom-properties    //
    //   // postcss-each                 // @each
    //   // postcss-for                  // @for
    //   // postcss-conditionals         // @if @else
    //   require('postcss-media-minmax'),
    //   require('postcss-extend'),
    //   require('postcss-nesting'),
    //   require('postcss-nested'),
    //   require('postcss-custom-selectors'),
    //   require('postcss-atroot'),
    //   require('postcss-property-lookup'),
    //   require('postcss-selector-matches'),
    //   require('postcss-selector-not'),
    // require('postcss-css-reset'),
    // require('postcss-utils'),
    // require('postcss-calc'),
    // require('postcss-initial'),
    // // require('postcss-inline-svg'),
    // // require('postcss-short'),
    // require('postcss-shape'),
    // 直接将 px 值编译出处为 rem
    // 需要设置 html 标签 font-size: 100px;
    px2rem({
      rootValue: 100,
      // unitPrecision: 5,
      // propWhiteList: [],
      // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      // propList: ['*'],
      // propBlackList: [],
      // selectorBlackList: [],
      // ignoreIdentifier: false,
      // replace: true,
      // mediaQuery: false,
      minPixelValue: 0,
    }),
    // require('cssnano')({
    //   preset: 'default',
    // }),
    // // require('pixrem'),
    // require('postcss-neat'),
    // require('colorguard'),
    // require('postcss-reporter'),

    // require('postcss-cssnext'),
  ],
  // },
}
