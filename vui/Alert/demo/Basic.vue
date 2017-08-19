<template>
  <Page class="page-alert">
    <div class="page-header">
      <h3>Alert<small>警告提示</small></h3>
    </div>
    <Group padded>
      <Alert message="Info Text" type="info" />
      <Alert message="Success Text" type="success" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />

      <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        :onClose="onClose"
      />
      <Alert message="Error Text"
        desc="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        :onClose="onClose"
      />

      <Alert message="Warning text" top />
      <br />
      <Alert message="Very long warning text warning text text text text text text text" top closable />
      <br />
      <Alert showIcon message="Warning text without icon" top />
      <br />
      <Alert type="error" message="Error text" top />
    </Group>
  </Page>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
  },
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {
    onClose(e) {
      console.log(e, 'I was closed.')
    },

  },
  components: {},
}
</script>

<style scope>
.page-alert .alert{
  margin-bottom: 16px;
}
</style>
