<template>
  <div class="kit-doc">
    <doc-header :nav="config.header" :logo="config.logo" active="组件" />
    <doc-container :hasSimulator="!!simulator">
      <doc-nav :navConfig="config.nav" base="/component" />
      <doc-content>
        <doc-title :title="docTitle" />
        <slot></slot>
        <doc-footer-nav :list="docList" :index="currentIndex" />
      </doc-content>
    </doc-container>
    <doc-simulator v-if="simulator" :src="simulator" />
    <doc-footer :config="config.footer" />
  </div>
</template>

<script>
// import { findIndex } from 'lodash'
// 不能用已有标签，比如 header
import DocNav from './component/Nav.vue'
import DocBlock from './component/Block.vue'
import DocHeader from './component/Header.vue'
import DocFooter from './component/Footer.vue'
import DocContainer from './component/Container.vue'
import DocContent from './component/Content.vue'
import DocTitle from './component/Title.vue'
import DocFooterNav from './component/FooterNav.vue'
import DocSimulator from './component/Simulator.vue'
import DocDemoBlock from './component/DemoBlock.vue'

import { camelCase, upperFirst } from './util' // 使用简版
export default {
  name: 'kit-doc',

  components: {
    DocNav,
    DocHeader,
    DocFooter,
    DocBlock,
    DocContainer,
    DocContent,
    DocTitle,
    DocFooterNav,
    DocSimulator,
    DocDemoBlock,
  },

  props: {
    config: {
      type: Object,
      required: true,
    },
    simulator: String,
  },

  data() {
    return {
      docList: [],
    }
  },

  created() {
    this.setDocsList()
  },

  computed: {
    currentPath() {
      const baseUrl = '/component/'
      return this.$route.path.slice(baseUrl.length)
    },
    currentIndex() {
      const { currentPath, docList } = this
      let index = -1
      // findIndex
      for (let i = 0; i < docList.length; i++) {
        const item = docList[i]
        if (item.path === currentPath || item.link === currentPath) {
          index = i
          break
        }
      }
      // return findIndex(this.docList, { path: this.currentPath })
      return index
    },
    docTitle() {
      const { title = '' } = this.docList[this.currentIndex] || ''
      return upperFirst(camelCase(title))
    },
  },

  methods: {
    setDocsList() {
      const { nav = [] } = this.config
      for (let i = 0; i < nav.length; i++) {
        const navItem = nav[i]
        if (!navItem.groups) {
          this.docList.push(nav[i])
        } else {
          for (let j = 0; j < navItem.groups.length; j++) {
            this.docList = this.docList.concat(navItem.groups[j].list)
          }
        }
      }
    },
  },
}
</script>

<style lang="stylus">
@import './style/index';

</style>
