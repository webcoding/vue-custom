<template>

</template>

<script>
/**
 * Notification 通知提醒框
 * @module packages/Notification
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Notification>xxx</Notification>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Notification',
  props: {
    prefixCls: PropTypes.string.def('notification'),
    animation: PropTypes.string.def('fade'),
  },
  computed: {
    classes () {
      const {
        prefixCls,
        type,
        size,
        shape,
        block,
        hollow,
        disabled,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`is-${shape}`]: shape,
        'is-hollow': hollow,
        'is-block': block,
        'disabled': disabled,
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
