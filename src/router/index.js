import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/home'
import Product from '../views/Product'
import Page from '../views/Page'
import Eat from '../views/Eat'
import Cart from '../views/Cart'
import Mine from '../views/Mine'


Vue.use(VueRouter)
const routes = [
  {
    path: '/Login',
    component:Login,
  },
  {
    path: '/',
    component:Home,
    children:[
      {path:"/",component:Page},
      {path:"/Product",component:Product},
      {path:"/Eat",component:Eat},
      {path:"/Cart",component:Cart,beforeEnter: (to, from, next) => {
        if(localStorage.getItem("key")){
          next();
          return
        }
        next("/login");
       
      }},
      {path:"/Mine",component:Mine},
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
