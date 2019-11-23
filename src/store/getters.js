import{
  GET_GOODS,
  GET_NUM
}from './mutation-type'
export default{
  [GET_GOODS](state){
    return state.shopCart
  },
  [GET_NUM](state,id){
    return state.shopCart[id];
  }
}