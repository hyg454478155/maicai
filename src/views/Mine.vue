<template>
  <div id="mine">
    <van-nav-bar title="我的" :fixed=true :border=false style="height:2.5rem"></van-nav-bar>
    <van-cell-group style="margin-top:2.4rem">
      <van-cell style="background-color:#3bba63;color:#fff;" label-class="labelClass" is-link center>
        <template slot="title">
          <!-- 已登录状态 -->
          <div class="personMsg" v-if="isLogin" @click="goToUserCenter">
            <img class="iconImage" :src="user_img.login_icon" alt="">
            <div class="personInfo">
              <span>已经登录</span>
            </div>
          </div>
          <div class="personMsg" v-if="!isLogin">
            <img class="iconImage" :src="user_img.noLogin_icon" alt="">
            <div @click="login">
              立即登录
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 订单相关 -->
    <van-cell-group>
      <van-cell title="我的订单"
                icon="label"
                value="查看全部订单"
                is-link
                @click="goTomyOrder(-1)">
      </van-cell>  
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="order.title"
                       @click="goTomyOrder(index)" />
      </van-grid>    
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="我的优惠券"
                icon="gold-coin"
                :value="isLogin?'2张':''"
                @click="goToMyCouponList"
                is-link />
      <van-cell title="我的收货地址"
                icon="todo-list"
                is-link
                @click="goToMyAddredd" />
    </van-cell-group>
        <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link
                icon="vip-card"
                @click="goToMyVip">
        <template slot="title">
          <span class="custom-title">我的绿卡</span>
          <van-tag type="danger"
                   :round=true>NEW</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
        <van-cell-group style="margin-top:0.4rem">
      <van-cell title="联系客服"
                icon="phone"
                value="客服时间 07:00-22:00"
                is-link />
      <van-cell title="意见反馈"
                icon="comment-circle"
                is-link
                @click="onFeedBack" />
    </van-cell-group>
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {

  data(){
    return{
      //头像
      user_img:{
        login_icon:require('../assets/img/mine/login.jpg'),
        noLogin_icon:require('../assets/img/mine/loginout.jpg')
      },
      //订单状态
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ],
    }
  },
  computed:{
    isLogin(){
      var lastname=localStorage.getItem("key");
      if(lastname==undefined){
        return false
      }else{
        return true
      }
    }
  },
  methods:{
    //跳转到用户个人中心
    goToUserCenter(){
      
    },
    //跳转到登录界面
    login(){
      this.$router.push("login");
    },
    //跳转到我的订单
    goTomyOrder(index){
      var lastname=localStorage.getItem("key");
      console.log(lastname);
      if(lastname!==undefined){
        if(index==3){
          //跳转到售后退款界面
        }else{
          this.$router.push({name:"myOrder",params:{ active :index +1}})
        }
      }else{
        this.login();
      }

    },
    //跳转到我的收货地址
    goToMyAddredd(){

    },
    //跳转到我的优惠券
    goToMyCouponList(){

    },
    //跳转到我的绿卡
    goToMyVip(){

    },
    //意见反馈
    onFeedBack(){

    }
  },
  
}
</script>
<style lang="less" scoped>
#mine {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 3rem;
  .version {
    margin: 0 auto;
    text-align: center;
    font-size: 0.6rem;
    background-color: #ffffff;
    height: 2rem;
    color: grey;
    line-height: 2rem;
  }
  .van-nav-bar {
    background-color: #3bba63;
    font-size: 0.6rem;
  }
  .van-nav-bar__title {
    color: white;
  }
  .personMsg {
    display: flex;
    align-items: center;
    .sex {
      position: absolute;
      top: 3.5rem;
      left: 3.8rem;
      width: 0.1rem;
      height: 0.1rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;
    }
  }

  .van-cell__left-icon {
    color: #45c763;
    font-size: 1.2rem;
  }
}
</style>
