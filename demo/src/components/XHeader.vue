<template>
  <header class="page-head">
    <div class="page-head-title">{{title}}</div>
    <div class="page-head-line"></div>
    <div v-if="desc" class="page-head-desc">{{desc}}</div>
  </header>
</template>

<script>
export default {
  name: 'XHeader',

  data() {
    return {
      title: '官方组件展示',
      desc: '',
    }
  },
}
</script>

<style lang="stylus">

.page-head
  position absolute
  z-index 100
  top 0
  left 0
  width 100%
  height 40px
  line-height 40px
  text-align center

</style>
