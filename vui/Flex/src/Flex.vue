<template>
  <div :class="classes" >
    <slot></slot>
  </div>
</template>

<script>
/**
 * Flex
 * @module packages/Flex
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 *
 * @example
 * <Flex tag="div">
 *   ...
 * </Flex>
 */
export default {
  name: 'Flex',
  props: [
    'direction',
    'wrap',
    'justify',
    'align',
    'alignContent',
    'children',
    'prefixCls',
  ],
  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes() {
      const { direction, wrap, justify, align, alignContent, prefixCls = 'flex' } = this.$props
      return {
        // [prefixCls as string]: true,
        // [className as string]: className,
        [`${prefixCls}`]: true,
        [`${prefixCls}-align-middle`]: true,
        [`${prefixCls}-dir-row`]: direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

        [`${prefixCls}-nowrap`]: wrap === 'nowrap',
        [`${prefixCls}-wrap`]: wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

        [`${prefixCls}-justify-start`]: justify === 'start',
        [`${prefixCls}-justify-end`]: justify === 'end',
        [`${prefixCls}-justify-center`]: justify === 'center',
        [`${prefixCls}-justify-between`]: justify === 'between',
        [`${prefixCls}-justify-around`]: justify === 'around',

        [`${prefixCls}-align-start`]: align === 'start',
        [`${prefixCls}-align-center`]: align === 'center',
        [`${prefixCls}-align-end`]: align === 'end',
        [`${prefixCls}-align-baseline`]: align === 'baseline',
        [`${prefixCls}-align-stretch`]: align === 'stretch',

        [`${prefixCls}-align-content-start`]: alignContent === 'start',
        [`${prefixCls}-align-content-end`]: alignContent === 'end',
        [`${prefixCls}-align-content-center`]: alignContent === 'center',
        [`${prefixCls}-align-content-between`]: alignContent === 'between',
        [`${prefixCls}-align-content-around`]: alignContent === 'around',
        [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
      }
    },
  },
}
</script>

<style lang="stylus">
@import "../../styles/fn";
/* @import "./style"; */

.flex
  display flex
  align-items center
  overflow-y hidden
  text-align left

  .flex-item
    flex 1
    box-sizing border-box
    min-width 10px
    margin-left 8px

    &:first-child
      margin-left 0

  &.flex-align-middle
    align-items center

  &.flex-dir-row
    flex-direction row
  &.flex-dir-row-reverse
    flex-direction row-reverse
  &.flex-dir-column
    flex-direction column
  &.flex-dir-column-reverse
    flex-direction column-reverse

  &.flex-nowrap
    flex-wrap nowrap
  &.flex-wrap
    flex-wrap wrap
  &.flex-wrap-reverse
    flex-wrap wrap-reverse

  &.flex-justify-start
    justify-content flex-start
  &.flex-justify-end
    justify-content flex-end
  &.flex-justify-center
    justify-content center
  &.flex-justify-between
    justify-content space-between
  &.flex-justify-around
    justify-content space-around

  &.flex-align-start
    align-items flex-start
  &.flex-align-center
    align-items center
  &.flex-align-end
    align-items flex-end
  &.flex-align-baseline
    align-items baseline
  &.flex-align-stretch
    align-items stretch

  &.flex-align-content-start
    align-content flex-start
  &.flex-align-content-end
    align-content flex-end
  &.flex-align-content-center
    align-content center
  &.flex-align-content-between
    align-content space-between
  &.flex-align-content-around
    align-content space-around
  &.flex-align-content-stretch
    align-content stretch

</style>
