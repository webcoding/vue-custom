<template>
  <i :class="classes" :style="styles">
    <slot></slot>
  </i>
</template>

<script>
/**
 * Icon
 * @module packages/Iconfont
 * @desc 徽章
 * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 *
 * @example
 * <Icon color="error">错误</Icon>
 * <Icon color="#333">30</Icon>
**/
import PropTypes from 'vue-types'
export default {
  name: 'Iconfont',

  props: {
    prefixCls: PropTypes.string.def('icon'),
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
      String,
      Number,
    ]),
    shape: PropTypes.oneOf([
      'dot',
      'circle',
      'radius',
      'square',
    ]),
    bg: PropTypes.string,
    color: PropTypes.string,
  },

  computed: {
    classes () {
      const {
        prefixCls,
        type,
        size,
        shape,
        reverse,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-font`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${reverse}`]: reverse,
        [`is-${shape}`]: shape,
      }
    },
    styles() {
      return [
        { color: this.color },
        { backgroundColor: this.bg },
      ]
    },
  },
}
</script>

<style lang="stylus">

</style>
