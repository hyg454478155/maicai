<template>
  <div class="sch">
    <van-search placeholder="输入商品名称" shape="round" :background="BgColor?'white':''"></van-search>
  </div>
</template>
<script>
export default {
  data(){
    return{
      BgColor:false,
    }
  },
  mounted(){
    let that =this;
    that.$nextTick(()=>{
      //监听滚动事件
      window.addEventListener('scroll',
      that.handleScroll
      )
    })
  },
  methods:{
    handleScroll(){
      let scrollE=document.body.scrollTop
          ||document.documentElement.scrollTop;
      if(scrollE >168){
        //添加搜索栏颜色
        this.BgColor=true;
      }else{
        this.BgColor=false;
      }
    }
  }
}
</script>
<style scoped >
  .sch{
    position:fixed;
    left:0;
    top:0;
    z-index:2;
    height:3.125rem;
    line-height:3.125rem;
    width:100%;
    box-sizing:border-box;
  }

</style>
