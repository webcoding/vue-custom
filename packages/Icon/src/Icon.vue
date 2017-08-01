<template>
  <svg class="svg-icon" aria-hidden="true" :style="wrapStyles" :title="type">
    <use :xlink:href="`#${type}`" :style="styles"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  data() {
    return {
      // preloader,
    }
  },
  props: [
    'type',
    'width',
    'height',
    'fill',
    'less',
  ],

  computed: {
    // 目前单位暂时用的 px
    wrapStyles() {
      return [
        this.width ? { width: this.width } : {},
        this.height ? { height: this.height } : {},
      ]
    },
    styles() {
      return [
        this.fill ? { fill: this.fill } : { fill: 'currentColor' },
      ]
    },
  },
}
</script>

<style lang="stylus" scope>
.svg-icon {
  width: 20px;
  height: 20px;
}
</style>
