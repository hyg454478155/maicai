<template>
  <div>
    <!--搜索栏 -->
    <search></search>
    <!--今日菜单  -->
    <today-menu :typelist="typelist"></today-menu>
  </div>
</template>
<script>
import Search from './eat1/Search'
import TodayMenu from './eat1/TodayMenu'
export default {
  components:{
    Search,
    TodayMenu
  },
  data(){
    return{
      typelist:["家常菜","快手菜","粤菜","私房菜","凉拌","应季菜","无辣不欢","吃点好的","早餐","下饭菜","减肥","宝宝餐"]
    }
  }
}
</script>
<style scoped>
  .div1{
    width:100%;
    position:fixed;
    z-index: 1;
    overflow:hidden;
  }
  .van-search__content{
    background-color:#eee;
  }

</style>
