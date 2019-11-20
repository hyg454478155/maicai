<template>
  <div id="menu">
    <div class="head">
      今日菜单
    </div>
    <div class="nav">
      <van-tag v-for="(item,index) in typelist" :key="index" plain round @click=change :data-id="index" :color="tagcolor[index]?'#1afa29':''">{{item}}</van-tag>
    </div>
    <div class="content">
      <van-tabs v-model="active" lazy-render>
      <van-tab title="标签 1">
        <menu1></menu1>
      </van-tab>
      <van-tab title="标签 1">内容 2</van-tab>
</van-tabs>
    </div>
  </div>
</template>
<script>
import Menu1 from './Menu1'
export default {
  props:{
    typelist:{
      default:"",
      type:Array
    }
  },
  data(){
    return{
      tagcolor:[false,false,false,false,false,false,false,false,false,false,false,false],
      active:0
    }
  },
  methods:{
    change(event){
      var idx=event.target.dataset.id;
      console.log(idx);
      this.tagcolor[idx]=true;
    }
  },
  components:{
    Menu1
  }
}
</script>
<style scoped>
  #menu{
    width:100%;
    height:auto;
    padding-top:4rem;
  }
  .head{
    width:80%;
    margin-left: 0.7rem;
    padding-left: 0.4rem;
    height:1.5rem;
    line-height:1.5rem;
    border-left:0.25rem solid #1afa29;
  }
  .nav{
    width:100%;
    box-sizing: border-box;
    padding-left:0.6rem;
    margin-top:0.5rem;
  }
  .nav span{
    margin:0.1rem;
  }
  #menu /deep/ .van-tabs--line .van-tabs__wrap {
    display:none;
  }
</style>
