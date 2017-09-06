<template>
  <Page>
    <SearchBar autofocus v-model="value" :result="filterResult"></SearchBar>
    <div class="page-header">
      <h3>示例页面 <small>SearchBar</small></h3>
    </div>
  </Page>
</template>

<script>
import { FRUIT } from '../../data'

export default {
  // name: 'page-search',

  data() {
    return {
      value: '',
      defaultResult: FRUIT,
    }
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    },
  },
}
</script>

<style scope>
.page-search {
  height: 100%;
}
</style>
