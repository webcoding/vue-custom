<template>
  <button
    :class="classes"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick">
    <span class="btn-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="iconfont" :class="'icon-' + icon"></i>
      </slot>
    </span>
    <span class="btn-text"><slot></slot></span>
  </button>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('ui/packages/font/style.css');
// }

/**
 * Button
 * @module packages/Button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [nativeType] - 原生 type 属性，接受 button, reset, submit, menu
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <Button size="large" icon="back" type="primary">按钮</Button>
 */
import PropTypes from 'vue-types'
export default {
  name: 'Button',

  props: {
    prefixCls: PropTypes.string.def('btn'),
    icon: String,
    type: PropTypes.oneOf([
      'normal',
      'primary',
      'dashed',
      'warn',
      'danger',
    ]),
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    disabled: Boolean,
    loading: Boolean,
    hollow: Boolean,
    block: Boolean,
    shape: PropTypes.oneOf([
      'circle',
      'round',
      'radius',
      'square',
    ]).def(),
    nativeType: PropTypes.oneOf([
      'button',
      'reset',
      'submit',
      'menu',
    ]).def('button'),
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
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
@import "./style";

</style>
