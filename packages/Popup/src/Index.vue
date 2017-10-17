<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="van-popup" :class="[position ? 'van-popup--' + position : '']">
      <slot></slot>
    </div>
    <div :class="classes" :style="styles"></div>
  </transition>
</template>

<script>
/**
 * Popup 名称
 * @module packages/Popup
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Popup>xxx</Popup>
 */
import PropTypes from 'vue-types'
import Popup from '../../_mixins/popup'
export default {
  name: 'Popup',

  mixins: [Popup],

  props: {
    prefixCls: PropTypes.string.def('popup'),
    text: PropTypes.oneOfType([
      String,
      Number,
    ]),
    max: PropTypes.number.def(99),
    overlay: PropTypes.bool,
    lockOnScroll: Boolean,
    closeOnClickOverlay: PropTypes.bool,
    transition: PropTypes.string.def('popup-slide'),
    position: PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left',
    ]),
  },

  data() {
    return {
      currentValue: false,
      currentTransition: this.transition,
    }
  },

  computed: {
    classes() {
      const {
        prefixCls,
        position,
      } = this.$props

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${position}`]: !!position,
      }
    },
  },

  watch: {
    currentValue(val) {
      this.$emit('input', val)
    },

    value(val) {
      this.currentValue = val
    },
  },

  beforeMount() {
    if (this.transition !== 'popup-fade') {
      this.currentTransition = `popup-slide-${this.position}`
    }
  },

  mounted() {
    if (this.value) {
      this.currentValue = true
      this.open()
    }
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
