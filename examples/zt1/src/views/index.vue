<template>
  <div class="page-zt-type">
    <!-- <x-header :header="headerData"></x-header> -->
    <div class="zt-type-intro" v-html="ztIntro" @click.stop.prevent="handleClick($event)"></div>
    <div class="zt-type-list clearfix">
      <router-link class="zt-type-item" v-for="item in topicList" :key="item.sku_id" :to="`/index.html#detail?sid=${item.sku_id}`" @click.native="handleClick($event)">
        <div class="img fullbg" :style="`background-image: url(${item.sku_pic})`"></div>
        <div class="text">
          <h4>{{item.sku_name}}</h4>
          <p><dfn class="price">{{item | dealPrice(timestamp) | rmb}}</dfn><del class="price">{{item.market_price | rmb}}</del></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

import device from '../utils/device'
import * as api from '../services'
// import XHeader from '@packages/XHeader'
import list from '../components/list'

export default {
  components: {
    list,
    // XHeader,
  },
  data() {
    return {
      timestamp: 0,
      ztIntro: '',
      topicList: [],
      headerData: {
        title: '数据生成标题',
        left: [
          {
            text: '返回',
            link: '/',
          },
        ],
      },
    }
  },
  created() {
    this.fetchData()
  },
  computed: { },

  beforeRouteLeave (to, from, next) {
    // if (device.isHsq) {
    //   console.log('拦截跳转，only jump app')
    //   return next(false)
    // }
    next()
  },

  filters: {
    // getLink(url) {
    //   // 这里设置 to，以/开头了，这是有问题的
    //   return !device.isInHsq ? 'hsq://detail?params' : url
    // },
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    },
  },

  methods: {
    handleClick(e) {
      console.log(e)
      e.preventDefault()
      // 这里设置 to，以/开头了，这是有问题的
      console.log(device)
      return device.isHsq ? this.jumpApp('hsq://detail?sid=xxx') : this.$router.push(e.currentTarget.getAttribute('href'))
    },
    jumpApp(url) {
      console.log('jump app: ', url)
    },
    fetchData() {
      this.fetchTopicInfo()
      this.fetchTopicList()
    },
    async fetchTopicInfo() {
      const res = await api.getTopicInfo({
        topicCode: '3fe394b62a809b42919969c2205c93b6',
        channel: 'h5',
      })
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        // this.timestamp = res.timestamp
        // this.topicList = data.skuList
        this.ztIntro = decodeURIComponent(data.detail) || ''
        this.headerData.title = data.title
      } else {
        console.log(res.message)
      }
    },
    async fetchTopicList() {
      const res = await api.getTopicList({
        topicCode: '3fe394b62a809b42919969c2205c93b6',
        channel: 'h5',
        needPagination: 1,
        pageNum: 1,
        pageLimit: 20,
      })
      console.log(res)
      if (res.errno === 0) {
        const data = res.data

        this.timestamp = res.timestamp
        this.topicList = data.list
        this.topicList.push(data.list[0])
      } else {
        console.log(res.message)
      }
    },
  },
}
</script>

<style lang="stylus">
$bg-body   = #f1f1f1;

img.full {
  width: 100%;
}

.page-zt-type {
  font-size: 12px;
  background: $bg-body;

  p{
    margin: 0;
  }
}

.zt-type-intro {
  img {
    width: 100%;
  }
}

.zt-type-list {
  padding: 0;
  background: $bg-body;

  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  border-left: 1px solid $bg-body;
}
.zt-type-item {
  box-sizing: border-box;
  flex: 0 0 50%;
  background: #fff;
  // border: 1px solid $bg-body;
  padding: 0 1px 1px 0;
  border-right: 1px solid $bg-body;
  border-bottom: 1px solid $bg-body;
  // float: left;
  // display: inline-block;
  // padding: 4px;
  // width: 50%;
  // background: #fff;
  .img {
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
  }
  .text {
    padding: 8px 8px 4px;
  }
  h4 {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px;

    // lineMax(2);
  }
  dfn {
    font-size: 14px;
  }
}
</style>
