<template>
  <Page class="page-Icon">
    <Group padded>
      <template v-for="item in list" >
        <Icon :type="item" :key="item.type" />
      </template>
    </Group>
  </Page>
</template>

<script>
const iconList = [
  'code',
  'menu',
  'app',
  'cart',
  'delete',
  'home',
  'message',
  'share',
  'back',
  'comment',
  'edit',
  'favorite',
  'help',
  'info',
  'less',
  'detail',
  'more',
  'pic',
  'refresh',
  'search',
  'set',
  'success',
  'warning',
  'error',
  'clock',
  'remind',
  'discount',
  'dift',
  'browse',
  'scanning',
  'pin',
  'link',
  'friend',
  'download',
  'card',
  'local',
  'person',
  'home',
  'info',
  'info-circle',
  'warn',
  'waiting',
  'waiting-circle',
  'success',
  'warn',
  'circle',
  'download',
  'cancel',
  'search',
  'clear',
]
export default {
  data() {
    return {
      list: iconList,
    }
  },
}
</script>
<style lang="stylus" scope>
.page-icon .iconfont{
  display: inline-block;
  margin: 8px;
  width: 48px;
  height: 48px;
  font-size: 12px;
  text-align: center;

  &:before{
    display: block;
    font-size: 24px;
    // content: attr(type);
  }
}
</style>
