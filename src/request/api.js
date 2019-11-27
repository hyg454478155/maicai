//api接口统一管理
import { get,post } from './http'
//登录接口
export const login = p =>get('login',p);
//商品展示接口
export const product = p =>get('product',p);