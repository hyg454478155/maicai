import{
  ADD_GOODS,
  INT_GOODS,
  REDUCE_GOODS
} from './mutation-type'
import Vue from 'vue'

export default {
  //注意:外界传值的参数一定要和定义的参数一致
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
  [INT_GOODS](state,id){
    let shopCart=state.shopCart;
    shopCart[id]['num']++;
  },
  [REDUCE_GOODS](state,id){
    let shopCart=state.shopCart;
    shopCart[id]['num']--;
  }
}