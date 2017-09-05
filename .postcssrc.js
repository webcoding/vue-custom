// https://github.com/michael-ciniawsky/postcss-load-config

// var config = require('./config')
// var syntax = require('postcss-scss');

// 这个配置的不对

module.exports = ({ file, options, env }) => ({
  // parser: 'sugarss',
  // syntax: 'sugarss',
  // syntax: 'postcss-scss',
  // ctx 来自于 loader 的 options 配置
  // parser: 'sugarss',
  // parser: syntax,
  // map: ctx.env === 'dev' ? ctx.map : false,
  // from: ctx.from,
  // to: ctx.to,
  plugins: [
    // to edit target browsers: use 'browserlist' field in package.json
    // 'autoprefixer': {}

    // ...ctx.plugins
    // 暂时这里配置需要使用的 postcss 插件，OK 了，提交到 postcss-tools 插件中去
    // 常见顺序有些事必要的，经过验证可以添加到 postcss 的验证中去
    // sugarss 基于缩进的css语法，包含两种注释形式
    // require('postcss-scss')({}),
    // require('postcss-inline-comment'),
    // require('postcss-strip-inline-comments'),
    // require('postcss-discard-comments'),
    // require('postcss-functions')({
    // require('cssnano')
    //   // glob: path.join(__dirname, 'functions', '*.js')
    // }),
    // require('postcss-import')({
    //   root: file.dirname,
    //   root: config.root,
    //   path: config.root,
    //   // addDependencyTo: ctx,
    //   // root: paths.client('themes/default'),
    // }),
    // require('poststylus'),
    // require('postcss-easy-import')({
    //   // root: config.root,
    //   prefix: true,
    //   extensions: ['.pcss', '.css'],
    // }),
    // require('postcss-cssnext'),
    // require('postcss-html'),
    // 直接将 px 值编译出处为 rem
    // 需要设置 html 标签 font-size: 100px;
    // require('postcss-plugin-px2rem')({
    //   rootValue: 100,
    //   // unitPrecision: 5,
    //   // propWhiteList: [],
    //   // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
    //   // propList: ['*'],
    //   // propBlackList: [],
    //   // selectorBlackList: [],
    //   // ignoreIdentifier: false,
    //   // replace: true,
    //   // mediaQuery: false,
    //   minPixelValue: 0,
    // }),
    // require('postcss-tools'),
      // require('postcss-plugin-bem'),
      // require('postcss-plugin-color-functions'),
      // require('saladcss-partial-import'),
      // require('precss'),
        // require('postcss-partial-import')({
        //   root: config.root,
        //   extension: '.pcss',
        // }),
        // require('postcss-mixins'),
        // require('postcss-advanced-variables'),
        // require('postcss-custom-media'),
        // require('postcss-custom-properties'),
        // require('postcss-media-minmax'),
        // require('postcss-color-function'),
        // require('postcss-nesting'),
        // require('postcss-nested'),
        // require('postcss-custom-selectors'),
        // require('postcss-atroot'),
        // require('postcss-property-lookup'),
        // require('postcss-extend'),
        // require('postcss-selector-matches'),
        // require('postcss-selector-not'),
      // require('postcss-css-reset'),
      // require('postcss-utils'),
      // require('postcss-calc'),
      // require('postcss-initial'),
      // require('postcss-inline-svg'),
      // require('postcss-short'),
      // require('postcss-shape'),
      // // require('pixrem'),
      // require('postcss-neat'),
    // require('colorguard'),
    // require('postcss-reporter'),
  ],
})


/**

// https://www.postcss.parts/
// https://github.com/postcss/postcss#plugins

// hot
cssnext
precss
cssnano
rucksack
stylelint

//
poststylus          // 让 stylus和 postcss 一起工作
postcss-html        // allows you to write styles in HTML / Markdown / Vue component
sugarss             //√ 基于缩进的css语法，包含两种注释形式
postcss-cssnext     //√ 支持最新 css 语法，如var() @apply等用法参见http://cssnext.io/
                    //（已包含autoprefixer模块）
postcss-import      //√ 支持 @import
postcss-nested-props // 支持嵌套属性，类似 with，要用在 nested 之前
postcss-nested      //√ 解包嵌套规则（如内层使用了@media,会正确解析）
postcss-nesting     //√ 支持规则嵌套 & 以及 @nest（支持解析 a,b{c,d{...规则}}类型的嵌套）
postcss-simple-vars //√ 简单定义 css 变量 $type: gray; $width: 100px; $prefix: vue-
postcss-functions   //√ 可自定义函数，参见colorPalette的使用
postcss-color-function        //√ 支持常用的颜色函数 lightness tint shade ...
postcss-at-rules-variables    //√ 定制属性 @['for', 'if', 'else', 'each', 'mixin', 'custom-media']
  postcss-custom-properties       // var支持(此实现W3C规范，var()的使用是有限的属性值，无法用于媒体查询)
  postcss-each                    // @each
  postcss-for                     // @for
  postcss-conditionals            // @if @else
postcss-define-property //√ 支持定义和使用自定义属性，可实现类似函数
postcss-css-variables // var支持 @media, @support等
                      // postcss-custom-properties 的 var 变量声明限制在 :root
                      // postcss-css-variables 的 var 变量声明无限制
postcss-custom-selectors // 自定义选择符
postcss-utilities   // 支持 @util
postcss-mixins      // 支持 @mixin 用法——通过@include将@mixin定义好的模块调用进来：
postcss-extend      // 支持 @extend 用法——可以把相同的样式抽取出来，定义为一个类，使用时@extend进来
postcss-position    //√ 指定定位的一行书写方式
postcss-size        //√ 支持 size，同时设置宽高
postcss-initial     //√ adds all: initial support, which resets all inherited styles.
                    // supports initial keyword and all: initial to clean inherit styles.
postcss-font-magician //√ 实现神奇的@font-face规则，更可控
stylelint             //√ 样式检测
postcss-write-svg     //√ 直接 css 中书写 svg
colorguard            //√ 颜色警卫，对颜色相似性做实时检测
lost                  //√ LostGrid css栅格布局系统 https://github.com/peterramsing/lost
cq-prolyfill          //√ adds container query support, allowing styles
                      // that respond to the width of the parent.
postcss-autoreset     // is an alternative to using a global reset
                      // that is better for isolatable components.
postcss-color-short   // 缩写颜色代码 #23 => #232323
                      // rgba (0，0.5) => rgba (0，0，0，0.5)

postcss-assets              // 提供了很多实用的图像处理函数：
    - 归约 URL： 通过给定文件名，PostCSS Assets 会使用根路径或完全合法的 URL 来替换 resolve(image)。
    - 处理尺寸： PostCSS Assets 会使用一个等价的像素值来替换 width(image)， height(image) 或 size(image)。
    - 内联图像： PostCSS Assets 会使用 Base64 编码的字符串替换 inline(image)。
    - 清除缓存： PostCSS Assets 会给图像引用添加一个随机的查询字符串来确认加载的是最新的文件。
postcss-inline-svg          // css中加载 svg，引用为data:image/svg+xml;charset=utf-8,格式
postcss-easing-gradients    // 创建平滑线性梯度近似缓解功能
postcss-will-change         // 通过添加backface-visibility属性，触发GPU处理器
postcss-inline-comment        // 支持移除单行注释
postcss-strip-inline-comments //√ 支持移除单行注释
postcss-discard-comments      // 支持移除 css 注释
postcss-scss        // It simply parses mixins as custom at-rules & variables as properties
postcss-media-minmax
postcss-transform-shortcut
postcss-alias     // 别名，支持自定义的简写属性
doiuse            // 属性支持检测
postcss-shape     // css绘制基本形状，rect、circle、triangle
postcss-circle    // 纯CSS来创建形状
postcss-triangle  |/
postcss-center    // 垂直或水平居中
postcss-clearfix  // 清除浮动
postcss-bem             // Bem Suit 命名风格
postcss-bem-linter      // 验证
postcss-pseudoelements  // 处理IE8伪类表示，仅支持一个冒号:，双冒号降级为单冒号
css-mqpacker      // 相同的媒体查询合并为一个
es-css-modules    // 输出 css modules
postcss-modules   // 使用 css modules（比es-css-modules使用者更多）
// postcss-modules and react-css-modules automatically isolate selectors within components.
postcss-sprites   // 生成 icon 雪碧图

postcss-neat      // 一个语义化的流体网格系统
postcss-define-function  // PostCSS plugin to implement sass @function.


// cssnano default advanced
autoprefixer	❌	✅
cssnano-util-raw-cache	✅	✅
postcss-calc	✅	✅
postcss-colormin	✅	✅
postcss-convert-values	✅	✅
postcss-discard-comments	✅	✅
postcss-discard-duplicates	✅	✅
postcss-discard-empty	✅	✅
postcss-discard-overridden	✅	✅
postcss-discard-unused	❌	✅
postcss-merge-idents	❌	✅
postcss-merge-longhand	✅	✅
postcss-merge-rules	✅	✅
postcss-minify-font-values	✅	✅
postcss-minify-gradients	✅	✅
postcss-minify-params	✅	✅
postcss-minify-selectors	✅	✅
postcss-normalize-charset	✅	✅
postcss-normalize-display-values	✅	✅
postcss-normalize-positions	✅	✅
postcss-normalize-repeat-style	✅	✅
postcss-normalize-string	✅	✅
postcss-normalize-timing-functions	✅	✅
postcss-normalize-unicode	✅	✅
postcss-normalize-url	✅	✅
postcss-normalize-whitespace	✅	✅
postcss-ordered-values	✅	✅
postcss-reduce-idents	❌	✅
postcss-reduce-initial	✅	✅
postcss-reduce-transforms	✅	✅
postcss-svgo	✅	✅
postcss-unique-selectors	✅	✅
postcss-zindex


```使用示例

// postcss-simple-vars 简单定义 css 变量
$type: gray;
$width: 100px;
$prefix: vue-
$prefix { }
$(prefix)_button { }

// @each 循环
@each $icon in foo, bar, baz {
  .icon-$(icon) {
    background: url('icons/$(icon).png');
  }
}

// @for 循环
@for $i from 1 to 3 {
  .b-$i {
    width: $i px;
    @if $i == 2 {
      color: green;
    }
  }
}

// postcss-custom-properties 的 var 支持，被限定在 :root 中
:root {
  --color: red;
}

div {
  color: var(--color);
}
```

// postcss-css-variables 的 var 支持
.component {
  --text-color: blue;
}

.component .header {
  color: var(--text-color);
}

.component .text {
  --text-color: green;
  color: var(--text-color);
}

// @extend
%container {
  padding-left: 15px;
}
@media (--md-viewport) {
  %container {
    padding-left: 2em;
  }
}
.extendingClass {
  @extend %container;
}

// @util
.cfx {
    @util clearfix;
}

// postcss-define-property 自定义属性
size: $height $width {
  height: $height;
  width: $width;
}

size: $size {
  height: $size;
  width: $size;
}

.rectangle {
  size: 50px 100px;
}

.square {
  size: 50px;
}

// postcss-nested-props 支持嵌套属性
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}

// post-nesting 混合嵌套以及 @nest 用法
a, b {
  color: red;

  // 解析为四种组合
  & c, & d {
    color: white;
  }
}

a {
  text-decoration: none;

  // 提升变为 h1 a 样式
  @nest h1 & {
    color: blue;

    &:not(:hover) {
      color: MediumVioletRed;
    }
  }
}

// postcss-nested 支持解析 @media
.phone {
  &_title {
    width: 500px;
    @media (max-width: 500px) {
      width: auto;
    }
    body.is_dark & {
      color: white;
    }
  }
  img {
    display: block;
  }
}

// postcss-custom-selectors 自定义选择符
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

article :--heading + p {
  margin-top: 0;
}

// 一行定位
.absolute {
  position: absolute 1rem 1rem 0 0;
}

// 同时设置宽高
.size_a {
  size: 1rem 2rem;
}
.size_b {
  size: 1rem;
}

// postcss-color-short 缩写颜色代码
#23 => #232323
rgba (0，0.5) => rgba (0，0，0，0.5)


// postcss-write-svg
// input
@svg square {
  @rect {
    fill: black;
    width: 100%;
    height: 100%;
  }
}
.example {
  background: svg(square);
}

// output
.example {
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9ImJsYWNrIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+');
}

// cq-prolyfill 内容的媒体查询 https://github.com/ausi/cq-prolyfill
// https://ausi.github.io/cq-prolyfill/demo/
.element:container(min-width: 100px) {
  // Styles for .element if its container is at least 100px wide
}
.element[data-cq~='min-width:100px'] {
  // Alternative syntax, same as the container query above
}
.element:container(text-align = right) {
  // Styles for .element if its container has a right text-align
}
```

*/
