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

      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon />
      <Alert message="Warning" type="warning" showIcon />
      <Alert message="Error" type="error" showIcon />
      <Alert
        message="success tips"
        desc="Detailed description and advices about successful copywriting."
        type="success"
        showIcon
      />
      <Alert
        message="Informational Notes"
        desc="Additional description and informations about copywriting."
        type="info"
        showIcon
      />
      <Alert
        message="Warning"
        desc="This is a warning notice about copywriting."
        type="warning"
        showIcon
      />
      <Alert
        message="Error"
        desc="This is an error message about copywriting."
        type="error"
        showIcon
      />

      <Alert message="Warning text" banner />
      <br />
      <Alert message="Very long warning text warning text text text text text text text" banner closable />
      <br />
      <Alert showIcon message="Warning text without icon" banner />
      <br />
      <Alert type="error" message="Error text" banner />
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
    onClose(e, el) {
      console.log(e, 'I was closed.')
      setTimeout(function () {
        console.log('关闭后再 show，多次操作、体验感受下交互流畅度')
        el.closing = true
      }, 3000)
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
