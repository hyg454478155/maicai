<template>
  <div id="details">
    <van-nav-bar title="商品详情" fixed left-arrow @click-left="back"></van-nav-bar>
    <div class="img_div">
      <img :src="`http://127.0.0.1:4000/pro/`+pro_obj.img_url" alt="">
    </div>
    <p class="p_pname">{{pro_obj.pname}}</p>
    <p class="p_details">{{pro_obj.details}}</p>
    <p class="p_price">{{"￥"+Number(pro_obj.price).toFixed(2)}}</p>
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车"/>
      <van-goods-action-button text="加入购物车" type="primary" @click="addCart" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  props:["id"],
  data(){
    return{
      pro_obj:{}
    }
  },
  created(){
    var id=this.id;
    var url="/details";
    var obj={id:id};
    this.axios.get(url,{params:obj}).then(res=>{
      var res=res.data.data[0];
      // console.log(res);
      // this.pro_obj=res.data.data;
      this.pro_obj=res;
    })
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    addCart(){

    }
  }
}
</script>
<style lang="less" scoped>
  #details{
    width:100%;
    .van-nav-bar{
      background-color:#45c763;
    }
    .img_div{
      width:100%;
      margin-top:3rem;
      overflow: hidden;
      img{
        width:100%;
      }
    }
    p{
      margin-left:0.5rem;
    }
    .p_pname{
      font-weight: 800;
      font-size:1.5rem;
    }
    .p_details{
      color:gray;
      font-size:1rem;
    }
    .p_price{
      color:#f37078;
    }
    .van-goods-action{
      width:100%;
      justify-content: space-between;
      .van-goods-action-button{
        flex:0.5;
      }
    }
  }
</style>