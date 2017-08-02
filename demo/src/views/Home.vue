<template>
<div class="index">
  <!-- <img src="../assets/img/logo.png"> -->
  <div class="hello">
    <h1>index</h1>
    <p>{{ msg }}</p>
  </div>
</div>
</template>

<script>
const message = 'Welcome to Your Vue.js App'
export default {
  name: 'Home',
  data () {
    return {
      msg: message,
    }
  },
}
</script>
