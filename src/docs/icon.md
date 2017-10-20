# Icon


## IconSvg

Icon 首选 svg 渲染，可实现按需加载，并且非常容易编辑修改替换管理

## IconFont

其次选择使用图标字体，采用连体字符，参见 [维基百科 - 合字](https://zh.wikipedia.org/wiki/合字)

### 文件

- `packages/Icon`

### *请根据兼容性需要选择字体文件（>=1）*

- `fonts/iconfont.ttf`
- `fonts/iconfont.woff`
- `fonts/iconfont.svg`
- `fonts/iconfont.eot`

### 用法

``` vue
<!-- 使用 value -->
<Icon mode="svg" type="info-circle"></Icon>
<Icon mode="font" type="cross"></Icon>

<!-- 或直接使用 slot -->
<IconCustom>custom icon</IconCustom>
```

### 编辑

目前无论是 IconSvg 还是 IconFont 都在[iconfont](http://www.iconfont.cn/)平台管理维护。

1. 打开 [iconfont](http://www.iconfont.cn/)
1. 导入 SVG 字体文件
1. ...

### 存在问题

可以固化部分常用图标，可以采用 svg inline 实现在组件样式中
