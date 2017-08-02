<template>
  <span class="iconfont" :style="styles" :class="classes">
    <slot></slot>
  </span>
</template>

<script>
/**
 * Icon
 * @module packages/Icon
 * @desc 徽章
 * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 *
 * @example
 * <Icon color="error">错误</Icon>
 * <Icon color="#333">30</Icon>
**/
export default {
  name: 'Iconfont',

  props: {
    bg: String,
    color: String,
    type: {
      type: String,
      required: true,
    },
    size: [Number, String],
  },

  computed: {
    styles() {
      return [
        { color: this.color },
        { backgroundColor: this.bg },
      ]
    },
    classes() {
      return [
        {
          radius: this.radius,
          round: this.round,
        },
        // this.size ? `size-${this.size}` : '',
        this.type ? `icon-${this.type}` : '',
      ]
    },
  },
}
</script>

<style lang="stylus">

</style>
