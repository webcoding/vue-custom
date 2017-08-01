<template>
  <div id="app">
    <svg-icons></svg-icons>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SvgIcons from '@/components/SvgIcons'
export default {
  components: {
    SvgIcons,
  },
}
</script>

<style lang="stylus">
@import "../../packages/styles/base";

</style>

