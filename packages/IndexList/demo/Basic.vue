<template>
  <Page>
    <div class="page-header">
      <h3>索引列表 <small>index-list</small></h3>
    </div>
    <div class="group group-index">
      <div class="group"
        v-for="item in alphabet"
        :index="item.initial"
        :key="item.initial"
      >
        <div class="group-header">{{item.initial}}</div>
        <div class="list">
          <Cell v-for="cell in item.cells" :title="cell" :key="cell"></Cell>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import { CONTACT } from '../../data'

export default {
  data() {
    return {
      alphabet: [],
    }
  },

  created() {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
      const cells = CONTACT.filter(name => name[0] === initial)
      this.alphabet.push({
        initial,
        cells,
      })
    })
  },
}
</script>
