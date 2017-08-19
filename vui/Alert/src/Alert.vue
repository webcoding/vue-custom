<template>
  <transition>
    <div v-show="closing" :class="classes" :style="styles">
      <Icon v-if="icon" :type="icon" />
      <span :class="`${prefixCls}-message`">{{ message }}</span>
      <span :class="`${prefixCls}-desc`">{{ desc }}</span>
    </div>
  </transition>
</template>

<script>
/**
 * Alert 警告提示
 * @module packages/Alert
 * @desc 警告提示，展现需要关注的信息。
 * @rules
 *   - 当某个页面需要向用户显示警告的信息时。
 *   - 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
 * @param {string} [type] - 指定警告提示的样式，有四种选择 info、warning、error、success
 * @param {string} [message] - 警告提示内容
 * @param {string} [desc] - 警告提示的辅助性文字介绍
 * @param {boolean} [showIcon] - 是否显示辅助图标
 * @param {boolean} [closable] - 默认不显示关闭按钮
 * @param {string} [closeText] - 自定义关闭按钮
 * @param {boolean} [top] - 是否用作顶部公告(默认有图标且 type 为 "warning" 样式)
 * @param {function} [onClose] - 关闭时触发的回调函数
 *
 * @example
 * <Alert message="Success Text" type="success" />
 * <Alert message="Warning" type="warning" showIcon />
 */
import PropTypes from 'vue-types'
function noop() { }
export default {
  name: 'Alert',

  props: {
    prefixCls: PropTypes.string.def('alert'),
    type: PropTypes.oneOf([
      'success',
      'info',
      'warning',
      'error',
    ]).def('info'),
    closable: Boolean,
    closeText: String,
    message: String,
    desc: String,
    icon: String,
    onClose: PropTypes.func.def(noop),
    showIcon: Boolean,
    top: Boolean,
  },

  data() {
    return {
      closing: true,
      closed: false,
    }
  },

  computed: {
    iconType() {
      const {
        type,
        desc,
        top,
      } = this.$props
      // top 模式默认为警告
      this.type = top && type === undefined ? 'warning' : type || 'info'
      let iconType = ''
      switch (type) {
        case 'success':
          iconType = 'check-circle'
          break
        case 'info':
          iconType = 'info-circle'
          break
        case 'error':
          iconType = 'cross-circle'
          break
        case 'warning':
          iconType = 'warning-circle'
          break
        default:
          iconType = 'default'
      }
      // use outline icon in alert with description
      if (desc) {
        iconType += '-o'
      }
      return iconType
    },
    closeIcon() {
      // const closeIcon = this.closable ? (
      //   <a @click="handleClose($event)" class="`${prefixCls}-close-icon`">
      //     {closeText || <Icon type="cross" />}
      //   </a>
      // ) : null;
    },
    classes() {
      const {
        prefixCls,
        type,
        desc,
        showIcon,
        top,
      } = this.$props

      const { closing } = this.$data

      // top 模式默认有 Icon
      const isShowIcon = (top && showIcon === undefined) ? true : showIcon
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-close`]: !closing,
        [`${prefixCls}-with-desc`]: !!desc,
        [`${prefixCls}-no-icon`]: !isShowIcon,
        [`${prefixCls}-banner`]: !!top,
      }
    },
    styles() {
      return [
      ]
    },
  },

  methods: {
    handleClose(e) {
      e.preventDefault()
      // let dom = xxx
      // dom.style.height = `${dom.offsetHeight}px`
      // // Magic code
      // // 重复一次后才能正确设置 height
      // dom.style.height = `${dom.offsetHeight}px`

      this.closeing = false
      // (this.onClose || noop)(e)
    },
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
