<template>
  <Page class="page-demo">
    <div class="page-header">
      <h3>分割器/分割线 <small>Divider</small></h3>
    </div>
    <div class="content">
      <div class="box">
        <Divider content="小小分割线"></Divider>
      </div>
      <div class="box">
        <Divider>小小分割线</Divider>
      </div>
      <div class="box">
        <Divider >自定义分割线</Divider>
      </div>
      <div class="box">
        <p>pad 控制四个位置的间隔距离</p>
        <Divider pad="20">pad="20"</Divider>
        <Divider pad="20,1">pad="20,1"</Divider>
        <Divider pad="10,30">pad="10,30"</Divider>
        <Divider pad="20,10,5,50">pad="20,10,5,50"</Divider>
      </div>
    </div>
  </Page>
</template>

<script>
import Divider from '../'
export default {
  data: function () {
    return {
    }
  },
  components: {
    Divider,
  },
  computed: {},
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {},
}
</script>

<style lang="stylus" scope>
.page-demo {
  .content{
    padding: 16px;
  }
  .box {
    margin-bottom: 16px;

    &:nth-child(2){
      background: gray
    }
  }
}
</style>
