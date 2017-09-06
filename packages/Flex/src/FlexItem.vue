<template>
  <div class="flex-item">
    <slot></slot>
  </div>
</template>

<script>
/**
 * FlexItem
 * @module packages/FlexItem
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 *
 * @example
 * <FlexItem>
 *   ...
 * </FlexItem>
 */
export default {
  name: 'FlexItem',
  props: [
  ],
  computed: {
  },
}
</script>

<style lang="stylus">
@import "./style";

</style>
