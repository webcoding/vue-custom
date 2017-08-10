<template>
  <Page class="page-btn">
    <div class="page-header">
      <h3>按钮 <small>button</small></h3>
      <p>主按钮和次按钮可独立使用，空心按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。</p>
    </div>
    <Group padded title="普通按钮">
      <h4>默认</h4>
      <Button type="primary">主按钮</Button>
      <Button>默认次按钮</Button>
      <Button type="ghost">空心按钮</Button>
      <Button type="dashed">虚线按钮</Button>
      <Button hollow>镂空</Button>

      <p>要避免并列过多操作让用户选择，在不得不并列多个操作时，需区分操作主次，减轻用户的选择难度。</p>
      <Button type="primary" block>主要操作</Button>
      <Button block>次要操作</Button>

      <h4>尺寸大小</h4>
      <Button size="xs">超小按钮</Button>
      <Button size="sm">小按钮</Button>
      <Button size="md">默认中按钮</Button>
      <Button size="lg">大按钮</Button>

      <h4>形状 - shape="circle"</h4>
      <Button shape="square">默认方角</Button>
      <Button shape="radius">小圆角</Button>
      <Button shape="circle">大圆角</Button>
      <Button shape="round">大圆角</Button>
      <h4>功能 - nativeType="button/reset/submit/menu"</h4>
      <Button>BUTTON</Button>
      <Button nativeType="reset">RESET</Button>
      <Button nativeType="submit">SUBMIT</Button>
      <Button nativeType="menu">MENU</Button>

    </Group>
    <Group padded title="带图标的按钮">
      <Button icon="home">按钮</Button>
      <Button icon="search" shape="circle"></Button>
      <Button icon="search">搜索</Button>
      <Button icon="plus">按钮</Button>
      <Button icon="del">按钮</Button>
    </Group>
    <Group padded title="带数字的按钮">

    </Group>
    <Group padded title="加载中的按钮">
      <Button loading>加载中...</Button>
    </Group>
  </Page>
</template>

<style scope>
.page-btn .btn{
  margin: 0 1em 1em 0;
}
</style>
