<template>
  <div>
    <form id="search-form" v-on:submit.prevent="fetchData()">
      <input
        type="text"
        ref="inputSearch"
        id="search-query-nav"
        class="search-query"
        v-model.trim="user"
        @keydown.enter="fetchData()"
        autocomplete="off"
        placeholder="github user"
      >
      <button class="btn btn-search">搜索</button>
    </form>
    <h3>{{user}} 相关信息</h3>
    <p>
      被{{userInfo.followers}}人关注<br>
      关注了{{userInfo.following}}人<br>
      拥有{{userInfo.public_repos}}个共有项目<br>
      拥有{{userInfo.public_gists}}个共有 Gist<br>
      现就职于多维度，现居于上海，于{{userInfo.created_at | time}}时间加入 Github<br>
    </p>
  </div>
</template>

<script>
// https://lodash.com/docs/#throttle
import { throttle, debounce }  from 'lodash'
import * as api from '../services'
export default {
  data() {
    return {
      user: 'cloudyan',
      userInfo: {},
      followers: [],
      following: [],
    }
  },
  filters: {
    time(value) {
      return value && value.split('T')[0]
    },
  },
  created() {
    this.fetchData()
  },

  computed: {
    searchTipList() {
      return (this.focus && this.user && this.users.length)
    },
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    'user': function (newUser) {
      this.user = newUser
      this.fetchData()
    },
    '$route': 'watchQuery',
  },

  methods: {
    watchQuery() {
      this.user = this.$route.query.q || this.$route.params.tag || ''
      this.user = this.user.trim()
    },
    fetchData: debounce(function () {
      this.getUserInfo()
    }, 500),
    async getUserInfo() {
      const res = await api.getUserInfo(this.user)
      console.log(res)
      if (res.err) {
        if (res.status === 403) {
          console.log('访问受限')
        } else if (res.status === 404) {
          console.log('用户不存在')
        } else {
          console.log('网络请求异常')
        }
        return
      }
      this.userInfo = res
      this.getUserFollowers()
      this.getUserFollowing()
    },
    async getUserFollowers() {
      const res = await api.getUserFollowers(this.user)
      console.log(res)
    },
    async getUserFollowing() {
      const res = await api.getUserFollowing(this.user)
      console.log(res)
    },
  },
}
</script>
