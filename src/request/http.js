import axios from 'axios';
import QS from 'qs';
import { Toast } from 'vant'
//设置基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/";
//设置请求超时
axios.defaults.timeout=10000;
//post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';