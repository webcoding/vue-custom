<script>
/**
 * XTag
 * @module packages/XTag
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 * @help 参看 router-link
 * @help https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 *
 * @example
 * <XTag tag="div">
 *   ...
 * </XTag>
 */
export default {
  name: 'XTag',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    // exact: Boolean,
    // append: Boolean,
    // replace: Boolean,
    // activeClass: String
  },
  render(h) {
    const $default = this.$slots.default
    const data = $default.data

    return h(this.tag, data, this.$slots.default)
  },
}
</script>
