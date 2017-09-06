<template>

</template>

<script>
/**
 * Modal 对话框
 * @module packages/Modal
 * @desc 模态对话框。
 * @rules
 *   - 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
 *   - 另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 Modal.confirm() 等静态方法。
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Modal>xxx</Modal>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Modal',
  props: {
    prefixCls: PropTypes.string.def('modal'),
    text: PropTypes.oneOfType([
      String,
      Number,
    ]),
    max: PropTypes.number.def(99),
    dot: Boolean,
    hidden: Boolean,
    color: String,
    textColor: String,
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    shape: PropTypes.oneOf([
      'dot',
      'circle',
      'radius',
      'square',
    ]).def('circle'),
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
