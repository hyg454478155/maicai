<template>
  <div id="tabberItem">
    <van-tabs v-model="active"
              animated:yes
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
    >
      <!--全部  -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
        </div>
        <pro-item :pro_list="pro_list"></pro-item>
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <pro-item :pro_list="pro_list"></pro-item>
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <pro-item :pro_list="pro_list"></pro-item>
      </van-tab>
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
        <pro-item :pro_list="pro_list"></pro-item>
      </van-tab>
    </van-tabs>  
  </div>
</template>
<script>
import ProItem from "./ProItem"
export default {
  props:{
    pro_list:{
      default:"",
      type:Array
    }
  }
  ,
  data(){
    return{
      active:0,
      itemsTitle:['全部','晚餐','人气','心选']
    }
  },
  components:{
    ProItem
  }
}
</script>
<style scoped>
  #tabberItem{
    width:100%;
  }
</style>
