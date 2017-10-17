/*
使用 webpack 的 require.context 实现路由“去中心化”管理
require.context(directory, useSubdirectories, regExp)
  require.context 有三个参数：
  directory：说明需要检索的目录
  useSubdirectories：是否检索子目录
  regExp: 匹配文件的正则表达式
**/
// const modules = require.context('./', false, /\.vue$/)

/*
  将目录中所有组件名称转成首字母大写的驼峰表达式，然后全部导出。
  例如c-button => CButton，c-group-cell＝>CGroupCell
*/

// export default modules.keys().reduce((module, key) => {
//   module[key.replace(/-[a-z]/g, $1 => $1.split('-')[1].toUpperCase()).replace(/(^\.\/)|(.vue)$/g, '').replace(/^c/, $1 => $1.toUpperCase())] = modules(key)
//   return module
// }, {})


export default [
  // 'Abc',
  'Icon',
  'Layout',
  'Badge',
  'Button',
  'Cell',
  'Alert',
  'Spin',
  // 'Debug',
  'IndexList',
  'Group',
  'Page',
  'XHeader',
  'SearchBar',
  'Switch',
  'Field',
  'Tabs',
  'Flex',
  'Grid',
  'QRcode',
  'Divider',
  // 'XTag',
]
