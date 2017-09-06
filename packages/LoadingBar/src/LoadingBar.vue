<template>
  <transition name="fade">
    <div class="loading-bar" :style="wrapStyles" v-show="show">
      <div :class="innerClasses" :style="styles"></div>
    </div>
  </transition>
</template>

<script>
/**
 * LoadingBar
 * @module packages/LoadingBar
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 * @help 参看 router-link
 * @help https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 *
 * @example
 * <LoadingBar>
 *   ...
 * </LoadingBar>
 */
const prefixCls = 'loading-bar'
export default {
  name: 'LoadingBar',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    failedColor: {
      type: String,
      default: 'error',
    },
    height: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      percent: 0,
      status: 'success',
      show: false,
    }
  },
  computed: {
    wrapStyles () {
      return {
        height: `${this.height}px`,
      }
    },
    styles() {
      const styles = {
        width: `${this.percent}%`,
        height: `${this.height}px`,
      }
      if (this.color !== 'primary' && this.status === 'success') {
        styles.backgroundColor = this.color
      }
      if (this.failedColor !== 'error' && this.status === 'error') {
        styles.backgroundColor = this.failedColor
      }
      return styles
    },
    classes() {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
          [`${prefixCls}-inner-failed-color-error`]: this.failedColor === 'error' && this.status === 'error',
        },
      ]
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
