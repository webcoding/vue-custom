<script>
/**
 * Icon
 * @module packages/Icon
 * @desc 图标集，支持字体图标以及svg图标
 * @rules
 *   - 图标集合，自动生成对应的自定义图标引用，除 use 外，其他 props 会自动传递到内部
 * @param {string} [use] - 传入图标类型 [font, svg, canvas, custom]
 * @param {string} type - 显示类型
 * @param {number} [size] - 尺寸
 * @param {color} [color] - 传入颜色值
 *
 * @example
 * <Icon use="font" type="String" />
 */
import PropTypes from 'vue-types'
export default {
  name: 'Icon',

  props: {
    prefixCls: String,
    type: PropTypes.string.isRequired,
    spin: Boolean,
    size: [String, Number],
    use: PropTypes.oneOf([
      'font',
      'svg',
      'canvas',
      'custom',
    ]).def('font'),
    shape: PropTypes.oneOf([
      'circle',
      'radius',
      'square',
    ]),
    bg: String,
    color: String,
    fill: String,
  },

  render(createElement) {
    // const $default = this.$slots.default
    // const $data = $default.$data
    // const { use } = this.$props
    const { use, ...props } = this.$props

    var componentTag
    switch (use) {
      case 'svg':
        componentTag = 'svg'
        break
      case 'font':
      case 'canvas':
      case 'custom':
      default:
        componentTag = 'font'
    }
    return createElement(
      `Icon${componentTag}`,
      {
        props: props,
      },
      this.$slots.default
    )
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
