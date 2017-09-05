<template>
  <div id="app">
    <!-- <svg-icons></svg-icons> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import SvgIcons from '@/components/SvgIcons'
export default {
  data() {
    return {
    }
  },
  components: {
    // SvgIcons,
  },
}
</script>

<style lang="stylus">
/* 纯 postcss 加感叹号 此注释会保留，但是前面多了 N 多空行 */
/* 此注释不会保留 */
// 测试注释，这里写双斜杠注释没问题
// 目前 postcss 代码高亮有问题
@import "../../vui/styles/index";

.page
  width: 100%
  overflow-x: hidden
  padding-top: 40px

.iconfont
  vertical-align: middle
  position: absolute 0 0 0 0

.fade-enter-active,
.fade-leave-active
  transition: all .2s ease

.fade-enter,
.fade-leave-active
  opacity: 0


.slide-left-enter,
.slide-right-leave-active
  opacity: 0
  transform: translate(30px, 0)

.slide-left-leave-active,
.slide-right-enter
  opacity: 0
  transform: translate(-30px, 0)

.item-move,
.item-enter-active,
.item-leave-active
  transition: all .5s cubic-bezier(.55,0,.1,1)

.item-enter
  opacity: 0
  transform: translate(30px, 0)

.item-leave-active
  position: absolute
  opacity: 0
  transform: translate(30px, 0)


html,
body,
#app,
.tpl-layout
  size: 100%
  overflow: hidden

body
  font-family: -apple-system-font, "Helvetica Neue", sans-serif
  user-select: none
  line-height: 1.6
  font-size: 16px
  background-color: #F8F8F8

</style>
