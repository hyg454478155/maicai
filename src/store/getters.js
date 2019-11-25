import{
  GET_GOODS,
  SLECTED_GOODS
}from './mutation-type'
export default{
  [GET_GOODS](state){
    return state.shopCart
  },
  [SLECTED_GOODS](state){
    var length=0;
    var cart=state.shopCart;
    for(let item in cart){
      if(cart[item].checked==true){
        length++;
      }
    }
    return length;
  }
}