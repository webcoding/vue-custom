<template>
  <div>grid</div>
</template>

<script>
/**
 * Grid 栅格布局
 * @module packages/Grid
 * @desc 使用 css grid 实现二维布局
 * @rules
 *   - 通过`row`在水平方向建立一组`column`（简写col）
 *   - 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
 *   - 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建
 *   - 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Grid>xxx</Grid>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Grid',
  props: {
    prefixCls: PropTypes.string.def('grid'),
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
// @import "./style";

</style>
