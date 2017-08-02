<template>
  <div id="app">
    <svg-icons></svg-icons>
    <router-view></router-view>
  </div>
</template>

<script>
import SvgIcons from '@/components/SvgIcons'
export default {
  data() {
    return {
    }
  },
  components: {
    SvgIcons,
  },
}
</script>

<style lang="stylus">
@import "../../vui/styles/base";

html,
body,
#app
.layout
  width 100%
  height 100%
  overflow hidden

body
  font-family -apple-system-font, "Helvetica Neue", sans-serif
  user-select none
  line-height 1.6
  font-size 16px
  background-color #F8F8F8
.page
  width 100%
  overflow-x hidden
  padding-top 40px

.icons
  vertical-align middle

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

</style>

