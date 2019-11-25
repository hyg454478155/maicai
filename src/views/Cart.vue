<template>
  <div id="cart">
    <!-- 购物车头部 -->
    <!-- 头部区域 -->
    <header class="titleWeapper">
      <h4><strong>购物车</strong></h4>
      <div class="claerCart" :style="selectedGoods==0?'color:grey' :'color:#45c763'" @click="clearCart" v-show="!isShow">删除</div>
    </header>
    <!-- 购物车没有商品 -->
    <div class="cartWrapper" >
      <!-- 购物车为空 -->
      <div class="emptyCart" v-show="isShow">
        <img src="@/assets/img/cart/empty.png" alt="">
        <div class="title">购物车空空滴</div>
        <router-link to="/" class="goHome">去逛逛</router-link>
      </div>
      <!-- 购物车有数据 -->
      <div class="contentWrapper" v-show="!isShow">
        <div class="contentWrapperList" v-for="(value,item,index) in shopCart" :key="index">
          <section>
            <div class="shopCartListCon">
              <div class="left">
              <a href="javaScript:;" class="cartCheckBox" :checked="value.checked"
              @click.stop="SINGLE_GOODS(value.id)"
              ></a>
              </div>
              <div class="center">
                <img :src="`http://127.0.0.1:4000/pro/`+value.smallimg" alt="">
              </div>
              <div class="right">
                <a>{{value.name}}</a>
                <div class="bottomContent">
                <p class="shopPrice">{{"￥"+Number(value.price).toFixed(2)}}</p>
                <div class="shopDeal">
                  <span @click="REDUCE_GOODS(value.id)">-</span>
                  <input type="number" disabled v-model="value.num">
                  <span @click="INT_GOODS(value.id)">+</span>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>
      <!-- 提交订单 -->
      <van-submit-bar
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
        v-show="!isShow"
        >
        <van-checkbox  v-model="checkAll" checked-color="#45c763">全选</van-checkbox>
      </van-submit-bar>  
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import{ Dialog } from "vant";
export default {
  mounted(){
    console.log(this.SLECTED_GOODS);
  },
  data(){
    return{
      selectedGoods:1,
      checkAll:true,
    }
  },
  computed:{
      isShow(){
        //判断组件是否显示
      if(Object.keys(this.shopCart)==0){
        return true
      }else{
        return false
    }
      },
      totalPrice(){
        var price=0;
        for(let item in this.shopCart){
          var num=this.shopCart[item].num;
          price+=this.shopCart[item].price*num;
        }
        return price*100;
      },
      list(){
        
      },
      ...mapState([
        'shopCart' //购物车数据
      ]),
      ...mapGetters([
        'SLECTED_GOODS' //被选中数量
      ])

  },
  methods:{
    ...mapMutations([
     "INT_GOODS", //购物车内商品数量+1
      "REDUCE_GOODS", //购物车内商品数量-1
      "CLEAR_GOODS",  //清除被选中的商品
      "SINGLE_GOODS"  //设置商品是否被选中
    ]),
    clearCart(){
      //删除选中的商品
      if(this.selectedGoods>0){
        Dialog.confirm({
          title:'温馨提示',
          message:'确认删除选中商品?'
        }).then(()=>{
          this.CLEAR_GOODS();
        }).catch(()=>{

        });
      }
    },
    onSubmit(){
      //提交订单
    alert("订单已提交");
  }
  },


}
</script>
<style lang="less" scoped>
  #cart{
    width:100%;
    height:100%;
    background-color:#f5f5f5;
    .titleWeapper{
      width:100%;
      height:2.6rem;
      background:#fff;
      background-size: 0.1rem 4.4rem;
      position:fixed;
      left:0;
      top:0;
      z-index:999;
      display: flex;
      justify-content: center;
      align-items:center;
    }
    .titleWeapper .claerCart{
      position:absolute;
      right:0.3rem;
      font-size: 0.8rem;
    }
    .cartWrapper{
      width:100%;
      height: 100rem;
      margin-top:2.6rem;
      @media screen and (max-width: 375px) {
        .van-submit-bar {
        bottom: 2.6rem;
        }
      }
      @media screen and (max-width: 320px) {
        .van-submit-bar {
        bottom: 3.2rem;
        }
      }
    @media screen and (max-width: 414px) {
      .van-submit-bar {
        bottom: 2.6rem;
      }
    }
      .emptyCart{
        display:flex;
        flex-direction: column;
        justify-content: center;
        img{
          padding-top:2rem;
          width:50%;
          height:8rem;
          margin:0 auto;
        }
        .title{
          text-align:center;
          padding:0.5rem;
        }
        .goHome{
          margin-top:2rem;
          color:white;
          background-color:#45c763;
          text-align:center;
          margin:0 auto;
          padding:0.5rem;
          width:5rem;
          height:1rem;
          line-height: 1rem;
          border-radius: 1rem;
        }
      }
      .contentWrapper{
        padding-top:0.5rem;
        section{
          background-color:#fff;
          .shopCartListCon{
            display: flex;
            height:6rem;
            border-bottom:0.01rem solid #e0e0e0;
            margin-bottom:0.7rem;
            padding:0.5rem 0;
            justify-content: center;
            align-items:center;
            .left{
              flex:1;
              display:flex;
              a {
                display: inline-block;
                margin-top:0.8rem;
                margin-left:0.5rem;
              }
              .cartCheckBox{
                background:url("../assets/img/cart/shop-icon.png") no-repeat;
                background-size:2.5rem 5rem;
                width:1rem;
                height:1rem;
              }
              .cartCheckBox[checked]{
                background-position: -1.2rem 0;
              }
            }
            .center{
              flex:3;
              img{
                width:100%;
                height:100%;
              }
            }
            .right{
              flex:6;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-left:0.5rem;
              margin-right:0.5rem;
              position:relative;
              a{
                height: 2.2rem;
                line-height:1.2rem;
                overflow: hidden;
                margin-bottom: 0.3rem;
                font-size: 0.8rem;
                color:#000;
              }
            }
          }
          .bottomContent{
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            align-items:center;
            .shopPrice{
              font-size: 0.8rem;
            }
            .shopDeal span{
              display:inline-block;
              width:1rem;
              height: 1.2rem;
              line-height: 1.2rem;
              text-align: center;
              float: left;
            }
            .shopDeal input{
              float:left;
              width:2rem;
              height:1.2rem;
              text-align:center;
              margin:0 0 0.2rem;
              font-size:0.8rem;
              background-color:#f5f5f5;
              border:0;
            }
          }
        }
      }
    }
  }
</style>
