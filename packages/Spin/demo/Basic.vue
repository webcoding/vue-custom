<template>
  <Page class="page-spin">
    <div class="page-header">
      <h3>加载中 <small>Spin</small></h3>
    </div>
    <Group padded>
      <Spin size="sm" style="margin-right: 10px;" />
      <Spin style="margin-right: 10px;" />
      <Spin size="lg" />
    </Group>
    <Group padded>
      <div class="example">
        <Spin />
      </div>
    </Group>
    <Group padded>
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          desc="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Group>
    <Group padded>
      <Spin tip="Loading..." :spinning="spinning">
        <Alert
          message="Alert message title"
          desc="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style="margin-top: 16px;">
        Loading State: <XSwitch v-model="spinning"></XSwitch>
      </div>
    </Group>
  </Page>
</template>

<script>
export default {
  data: function () {
    return {
      spinning: false,
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
.page-spin .abc{
  margin-right: 0.5rem;
}
.example{
  text-align: center;
  background: rgba(0,0,0,0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>
