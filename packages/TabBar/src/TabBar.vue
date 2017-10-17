<template>

</template>

<script>
/**
 * TabBar 标签栏
 * @module packages/TabBar
 * @desc 位于 APP 底部，方便用户在不同功能模块之间进行快速切换。
 * @rules
 *   - 用作 APP 的一级分类，数量控制在 3-5 个之间。
 *   - 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
 *   - 使用 Badge 进行提示，足不出户也能知道有内容更新。
 * @param {string} [tag] - 指定html标签
 *
 * @example
 * <TabBar tag="div">
 *   ...
 * </TabBar>
 */
export default {
  name: 'TabBar',
  props: {
    // tag: {
    //   type: String,
    //   default: 'div'
    // },
  },
  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes() {
    //   return [
    //     {
    //       'badge-point': this.point,
    //       'badge-single': this.text && this.text.length === 1,
    //       radius: this.radius,
    //       round: this.round,
    //     },
    //     this.type ? `badge-${this.type}` : '',
    //   ]
    // },
  },
}
</script>

<style lang="stylus">
@import "../../style/fn";
/* @import "./style"; */

</style>
