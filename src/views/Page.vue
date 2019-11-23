<template>
  <div id="page">
    <div class="head">
      <!--头部搜索框 -->
      <search></search>
      <!--轮播图 -->
      <show :swp_list="swp_list"></show>
      <!-- tip  -->
      <tip></tip>
    </div>
    <navx :nav_list="nav_list"></navx>
    <vip></vip>
    <flash :pro_list="pro_list"></flash>
    <!-- 商品列表模块 -->
    <tabber :pro_list="pro_list"></tabber>
  </div>   
</template>
<script>
import Search from "./page1/Search"
import Show from "./page1/Show"
import Tip from "./page1/Tip"
import Navx from "./page1/Navx"
import Vip from "./page1/Vip"
import Flash from "./page1/Flash"
import Tabber from "./page1/Tabber"
export default {
  data(){
    return{
      swp_list:["1.png","2.png","3.png","4.png"],
      nav_list:[
        {name:"安心蔬菜",img:"1.jpg"},
        {name:"豆制品",img:"2.jpg"},
        {name:"水果",img:"3.jpg"},
        {name:"肉禽蛋",img:"4.jpg"},
        {name:"海鲜水产",img:"5.jpg"},
        {name:"乳品烘培",img:"6.jpg"},
        {name:"营养早餐",img:"7.jpg"},
        {name:"叮咚心选",img:"8.jpg"},
        {name:"米面粮油",img:"9.jpg"},
        {name:"调味品",img:"10.jpg"},
        ],
      pro_list:[]
    }
  },
  //子组件
  components:{
    Search,
    Show,
    Tip,
    Navx,
    Vip,
    Flash,
    Tabber
  },
  methods:{
    getPro(){
      var url="product";
      this.axios.get(url)
      .then(res=>{
        this.pro_list=res.data.data;
      })
    }
  },
  created(){
    this.getPro()
  }
}
</script>
<style scoped>
  #page{
    background-color:"#f5f5f5";
    padding-bottom:3rem;
  }
  .head{
    width:100%;
    background-image: url("http://127.0.0.1:4000/01.png")
  }
</style>
