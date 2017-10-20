<template>
  <section v-if="title" class="doc-title">
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'doc-title',

  props: {
    title: String,
  },
}
</script>
