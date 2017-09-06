<template>

</template>

<script>
/**
 * Breadcrumb 面包屑
 * @module packages/Breadcrumb
 * @desc 显示当前页面在系统层级结构中的位置，并能向上返回。
 * @rules
 *   - 当系统拥有超过两级以上的层级结构时；
 *   - 当需要告知用户『你在哪里』时；
 *   - 当需要向上导航的功能时。
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Breadcrumb>xxx</Breadcrumb>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Abc',
  props: {
    props: {
      prefixCls: PropTypes.string.def('breadcrumb'),
      separator: PropTypes.string.def('/'),
    },
  },
  computed: {
    classes () {
      const {
        prefixCls,
        type,
        size,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
      }
    },
    // styles () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
