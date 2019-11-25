import{
  ADD_GOODS,
  INT_GOODS,
  REDUCE_GOODS,
  SINGLE_GOODS,
  CLEAR_GOODS,
} from './mutation-type'
import Vue from 'vue'

export default {
  //1.添加商品
  [ADD_GOODS](state,{
      details,
      id,
      img_url,
      pname,
      price
  }){
    let shopCart=state.shopCart;
    //1.1判断商品是否存在
    if(shopCart[id]){
      //如果商品存在让数量+1
      shopCart[id]['num']++;
    }else{
      //1.2不存在则设置默认值
      shopCart[id]={
        'num':1,
        'id':id,
        'name':pname,
        'price':price,
        'smallimg':img_url,
        'checked':true
      }
    }
  },
  //2.商品数量+1
  [INT_GOODS](state,id){
    var newCart=state.shopCart;
    newCart[id].num++;
    state.shopCart=null;
    state.shopCart=newCart;
  },
  //3.商品数量-1
  [REDUCE_GOODS](state,id){
    var newCart=state.shopCart;
    if(state.shopCart[id].num>1){
    newCart[id].num--;
    state.shopCart=null;
    state.shopCart=newCart;}
    else{
      delete newCart[id];
      state.shopCart=null;
      state.shopCart=newCart;
    }   
  },
  //4.设置商品是否为被选中
  [SINGLE_GOODS](state,id){
    if(state.shopCart[id].checked==true){
      var newCart=state.shopCart;
      newCart[id].checked=false;
      state.shopCart=null;
      state.shopCart=newCart;
    }else{
      var newCart=state.shopCart;
      newCart[id].checked=true;
      state.shopCart=null;
      state.shopCart=newCart;
    }   
  },
  //5.删除被选中的商品
  [CLEAR_GOODS](state){
    var newCart=state.shopCart;
    for(let item in newCart){
      if(newCart[item].checked==true){
        delete newCart[item];
      }
    }
    state.shopCart=null;
    state.shopCart=newCart;
  }
}