import KitDoc from './KitDoc'
import DocNav from './component/Nav.vue'
import DocBlock from './component/Block.vue'
import DocHeader from './component/Header.vue'
import DocFooter from './component/Footer.vue'
import DocContent from './component/Content.vue'
import DocContainer from './component/Container.vue'
import DocFooterNav from './component/FooterNav.vue'
import DocSimulator from './component/Simulator.vue'
import DocDemoBlock from './component/DemoBlock.vue'

const components = [
  KitDoc,
  DocNav,
  DocHeader,
  DocFooter,
  DocBlock,
  DocContent,
  DocContainer,
  DocFooterNav,
  DocSimulator,
  DocDemoBlock,
]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(Component => {
    Vue.component(Component.name, Component)
  })
}

export default install

