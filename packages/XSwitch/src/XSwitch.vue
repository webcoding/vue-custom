<template>
  <label class="switch">
    <input class="switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="switch-core" :style="styles" :disabled="disabled"><span v-if="text" class="switch-text" v-text="currentValue ? texts[0] : texts[1]"></span><span class="switch-blank"></span></span>
    <div class="switch-label"><slot></slot></div>
  </label>
</template>

<script>
/**
 * XSwitch
 * @module packages/XSwitch
 * @desc 滑动开关/表单开关
 * @using 在两个互斥对象进行选择，eg：选择开或关。
 * @rules
 *   - 只在 List 中使用
 *   - 避免增加额外的文案来描述当前 XSwitch 的值
 *   - 可调整 XSwitch 的样式来满足 app 的视觉风格
 * @param {string} [name] - XSwitch的 name
 * @param {string} [text] - XSwitch的 text
 * @param {boolean} [value] - 是否默认选中，绑定值，支持双向绑定
 * @param {boolean} [disabled] - 是否不可修改
 * @param {function} [onChange] - change事件触发的回调函数,参数是 value 的值
 * @param {slot} - 显示内容
 *
 * @example
 * <XSwitch v-model="value"></XSwitch>
 */
export default {
  name: 'XSwitch',

  props: {
    name: String,
    text: {
      type: String,
      default: '', // on/off 开/关 ABC/··· 等
      validator: function (value) {
        // 开关提示，有值则必须成对
        return value.length > 0 ? value.indexOf('/') > -1 : true
      },
    },
    complex: String,
    width: {
      type: String,
      default: '', // Number
      validator: function (value) {
        return value ? value > 0 : true
      },
    },
    checked: Boolean,
    value: {
      // 这里能使用一个属性 checked 来做么，可以更简化使用
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      currentValue: this.value || this.checked,
      texts: this.text ? this.text.split('/') : [],
    }
  },

  computed: {
    styles() {
      return [
        this.width ? { width: this.width + 'px' } : {},
      ]
    },
    // classes () {
    //   return [
    //     {
    //       'is-disabled': this.disabled,
    //       'is-plain': this.plain,
    //     },
    //   ]
    // }
  },

  watch: {
    value(val) {
      this.currentValue = val
    },

    currentValue(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="stylus" scope>
@import "../../styles/fn";
@import "./style";


</style>
