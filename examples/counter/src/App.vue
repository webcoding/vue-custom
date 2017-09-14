<template>
  <div>
    <h2>counter 计数器实现</h2>
    <h4>简单示例</h4>
    <div class="box">
      <simple-counter :count="5"></simple-counter>
    </div>
    <h4>使用 store</h4>
    <div class="box">
      <store-counter :count="3"></store-counter>
    </div>
  </div>
</template>

<script>
import SimpleCounter from './simple-counter'
import StoreCounter from './store-counter'
export default {
  components: {
    SimpleCounter,
    StoreCounter,
  },
}
</script>
