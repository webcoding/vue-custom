# 应用项目结构

```shell
├── dist           # 打包输出
├── config         # 打包编译配置
│   ├── env.js         # 打包环境变量
│   ├── project.js     # 项目相关
│   └── index.js       # 出口
│
├── src
│   ├── assets      # 静态资源
│   │   └── ...
│   ├── components  # 公共组件
│   ├── routes      # 路由
│   ├── services    # api 相关模块
│   │   └── mock        # 模拟数据
│   ├── setting     # 项目参数设置
│   ├── store       # vuex
│   ├── util        # 工具
│   ├── views       # 页面 pages
│   ├── App.vue
│   ├── createApp.js
│   ├── index.js            # 入口文件
│   ├── build.config.js     # 配置文件，或使用 config
│   └── index.template.html
│
├── test            # 只放配置文件，具体单元测试等文件，放在项目中（src 中）
├── static
│   ├── img/icons
│   └── manifest.json
│
├── .xxxrc          # 各种开发配置
├── package.json
└── README.md
```

## 关于配置

每个应用项目都通过配置，改变 build 默认配置来实现编译
