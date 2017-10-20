<template>
  <router-link v-if="item.path" :class="classes" active-class="active" :to="`${base}/${item.path}`" v-html="itemName" />
  <a v-else-if="item.link" :class="classes" :href="item.link" v-html="itemName"></a>
  <a v-else :class="classes" v-html="itemName"></a>
</template>

<script>
// import { camelCase, upperFirst } from 'lodash'
import { camelCase, upperFirst } from '../util' // 使用简版
export default {
  name: 'doc-nav-link',
  props: ['base', 'item'],

  computed: {
    itemName() {
      const name = (this.item.title || this.item.name).split(' ')
      const cName = upperFirst(camelCase(name[0]))
      return `${cName} <small>${name.slice(1).join(' ')}</small>`
    },

    classes() {
      const { status } = this.$props.item
      return {
        // [`${prefixCls}-${status}`]: !!status,
        [`doc-nav-link`]: true,
        [`is-${status}`]: !!status,
      }
    },
  },
}
</script>

<style lang="stylus">
$color-info     = #108ee9;
$color-success  = #00a854;
$color-warning  = #ffbf00;
$color-error    = #f04134;

.doc-nav-link {
  position: relative;
  &.is{
    // &-done,
    &-todo,
    &-doing {
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 22px;
        margin-top: -2px;
        display: inline-block;
        size: 4px;
        border-radius: 4px;
      }
    }
    &-todo  { &:before { background: $color-error; } }
    &-doing { &:before { background: $color-warning; } }
    // &-done  { &:before { background: $color-success; } }
  }
}
</style>

