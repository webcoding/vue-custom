<template>
  <Page class="page-flex">
    <div class="page-header">
      <h3>Flex 布局 <small>Flex</small></h3>
      <p>布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p>
      <p>2009年，W3C提出了一种新的方案----Flex布局，可以简便、完整、响应式地实现各种页面布局。</p>
      <p>Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。</p>
      <p class="note">
        <b>注意</b> 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。</p>
    </div>
    <Group padded>
      <Flex>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
      </Flex>
      <!-- <WhiteSpace size="lg" /> -->
      <Flex>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
      </Flex>
      <Flex>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
        <FlexItem><PlaceHolder /></FlexItem>
      </Flex>

      <h3>wrap 换行</h3>
      <Flex wrap="wrap">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>

      <h3>轴对齐方式</h3>
      <Flex justify="center">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="between">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>

      <WhiteSpace />
      <Flex align="start">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="baseline">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
    </Group>
    <Group title="适用场景" padded>
      <p>Flex布局意为弹性布局，所以需要弹性设计的地方，即是最适用Flex 布局的地方。以下场景，优先选择 Flex 布局</p>
      <ul>
        <li>垂直居中，尤其是不定高</li>
        <li>弹性自适应宽度</li>
      </ul>
    </Group>
  </Page>
</template>

<script>
import Vue from 'vue'
Vue.component('WhiteSpace', {
  template: '<div style="height: 10px;"></div>',
})
Vue.component('PlaceHolder', {
  template: '<div class="placeholder">Item</div>',
  computed: {
    styles() {
      return {
        backgroundColor: '#ebebef',
        color: '#bbb',
        textAlign: 'center',
        height: '30px',
        lineHeight: '30px',
        width: '100%',
      }
    },
  },
})
export default {
  data: function () {
    return {
    }
  },
  components: {
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
.page-flex .flex
  margin-bottom 10px
  .placeholder
    background-color #ebebef
    color #bbb
    text-align center
    height 30px
    line-height 30px
    width 100%

  .inline
    margin 8px 8px 8px 0
    width 80px !important

  .small
    height 14px !important
    line-height 14px !important
</style>
