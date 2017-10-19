<template>
  <Page class="page-abc">
    <div class="page-header">
      <h3>示例页面 <small>demo</small></h3>
    </div>
    <Group padded>
    </Group>
  </Page>
</template>

<script>
import QRCode from '../../QRCode'
export default {
  components: {
    [QRCode.name]: QRCode,
  },
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
}
</script>

<style scope>
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
