<script>
/**
 * Icon
 * @module packages/Icon
 * @desc 图标集，支持字体图标以及svg图标
 * @desc 语义化的矢量字体图标。
 * @rules 每个图标请使用语义化的命名，部分规则如下
 *   - 根据不同需要，选择不同的图标模式 mode
 *   - 实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；
 *   - 命名顺序：[图标名]-[形状?]-[描线?]-[方向?]。
 * @param {string} [mode] - 传入图标类型 [font, svg, canvas, custom]
 * @param {string} type - icon 的 Name
 * @param {number} [size] - 尺寸, svg 传入宽高逗号间隔，iconfont 传入字体大小
 * @param {color} [color] - 传入颜色值
 *
 * @example
 * <Icon mode="svg" type="String" />
 * <Icon mode="font" type="String" />
 * <Icon mode="custom" type="String" />
 */
import PropTypes from 'vue-types'
const warnMsg = 'Icon $props.type is invalid, have you set svg-sprite-loader correctly? see https://github.com/kisenka/svg-sprite-loader'
export default {
  name: 'Icon',

  props: {
    prefixCls: String,
    type: PropTypes.string.isRequired,
    spin: Boolean,
    size: [String, Number],
    mode: PropTypes.oneOf([
      'font',
      'svg',
      'canvas',
      'custom',
    ]).def('svg'),
    shape: PropTypes.oneOf([
      'circle',
      'radius',
      'square',
    ]),
    bg: String,
    color: String,
    fill: String,
    reverse: Boolean,
  },

  computed: {
    iconType() {
      const { mode, type } = this.$props
      if (mode !== 'svg') {
        return null
      }
      if (!type || typeof type !== 'string') {
        console.error(warnMsg)
        return null
      }

      let xlinkHref = this.renderSvg()
      if (!/^#/.test(xlinkHref || type)) {
        console.error(warnMsg)
      }
      // let outerIcon
      if (!xlinkHref) {
        // outerIcon = true
        xlinkHref = type
      } else {
        xlinkHref = `#${type}`
      }
      // console.log(xlinkHref)
      return xlinkHref
    },
    classes () {
      const {
        mode,
        type,
        spin,
        shape,
        reverse,
      } = this.$props

      let { prefixCls } = this.$props
      if (prefixCls === undefined) {
        prefixCls = mode ? `icon-${mode}` : `icon-svg`
      }
      // this.prefixCls = prefixCls
      return {
        // icon: true,
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: !!type,
        [`${prefixCls}-${reverse}`]: reverse,
        [`is-${shape}`]: !!shape,
        [`is-spin`]: spin || type === 'loading',
      }
    },
    // 目前单位用 px
    svgStyles() {
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
    styles() {
      const {
        size,
        color,
        bg,
      } = this.$props

      return {
        fontSize: `${size}px`,
        bg: !!bg,
        color: !!color,
      }
    },
  },

  methods: {
    renderSvg() {
      const { type } = this.$props
      let svg
      try {
        svg = require(`@root/vui/Icon/src/assets/${type}.svg`)
      } catch (e) {
        svg = {}
        // console.log(e)
      } finally {
        /* eslint no-unsafe-finally: 0 */
        return svg.default
      }
    },
  },

  render(h) {
    // const $default = this.$slots.default
    // const $data = $default.$data
    // const { mode } = this.$props
    const { mode } = this.$props
    // const { mode, ...props } = this.$props

    let iconNode = null
    // var componentTag
    switch (mode) {
      case 'font': {
        const { classes, styles } = this
        iconNode = (
          <i class={ classes } style={ styles }></i>
        )
        break
      }
      // case 'canvas':
      //   componentTag = 'IconCanvas'
      //   break
      // case 'custom':
      //   // 自己输入对应的样式
      //   componentTag = 'IconCustom'
      //   break
      case 'svg':
      default: {
        const { classes, svgStyles, iconType } = this
        // componentTag = 'IconSvg'
        iconNode = (
          <svg class={ classes } style={ svgStyles } title={ iconType } aria-hidden='true'>
            <use xlinkHref={ iconType }></use>
          </svg>
        )
      }
    }

    return iconNode
    // return h(
    //   `${componentTag}`,
    //   {
    //     props: props,
    //   },
    //   this.$slots.default
    // )
  },
}
</script>

<style lang="stylus">

// .icon-custom 参见 icon-custom.styl
// .icon-after::after,
// .icon-before::before
//   content ''
//   display inline-block
//   width 12px
//   height 12px
//   color inherit

// .icon-arrow::after
//   width 9px
//   height 9px
//   border-width 1px 1px 0 0
//   border-color currentColor
//   border-style solid
//   transform matrix(0.71, 0.71, -0.71, 0.71, 0, 0)

</style>
