<template>
  <van-swipe id="swiper" :autoplay="3000" :show-indicators="false" indicator-color="yellow">
      <van-swipe-item v-for="(item,index) in swp_list" :key="index">
        <img :src="require('../../assets/img/home/swp/'+item)" alt="">
      </van-swipe-item>

  </van-swipe>
</template>
<script>
export default {
  //接受父组件传过来的数据
  props:{
    swp_list:{
      default:"",
      type:Array
    }
  },
  data(){
    return{
      
    }
  }
}
</script>
<style scoped>
  #swiper{
    padding-top:3rem;
    width:95%;
    height:10rem;
    border-radius: 1rem;
    margin-left:2.5%;
  }
  img{
    width:100%;
    height:100%;
  }

</style>

