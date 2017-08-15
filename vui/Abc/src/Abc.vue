<template>

</template>

<script>
/**
  * Abc 名称
 * @module packages/Button
 * @desc 猫叔
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型，primary, danger
 *
 * @example
 * <Button type="primary" size="large" iconfont="back">按钮</Button>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Abc',
  props: {
    props: {
      prefixCls: PropTypes.string.def('btn'),
    },
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
