<style src="../style/chat.css"></style>
<style>
body {
  font-size: 16px;
}
</style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from './ThreadSection.vue'
import MessageSection from './MessageSection.vue'
export default {
  name: 'App',
  components: {
    ThreadSection,
    MessageSection,
  },
}
</script>
