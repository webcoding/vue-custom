<template>
  <div class="kit-doc-demo-block">
    <h2 class="kit-doc-demo-block__subtitle">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'doc-demo-block',

  props: {
    title: String,
  },
}
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-demo-block {
  &__title,
  &__subtitle {
    margin: 0;
    font-weight: normal;
  }

  &__title {
    padding: 15px;
    font-size: 16px;
    line-height: 1.5;

    + .kit-doc-demo-block {
      .kit-doc-demo-block__subtitle {
        padding-top: 0;
      }
    }
  }

  &__subtitle {
    font-size: 14px;
    color: $kit-doc-text-light-blue;
    padding: 40px 15px 10px;
  }
}
</style>
