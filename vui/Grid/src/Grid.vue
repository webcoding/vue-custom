<template>

</template>

<script>
/**
 * Grid
 * @module packages/Grid
 * @desc 网格布局
 * @param {string} [tag] - 指定html标签
 * @help 参看 router-link
 * @help https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 *
 * @example
 * <Grid tag="div">
 *   ...
 * </Grid>
 */
export default {
  name: 'Grid',
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
@import "../../styles/fn";
/* @import "./style"; */

</style>
