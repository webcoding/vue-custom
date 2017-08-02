<template>
  <svg class="svg-icon" aria-hidden="true" :style="wrapStyles" :title="type">
    <use :xlink:href="`#${type}`" :style="styles"></use>
  </svg>
</template>

<script>
/**
 * Icon
 * @module packages/Icon
 * @desc 图标
 * @param {string} type - 显示类型
 * @param {number} [size] - 尺寸
 * @param {color} [color] - 颜色
 *
 * @example
 * <Icon type="String" size="Number" color="Color" />
 */
export default {
  name: 'Icon',
  data() {
    return {
      // preloader,
    }
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    size: [Number, String],
    color: String,
  },

  computed: {
    // 目前单位用 px
    wrapStyles() {
      const { size } = this
      if (!size) return {}
      // var size = '280, 70'
      // console.log(size.split(/\s*,\s*| +/))
      const [width, height = width] = size.split(/\s*,\s*| +/)
      return [
        { width: width },
        { height: height },
      ]
    },
    styles() {
      return [
        this.color ? { fill: this.color } : { },
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
}
</style>
