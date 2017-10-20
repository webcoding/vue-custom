<template>
  <div class="tpl-default">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from '../component/vHeader'
export default {
  name: 'tpl-default',

  components: {
    vHeader,
  },
}
</script>
