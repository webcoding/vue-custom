<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
    <div v-if="fatherComponent == 'home'" >
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style" ></router-link>
    </div>
    <div v-if="fatherComponent == 'item'" >
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="this.$store.state.itemDetail.length > 0">
          <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul>
            <li v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
              <span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
      <span class="submit_item button_style" v-else @click="submitAnswer"></span>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import hub from '../store/hub'

export default {
  name: 'itemcontainer',
  data() {
    return {
      itemId: null,
      choosedNum: null,
      choosedId: null,
    }
  },
  props: ['fatherComponent'],
  computed: mapState({
    itemNum: state => state.itemNum,
    level: state => state.level,
    itemDetail: state => state.itemDetail,
  }),
  methods: {
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null
        this.$store.dispatch('addNum', this.choosedId)
      } else {
        hub.$emit('alertinfo')
        // alert('您还没有选择答案哦')
      }
    },
    chooseType: type => {
      switch (type) {
        case 0: return 'A'
        case 1: return 'B'
        case 2: return 'C'
        case 3: return 'D'
      }
    },
    choosed(type, id) {
      this.choosedNum = type
      this.choosedId = id
    },
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.$store.dispatch('addNum', this.choosedId)
        clearInterval(this.$store.state.timer)
        this.$router.push('score')
      } else {
        hub.$emit('alertinfo')
        // alert('您还没有选择答案哦')
      }
    },
  },
  created() {
    this.$store.dispatch('initializeData')
    console.log('初始化数据')

    if (this.$store.state.itemDetail.length === 0) {
      this.$store.dispatch('getData')
    }
    // document.body.style.backgroundImage = 'url(../assets/img/1-1.jpg)'
  },
}
</script>

<style lang="stylus">
.top_tips{
  position: absolute;
  height: 140px;
  width: 65px;
  top: -26px;
  right: 32px;
  background: url(../assets/img/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip{
    position: absolute;
    left: 10px;
    bottom: 22px;
    height: 14px;
    width: 50px;
    font-size: 12px;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style{
  height: 230px;
  width: 260px;
  background-repeat: no-repeat;
  position: absolute;
  top: 82px;
  left: 20px;
}
.home_logo{
  background-image: url(../assets/img/1-2.png);
  background-size: 263px 100%;
  background-position: right center;
}
.item_back{
  background-image: url(../assets/img/2-1.png);
  background-size: 100% 100%;
}
.button_style{
  display: block;
  height: 42px;
  width: 87px;
  background-size: 100% 100%;
  position: absolute;
  top: 330px;
  left: 50%;
  margin-left: -48px;
  background-repeat: no-repeat;
}
.start{
  background-image: url(../assets/img/1-4.png);
}
.next_item{
  background-image: url(../assets/img/2-2.png);
}
.submit_item{
  background-image: url(../assets/img/3-1.png);
}
.item_list_container{
  position: absolute;
  height: 140px;
  width: 160px;
  top: 48px;
  left: 60px;
  -webkit-font-smoothing: antialiased;
}
.item_title{
  font-size: 13px;
  color: #fff;
  line-height: 14px;
}
.item_list{
  font-size: 0;
  margin-top: 8px;
  width: 200px;
  span{
    display: inline-block;
    font-size: 12px;
    color: #fff;
    vertical-align: middle;
  }
  .option_style{
    height: 14px;
    width: 14px;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 14px;
    text-align: center;
    margin-right: 6px;
    font-size: 10px;
    font-family: 'Arial';
  }
  .has_choosed{
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail{
    width: 150px;
    padding-top: 2px;
  }
}
</style>
