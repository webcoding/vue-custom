<template>
  <span class="avatar"><slot></slot></span>
</template>

<script>
/**
 * Avatar头像
 * @module packages/Avatar
 * @desc 用来代表用户或事物，支持图片、图标或字符展示。
 * @param {string} [shape] - 指定头像的形状 circle|square
 * @param {string} [size] - 设置头像的大小 [default|small|large]
 * @param {string} [src] - 图片类头像的资源地址
 * @param {string} [icon] - 设置头像的图标类型，参考 Icon 组件
 *
 * @example
 * <Avatar>
 *   ...
 * </Avatar>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Avatar',
  props: {
    src: String,
    icon: String,
    prefixCls: String,
    shape: {
      type: String,
      default: 'circle',
      validator(value) {
        return [
          'circle',
          'round',
          'square',
        ].indexOf(value) > -1
      },
    },
    size: {
      type: String,
      default: '',
      validator(value) {
        return [
          'sm',
          'lg',
        ].indexOf(value) > -1
      },
    },
  },
  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes() {
    //   return [
    //     {
    //       'badge-single': this.text && this.text.length === 1,
    //       radius: this.radius,
    //       round: this.round,
    //     },
    //     this.type ? `badge-${this.type}` : '',
    //   ]
    // },
  },
}
</script>

<style lang="stylus">
@import "../../style/fn";
/* @import "./style"; */

</style>
