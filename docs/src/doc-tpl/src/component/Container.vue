<template>
  <div :class="['kit-doc-container',{ 'kit-doc-container--with-simulator': hasSimulator }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'doc-container',

  props: {
    hasSimulator: Boolean,
  },
}
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-container {
  display: flex;
  overflow: hidden;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: #fff;
  margin: $kit-doc-padding $kit-doc-padding 50px $kit-doc-padding;

  &--with-simulator {
    margin-right: $kit-doc-simulator-width + $kit-doc-padding * 2;

    @media (max-width: 1300px) {
      margin-right: $kit-doc-simulator-small-width + $kit-doc-padding * 2;
    }
  }
}
</style>
