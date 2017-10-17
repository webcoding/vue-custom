# kit-ui

Vue custom element with (vue2 + vue-router + vuex + webpack3)

参考： ant-design, elm, iview, youzan, redx-vue

## 安装

```bash
npm i kit-ui -S
```

### 引入组件

方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
{
  "plugins": [
    [
      "import", {
        "libraryName": "kit-ui",
        "style": true
      }
    ]
  ]
}
```

接着你可以在代码中直接引入`kit-ui`组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'kit-ui';
```

### 方式二. 按需引入组件

```js
import { Button } from 'kit-ui/lib/button';
```

#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import KitUI from 'kit-ui';

Vue.use(KitUI);
```

### 自定义主题

`kit-ui`提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。

你可以完全替换主题色或者部分样式。

### vue-cli 模板

可以使用`vue-cli`来初始化`kit-ui`的通用模板：

```shell
vue init jskit/kit-start projectName
```

## 功能划分

```bash
.
├── kit-ui  组件
├── kit-api 接口
└── demo
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构

构建时，服务应该以 dist 为根建立服务，并把启动服务的脚本设置到此目录

```bash
.
├── build/                 # 构建本目录
├── src/                   # 项目 demo 示例
├── dist/                  # build 生成的生产环境下的项目
├── packages/          # 组件
│   ├── xxx                # 组件包
│   │   ├── demo/              # 使用示例
│   │   ├── src/               # 源码
│   │   ├── test/              # 测试用例
│   │   └── index.js           # 出口
│   ├── ...
│   ├── index.js
│   └── README.md
│
├── docs/               # 源码目录（开发都在这里进行）
│   ├── assets/            # 放置需要经由 Webpack 处理的静态文件
│   ├── mixins/            # 混入
│   ├── util/             # 工具函数
│   ├── style/            # 样式
│   └── index.js           # 组件汇总输出
│
├── static/              # 放置无需经由 Webpack 处理的静态文件
|                        # 静态文件合并，不要放置令人混淆的多个目录结构
├── test/                # 主要的测试文件目录
├── .babelrc             # Babel 转码配置
├── .eslintrc            # ES 语法检查配置
├── .eslintignore        # （配置）ESLint 检查中需忽略的文件（夹）
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # 项目描述文件
└── README.md
```
