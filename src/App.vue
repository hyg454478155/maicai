<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
//禁止手机端扩大或缩小手势
window.onload=function(){
  document.addEventListener('touchstart',
  function(){
    if(event.touches.length>1){
      event.preventDefault()
    }
  })
}
document.addEventListener('gesturestart',
function(event){
  event.preventDefault()
})
export default {
  
}
</script>
<style>
#app {
  width:100%;
  height:100%;
}
</style>
