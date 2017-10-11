
// 懒加载 依赖syntax-dynamic-import插件解析语法
// import 内注释可以控制 chunks, returns a Promise
export function lazyLoad(page) {
  return () => import(/* webpackChunkName: "group" */ `../views/${page}`)
}
