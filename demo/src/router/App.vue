<template>
  <section class="layout">
    <XHeader></XHeader>
    <router-view></router-view>
  </section>
</template>

<script>
import XHeader from '@/components/XHeader'
export default {
  name: 'layout-app',
  components: {
    XHeader,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.index-hd
  padding 40px
  text-align center

.index-bd
  padding 0 16px 20px

.index-ft
  padding-bottom 1px
  text-align center

.index-logo
  width 40px
  height 40px

.index-desc
  margin-top 8px
  color #888
  font-size 13px

.kind-list
  .item
    margin 10px 0
    border-radius 2px
    overflow hidden
    background-color #fff
  .item-hd
    padding 16px
    display flex
    align-items center
    transition opacity 0.3s
  .text
    flex 1
  .item-icon
    width 30px
    height 30px
</style>
