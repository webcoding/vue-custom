import navList from '@/navList'
console.log(navList)
import packages from '@packages/'
import { camelize, capitalize } from '@root/shared/util'

// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))

const registerRoute = (config) => {
  const routes = []
  config.map(nav =>
    nav.list.map((page) => {
      const path = capitalize(camelize(page.link))
      console.log(path)
      const isPackage = packages.indexOf(path) > -1
      // eslint-disable-line global-require
      if (page.status !== 'todo') {
        // const path = 'Badge'
        // var cc = isPackage && require(`@root/packages/${path}/demo/Basic`)
        // console.log(cc)
        // console.log(page.link)
        // isPackage ? require(`@root/packages/${path}/demo/Basic`).default : require(`@/views/${path}`),
        // 这里使用 require，要加 default，好坑啊(require 已经是老方法了，新的用 import)
        const component = isPackage ? () => import(`@root/packages/${path}/demo/Basic`) : () => import(`@/views/${path}`)
        routes.push({
          name: `demo/${page.link}`,
          path: `${page.link}`,
          component: component,
          meta: {
            title: `${page.title} ${page.small}`,
            desc: page.desc,
          },
        })
      }
      return false
    })
  )

  return routes
}

export default registerRoute(navList)
