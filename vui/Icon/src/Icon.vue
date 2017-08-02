<template>
  <i class="icons icon-after" :class="classes"><slot></slot></i>
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
    // size: [Number, String],
    // color: String,
  },

  computed: {
    // 目前单位用 px
    // styles() {
    //   const { size } = this
    //   if (!size) return {}
    //   // var size = '280, 70'
    //   // console.log(size.split(/\s*,\s*| +/))
    //   const [width, height = width] = size.split(/\s*,\s*| +/)
    //   return [
    //     { width: width },
    //     { height: height },
    //     this.color ? { color: this.color } : { },
    //   ]
    // },
    classes() {
      return [
        this.type ? `icon-${this.type}` : '',
      ]
    },
  },
}
</script>

<style lang="stylus" scope>
.icons
  color #888888

.icon-after::after,
.icon-before::before
  content ''
  display inline-block
  width 12px
  height 12px
  color inherit

.icon-arrow::after
  width 9px
  height 9px
  border-width 1px 1px 0 0
  border-color currentColor
  border-style solid
  transform matrix(0.71, 0.71, -0.71, 0.71, 0, 0)

</style>
