<template>
  <Page class="page-alert">
    <div class="page-header">
      <h3>Alert<small>警告提示</small></h3>
    </div>
    <Group padded>
      <Alert message="Success Text" type="success" />
    </Group>
  </Page>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {},
  components: {},
}
</script>

<style scope>
.page-alert .alert{
  margin-bottom: 16px;
}
</style>
