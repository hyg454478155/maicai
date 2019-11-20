<template>
  <div id="navx">
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="(item,index) in nav_list" :key="index"
        :icon="`http://127.0.0.1:4000/nav/`+item.img"
        :text="item.name"
      ></van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  //接受父组件来的数据
  props:{
    nav_list:{
      default:"",
      type:Array
    }
  },
  data(){
    return{
    }
  },
}
</script>
<style scoped>

</style>
