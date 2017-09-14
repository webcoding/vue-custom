<template>
  <div>
    <p>{{ count }}</p>
    <button key="add" @click="add($event, 2)">+2</button>
    <button key="minus" @click="minus($event, 1)">-1</button>
  </div>
</template>

<script>
export default {
  name: 'simple-counter',

  data() {
    return {
      count: 0,
    }
  },

  // props: {
  //   count: Number,
  // },

  computed: {

  },

  methods: {
    add(e, num = 1) {
      this.count += num
    },
    minus(e, num = 1) {
      this.count -= num
    },

  },
}
</script>
