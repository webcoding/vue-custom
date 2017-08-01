<template>
  <Page class="page-field">
    <div class="page-header">
      <h3>表单面板 <small>field</small></h3>
      <p>用于输入及展示表单类型数据</p>
    </div>
    <Group padded>
      <p>目前还需要处理的问题，1、布局问题，要更良好一些 2、增加必填项标记 3、验证输入信息及提升错误及警告等</p>
    </Group>
    <Group title="各种 Input 输入框，以及验证等">
      <Field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></Field>
      <Field label="用户名" value="显示表单信息" readonly></Field>
      <Field label="邮箱" placeholder="请输入邮箱" type="email"></Field>
      <Field label="密码" placeholder="请输入密码" type="password"></Field>
      <Field label="手机号" placeholder="请输入手机号" type="tel"></Field>
      <Field label="网站" placeholder="请输入网址" type="url"></Field>
      <Field label="数字" placeholder="请输入数字" type="number"></Field>
      <Field label="生日" placeholder="请输入生日" type="date"></Field>
      <Field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></Field>
    </Group>
    <Group title="">
      <Field placeholder="登录邮箱" type="email"></Field>
      <Field placeholder="密码" type="password"></Field>
    </Group>
    <Group title="">
      <Field label="邮箱" placeholder="成功状态" state="success"></Field>
      <Field label="邮箱" placeholder="失败状态" state="error"></Field>
      <Field label="邮箱" placeholder="警告状态" state="warning"></Field>
    </Group>
    <Group title="">
      <Field label="验证码" placeholder="输入验证码">
        <!-- <img src="../assets/100x100.png" height="48px" width="100px"> -->
      </Field>
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
.field-demo .field{
  margin-right: 0.5rem;
}
</style>
