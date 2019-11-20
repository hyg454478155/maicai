<template>
  <div id="flash">
    <div class="titleFlash">
      <div class="title">限时抢购</div>
      <van-count-down :time="time"
                      class="countStyle"
                      format="HH mm ss">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <!--更多按钮 -->
      <div class="more"
           @click="moreClick">更多
      </div>
    </div>
    <!--限时抢购商品 将父组件创来的数据传递给这个子组件 -->
    <flashfood :pro_list="pro_list"></flashfood>
  </div>
</template>
<script>
import Flashfood from "./Flashfood"
export default {
  components:{
    Flashfood
  },
  props:{
    pro_list:{
      default:"",
      type:Array
    }
  },
  data(){
    return{
      //倒计时时间设置
      time:30 * 60 * 1000 * 100
    }
  },
  methods:{
    moreClick () {
      this.$toast('更多')
    }
  }
}
</script>
<style scoped>
  #falsh{
    margin-top:0.625rem;
    padding:1.25rem 0 0.9375rem 0;
    background-color:white;
  }
  .titleFlash{
    margin:0 0.625rem 0.625rem 0.625rem;
    height:1.5625rem;
  }
  .title{
    display: inline-block;
    border-left: 4px #3cb963 solid;
    padding-left: 0.3125rem;
    height: 1.3125rem;
    line-height: 1.3125rem;
    vertical-align: middle;
    font-size: 1.1875rem;
    float:left;
  }
  .item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: black;
}
.countStyle {
  float: left;
  margin-left: 0.7rem;
}
.more{
  color:#3cb963;
  float:right;
  font-size:0.8rem;
}
</style>
