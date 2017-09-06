<template>
  <Page class="page-abc">
    <div class="page-header">
      <h3>面包屑 <small>Breadcrumb</small></h3>
    </div>

    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
      <BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
      <BreadcrumbItem>An Application</BreadcrumbItem>
    </Breadcrumb>
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
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
