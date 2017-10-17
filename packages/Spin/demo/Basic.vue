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
        Loading State: <KitSwitch v-model="spinning"></KitSwitch>
      </div>
    </Group>
  </Page>
</template>

<script>
import Spin from '../../Spin'
import Switch from '../../Switch'
import Alert from '../../Alert'
export default {
  components: {
    [Spin.name]: Spin,
    [Alert.name]: Alert,
    [Switch.name]: Switch,
  },
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
