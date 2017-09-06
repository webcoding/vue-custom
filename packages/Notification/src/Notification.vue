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
    prefixCls: PropTypes.string.def('ve-notification'),
    animation: PropTypes.string.def('fade'),
  },
  computed: {
    classes () {
      const {
        prefixCls,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
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
