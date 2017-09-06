<template>
  <div :class="classes">
    <img
      class="image-img"
      @load="_load"
      :src="getSrc"
      :alt="alt"
      :title="title"
      :style="styles" />
  </div>
</template>

<script>
/**
 * Image 图片
 * @module packages/Image
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Image>xxx</Image>
 */
import PropTypes from 'vue-types'
const imagePlaceHolder = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
const imageUrl = __DEV__ ? '/api/' : ''
export default {
  name: 'Image',

  props: {
    prefixCls: PropTypes.string.def('Image'),
    src: PropTypes.string.def(imagePlaceHolder),
    keepRatio: PropTypes.bool,
    width: [String, Number],
    height: [String, Number],
    size: [String, Number],
    title: [String, Number],
    alt: [String, Number],
  },

  computed: {
    getSrc() {
      const { src } = this.$props
      // remote 为 true 是网络图片
      const remote = /.(png|jpg|gif|svg)$/ig.test(src)
      if (remote) {
        return imageUrl + src
      } else {
        return src
      }
    },
    classes() {
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
    styles() {
      return [

      ]
    },
  },

  methods: {
    _load ($event) {
      if (this.keepRatio) {
        const img = $event.path[0]
        getSize(img.src).then(({ width, height }) => {
          const ratio = width / height
          if (ratio !== img.width / img.height) {
            // 只处理宽度缩小的情况
            img.height = img.width / ratio
          }
        })
      }
    },
  },
}

function getSize(src) {
  return new Promise((resolve, reject) => {
    var img = new Image()
    img.onload = function () {
      resolve({
        width: img.width,
        height: img.height,
      })
    }
    img.onerror = function () {
      reject(null)
    }
    img.src = src
  })
}
</script>

<style lang="stylus">
@import "./style";

</style>
