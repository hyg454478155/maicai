import{
  GET_GOODS,
  SLECTED_GOODS
}from './mutation-type'
export default{
  [GET_GOODS](state){
    return state.shopCart
  },
  //获取被选中商品的长度
  [SLECTED_GOODS](state){
    var length=0;
    var cart=state.shopCart;
    Object.values(cart).forEach(
      (goods,index)=>{
        if(goods.checked){
          length++;
        }
    })
    return length;
  }
}