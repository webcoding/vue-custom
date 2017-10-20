<template>
  <div class="kit-doc">
    <doc-header :nav="config.header" :logo="config.logo" active="组件" />
    <doc-container :hasSimulator="!!simulator">
      <doc-nav :navConfig="config.nav" base="/component" />
      <doc-content>
        <doc-title :navConfig="config.nav" />
        <slot></slot>
        <doc-footer-nav :navConfig="config.nav" />
      </doc-content>
    </doc-container>
    <doc-simulator v-if="simulator" :src="simulator" />
    <doc-footer :config="config.footer" />
  </div>
</template>

<script>
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

import configDocs from './config/docs'

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

  data() {
    return {
      isDebug: true,
      transition: 'slide-left',
      simulator: this.getSimulatorPath(),
      config: configDocs,
    }
  },

  watch: {
    '$route'(to, from) {
      // 默认使用 'slide-left' 如果使用的是 back（暂判断不出来），也使用 slide-left
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      // this.transition = this.checkDirecition(to.name, from.name) ? 'slide-left' : 'slide-right'
    },
  },

  methods: {
    getSimulatorPath() {
      const dir = location.hash.split('/').pop()
      if (dir === 'quickstart' || dir === 'changelog') {
        return '/'
      } else {
        return `/#/demo/${dir}`
      }
    },
    // checkDirecition(to, from) {
    //   const map = ['index', 'demo', 'about', 'login', 'component', 'user'].reverse()
    //   // 不存在为 -1，设置默认匹配小于零，对应 slide-left
    //   return (map.indexOf(to) - map.indexOf(from)) < 0
    // },
  },
}
</script>

<style lang="stylus">
@import './style/index';

*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
body {
  font-size: 16px;
}
html,
body,
#app{
  height: 100%;
}

body{
  position: relative;
  /*font-family: Roboto, Helvetica, sans-serif;*/
  /*font-size: 15px;*/
  /*background-color: lighten(#eceef1, 30%);*/
  margin: 0;
  // padding-top: 55px;
  color: #34495e;

  // 切换 view 时，pc 端由于页面高度，是否有滚动条，整体宽度不一致，会有跳动
  height: 100%;
  overflow-y: scroll;
  // 处理切换时导致的横向滚动条
  overflow-x: hidden;
}

#app {
  position: relative;
}

a{
  color: #34495e;
  text-decoration: none;
}

.header{
  background-color: #ff6600;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
  .inner{
    max-width: 800px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;
  }

  a{
    color: rgba(255, 255, 255, .8);
    line-height: 24px;
    transition: color .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: .075em;
    margin-right: 1.8em;

    &:hover{
      color: #fff;
    }
    &.router-link-active{
      color: #fff;
      font-weight: 400;
    }
    &:nth-child(6){
      margin-right: 0;
    }
  }

  .github{
    color: #fff;
    font-size: .9em;
    margin: 0;
    float: right;
  }

  .logo{
    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }
}

.view{
  max-width: 800px;
  margin: 0 auto 60px;
  position: relative;
  // width: 100%;
  // position: absolute;
  // transition: all .3s cubic-bezier(.55,0,.1,1);
}

.fade-enter-active,
.fade-leave-active{
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active{
  opacity: 0;
}

// 元素过渡效果
.slide-left-enter,
.slide-right-leave-active{
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter{
  opacity: 0;
  transform: translate(-30px, 0);
}

.item-move,
.item-enter-active,
.item-leave-active{
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.item-enter{
  opacity: 0;
  transform: translate(30px, 0);
}

.item-leave-active{
  position: absolute;
  opacity: 0;
  transform: translate(30px, 0);
}

@media (max-width: 860px){
  .header .inner{
    padding: 15px 30px;
  }

}


@media (max-width: 600px){
  body{
    font-size: 14px;
  }

  .header{
    .inner{
      padding: 15px;
    }

    a{
      margin-right: 1em;
    }

    .github{
      display: none;
    }

  }

}
</style>
