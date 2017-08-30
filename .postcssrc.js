// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = (ctx) => ({
  // ctx 来自于 loader 的 options 配置
  // parser: ctx.parser ? 'sugarss' : false,
  // map: ctx.env === 'dev' ? ctx.map : false,
  // from: ctx.from,
  // to: ctx.to,
  plugins: [
    // to edit target browsers: use "browserlist" field in package.json
    // "autoprefixer": {}

    // ...ctx.plugins
    // 暂时这里配置需要使用的 postcss 插件，OK 了，提交到 postcss-tools 插件中去

    // 直接将 px 值编译出处为 rem
    // 需要设置 html 标签 font-size: 100px;
    require('postcss-plugin-px2rem')({
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
    require('postcss-cssnext'),
    require('postcss-tools'),
  ]
})
