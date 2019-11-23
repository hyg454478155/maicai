<template>
  <div>
    <span>123</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      typeArray: [],
      // 路由传递过来的数据 active
      active: this.$route.params.active,
      itemsTitle: ['全部', '待支付', '待收货', '待评价'],
    }
  }
}
</script>
<style lang="less" scoped>
#myOrder {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f5f5f5;
  .van-icon {
    color: #dedede;
  }
}
</style>
