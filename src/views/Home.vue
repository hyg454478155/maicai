<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="#1afa29">
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/product" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/eat" icon="smile-o">吃什么</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>
