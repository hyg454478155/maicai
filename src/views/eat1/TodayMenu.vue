<template>
  <div id="menu">
    <div class="fixed">
    <div class="head">
      今日菜单
    </div>
    <div class="nav">
      <van-tag v-for="(item,index) in typelist" :key="index" plain round @click="change(index)" :color="tagcolor[index]?'#1afa29':''" >{{item}}</van-tag>
    </div>
    </div>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="标签 1">
          <menu1></menu1>
        </van-tab>
        <van-tab title="标签2">
          <menu1></menu1>
        </van-tab>
        <van-tab title="标签3">
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
        <van-tab>
        </van-tab>
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
      tagcolor:[true,false,false,false,false,false,false,false,false,false,false,false],
      active:0
    }
  },
  methods:{
    change(index){
      for(var i=0;i<this.tagcolor.length;i++){
        this.tagcolor[i]=false;
      }
      this.tagcolor[index]=true;
      this.$set(this.tagcolor,index,true);
      this.active=index;
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
  .fixed{
    width:100%;
    background:#fff;
    position:fixed;
    z-index:2;
    top:3.4rem;
  }

</style>
