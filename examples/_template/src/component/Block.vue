<template>
  <div class="doc-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'doc-block',
}
</script>

<style lang="stylus">
@import '../style/var';

.doc-block {
  display: flex;
  margin-bottom: 20px;

  .highlight {
    flex: 1;
    box-sizing: border-box;

    pre {
      word-break: break-all;
    }
  }
}
</style>
