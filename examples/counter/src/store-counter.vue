
<template>
  <div>
    <p>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="addIfOdd">+1 if odd</button>
    <button @click="addAsync">+1 async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd',
  ]),
  methods: mapActions([
    'add',
    'minus',
    'addIfOdd',
    'addAsync',
  ]),
}
</script>
