# 设计

## 关于命名

- 扩展名: Vue模块使用 .vue 扩展名。
- 文件名: 文件名使用帕斯卡命名。
  - 如, ItemList.vue。
- 引用命名: Vue模块名使用帕斯卡命名，实例使用骆驼式命名。
  - 如, const reservationItem = <ReservationCard />;
- 模块命名: 模块使用当前文件名一样的名称。Footer 文件夹，就应该包含命名为 Footer 的模块。但是，如果整个文件夹是一个模块，使用 index.js作为入口文件，然后直接文件夹名作为模块的名称。
  - import Footer from './Footer';
- 高阶模块命名: 对于生成一个新的模块，其中的模块名应该使用新模块的名称
- 属性命名: 避免使用DOM相关的属性来用作其他的用途。
  - 对于style 和 className这样的属性名，我们都会默认它们代表一些特殊的含义，如元素的样式，CSS class的名称。
- 单引号还是双引号？属性值总是使用双引号("), 其他均使用单引号(').
- Props 属性
  - 属性名使用骆驼式风格camelCase。
    - 如, userName="hello"
  - 如果属性值为 true, 可以直接省略
    - `<Foo hidden />`
  - 避免使用数组的index来作为属性key的值，推荐使用唯一ID
  - 对于所有非必须的属性，总是手动去定义 defaultProps 属性
- Tags 标签
  - 对于没有子元素的标签来说总是自己关闭标签
  - 如果模块有多行的属性，关闭标签时新建一行
- 使用箭头函数来获取本地变量 (item, index) => { return item.name }
- 不要给所谓的私有函数添加 _ 前缀，本质上它并不是私有的。

Alignment 代码对齐

```jsx
// good, 有多行属性的话, 新建一行关闭标签
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>
// 子元素按照常规方式缩进
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```
