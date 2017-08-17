<template>
  <i :class="classes" :style="styles">
    <svg class="svg-icon" aria-hidden="true" :style="wrapStyles" :title="type">
      <use :xlink:href="`#${type}`"></use>
    </svg>
    <slot></slot>
  </i>
</template>

<script>
/**
 * Iconsvg
 * @module packages/Iconsvg
 * @desc 矢量图标
 * @param {string} type - 显示类型
 * @param {number} [size] - 尺寸
 * @param {color} [color] - 颜色
 *
 * @example
 * <Icon type="String" size="Number" color="Color" />
 */
import PropTypes from 'vue-types'
export default {
  name: 'Iconsvg',

  props: {
    prefixCls: PropTypes.string.def('iconsvg'),
    type: PropTypes.string.isRequired,
    spin: Boolean,
    // size: [Number, String],
    size: PropTypes.oneOfType([
      String,
      Number,
    ]),
    shape: PropTypes.oneOf([
      'circle',
      'radius',
      'square',
    ]),
    bg: String,
    color: String,
    fill: String,
  },

  computed: {
    // 目前单位用 px
    wrapStyles() {
      const { size, fill } = this.$props
      var sizeStyle = {}
      if (size) {
        // var size = '280, 70'
        // console.log(size.split(/\s*,\s*| +/))
        const [width, height = width] = size.split(/\s*,\s*| +/)
        sizeStyle = {
          width: width, // svg 不需要单位
          height: height,
        }
      }
      return {
        fill: fill,
        ...sizeStyle,
      }
    },
    classes () {
      const {
        prefixCls,
        type,
        shape,
        reverse,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
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

<style lang="stylus" scope>
.svg-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transform: inherit;
}
</style>
