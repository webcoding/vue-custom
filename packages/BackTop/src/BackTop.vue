<template>
  <transition name="fade">
    <div :class="classes" v-show="visible" @click="scrollToTop"><Icon :type="type" /></div>
  </transition>
</template>

<script>
/**
 * BackTop 返回顶部
 * @module packages/BackTop
 * @desc 返回页面顶部的操作按钮。
 * @param {number} [height] - 滚动高度达到此参数值才显示 400
 * @param {number|string} [position] - 距离显示区域右下角距离 30, 30
 * @param {number} [duration] - 滚动动画持续时间，单位 毫秒 1000
 * @param {function} [onClick] - 点击按钮时触发
 * @rules
 *   - 当页面内容区域比较长时；
 *   - 当用户需要频繁返回顶部查看相关内容时。
 * @example
 * <BackTop />
 */
import { on, off } from '@root/shared/dom'
import getScroll from '@root/shared/getScroll'
import getRequestAnimationFrame from '@root/shared/getRequestAnimationFrame'
const reqAnimFrame = getRequestAnimationFrame()
const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return cc / 2 * t * t * t + b
  } else {
    return cc / 2 * ((t -= 2) * t * t + 2) + b
  }
}
function noop() { }
var scrollTarget
function getDefaultTarget() {
  if (!scrollTarget) {
    scrollTarget = document.querySelector('.transition-box')
  }
  return scrollTarget
  // return window
}

export default {
  name: 'BackTop',
  data() {
    return {
      visible: false,
    }
  },
  props: {
    height: {
      type: Number,
      default: 400,
    },
    type: {
      type: String,
      default: 'to-top',
    },
    // target: {
    //   type: Object,
    //   default: document.querySelector('.transition-box'),
    // },
    // onClick: {
    //   type: Function,
    //   defalut: noop,
    // },
  },
  computed: {
    classes() {
      const { prefixCls = 'back-top' } = this
      return {
        [`${prefixCls}`]: true,
      }
    },
  },
  methods: {
    onClick() {
      console.log('滚动到顶部了')
    },
    getCurrentScrollTop() {
      const getTarget = getDefaultTarget()
      const targetNode = getTarget
      if (targetNode === window) {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
      }
      return targetNode.scrollTop
    },

    scrollToTop(e) {
      const scrollTop = this.getCurrentScrollTop()
      const startTime = Date.now()
      const frameFunc = () => {
        const timestamp = Date.now()
        const time = timestamp - startTime
        this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450))
        if (time < 450) {
          reqAnimFrame(frameFunc)
        }
      }
      reqAnimFrame(frameFunc);

      (this.onClick || noop)(e)
    },

    setScrollTop(value) {
      const getTarget = getDefaultTarget()
      const targetNode = getTarget
      if (targetNode === window) {
        document.body.scrollTop = value
        document.documentElement.scrollTop = value
      } else {
        targetNode.scrollTop = value
      }
    },

    handleScroll() {
      console.log('scroll')
      const { height, target = getDefaultTarget() } = this
      const scrollTop = getScroll(target, true)
      console.log(scrollTop)
      this.visible = scrollTop > height
    },
  },

  mounted: function () {
    console.log('mounted')
    const getTarget = getDefaultTarget()
    this.scrollEvent = on(getTarget, 'scroll', this.handleScroll)
    this.handleScroll()
  },

  beforeDestroy: function () {
    console.log('beforeDestroy')
    const getTarget = getDefaultTarget()
    this.scrollEvent = off(getTarget, 'scroll', this.handleScroll)
    this.handleScroll()
  },
}
</script>

<style lang="stylus">
@import "../../style/fn";
/* @import "./style"; */

// .{$ns}back-top
//   position: fixed;
//   z-index: 10;
//   right: 15px;
//   bottom: 15px;
//   display: inline-block;
//   width: 30px;
//   height: 30px;
//   line-height: 30px;
//   text-align: center;
//   font-size: 20px;
//   background: rgba(255, 255, 255, 0.5);
//   border: 1px solid #ddd;
</style>
