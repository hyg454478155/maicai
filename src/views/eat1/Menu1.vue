<template>
  <div id="menu1">
    123
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
      console.log(this.show_list)
    })
  }
}
</script>
<style scoped>
  #menu1{
    width:100%;
  }
</style>
