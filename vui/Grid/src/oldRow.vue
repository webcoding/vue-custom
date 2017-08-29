
<script>
/**
 * Row 栅格行
 * @module packages/Row
 * @desc 24 栅格系统。
 * @rules
 *   - 只有`col`可以作为`row`的直接元素
 *   - 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列
 * @param {number} [gap] - 栅格间隔, 默认0
 * @param {string} [mode] - 布局模式, 可选 flex
 * @param {number} [align] - flex 布局下的垂直对齐方式：top middle bottom
 * @param {number} [justify] - flex 布局下的水平排列方式：start end center space-around space-between
 *
 * @example
 * <Row >
 *   <Col>...</Col>
 * </Row>
 */
// import VNode from 'Vue'
// console.log(VNode)
import PropTypes from 'vue-types'
import { deepClone } from './deepClone'
console.log(deepClone)
export default {
  name: 'Row',

  props: {
    prefixCls: PropTypes.string.def('row'),
    gap: PropTypes.number.def(0),
    mode: PropTypes.oneOf([
      'flex',
    ]).def('flex'),
    align: PropTypes.oneOf([
      'top',
      'middle',
      'bottom',
    ]).def('top'),
    justify: PropTypes.oneOf([
      'start',
      'end',
      'center',
      'space-around',
      'space-between',
    ]).def('start'),
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
  },

  computed: {
    classes() {
      const {
        prefixCls,
        type,
        align,
        justify,
      } = this.$props

      return {
        [`${prefixCls}`]: !type,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${type}-${justify}`]: type && justify,
        [`${prefixCls}-${type}-${align}`]: type && align,
      }
    },
    rowStyle() {
      const {
        gap,
      } = this.$props
      return gap > 0 ? [
        { marginRight: gap / 2 },
        { marginLeft: gap / 2 },
      ] : {}
    },
  },

  render(h) {
    const { classes, rowStyle } = this
    const { gap } = this.$props
    const $default = this.$slots.default

    // 怎么处理子元素，并把样式附加于子元素
    const cols = Array.map($default, (col) => {
      if (!col) {
        return null
      }
      if (col.$props && gap > 0) {
        const padStyle = {
          paddingLeft: gap / 2,
          paddingRight: gap / 2,
        }
        return h(
          <Col style={ padStyle }>{ col.$slots.default }</Col>
        )
      }
      return col
    })
    return (
      <div class={ classes } style={ rowStyle }>
        { cols }
      </div>
    )
  },
}
</script>

<style lang="stylus">

</style>
