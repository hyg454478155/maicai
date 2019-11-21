<template>
  <div id="menu1">
    <div class="show" v-for="(item,index) of show_list" :key="index">
      <img :src="`http://127.0.0.1:4000/eat/`+item.img_url" alt="">
      <p>{{item.details}}</p>
      <p>{{item.uname}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      show_list:[],
    }
  },
  created(){
    var url="show";
    this.axios.get(url)
    .then(res=>{
      this.show_list=res.data.data;
    })
  }
}
</script>
<style scoped>
  #menu1{
    width:100%;
    background-color:#e6e6e6;
    margin-top:1rem;
    column-count: 2; 
    column-gap:0.75rem;
    column-fill:auto;
    box-sizing: border-box;
    margin-top:4.6rem;
    padding-top:0.2rem;
    padding-left:0.75rem;
    padding-right:0.75rem;
  }
  .show{
    width:100%;
    background-color:#fff;
    border-radius:0.6rem;
    box-shadow:0.2rem 0.2rem 0.2rem #bfbfbf;
  }
  img{
    width:100%;
    border-radius:0.6rem;
  }
  p{
    margin-left:0.8rem;
    font-size:1rem;
  }
</style>
