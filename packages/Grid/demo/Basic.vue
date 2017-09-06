<template>
  <Page class="page-grid">
    <div class="page-header">
      <h3>栅格系统 <small>grid</small></h3>
    </div>
    <div class="panel">
      <!-- <Row>
        <Col :span="12">col-12</Col>
        <Col :span="12">col-12</Col>
      </Row>
      <Row>
        <Col :span="8">col-8</Col>
        <Col :span="8">col-8</Col>
        <Col :span="8">col-8</Col>
      </Row>
      <Row>
        <Col :span="6">col-6</Col>
        <Col :span="6">col-6</Col>
        <Col :span="6">col-6</Col>
        <Col :span="6">col-6</Col>
      </Row> -->
    </div>
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
.page-grid .panel{
  padding: 16px;
}
</style>
